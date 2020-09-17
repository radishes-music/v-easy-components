module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 27);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.number.constructor");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.map");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.filter");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.for-each");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/web.dom-collections.for-each");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.join");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.regexp.exec");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.object.to-string");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.promise");

/***/ }),
/* 10 */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"v-easy-components\",\"description\":\"Vue.js UI Components\",\"version\":\"2.0.0-beta.1\",\"devDependencies\":{\"@babel/core\":\"^7.6.4\",\"@babel/plugin-proposal-nullish-coalescing-operator\":\"^7.10.4\",\"@babel/plugin-proposal-optional-chaining\":\"^7.6.0\",\"@babel/plugin-transform-runtime\":\"^7.6.2\",\"@babel/preset-env\":\"^7.6.3\",\"@popperjs/core\":\"^2.4.4\",\"@typescript-eslint/eslint-plugin\":\"^4.0.1\",\"@typescript-eslint/parser\":\"^4.0.1\",\"@vue/compiler-sfc\":\"^3.0.0-rc.9\",\"@vuepress/plugin-back-to-top\":\"^1.2.0\",\"@vuepress/plugin-google-analytics\":\"^1.2.0\",\"@vuepress/plugin-pwa\":\"^1.2.0\",\"acorn\":\"^6.3.0\",\"autoprefixer\":\"^9.6.1\",\"babel-eslint\":\"^10.0.3\",\"babel-loader\":\"^8.1.0\",\"babel-plugin-istanbul\":\"^5.2.0\",\"babel-regenerator-runtime\":\"^6.5.0\",\"chai\":\"^4.2.0\",\"conventional-changelog-cli\":\"^2.0.25\",\"cp-cli\":\"^2.0.0\",\"cross-env\":\"^6.0.3\",\"css-loader\":\"^3.2.0\",\"deepmerge\":\"^3.1.0\",\"eslint\":\"^6.7.2\",\"eslint-config-prettier\":\"^6.11.0\",\"eslint-loader\":\"^4.0.2\",\"eslint-plugin-babel\":\"^5.3.1\",\"eslint-plugin-prettier\":\"^3.1.4\",\"eslint-plugin-vue\":\"^6.0.1\",\"friendly-errors-webpack-plugin\":\"^1.7.0\",\"gulp\":\"^4.0.2\",\"gulp-cssmin\":\"^0.2.0\",\"gulp-less\":\"^4.0.1\",\"gulp-postcss\":\"^8.0.0\",\"html-webpack-plugin\":\"^4.4.1\",\"husky\":\"^3.0.9\",\"jest\":\"^24.9.0\",\"karma\":\"^5.2.1\",\"karma-chrome-launcher\":\"^3.1.0\",\"karma-coverage\":\"^2.0.1\",\"karma-mocha\":\"^1.3.0\",\"karma-sinon-chai\":\"^2.0.2\",\"karma-spec-reporter\":\"^0.0.32\",\"karma-webpack\":\"^4.0.2\",\"less\":\"^3.8.1\",\"less-loader\":\"^4.1.0\",\"mocha\":\"^6.2.2\",\"node-notifier\":\"^7.0.2\",\"node-sass\":\"^4.12.0\",\"path\":\"^0.12.7\",\"postcss\":\"^5.2.18\",\"postcss-loader\":\"^3.0.0\",\"postcss-salad\":\"^2.0.1\",\"prettier\":\"^2.1.2\",\"prettier-eslint\":\"^11.0.0\",\"prettier-eslint-cli\":\"^5.0.0\",\"prettier-stylelint\":\"^0.4.2\",\"progress-bar-webpack-plugin\":\"^1.12.1\",\"rimraf\":\"^3.0.0\",\"sass-loader\":\"^7.2.0\",\"sinon\":\"^7.5.0\",\"sinon-chai\":\"^3.3.0\",\"style-loader\":\"^0.23.1\",\"terser-webpack-plugin\":\"2.2.2\",\"ts-loader\":\"^8.0.3\",\"typescript\":\"^4.0.2\",\"url-loader\":\"^4.1.0\",\"validate-commit-msg\":\"^2.14.0\",\"vue\":\"^3.0.0-rc.10\",\"vue-i18n\":\"^9.0.0-alpha.16\",\"vue-loader\":\"^16.0.0-beta.4\",\"vue-router\":\"^4.0.0-beta.4\",\"vuepress\":\"1.2.0\",\"webpack\":\"^4.44.1\",\"webpack-cli\":\"^3.3.12\",\"webpack-dev-server\":\"^3.11.0\",\"webpack-merge\":\"^4.1.0\",\"webpack-node-externals\":\"^2.5.2\"},\"dependencies\":{\"core-js\":\"^3.6.5\",\"regenerator-runtime\":\"^0.13.3\"},\"peerDependencies\":{\"vue\":\"^3.0.0-rc.10\"},\"scripts\":{\"bootstrap\":\"yarn || npm i\",\"dev\":\"webpack-dev-server --config config/webpack-dev-config.js --open\",\"dev:docs\":\"vuepress dev docs\",\"build\":\"npm run clean && npm run lint && npm run build:main && npm run build:cm && npm run build:common && npm run build:theme && rimraf dist/index.min.js.LICENSE\",\"build:main\":\"webpack --config config/webpack-build-config.js\",\"build:cm\":\"webpack --config config/webpack-build-components.js\",\"build:common\":\"webpack --config config/webpack-build-common.js\",\"build:theme\":\"rimraf src/theme-chalk/dist && gulp build --gulpfile src/theme-chalk/gulpfile.js && rimraf src/theme-chalk/dist/_font.css && cp-cli src/theme-chalk/dist dist/theme-chalk && rimraf dist/theme-chalk/dist\",\"build:docs\":\"vuepress build docs\",\"lint\":\"eslint **/* --quiet\",\"lint:fix\":\"eslint **/* --fix\",\"test\":\"npm run lint && cross-env CI_ENV=/dev/ BABEL_ENV=test karma start test/karma.conf.js --single-run\",\"test:watch\":\"npm run lint && cross-env BABEL_ENV=test karma start test/karma.conf.js\",\"clean\":\"rimraf dist\",\"validate:commit\":\"validate-commit-msg\",\"change:log\":\"conventional-changelog -p angular -i CHANGELOG.md -s -r 0\",\"prettier\":\"prettier-eslint --write %INIT_CWD%/**/*.{js,ts,vue}\",\"prettier:style\":\"prettier-stylelint --write %INIT_CWD%/**/*.{less}\"},\"husky\":{\"hooks\":{\"pre-commit\":\"npm run validate:commit && npm run lint\"}},\"homepage\":\"https://linkorg.club\",\"bugs\":{\"url\":\"https://github.com/Linkontoask/v-easy-components/issues\"},\"files\":[\"dist\",\"src\",\"types\",\"packages\"],\"keywords\":[\"Vue\",\"UI\",\"Components\"],\"repository\":{\"type\":\"git\",\"url\":\"https://github.com/Linkontoask/v-easy-components.git\"},\"style\":\"dist/theme-chalk/index.css\",\"main\":\"index.js\",\"typings\":\"types/index.d.ts\",\"unpkg\":\"dist/index.min.js\",\"author\":\"Link\",\"license\":\"MIT\"}");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.object.keys");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.every");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.string.split");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.concat");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime/runtime");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("deepmerge");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("@popperjs/core");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.symbol");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.object.get-own-property-descriptor");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.object.get-own-property-descriptors");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.slice");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.string.replace");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.regexp.constructor");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.regexp.to-string");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.from");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.string.iterator");

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "main", function() { return /* binding */ src_main_0; });
__webpack_require__.d(__webpack_exports__, "version", function() { return /* binding */ version; });

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ref--5!./node_modules/vue-loader/dist??ref--0!./packages/icon/src/main.vue?vue&type=template&id=6399a6cb


function mainvue_type_template_id_6399a6cb_render(_ctx, _cache) {
  return (Object(external_vue_["openBlock"])(), Object(external_vue_["createBlock"])("i", {
    class: ['v-icon', _ctx.iconClass, 'fa-' + _ctx.name],
    style: { fontSize: _ctx.size + 'px' }
  }, null, 6 /* CLASS, STYLE */))
}
// CONCATENATED MODULE: ./packages/icon/src/main.vue?vue&type=template&id=6399a6cb

// EXTERNAL MODULE: external "core-js/modules/es.number.constructor"
var es_number_constructor_ = __webpack_require__(1);

// CONCATENATED MODULE: ./src/utils/icon-style.js
var computedIconStyle = function computedIconStyle(style) {
  var className = 'fa';

  switch (style) {
    case 'brands':
      className = 'fab';
      break;

    case 'regular':
      className = 'far';
      break;

    case 'solid':
      className = 'fa';
      break;

    default:
      className = style;
  }

  return className;
};
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--0!./packages/icon/src/main.vue?vue&type=script&lang=js



/* harmony default export */ var mainvue_type_script_lang_js = (Object(external_vue_["defineComponent"])({
  name: 'VeIcon',
  props: {
    name: String,
    iconStyle: {
      type: String,
      default: 'solid'
    },
    size: {
      type: [String, Number],
      default: 12
    }
  },
  computed: {
    iconClass: function iconClass() {
      return computedIconStyle(this.iconStyle);
    }
  }
}));
// CONCATENATED MODULE: ./packages/icon/src/main.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./packages/icon/src/main.vue



mainvue_type_script_lang_js.render = mainvue_type_template_id_6399a6cb_render

/* harmony default export */ var main = (mainvue_type_script_lang_js);
// CONCATENATED MODULE: ./packages/icon/index.ts

main.install = function (Vue) {
    Vue.component(main.name, main);
};
/* harmony default export */ var icon = (main);

// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ref--5!./node_modules/vue-loader/dist??ref--0!./packages/message/src/main.vue?vue&type=template&id=1f598a46


const _hoisted_1 = { key: 1 }

function mainvue_type_template_id_1f598a46_render(_ctx, _cache) {
  return (Object(external_vue_["openBlock"])(), Object(external_vue_["createBlock"])(external_vue_["Transition"], {
    name: "v-easy-message-animation",
    "onAfter-leave": _ctx.handleAfterLeave
  }, {
    default: Object(external_vue_["withCtx"])(() => [
      Object(external_vue_["withDirectives"])(Object(external_vue_["createVNode"])("div", {
        class: ['v-easy-message-' + _ctx.type, 'message'],
        style: _ctx.positionStyle,
        onMouseenter: _cache[2] || (_cache[2] = (...args) => (_ctx.clearTimer(...args))),
        onMouseleave: _cache[3] || (_cache[3] = (...args) => (_ctx.startTimer(...args)))
      }, [
        Object(external_vue_["renderSlot"])(_ctx.$slots, "default", {}, () => [
          Object(external_vue_["createVNode"])("i", {
            class: [_ctx.typeIcon, "message-type fa"]
          }, null, 2 /* CLASS */),
          (_ctx.html)
            ? (Object(external_vue_["openBlock"])(), Object(external_vue_["createBlock"])("p", {
                key: 0,
                innerHTML: _ctx.message
              }, null, 8 /* PROPS */, ["innerHTML"]))
            : (Object(external_vue_["openBlock"])(), Object(external_vue_["createBlock"])("p", _hoisted_1, Object(external_vue_["toDisplayString"])(_ctx.message), 1 /* TEXT */))
        ]),
        (_ctx.showClose)
          ? (Object(external_vue_["openBlock"])(), Object(external_vue_["createBlock"])("i", {
              key: 0,
              class: "easy_message_close fa fa-times",
              onClick: _cache[1] || (_cache[1] = (...args) => (_ctx.privateClose(...args)))
            }))
          : Object(external_vue_["createCommentVNode"])("v-if", true)
      ], 38 /* CLASS, STYLE, HYDRATE_EVENTS */), [
        [external_vue_["vShow"], _ctx.visible]
      ])
    ]),
    _: 3
  }, 8 /* PROPS */, ["onAfter-leave"]))
}
// CONCATENATED MODULE: ./packages/message/src/main.vue?vue&type=template&id=1f598a46

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--0!./packages/message/src/main.vue?vue&type=script&lang=js

var typeMap = {
  success: 'fa-check-circle',
  warning: 'fa-exclamation-circle',
  info: 'fa-info-circle',
  error: 'fa-times-circle'
};
/* harmony default export */ var src_mainvue_type_script_lang_js = (Object(external_vue_["defineComponent"])({
  name: 'Message',
  computed: {
    typeIcon: function typeIcon() {
      return typeMap[this.type];
    },
    positionStyle: function positionStyle() {
      return {
        top: "".concat(this.verticalOffset, "px")
      };
    }
  },
  methods: {
    handleAfterLeave: function handleAfterLeave() {
      document.body.removeChild(this.$el.parentNode);
    },
    clearTimer: function clearTimer() {
      clearTimeout(this.timer);
    },
    startTimer: function startTimer() {
      var _this = this;

      if (this.duration > 0) {
        this.timer = setTimeout(function () {
          if (_this.visible) {
            _this.privateClose();
          }
        }, this.duration);
      }
    },
    privateClose: function privateClose() {
      this.visible = false;

      if (typeof this.onClose === 'function') {
        this.onClose(this);
      }
    },
    change: function change() {
      this.visible = !this.visible;
    }
  },
  mounted: function mounted() {
    this.startTimer();
  }
}));
// CONCATENATED MODULE: ./packages/message/src/main.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./packages/message/src/main.vue



src_mainvue_type_script_lang_js.render = mainvue_type_template_id_1f598a46_render

/* harmony default export */ var src_main = (src_mainvue_type_script_lang_js);
// CONCATENATED MODULE: ./packages/message/src/main.ts


const main_hasOwnProperty = Object.prototype.hasOwnProperty;
function noop() { }
function hasOwn(obj, key) {
    return main_hasOwnProperty.call(obj, key);
}
function isVNode(node) {
    return (node !== null &&
        typeof node === 'object' &&
        hasOwn(node, 'componentOptions'));
}
let instances = [];
let seed = 1;
const MessageFn = function (options) {
    // TODO
    // if (Vue.prototype.$isServer) return
    options = options || {};
    if (typeof options === 'string') {
        options = {
            message: options,
        };
    }
    let userOnClose = options.onClose;
    let id = 'message_' + seed++;
    options.onClose = function () {
        MessageFn.close(id, userOnClose);
    };
    const app = {
        ...src_main,
        setup() {
            const data = Object(external_vue_["reactive"])(Object.assign({
                visible: false,
                type: 'info',
                message: '',
                html: false,
                duration: 3000,
                showClose: true,
                onClose: null,
                timer: null,
                verticalOffset: 20,
                id: '',
            }, options));
            Object(external_vue_["onMounted"])(() => {
                data.visible = true;
            });
            return data;
        },
    };
    const div = document.createElement('div');
    const message = Object(external_vue_["createApp"])(app).mount(div);
    document.body.appendChild(div);
    message.id = id;
    let verticalOffset = options.offset || 20;
    instances.forEach((item) => {
        verticalOffset += item.$el.offsetHeight + 16;
    });
    message.verticalOffset = verticalOffset;
    message.close = () => {
        message.visible = false;
        MessageFn.close(id, userOnClose);
    };
    instances.push(message);
    return message;
};
MessageFn.close = function (id, userOnClose) {
    let len = instances.length;
    let index = -1;
    for (let i = 0; i < len; i++) {
        if (id === instances[i].id) {
            index = i;
            if (typeof userOnClose === 'function') {
                userOnClose(instances[i]);
            }
            instances.splice(i, 1);
            break;
        }
    }
    if (len <= 1 || index === -1 || index > instances.length - 1)
        return;
    const removedHeight = instances[index].$el.offsetHeight;
    for (let i = index; i < len - 1; i++) {
        const dom = instances[i].$el;
        const top = parseInt(dom.style['top'], 10) - removedHeight - 16;
        instances[i].verticalOffset = top;
    }
};
/* harmony default export */ var message_src_main = (MessageFn);

// CONCATENATED MODULE: ./packages/message/index.ts

/* harmony default export */ var packages_message = (message_src_main);

// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ref--5!./node_modules/vue-loader/dist??ref--0!./packages/button/src/main.vue?vue&type=template&id=5339ba2e


const mainvue_type_template_id_5339ba2e_hoisted_1 = {
  key: 0,
  class: "fa fa-spinner fa-spin fa-pulse"
}

function mainvue_type_template_id_5339ba2e_render(_ctx, _cache) {
  return (Object(external_vue_["openBlock"])(), Object(external_vue_["createBlock"])("button", {
    ref: "ButtonBox",
    class: [
      'v-easy-button',
      'button',
      _ctx.type ? 'easy-button-' + _ctx.type : '',
      'easy-button__' + _ctx.size,
      {
        'button-is-disabled': _ctx.buttonDisabled,
        'button-is-plain': _ctx.plain,
        'button-is-circle': _ctx.circle,
        'button-is-mask': _ctx.mask,
        ['button-is-mask-' + _ctx.maskType]: _ctx.mask,
      },
    ],
    type: _ctx.nativeType,
    onMouseleave: _cache[1] || (_cache[1] = (...args) => (_ctx.leave(...args))),
    onMouseenter: _cache[2] || (_cache[2] = (...args) => (_ctx.enter(...args))),
    onClick: _cache[3] || (_cache[3] = (...args) => (_ctx.handleClick(...args)))
  }, [
    (_ctx.loading)
      ? (Object(external_vue_["openBlock"])(), Object(external_vue_["createBlock"])("i", mainvue_type_template_id_5339ba2e_hoisted_1))
      : (_ctx.icon)
        ? (Object(external_vue_["openBlock"])(), Object(external_vue_["createBlock"])("i", {
            key: 1,
            class: [
        _ctx.iconClass,
        'fa-' + _ctx.icon,
        { 'button-icon-normal': _ctx.$slots.default },
        { 'fa-spin': _ctx.rotate },
      ]
          }, null, 2 /* CLASS */))
        : Object(external_vue_["createCommentVNode"])("v-if", true),
    (_ctx.$slots.default)
      ? (Object(external_vue_["openBlock"])(), Object(external_vue_["createBlock"])("span", {
          key: 2,
          class: ['button-text', { 'button-mask-text': _ctx.mask }]
        }, [
          Object(external_vue_["renderSlot"])(_ctx.$slots, "default")
        ], 2 /* CLASS */))
      : Object(external_vue_["createCommentVNode"])("v-if", true),
    (_ctx.mask)
      ? (Object(external_vue_["openBlock"])(), Object(external_vue_["createBlock"])("span", {
          key: 3,
          class: ["button-mask", 'button-mask-' + _ctx.maskType],
          style: _ctx.style
        }, null, 6 /* CLASS, STYLE */))
      : Object(external_vue_["createCommentVNode"])("v-if", true)
  ], 42 /* CLASS, PROPS, HYDRATE_EVENTS */, ["type"]))
}
// CONCATENATED MODULE: ./packages/button/src/main.vue?vue&type=template&id=5339ba2e

// EXTERNAL MODULE: external "core-js/modules/es.symbol"
var es_symbol_ = __webpack_require__(18);

// EXTERNAL MODULE: external "core-js/modules/es.array.filter"
var es_array_filter_ = __webpack_require__(3);

// EXTERNAL MODULE: external "core-js/modules/es.array.for-each"
var es_array_for_each_ = __webpack_require__(4);

// EXTERNAL MODULE: external "core-js/modules/es.object.get-own-property-descriptor"
var es_object_get_own_property_descriptor_ = __webpack_require__(19);

// EXTERNAL MODULE: external "core-js/modules/es.object.get-own-property-descriptors"
var es_object_get_own_property_descriptors_ = __webpack_require__(20);

// EXTERNAL MODULE: external "core-js/modules/es.object.keys"
var es_object_keys_ = __webpack_require__(11);

// EXTERNAL MODULE: external "core-js/modules/web.dom-collections.for-each"
var web_dom_collections_for_each_ = __webpack_require__(5);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--0!./packages/button/src/main.vue?vue&type=script&lang=js








function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



/* harmony default export */ var button_src_mainvue_type_script_lang_js = (Object(external_vue_["defineComponent"])({
  name: 'VeButton',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    nativeType: {
      type: String,
      default: 'button'
    },
    maskType: {
      type: String,
      default: 'default'
    },
    size: {
      type: String,
      default: 'default'
    },
    icon: {
      type: String
    },
    iconStyle: {
      type: String,
      default: 'solid'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    circle: Boolean,
    plain: Boolean,
    rotate: Boolean,
    mask: {
      type: [Boolean, String],
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  emits: ['click'],
  data: function data() {
    return {
      style: {},
      maskPosition: {},
      rect: 0,
      isLeave: false,
      iconS: {
        brands: 'fab',
        regular: 'far',
        solid: 'fa'
      }
    };
  },
  computed: {
    buttonDisabled: function buttonDisabled() {
      return this.disabled || this.loading;
    },
    iconClass: function iconClass() {
      return computedIconStyle(this.iconStyle);
    }
  },
  mounted: function mounted() {
    if (this.maskType !== 'default') {
      Object(external_vue_["nextTick"])(this.calc);
    }
  },
  methods: {
    calc: function calc() {
      var parent = this.$refs.ButtonBox;
      var w = parent.offsetHeight,
          h = parent.offsetWidth;
      this.rect = Math.floor(Math.sqrt(Math.pow(w, 2) + Math.pow(h, 2)));
      this.maskPosition = {
        width: this.rect * 2 + 'px',
        height: this.rect * 2 + 'px'
      };
    },
    leave: function leave(e) {
      if (this.maskType === 'default') return false;
      this.isLeave = true;
      this.style = {
        left: e.offsetX + 'px',
        top: e.offsetY + 'px',
        transition: 'all .2s linear'
      };
    },
    enter: function enter(e) {
      var _this = this;

      if (this.maskType === 'default') return false;
      this.maskPosition.left = -Math.abs(this.rect - e.offsetX) + 'px';
      this.maskPosition.top = -Math.abs(this.rect - e.offsetY) + 'px';
      this.style = {
        left: e.offsetX + 'px',
        top: e.offsetY + 'px',
        transition: ''
      }; // Last position offset problem

      setTimeout(function () {
        if (_this.isLeave) return;
        _this.style = _objectSpread({}, _this.maskPosition, {
          transition: 'all .2s linear'
        });
      }, 0);
    },
    handleClick: function handleClick(evt) {
      if (this.buttonDisabled) return false;
      this.$emit('click', evt);
    }
  }
}));
// CONCATENATED MODULE: ./packages/button/src/main.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./packages/button/src/main.vue



button_src_mainvue_type_script_lang_js.render = mainvue_type_template_id_5339ba2e_render

/* harmony default export */ var button_src_main = (button_src_mainvue_type_script_lang_js);
// CONCATENATED MODULE: ./packages/button/index.ts

button_src_main.install = function (App) {
    App.component(button_src_main.name, button_src_main);
};
/* harmony default export */ var packages_button = (button_src_main);

// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ref--5!./node_modules/vue-loader/dist??ref--0!./packages/input-ip/src/main.vue?vue&type=template&id=4bb7c095


const mainvue_type_template_id_4bb7c095_hoisted_1 = { class: "v-easy-input--box" }
const _hoisted_2 = { key: 0 }
const _hoisted_3 = {
  key: 0,
  class: "ipv4-port"
}
const _hoisted_4 = /*#__PURE__*/Object(external_vue_["createVNode"])("span", null, ":", -1 /* HOISTED */)

function mainvue_type_template_id_4bb7c095_render(_ctx, _cache) {
  return (Object(external_vue_["openBlock"])(), Object(external_vue_["createBlock"])("div", {
    class: ['v-easy-input', 'input', 'input-ip'],
    style: {
      'max-width': _ctx.maxWidth + 'px',
      width: _ctx.width + 'px',
    }
  }, [
    Object(external_vue_["createVNode"])("div", mainvue_type_template_id_4bb7c095_hoisted_1, [
      Object(external_vue_["createVNode"])("ul", {
        ref: "box",
        class: _ctx.disabled ? 'disabled' : ''
      }, [
        (Object(external_vue_["openBlock"])(true), Object(external_vue_["createBlock"])(external_vue_["Fragment"], null, Object(external_vue_["renderList"])(_ctx.VHtml, (item, index) => {
          return (Object(external_vue_["openBlock"])(), Object(external_vue_["createBlock"])("li", {
            key: index,
            class: _ctx.format
          }, [
            Object(external_vue_["createVNode"])("label", null, [
              Object(external_vue_["createVNode"])("input", Object(external_vue_["mergeProps"])({
                type: "text",
                maxLength: item,
                value: _ctx.result[index],
                readonly: _ctx.readonly,
                class: _ctx.errorClass[index],
                disabled: _ctx.disabled
              }, _ctx.$attrs, {
                onKeydown: $event => (_ctx.handleKeyDown(index, $event)),
                onInput: $event => (_ctx.handleInput(index, $event)),
                onFocus: $event => (_ctx.handleFocus(index, $event)),
                onBlur: $event => (_ctx.handelBlur(index, $event)),
                onPaste: $event => (_ctx.handlePaste(index, $event))
              }), null, 16 /* FULL_PROPS */, ["maxLength", "value", "readonly", "disabled", "onKeydown", "onInput", "onFocus", "onBlur", "onPaste"])
            ]),
            (index !== _ctx.VHtml.length - 1)
              ? (Object(external_vue_["openBlock"])(), Object(external_vue_["createBlock"])("span", _hoisted_2, Object(external_vue_["toDisplayString"])(_ctx.splitChar), 1 /* TEXT */))
              : Object(external_vue_["createCommentVNode"])("v-if", true)
          ], 2 /* CLASS */))
        }), 128 /* KEYED_FRAGMENT */))
      ], 2 /* CLASS */),
      (_ctx.port)
        ? (Object(external_vue_["openBlock"])(), Object(external_vue_["createBlock"])("div", _hoisted_3, [
            _hoisted_4,
            Object(external_vue_["createVNode"])("label", null, [
              Object(external_vue_["createVNode"])("input", {
                type: "number",
                max: "65536",
                min: "0",
                value: _ctx.portValue,
                onInput: _cache[1] || (_cache[1] = $event => (_ctx.handlePortInput($event)))
              }, null, 40 /* PROPS, HYDRATE_EVENTS */, ["value"])
            ])
          ]))
        : Object(external_vue_["createCommentVNode"])("v-if", true)
    ]),
    Object(external_vue_["createVNode"])(external_vue_["Transition"], { name: "v-easy-error" }, {
      default: Object(external_vue_["withCtx"])(() => [
        Object(external_vue_["withDirectives"])(Object(external_vue_["createVNode"])("div", { class: "error inspection" }, Object(external_vue_["toDisplayString"])(_ctx.msg), 513 /* TEXT, NEED_PATCH */), [
          [external_vue_["vShow"], _ctx.conformity]
        ])
      ]),
      _: 1
    })
  ], 4 /* STYLE */))
}
// CONCATENATED MODULE: ./packages/input-ip/src/main.vue?vue&type=template&id=4bb7c095

// EXTERNAL MODULE: external "core-js/modules/es.array.every"
var es_array_every_ = __webpack_require__(12);

// EXTERNAL MODULE: external "core-js/modules/es.array.join"
var es_array_join_ = __webpack_require__(6);

// EXTERNAL MODULE: external "core-js/modules/es.array.map"
var es_array_map_ = __webpack_require__(2);

// EXTERNAL MODULE: external "core-js/modules/es.array.slice"
var es_array_slice_ = __webpack_require__(21);

// EXTERNAL MODULE: external "core-js/modules/es.regexp.exec"
var es_regexp_exec_ = __webpack_require__(7);

// EXTERNAL MODULE: external "core-js/modules/es.string.replace"
var es_string_replace_ = __webpack_require__(22);

// EXTERNAL MODULE: external "core-js/modules/es.string.split"
var es_string_split_ = __webpack_require__(13);

// CONCATENATED MODULE: ./src/utils/array-extend.ts
/**
 * Detect whether the array contains all the targets and support multiple parameters
 * 检测数组中是否包含全部目标,支持多参数
 * @param arr
 * @param target
 * @returns {boolean}
 */
const contain = (arr, ...target) => {
    const array = target.map((val) => arr.includes(val));
    return array.filter((value) => value).length === target.length;
};
/**
 * 初始化数组并赋值
 * @param length
 * @param normal
 * @returns {string[]}
 * @private
 */
const _initArray = (length, normal = '') => {
    return Array.from({ length }).fill(normal);
};
/**
 * 判断两个数值是否相等，结果不考虑两层及以上
 * @param value 目标值
 * @param oldValue 比较值
 * @returns {boolean}
 * @private
 */
const _isEqual = (value, oldValue) => {
    if (value === oldValue) {
        return true;
    }
    if (typeof value === 'object' && typeof oldValue === 'object') {
        if (Object.keys(value).length !== Object.keys(oldValue).length) {
            return false;
        }
        for (let [key] of Object.entries(value)) {
            if (Array.isArray(value[key])) {
                if (!Array.isArray(oldValue[key]) ||
                    value[key].toString() !== oldValue[key].toString()) {
                    return false;
                }
            }
            else if (oldValue[key] !== value[key]) {
                return false;
            }
        }
        return true;
    }
};

// CONCATENATED MODULE: ./src/utils/utils.ts
function throttle(fn, delay) {
    let prev = Date.now();
    return function () {
        const now = Date.now();
        if (now - prev > delay) {
            fn();
            prev = Date.now();
        }
    };
}
function debounce(fn, delay) {
    let timer;
    return function () {
        if (timer)
            clearTimeout(timer);
        timer = setTimeout(fn, delay);
    };
}
function stopEvent(e) {
    e.preventDefault();
}
function utils_type(target) {
    return Object.prototype.toString.call(target);
}
function isString(target) {
    return utils_type(target) === '[object String]';
}
const utils = {
    throttle,
    debounce,
    stopEvent,
    type: utils_type,
    isString,
};
/* harmony default export */ var utils_utils = (utils);

// CONCATENATED MODULE: ./src/mixins/merge.ts


/* harmony default export */ var merge = ({
    data() {
        return {
            errorClass: [],
            currentIndex: 0,
            conformity: false,
            maxLength: _initArray(4, '3'),
        };
    },
    watch: {
        conformity(val) {
            this.$emit('status', !val);
        },
    },
    props: {
        maxWidth: { type: [String, Number] },
        width: { type: [String, Number], default: 240 },
        disabled: { type: [Boolean, String], default: false },
        spliceChar: { type: String, default: '.' },
        message: { type: String },
        modelValue: {
            type: [String, Array],
            required: true
        },
        readonly: { type: [Boolean, String], default: false },
    },
    computed: {
        result() {
            let { modelValue } = this;
            let data = [];
            data =
                modelValue === undefined || modelValue === null || modelValue === ''
                    ? []
                    : modelValue;
            if (!Array.isArray(modelValue) && isString(modelValue)) {
                const port = modelValue.split(':');
                if (port[0]) {
                    data = port[0].split('.');
                    data = data[0] === '' ? [] : data;
                }
                if (port[1]) {
                    data.push(port[1]);
                }
            }
            return data;
        },
    },
    methods: {
        handleKeyUp(index, $event) {
            this.$emit('keyUp', { $event, index });
        },
        handleFocus(index, $event) {
            this.currentIndex = index;
            this.$emit('focus', { $event, index });
        },
        handleKeyDown(index, $event) {
            const input = this.$refs.box.getElementsByTagName('input');
            if ($event.keyCode === 8 &&
                index !== 0 &&
                (!$event.target.value || $event.target.value.length === 0)) {
                $event.preventDefault();
                input[index - 1].focus();
                this.setCaretPosition(input[index - 1], this.result[index - 1] + ''
                    ? (this.result[index - 1] + '').length
                    : 0);
            }
            if (($event.keyCode === 110 || $event.keyCode === 190) &&
                index !== 3 &&
                $event.target.value !== '') {
                $event.preventDefault();
                input[index + 1].focus();
            }
            let current = this.getCursorPosition(input[index]), len = $event.target.value.length;
            if ($event.keyCode === 39 && current >= len && index !== 3) {
                $event.preventDefault();
                input[index + 1].focus();
                this.setCaretPosition(input[index + 1], 0);
            }
            if ($event.keyCode === 37 && current === 0 && index !== 0) {
                $event.preventDefault();
                input[index - 1].focus();
                this.setCaretPosition(input[index - 1], this.result[index - 1] + ''
                    ? (this.result[index - 1] + '').length
                    : 0);
            }
            this.$emit('keyDown', { $event, index });
        },
        setCurrentValue(value, index) {
            let { result } = this;
            const _v = value.replace(/\D/g, '');
            result[index] = _v ? Number(_v) : '';
            result = result.map((n) => (n ? Number(n) : n));
            this.$emit('update:modelValue', result);
        },
        getCursorPosition(el) {
            let cursorPos = 0, dc = document;
            if (dc.selection) {
                var selectRange = dc.selection.createRange();
                selectRange.moveStart('character', -el.value.length);
                cursorPos = selectRange.text.length;
            }
            else {
                cursorPos = el.selectionStart;
            }
            return cursorPos;
        },
        setCaretPosition(el, pos) {
            if (el.setSelectionRange) {
                // IE Support
                el.focus();
                el.setSelectionRange(pos, pos);
            }
            else if (el.createTextRange) {
                // Firefox support
                const range = el.createTextRange();
                range.collapse(true);
                range.moveEnd('character', pos);
                range.moveStart('character', pos);
                range.select();
            }
        },
        isIpv4Reg(ip) {
            let regexp = /^(?:(?:2[0-4][0-9]\.)|(?:25[0-5]\.)|(?:1[0-9][0-9]\.)|(?:[1-9][0-9]\.)|(?:[0-9]\.)){3}(?:(?:2[0-4][0-9])|(?:25[0-5])|(?:1[0-9][0-9])|(?:[1-9][0-9])|(?:[0-9]))$/;
            return regexp.test(ip);
        },
        isIpv6(index) {
            let regexp = /^[0-9a-fA-F]*$/g;
            if (!regexp.test(this.result[index])) {
                this.result[index] =
                    this.result[index] &&
                        this.result[index].substring(0, this.result[index].length - 1);
            }
        },
        checkSub(mask) {
            let regexp = /^(((255\.){3}(255|254|252|248|240|224|192|128|0+))|((255\.){2}(255|254|252|248|240|224|192|128|0+)\.0)|((255\.)(255|254|252|248|240|224|192|128|0+)(\.0+){2})|((255|254|252|248|240|224|192|128|0+)(\.0+){3}))$/;
            return regexp.test(mask);
        },
    },
});

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--0!./packages/input-ip/src/main.vue?vue&type=script&lang=js










// import { t } from '@/locale/index'



/* harmony default export */ var input_ip_src_mainvue_type_script_lang_js = (Object(external_vue_["defineComponent"])({
  name: 'VeIp',
  mixins: [merge],
  emits: ['status', 'update:modelValue', 'error', 'input', 'blur', 'focus', 'keyDown', 'keyUp'],
  props: {
    format: {
      type: String,
      default: 'ipv4'
    },
    port: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      portValue: ''
    };
  },
  computed: {
    msg: function msg() {
      return this.message;
    },
    splitChar: function splitChar() {
      if (this.spliceChar !== '.') {
        return this.spliceChar;
      }

      return this.format === 'ipv4' ? '.' : ':';
    },
    VHtml: function VHtml() {
      if (this.format === 'ipv4') {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.maxLength = _initArray(4, '3');
      } else if (this.format === 'ipv6') {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.maxLength = _initArray(8, '4');
      }

      return this.maxLength;
    }
  },
  watch: {
    result: function result(val) {
      var statusSuccess = true;

      for (var i = 0; i < 4; i++) {
        if (typeof val[i] === 'undefined') {
          statusSuccess = false;
        }
      }

      if (val.every(function (item) {
        return item === '';
      })) {
        this.conformity = false;
        this.errorClass = []; // 如果数据全部为空，那么对错误信息进行隐藏
      }

      if (statusSuccess && val.length > 3) {
        val = val.slice(0, 4);
        this.conformity = !this.isIpv4Reg(val.join('.'));
        this.$emit('status', this.conformity);
      }
    }
  },
  created: function created() {
    var port = this.port;

    if (port) {
      this.portValue = this.result[4];
    }
  },
  methods: {
    handlePortInput: function handlePortInput($event) {
      $event.preventDefault();
      var result = this.result;

      var _v = $event.target.value.replace(/-/g, '');

      this.portValue = _v;

      if (_v > 65536) {
        this.portValue = 65536;
        this.result[4] = 65536;
      }

      if (_v < 0) {
        this.portValue = 0;
        this.result[4] = 0;
      }

      result[4] = this.portValue;
      result = result.map(function (n) {
        return n ? Number(n) : n;
      });
      this.$emit('update:modelValue', result);
    },
    handlePaste: function handlePaste(index, $event) {
      $event.preventDefault();
      var paste = ($event.clipboardData || window.clipboardData).getData('text');

      var _r = paste.split(':');

      var _v = _r[0];

      if (this.isIpv4Reg(_v)) {
        _v = _v.split('.').map(function (n) {
          return n ? Number(n) : n;
        });

        if (_r[1] && this.port) {
          _v.push(+_r[1]);

          this.portValue = _r[1];
        }

        this.$emit('update:modelValue', _v);
      }
    },
    handleInput: function handleInput(index, $event) {
      this.setCurrentValue($event.target.value, index);
      this.format === 'ipv4' ? this.isIpv4(index) : this.isIpv6(index, $event);

      if ($event.target.value === '0') {
        this.maxLength[index] = '1';
      } else {
        this.maxLength[index] = this.format === 'ipv4' ? '3' : '4';
      } // 自动对焦


      if (!this.conformity && this.result[index] !== '' && (this.result[index] + '').length === Number(this.maxLength[index]) && index < this.VHtml.length - 1) {
        this.$refs.box.getElementsByTagName('input')[index + 1].focus();
      }

      this.$emit('input', {
        $event: $event,
        index: index
      });
    },
    isIpv4: function isIpv4(index) {
      var _this = this;

      if (this.result[index] && this.result[index].length > 3 && index === 3) {
        this.result[index] = this.result[index].substring(4, 1);
      }

      if (this.result[index] > 255) {
        this.errorClass[index] = 'red';
        this.conformity = true;
        this.$emit('error', this.result);
      } else {
        this.errorClass[index] = '';
        this.conformity = false;
        this.errorClass.forEach(function (item) {
          if (item === 'red') {
            _this.conformity = true;
          }
        });
      }
    },
    handelBlur: function handelBlur(index, $event) {
      var readonly = this.readonly,
          result = this.result,
          format = this.format;
      if (readonly) return false;

      if (index === 7 && format === 'ipv6') {
        var regexp = /^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/;

        if (regexp.test(result.join(':'))) {
          this.conformity = false;
        } else {
          this.conformity = true;
          this.$emit('error', result);
        }
      }

      if (format === 'ipv4' && index === 3) {
        var _r = result.slice(0, 4);

        var isCheck = _r.length > 3 && _r.every(function (item) {
          return item !== '';
        });

        if (isCheck && !this.isIpv4Reg(_r.join('.'))) {
          this.conformity = true;
        }
      }

      this.$emit('blur', {
        $event: $event,
        index: index
      });
    }
  }
}));
// CONCATENATED MODULE: ./packages/input-ip/src/main.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./packages/input-ip/src/main.vue



input_ip_src_mainvue_type_script_lang_js.render = mainvue_type_template_id_4bb7c095_render

/* harmony default export */ var input_ip_src_main = (input_ip_src_mainvue_type_script_lang_js);
// CONCATENATED MODULE: ./packages/input-ip/index.ts

input_ip_src_main.install = function (Vue) {
    Vue.component(input_ip_src_main.name, input_ip_src_main);
};
/* harmony default export */ var input_ip = (input_ip_src_main);

// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ref--5!./node_modules/vue-loader/dist??ref--0!./packages/input-subnet/src/main.vue?vue&type=template&id=6dfe072f


const mainvue_type_template_id_6dfe072f_hoisted_1 = { key: 0 }

function mainvue_type_template_id_6dfe072f_render(_ctx, _cache) {
  return (Object(external_vue_["openBlock"])(), Object(external_vue_["createBlock"])("div", {
    class: "v-easy-input input input-subnet",
    style: {
      'max-width': _ctx.maxWidth + 'px',
      width: _ctx.width + 'px',
    }
  }, [
    Object(external_vue_["createVNode"])("ul", {
      ref: "box",
      class: _ctx.disabled ? 'disabled' : ''
    }, [
      (Object(external_vue_["openBlock"])(true), Object(external_vue_["createBlock"])(external_vue_["Fragment"], null, Object(external_vue_["renderList"])(_ctx.maxLength, (val, index) => {
        return (Object(external_vue_["openBlock"])(), Object(external_vue_["createBlock"])("li", { key: index }, [
          Object(external_vue_["createVNode"])("label", null, [
            Object(external_vue_["createVNode"])("input", Object(external_vue_["mergeProps"])({
              type: "text",
              value: _ctx.result[index],
              readonly: _ctx.readonly,
              class: _ctx.errorClass[index],
              maxlength: val,
              disabled: _ctx.disabled
            }, _ctx.$attrs, {
              onKeydown: $event => (_ctx.handleKeyDown(index, $event)),
              onKeyup: $event => (_ctx.handleKeyUp(index, $event)),
              onFocus: $event => (_ctx.handleFocus(index, $event)),
              onInput: $event => (_ctx.handleInput(index, $event)),
              onBlur: $event => (_ctx.handleBlur(index, $event)),
              onPaste: $event => (_ctx.handlePaste(index, $event))
            }), null, 16 /* FULL_PROPS */, ["value", "readonly", "maxlength", "disabled", "onKeydown", "onKeyup", "onFocus", "onInput", "onBlur", "onPaste"])
          ]),
          (index !== _ctx.maxLength.length - 1)
            ? (Object(external_vue_["openBlock"])(), Object(external_vue_["createBlock"])("span", mainvue_type_template_id_6dfe072f_hoisted_1, Object(external_vue_["toDisplayString"])(_ctx.spliceChar), 1 /* TEXT */))
            : Object(external_vue_["createCommentVNode"])("v-if", true)
        ]))
      }), 128 /* KEYED_FRAGMENT */))
    ], 2 /* CLASS */),
    Object(external_vue_["createVNode"])(external_vue_["Transition"], { name: "v-easy-error" }, {
      default: Object(external_vue_["withCtx"])(() => [
        Object(external_vue_["withDirectives"])(Object(external_vue_["createVNode"])("div", { class: "error inspection" }, Object(external_vue_["toDisplayString"])(_ctx.msg), 513 /* TEXT, NEED_PATCH */), [
          [external_vue_["vShow"], _ctx.conformity]
        ])
      ]),
      _: 1
    })
  ], 4 /* STYLE */))
}
// CONCATENATED MODULE: ./packages/input-subnet/src/main.vue?vue&type=template&id=6dfe072f

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--0!./packages/input-subnet/src/main.vue?vue&type=script&lang=js






// import { t } from '@/locale/index'


/* harmony default export */ var input_subnet_src_mainvue_type_script_lang_js = (Object(external_vue_["defineComponent"])({
  name: 'VeSubnet',
  mixins: [merge],
  emits: ['status', 'update:modelValue', 'input', 'blur', 'keyDown', 'keyUp', 'focus'],
  computed: {
    msg: function msg() {
      return this.message;
    }
  },
  watch: {
    result: function result(val) {
      var statusSuccess = true;

      for (var i = 0; i < 4; i++) {
        if (typeof val[i] === 'undefined') {
          statusSuccess = false;
        }
      }

      if (val.every(function (item) {
        return item === '';
      })) {
        this.conformity = false;
        this.errorClass = []; // 如果数据全部为空，那么对错误信息进行影藏
      }

      if (statusSuccess && val.length > 3) this.$emit('status', this.checkSub(val.join('.')));
    }
  },
  methods: {
    handlePaste: function handlePaste(index, $event) {
      $event.preventDefault();
      var paste = ($event.clipboardData || window.clipboardData).getData('text');

      if (this.checkSub(paste)) {
        this.$emit('update:modelValue', paste.split('.').map(function (n) {
          return n ? Number(n) : n;
        }));
      }
    },
    handleInput: function handleInput(index, $event) {
      this.setCurrentValue($event.target.value, index);
      var first = this.result[index - 1] !== 255;
      if (index === 0) first = false;

      if (first) {
        for (var i = index; i < this.maxLength.length; i++) {
          this.maxLength[i] = '1';
        }

        if (this.result[index] !== 0) {
          this.errorClass[index] = 'red';
          this.conformity = true;
        } else {
          this.conformity = false;
          this.errorClass[index] = '';
        }
      } else {
        for (var _i = index; _i < this.maxLength.length; _i++) {
          this.maxLength[_i] = '3';
        }

        var regexp = /^(255|254|252|248|240|224|192|128|0)$/;

        if (!regexp.test(this.result[index]) && this.result[index].length === 3) {
          this.errorClass[index] = 'red';
          this.conformity = true;
        } else {
          this.conformity = false;
          this.errorClass[index] = '';
        }
      }

      if (!this.conformity && index !== 3 && $event.target.value && $event.target.value.length >= this.maxLength[index]) {
        this.$refs.box.getElementsByTagName('input')[index + 1].focus();
      }

      if (Number($event.target.value) === 0) {
        this.maxLength[index] = '1';
      }

      this.$emit('input', {
        $event: $event,
        index: index
      });
    },
    handleBlur: function handleBlur(index, $event) {
      var isCheck = this.result.length > 3 && this.result.every(function (item) {
        return item !== '';
      });

      if (isCheck && !this.checkSub(this.result.join('.'))) {
        this.conformity = true;
      }

      this.$emit('blur', {
        $event: $event,
        index: index
      });
    }
  }
}));
// CONCATENATED MODULE: ./packages/input-subnet/src/main.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./packages/input-subnet/src/main.vue



input_subnet_src_mainvue_type_script_lang_js.render = mainvue_type_template_id_6dfe072f_render

/* harmony default export */ var input_subnet_src_main = (input_subnet_src_mainvue_type_script_lang_js);
// CONCATENATED MODULE: ./packages/input-subnet/index.ts

input_subnet_src_main.install = function (Vue) {
    Vue.component(input_subnet_src_main.name, input_subnet_src_main);
};
/* harmony default export */ var input_subnet = (input_subnet_src_main);

// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ref--5!./node_modules/vue-loader/dist??ref--0!./packages/input/src/main.vue?vue&type=template&id=32a6dc94


const mainvue_type_template_id_32a6dc94_hoisted_1 = {
  key: 0,
  class: "input-inner-spin"
}

function mainvue_type_template_id_32a6dc94_render(_ctx, _cache) {
  return (Object(external_vue_["openBlock"])(), Object(external_vue_["createBlock"])("div", {
    class: "v-easy-input input v-easy-input-plain",
    style: { 'max-width': _ctx.maxWidth + 'px' }
  }, [
    (_ctx.typeInput === 'textarea')
      ? (Object(external_vue_["openBlock"])(), Object(external_vue_["createBlock"])("textarea", Object(external_vue_["mergeProps"])({ key: 0 }, _ctx.$attrs), null, 16 /* FULL_PROPS */))
      : (Object(external_vue_["openBlock"])(), Object(external_vue_["createBlock"])(external_vue_["Fragment"], { key: 1 }, [
          Object(external_vue_["createVNode"])("input", Object(external_vue_["mergeProps"])({
            type: _ctx.typeInput,
            value: _ctx.currentVal,
            max: _ctx.propertyMaxMin ? _ctx.propertyMaxMin.max : null,
            min: _ctx.propertyMaxMin ? _ctx.propertyMaxMin.min : null,
            step: _ctx.typeInput === 'number' ? _ctx.step : null,
            disabled: _ctx.disabled,
            class: { 'v-easy-input--error': _ctx.error },
            readonly: _ctx.readonly
          }, _ctx.$attrs, {
            onCompositionstart: _cache[1] || (_cache[1] = (...args) => (_ctx.handleComposition(...args))),
            onCompositionupdate: _cache[2] || (_cache[2] = (...args) => (_ctx.handleComposition(...args))),
            onCompositionend: _cache[3] || (_cache[3] = (...args) => (_ctx.handleComposition(...args))),
            onInput: _cache[4] || (_cache[4] = (...args) => (_ctx.handleInput(...args))),
            onBlur: _cache[5] || (_cache[5] = (...args) => (_ctx.handleBlur(...args))),
            onFocus: _cache[6] || (_cache[6] = (...args) => (_ctx.handleFocus(...args))),
            onChange: _cache[7] || (_cache[7] = (...args) => (_ctx.handleChange(...args)))
          }), null, 16 /* FULL_PROPS */, ["type", "value", "max", "min", "step", "disabled", "readonly"]),
          (_ctx.isNumberPrefix)
            ? (Object(external_vue_["openBlock"])(), Object(external_vue_["createBlock"])("div", mainvue_type_template_id_32a6dc94_hoisted_1, [
                Object(external_vue_["createVNode"])("i", {
                  class: "fa fa-chevron-up",
                  onClick: _cache[8] || (_cache[8] = (...args) => (_ctx.handleIncrease(...args)))
                }),
                Object(external_vue_["createVNode"])("i", {
                  class: "fa fa-chevron-down",
                  onClick: _cache[9] || (_cache[9] = (...args) => (_ctx.handleDecrease(...args)))
                })
              ]))
            : Object(external_vue_["createCommentVNode"])("v-if", true),
          Object(external_vue_["createVNode"])(external_vue_["Transition"], { name: "v-easy-error" }, {
            default: Object(external_vue_["withCtx"])(() => [
              (_ctx.error)
                ? (Object(external_vue_["openBlock"])(), Object(external_vue_["createBlock"])("div", {
                    key: 0,
                    class: "error inspection",
                    style: _ctx.errorOptions
                  }, Object(external_vue_["toDisplayString"])(_ctx.msg), 5 /* TEXT, STYLE */))
                : Object(external_vue_["createCommentVNode"])("v-if", true)
            ]),
            _: 1
          })
        ], 64 /* STABLE_FRAGMENT */))
  ], 4 /* STYLE */))
}
// CONCATENATED MODULE: ./packages/input/src/main.vue?vue&type=template&id=32a6dc94

// EXTERNAL MODULE: external "core-js/modules/es.array.concat"
var es_array_concat_ = __webpack_require__(14);

// EXTERNAL MODULE: external "core-js/modules/es.regexp.constructor"
var es_regexp_constructor_ = __webpack_require__(23);

// EXTERNAL MODULE: external "core-js/modules/es.regexp.to-string"
var es_regexp_to_string_ = __webpack_require__(24);

// CONCATENATED MODULE: ./src/locale/zh.js
/* harmony default export */ var zh = ({
  plain: {
    err: '输入有误'
  },
  ip: {
    err: '请输入正确的IP地址'
  },
  subnet: {
    err: '请输入正确的子网掩码'
  },
  button: {
    confirm: '确定',
    cancel: '取消'
  }
});
// EXTERNAL MODULE: external "deepmerge"
var external_deepmerge_ = __webpack_require__(16);
var external_deepmerge_default = /*#__PURE__*/__webpack_require__.n(external_deepmerge_);

// CONCATENATED MODULE: ./src/utils/dom.ts
const dc = document;
const isServer = false;
const SPECIAL_CHARS_REGEXP = /([\:\-\_]+(.))/g;
const MOZ_HACK_REGEXP = /^moz([A-Z])/;
const ieVersion = isServer ? 0 : Number(dc.documentMode);
/* istanbul ignore next */
const trim = function (string) {
    return (string || '').replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, '');
};
/* istanbul ignore next */
const camelCase = function (name) {
    return name
        .replace(SPECIAL_CHARS_REGEXP, function (_, separator, letter, offset) {
        return offset ? letter.toUpperCase() : letter;
    })
        .replace(MOZ_HACK_REGEXP, 'Moz$1');
};
/* istanbul ignore next */
const on = (function () {
    if (!isServer && document.addEventListener) {
        return function (element, event, handler) {
            if (element && event && handler) {
                element.addEventListener(event, handler, false);
            }
        };
    }
    else {
        return function (element, event, handler) {
            if (element && event && handler) {
                element.attachEvent('on' + event, handler);
            }
        };
    }
})();
/* istanbul ignore next */
const off = (function () {
    if (!isServer && document.removeEventListener) {
        return function (element, event, handler) {
            if (element && event) {
                element.removeEventListener(event, handler, false);
            }
        };
    }
    else {
        return function (element, event, handler) {
            if (element && event) {
                element.detachEvent('on' + event, handler);
            }
        };
    }
})();
/* istanbul ignore next */
const once = function (el, event, fn) {
    var listener = function () {
        if (fn) {
            fn.apply(this, arguments);
        }
        off(el, event, listener);
    };
    on(el, event, listener);
};
/* istanbul ignore next */
function hasClass(el, cls) {
    if (!el || !cls)
        return false;
    if (cls.indexOf(' ') !== -1)
        throw new Error('className should not contain space.');
    if (el.classList) {
        return el.classList.contains(cls);
    }
    else {
        return (' ' + el.className + ' ').indexOf(' ' + cls + ' ') > -1;
    }
}
/* istanbul ignore next */
function addClass(el, cls) {
    if (!el)
        return;
    var curClass = el.className;
    var classes = (cls || '').split(' ');
    for (var i = 0, j = classes.length; i < j; i++) {
        var clsName = classes[i];
        if (!clsName)
            continue;
        if (el.classList) {
            el.classList.add(clsName);
        }
        else if (!hasClass(el, clsName)) {
            curClass += ' ' + clsName;
        }
    }
    if (!el.classList) {
        el.className = curClass;
    }
}
/* istanbul ignore next */
function removeClass(el, cls) {
    if (!el || !cls)
        return;
    var classes = cls.split(' ');
    var curClass = ' ' + el.className + ' ';
    for (var i = 0, j = classes.length; i < j; i++) {
        var clsName = classes[i];
        if (!clsName)
            continue;
        if (el.classList) {
            el.classList.remove(clsName);
        }
        else if (hasClass(el, clsName)) {
            curClass = curClass.replace(' ' + clsName + ' ', ' ');
        }
    }
    if (!el.classList) {
        el.className = trim(curClass);
    }
}
/* istanbul ignore next */
const getStyle = ieVersion < 9
    ? function (element, styleName) {
        if (isServer)
            return;
        if (!element || !styleName)
            return null;
        styleName = camelCase(styleName);
        if (styleName === 'float') {
            styleName = 'styleFloat';
        }
        try {
            switch (styleName) {
                case 'opacity':
                    try {
                        return element.filters.item('alpha').opacity / 100;
                    }
                    catch (e) {
                        return 1.0;
                    }
                default:
                    return element.style[styleName] || element.currentStyle
                        ? element.currentStyle[styleName]
                        : null;
            }
        }
        catch (e) {
            return element.style[styleName];
        }
    }
    : function (element, styleName) {
        if (isServer)
            return;
        if (!element || !styleName)
            return null;
        styleName = camelCase(styleName);
        if (styleName === 'float') {
            styleName = 'cssFloat';
        }
        try {
            var computed = document.defaultView.getComputedStyle(element, '');
            return element.style[styleName] || computed
                ? computed[styleName]
                : null;
        }
        catch (e) {
            return element.style[styleName];
        }
    };
/* istanbul ignore next */
function setStyle(element, styleName, value) {
    if (!element || !styleName)
        return;
    if (typeof styleName === 'object') {
        for (var prop in styleName) {
            if (styleName.hasOwnProperty(prop)) {
                setStyle(element, prop, styleName[prop]);
            }
        }
    }
    else {
        styleName = camelCase(styleName);
        if (styleName === 'opacity' && ieVersion < 9) {
            element.style.filter = isNaN(value)
                ? ''
                : 'alpha(opacity=' + value * 100 + ')';
        }
        else {
            element.style[styleName] = value;
        }
    }
}
/* Whether it exists in the DOM tree */
const isInPage = function isInPage(node) {
    return node === document.body ? false : document.body.contains(node);
};
const removeChildren = function removeChildren(node, option) {
    let excludeCount = 0; // 排除的子节点
    if (typeof option === 'object') {
        if (option.exclude) {
            excludeCount = 1;
        }
        if (Array.isArray(option.exclude)) {
            excludeCount = option.exclude.length;
            let index = 0;
            while (node.childNodes.length - excludeCount) {
                const el = node.childNodes[index];
                if (option.exclude.includes(el)) {
                    index++;
                    continue;
                }
                node.removeChild(el);
            }
            return true;
        }
    }
    let currentIndex = 0;
    while (node.childNodes.length - excludeCount) {
        const el = node.childNodes[currentIndex];
        if (option.exclude === el) {
            currentIndex++;
            continue;
        }
        node.removeChild(el);
    }
};
const pageInfo = function pageInfo() {
    return {
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight,
    };
};

// CONCATENATED MODULE: ./src/locale/util.ts

const util_hasOwnProperty = Object.prototype.hasOwnProperty;
function util_noop() { }
function util_hasOwn(obj, key) {
    return util_hasOwnProperty.call(obj, key);
}
function extend(to, _from) {
    for (let key in _from) {
        to[key] = _from[key];
    }
    return to;
}
function toObject(arr) {
    var res = {};
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]) {
            extend(res, arr[i]);
        }
    }
    return res;
}
const getValueByPath = function (object, prop) {
    prop = prop || '';
    const paths = prop.split('.');
    let current = object;
    let result = null;
    for (let i = 0, j = paths.length; i < j; i++) {
        const path = paths[i];
        if (!current)
            break;
        if (i === j - 1) {
            result = current[path];
            break;
        }
        current = current[path];
    }
    return result;
};
function getPropByPath(obj, path, strict) {
    let tempObj = obj;
    path = path.replace(/\[(\w+)\]/g, '.$1');
    path = path.replace(/^\./, '');
    let keyArr = path.split('.');
    let i = 0;
    for (let len = keyArr.length; i < len - 1; ++i) {
        if (!tempObj && !strict)
            break;
        let key = keyArr[i];
        if (key in tempObj) {
            tempObj = tempObj[key];
        }
        else {
            if (strict) {
                throw new Error('please transfer a valid prop path to form item!');
            }
            break;
        }
    }
    return {
        o: tempObj,
        k: keyArr[i],
        v: tempObj ? tempObj[keyArr[i]] : null,
    };
}
const generateId = function () {
    return Math.floor(Math.random() * 10000);
};
const valueEquals = (a, b) => {
    // see: https://stackoverflow.com/questions/3115982/how-to-check-if-two-arrays-are-equal-with-javascript
    if (a === b)
        return true;
    if (!(a instanceof Array))
        return false;
    if (!(b instanceof Array))
        return false;
    if (a.length !== b.length)
        return false;
    for (let i = 0; i !== a.length; ++i) {
        if (a[i] !== b[i])
            return false;
    }
    return true;
};
const escapeRegexpString = (value = '') => String(value).replace(/[|\\{}()[\]^$+*?.]/g, '\\$&');
// TODO: use native Array.find, Array.findIndex when IE support is dropped
const arrayFindIndex = function (arr, pred) {
    for (let i = 0; i !== arr.length; ++i) {
        if (pred(arr[i])) {
            return i;
        }
    }
    return -1;
};
const arrayFind = function (arr, pred) {
    const idx = arrayFindIndex(arr, pred);
    return idx !== -1 ? arr[idx] : undefined;
};
// coerce truthy value to array
const coerceTruthyValueToArray = function (val) {
    if (Array.isArray(val)) {
        return val;
    }
    else if (val) {
        return [val];
    }
    else {
        return [];
    }
};
const isIE = function () {
    return !isNaN(Number(dc.documentMode));
};
const isEdge = function () {
    return navigator.userAgent.indexOf('Edge') > -1;
};

// CONCATENATED MODULE: ./src/locale/format.ts

const RE_NARGS = /(%|)\{([0-9a-zA-Z_]+)\}/g;
/**
 *  String format template
 *  - Inspired:
 *    https://github.com/Matt-Esch/string-template/index.js
 */
/* harmony default export */ var format = (function () {
    /**
     * template
     *
     * @param {String} string
     * @param {Array} ...args
     * @return {String}
     */
    function template(string, ...args) {
        if (args.length === 1 && typeof args[0] === 'object') {
            args = args[0];
        }
        if (!args || !args.hasOwnProperty) {
            args = {};
        }
        return string.replace(RE_NARGS, (match, prefix, i, index) => {
            let result;
            if (string[index - 1] === '{' && string[index + match.length] === '}') {
                return i;
            }
            else {
                result = util_hasOwn(args, i) ? args[i] : null;
                if (result === null || result === undefined) {
                    return '';
                }
                return result;
            }
        });
    }
    return template;
});

// CONCATENATED MODULE: ./src/locale/index.ts



const locale_format = format();
let lang = zh;
let merged = false;
let i18nHandler = function () {
    const vuei18n = Object.getPrototypeOf(this).$t;
    if (typeof vuei18n === 'function' && !!this.locale) {
        if (!merged) {
            merged = true;
            this.locale(this.config.lang, external_deepmerge_default()(lang, this.locale(this.config.lang) || {}, { clone: true }));
        }
        return vuei18n.apply(this, arguments);
    }
};
const t = function (path, options) {
    let value = i18nHandler.apply(this, arguments);
    if (value !== null && value !== undefined)
        return value;
    const array = path.split('.');
    let current = lang;
    for (let i = 0, j = array.length; i < j; i++) {
        const property = array[i];
        value = current[property];
        if (i === j - 1)
            return locale_format(value, options);
        if (!value)
            return '';
        current = value;
    }
    return '';
};
const use = function (l) {
    lang = l || lang;
};
const i18n = function (fn) {
    i18nHandler = fn || i18nHandler;
};
/* harmony default export */ var locale = ({ use, t, i18n });

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--0!./packages/input/src/main.vue?vue&type=script&lang=js








/* harmony default export */ var input_src_mainvue_type_script_lang_js = (Object(external_vue_["defineComponent"])({
  name: 'VeInput',
  emits: ['status', 'input', 'blur', 'focus', 'change'],
  props: {
    maxWidth: {
      type: String
    },
    errorOptions: {
      type: Object
    },
    disabled: {
      type: [Boolean, String],
      default: false
    },
    readonly: {
      type: [Boolean, String],
      default: false
    },
    message: {
      type: String
    },
    inspect: {
      type: String,
      default: '/^.?$/g'
    },
    type: {
      type: String,
      default: 'length'
    },
    typeInput: {
      type: String,
      default: 'text'
    },
    step: {
      type: [Number, String],
      default: 1
    },
    target: {
      type: [String, Array],
      default: 'blur'
    },
    options: [Object, Array],
    value: {
      default: ''
    }
  },
  data: function data() {
    return {
      currentVal: this.value === undefined || this.value === null ? '' : this.value,
      error: false,
      eventContainer: '',
      isOnComposition: false,
      valueBeforeComposition: null
    };
  },
  computed: {
    normalizedOptions: function normalizedOptions() {
      return Array.isArray(this.options) ? {
        min: this.options[0],
        max: this.options[1]
      } : this.options;
    },
    opt_type: function opt_type() {
      return this.options ? this.normalizedOptions : {
        min: -Infinity,
        max: Infinity
      };
    },
    propertyMaxMin: function propertyMaxMin() {
      if (this.typeInput === 'number') {
        return this.normalizedOptions;
      }

      return null;
    },
    msg: function msg() {
      return this.options ? "".concat(this.message, "(").concat(this.opt_type.min, " - ").concat(this.opt_type.max, ")") : this.message || t('plain.err');
    },
    isNumberPrefix: function isNumberPrefix() {
      return this.typeInput === 'number';
    }
  },
  watch: {
    value: function value(val) {
      this.setCurrentValue(val);
      this.mergeTarget('modify');
    },
    eventContainer: function eventContainer(val) {
      this.mergeMesh(val);
    },
    error: function error(val) {
      this.$emit('status', !val);
    }
  },
  methods: {
    handleIncrease: function handleIncrease() {
      if (this.exceedMax()) {
        this.setCurrentValue(+this.currentVal + +this.step);
      }
    },
    handleDecrease: function handleDecrease() {
      if (this.exceedMin()) {
        this.setCurrentValue(+this.currentVal - +this.step);
      }
    },
    exceedMax: function exceedMax() {
      var _this$opt_type;

      return +this.currentVal < ((_this$opt_type = this.opt_type) === null || _this$opt_type === void 0 ? void 0 : _this$opt_type.max);
    },
    exceedMin: function exceedMin() {
      var _this$opt_type2;

      return +this.currentVal > ((_this$opt_type2 = this.opt_type) === null || _this$opt_type2 === void 0 ? void 0 : _this$opt_type2.min);
    },
    err: function err() {
      return t('plain.err');
    },
    handleInput: function handleInput(event) {
      this.setCurrentValue(event.target.value);
      this.mergeTarget('input');
      this.$emit('input', event.target.value);
    },
    handleBlur: function handleBlur(event) {
      this.$emit('blur', event);
      this.mergeTarget('blur');
    },
    handleFocus: function handleFocus(event) {
      this.$emit('focus', event);
      this.mergeTarget('focus');
    },
    handleChange: function handleChange(event) {
      this.$emit('change', event.target.value);
    },
    mergeTarget: function mergeTarget(type) {
      if (Array.isArray(this.target)) contain(this.target, type) && this.mergeMesh(type);else this.target === type && this.mergeMesh(type);
    },
    handleComposition: function handleComposition(event) {
      if (event.type === 'compositionend') {
        this.isOnComposition = false;
        this.currentVal = this.valueBeforeComposition;
        this.valueBeforeComposition = null;
        this.handleInput(event);
      } else {
        var text = event.target.value;
        var lastCharacter = text[text.length - 1] || '';
        this.isOnComposition = !/([(\uAC00-\uD7AF)|(\u3130-\u318F)])+/gi.test(lastCharacter);

        if (this.isOnComposition && event.type === 'compositionstart') {
          this.valueBeforeComposition = text;
        }
      }
    },
    mergeMesh: function mergeMesh(val) {
      if (this.type === 'length') {
        if (val === this.target) {
          this.error = this.currentVal.length < this.opt_type.min || this.currentVal.length > this.opt_type.max;
        }
      } else if (this.type === 'reg' && contain(this.target, val)) {
        var regexp = new RegExp(this.inspect);
        this.error = !regexp.test(this.currentVal);
      }
    },
    setCurrentValue: function setCurrentValue(value) {
      if (value === this.currentVal) return;
      this.currentVal = value;

      if (this.typeInput === 'number') {
        if (!this.exceedMax()) {
          this.currentVal = this.normalizedOptions.max;
        }

        if (!this.exceedMin()) {
          this.currentVal = this.normalizedOptions.min;
        }
      }

      this.$emit('input', this.currentVal);
    }
  }
}));
// CONCATENATED MODULE: ./packages/input/src/main.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./packages/input/src/main.vue



input_src_mainvue_type_script_lang_js.render = mainvue_type_template_id_32a6dc94_render

/* harmony default export */ var input_src_main = (input_src_mainvue_type_script_lang_js);
// CONCATENATED MODULE: ./packages/input/index.ts

input_src_main.install = function (Vue) {
    Vue.component(input_src_main.name, input_src_main);
};
/* harmony default export */ var input = (input_src_main);

// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ref--5!./node_modules/vue-loader/dist??ref--0!./packages/steps/src/steps.vue?vue&type=template&id=88c6cfaa


const stepsvue_type_template_id_88c6cfaa_hoisted_1 = { class: "ve-steps-footer" }

function stepsvue_type_template_id_88c6cfaa_render(_ctx, _cache) {
  return (Object(external_vue_["openBlock"])(), Object(external_vue_["createBlock"])("div", Object(external_vue_["mergeProps"])({
    class: ['ve-steps', 've-steps__' + _ctx.placement]
  }, _ctx.$attrs), [
    Object(external_vue_["createVNode"])("div", {
      class: ['ve-steps-nav', 've-steps-nav__' + _ctx.placement, _ctx.navClassName]
    }, [
      Object(external_vue_["createVNode"])("ul", null, [
        (Object(external_vue_["openBlock"])(true), Object(external_vue_["createBlock"])(external_vue_["Fragment"], null, Object(external_vue_["renderList"])(_ctx.steps, (item, index) => {
          return (Object(external_vue_["openBlock"])(), Object(external_vue_["createBlock"])("li", {
            key: index,
            class: {
            've-steps-active': _ctx.active === index,
            've-steps-success': _ctx.successStatus.includes(index),
            've-steps-error': _ctx.errorStatus.includes(index),
          }
          }, [
            (item.icon)
              ? (Object(external_vue_["openBlock"])(), Object(external_vue_["createBlock"])("i", {
                  key: 0,
                  class: [item.iconClass, 'fa-' + item.icon]
                }, null, 2 /* CLASS */))
              : Object(external_vue_["createCommentVNode"])("v-if", true),
            Object(external_vue_["createTextVNode"])(Object(external_vue_["toDisplayString"])(item.title), 1 /* TEXT */)
          ], 2 /* CLASS */))
        }), 128 /* KEYED_FRAGMENT */))
      ])
    ], 2 /* CLASS */),
    Object(external_vue_["createVNode"])("div", {
      class: ['ve-steps-content', 've-steps-content__' + _ctx.placement]
    }, [
      Object(external_vue_["renderSlot"])(_ctx.$slots, "default"),
      Object(external_vue_["createVNode"])("div", stepsvue_type_template_id_88c6cfaa_hoisted_1, [
        Object(external_vue_["createVNode"])("div", {
          class: ['ve-steps-btn', 've-steps-btn-' + _ctx.placement]
        }, [
          Object(external_vue_["renderSlot"])(_ctx.$slots, "footer")
        ], 2 /* CLASS */)
      ])
    ], 2 /* CLASS */)
  ], 16 /* FULL_PROPS */))
}
// CONCATENATED MODULE: ./packages/steps/src/steps.vue?vue&type=template&id=88c6cfaa

// EXTERNAL MODULE: external "core-js/modules/es.array.from"
var es_array_from_ = __webpack_require__(25);

// EXTERNAL MODULE: external "core-js/modules/es.object.to-string"
var es_object_to_string_ = __webpack_require__(8);

// EXTERNAL MODULE: external "core-js/modules/es.promise"
var es_promise_ = __webpack_require__(9);

// EXTERNAL MODULE: external "core-js/modules/es.string.iterator"
var es_string_iterator_ = __webpack_require__(26);

// EXTERNAL MODULE: external "regenerator-runtime/runtime"
var runtime_ = __webpack_require__(15);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--0!./packages/steps/src/steps.vue?vue&type=script&lang=js










function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


/* harmony default export */ var stepsvue_type_script_lang_js = (Object(external_vue_["defineComponent"])({
  name: 'VeSteps',
  props: {
    active: {
      type: Number,
      required: true
    },
    placement: {
      type: String,
      default: 'left'
    },
    navClassName: {
      type: String
    },
    iconStyle: {
      type: String,
      default: 'solid'
    }
  },
  data: function data() {
    return {
      steps: [],
      errorStatus: [],
      oldActive: 0
    };
  },
  computed: {
    successStatus: function successStatus() {
      /* Documenting steps completed */
      return Object.keys(Array.from({
        length: this.active
      })).map(function (i) {
        return +i;
      });
    }
  },
  watch: {
    active: {
      handler: function () {
        var _handler = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(index) {
          var steps, oldComponentInstance, componentInstance;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return this.$nextTick();

                case 2:
                  steps = this.steps.filter(function (o) {
                    return o.self._.isMounted;
                  });

                  if (steps.length) {
                    oldComponentInstance = steps[this.oldActive].self;
                    componentInstance = steps[index].self;
                    oldComponentInstance.updateStatus(false);
                    componentInstance.updateStatus(true);
                    this.oldActive = index;
                  }

                case 4:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function handler(_x) {
          return _handler.apply(this, arguments);
        }

        return handler;
      }(),
      immediate: true
    }
  }
}));
// CONCATENATED MODULE: ./packages/steps/src/steps.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./packages/steps/src/steps.vue



stepsvue_type_script_lang_js.render = stepsvue_type_template_id_88c6cfaa_render

/* harmony default export */ var steps = (stepsvue_type_script_lang_js);
// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ref--5!./node_modules/vue-loader/dist??ref--0!./packages/steps/src/step.vue?vue&type=template&id=3b2ca236


function stepvue_type_template_id_3b2ca236_render(_ctx, _cache) {
  return Object(external_vue_["withDirectives"])((Object(external_vue_["openBlock"])(), Object(external_vue_["createBlock"])("div", Object(external_vue_["mergeProps"])({ class: "ve-step" }, _ctx.$attrs), [
    Object(external_vue_["renderSlot"])(_ctx.$slots, "default")
  ], 16 /* FULL_PROPS */)), [
    [external_vue_["vShow"], _ctx.isActive]
  ])
}
// CONCATENATED MODULE: ./packages/steps/src/step.vue?vue&type=template&id=3b2ca236

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--0!./packages/steps/src/step.vue?vue&type=script&lang=js


/* harmony default export */ var stepvue_type_script_lang_js = (Object(external_vue_["defineComponent"])({
  name: 'VeStep',
  props: {
    title: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: false
    },
    iconStyle: {
      type: String,
      default: 'solid'
    }
  },
  setup: function setup(props, context) {
    var isActive = Object(external_vue_["ref"])(false);
    return {
      isActive: isActive
    };
  },
  methods: {
    updateStatus: function updateStatus(status) {
      this.isActive = status;
    }
  },
  beforeMount: function beforeMount() {
    var _this$$parent;

    if (Array.isArray((_this$$parent = this.$parent) === null || _this$$parent === void 0 ? void 0 : _this$$parent.steps)) {
      this.$parent.steps.push({
        title: this.title,
        icon: this.icon,
        iconClass: computedIconStyle(this.iconStyle),
        self: this
      });
    }
  }
}));
// CONCATENATED MODULE: ./packages/steps/src/step.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./packages/steps/src/step.vue



stepvue_type_script_lang_js.render = stepvue_type_template_id_3b2ca236_render

/* harmony default export */ var step = (stepvue_type_script_lang_js);
// CONCATENATED MODULE: ./packages/steps/index.ts


steps.install = function (Vue) {
    Vue.component(steps.name, steps);
};
step.install = function (Vue) {
    Vue.component(step.name, step);
};


// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ref--5!./node_modules/vue-loader/dist??ref--0!./packages/tool-tip/src/main.vue?vue&type=template&id=b5b1b47c


const mainvue_type_template_id_b5b1b47c_hoisted_1 = { key: 1 }

function mainvue_type_template_id_b5b1b47c_render(_ctx, _cache) {
  const _component_render_node = Object(external_vue_["resolveComponent"])("render-node")

  return (Object(external_vue_["openBlock"])(), Object(external_vue_["createBlock"])(external_vue_["Transition"], { name: _ctx.transition }, {
    default: Object(external_vue_["withCtx"])(() => [
      Object(external_vue_["withDirectives"])(Object(external_vue_["createVNode"])("div", {
        class: ['v-easy-tip', 've-tip-' + _ctx.placement, 've-tip--' + _ctx.effect, _ctx.Class],
        onMouseenter: _cache[1] || (_cache[1] = (...args) => (_ctx.enter(...args))),
        onMouseleave: _cache[2] || (_cache[2] = (...args) => (_ctx.handleMouseLeave(...args))),
        onClick: _cache[3] || (_cache[3] = (...args) => (_ctx.handleClick(...args)))
      }, [
        (_ctx.html)
          ? (Object(external_vue_["openBlock"])(), Object(external_vue_["createBlock"])("p", {
              key: 0,
              innerHTML: _ctx.html
            }, null, 8 /* PROPS */, ["innerHTML"]))
          : (_ctx.content)
            ? (Object(external_vue_["openBlock"])(), Object(external_vue_["createBlock"])("p", mainvue_type_template_id_b5b1b47c_hoisted_1, Object(external_vue_["toDisplayString"])(_ctx.content), 1 /* TEXT */))
            : Object(external_vue_["createVNode"])(_component_render_node, { key: 2 }),
        Object(external_vue_["createVNode"])("div", {
          class: ['popper__arrow', 'popper__arrow--' + _ctx.effect]
        }, null, 2 /* CLASS */)
      ], 34 /* CLASS, HYDRATE_EVENTS */), [
        [external_vue_["vShow"], _ctx.domVisible]
      ])
    ]),
    _: 1
  }, 8 /* PROPS */, ["name"]))
}
// CONCATENATED MODULE: ./packages/tool-tip/src/main.vue?vue&type=template&id=b5b1b47c

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--0!./packages/tool-tip/src/main.vue?vue&type=script&lang=js

/* harmony default export */ var tool_tip_src_mainvue_type_script_lang_js = (Object(external_vue_["defineComponent"])({
  name: 'VTip',
  components: {
    renderNode: {
      render: function render() {
        var _this$$root;

        var tipVNde = (_this$$root = this.$root) === null || _this$$root === void 0 ? void 0 : _this$$root.VNode;
        var VNode = Object(external_vue_["h"])('span');

        if (typeof tipVNde === 'function') {
          VNode = tipVNde();
        } else {
          // eslint-disable-next-line no-console
          console.warn('VNode is not a function');
        }

        return VNode;
      }
    }
  },
  mounted: function mounted() {},
  beforeCreate: function beforeCreate() {},
  methods: {
    handleClick: function handleClick(event) {
      event.stopPropagation();
    },
    handleMouseLeave: function handleMouseLeave() {
      if (this.target !== 'click') {
        this.leave();
      }
    },
    enter: function enter() {
      if (!this.enterable || this.target === 'click') return false;
      this.hover = true;
      this.domVisible = true;
    },
    leave: function leave() {
      var _this = this;

      this.hover = false;

      if (this.enterable) {
        setTimeout(function () {
          !_this.hover && (_this.domVisible = false);
        }, this.hideAfter);
      } else {
        this.domVisible = false;
      }
    }
  }
}));
// CONCATENATED MODULE: ./packages/tool-tip/src/main.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./packages/tool-tip/src/main.vue



tool_tip_src_mainvue_type_script_lang_js.render = mainvue_type_template_id_b5b1b47c_render

/* harmony default export */ var tool_tip_src_main = (tool_tip_src_mainvue_type_script_lang_js);
// EXTERNAL MODULE: external "@popperjs/core"
var core_ = __webpack_require__(17);

// CONCATENATED MODULE: ./packages/tool-tip/src/directive.ts




const tipDirective = {};
let directive_index = 1;
let tipInstance = [];
const toggleTip = (el) => {
    Object(external_vue_["nextTick"])().then(() => {
        insertDom(el);
    });
};
const insertDom = (el) => {
    if (getStyle(el, 'display') !== 'none' &&
        getStyle(el, 'visibility') !== 'hidden') {
        Object.keys(el.tipStyle).forEach((property) => {
            el.tip.style[property] = el.tipStyle[property] + 'px';
        });
        if (el.originalPosition !== 'absolute' && el.originalPosition !== 'fixed') {
            addClass(el, 've-tip-parent--relative');
        }
        !el.tip.isConnected && document.body.appendChild(el.tip);
        el._is_instance_remove_ = false;
        el.tip.popper = Object(core_["createPopper"])(el, el.tip, {
            placement: el.instance.placement,
            modifiers: [
                {
                    name: 'arrow',
                    options: {
                        element: el.tip.querySelector('.popper__arrow'),
                    },
                },
                {
                    name: 'offset',
                    options: {
                        offset: [0, (el.instance.offset || 0) + 6],
                    },
                },
            ],
        });
    }
};
const enter = (el, binding, simple, event) => {
    if (event) {
        event.stopPropagation();
    }
    const target = binding.value.target;
    if (el._uuid_tip_ && !el._is_instance_remove_) {
        el.instance.hover = true;
        el.instance.domVisible = true;
    }
    else {
        // First rendering
        directive_index += 1;
        el._uuid_tip_ = directive_index;
        const value = binding.value;
        const modifiers = Object.keys(binding.modifiers);
        const placement = modifiers.length > 0 ? modifiers[0] : value['placement'] || 'top';
        const effect = value.effect || 'dark';
        const data = simple
            ? {
                ...value,
                placement: placement,
                effect: effect,
                domVisible: true,
            }
            : {
                content: value,
                placement: placement,
                domVisible: true,
            };
        const tip = Object(external_vue_["createApp"])({
            ...tool_tip_src_main,
            setup() {
                return Object(external_vue_["reactive"])(Object.assign({
                    placement: 'top',
                    Class: [],
                    content: '',
                    domVisible: false,
                    hover: false,
                    hideAfter: 200,
                    transition: 'fade',
                    enterable: true,
                    target: '',
                    html: '',
                    effect: 'dark',
                }, data));
            },
        }).mount(document.createElement('div'));
        tip._uuid_tip_ = directive_index;
        // Whether to automatically remove the tip
        el._autoRemoveTip = typeof value.autoRemoveTip === 'undefined';
        el.instance = tip;
        el.tip = tip.$el;
        el.tipStyle = {};
        // Manage Tip Instances
        tipInstance.push({
            [directive_index]: tip.$el,
        });
    }
    // 隐藏 Tip
    if (target === 'click') {
        document.documentElement.addEventListener('click', el.instance.leave, {
            once: true,
        });
    }
    binding.value && toggleTip(el);
};
const leave = (el) => {
    el.instance.leave();
};
const addEvent = (el, binding, simple) => {
    Object(external_vue_["nextTick"])(() => {
        if (binding.value.target === 'click') {
            el.addEventListener('click', (e) => enter(el, binding, simple, e), false);
        }
        else {
            el.addEventListener('mouseenter', enter.bind(null, el, binding, simple), false);
            el.addEventListener('mouseleave', leave.bind(null, el), false);
        }
    });
};
const directive_tip = {
    mounted: function (el, binding) {
        el._uuid_tip_ = 0;
        el._is_instance_remove_ = false;
        addEvent(el, binding, typeof binding.value !== 'string');
    },
    unmounted: function (el) {
        if (el._autoRemoveTip) {
            const id = el._uuid_tip_;
            const tipIndex = tipInstance.findIndex((o) => o[id]);
            if (tipIndex === 0 || tipIndex) {
                const tip = tipInstance.splice(tipIndex, 1)[0][id];
                tip.popper.destroy();
                document.body.removeChild(tip);
            }
        }
    },
};
tipDirective.install = (App) => {
    App.directive('tip', directive_tip);
};
/* harmony default export */ var directive = (tipDirective);

// CONCATENATED MODULE: ./packages/tool-tip/index.ts

/* harmony default export */ var tool_tip = ({
    install(Vue) {
        Vue.use(directive);
    },
    directive: directive,
});

// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ref--5!./node_modules/vue-loader/dist??ref--0!./packages/skeleton/src/main.vue?vue&type=template&id=6751b78f


const mainvue_type_template_id_6751b78f_hoisted_1 = {
  class: "v-easy-loading",
  "data-loading-id": "v-easy-loading-dom"
}
const mainvue_type_template_id_6751b78f_hoisted_2 = {
  key: 0,
  class: "v-easy-loading-dom--rect"
}

function mainvue_type_template_id_6751b78f_render(_ctx, _cache) {
  return Object(external_vue_["withDirectives"])((Object(external_vue_["openBlock"])(), Object(external_vue_["createBlock"])("div", mainvue_type_template_id_6751b78f_hoisted_1, [
    (_ctx.type === 'text')
      ? (Object(external_vue_["openBlock"])(), Object(external_vue_["createBlock"])("span", mainvue_type_template_id_6751b78f_hoisted_2, Object(external_vue_["toDisplayString"])(_ctx.content), 1 /* TEXT */))
      : Object(external_vue_["createCommentVNode"])("v-if", true),
    (_ctx.type === 'circle')
      ? (Object(external_vue_["openBlock"])(), Object(external_vue_["createBlock"])("span", {
          key: 1,
          class: "v-easy-loading-dom v-easy-loading-dom--circle",
          style: _ctx.circleStyle
        }, null, 4 /* STYLE */))
      : Object(external_vue_["createCommentVNode"])("v-if", true),
    (_ctx.type === 'rect')
      ? (Object(external_vue_["openBlock"])(), Object(external_vue_["createBlock"])("span", {
          key: 2,
          class: "v-easy-loading-dom v-easy-loading-dom--rect",
          style: _ctx.circleStyle
        }, null, 4 /* STYLE */))
      : Object(external_vue_["createCommentVNode"])("v-if", true)
  ], 512 /* NEED_PATCH */)), [
    [external_vue_["vShow"], _ctx.domVisible]
  ])
}
// CONCATENATED MODULE: ./packages/skeleton/src/main.vue?vue&type=template&id=6751b78f

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--0!./packages/skeleton/src/main.vue?vue&type=script&lang=js








var mainvue_type_script_lang_js_char = '—';
var map = [2, 0, 2, 0, 2, 0, 1, 0, 2, 0, 5, 0, 5, 0, 2, 0, 1, 0, 3, 0, 3, 0, 5, 0, 1, 0, 3, 0, 1, 0, 3, 0, 3, 0, 3, 0, 1, 0, 2, 0, 1, 0, 2, 0, 4, 0, 2, 0, 3, 0, 6, 0, 4, 0, 4, 0, 3, 0, 2, 0, 1, 0, 3, 0, 1, 0, 1, 0, 4, 0, 5, 0, 2, 0, 2, 0, 3, 0, 3, 0, 1, 0, 6, 0, 1, 0, 4, 0, 3, 0, 2, 0, 2, 0, 1, 0, 2, 0, 2, 0, 4];
/* harmony default export */ var skeleton_src_mainvue_type_script_lang_js = (Object(external_vue_["defineComponent"])({
  name: 'VLoadingPreloadStyle',
  data: function data() {
    return {
      map: map
    };
  },
  computed: {
    content: function content() {
      var _this = this;

      var placeholder = mainvue_type_script_lang_js_char;

      if (this.nodeNum) {
        placeholder = '';

        if (this.nodeNum > this.map.length) {
          var copyCount = ~~(this.nodeNum / this.map.length);
          var i = 0,
              temp = this.map;

          for (; i < copyCount; i++) {
            // eslint-disable-next-line vue/no-side-effects-in-computed-properties
            this.map = [].concat(this.map, temp);
          }
        }

        this.map.filter(function (o, i) {
          return i < _this.nodeNum;
        }).forEach(function (item) {
          if (item) {
            placeholder += _initArray(item, mainvue_type_script_lang_js_char).join('');
          } else {
            placeholder += ' ';
          }
        });
      }

      return placeholder;
    }
  },
  methods: {
    showHide: function showHide(visible) {
      this.domVisible = visible;
    }
  }
}));
// CONCATENATED MODULE: ./packages/skeleton/src/main.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./packages/skeleton/src/main.vue



skeleton_src_mainvue_type_script_lang_js.render = mainvue_type_template_id_6751b78f_render

/* harmony default export */ var skeleton_src_main = (skeleton_src_mainvue_type_script_lang_js);
// CONCATENATED MODULE: ./packages/skeleton/src/directive.ts



const loadingDirective = {};
const directive_insertDom = (el, binding) => {
    const modifiers = Object.keys(binding.modifiers);
    let nodeNum = 0;
    if (modifiers.length) {
        nodeNum = Number(modifiers[0]);
        if (!/^\d+$/.test('' + nodeNum)) {
            /*eslint no-console:0*/
            console.error(`v-loading-preload only accepts numeric modifiers and only supports one numeric modifier. \n key: ${modifiers[0]}`);
            nodeNum = 0;
        }
    }
    else {
        nodeNum = el.getAttribute('data-loading-text');
    }
    const type = el.getAttribute('data-loading-type') || 'text';
    const d = el.getAttribute('data-loading-diameter') || '16';
    const data = {
        nodeNum,
        type,
        domVisible: !binding.value,
        circleStyle: {
            width: d + 'px',
            height: d + 'px',
        },
    };
    const loading = Object(external_vue_["createApp"])({
        ...skeleton_src_main,
        setup() {
            return Object(external_vue_["reactive"])(Object.assign({
                width: 0,
                height: 0,
                nodeNum: 0,
                type: '',
                circleStyle: {},
                domVisible: true,
            }, {
                el: el,
                data,
            }));
        },
    }).mount(document.createElement('div'));
    el.instance = loading;
    el.$loading = loading.$el;
    el.appendChild(loading.$el);
};
const removeLoadingDom = (el, binding) => {
    if (String(binding.oldValue) === String(binding.value)) {
        return;
    }
    if (binding.value) {
        removeClass(el, 'v-easy-loading-parent--relative');
        el.instance.showHide(false);
    }
    else {
        el.instance.showHide(true);
    }
};
loadingDirective.install = (Vue) => {
    Vue.directive('loading-preload', {
        mounted: function (el, binding) {
            addClass(el, 've-loading-parent--relative');
            directive_insertDom(el, binding);
        },
        updated: function (el, binding) {
            removeLoadingDom(el, binding);
        },
    });
};
/* harmony default export */ var src_directive = (loadingDirective);

// CONCATENATED MODULE: ./packages/skeleton/index.ts

/* harmony default export */ var skeleton = ({
    install(Vue) {
        Vue.use(src_directive);
    },
    directive: src_directive,
});

// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ref--5!./node_modules/vue-loader/dist??ref--0!./packages/image-preview/src/main.vue?vue&type=template&id=3d056426


const mainvue_type_template_id_3d056426_hoisted_1 = /*#__PURE__*/Object(external_vue_["createVNode"])("i", {
  class: "fa fa-angle-left fa-4x",
  "aria-hidden": "true"
}, null, -1 /* HOISTED */)
const mainvue_type_template_id_3d056426_hoisted_2 = { class: "box" }
const mainvue_type_template_id_3d056426_hoisted_3 = /*#__PURE__*/Object(external_vue_["createVNode"])("i", {
  class: "fa fa-angle-right fa-4x",
  "aria-hidden": "true"
}, null, -1 /* HOISTED */)

function mainvue_type_template_id_3d056426_render(_ctx, _cache) {
  return (Object(external_vue_["openBlock"])(), Object(external_vue_["createBlock"])(external_vue_["Transition"], { name: "fade" }, {
    default: Object(external_vue_["withCtx"])(() => [
      Object(external_vue_["withDirectives"])(Object(external_vue_["createVNode"])("div", {
        class: "image-read-box",
        onClick: _cache[3] || (_cache[3] = Object(external_vue_["withModifiers"])((...args) => (_ctx.handlerClose(...args)), ["stop"])),
        onMousemove: _cache[4] || (_cache[4] = (...args) => (_ctx.stopEvent(...args))),
        onTouchmove: _cache[5] || (_cache[5] = (...args) => (_ctx.stopEvent(...args)))
      }, [
        Object(external_vue_["withDirectives"])(Object(external_vue_["createVNode"])("button", {
          class: "prev",
          onClick: _cache[1] || (_cache[1] = Object(external_vue_["withModifiers"])((...args) => (_ctx.handlerPrev(...args)), ["stop"]))
        }, [
          mainvue_type_template_id_3d056426_hoisted_1
        ], 512 /* NEED_PATCH */), [
          [external_vue_["vShow"], _ctx.isDisabledPrev]
        ]),
        Object(external_vue_["createVNode"])("div", mainvue_type_template_id_3d056426_hoisted_2, [
          Object(external_vue_["createVNode"])("ul", null, [
            Object(external_vue_["createVNode"])("div", { style: _ctx.computedStyle }, [
              (Object(external_vue_["openBlock"])(true), Object(external_vue_["createBlock"])(external_vue_["Fragment"], null, Object(external_vue_["renderList"])(_ctx.src, (item) => {
                return (Object(external_vue_["openBlock"])(), Object(external_vue_["createBlock"])("li", { key: item }, [
                  Object(external_vue_["createVNode"])("img", {
                    style: { width: _ctx.fullScreen ? '100%' : '' },
                    src: item,
                    alt: ""
                  }, null, 12 /* STYLE, PROPS */, ["src"])
                ]))
              }), 128 /* KEYED_FRAGMENT */))
            ], 4 /* STYLE */)
          ])
        ]),
        Object(external_vue_["withDirectives"])(Object(external_vue_["createVNode"])("button", {
          class: "next",
          onClick: _cache[2] || (_cache[2] = Object(external_vue_["withModifiers"])((...args) => (_ctx.handlerNext(...args)), ["stop"]))
        }, [
          mainvue_type_template_id_3d056426_hoisted_3
        ], 512 /* NEED_PATCH */), [
          [external_vue_["vShow"], _ctx.isDisabledNext]
        ])
      ], 544 /* HYDRATE_EVENTS, NEED_PATCH */), [
        [external_vue_["vShow"], _ctx.visible]
      ])
    ]),
    _: 1
  }))
}
// CONCATENATED MODULE: ./packages/image-preview/src/main.vue?vue&type=template&id=3d056426

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--0!./packages/image-preview/src/main.vue?vue&type=script&lang=js

/* harmony default export */ var image_preview_src_mainvue_type_script_lang_js = (Object(external_vue_["defineComponent"])({
  name: 'ImageBox',
  methods: {
    stopEvent: function stopEvent(e) {
      if (this.stop) {
        e.preventDefault();
      }
    },
    addImage: function addImage(src) {
      this.src.push(src);
    },
    clearImage: function clearImage() {
      this.src = [];
    },
    handlerClose: function handlerClose() {
      this.visible = false;
    },
    handlerPrev: function handlerPrev() {
      this.current--;
    },
    handlerNext: function handlerNext() {
      this.current++;
    }
  }
}));
// CONCATENATED MODULE: ./packages/image-preview/src/main.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./packages/image-preview/src/main.vue



image_preview_src_mainvue_type_script_lang_js.render = mainvue_type_template_id_3d056426_render

/* harmony default export */ var image_preview_src_main = (image_preview_src_mainvue_type_script_lang_js);
// CONCATENATED MODULE: ./packages/image-preview/src/directive.ts



const imageDirective = {};
let NodeID = 0;
let ImageBoxParents = [];
let handlerIndicator = new WeakMap();
function handlerControl(src, instance, index) {
    if (Array.isArray(src)) {
        src.forEach((item) => {
            var _a;
            if (!((_a = instance.src) === null || _a === void 0 ? void 0 : _a.includes(item))) {
                instance.addImage(item);
            }
            instance.current = index;
        });
    }
    else if (!instance.src.includes(src)) {
        instance.addImage(src);
        instance.current = instance.src.length - 1;
    }
    else {
        instance.current = instance.src.findIndex((item) => item === src);
    }
    instance.visible = true;
    if (!instance._isInsert) {
        document.body.appendChild(instance.$el);
        instance._isInsert = true;
    }
}
function insertSrc(src) {
    return typeof src === 'string' ? src : src.default;
}
function targetImage(el, binding) {
    el.classList.add('image-read-parent');
    let src, fullScreen, stop, value = binding.value;
    const _type = utils_type(value);
    if (_type === '[object String]') {
        src = [value];
    }
    else if (_type === '[object Undefined]') {
        // const v = el.dataset?.previewSrc || el.src
        // src = [insertSrc(v)]
        // eslint-disable-next-line no-console
        console.error(`Vue-next does not support dateset binding temporarily`);
    }
    else if (_type === '[object Object]') {
        src = [insertSrc(value.src)];
        fullScreen = value.fullScreen;
        stop = value.stop;
    }
    else if (_type === '[object Module]') {
        src = [insertSrc(value)];
    }
    else {
        // eslint-disable-next-line no-console
        console.warn(`v-image command error, binding value ${_type} is not accepted`);
    }
    /* fix isServer */
    const ImageBoxInstance = Object(external_vue_["createApp"])({
        ...image_preview_src_main,
        setup() {
            const data = Object(external_vue_["reactive"])(Object.assign({
                visible: false,
                targetAnimate: true,
                src: [],
                current: 0,
                isOut: false,
                fullScreen: false,
                stop: false,
            }, {
                fullScreen: fullScreen,
                stop: stop,
            }));
            const computedStyle = Object(external_vue_["computed"])(() => {
                return {
                    transform: `translateX(${data.current * -100}%)`,
                };
            });
            const isDisabledNext = Object(external_vue_["computed"])(() => { var _a; return data.current < ((_a = data.src) === null || _a === void 0 ? void 0 : _a.length) - 1; });
            const isDisabledPrev = Object(external_vue_["computed"])(() => data.current > 0);
            return { ...data, computedStyle, isDisabledNext, isDisabledPrev };
        },
    }).mount(document.createElement('div'));
    el.addEventListener('click', handlerControl.bind(null, src, ImageBoxInstance));
}
function targetParent(el, binding, _NodeID) {
    var _a;
    let ImageBoxParent;
    const targetNode = ((_a = binding === null || binding === void 0 ? void 0 : binding.value) === null || _a === void 0 ? void 0 : _a.el) || 'img';
    const nodes = el.querySelectorAll(targetNode);
    if (_NodeID) {
        ImageBoxParent = ImageBoxParents[_NodeID];
    }
    else {
        el._NodeID = ++NodeID; // 标记父容器
        ImageBoxParent = Object(external_vue_["createApp"])(image_preview_src_main).mount(document.createElement('div'));
        el.$instace = ImageBoxParent;
        ImageBoxParent._NodeID = el._NodeID;
        ImageBoxParents[el._NodeID] = ImageBoxParent;
    }
    let src = [];
    nodes.forEach((item, index) => {
        var _a;
        item.classList.add('image-read-parent');
        if (binding.value && typeof binding.value.rule === 'function') {
            src.push(binding.value.rule(item, index));
        }
        else {
            src.push(((_a = item.dataset) === null || _a === void 0 ? void 0 : _a.previewSrc) || item.src);
        }
    });
    nodes.forEach((item, index) => {
        item.removeEventListener('click', handlerIndicator.get(item));
        handlerIndicator.has(item) && handlerIndicator.delete(item); // Delete the destroyed listener handler
        handlerIndicator.set(item, handlerControl.bind(null, src, ImageBoxParent, index));
        item.addEventListener('click', handlerIndicator.get(item));
    });
}
imageDirective.install = (App) => {
    App.directive('image', {
        mounted: function (el, binding) {
            var _a;
            if (el.tagName === 'IMG' || ((_a = el.dataset) === null || _a === void 0 ? void 0 : _a.previewSrc)) {
                targetImage(el, binding);
            }
            else {
                targetParent(el, binding);
            }
        },
        updated: function (el, binding) {
            if (el._NodeID) {
                targetParent(el, binding, el._NodeID);
            }
        },
        unmounted: function (el) {
            if (el._NodeID) {
                const needRemoveElement = el.$instace;
                if (needRemoveElement.$el &&
                    document.body.contains(needRemoveElement.$el)) {
                    document.body.removeChild(needRemoveElement.$el);
                }
            }
        },
    });
};
/* harmony default export */ var image_preview_src_directive = (imageDirective);

// CONCATENATED MODULE: ./packages/image-preview/index.ts

/* harmony default export */ var image_preview = ({
    install(Vue) {
        Vue.use(Image);
    },
    directive: image_preview_src_directive,
});

// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ref--5!./node_modules/vue-loader/dist??ref--0!./packages/color-picker/src/main.vue?vue&type=template&id=1185bd06


const mainvue_type_template_id_1185bd06_hoisted_1 = { class: "v-color-picker" }
const mainvue_type_template_id_1185bd06_hoisted_2 = /*#__PURE__*/Object(external_vue_["createVNode"])("div", { class: "v-stretch-enter" }, null, -1 /* HOISTED */)

function mainvue_type_template_id_1185bd06_render(_ctx, _cache) {
  const _component_ve_icon = Object(external_vue_["resolveComponent"])("ve-icon")
  const _component_color_picker = Object(external_vue_["resolveComponent"])("color-picker")

  return (Object(external_vue_["openBlock"])(), Object(external_vue_["createBlock"])("div", mainvue_type_template_id_1185bd06_hoisted_1, [
    (!_ctx.simple)
      ? (Object(external_vue_["openBlock"])(), Object(external_vue_["createBlock"])("div", {
          key: 0,
          class: "v-color-simple-placeholder",
          style: _ctx.sizeStyle
        }, [
          Object(external_vue_["createVNode"])("div", {
            class: "simple-placeholder",
            style: {
          background: _ctx.currentColor,
        },
            onClick: _cache[1] || (_cache[1] = Object(external_vue_["withModifiers"])($event => (_ctx.display = !_ctx.display), ["stop"]))
          }, [
            Object(external_vue_["createVNode"])(_component_ve_icon, { name: "chevron-down" })
          ], 4 /* STYLE */)
        ], 4 /* STYLE */))
      : Object(external_vue_["createCommentVNode"])("v-if", true),
    Object(external_vue_["createVNode"])(_component_color_picker, {
      display: _ctx.display,
      width: _ctx.width,
      height: _ctx.height,
      color: _ctx.color,
      onConfirm: _ctx.handleConfirm
    }, null, 8 /* PROPS */, ["display", "width", "height", "color", "onConfirm"]),
    mainvue_type_template_id_1185bd06_hoisted_2
  ]))
}
// CONCATENATED MODULE: ./packages/color-picker/src/main.vue?vue&type=template&id=1185bd06

// CONCATENATED MODULE: ./packages/color-picker/src/color.ts
const hsv2hsl = function (hue, sat, val) {
    return [
        hue,
        (sat * val) / ((hue = (2 - sat) * val) < 1 ? hue : 2 - hue) || 0,
        hue / 2,
    ];
};
// Need to handle 1.0 as 100%, since once it is a number, there is no difference between it and 1
// <http://stackoverflow.com/questions/7422072/javascript-how-to-detect-number-as-a-decimal-including-1-0>
const isOnePointZero = function (n) {
    return typeof n === 'string' && n.indexOf('.') !== -1 && parseFloat(n) === 1;
};
const isPercentage = function (n) {
    return typeof n === 'string' && n.indexOf('%') !== -1;
};
// Take input from [0, n] and return it as [0, 1]
const bound01 = function (value, max) {
    if (isOnePointZero(value))
        value = '100%';
    const processPercent = isPercentage(value);
    value = Math.min(max, Math.max(0, parseFloat(value)));
    // Automatically convert percentage into number
    if (processPercent) {
        value = parseInt((value * max), 10) / 100;
    }
    // Handle floating point rounding errors
    if (Math.abs(value - max) < 0.000001) {
        return 1;
    }
    // Convert into [0, 1] range if it isn't already
    return (value % max) / parseFloat(max);
};
const INT_HEX_MAP = { 10: 'A', 11: 'B', 12: 'C', 13: 'D', 14: 'E', 15: 'F' };
const toHex = function ({ r, g, b }) {
    const hexOne = function (value) {
        value = Math.min(Math.round(value), 255);
        const high = Math.floor(value / 16);
        const low = value % 16;
        return '' + (INT_HEX_MAP[high] || high) + (INT_HEX_MAP[low] || low);
    };
    if (isNaN(r) || isNaN(g) || isNaN(b))
        return '';
    return '#' + hexOne(r) + hexOne(g) + hexOne(b);
};
const HEX_INT_MAP = { A: 10, B: 11, C: 12, D: 13, E: 14, F: 15 };
const parseHexChannel = function (hex) {
    if (hex.length === 2) {
        return ((HEX_INT_MAP[hex[0].toUpperCase()] || +hex[0]) * 16 +
            (HEX_INT_MAP[hex[1].toUpperCase()] || +hex[1]));
    }
    return HEX_INT_MAP[hex[1].toUpperCase()] || +hex[1];
};
const hsl2hsv = function (hue, sat, light) {
    sat = sat / 100;
    light = light / 100;
    let smin = sat;
    const lmin = Math.max(light, 0.01);
    let sv;
    let v;
    light *= 2;
    sat *= light <= 1 ? light : 2 - light;
    smin *= lmin <= 1 ? lmin : 2 - lmin;
    v = (light + sat) / 2;
    sv = light === 0 ? (2 * smin) / (lmin + smin) : (2 * sat) / (light + sat);
    return {
        h: hue,
        s: sv * 100,
        v: v * 100,
    };
};
// `rgbToHsv`
// Converts an RGB color value to HSV
// *Assumes:* r, g, and b are contained in the set [0, 255] or [0, 1]
// *Returns:* { h, s, v } in [0,1]
const rgb2hsv = function (r, g, b) {
    r = bound01(r, 255);
    g = bound01(g, 255);
    b = bound01(b, 255);
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h, s;
    let v = max;
    const d = max - min;
    s = max === 0 ? 0 : d / max;
    if (max === min) {
        h = 0; // achromatic
    }
    else {
        switch (max) {
            case r:
                h = (g - b) / d + (g < b ? 6 : 0);
                break;
            case g:
                h = (b - r) / d + 2;
                break;
            case b:
                h = (r - g) / d + 4;
                break;
        }
        h /= 6;
    }
    return { h: h * 360, s: s * 100, v: v * 100 };
};
// `hsvToRgb`
// Converts an HSV color value to RGB.
// *Assumes:* h is contained in [0, 1] or [0, 360] and s and v are contained in [0, 1] or [0, 100]
// *Returns:* { r, g, b } in the set [0, 255]
const hsv2rgb = function (h, s, v) {
    h = bound01(h, 360) * 6;
    s = bound01(s, 100);
    v = bound01(v, 100);
    const i = Math.floor(h);
    const f = h - i;
    const p = v * (1 - s);
    const q = v * (1 - f * s);
    const t = v * (1 - (1 - f) * s);
    const mod = i % 6;
    const r = [v, q, p, p, t, v][mod];
    const g = [t, v, v, q, p, p][mod];
    const b = [p, p, t, v, v, q][mod];
    return {
        r: Math.round(r * 255),
        g: Math.round(g * 255),
        b: Math.round(b * 255),
    };
};
class Color {
    constructor(options) {
        this._hue = 0;
        this._saturation = 0;
        this._value = 0;
        this._alpha = 0;
        this.enableAlpha = false;
        this.format = 'hex';
        this.value = '';
        this._hue = 0;
        this._saturation = 100;
        this._value = 100;
        this._alpha = 100;
        this.enableAlpha = false;
        this.format = 'hex';
        this.value = '';
        options = options || {};
        for (let option in options) {
            if (options.hasOwnProperty(option)) {
                this[option] = options[option];
            }
        }
        this.doOnChange();
    }
    set(prop, value) {
        if (arguments.length === 1 && typeof prop === 'object') {
            for (let p in prop) {
                if (prop.hasOwnProperty(p)) {
                    this.set(p, prop[p]);
                }
            }
            return;
        }
        this['_' + prop] = value;
        this.doOnChange();
    }
    get(prop) {
        return this['_' + prop];
    }
    toRgb() {
        return hsv2rgb(this._hue, this._saturation, this._value);
    }
    fromString(value) {
        if (!value) {
            this._hue = 0;
            this._saturation = 100;
            this._value = 100;
            this.doOnChange();
            return;
        }
        const fromHSV = (h, s, v) => {
            this._hue = Math.max(0, Math.min(360, h));
            this._saturation = Math.max(0, Math.min(100, s));
            this._value = Math.max(0, Math.min(100, v));
            this.doOnChange();
        };
        if (value.indexOf('hsl') !== -1) {
            const parts = value
                .replace(/hsla|hsl|\(|\)/gm, '')
                .split(/\s|,/g)
                .filter((val) => val !== '')
                .map((val, index) => (index > 2 ? parseFloat(val) : parseInt(val, 10)));
            if (parts.length === 4) {
                this._alpha = Math.floor(parseFloat(parts[3]) * 100);
            }
            else if (parts.length === 3) {
                this._alpha = 100;
            }
            if (parts.length >= 3) {
                const { h, s, v } = hsl2hsv(parts[0], parts[1], parts[2]);
                fromHSV(h, s, v);
            }
        }
        else if (value.indexOf('hsv') !== -1) {
            const parts = value
                .replace(/hsva|hsv|\(|\)/gm, '')
                .split(/\s|,/g)
                .filter((val) => val !== '')
                .map((val, index) => (index > 2 ? parseFloat(val) : parseInt(val, 10)));
            if (parts.length === 4) {
                this._alpha = Math.floor(parseFloat(parts[3]) * 100);
            }
            else if (parts.length === 3) {
                this._alpha = 100;
            }
            if (parts.length >= 3) {
                fromHSV(parts[0], parts[1], parts[2]);
            }
        }
        else if (value.indexOf('rgb') !== -1) {
            const parts = value
                .replace(/rgba|rgb|\(|\)/gm, '')
                .split(/\s|,/g)
                .filter((val) => val !== '')
                .map((val, index) => (index > 2 ? parseFloat(val) : parseInt(val, 10)));
            if (parts.length === 4) {
                this._alpha = Math.floor(parseFloat(parts[3]) * 100);
            }
            else if (parts.length === 3) {
                this._alpha = 100;
            }
            if (parts.length >= 3) {
                const { h, s, v } = rgb2hsv(parts[0], parts[1], parts[2]);
                fromHSV(h, s, v);
            }
        }
        else if (value.indexOf('#') !== -1) {
            const hex = value.replace('#', '').trim();
            if (!/^(?:[0-9a-fA-F]{3}){1,2}$/.test(hex))
                return;
            let r, g, b;
            if (hex.length === 3) {
                r = parseHexChannel(hex[0] + hex[0]);
                g = parseHexChannel(hex[1] + hex[1]);
                b = parseHexChannel(hex[2] + hex[2]);
            }
            else if (hex.length === 6 || hex.length === 8) {
                r = parseHexChannel(hex.substring(0, 2));
                g = parseHexChannel(hex.substring(2, 4));
                b = parseHexChannel(hex.substring(4, 6));
            }
            if (hex.length === 8) {
                this._alpha = Math.floor((parseHexChannel(hex.substring(6)) / 255) * 100);
            }
            else if (hex.length === 3 || hex.length === 6) {
                this._alpha = 100;
            }
            const { h, s, v } = rgb2hsv(r, g, b);
            fromHSV(h, s, v);
        }
    }
    compare(color) {
        return (Math.abs(color._hue - this._hue) < 2 &&
            Math.abs(color._saturation - this._saturation) < 1 &&
            Math.abs(color._value - this._value) < 1 &&
            Math.abs(color._alpha - this._alpha) < 1);
    }
    doOnChange() {
        const { _hue, _saturation, _value, _alpha, format } = this;
        if (this.enableAlpha) {
            switch (format) {
                case 'hsl':
                    // eslint-disable-next-line no-case-declarations
                    const hsl = hsv2hsl(_hue, _saturation / 100, _value / 100);
                    this.value = `hsla(${_hue}, ${Math.round(hsl[1] * 100)}%, ${Math.round(hsl[2] * 100)}%, ${_alpha / 100})`;
                    break;
                case 'hsv':
                    this.value = `hsva(${_hue}, ${Math.round(_saturation)}%, ${Math.round(_value)}%, ${_alpha / 100})`;
                    break;
                default:
                    // eslint-disable-next-line no-case-declarations
                    const { r, g, b } = hsv2rgb(_hue, _saturation, _value);
                    this.value = `rgba(${r}, ${g}, ${b}, ${_alpha / 100})`;
            }
        }
        else {
            switch (format) {
                case 'hsl':
                    // eslint-disable-next-line no-case-declarations
                    const hsl = hsv2hsl(_hue, _saturation / 100, _value / 100);
                    this.value = `hsl(${_hue}, ${Math.round(hsl[1] * 100)}%, ${Math.round(hsl[2] * 100)}%)`;
                    break;
                case 'hsv':
                    this.value = `hsv(${_hue}, ${Math.round(_saturation)}%, ${Math.round(_value)}%)`;
                    break;
                case 'rgb':
                    // eslint-disable-next-line no-case-declarations
                    const { r, g, b } = hsv2rgb(_hue, _saturation, _value);
                    this.value = `rgb(${r}, ${g}, ${b})`;
                    break;
                default:
                    this.value = toHex(hsv2rgb(_hue, _saturation, _value));
            }
        }
    }
}

// CONCATENATED MODULE: ./src/utils/css.ts
const formatCss = function formatCss(value) {
    if (typeof value === 'string') {
        const match = value.match(/\d+/);
        if (match) {
            return match[0] + 'px';
        }
    }
    return value + 'px';
};

// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ref--5!./node_modules/vue-loader/dist??ref--0!./packages/color-picker/src/color-picker.vue?vue&type=template&id=0b12bd18


const color_pickervue_type_template_id_0b12bd18_hoisted_1 = { class: "v-color-top" }
const color_pickervue_type_template_id_0b12bd18_hoisted_2 = /*#__PURE__*/Object(external_vue_["createVNode"])("div", { class: "v-color-white" }, null, -1 /* HOISTED */)
const color_pickervue_type_template_id_0b12bd18_hoisted_3 = /*#__PURE__*/Object(external_vue_["createVNode"])("div", { class: "v-color-black" }, null, -1 /* HOISTED */)
const color_pickervue_type_template_id_0b12bd18_hoisted_4 = { class: "v-color-bottom" }

function color_pickervue_type_template_id_0b12bd18_render(_ctx, _cache) {
  const _component_color_hue = Object(external_vue_["resolveComponent"])("color-hue")
  const _component_ve_input = Object(external_vue_["resolveComponent"])("ve-input")
  const _component_ve_button = Object(external_vue_["resolveComponent"])("ve-button")

  return (Object(external_vue_["openBlock"])(), Object(external_vue_["createBlock"])(external_vue_["Transition"], { name: "v-stretch" }, {
    default: Object(external_vue_["withCtx"])(() => [
      Object(external_vue_["withDirectives"])(Object(external_vue_["createVNode"])("div", {
        class: "v-color-main",
        onClick: _cache[2] || (_cache[2] = Object(external_vue_["withModifiers"])((...args) => (_ctx.noop(...args)), ["stop"]))
      }, [
        Object(external_vue_["createVNode"])("div", color_pickervue_type_template_id_0b12bd18_hoisted_1, [
          Object(external_vue_["createVNode"])("div", {
            ref: "content",
            class: "v-color-content",
            style: _ctx.mergeStyle
          }, [
            color_pickervue_type_template_id_0b12bd18_hoisted_2,
            color_pickervue_type_template_id_0b12bd18_hoisted_3,
            Object(external_vue_["createVNode"])("div", {
              class: "v-color-pointer",
              style: _ctx.pointerStyle
            }, null, 4 /* STYLE */)
          ], 4 /* STYLE */),
          Object(external_vue_["createVNode"])(_component_color_hue, {
            ref: "hue",
            color: _ctx.color
          }, null, 8 /* PROPS */, ["color"])
        ]),
        Object(external_vue_["createVNode"])("div", color_pickervue_type_template_id_0b12bd18_hoisted_4, [
          Object(external_vue_["createVNode"])("div", {
            class: "v-color-preview",
            style: { backgroundColor: _ctx.previewColor }
          }, null, 4 /* STYLE */),
          Object(external_vue_["createVNode"])(_component_ve_input, {
            modelValue: _ctx.formatString,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => (_ctx.formatString = $event)),
            onChange: _ctx.handleChange,
            onKeyup: Object(external_vue_["withKeys"])(_ctx.handleChange, ["native","enter"])
          }, null, 8 /* PROPS */, ["modelValue", "onChange", "onKeyup"]),
          Object(external_vue_["createVNode"])(_component_ve_button, { onClick: _ctx.handleConfirm }, {
            default: Object(external_vue_["withCtx"])(() => [
              Object(external_vue_["createTextVNode"])(Object(external_vue_["toDisplayString"])(_ctx.t('button.confirm')), 1 /* TEXT */)
            ]),
            _: 1
          }, 8 /* PROPS */, ["onClick"])
        ])
      ], 512 /* NEED_PATCH */), [
        [external_vue_["vShow"], _ctx.display]
      ])
    ]),
    _: 1
  }))
}
// CONCATENATED MODULE: ./packages/color-picker/src/color-picker.vue?vue&type=template&id=0b12bd18

// CONCATENATED MODULE: ./packages/color-picker/src/draggable.ts
let isDragging = false;
/* harmony default export */ var draggable = (function (element, options) {
    // TODO
    // if (Vue.prototype.$isServer) return
    const moveFn = function (event) {
        if (options.drag) {
            options.drag(event);
        }
    };
    const upFn = function (event) {
        document.removeEventListener('mousemove', moveFn);
        document.removeEventListener('mouseup', upFn);
        document.onselectstart = null;
        document.ondragstart = null;
        isDragging = false;
        if (options.end) {
            options.end(event);
        }
    };
    element.addEventListener('mousedown', function (event) {
        if (isDragging)
            return;
        document.onselectstart = function () {
            return false;
        };
        document.ondragstart = function () {
            return false;
        };
        document.addEventListener('mousemove', moveFn);
        document.addEventListener('mouseup', upFn);
        isDragging = true;
        if (options.start) {
            options.start(event);
        }
    });
});

// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ref--5!./node_modules/vue-loader/dist??ref--0!./packages/color-picker/src/color-hue.vue?vue&type=template&id=a84a34e6


const color_huevue_type_template_id_a84a34e6_hoisted_1 = { class: "v-color-hue" }

function color_huevue_type_template_id_a84a34e6_render(_ctx, _cache) {
  return (Object(external_vue_["openBlock"])(), Object(external_vue_["createBlock"])("div", color_huevue_type_template_id_a84a34e6_hoisted_1, [
    Object(external_vue_["createVNode"])("div", {
      ref: "bar",
      class: "v-color-hue__bar",
      onClick: _cache[1] || (_cache[1] = (...args) => (_ctx.handleClick(...args)))
    }, null, 512 /* NEED_PATCH */),
    Object(external_vue_["createVNode"])("div", {
      ref: "thumb",
      class: "v-color-hue__thumb",
      style: {
        left: _ctx.thumbLeft + 'px',
        top: _ctx.thumbTop + 'px',
      }
    }, null, 4 /* STYLE */)
  ]))
}
// CONCATENATED MODULE: ./packages/color-picker/src/color-hue.vue?vue&type=template&id=a84a34e6

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--0!./packages/color-picker/src/color-hue.vue?vue&type=script&lang=js


/* harmony default export */ var color_huevue_type_script_lang_js = (Object(external_vue_["defineComponent"])({
  name: 'ColorHue',
  props: {
    color: {
      required: true
    },
    vertical: {
      type: Boolean,
      default: true
    }
  },
  data: function data() {
    return {
      thumbLeft: 0,
      thumbTop: 0
    };
  },
  computed: {
    hueValue: function hueValue() {
      var hue = this.color.get('hue');
      return hue;
    }
  },
  watch: {
    hueValue: function hueValue() {
      this.update();
    }
  },
  methods: {
    handleClick: function handleClick(event) {
      var thumb = this.$refs.thumb;
      var target = event.target;

      if (target !== thumb) {
        this.handleDrag(event);
      }
    },
    handleDrag: function handleDrag(event) {
      var rect = this.$el.getBoundingClientRect();
      var thumb = this.$refs.thumb;
      var hue;

      if (!this.vertical) {
        var left = event.clientX - rect.left;
        left = Math.min(left, rect.width - thumb.offsetWidth / 2);
        left = Math.max(thumb.offsetWidth / 2, left);
        hue = Math.round((left - thumb.offsetWidth / 2) / (rect.width - thumb.offsetWidth) * 360);
      } else {
        var top = event.clientY - rect.top;
        top = Math.min(top, rect.height - thumb.offsetHeight / 2);
        top = Math.max(thumb.offsetHeight / 2, top);
        hue = Math.round((top - thumb.offsetHeight / 2) / (rect.height - thumb.offsetHeight) * 360);
      }

      this.color.set('hue', hue);
    },
    getThumbLeft: function getThumbLeft() {
      if (this.vertical) return 0;
      var el = this.$el;
      var hue = this.color.get('hue');
      if (!el) return 0;
      var thumb = this.$refs.thumb;
      return Math.round(hue * (el.offsetWidth - thumb.offsetWidth / 2) / 360);
    },
    getThumbTop: function getThumbTop() {
      if (!this.vertical) return 0;
      var el = this.$el;
      var hue = this.color.get('hue');
      if (!el) return 0;
      var thumb = this.$refs.thumb;
      return Math.round(hue * (el.offsetHeight - thumb.offsetHeight / 2) / 360);
    },
    update: function update() {
      this.thumbLeft = this.getThumbLeft();
      this.thumbTop = this.getThumbTop();
    }
  },
  mounted: function mounted() {
    var _this = this;

    var _this$$refs = this.$refs,
        bar = _this$$refs.bar,
        thumb = _this$$refs.thumb;
    var dragConfig = {
      drag: function drag(event) {
        _this.handleDrag(event);
      },
      end: function end(event) {
        _this.handleDrag(event);
      }
    };
    draggable(bar, dragConfig);
    draggable(thumb, dragConfig);
    this.update();
  }
}));
// CONCATENATED MODULE: ./packages/color-picker/src/color-hue.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./packages/color-picker/src/color-hue.vue



color_huevue_type_script_lang_js.render = color_huevue_type_template_id_a84a34e6_render

/* harmony default export */ var color_hue = (color_huevue_type_script_lang_js);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--0!./packages/color-picker/src/color-picker.vue?vue&type=script&lang=js




function color_pickervue_type_script_lang_js_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function color_pickervue_type_script_lang_js_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { color_pickervue_type_script_lang_js_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { color_pickervue_type_script_lang_js_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }








/* harmony default export */ var color_pickervue_type_script_lang_js = (Object(external_vue_["defineComponent"])({
  name: 'ColorPicker',
  components: {
    VeInput: input_src_main,
    ColorHue: color_hue,
    VeButton: button_src_main
  },
  props: {
    width: {
      required: true
    },
    height: {
      required: true
    },
    color: {
      required: true
    },
    display: Boolean
  },
  computed: {
    mergeStyle: function mergeStyle() {
      var width = formatCss(this.width);
      var height = formatCss(this.height);
      return {
        width: width,
        height: height,
        backgroundColor: 'hsl(' + this.color.get('hue') + ', 100%, 50%)'
      };
    },
    previewColor: function previewColor() {
      return this.color.value;
    },
    pointerStyle: function pointerStyle() {
      var left = formatCss(this.cursorLeft);
      var top = formatCss(this.cursorTop);
      return {
        left: left,
        top: top
      };
    }
  },
  data: function data() {
    return {
      formatString: this.color.value,
      cursorLeft: '',
      cursorTop: '',
      background: '',
      t: t
    };
  },
  watch: {
    color: {
      deep: true,
      handler: function handler(value) {
        this.formatString = value.value;
      }
    },
    display: function display(v) {
      if (v) {
        this.tickUpdate();
      }
    }
  },
  emits: ['confirm'],
  methods: {
    noop: function noop() {},
    handleChange: function handleChange() {
      this.color.fromString(this.formatString);
      this.tickUpdate();
      this.handleConfirm();
    },
    handleConfirm: function handleConfirm() {
      this.$emit('confirm');
    },
    tickUpdate: function tickUpdate() {
      var _this = this;

      return color_pickervue_type_script_lang_js_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var hue;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this.$nextTick();

              case 2:
                hue = _this.$refs.hue;

                _this.update();

                hue.update();

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    update: function update() {
      var saturation = this.color.get('saturation');
      var value = this.color.get('value');
      var el = this.$refs.content;
      var width = el.clientWidth,
          height = el.clientHeight;
      this.cursorLeft = saturation * width / 100 - 4;
      this.cursorTop = (100 - value) * height / 100 - 4;
      this.background = 'hsl(' + this.color.get('hue') + ', 100%, 50%)';
    },
    handleDrag: function handleDrag(event) {
      this.handleGetPointer(event);
    },
    handleGetPointer: function handleGetPointer(event) {
      var el = this.$refs.content;
      var rect = el.getBoundingClientRect();
      var left = event.clientX - rect.left;
      var top = event.clientY - rect.top;
      left = Math.max(0, left);
      left = Math.min(left, rect.width);
      top = Math.max(0, top);
      top = Math.min(top, rect.height);
      var value = 100 - top / rect.height * 100;
      this.color.set({
        saturation: left / rect.width * 100,
        value: value
      });
      this.cursorLeft = left - 4;
      this.cursorTop = top - 4;
    }
  },
  mounted: function mounted() {
    var _this2 = this;

    draggable(this.$refs.content, {
      drag: function drag(event) {
        _this2.handleDrag(event);
      },
      end: function end(event) {
        _this2.handleDrag(event);
      }
    });

    if (this.$parent.simple) {
      this.tickUpdate();
    } else {
      this.update();
    }
  }
}));
// CONCATENATED MODULE: ./packages/color-picker/src/color-picker.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./packages/color-picker/src/color-picker.vue



color_pickervue_type_script_lang_js.render = color_pickervue_type_template_id_0b12bd18_render

/* harmony default export */ var color_picker = (color_pickervue_type_script_lang_js);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--0!./packages/color-picker/src/main.vue?vue&type=script&lang=js





/* harmony default export */ var color_picker_src_mainvue_type_script_lang_js = ({
  name: 'VeColorPicker',
  components: {
    ColorPicker: color_picker,
    VeIcon: main
  },
  props: {
    simple: {
      type: Boolean,
      default: false
    },
    size: {
      type: [String, Number],
      default: 34
    },
    width: {
      type: [String, Number],
      default: 300
    },
    height: {
      type: [String, Number],
      default: 150
    },
    modelValue: {
      type: String,
      required: true
    },
    colorFormat: {
      type: String,
      default: 'hex'
    }
  },
  emits: ['input', 'change', 'confirm', 'update:modelValue'],
  data: function data() {
    var color = new Color({
      format: this.colorFormat
    });
    return {
      color: color,
      display: this.simple,
      currentColor: this.modelValue
    };
  },
  computed: {
    sizeStyle: function sizeStyle() {
      var size = formatCss(this.size);
      return {
        width: size,
        height: size
      };
    }
  },
  watch: {
    modelValue: function modelValue(val) {
      if (val && val !== this.color.value) {
        this.color.fromString(val);
        this.currentColor = this.color.value;
      }
    }
  },
  beforeMount: function beforeMount() {
    var modelValue = this.modelValue;

    if (modelValue) {
      this.color.fromString(modelValue);
    }
  },
  mounted: function mounted() {
    if (!this.simple) {
      document.documentElement.addEventListener('click', this.handleDocument);
    }
  },
  beforeDestroy: function beforeDestroy() {
    document.documentElement.removeEventListener('click', this.handleDocument);
  },
  methods: {
    handleConfirm: function handleConfirm() {
      var value = this.color.value;
      this.currentColor = value;
      this.$emit('update:modelValue', value);
      this.$emit('input', value);
      this.$emit('change', value);

      if (!this.simple) {
        this.display = false;
      }
    },
    handleDocument: function handleDocument() {
      if (this.display) {
        this.display = false;
      }
    }
  }
});
// CONCATENATED MODULE: ./packages/color-picker/src/main.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./packages/color-picker/src/main.vue



color_picker_src_mainvue_type_script_lang_js.render = mainvue_type_template_id_1185bd06_render

/* harmony default export */ var color_picker_src_main = (color_picker_src_mainvue_type_script_lang_js);
// CONCATENATED MODULE: ./packages/color-picker/index.ts

color_picker_src_main.install = function (Vue) {
    Vue.component(color_picker_src_main.name, color_picker_src_main);
};
/* harmony default export */ var packages_color_picker = (color_picker_src_main);

// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ref--5!./node_modules/vue-loader/dist??ref--0!./packages/scroll-bar/src/main.vue?vue&type=template&id=87824dd0


const mainvue_type_template_id_87824dd0_hoisted_1 = { class: "v-easy-scroll" }
const mainvue_type_template_id_87824dd0_hoisted_2 = {
  ref: "wrap",
  class: "v-easy-scroll-wrap"
}
const mainvue_type_template_id_87824dd0_hoisted_3 = { class: "v-easy-scroll-wrap--view" }
const mainvue_type_template_id_87824dd0_hoisted_4 = { class: "v-easy-scroll-bar is-horizontal" }
const _hoisted_5 = { class: "v-easy-scroll-bar is-vertical" }

function mainvue_type_template_id_87824dd0_render(_ctx, _cache) {
  const _component_bar = Object(external_vue_["resolveComponent"])("bar")

  return (Object(external_vue_["openBlock"])(), Object(external_vue_["createBlock"])("div", mainvue_type_template_id_87824dd0_hoisted_1, [
    Object(external_vue_["createVNode"])("div", mainvue_type_template_id_87824dd0_hoisted_2, [
      Object(external_vue_["createVNode"])("div", mainvue_type_template_id_87824dd0_hoisted_3, [
        Object(external_vue_["renderSlot"])(_ctx.$slots, "default")
      ])
    ], 512 /* NEED_PATCH */),
    Object(external_vue_["createVNode"])("div", mainvue_type_template_id_87824dd0_hoisted_4, [
      Object(external_vue_["createVNode"])(_component_bar, {
        horizontal: "",
        always: _ctx.always,
        style: _ctx.horizontal
      }, null, 8 /* PROPS */, ["always", "style"])
    ]),
    Object(external_vue_["createVNode"])("div", _hoisted_5, [
      Object(external_vue_["createVNode"])(_component_bar, {
        vertical: "",
        always: _ctx.always,
        style: _ctx.vertical
      }, null, 8 /* PROPS */, ["always", "style"])
    ])
  ]))
}
// CONCATENATED MODULE: ./packages/scroll-bar/src/main.vue?vue&type=template&id=87824dd0

// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ref--5!./node_modules/vue-loader/dist??ref--0!./packages/scroll-bar/src/bar.vue?vue&type=template&id=56d04738


function barvue_type_template_id_56d04738_render(_ctx, _cache) {
  return (Object(external_vue_["openBlock"])(), Object(external_vue_["createBlock"])("div", {
    ref: "bar",
    class: {
      'v-easy-scroll-bar--thumb': true,
      'v-easy-scroll-bar--thumb__always': _ctx.always,
      'v-easy-scroll-bar--thumb__show': _ctx.cursorDown,
    },
    onMousedown: _cache[1] || (_cache[1] = (...args) => (_ctx.handleMouseDown(...args)))
  }, null, 34 /* CLASS, HYDRATE_EVENTS */))
}
// CONCATENATED MODULE: ./packages/scroll-bar/src/bar.vue?vue&type=template&id=56d04738

// CONCATENATED MODULE: ./packages/scroll-bar/src/bar-type.ts
const BAR_MAP = {
    horizontal: {
        offset: 'offsetWidth',
        offsetSize: 'offsetX',
        scroll: 'scrollLeft',
        scrollSize: 'scrollWidth',
        size: 'width',
        key: 'horizontal',
        axis: 'X',
        client: 'clientX',
        direction: 'left',
    },
    vertical: {
        offset: 'offsetHeight',
        offsetSize: 'offsetY',
        scroll: 'scrollTop',
        scrollSize: 'scrollHeight',
        size: 'height',
        key: 'vertical',
        axis: 'Y',
        client: 'clientY',
        direction: 'top',
    },
};

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--0!./packages/scroll-bar/src/bar.vue?vue&type=script&lang=js



/* harmony default export */ var barvue_type_script_lang_js = (Object(external_vue_["defineComponent"])({
  name: 'Bar',
  props: {
    horizontal: Boolean,
    vertical: Boolean,
    always: Boolean
  },
  data: function data() {
    return {
      Y: 0,
      cursorDown: false
    };
  },
  computed: {
    wrap: function wrap() {
      return this.$parent.wrap;
    },
    bar: function bar() {
      return this.horizontal ? BAR_MAP.horizontal : BAR_MAP.vertical;
    }
  },
  beforeDestroy: function beforeDestroy() {
    off(document, 'mouseup', this.handleMouseMove);
  },
  methods: {
    handleMouseDown: function handleMouseDown(e) {
      e.stopImmediatePropagation();
      this.cursorDown = true;
      this[this.bar.axis] = this.$el.getBoundingClientRect()[this.bar.size] - e[this.bar.offsetSize];

      document.onselectstart = function () {
        return false;
      };

      on(document, 'mousemove', this.handleMouseMove);
      on(document, 'mouseup', this.handleMouseUp);
    },
    handleMouseMove: function handleMouseMove(e) {
      var _this$bar = this.bar,
          direction = _this$bar.direction,
          client = _this$bar.client,
          offset = _this$bar.offset,
          scroll = _this$bar.scroll,
          scrollSize = _this$bar.scrollSize,
          axis = _this$bar.axis;
      var parentOffset = (this.$el.offsetParent.getBoundingClientRect()[direction] - e[client]) * -1;
      var thumbClickPosition = this.$el[offset] - this[axis];
      var thumbPositionPercentage = (parentOffset - thumbClickPosition) * 100 / this.$el.offsetParent[offset];
      this.wrap[scroll] = thumbPositionPercentage * this.wrap[scrollSize] / 100;
    },
    handleMouseUp: function handleMouseUp() {
      this.cursorDown = false;
      off(document, 'mousemove', this.handleMouseMove);
      document.onselectstart = null;
    }
  }
}));
// CONCATENATED MODULE: ./packages/scroll-bar/src/bar.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./packages/scroll-bar/src/bar.vue



barvue_type_script_lang_js.render = barvue_type_template_id_56d04738_render

/* harmony default export */ var src_bar = (barvue_type_script_lang_js);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--0!./packages/scroll-bar/src/main.vue?vue&type=script&lang=js





/* harmony default export */ var scroll_bar_src_mainvue_type_script_lang_js = (Object(external_vue_["defineComponent"])({
  name: 'VeScroll',
  components: {
    Bar: src_bar
  },
  props: {
    size: {
      type: [Number, String],
      default: 6
    },
    always: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    var size = this.size + 'px';
    return {
      vertical: {
        width: size
      },
      horizontal: {
        height: size
      }
    };
  },
  computed: {
    wrap: function wrap() {
      return this.$refs.wrap;
    }
  },
  watch: {},
  mounted: function mounted() {
    this.$nextTick(this.update);
  },
  methods: {
    update: function update() {
      var wrap = this.wrap;

      if (wrap) {
        var sizeHeight = wrap.clientHeight * 100 / wrap.scrollHeight;
        var sizeWidth = wrap.clientWidth * 100 / wrap.scrollWidth;

        if (sizeHeight < 100) {
          this.vertical.height = sizeHeight + '%';
        }

        if (sizeWidth < 100) {
          this.horizontal.width = sizeWidth + '%';
        }

        wrap.addEventListener('scroll', this.scroll);
      }
    },
    scroll: function scroll() {
      var _this = this;

      Promise.resolve().then(function () {
        var wrap = _this.wrap;
        var moveY = wrap.scrollTop * 100 / wrap.clientHeight;
        var moveX = wrap.scrollLeft * 100 / wrap.clientWidth;
        _this.vertical.transform = "translateY(".concat(moveY, "%)");
        _this.horizontal.transform = "translateX(".concat(moveX, "%)");
      });
    }
  }
}));
// CONCATENATED MODULE: ./packages/scroll-bar/src/main.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./packages/scroll-bar/src/main.vue



scroll_bar_src_mainvue_type_script_lang_js.render = mainvue_type_template_id_87824dd0_render

/* harmony default export */ var scroll_bar_src_main = (scroll_bar_src_mainvue_type_script_lang_js);
// CONCATENATED MODULE: ./packages/scroll-bar/index.ts

scroll_bar_src_main.install = function (Vue) {
    Vue.component(scroll_bar_src_main.name, scroll_bar_src_main);
};
/* harmony default export */ var scroll_bar = (scroll_bar_src_main);

// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ref--5!./node_modules/vue-loader/dist??ref--0!./packages/route-indicator/src/main.vue?vue&type=template&id=63c13728


const mainvue_type_template_id_63c13728_hoisted_1 = { class: "v-easy-route" }
const mainvue_type_template_id_63c13728_hoisted_2 = /*#__PURE__*/Object(external_vue_["createVNode"])("div", { class: "v-easy-route-process" }, null, -1 /* HOISTED */)
const mainvue_type_template_id_63c13728_hoisted_3 = { class: "v-easy-route-content" }
const mainvue_type_template_id_63c13728_hoisted_4 = { class: "v-easy-route-content--name" }
const mainvue_type_template_id_63c13728_hoisted_5 = {
  key: 0,
  class: "v-easy-route-content--tag"
}
const _hoisted_6 = {
  key: 1,
  class: "v-easy-route-content--middle"
}
const _hoisted_7 = { class: "v-easy-route-content--name" }

function mainvue_type_template_id_63c13728_render(_ctx, _cache) {
  return (Object(external_vue_["openBlock"])(), Object(external_vue_["createBlock"])("div", mainvue_type_template_id_63c13728_hoisted_1, [
    mainvue_type_template_id_63c13728_hoisted_2,
    Object(external_vue_["createVNode"])("div", mainvue_type_template_id_63c13728_hoisted_3, [
      Object(external_vue_["createVNode"])("div", mainvue_type_template_id_63c13728_hoisted_4, [
        Object(external_vue_["renderSlot"])(_ctx.$slots, "first-stop")
      ]),
      (_ctx.$slots.tag)
        ? (Object(external_vue_["openBlock"])(), Object(external_vue_["createBlock"])("div", mainvue_type_template_id_63c13728_hoisted_5, [
            Object(external_vue_["renderSlot"])(_ctx.$slots, "tag")
          ]))
        : Object(external_vue_["createCommentVNode"])("v-if", true),
      (_ctx.$slots['middle-stop'])
        ? (Object(external_vue_["openBlock"])(), Object(external_vue_["createBlock"])("div", _hoisted_6, [
            Object(external_vue_["renderSlot"])(_ctx.$slots, "middle-stop")
          ]))
        : Object(external_vue_["createCommentVNode"])("v-if", true),
      Object(external_vue_["createVNode"])("div", _hoisted_7, [
        Object(external_vue_["renderSlot"])(_ctx.$slots, "last-stop")
      ])
    ])
  ]))
}
// CONCATENATED MODULE: ./packages/route-indicator/src/main.vue?vue&type=template&id=63c13728

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--0!./packages/route-indicator/src/main.vue?vue&type=script&lang=js

/* harmony default export */ var route_indicator_src_mainvue_type_script_lang_js = (Object(external_vue_["defineComponent"])({
  name: 'VeRouteIndicator'
}));
// CONCATENATED MODULE: ./packages/route-indicator/src/main.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./packages/route-indicator/src/main.vue



route_indicator_src_mainvue_type_script_lang_js.render = mainvue_type_template_id_63c13728_render

/* harmony default export */ var route_indicator_src_main = (route_indicator_src_mainvue_type_script_lang_js);
// CONCATENATED MODULE: ./packages/route-indicator/index.ts

route_indicator_src_main.install = function (Vue) {
    Vue.component(route_indicator_src_main.name, route_indicator_src_main);
};
/* harmony default export */ var route_indicator = (route_indicator_src_main);

// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ref--5!./node_modules/vue-loader/dist??ref--0!./packages/collapse/src/main.vue?vue&type=template&id=85dc3e8e


const mainvue_type_template_id_85dc3e8e_hoisted_1 = { class: "v-easy-collapse" }
const mainvue_type_template_id_85dc3e8e_hoisted_2 = { class: "v-easy-collapse-content" }

function mainvue_type_template_id_85dc3e8e_render(_ctx, _cache) {
  return (Object(external_vue_["openBlock"])(), Object(external_vue_["createBlock"])("div", mainvue_type_template_id_85dc3e8e_hoisted_1, [
    Object(external_vue_["createVNode"])("div", {
      class: "v-easy-collapse-control",
      onClick: _cache[1] || (_cache[1] = $event => (_ctx.open = !_ctx.open))
    }, [
      Object(external_vue_["renderSlot"])(_ctx.$slots, "control")
    ]),
    Object(external_vue_["createVNode"])("div", mainvue_type_template_id_85dc3e8e_hoisted_2, [
      Object(external_vue_["createVNode"])(external_vue_["Transition"], {
        name: "collapse",
        mode: "out-in"
      }, {
        default: Object(external_vue_["withCtx"])(() => [
          Object(external_vue_["withDirectives"])(Object(external_vue_["createVNode"])("ul", {
            style: { height: _ctx.list.length * 24 + 'px' }
          }, [
            (Object(external_vue_["openBlock"])(true), Object(external_vue_["createBlock"])(external_vue_["Fragment"], null, Object(external_vue_["renderList"])(_ctx.list, (item, index) => {
              return (Object(external_vue_["openBlock"])(), Object(external_vue_["createBlock"])("li", { key: index }, [
                Object(external_vue_["renderSlot"])(_ctx.$slots, "item", { item: item })
              ]))
            }), 128 /* KEYED_FRAGMENT */))
          ], 4 /* STYLE */), [
            [external_vue_["vShow"], _ctx.open]
          ])
        ]),
        _: 1
      })
    ])
  ]))
}
// CONCATENATED MODULE: ./packages/collapse/src/main.vue?vue&type=template&id=85dc3e8e

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--0!./packages/collapse/src/main.vue?vue&type=script&lang=js

/* harmony default export */ var collapse_src_mainvue_type_script_lang_js = (Object(external_vue_["defineComponent"])({
  name: 'VeCollapse',
  props: {
    list: {
      type: Array,
      default: function _default() {
        return [];
      },
      require: true
    }
  },
  data: function data() {
    return {
      open: false
    };
  }
}));
// CONCATENATED MODULE: ./packages/collapse/src/main.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./packages/collapse/src/main.vue



collapse_src_mainvue_type_script_lang_js.render = mainvue_type_template_id_85dc3e8e_render

/* harmony default export */ var collapse_src_main = (collapse_src_mainvue_type_script_lang_js);
// CONCATENATED MODULE: ./packages/collapse/index.ts

collapse_src_main.install = function (Vue) {
    Vue.component(collapse_src_main.name, collapse_src_main);
};
/* harmony default export */ var collapse = (collapse_src_main);

// EXTERNAL MODULE: ./package.json
var package_0 = __webpack_require__(10);

// CONCATENATED MODULE: ./src/index.ts
















const components = [
    icon,
    packages_button,
    input_ip,
    input_subnet,
    input,
    steps,
    step,
    packages_color_picker,
    scroll_bar,
    route_indicator,
    collapse,
];
const install = function (App, opts = {}) {
    locale.use(opts.locale);
    locale.i18n(opts.i18n);
    components.forEach((component) => {
        App.component(component.name, component);
    });
    App.use(tool_tip.directive);
    App.use(skeleton.directive);
    App.use(image_preview.directive);
    App.config.globalProperties.$message = packages_message;
    App.config.globalProperties.$VEasy = {
        iconStyle: opts.iconStyle || 'fa',
    };
};
const src_main_0 = {
    version: package_0.version,
    locale: locale.use,
    i18n: locale.i18n,
    install,
    Icon: icon,
    Message: packages_message,
    Button: packages_button,
    InputIp: input_ip,
    InputSubnet: input_subnet,
    InputPlain: input,
    Steps: steps,
    Step: step,
    Skeleton: skeleton,
    ImagePreview: image_preview,
    ToolTip: tool_tip,
    ColorPicker: packages_color_picker,
    ScrollBar: scroll_bar,
    RouteIndicator: route_indicator,
    Collapse: collapse,
};
/* harmony default export */ var src_0 = __webpack_exports__["default"] = (src_main_0);
const version = package_0.version;


/***/ })
/******/ ])["default"];