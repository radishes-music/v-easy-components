import { createApp, h } from 'vue'

let id = 0

export function sleep (ms) {
  return new Promise((reslove) => {
    setTimeout(() => reslove(), ms)
  })
}

export function createDiv () {
  const dom = document.createElement('div')

  dom.id = 'app' + ++id
  document.body.appendChild(dom)

  return dom
}

export function createElm (component, props = {}, mounted = true) {
  const Ctor = createApp(h(component, props))
  const elm = createDiv()
  return Ctor.mount(mounted ? elm : null)
}

export function toString(target) {
  return target.join('')
}
