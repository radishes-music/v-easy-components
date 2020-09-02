const path = require('path')
const nodeExternals = require('webpack-node-externals')
const Components = require('../components.json')

let externals = {}

const resolve = src => path.resolve(__dirname, '../', src)

Object.keys(Components).forEach(key => {
  externals[
    `v-easy-components/packages/${key}`
  ] = `v-easy-components/lib/${key}`
})

externals['v-easy-components/locale'] = 'v-easy-components/locale'

externals = [
  Object.assign(
    {
      vue: 'vue'
    },
    externals
  ),
  nodeExternals()
]

exports.externals = externals

exports.alias = {
  '@': resolve('src'),
  '@packages': resolve('packages'),
  lib: resolve('lib'),
  vue: '@vue/runtime-dom'
}

exports.extensions = ['.ts', '.js', '.vue', '.json']

exports.modules = [resolve('node_modules')]

exports.vue = {
  root: 'Vue',
  commonjs: 'vue',
  commonjs2: 'vue',
  amd: 'vue'
}
