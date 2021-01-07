const shelljs = require('shelljs');

const config = require('./swagger.config.json');

function delay() {
  return new Promise(r => {
    setTimeout(r, 3000);
  });
}

async function run() {
  console.log('开始更新接口文档');
  console.log('文档地址:', config.url);

  await delay();

  try {
    shelljs.exec('yarn swag-ts');
    shelljs.mv('./src/lib/services.ts', './src/services.ts');
    shelljs.rm('-rf', './src/lib');
    console.log('接口文档更新完成');
  } catch (error) {
    console.log('更新失败');
    console.log('检查文档：', config.url);
  }
}

run();
