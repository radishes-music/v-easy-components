
export const sleep = function(ms) {
  return new Promise((reslove) => {
    setTimeout(() => reslove(), ms)
  })
}
