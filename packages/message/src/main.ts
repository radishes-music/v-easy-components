import { createApp, reactive, onMounted, ComponentPublicInstance } from 'vue'
import Message from './main.vue'

interface ElMessageOptionsInstance extends ComponentPublicInstance {
  id?: string
  verticalOffset?: number
}

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

let instances = []
let seed = 1

const MessageFn = function (options) {
  // TODO
  // if (Vue.prototype.$isServer) return
  options = options || {}
  if (typeof options === 'string') {
    options = {
      message: options,
    }
  }
  let userOnClose = options.onClose
  let id = 'message_' + seed++

  options.onClose = function () {
    MessageFn.close(id, userOnClose)
  }
  const app = {
    ...Message,
    setup() {
      const data = reactive(
        Object.assign(
          {
            visible: false,
            type: 'info',
            message: '',
            html: false,
            duration: 3000,
            showClose: true,
            onClose: null,
            timer: null,
            verticalOffset: 20,
            id: '',
          },
          options,
        ),
      )

      onMounted(() => {
        data.visible = true
      })

      return data
    },
  }

  const div = document.createElement('div')
  const message: ElMessageOptionsInstance = createApp(app).mount(div)

  document.body.appendChild(div)

  message.id = id

  let verticalOffset = options.offset || 20
  instances.forEach((item) => {
    verticalOffset += item.$el.offsetHeight + 16
  })

  message.verticalOffset = verticalOffset

  instances.push(message)
  return message
}

MessageFn.close = function (id, userOnClose) {
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
    const dom = instances[i].$el
    const top = parseInt(dom.style['top'], 10) - removedHeight - 16
    instances[i].verticalOffset = top
  }
}

export default MessageFn
