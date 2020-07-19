require('babel-regenerator-runtime') // add regenerator support for async await
require('@/theme-chalk/src/index.less')

// require all test files (files that ends with .spec.js)
const testsContext = require.context('./specs', true, /\.spec$/)
testsContext.keys().forEach(testsContext)
