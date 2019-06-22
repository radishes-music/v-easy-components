import '../v-easy/bin/index.css'
// import vEasy from '../v-easy/bin/index'
import vEasy from '@linkorgs/v-easy-ui'
import Vue from 'vue'
import APP from './APP.vue'
Vue.use(vEasy);

new Vue({
  render: h => h(APP)
}).$mount('#app')
