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
    path: resolve('lib'),
    publicPath: './',
    filename: '[name].js',
    libraryTarget: 'commonjs2'
  },
  resolve: {
    extensions: config.extensions,
    alias: config.alias
  },
  stats: 'errors-only',
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          preserveWhitespace: false
        }
      },
      {
        test: /\.otf|ttf|woff2?|eot(\?\S*)?$/,
        loader: 'url-loader'
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader'
          }
        ]
      },
      {
        test: /\.js$/,
        include: [resolve('src'), resolve('packages')],
        loader: ['babel-loader', 'eslint-loader']
      }
    ]
  },
  plugins: [new ProgressBarPlugin(), new VueLoaderPlugin()]
}

module.exports = webpackConfig
