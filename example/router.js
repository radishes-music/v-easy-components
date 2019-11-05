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
    path: '/',
    redirect: '/image-preview'
  },
  {
    path: '/image-preview',
    name: 'ImagePreview',
    component: ImagePreview
  },
  {
    path: '/button',
    name: 'Button',
    component: Button
  },
  {
    path: '/input',
    name: 'Input',
    component: Input
  },
  {
    path: '/ip',
    name: 'Ip',
    component: Ip
  },
  {
    path: '/loading-dom',
    name: 'LoadingDom',
    component: LoadingDom
  },
  {
    path: '/tool-tip',
    name: 'ToolTip',
    component: ToolTip
  },
  {
    path: '/message',
    name: 'Message',
    component: Message
  },
]

export default new VueRouter({
  mode: 'history',
  routes,
})
