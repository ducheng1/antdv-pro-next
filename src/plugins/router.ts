import type { App } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { handleHotUpdate, routes } from 'vue-router/auto-routes'

const extendedRoutes = routes.map((item) => {
  item.meta ??= {}

  return item
})

const router = createRouter({
  history: createWebHistory(),
  routes: extendedRoutes,
})

if (import.meta.hot) {
  handleHotUpdate(router)
}

export function setupRouter(app: App) {
  app.use(router)
}
