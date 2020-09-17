'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./dist/v-easy-components.common.min.js')
} else {
  module.exports = require('./dist/v-easy-components.common')
}
