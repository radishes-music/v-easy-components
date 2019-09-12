const Module = require('./module')
const stats = require('./stats')
const plugins = require('./plugins')
const devServer = require('./devServer')
const merge = require('webpack-merge')
const dev = require('./webpack-dev-config')
const build = require('./webpack-build-config')
const config = require('./index')

const base = {
  mode: 'production',
  devServer,
  module: {
    rules: Module.rules
  },
  target: 'web',
  stats,
  performance: {
    hints: false
  },
  plugins
}
if (config.target === 'start') {
  module.exports = merge(base, {
    ...dev
  })
}

if (config.target === 'build') {
  module.exports = merge(base, {
    ...build,
  })
}

