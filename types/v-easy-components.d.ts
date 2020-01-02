// @ts-ignore
import Vue, { PluginObject } from 'vue'
import { VEasyComponent } from './component'

import { VeMessage } from './message'
import { VeSwitch } from './switch'
import { VeButton } from './button'
import { VeIp } from './input-ip'
import { VeInput } from './input-plain'
import { VeSubnet } from './input-subnet'

export interface InstallationOptions {
  locale: any
}

/** The version of v-easy-components */
export const version: string

/**
 * Install all v-easy-components components into Vue.
 * Please do not invoke this method directly.
 * Call `Vue.use(EasyComponents)` to install.
 */
export function install (vue: typeof Vue, options: InstallationOptions): void

/** EasyComponents component common definition */
export type Component = VEasyComponent

/** Used to show feedback after an activity. The difference with Notification is that the latter is often used to show a system level passive notification. */
export const Message: VeMessage

/** Switch Component */
export class Switch extends VeSwitch {}

/** Button Component */
export class Button extends VeButton {}

/** Ip Component */
export class Ip extends VeIp {}

/** Input Component */
export class Input extends VeInput {}

/** Subnet Component */
export class Subnet extends VeSubnet {}

/** Vue instruction. Reference https://cn.vuejs.org/v2/guide/custom-directive.html */

/** ImagePreview directive */
/** ToolTip directive */
/** LoadingDom directive */
