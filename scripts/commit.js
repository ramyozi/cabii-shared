const { execSync } = require('child_process');
const readline = require('readline');

function run(cmd) {
  execSync(cmd, { stdio: 'inherit' });
}

const msg = process.argv.slice(2).join(' ');

if (msg) {
  run('git add .');
  run(`git commit -m "${msg.replace(/"/g, '\\"')}"`);
  run('git push');
} else {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.question('📝 Commit message: ', (input) => {
    const message = (input || 'update shared').replace(/"/g, '\\"');
    run('git add .');
    run(`git commit -m "${message}"`);
    run('git push');
    rl.close();
  });
}
