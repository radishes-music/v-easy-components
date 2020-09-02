import { createApp } from 'vue'
import Loading from './main.vue'
import { addClass, removeClass } from '@/utils/dom'
import { TipDirectiveType } from '../type'

const loadingDirective: TipDirectiveType = {}

const insertDom = (el, binding) => {
  const modifiers = Object.keys(binding.modifiers)
  let nodeNum = 0
  if (modifiers.length) {
    nodeNum = Number(modifiers[0])
    if (!/^\d+$/.test('' + nodeNum)) {
      /*eslint no-console:0*/
      console.error(
        `v-loading-preload only accepts numeric modifiers and only supports one numeric modifier. \n key: ${modifiers[0]}`
      )
      nodeNum = 0
    }
  } else {
    nodeNum = el.getAttribute('data-loading-text')
  }

  const type = el.getAttribute('data-loading-type') || 'text'
  const d = el.getAttribute('data-loading-diameter') || '16'

  const data = {
    nodeNum,
    type,
    domVisible: !binding.value,
    circleStyle: {
      width: d + 'px',
      height: d + 'px'
    }
  }

  const loading = createApp(Loading, {
    el: el,
    data
  }).mount(document.createElement('div'))

  el.instance = loading
  el.$loading = loading.$el

  el.appendChild(loading.$el)
}

const removeLoadingDom = (el, binding) => {
  if (String(binding.oldValue) === String(binding.value)) {
    return
  }

  if (binding.value) {
    removeClass(el, 'v-easy-loading-parent--relative')
    el.instance.showHide(false)
  } else {
    el.instance.showHide(true)
  }
}

loadingDirective.install = Vue => {
  Vue.directive('loading-preload', {
    mounted: function(el, binding) {
      addClass(el, 've-loading-parent--relative')

      insertDom(el, binding)
    },

    updated: function(el, binding) {
      removeLoadingDom(el, binding)
    }
  })
}

export default loadingDirective
