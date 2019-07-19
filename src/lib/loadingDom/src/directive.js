import Vue from 'vue'
import loading from './loading.vue'
import { addClass, removeClass, setStyle, getStyle } from '../../../utils/dom'

const loadingDom = Vue.extend(loading);

const loadingDirective = {};

const insertDom = (el, binding) => {

  // const rect = el.getBoundingClientRect() || {};
  // const width = +el.getAttribute('data-loading-width') || rect.width || getStyle(el, 'width');
  // const height = +el.getAttribute('data-loading-height') || rect.height || getStyle(el, 'height');
  const nodeNum = el.getAttribute('data-node-num');

  const data = {
    // width,
    // height,
    nodeNum
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

    Vue.directive('loading-dom', {
        bind: function(el, binding) {
          addClass(el, 've-loading-parent--relative');

          insertDom(el)
        },

        update: function(el, binding) {
          removeLoadingDom(el, binding.value)
        },

        unbind: function(el, binding) {
        }
    });
};

export default loadingDirective
