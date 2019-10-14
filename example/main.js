import vEasy from '@/index'
import '@/theme-chalk/src/index.less'
import Vue from 'vue'
import APP from './APP.vue'

Vue.use(vEasy)

new Vue({
  render: h => h(APP)
}).$mount('#app')
