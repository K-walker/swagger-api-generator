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
  npmLogin(
    'deploy',
    'sdfsdf87778',
    'deploy@billbear.cn',
    'https://nexus.billbear.cn/repository/npm/'
  );

  shelljs.echo('开始发版');
  await delay();
  shelljs.exec(
    'npm publish --registry=https://nexus.billbear.cn/repository/npm/'
  );

  shelljs.echo('推送代码');
  shelljs.exec('git push');
  shelljs.exec('git push --tags');
}

run();
