import Easy from 'v-easy-components'
import 'v-easy-components/theme-chalk/src/index.less'
import { createApp, h } from 'vue'
import APP from './APP.vue'
import router from './router'

const app = createApp({
  render: () => h(APP)
})

app.use(router)
app.use(Easy)
app.mount('#app')
