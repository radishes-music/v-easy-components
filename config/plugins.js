const HtmlWebpackPlugin = require('html-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');
const config = require('./index');
const utils = require('../utils');
const { VueLoaderPlugin } = require('vue-loader');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');

const TARGET = process.env.npm_lifecycle_event;

const resolve = (src) => path.resolve(__dirname, src);


const base = [
  new CleanWebpackPlugin(),
  new VueLoaderPlugin(),
  new FriendlyErrorsWebpackPlugin({
    compilationSuccessInfo: {
      messages: [
        process.env.NODE_ENV === 'production' ?
          `Build Compilation Success` :
          `Your application is running here: ${config.dev.https ? 'https' : 'http'}://${config.dev.host}:${config.dev.port}`
      ],
    },
    onErrors: config.dev.notifyOnErrors
      ? utils.createNotifierCallback()
      : undefined,
    clearConsole: true,
  })
]

let common = [];
if (TARGET === 'start') {
  common = [
    new HtmlWebpackPlugin({
      template: './example/index.html'
    }),
  ]
}

if (TARGET === 'build') {
  common = [
    new CopyPlugin([
      { from: resolve('../src/'), to: resolve('../v-easy/'), toType: 'dir'},
    ]),
    new MiniCssExtractPlugin({
      filename: 'index.css',
      chunkFilename: '[id].css',
    }),
  ]
}

module.exports = base.concat(common);
