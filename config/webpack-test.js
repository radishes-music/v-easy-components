const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const config = require('./config')

const resolve = src => path.resolve(__dirname, '../', src)

const webpackConfig = {
  mode: "development",
  entry: {
    index: './src/index.js'
  },
  output: {
    filename: '[name].js',
    chunkFilename: '[name].chunk.js'
  },
  performance: {
    hints: false
  },
  stats: 'errors-only',
  resolve: {
    extensions: config.extensions,
    alias: config.alias,
    modules: config.modules
  },
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
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('packages')]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ]
}

if (!process.env.CI_ENV) {
  webpackConfig.plugins.push(
    new ProgressBarPlugin()
  );
}

module.exports = webpackConfig
