import { VEasyComponent } from './component'

/** ScrollBar Component */
export interface VeScroll extends VEasyComponent {
  /** thumb bar size */
  size: String | Number

  /** Whether to keep showing bar */
  always: Boolean
}
