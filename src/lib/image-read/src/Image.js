import ImageBox from './ImageBox.vue'
import _Vue from 'vue'

const imageDirective = {}

const ImageBoxInstance = new (_Vue.extend(ImageBox))({el: document.createElement('div'), src: [], visible: false})

let Nodes = {}

let NodeID = 0

let ImageBoxParents = []

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

function targetImage(el) {
  el.classList.add('image-read-parent')
  const src = el.dataset.previewSrc || el.src
  el.addEventListener('click', handlerControl.bind(null, src, ImageBoxInstance))
}

function targetParent(el, binding, _NodeID) {

  let ImageBoxParent
  const targetNode = binding.value ? binding.value.el : 'img'

  const nodes = el.querySelectorAll(targetNode)
  
  if (_NodeID) {
    ImageBoxParent = ImageBoxParents[_NodeID]
  } else {
    el._NodeID = ++NodeID // 标记父容器
    Nodes[el._NodeID] = nodes
    ImageBoxParent = new (_Vue.extend(ImageBox))({
      el: document.createElement('div'),
      src: [],
      visible: false
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
      src.push(item.dataset.previewSrc || item.src)
    }
  })

  nodes.forEach((item, index) => {
    item.removeEventListener('click', handlerControl)
    item.addEventListener('click', handlerControl.bind(null, src, ImageBoxParent, index))
  })

}

imageDirective.install = function (Vue) {

  Vue.directive('image', {

    bind: function (el, binding) {
      if (el.tagName === 'IMG' || el.dataset.previewSrc) {
        targetImage(el)
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
