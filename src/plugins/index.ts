import type { App } from 'vue'
import { setupI18n } from './i18n'
import { setupRouter } from './router'
import { setupStore } from './store'

export function setupPlugins(app: App) {
  setupI18n(app)
  setupStore(app)
  setupRouter(app)
}

export { i18n } from './i18n'
export { router } from './router'
export { store } from './store'
