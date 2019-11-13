const path = require('path')
const webpack = require('webpack')
const { VueLoaderPlugin } = require('vue-loader')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const config = require('./config')

const resolve = (dir) => {
  return path.join(__dirname, '..', dir)
};

module.exports = {
  mode: 'production',
  entry: {
    'v-easy-components.common': './src/index.js',
    'v-easy-components.common.min': './src/index.js'
  },
  output: {
    path: resolve('bin'),
    publicPath: './',
    filename: '[name].js',
    libraryTarget: 'commonjs2',
    libraryExport: 'default',
    library: 'VEASY'
  },
  resolve: {
    extensions: config.extensions,
    alias: config.alias
  },
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
      }),
    ],
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
      {
        test: /\.ts$/,
        exclude: /(node_modules)/,
        use: 'ts-loader'
      },
      {
        test: /\.js$/,
        loader: [
          'babel-loader',
          'eslint-loader'
        ],
        include: [resolve('src'), resolve('packages')]
      },
    ]
  },
  plugins: [
    new ProgressBarPlugin(),
    new VueLoaderPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ]
};
