export function throttle(fn: () => void, delay: number) {
  let prev = Date.now()
  return function () {
    const now = Date.now()
    if (now - prev > delay) {
      fn()
      prev = Date.now()
    }
  }
}

export function debounce(fn: () => void, delay: number) {
  let timer
  return function () {
    if (timer) clearTimeout(timer)
    timer = setTimeout(fn, delay)
  }
}

export function stopEvent(e: Event) {
  e.preventDefault()
}

export function type(target: unknown) {
  return Object.prototype.toString.call(target)
}

export function isString(target: unknown) {
  return type(target) === '[object String]'
}

export function contain(
  input: string,
  container: string[],
  isCase: boolean = false,
): string[] {
  function isToLower(s: string) {
    if (!isCase) {
      return s.toLocaleLowerCase()
    }
    return s
  }

  function calc(row: string): string {
    let inputIndex = 0,
      rowIndex = 0,
      equal = false
    while (inputIndex < input.length) {
      const inputValue = isToLower(input[inputIndex])
      while (rowIndex < row.length) {
        const rowVaue = isToLower(row[rowIndex])
        rowIndex++
        equal = inputValue === rowVaue
        if (inputValue === rowVaue) {
          break
        }
      }
      inputIndex++
      if (rowIndex === row.length) {
        break
      }
    }
    if (rowIndex <= row.length && inputIndex === input.length && equal) {
      return row
    }
  }

  let result: string[] = []

  for (let i = 0; i < container.length; i++) {
    const value = container[i]
    const calcValue = calc(value)
    if (calcValue) {
      result.push(calcValue)
    }
  }

  return result
}

export const utils = {
  throttle,
  debounce,
  stopEvent,
  type,
  isString,
}

export default utils
