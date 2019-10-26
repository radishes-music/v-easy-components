// @ts-ignore
import Vue, {VNode} from 'vue'

export type MessageType = 'success' | 'warning' | 'info' | 'error'

/** Message Component */
export declare class VeMessageComponent extends Vue {
  /** Close the Loading instance */
  close (): void
}

export interface CloseEventHandler {
  /**
   * Triggers when a message is being closed
   *
   * @param instance The message component that is being closed
   */
  (instance: VeMessageComponent): void
}

/** Options used in Message */
export interface ElMessageOptions {
  /** Message text */
  message: string | VNode

  /** Message type */
  type?: MessageType

  /** Custom icon's class, overrides type */
  iconClass?: string

  /** Custom class name for Message */
  customClass?: string

  /** Display duration, millisecond. If set to 0, it will not turn off automatically */
  duration?: number

  /** Whether to show a close button */
  showClose?: boolean

  /** Whether to center the text */
  center?: boolean

  /** Whether message is treated as HTML string */
  dangerouslyUseHTMLString?: boolean

  /** Callback function when closed with the message instance as the parameter */
  onClose?: CloseEventHandler

  /** Set the distance to the top of viewport. Default is 20 px. */
  offset?: number
}

export interface VeMessage {
  /** Show an info message */
  (text: string): VeMessageComponent

  /** Show message */
  (options: ElMessageOptions): VeMessageComponent

  /** Show a success message */
  success (text: string): VeMessageComponent

  /** Show a success message with options */
  success (options: ElMessageOptions): VeMessageComponent

  /** Show a warning message */
  warning (text: string): VeMessageComponent

  /** Show a warning message with options */
  warning (options: ElMessageOptions): VeMessageComponent

  /** Show an info message */
  info (text: string): VeMessageComponent

  /** Show an info message with options */
  info (options: ElMessageOptions): VeMessageComponent

  /** Show an error message */
  error (text: string): VeMessageComponent

  /** Show an error message with options */
  error (options: ElMessageOptions): VeMessageComponent
}

declare module 'vue/types/vue' {
  interface Vue {
  /** Used to show feedback after an activity. The difference with Notification is that the latter is often used to show a system level passive notification. */
    $message: VeMessage
  }
}
