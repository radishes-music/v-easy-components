import Message from './lib/message/index'
import Button from './lib/button/index'
import Ip from './lib/input/index'
import Subnet from './lib/subnet/index'
import VEPlainInput from './lib/plainInput/index'
import VESwitch from './lib/switch/index'
import locale from './local/index'
import vTip from './lib/tooltip/index'
import loadingDom from './lib/loadingDom/index'
import './style/index'

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

  Vue.prototype.$msg = Message;

};

// 静态资源加载
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

module.exports = {
  version: '0.5.1',
  locale: locale.use,
  i18n: locale.i18n,
  install,
  Button,
  Ip,
  Subnet,
  VEPlainInput,
  VESwitch,
  loadingDom
};

module.exports.default = module.exports;

