const path = require('path');
const Module = require('./module');
const stats = require('./stats');
const plugins = require('./plugins');
const devServer = require('./devServer');
const { evalSourceMap, eval, sourceMap } = require('./devtool');
const merge = require('webpack-merge');
const dev = require('./webpack-dev-config');
const build = require('./webpack-build-config');
const config = require('./index');

const base = {
  mode: 'production',
  devServer,
  devtool: config.target === 'start' ? evalSourceMap : sourceMap,
  module: {
    rules: Module.rules
  },
  target: 'web', //两种目标宿主, web = 浏览器; node = Node.js
  stats,
  plugins
};
if (config.target === 'start') {
  module.exports = merge(base, {
    ...dev
  })
}

if (config.target === 'build') {
  module.exports = merge(base, {
    ...build,
  })
}

