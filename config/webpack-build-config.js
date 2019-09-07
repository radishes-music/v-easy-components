const path = require('path');
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UgliedJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: {
    index: ['./src/index.js']
  },
  output: {
    path: path.resolve(__dirname, '../v-easy-components/bin'),
    publicPath: './',
    filename: 'index.js',
    chunkFilename: '[id].js',
    libraryTarget: 'umd',
    library: 'VEASY',
    umdNamedDefine: true
  },
  externals: {
    vue: {
      root: 'Vue',
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue'
    }
  },
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
}
