const path = require('path');
const Module = require('./config/module');
const stats = require('./config/stats');
const plugins = require('./config/plugins');
const devServer = require('./config/devServer');
const { evalSourceMap } = require('./config/devtool');
const UgliedJsPlugin = require('uglifyjs-webpack-plugin');
const merge = require('webpack-merge');
const dev = require('./config/webpack-dev-config');
const build = require('./config/webpack-build-config');

const TARGET = process.env.npm_lifecycle_event;

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
      })
    ],
    /*splitChunks: {
      cacheGroups: {
        styles: {
          name: 'styles',
          test: /\.css$/,
          chunks: 'all',
          enforce: true,
        },
      },
    }*/
    /*splitChunks: {
      chunks: 'all',
      minSize: 30000,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      name: true,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/, // 只缓存node_modules
          priority: -10
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    },
    runtimeChunk: {
      name: "manifest", // 构建manifest清单文件，描述了webpack加载文件，无需手动配置，因为HtmlWebpackPlugin已自动在html文件中引用
    },*/
  },
}
// console.log('target:', TARGET);
if (TARGET === 'start') {
  module.exports = merge(base, {
    entry: dev.entry,
    output: dev.output
  })
}

if (TARGET === 'build') {
  module.exports = merge(base, {
    entry: build.entry,
    output: build.output
  })
}

