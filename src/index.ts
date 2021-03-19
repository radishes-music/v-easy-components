import Icon from '@packages/icon/index'
import Message from '@packages/message/index'
import Button from '@packages/button/index'
import InputIp from '@packages/input-ip/index'
import InputSubnet from '@packages/input-subnet/index'
import InputPlain from '@packages/input/index'
import { Steps, Step } from '@packages/steps/index'
import ToolTip from '@packages/tool-tip/index'
import Skeleton from '@packages/skeleton/index'
import ImagePreview from '@packages/image-preview/index'
import ColorPicker from '@packages/color-picker/index'
import ScrollBar from '@packages/scroll-bar/index'
import RouteIndicator from '@packages/route-indicator/index'
import Collapse from '@packages/collapse/index'
import AutoComplete from '@packages/auto-complete/index'
import locale from '@/locale/index'
import Package from '../package.json'

interface Opts {
  iconStyle?: string
  locale?: string
  i18n?: string
}

const components = [
  Icon,
  Button,
  InputIp,
  InputSubnet,
  InputPlain,
  Steps,
  Step,
  ColorPicker,
  ScrollBar,
  RouteIndicator,
  Collapse,
  AutoComplete,
]

const install = function (App, opts: Opts = {}) {
  locale.use(opts.locale)
  locale.i18n(opts.i18n)

  components.forEach((component) => {
    App.component(component.name, component)
  })

  App.use(ToolTip.directive)
  App.use(Skeleton.directive)
  App.use(ImagePreview.directive)

  App.config.globalProperties.$message = Message
  App.config.globalProperties.$VEasy = {
    iconStyle: opts.iconStyle || 'fa',
  }
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
  Steps,
  Step,
  Skeleton,
  ImagePreview,
  ToolTip,
  ColorPicker,
  ScrollBar,
  RouteIndicator,
  Collapse,
  AutoComplete,
}

export default main

export const version = Package.version
