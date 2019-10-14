const path = require('path')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const {VueLoaderPlugin} = require('vue-loader')
const config = require('./config')

const resolve = (src) => path.resolve(__dirname, '../', src)

module.exports = {
  mode: 'production',
  entry: {
    index: ['./src/index.js']
  },
  output: {
    path: resolve('v-easy-components/bin'),
    publicPath: './',
    filename: 'index.js',
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
    minimizer: [
      new TerserPlugin({
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
      {test: /\.ts$/, exclude: /(node_modules)/, use: 'ts-loader'},
      {test: /\.js$/, loader: 'babel-loader', include: [resolve('src'), resolve('packages')]}
    ]
  },
  plugins: [
    new ProgressBarPlugin(),
    new VueLoaderPlugin(),
    new CopyPlugin([
      {from: resolve('src/'), to: resolve('v-easy-components/'), toType: 'dir'},
      {from: resolve('packages/'), to: resolve('v-easy-components/packages/'), toType: 'dir'},
      {from: resolve('README.md'), to: resolve('v-easy-components/README.md'), toType: 'file', force: true,},
      {from: resolve('package.json'), to: resolve('v-easy-components/package.json'), toType: 'file', force: true,},
    ]),
  ]
}
