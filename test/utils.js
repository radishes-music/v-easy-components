import { createApp } from 'vue'

let id = 0

export const sleep = function (ms) {
  return new Promise((reslove) => {
    setTimeout(() => reslove(), ms)
  })
}

export const createDiv = function () {
  const dom = document.createElement('div')

  dom.id = 'app' + ++id
  document.body.appendChild(dom)

  return dom
}

export const createElm = function (component, props = {}, mounted = true) {
  const Ctor = createApp({
    ...component,
    props
  })
  const elm = createDiv()
  return Ctor.mount(mounted ? elm : null)
}
