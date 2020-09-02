import VEasy from '@/index'
import '@/theme-chalk/src/index.less'
import { createApp, h } from 'vue'
import APP from './APP.vue'
import router from './router'
import Message from '@packages/message/index'

const app = createApp({
  render: () => h(APP)
})

app.use(router)
app.use(VEasy)
app.mixin({
  setup() {
    return {
      $msg: Message
    }
  }
})
app.mount('#app')
