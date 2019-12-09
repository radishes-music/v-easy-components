import Vue from 'vue'
import Tip from './tip.vue'
import {addClass, getStyle} from '@/utils/dom'
import {_isEqual} from '@/utils/array-extend'

const tipDom = Vue.extend(Tip);
const tipDirective = {};
let index = 1;
let tipInstance = [];

const toggleTip = (el, binding) => {
  Vue.nextTick(() => {
    el.originalPosition = getStyle(el, 'position');

    let rectDom = el.getBoundingClientRect(),
      offset = binding.value.offset || 0;

    ['top', 'left'].forEach(property => {
      const scroll = property === 'top' ? 'scrollTop' : 'scrollLeft';
      el.tipStyle[property] = rectDom[property] +
        document.body[scroll] +
        document.documentElement[scroll]
    });

    switch (el.instance.placement) {
      case 'top':
        el.tipStyle['top'] -= (offset + 6);
        el.tipStyle['left'] += (rectDom['width'] / 2);
        break;
      case 'bottom':
        el.tipStyle['top'] += (rectDom['height'] + offset + 6);
        el.tipStyle['left'] += (rectDom['width'] / 2);
        break;
      case 'left':
        el.tipStyle['top'] += (rectDom['height'] / 2);
        el.tipStyle['left'] -= (6 + offset); // support IE
        break;
      case 'right':
        el.tipStyle['top'] += (rectDom['height'] / 2);
        el.tipStyle['left'] += (rectDom['width'] + offset);
        break;
    }

    insertDom(el, binding);
  })
};

const insertDom = (el) => {
  if (getStyle(el, 'display') !== 'none' && getStyle(el, 'visibility') !== 'hidden') {
    Object.keys(el.tipStyle).forEach(property => {
      el.tip.style[property] = el.tipStyle[property] + 'px';
    });

    if (el.originalPosition !== 'absolute' && el.originalPosition !== 'fixed') {
      addClass(el, 've-tip-parent--relative');
    }

    !el.tip.isConnected && document.body.appendChild(el.tip);
    el._is_instance_remove_ = false;

  }
};

const enter = (el, binding, simple, event) => {
  if (event) {
    event.stopPropagation();
  }
  const target = binding.value.target;
  if (el._uuid_tip_ && !el._is_instance_remove_) {
    el.instance.enter();
  } else {
    // First rendering
    index += 1;
    el._uuid_tip_ = index;
    const value = binding.value;
    const modifiers = Object.keys(binding.modifiers);
    const placement = modifiers.length > 0 ? modifiers[0] : (value['placement'] || 'top');
    const data = simple ? {
      ...value,
      placement: placement,
      domVisible: true
    } : {
      content: value,
      placement: placement,
      domVisible: true,
    };
    const tip = new tipDom({
      el: document.createElement('div'),
      data,
    });
    tip._uuid_tip_ = index;
    // Whether to automatically remove the tip
    el._autoRemoveTip = typeof value.autoRemoveTip === 'undefined';
    el.instance = tip;
    el.tip = tip.$el;
    el.tipStyle = {};

    // Manage Tip Instances
    tipInstance.push({
      [index]: tip.$el
    });
  }

  // 隐藏 Tip
  if (target === 'click') {
    document.documentElement.addEventListener('click', el.instance.leave, {
      once: true
    })
  }

  binding.value && toggleTip(el, binding)
};

const leave = (el) => {
  el.instance.leave()
}

const addEvent = (el, binding, simple) => {
  Vue.nextTick(() => {
    if (binding.value.target === 'click') {
      el.addEventListener('click', e => enter(el, binding, simple, e), false)
    } else {
      el.addEventListener('mouseenter', enter.bind(null, el, binding, simple), false)
      el.addEventListener('mouseleave', leave.bind(null, el), false)
    }
  })
}

export const directive = {
  bind: function (el, binding) {
    el._uuid_tip_ = 0
    el._is_instance_remove_ = false

    addEvent(el, binding, typeof binding.value !== 'string')
  },

  update: function (el, binding) {
    if (!_isEqual(binding.value, binding.oldValue)) {
      if (el.tip && el.tip.isConnected) {
        document.body.removeChild(el.tip)
        el.removeEventListener('mouseenter', enter, false)
        el.removeEventListener('mouseleave', leave, false)
        el._is_instance_remove_ = true
      }
      enter(el, binding, typeof binding.value !== 'string')
      addEvent(el, binding, typeof binding.value !== 'string')
    }
  },

  unbind: function (el) {
    if (el._autoRemoveTip) {
      const id = el._uuid_tip_
      const tipIndex = tipInstance.findIndex(o => o[id])
      if (tipIndex === 0 || tipIndex) {
        const tip = tipInstance.splice(tipIndex, 1)[0][id]
        document.body.removeChild(tip)
      }
    }
  }
}

tipDirective.install = Vue => {

  Vue.directive('tip', directive);
};

export default tipDirective
