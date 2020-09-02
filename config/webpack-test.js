const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const config = require('./config')

const resolve = src => path.resolve(__dirname, '../', src)

const webpackConfig = {
  mode: 'development',
  entry: {
    index: './src/index.ts'
  },
  output: {
    filename: '[name].js',
    chunkFilename: '[name].chunk.js'
  },
  performance: {
    hints: false
  },
  stats: 'errors-only',
  resolve: config.resolve,
  module: {
    rules: [
      ...config.rules,
      {
        test: /\.less$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          'less-loader'
        ]
      }
    ]
  },
  plugins: [new VueLoaderPlugin()]
}

if (!process.env.CI_ENV) {
  webpackConfig.plugins.push(new ProgressBarPlugin())
}

module.exports = webpackConfig
