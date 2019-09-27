const path = require('path')
const webpack = require('webpack')
const { VueLoaderPlugin } = require('vue-loader')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')

const config = require('./config');

const resolve = (dir) => {
  return path.join(__dirname, '..', dir)
};

module.exports = {
  mode: 'production',
  entry: {
    index: ['./src/index.js']
  },
  output: {
    path: resolve('/v-easy-components/bin'),
    publicPath: './',
    filename: 'v-easy-component.common.js',
    chunkFilename: '[id].js',
    libraryTarget: 'commonjs2'
  },
  externals: config.externals,
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
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: path.posix.join('static', '[name].[hash:7].[ext]')
        }
      },
      {test: /\.ts$/, exclude: /(node_modules)/, use: 'ts-loader'},
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src')]
      },
    ]
  },
  plugins: [
    new ProgressBarPlugin(),
    new VueLoaderPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ]
};
