import { App } from 'Vue'

export interface TipDirectiveType {
  install?: (app: App) => void
}
