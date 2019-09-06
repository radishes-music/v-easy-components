// import 'v-easy-components/bin/index.css'
import vEasy from '../src/index'
// import vEasy from 'v-easy-components'
import '../v-easy-components/bin/index.css'
import Vue from 'vue'
import APP from './APP.vue'
// Vue.use(easy)
Vue.use(vEasy)

new Vue({
  render: h => h(APP)
}).$mount('#app')
