import Vue from 'vue'
import Message from './main.vue'

const hasOwnProperty = Object.prototype.hasOwnProperty

export function noop() {}

export function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key)
}

export function isVNode(node) {
  return (
    node !== null &&
    typeof node === 'object' &&
    hasOwn(node, 'componentOptions')
  )
}

let MessageConstructor = Vue.extend(Message)

let instance
let instances = []
let seed = 1

const MessageFn = function(options) {
  if (Vue.prototype.$isServer) return
  options = options || {}
  if (typeof options === 'string') {
    options = {
      message: options
    }
  }
  let userOnClose = options.onClose
  let id = 'message_' + seed++

  options.onClose = function() {
    MessageFn.close(id, userOnClose)
  }
  instance = new MessageConstructor({
    data: options
  })
  instance.id = id
  if (isVNode(instance.message)) {
    instance.$slots.default = [instance.message]
    instance.message = null
  }
  instance.$mount()
  document.body.appendChild(instance.$el)
  let verticalOffset = options.offset || 20
  instances.forEach(item => {
    verticalOffset += item.$el.offsetHeight + 16
  })
  instance.verticalOffset = verticalOffset
  instance.visible = true
  instances.push(instance)
  return instance
}

MessageFn.close = function(id, userOnClose) {
  let len = instances.length
  let index = -1
  for (let i = 0; i < len; i++) {
    if (id === instances[i].id) {
      index = i
      if (typeof userOnClose === 'function') {
        userOnClose(instances[i])
      }
      instances.splice(i, 1)
      break
    }
  }
  if (len <= 1 || index === -1 || index > instances.length - 1) return
  const removedHeight = instances[index].$el.offsetHeight
  for (let i = index; i < len - 1; i++) {
    let dom = instances[i].$el
    dom.style['top'] =
      parseInt(dom.style['top'], 10) - removedHeight - 16 + 'px'
  }
}

export default MessageFn
