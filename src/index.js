import Icon from '@packages/icon/index'
import Message from '@packages/message/index'
import Button from '@packages/button/index'
import InputIp from '@packages/input-ip/index'
import InputSubnet from '@packages/input-subnet/index'
import InputPlain from '@packages/input/index'
import Switch from '@packages/switch/index'
import { Steps, Step } from '@packages/steps/index'
import ToolTip from '@packages/tool-tip/index'
import Skeleton from '@packages/skeleton/index'
import ImagePreview from '@packages/image-preview/index'
import ColorPicker from '@packages/color-picker/index'
import locale from '@/locale/index'
import Package from '../package'

const components = [
  Icon,
  Button,
  InputIp,
  InputSubnet,
  InputPlain,
  Switch,
  Steps,
  Step,
  ColorPicker
]

const install = function(Vue, opts = {}) {
  locale.use(opts.locale)
  locale.i18n(opts.i18n)

  components.forEach(component => {
    Vue.component(component.name, component)
  })

  Vue.use(ToolTip.directive)
  Vue.use(Skeleton.directive)
  Vue.use(ImagePreview.Image)

  Vue.prototype.$VEasy = {
    iconStyle: opts.iconStyle || 'fa'
  }

  Vue.prototype.$msg = Message
}

// 静态资源加载
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export const main = {
  version: Package.version,
  locale: locale.use,
  i18n: locale.i18n,
  install,
  Icon,
  Message,
  Button,
  InputIp,
  InputSubnet,
  InputPlain,
  Switch,
  Steps,
  Step,
  Skeleton,
  ImagePreview,
  ToolTip,
  ColorPicker
}

export default main
