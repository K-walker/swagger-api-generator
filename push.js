const npmLogin = require('npm-cli-login');
const shelljs = require('shelljs');

function delay() {
  return new Promise((r) => {
    setTimeout(r, 3000);
  });
}

async function run() {
  shelljs.echo('开始打包');
  await delay();

  shelljs.exec('git add .');
  shelljs.exec('git commit -m publish');
  shelljs.exec('npm version patch');
  shelljs.exec('npm run build');

  shelljs.echo('开始登入');
  await delay();
  npmLogin('账号', '密码', '邮箱', 'npm仓库地址');

  shelljs.echo('开始发版');
  await delay();
  shelljs.exec('npm publish --registry=npm仓库地址');

  shelljs.echo('推送代码');
  // shelljs.exec('git push');
  shelljs.exec('git push --tags');
}

run();
