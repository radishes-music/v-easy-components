const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const config = require('./config')

const resolve = src => path.resolve(__dirname, '../', src)

module.exports = {
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
        include: [resolve('example'), resolve('src'), resolve('packages')]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ]
}
