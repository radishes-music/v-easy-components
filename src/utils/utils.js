function throttle(fn, delay) {
  let prev = Date.now()
  return function () {
    const now = Date.now()
    if (now - prev > delay) {
      fn()
      prev = Date.now()
    }
  }
}

function debounce(fn, delay) {
  let timer
  return function () {
    if (timer) clearTimeout(timer)
    timer = setTimeout(fn, delay)
  }
}

const utils = {
  throttle,
  debounce
}

export {
  throttle,
  debounce
}

export default utils
