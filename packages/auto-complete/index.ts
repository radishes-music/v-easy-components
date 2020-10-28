import { App } from 'vue'
import VEAutoComplete from './src/main.vue'

VEAutoComplete.install = function (Vue: App) {
  Vue.component(VEAutoComplete.name, VEAutoComplete)
}

export default VEAutoComplete
