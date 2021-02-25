import ImageBox from './main.vue'
import _Vue from 'vue'
import { type } from '@/utils/utils'

const imageDirective = {}

let NodeID = 0

let ImageBoxParents = []
let handlerIndicator = new WeakMap()

function handlerControl(src, instance, index) {
  if (Array.isArray(src)) {
    src.forEach(item => {
      if (!instance.src.includes(item)) {
        instance.addImage(item)
      }
      instance.current = index
    })
  } else if (!instance.src.includes(src)) {
    instance.addImage(src)
    instance.current = instance.src.length - 1
  } else {
    instance.current = instance.src.findIndex(item => item === src)
  }

  instance.visible = true

  if (!instance._isInsert) {
    document.body.appendChild(instance.$el)
    instance._isInsert = true
  }
}

function targetImage(el, binding) {
  el.classList.add('image-read-parent')
  let src, fullScreen, stop
  const _type = type(binding.value)
  if (_type === '[object String]') {
    src = binding.value
  } else if (_type === '[object Undefined]') {
    src = el.dataset?.previewSrc || el.src
  } else if (_type === '[object Object]') {
    src = binding.value.src
    fullScreen = binding.value.fullScreen
    stop = binding.value.stop
  } else {
    // eslint-disable-next-line no-console
    console.warn(
      `v-image command error, binding value ${_type} is not accepted`
    )
  }
  /* fix isServer */
  const ImageBoxInstance = new (_Vue.extend(ImageBox))({
    el: document.createElement('div'),
    data: {
      fullScreen: fullScreen,
      stop: stop
    }
  })
  el.addEventListener('click', handlerControl.bind(null, src, ImageBoxInstance))
}

function targetParent(el, binding, _NodeID) {
  let ImageBoxParent
  const targetNode = binding?.value?.el || 'img'

  const nodes = el.querySelectorAll(targetNode)

  if (_NodeID) {
    ImageBoxParent = ImageBoxParents[_NodeID]
  } else {
    el._NodeID = ++NodeID // 标记父容器
    ImageBoxParent = new (_Vue.extend(ImageBox))({
      el: document.createElement('div')
    })
    el.$instace = ImageBoxParent
    ImageBoxParent._NodeID = el._NodeID
    ImageBoxParents[el._NodeID] = ImageBoxParent
  }

  let src = []
  nodes.forEach((item, index) => {
    item.classList.add('image-read-parent')
    if (binding.value && typeof binding.value.rule === 'function') {
      src.push(binding.value.rule(item, index))
    } else {
      src.push(item.dataset?.previewSrc || item.src)
    }
  })

  nodes.forEach((item, index) => {
    item.removeEventListener('click', handlerIndicator.get(item))
    handlerIndicator.has(item) && handlerIndicator.delete(item) // Delete the destroyed listener handler
    handlerIndicator.set(
      item,
      handlerControl.bind(null, src, ImageBoxParent, index)
    )
    item.addEventListener('click', handlerIndicator.get(item))
  })
}

imageDirective.install = function(Vue) {
  Vue.directive('image', {
    bind: function(el, binding) {
      if (el.tagName === 'IMG' || el.dataset?.previewSrc) {
        targetImage(el, binding)
      } else {
        targetParent(el, binding)
      }
    },

    componentUpdated: function(el, binding) {
      if (el._NodeID) {
        targetParent(el, binding, el._NodeID)
      }
    },

    unbind: function(el) {
      if (el._NodeID) {
        const needRemoveElement = el.$instace
        if (
          needRemoveElement.$el &&
          document.body.contains(needRemoveElement.$el)
        ) {
          document.body.removeChild(needRemoveElement.$el)
        }
      } /*else {
        if (document.body.contains(ImageBoxInstance.$el)) {
          document.body.removeChild(ImageBoxInstance.$el)
        }
      }*/
    }
  })
}

export default imageDirective
