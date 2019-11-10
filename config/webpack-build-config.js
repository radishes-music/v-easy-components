const path = require('path')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const {VueLoaderPlugin} = require('vue-loader')
const config = require('./config')

const resolve = (src) => path.resolve(__dirname, '../', src)

module.exports = {
  mode: 'none', // Support for compressed file packaging
  entry: {
    'index': './src/index.js',
    'index.min': './src/index.js'
  },
  output: {
    path: resolve('bin'),
    publicPath: './',
    filename: '[name].js',
    libraryTarget: 'umd',
    library: 'VEASY',
    umdNamedDefine: true
  },
  stats: 'errors-only',
  resolve: {
    extensions: config.extensions,
    alias: config.alias,
  },
  devtool: 'source',
  externals: {
    vue: {
      root: 'Vue',
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue'
    }
  },
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
      }),
    ],
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
        test: /\.ts$/,
        exclude: /(node_modules)/,
        use: 'ts-loader'},
      {
        test: /\.js$/,
        loader: [
          'babel-loader',
          'eslint-loader'
        ],
        include: [resolve('src'), resolve('packages')]
      }
    ]
  },
  plugins: [
    new ProgressBarPlugin(),
    new VueLoaderPlugin()
  ]
}
