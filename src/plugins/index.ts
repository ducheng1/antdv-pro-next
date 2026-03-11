import type { App } from 'vue'
import { setupRouter } from './router'
import { setupStore } from './store'
import './dayjs'

export function setupPlugins(app: App) {
  setupRouter(app)
  setupStore(app)
}

export { router } from './router'
export { store } from './store'
