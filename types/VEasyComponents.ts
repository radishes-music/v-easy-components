// @ts-ignore
import Vue, { PluginObject } from 'vue'
import { VEasyComponent } from './component'

import { VeMessage } from './message'
export interface InstallationOptions {
  locale: any
}

/** The version of element-ui */
export const version: string

/**
 * Install all element-ui components into Vue.
 * Please do not invoke this method directly.
 * Call `Vue.use(ElementUI)` to install.
 */
export function install (vue: typeof Vue, options: InstallationOptions): void

/** ElementUI component common definition */
export type Component = VEasyComponent

/** Used to show feedback after an activity. The difference with Notification is that the latter is often used to show a system level passive notification. */
export const Message: VeMessage

/** Alert Component */
export class Alert extends ElAlert {}
