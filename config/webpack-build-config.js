const path = require('path')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
  mode: 'production',
  entry: {
    index: ['./src/index.js']
  },
  output: {
    path: path.resolve(__dirname, '../v-easy-components/bin'),
    publicPath: './',
    filename: 'index.js',
    chunkFilename: '[id].js',
    libraryTarget: 'umd',
    library: 'VEASY',
    umdNamedDefine: true
  },
  resolve: {
    extensions: ['.js', '.vue', '.json']
  },
  devtool: 'source-map',
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
  plugins: [
    new ProgressBarPlugin(),
  ]
}
