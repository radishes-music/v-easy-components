import { App } from 'vue'

export interface TipDirectiveType {
  install?: (app: App) => void
}
