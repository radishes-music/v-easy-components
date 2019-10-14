const path =  require('path')
const configDev = require('./dev-server-config')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
const config = require('./config')

const HOST = process.env.HOST;
const PORT = process.env.PORT && Number(process.env.PORT);

const resolve = (src) => path.resolve(__dirname, '../', src)

module.exports = {
  entry: {
    index: './example/main.js'
  },
  output: {
    filename: '[chunkhash].bundle.[name].js',
    chunkFilename: '[name].bundle.js',
  },
  performance: {
    hints: false
  },
  devServer: {
    quiet: true,
    host: HOST || configDev.dev.host,
    port: PORT || configDev.dev.port,
    clientLogLevel: 'none',
  },
  resolve: {
    extensions: config.extensions,
    alias: config.alias,
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
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: path.posix.join('static', '[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(png|jpg|JPG|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {},
          },
        ],
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } },
          'less-loader',
        ]
      },
      {test: /\.ts$/, exclude: /(node_modules)/, use: 'ts-loader'},
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('packages')]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: './example/index.html',
    }),
    new FriendlyErrorsWebpackPlugin({
      compilationSuccessInfo: {
        messages: [
          `Your application is running here: ${configDev.dev.https ? 'https' : 'http'}://${configDev.dev.host}:${configDev.dev.port}`
        ],
      },
      clearConsole: true,
    }),
  ]
}
