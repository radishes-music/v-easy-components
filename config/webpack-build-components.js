const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')

const Components = require('../components.json')
const config = require('./config')

const resolve = dir => {
  return path.join(__dirname, '..', dir)
}

const webpackConfig = {
  entry: Components,
  mode: 'production',
  externals: config.externals,
  output: {
    path: resolve('dist'),
    publicPath: './',
    filename: '[name].js',
    libraryTarget: 'commonjs2'
  },
  resolve: config.resolve,
  stats: 'errors-only',
  module: {
    rules: [
      ...config.rules,
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      }
    ]
  },
  plugins: [new ProgressBarPlugin(), new VueLoaderPlugin()]
}

module.exports = webpackConfig
