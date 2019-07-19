const config = require('./index');

const HOST = process.env.HOST;
const PORT = process.env.PORT && Number(process.env.PORT);
module.exports = {
  quiet: true,
  host: HOST || config.dev.host,
  port: PORT || config.dev.port,
  clientLogLevel: 'none', // 内联模式，不显示F12控制台信息
  // stats: 'errors-only'
}
