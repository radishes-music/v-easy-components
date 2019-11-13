import ImageBox from './ImageBox.vue'
import _Vue from 'vue'

const imageDirective = {}

const ImageBoxInstance = new (_Vue.extend(ImageBox))({el: document.createElement('div')})

let Nodes = {}

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
  let src
  if (typeof binding.value === 'string') {
    src = binding.value
  } else {
    src = el.dataset?.previewSrc || el.src
  }
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
    Nodes[el._NodeID] = nodes
    ImageBoxParent = new (_Vue.extend(ImageBox))({
      el: document.createElement('div'),
    })
    ImageBoxParent['_NodeID'] = el._NodeID
    ImageBoxParents.push(ImageBoxParent)
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
    handlerIndicator.set(item, handlerControl.bind(null, src, ImageBoxParent, index))
    item.addEventListener('click', handlerIndicator.get(item))
  })

}

imageDirective.install = function (Vue) {

  Vue.directive('image', {

    bind: function (el, binding) {
      if (el.tagName === 'IMG' || el.dataset?.previewSrc) {
        targetImage(el, binding)
      } else {
        targetParent(el, binding)
      }
    },

    componentUpdated: function (el, binding) {
      if (el._NodeID) {
        targetParent(el, binding, el._NodeID)
      }
    }
  });

}

export default imageDirective
