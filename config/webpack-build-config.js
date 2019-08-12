const path = require('path');
module.exports = {
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
  }
}
