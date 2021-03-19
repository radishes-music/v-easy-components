const path = require('path')
const webpack = require('webpack')
const { VueLoaderPlugin } = require('vue-loader')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const config = require('./config')

const resolve = dir => {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  mode: 'production',
  entry: {
    'v-easy-components.common': './src/index.ts',
    'v-easy-components.common.min': './src/index.ts'
  },
  output: {
    path: resolve('dist'),
    publicPath: './',
    filename: '[name].js',
    libraryTarget: 'commonjs2',
    libraryExport: 'default'
  },
  resolve: config.resolve,
  stats: 'errors-only',
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
  externals: config.externals,
  module: {
    rules: config.rules
  },
  plugins: [
    new ProgressBarPlugin(),
    new VueLoaderPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ]
}
