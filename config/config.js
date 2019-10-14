const path = require('path');
const nodeExternals = require('webpack-node-externals');
const Components = require('../components.json');

let externals = {};

const resolve = (src) => path.resolve(__dirname, '../', src)

Object.keys(Components).forEach((key) => {
  externals[`v-easy-components/packages/${key}`] = `v-easy-components/bin/${key}`;
});

externals['v-easy-components/locale'] = 'v-easy-components/locale';

externals = [Object.assign({
  vue: 'vue'
}, externals), nodeExternals()];

exports.externals = externals;

exports.alias = {
  '@': resolve('src'),
  '@packages': resolve('packages'),
};

exports.extensions = ['.js', '.vue', '.json']

exports.vue = {
  root: 'Vue',
  commonjs: 'vue',
  commonjs2: 'vue',
  amd: 'vue'
};
