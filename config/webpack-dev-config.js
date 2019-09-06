const path =  require('path')

module.exports = {
  entry: {
    index: ['./example/main.js']
  },
  output: {
    filename: '[chunkhash].bundle.[name].js',
  },
  resolve: {
    alias: {
      'v-easy-components': path.resolve(__dirname, '../src/index'),
    }
  }
}
