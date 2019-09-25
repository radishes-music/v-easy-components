import Message from './lib/message/index'
import Button from './lib/button/index'
import Ip from './lib/ip/index'
import Subnet from './lib/subnet/index'
import VEPlainInput from './lib/plain-input/index'
import VESwitch from './lib/switch/index'
import locale from './local/index'
import vTip from './lib/tool-tip/index'
import loadingDom from './lib/loading-dom/index'
import imageRead from './lib/image-read/index'
import Package from '../package'

const components = [
  Message,
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
  Vue.use(imageRead.Image);

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
  Button,
  Ip,
  Subnet,
  VEPlainInput,
  VESwitch,
  loadingDom,
  imageRead
}
