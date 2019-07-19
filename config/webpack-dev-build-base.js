const path = require('path');
const Module = require('./module');
const stats = require('./stats');
const plugins = require('./plugins');
const devServer = require('./devServer');
const { evalSourceMap } = require('./devtool');
const UgliedJsPlugin = require('uglifyjs-webpack-plugin');
const merge = require('webpack-merge');
const dev = require('./webpack-dev-config');
const build = require('./webpack-build-config');
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const config = require('./index');

const base = {
  mode: process.env.NODE_ENV,
  devServer,
  // devtool: evalSourceMap,
  module: {
    rules: Module.rules
  },
  target: 'web', //两种目标宿主, web = 浏览器; node = Node.js
  stats,
  plugins,
  optimization: {
    minimizer: [
      new UgliedJsPlugin({
        uglifyOptions: { //webpack4 版本配置方法
          compress: {
            drop_console: true // 去除product 下的console
          },
        },
        test: /\.js(\?.*)?$/i,
        chunkFilter: (chunk) => {
          return chunk.name !== 'vendor'; // 过滤chunk名字为vendor，避免编译打包静态资源再次被生成影响缓存
        }
      }),
      new TerserJSPlugin({}),
      new OptimizeCSSAssetsPlugin({})
    ],
  },
};
if (config.target === 'start') {
  module.exports = merge(base, {
    entry: dev.entry,
    output: dev.output
  })
}

if (config.target === 'build') {
  module.exports = merge(base, {
    entry: build.entry,
    output: build.output
  })
}

