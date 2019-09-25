const path =  require('path')
const config = require('./index')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const { VueLoaderPlugin } = require('vue-loader')

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
    host: HOST || config.dev.host,
    port: PORT || config.dev.port,
    clientLogLevel: 'none',
  },
  stats: {
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      // 'v-easy-components': resolve('src/index.js'),
    }
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
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
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
        ]
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src')]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: './example/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'index.css',
      chunkFilename: '[id].css',
    }),
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
