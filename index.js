'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./lib/v-easy-components.common.min.js')
} else {
  module.exports = require('./lib/v-easy-components.common')
}
