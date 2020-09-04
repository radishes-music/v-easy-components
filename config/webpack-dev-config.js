const path = require('path')
const webpack = require('webpack')
const configDev = require('./dev-server-config')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const notifier = require('node-notifier')
const config = require('./config')

const HOST = process.env.HOST
const PORT = process.env.PORT && Number(process.env.PORT)

const resolve = src => path.resolve(__dirname, '../', src)

module.exports = {
  mode: 'development',
  entry: {
    index: './example/main.js'
  },
  output: {
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
    libraryExport: 'default'
  },
  performance: {
    hints: false
  },
  devtool: 'eval-source-map',
  devServer: {
    host: HOST || configDev.dev.host,
    port: PORT || configDev.dev.port,
    historyApiFallback: true
  },
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
  plugins: [
    ...config.plugins,
    new webpack.DefinePlugin({
      __VUE_OPTIONS_API__: true,
      __VUE_PROD_DEVTOOLS__: true
    }),
    new HtmlWebpackPlugin({
      template: './example/index.html'
    }),
    new FriendlyErrorsWebpackPlugin({
      compilationSuccessInfo: {
        messages: [
          `Your application is running here: ${
            configDev.dev.https ? 'https' : 'http'
          }://${configDev.dev.host}:${configDev.dev.port}`
        ]
      },
      onErrors: function(severity, errors) {
        if (severity !== 'error') {
          return
        }
        const error = errors[0]
        notifier.notify({
          title: 'Webpack error',
          message: severity + ': ' + error.name,
          subtitle: error.file || ''
        })
      },
      clearConsole: true
    })
  ]
}
