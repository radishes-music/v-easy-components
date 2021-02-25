import Vue from 'vue'
import VueRouter from 'vue-router'

import ImagePreview from './fun-case/image-preview'
import Button from './fun-case/button'
import Input from './fun-case/input'
import Ip from './fun-case/ip-subnet'
import LoadingDom from './fun-case/loading-dom'
import ToolTip from './fun-case/tool-tip'
import Message from './fun-case/message'
import Step from './fun-case/step'
import Icon from './fun-case/icon'
import ColorPicker from './fun-case/color-picker'
import ScrollBar from './fun-case/scroll-bar'
import RouteIndicator from './fun-case/route-Indicator'

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
    path: '/icon',
    name: 'Icon',
    meta: {
      formatter: 've-icon'
    },
    component: Icon
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
    path: '/step',
    name: 'Step',
    meta: {
      formatter: 've-step'
    },
    component: Step
  },
  {
    path: '/skeleton',
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
  {
    path: '/color-picker',
    name: 'ColorPicker',
    meta: {
      formatter: 've-color-picker'
    },
    component: ColorPicker
  },
  {
    path: '/scroll-bar',
    name: 'ScrollBar',
    meta: {
      formatter: 've-scroll'
    },
    component: ScrollBar
  },
  {
    path: '/route-indicator',
    name: 'RouteIndicator',
    meta: {
      formatter: 've-route-indicator'
    },
    component: RouteIndicator
  }
]

export { routes }

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/image-preview'
    }
  ].concat(routes)
})
