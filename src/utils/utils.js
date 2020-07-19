function throttle(fn, delay) {
  let prev = Date.now()
  return function() {
    const now = Date.now()
    if (now - prev > delay) {
      fn()
      prev = Date.now()
    }
  }
}

function debounce(fn, delay) {
  let timer
  return function() {
    if (timer) clearTimeout(timer)
    timer = setTimeout(fn, delay)
  }
}

function stopEvent(e) {
  e.preventDefault()
}

function type(target) {
  return Object.prototype.toString.call(target)
}

const utils = {
  throttle,
  debounce,
  stopEvent,
  type
}

export { throttle, debounce, stopEvent, type }

export default utils
