import Message from '@packages/message/index'
import Button from '@packages/button/index'
import Ip from '@packages/input-ip/index'
import Subnet from '@packages/input-subnet/index'
import VEPlainInput from '@packages/input-plain/index'
import VESwitch from '@packages/switch/index'
import vTip from '@packages/tool-tip/index'
import loadingDom from '@packages/loading-dom/index'
import imagePreview from '@packages/image-preview/index'
import locale from '@/locale/index'
import Package from '../package'

const components = [
  Button,
  Ip,
  Subnet,
  VEPlainInput,
  VESwitch
];

const install = function (Vue, opts = {}) {
  locale.use(opts.locale);
  locale.i18n(opts.i18n);

  components.forEach(component => {
    Vue.component(component.name, component)
  });

  Vue.use(vTip.directive);
  Vue.use(loadingDom.directive);
  Vue.use(imagePreview.Image);

  Vue.prototype.$msg = Message;

};

// 静态资源加载
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  version: Package.version,
  locale: locale.use,
  i18n: locale.i18n,
  install,
  Message,
  Button,
  Ip,
  Subnet,
  VEPlainInput,
  VESwitch,
  loadingDom,
  imagePreview,
  vTip
}
