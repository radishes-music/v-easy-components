import components, { version } from '@/index.js'
import '@/theme-chalk/src/index.less'

export default ({ Vue }) => {
  Vue.prototype._v_easy_components_version = version
  Vue.use(components)
}
