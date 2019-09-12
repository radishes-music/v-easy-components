const HtmlWebpackPlugin = require('html-webpack-plugin')
const config = require('./index')
const { VueLoaderPlugin } = require('vue-loader')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const CopyPlugin = require('copy-webpack-plugin')
const path = require('path')

const resolve = (src) => path.resolve(__dirname, src)


const base = [
  new VueLoaderPlugin(),
  new MiniCssExtractPlugin({
    filename: 'index.css',
    chunkFilename: '[id].css',
  }),
]

let common = []
if (config.target === 'start') {
  common = [
    new HtmlWebpackPlugin({
      template: './example/index.html',
    }),
  ]
}

if (config.target === 'build') {
  common = [
    new CopyPlugin([
      { from: resolve('../src/'), to: resolve('../v-easy-components/'), toType: 'dir'},
      { from: resolve('../README.md'), to: resolve('../v-easy-components/README.md'), toType: 'file', force: true,},
      { from: resolve('../package.json'), to: resolve('../v-easy-components/package.json'), toType: 'file', force: true,},
    ]),
  ]
}

module.exports = base.concat(common)
