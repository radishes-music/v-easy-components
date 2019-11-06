import Vue from 'vue'
import VueRouter from 'vue-router'

import ImagePreview from './fun-case/image-preview'
import Button from './fun-case/button'
import Input from './fun-case/input'
import Ip from './fun-case/ip'
import LoadingDom from './fun-case/loading-dom'
import ToolTip from './fun-case/tool-tip'
import Message from './fun-case/message'

Vue.use(VueRouter)

const routes = [
  {
    path: '/image-preview',
    name: 'ImagePreview',
    meta: {
      formatter: 'v-image'
    },
    component: ImagePreview
  },
  {
    path: '/button',
    name: 'Button',
    meta: {
      formatter: 've-button'
    },
    component: Button
  },
  {
    path: '/input',
    name: 'Input',
    meta: {
      formatter: 've-input'
    },
    component: Input
  },
  {
    path: '/ip',
    name: 'Ip',
    meta: {
      formatter: 've-ip'
    },
    component: Ip
  },
  {
    path: '/loading-dom',
    name: 'LoadingDom',
    meta: {
      formatter: 'v-loading-preload'
    },
    component: LoadingDom
  },
  {
    path: '/tool-tip',
    name: 'ToolTip',
    meta: {
      formatter: 'v-tip'
    },
    component: ToolTip
  },
  {
    path: '/message',
    name: 'Message',
    meta: {
      formatter: '$msg'
    },
    component: Message
  },
]

export {
  routes
};

export default new VueRouter({
  mode: 'history',
  routes: [{
    path: '/',
    redirect: '/image-preview'
  }].concat(routes),
})
