const path = require('path');
const nodeExternals = require('webpack-node-externals');
const Components = require('../components.json');

let externals = {};

Object.keys(Components).forEach((key) => {
  externals[`v-easy-components/lib/${key}`] = `v-easy-components/bin/${key}`;
});

externals['v-easy-components/locale'] = 'v-easy-components/locale';

externals = [Object.assign({
  vue: 'vue'
}, externals), nodeExternals()];

exports.externals = externals;

exports.alias = {
  'v-easy-component': path.resolve(__dirname, '../')
};

exports.vue = {
  root: 'Vue',
  commonjs: 'vue',
  commonjs2: 'vue',
  amd: 'vue'
};
