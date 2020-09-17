import directive from './src/directive'

export default {
  install(Vue) {
    Vue.use(Image)
  },
  directive,
}
