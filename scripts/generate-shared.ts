import * as fs from 'fs';
import * as path from 'path';
import axios from 'axios';
import { Project } from 'ts-morph';
import * as prettier from 'prettier';

/* CONFIG & PATHS */
const SWAGGER_URL = 'http://localhost:3000/api-json';

function resolveBackendRoot(): string {
  const cliIdx = process.argv.findIndex((a) => a === '--backend');
  if (cliIdx >= 0 && process.argv[cliIdx + 1]) {
    const p = path.resolve(process.argv[cliIdx + 1]);
    if (fs.existsSync(p)) return p;
  }
  if (process.env.CABII_BACKEND && fs.existsSync(process.env.CABII_BACKEND)) {
    return path.resolve(process.env.CABII_BACKEND);
  }
  const guess = path.resolve(__dirname, '../../cabii-backend');
  if (fs.existsSync(guess)) return guess;
  const guess2 = path.resolve(process.cwd(), '../cabii-backend');
  if (fs.existsSync(guess2)) return guess2;
  throw new Error(
    '❌ Could not find cabii-backend. Pass --backend <path> or set CABII_BACKEND env.',
  );
}

const BACKEND_ROOT = resolveBackendRoot();
const BACKEND_SRC = path.join(BACKEND_ROOT, 'src');
const BACKEND_TSCONFIG = path.join(BACKEND_ROOT, 'tsconfig.json');

const OUT = path.resolve(process.cwd(), 'src');
const TYPES_OUT = path.join(OUT, 'types');
const DTO_OUT = path.join(TYPES_OUT, 'dto');
const MODEL_OUT = path.join(TYPES_OUT, 'models');
const ENUM_OUT = path.join(TYPES_OUT, 'enums');
const ROUTES_FILE = path.join(OUT, 'api/routes.ts');
const INDEX_FILE = path.join(TYPES_OUT, 'index.ts');

/* Aides génériques */
const ensure = (d: string) => fs.mkdirSync(d, { recursive: true });

async function format(code: string) {
  const config = (await prettier.resolveConfig(process.cwd())) || {};
  return prettier.format(code, {
    parser: 'typescript',
    singleQuote: true,
    ...config,
  });
}
async function writeFileFormatted(file: string, content: string) {
  const formatted = await format(content);
  fs.writeFileSync(file, formatted, 'utf8');
}

const toKebab = (s: string) =>
  s
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .replace(/[\s_]+/g, '-')
    .toLowerCase();
const toCamel = (s: string) =>
  s.replace(/[-_]([a-z])/g, (_, c) => c.toUpperCase());
const cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

const isUpper = (t: string) => /^[A-Z][A-Za-z0-9_]*$/.test(t);
const isEnumName = (t: string) => /Enum$/.test(t);
const uniq = <T>(arr: T[]) => Array.from(new Set(arr));

/* types intégrés à ne pas importer */
const BUILTIN_TYPES = new Set([
  'Date',
  'Record',
  'Array',
  'Map',
  'Set',
  'Promise',
  'Omit',
  'Pick',
  'Partial',
  'Required',
  'Readonly',
]);

/* normalise le texte de type pour le front: Date -> string ISO */
function normalizeType(t: string): string {
  // ex: Date | null, Date[], Record<string, any>
  // remplace Date par string (ISO)
  return t
    .replace(/\bDate\b/g, 'string')
    .replace(/\bRecord<\s*([^,>]+)\s*,\s*([^>]+)\s*>\b/g, 'Record<$1, $2>');
}

function flattenTypeTokens(typeText: string): string[] {
  const tokens = typeText.split(/[^A-Za-z0-9_]/g).filter(Boolean);
  return uniq(tokens.filter(isUpper));
}

/* Swagger */
async function fetchSwagger() {
  try {
    const res = await axios.get(SWAGGER_URL);
    console.log('🌐 Swagger OK');
    return res.data;
  } catch {
    console.warn(
      '⚠️ Swagger not reachable. Routes + some inference will be skipped.',
    );
    return null;
  }
}

/* Génération */
async function generateFromBackend(swagger: any) {
  console.log('📁 BACKEND_ROOT:', BACKEND_ROOT);
  console.log('📁 BACKEND_SRC :', BACKEND_SRC);
  console.log(
    '📄 tsconfig.json:',
    fs.existsSync(BACKEND_TSCONFIG) ? 'FOUND' : 'MISSING',
  );

  const project = fs.existsSync(BACKEND_TSCONFIG)
    ? new Project({ tsConfigFilePath: BACKEND_TSCONFIG })
    : new Project({ skipAddingFilesFromTsConfig: true });

  if (!fs.existsSync(BACKEND_TSCONFIG)) {
    project.addSourceFilesAtPaths(`${BACKEND_SRC.replace(/\\/g, '/')}/**/*.ts`);
  }

  const allFiles = project.getSourceFiles().map((f) => f.getFilePath());
  console.log(`🔎 Total TS files loaded: ${allFiles.length}`);
  if (allFiles.length) {
    console.log('   e.g.:');
    allFiles.slice(0, 10).forEach((p) => console.log('   -', p));
  }

  ensure(ENUM_OUT);
  ensure(MODEL_OUT);
  ensure(DTO_OUT);

  const norm = (p: string) => p.replace(/\\/g, '/');
  const files = project.getSourceFiles();
  const enumGlobs = files.filter((f) =>
    norm(f.getFilePath()).includes('/domain/enums/'),
  );
  const modelGlobs = files.filter((f) =>
    norm(f.getFilePath()).includes('/domain/entity/'),
  );
  const dtoGlobs = files.filter((f) =>
    norm(f.getFilePath()).includes('/application/dto/'),
  );

  console.log(`🔎 Found enum files:  ${enumGlobs.length}`);
  console.log(`🔎 Found entity files:${modelGlobs.length}`);
  console.log(`🔎 Found dto files:   ${dtoGlobs.length}`);

  if (enumGlobs.length + modelGlobs.length + dtoGlobs.length === 0) {
    throw new Error(
      '❌ No backend files matched expected folders (/domain/enums|entity/, /application/dto/). Check your backend layout or this filter.',
    );
  }

  // Enums
  const enumNames = new Set<string>();
  for (const source of enumGlobs) {
    for (const en of source.getEnums()) {
      const name = en.getName();
      if (!name) continue;
      const file = path.join(ENUM_OUT, `${toKebab(name)}.ts`);
      await writeFileFormatted(file, en.getText());
      enumNames.add(name);
      console.log(`✅ Enum: ${name}`);
    }
  }

  // Models (entities) avec imports
  for (const source of modelGlobs) {
    for (const cls of source.getClasses()) {
      const name = cls.getName();
      if (!name) continue;

      const props = cls.getProperties().map((p) => {
        const raw = p.getType().getText(p);
        return { name: p.getName(), type: normalizeType(raw) };
      });

      const referenced = new Set<string>();
      props.forEach(({ type }) =>
        flattenTypeTokens(type).forEach((t) => referenced.add(t)),
      );
      referenced.delete(name);

      const importLines: string[] = [];
      referenced.forEach((t) => {
        if (BUILTIN_TYPES.has(t)) return;
        if (enumNames.has(t) || isEnumName(t)) {
          importLines.push(`import { ${t} } from '../enums/${toKebab(t)}';`);
        } else if (isUpper(t)) {
          importLines.push(`import { ${t} } from '../models/${toKebab(t)}';`);
        }
      });

      const body = props.map((p) => `  ${p.name}: ${p.type};`).join('\n');
      const code =
        (importLines.length ? importLines.join('\n') + '\n\n' : '') +
        `export interface ${name} {\n${body}\n}`;

      const file = path.join(MODEL_OUT, `${toKebab(name)}.ts`);
      await writeFileFormatted(file, code);
      console.log(`✅ Model: ${name}`);
    }
  }

  // DTOs
  const swaggerSchemas: Record<string, any> =
    swagger?.components?.schemas || {};
  const NEST_EXCEPTIONS = new Set([
    'HttpException',
    'BadRequestException',
    'UnauthorizedException',
    'ForbiddenException',
    'NotFoundException',
    'ConflictException',
    'InternalServerErrorException',
  ]);

  for (const source of dtoGlobs) {
    for (const cls of source.getClasses()) {
      const name = cls.getName();
      if (!name) continue;

      // ignorer les Exceptions côté shared
      const baseName = cls.getExtends()?.getExpression()?.getText() || null;
      if (
        name.endsWith('Exception') ||
        (baseName && NEST_EXCEPTIONS.has(baseName))
      ) {
        continue;
      }

      let base = baseName;

      let rawProps = cls.getProperties().map((prop) => ({
        name: prop.getName(),
        type: normalizeType(prop.getType().getText(prop)),
      }));

      if ((!rawProps || rawProps.length === 0) && swaggerSchemas[name]) {
        const s = swaggerSchemas[name];
        const dataSchema = s?.properties?.data;
        if (dataSchema) {
          const isArray = dataSchema?.type === 'array';
          const ref =
            (isArray ? dataSchema?.items?.$ref : dataSchema?.$ref) || '';
          const model = ref ? ref.split('/').pop() : 'any';
          rawProps = [{ name: 'data', type: isArray ? `${model}[]` : model }];
        }
      }

      const isDerived = !!base;
      const props = rawProps.filter((p) => {
        if (!isDerived) return true;
        return !['statusCode', 'message', 'totalItems'].includes(p.name);
      });

      const imports = new Set<string>();
      if (base) imports.add(`import { ${base} } from './${toKebab(base)}';`);

      const referenced = new Set<string>();
      props.forEach(({ type }) =>
        flattenTypeTokens(type).forEach((t) => referenced.add(t)),
      );
      if (base) referenced.delete(base);

      referenced.forEach((t) => {
        if (BUILTIN_TYPES.has(t)) return;
        if (enumNames.has(t) || isEnumName(t)) {
          imports.add(`import { ${t} } from '../enums/${toKebab(t)}';`);
        } else if (isUpper(t)) {
          // si la ref ressemble à un DTO (se termine par Dto), on importe depuis dto
          if (/Dto$/.test(t) || /ResponseDto$/.test(t)) {
            imports.add(`import { ${t} } from './${toKebab(t)}';`);
          } else {
            imports.add(`import { ${t} } from '../models/${toKebab(t)}';`);
          }
        }
      });

      const classCode =
        `${Array.from(imports).join('\n')}${imports.size ? '\n\n' : ''}` +
        `export class ${name}${base ? ` extends ${base}` : ''} {\n` +
        (props.length
          ? props.map((p) => `  ${p.name}: ${p.type};`).join('\n')
          : '') +
        `\n}`;

      const file = path.join(DTO_OUT, `${toKebab(name)}.ts`);
      await writeFileFormatted(file, classCode);
      console.log(`✅ DTO: ${name}`);
    }
  }
}

/* Routes */
async function generateRoutes(openapi: any) {
  if (!openapi?.paths) {
    console.warn('⚠️ No Swagger paths; routes not generated.');
    return;
  }
  const grouped: Record<string, any> = {};

  for (const [pathKey, methods] of Object.entries(openapi.paths)) {
    for (const [method, def] of Object.entries(methods as any)) {
      const rawTag = (def as any).tags?.[0] || 'general';
      const tag = toCamel(rawTag.toLowerCase());
      grouped[tag] = grouped[tag] || {};

      const segments = pathKey.split('/').filter(Boolean);
      const last = segments[segments.length - 1] || '';
      let name = '';

      if (last.startsWith('{')) {
        const paramName = last.replace(/[{}]/g, '');
        name = `by${cap(paramName)}`;
      } else if (last === rawTag || last === tag) {
        name = 'root';
      } else {
        name = toCamel(last);
      }

      if (!grouped[tag][name])
        grouped[tag][name] = { methods: [], path: pathKey };
      grouped[tag][name].methods.push((method as string).toLowerCase());
    }
  }

  const code = `export const BackendApiRoutes = ${JSON.stringify(grouped, null, 2)} as const;`;
  await writeFileFormatted(ROUTES_FILE, code);
  console.log('✅ Routes generated.');
}

/* Index */
async function generateIndex() {
  const list = (dir: string) =>
    fs.existsSync(dir)
      ? fs
          .readdirSync(dir)
          .filter((f) => f.endsWith('.ts'))
          .map((f) => f.replace(/\.ts$/, ''))
      : [];

  const dtoFiles = list(DTO_OUT);
  const modelFiles = list(MODEL_OUT);
  const enumFiles = list(ENUM_OUT);

  const lines = [
    ...dtoFiles.map((n) => `export * from './dto/${n}';`),
    ...modelFiles.map((n) => `export * from './models/${n}';`),
    ...enumFiles.map((n) => `export * from './enums/${n}';`),
  ];

  await writeFileFormatted(INDEX_FILE, lines.join('\n'));
  console.log('✅ Index file generated.');
}

/* Main */
(async () => {
  console.log('🚀 Generating shared (enums, models, dtos, routes)…');
  console.log('⏱  CWD            :', process.cwd());
  console.log('⏱  Script dir     :', __dirname);

  ensure(TYPES_OUT);
  ensure(DTO_OUT);
  ensure(MODEL_OUT);
  ensure(ENUM_OUT);

  const swagger = await fetchSwagger();

  await generateFromBackend(swagger);
  if (swagger) await generateRoutes(swagger);
  await generateIndex();

  console.log('✅ Done.');
})();
