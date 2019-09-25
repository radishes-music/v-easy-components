// const vEasy = import(/*  */ '../src/index.js')
import vEasy from '../src/index.js'
// import '../src/theme-chalk/lib/index.css'
import '../src/theme-chalk/src/index.less'
// import(/*  */ '../v-easy-components/bin/index.css')
import Vue from 'vue'
import APP from './APP.vue'

Vue.use(vEasy)

new Vue({
  render: h => h(APP)
}).$mount('#app')
