const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const config = require('./index');

const dev = config.target === 'start';
const resolve = (dir) => {
  return path.join(__dirname, '..', dir)
};

module.exports = {
  rules: [
    {test: /\.txt$/, use: 'raw-loader'},
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
      test: /\.less$/,
      use: [
        dev ? 'style-loader' : MiniCssExtractPlugin.loader,
        { loader: 'css-loader', options: { importLoaders: 1 } },
        'less-loader'
      ]
    },
    {test: /\.ts$/, exclude: /(node_modules)/, use: 'ts-loader'},
    {
      test: /\.css$/,
      use: [
        {
          loader: MiniCssExtractPlugin.loader,
        },
        'css-loader'
      ]
    },
    {
      test: /\.js$/,
      loader: 'babel-loader',
      include: [resolve('src')]
    }
  ]
}
