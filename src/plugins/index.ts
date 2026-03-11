import type { App } from 'vue'
import { setupI18n } from './i18n'
import { setupRouter } from './router'
import { setupStore } from './store'
import './dayjs'

export function setupPlugins(app: App) {
  setupStore(app)
  setupI18n(app)
  setupRouter(app)
}

export { i18n } from './i18n'
export { router } from './router'
export { store } from './store'
