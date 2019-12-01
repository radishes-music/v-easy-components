import { VEasyComponent } from './component'
import { Size } from './size'

/** Button type */
export type ButtonType = 'primary' | 'success' | 'warning' | 'error' | 'info' | 'text'

/** Same as native button's type */
export type ButtonNativeType = 'button' | 'submit' | 'reset' | 'menu'

/** Button Component */
export declare class VeButton extends VEasyComponent {
  /** Button type */
  type: ButtonType

  /** Determine whether it's a plain button */
  plain: boolean

  /** Determine whether it's a round button */
  round: boolean

  /** Determine whether it's loading */
  loading: boolean

  /** Disable the button */
  disabled: boolean

  /** Button icon, accepts an icon name of Element icon component */
  icon: string

  /** Same as native button's type */
  nativeType: ButtonNativeType

  size: Size
}
