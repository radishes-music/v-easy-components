import { App } from 'vue'
import { VEasyComponent } from './component'

import { VeMessage } from './message'
import { VeButton } from './button'
import { VeIp } from './input-ip'
import { VeInput } from './input-plain'
import { VeSubnet } from './input-subnet'

export interface InstallationOptions {
  locale: any
}

export interface IconStyle {
  iconStyle?: string
}

/** The version of v-easy-components */
export const version: string

/**
 * Install all v-easy-components components into Vue.
 * Please do not invoke this method directly.
 * Call `Vue.use(EasyComponents)` to install.
 */
export function install(vue: App, options: InstallationOptions): void

export type Component = VEasyComponent

export const Message: VeMessage

export interface Button extends VeButton {}

export interface InputIp extends VeIp {}

export interface InputPlain extends VeInput {}

export interface InputSubnet extends VeSubnet {}

export interface Icon extends IconStyle {
  name?: string
  size?: string | number
}

export interface Steps extends IconStyle {
  active?: number
  placement?: string
  navClassName?: string
}

export interface Step extends IconStyle {
  title?: string
  icon?: string
}

export interface ToolTip {
  placement?: 'top' | 'right' | 'bottom' | 'left'
  Class?: string[]
  content?: string
  hideAfter?: number
  transition?: string
  enterable?: boolean
  target?: 'hover' | 'click'
  html?: string
  effect?: 'dark' | 'light'
  offset?: number
}

export interface ColorPicker {
  simple?: boolean
  size?: number
  width?: number
  height?: number
  colorFormat?: 'hsl' | 'hsv' | 'hex' | 'rgb'
}

export interface ScrollBar {
  size?: number | string
  always?: boolean
}

export interface RouteIndicator {}

export interface Collapse {}
