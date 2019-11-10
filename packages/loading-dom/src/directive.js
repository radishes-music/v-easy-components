import Vue from 'vue'
import loading from './loading.vue'
import {addClass, removeClass} from '@/utils/dom'

const loadingDom = Vue.extend(loading);

const loadingDirective = {};

const insertDom = (el) => {

  // const rect = el.getBoundingClientRect() || {};
  // const width = +el.getAttribute('data-loading-width') || rect.width || getStyle(el, 'width');
  // const height = +el.getAttribute('data-loading-height') || rect.height || getStyle(el, 'height');
  const nodeNum = el.getAttribute('data-loading-text');
  const type = el.getAttribute('data-loading-type') || 'text';
  const d = el.getAttribute('data-loading-diameter') || '16';

  const data = {
    // width,
    // height,
    nodeNum,
    type,
    circleStyle: {
      width: d + 'px',
      height: d + 'px'
    }
  };

  const loading = new loadingDom({
    el: el,
    data
  });

  el.instance = loading;
  el.loading = loading.$el;

  el.appendChild(loading.$el);
};

const removeLoadingDom = (el, visible) => {

  if (visible) {
    removeClass(el, 've-loading-parent--relative');

    el.instance.showHide(false);
  }

};

loadingDirective.install = Vue => {

  Vue.directive('loading-preload', {
    bind: function (el) {
      addClass(el, 've-loading-parent--relative');

      insertDom(el)
    },

    update: function (el, binding) {
      removeLoadingDom(el, binding.value)
    },

  });
};

export default loadingDirective
