
module.exports = {
  entry: {
    index: ['./example/main.js']
  },
  output: {
    filename: '[chunkhash].bundle.[name].js',
  },
}