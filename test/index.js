require('babel-regenerator-runtime'); // add regenerator support for async await
require('lib/theme-chalk/index.css');

// require all test files (files that ends with .spec.js)
const testsContext = require.context('./specs', true, /\.spec$/);
testsContext.keys().forEach(testsContext);
