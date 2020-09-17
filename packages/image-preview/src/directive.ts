import ImageBox from './main.vue'
import { createApp, reactive, computed } from 'vue'
import { type } from '@/utils/utils'
import { TipDirectiveType } from '../type'

const imageDirective: TipDirectiveType = {}

let NodeID = 0
let ImageBoxParents = []
let handlerIndicator = new WeakMap()

function handlerControl(src, instance, index) {
  if (Array.isArray(src)) {
    src.forEach((item) => {
      if (!instance.src?.includes(item)) {
        instance.addImage(item)
      }
      instance.current = index
    })
  } else if (!instance.src.includes(src)) {
    instance.addImage(src)
    instance.current = instance.src.length - 1
  } else {
    instance.current = instance.src.findIndex((item) => item === src)
  }

  instance.visible = true

  if (!instance._isInsert) {
    document.body.appendChild(instance.$el)
    instance._isInsert = true
  }
}

interface Src {
  default: string
}

function insertSrc(src: string | Src): string {
  return typeof src === 'string' ? src : src.default
}

function targetImage(el, binding) {
  el.classList.add('image-read-parent')
  let src,
    fullScreen,
    stop,
    value = binding.value
  const _type = type(value)
  if (_type === '[object String]') {
    src = [value]
  } else if (_type === '[object Undefined]') {
    // const v = el.dataset?.previewSrc || el.src
    // src = [insertSrc(v)]
    // eslint-disable-next-line no-console
    console.error(`Vue-next does not support dateset binding temporarily`)
  } else if (_type === '[object Object]') {
    src = [insertSrc(value.src)]
    fullScreen = value.fullScreen
    stop = value.stop
  } else if (_type === '[object Module]') {
    src = [insertSrc(value)]
  } else {
    // eslint-disable-next-line no-console
    console.warn(
      `v-image command error, binding value ${_type} is not accepted`
    )
  }
  /* fix isServer */

  const ImageBoxInstance = createApp({
    ...ImageBox,
    setup() {
      const data = reactive(
        Object.assign(
          {
            visible: false,
            targetAnimate: true,
            src: [],
            current: 0,
            isOut: false,
            fullScreen: false,
            stop: false,
          },
          {
            fullScreen: fullScreen,
            stop: stop,
          }
        )
      )

      const computedStyle = computed(() => {
        return {
          transform: `translateX(${data.current * -100}%)`,
        }
      })
      const isDisabledNext = computed(() => data.current < data.src?.length - 1)
      const isDisabledPrev = computed(() => data.current > 0)

      return { ...data, computedStyle, isDisabledNext, isDisabledPrev }
    },
  }).mount(document.createElement('div'))
  el.addEventListener('click', handlerControl.bind(null, src, ImageBoxInstance))
}

function targetParent(el, binding, _NodeID?: number) {
  let ImageBoxParent
  const targetNode = binding?.value?.el || 'img'

  const nodes = el.querySelectorAll(targetNode)

  if (_NodeID) {
    ImageBoxParent = ImageBoxParents[_NodeID]
  } else {
    el._NodeID = ++NodeID // 标记父容器
    ImageBoxParent = createApp(ImageBox).mount(document.createElement('div'))
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

imageDirective.install = (App) => {
  App.directive('image', {
    mounted: function (el, binding) {
      if (el.tagName === 'IMG' || el.dataset?.previewSrc) {
        targetImage(el, binding)
      } else {
        targetParent(el, binding)
      }
    },

    updated: function (el, binding) {
      if (el._NodeID) {
        targetParent(el, binding, el._NodeID)
      }
    },

    unmounted: function (el) {
      if (el._NodeID) {
        const needRemoveElement = el.$instace
        if (
          needRemoveElement.$el &&
          document.body.contains(needRemoveElement.$el)
        ) {
          document.body.removeChild(needRemoveElement.$el)
        }
      }
    },
  })
}

export default imageDirective
