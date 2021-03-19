const path = require('path')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
const config = require('./config')

const resolve = src => path.resolve(__dirname, '../', src)

module.exports = {
  mode: 'none', // Support for compressed file packaging
  entry: {
    index: './src/index.ts',
    'index.min': './src/index.ts'
  },
  output: {
    path: resolve('dist'),
    publicPath: './',
    filename: '[name].js',
    libraryTarget: 'umd',
    libraryExport: 'default',
    library: 'VEASY',
    umdNamedDefine: true
  },
  stats: 'errors-only',
  resolve: config.resolve,
  externals: {
    vue: {
      root: 'Vue',
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue'
    }
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        include: /\.min\.js$/,
        terserOptions: {
          output: {
            comments: false
          }
        }
      })
    ]
  },
  module: {
    rules: config.rules
  },
  plugins: [new ProgressBarPlugin(), new VueLoaderPlugin()]
}
