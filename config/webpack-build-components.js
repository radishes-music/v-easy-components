const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const utils = require('../utils');
const UgliedJsPlugin = require('uglifyjs-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const Components = require('../components.json');

const resolve = (dir) => {
  return path.join(__dirname, '..', dir)
};

const webpackConfig = {
  entry: Components,
  externals: {
    'vue': 'Vue',
  },
  resolve: {
    extensions: ['.js', '.vue', '.json']
  },
  output: {
    path: resolve('/v-easy/bin'),
    publicPath: './',
    filename: '[name].js',
    chunkFilename: '[id].js',
    libraryTarget: 'commonjs2',
  },
  optimization: {
    minimizer: [
      new UgliedJsPlugin({
        uglifyOptions: { //webpack4 版本配置方法
          compress: {
            drop_console: true // 去除product 下的console
          },
        },
        test: /\.js(\?.*)?$/i,
        chunkFilter: (chunk) => {
          return chunk.name !== 'vendor'; // 过滤chunk名字为vendor，避免编译打包静态资源再次被生成影响缓存
        }
      }),
      new TerserJSPlugin({}),
      new OptimizeCSSAssetsPlugin({})
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
        test: /\.json$/,
        loader: 'json-loader'
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
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader',
        ],
      },
      {
        test: /\.css$/,
        use: [
          {loader: 'style-loader'},
          {
            loader: 'css-loader',
          }
        ]
      },
      {
        test: /\.js$/,
        include: resolve('/src'),
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new FriendlyErrorsWebpackPlugin({
      compilationSuccessInfo: {
        messages: [
            `Build Components Compilation Success in v-easy/bin`
        ],
      },
      onErrors: utils.createNotifierCallback(),
      clearConsole: true,
    })
  ]
};

module.exports = webpackConfig;
