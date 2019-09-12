const path =  require('path')
const config = require('./index')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')

module.exports = {
  entry: {
    index: './example/main.js'
  },
  output: {
    filename: '[chunkhash].bundle.[name].js',
    chunkFilename: '[name].bundle.js',
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'v-easy-components': path.resolve(__dirname, '../src/index.js'),
    }
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  plugins: [
    new FriendlyErrorsWebpackPlugin({
      compilationSuccessInfo: {
        messages: [
          `Your application is running here: ${config.dev.https ? 'https' : 'http'}://${config.dev.host}:${config.dev.port}`
        ],
      },
      clearConsole: true,
    }),
  ]
}
