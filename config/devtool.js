/**
 * devtool 值与说明
 * source-map 压缩代码后为了方便调试，生成的js map文件，将错误信息定位到压缩前的源代码。参考（http://www.ruanyifeng.com/blog/2013/01/javascript_source_map.html）
 */
module.exports = {
  eval: 'eval', // 默认值，最快的打包速度，没有模块映射，牺牲细节提升速度。不利于调试
  sourceMap: 'source-map', // 资源映射，方便调试，可以直接定位到错误地点
  inlineSourceMap: 'inline-source-map', // 将映射文件内敛在bundle文件中，生成的bundle文件过大
  evalSourceMap: 'eval-source-map', // 使用eval形式打包，可以大概看出错误位置，并且可以找到源代码
  hiddenSourceMap: 'hidden-source-map', // 拿掉映射文件末尾注释
  cheapSourceMap: 'cheap-source-map', // 更少的信息，不能跟踪代码
  cheapModuleSourceMap: 'cheap-module-source-map', // 只包含对应行信息
}
