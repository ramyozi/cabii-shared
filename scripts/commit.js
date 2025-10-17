// scripts/commit.js
const { execSync } = require('child_process');
const readline = require('readline');

function run(cmd) {
  execSync(cmd, { stdio: 'inherit' });
}

function hasChanges() {
  try {
    const output = execSync('git status --porcelain').toString().trim();
    return output.length > 0;
  } catch {
    return false;
  }
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('📝 Commit message: ', (msg) => {
  rl.close();

  if (!hasChanges()) {
    console.log('✅ Nothing to commit — skipping commit step.');
    process.exit(0);
  }

  try {
    run('git add .');
    run(`git commit -m "${msg || 'update shared'}"`);
    run('git push');
    console.log('✅ Changes committed & pushed successfully.');
  } catch (err) {
    console.error('❌ Commit or push failed:', err.message);
    process.exit(1);
  }
});
