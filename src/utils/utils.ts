export function throttle(fn, delay) {
  let prev = Date.now()
  return function () {
    const now = Date.now()
    if (now - prev > delay) {
      fn()
      prev = Date.now()
    }
  }
}

export function debounce(fn, delay) {
  let timer
  return function () {
    if (timer) clearTimeout(timer)
    timer = setTimeout(fn, delay)
  }
}

export function stopEvent(e) {
  e.preventDefault()
}

export function type(target) {
  return Object.prototype.toString.call(target)
}

export function isString(target) {
  return type(target) === '[object String]'
}

export const utils = {
  throttle,
  debounce,
  stopEvent,
  type,
  isString,
}

export default utils
