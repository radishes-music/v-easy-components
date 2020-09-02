export const formatCss = function formatCss(value) {
  if (typeof value === 'string') {
    const match = value.match(/\d+/)
    if (match) {
      return match[0] + 'px'
    }
  }
  return value + 'px'
}
