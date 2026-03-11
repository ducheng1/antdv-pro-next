import type { App } from 'vue'
import { setupLayouts } from 'virtual:generated-layouts'
import { createRouter, createWebHistory } from 'vue-router'
import { handleHotUpdate, routes } from 'vue-router/auto-routes'

const extendedRoutes = setupLayouts(
  routes.map((item) => {
    item.meta ??= {}

    return item
  }),
)

export const router = createRouter({
  history: createWebHistory(),
  routes: extendedRoutes,
})

if (import.meta.hot) {
  handleHotUpdate(router)
}

export function setupRouter(app: App) {
  app.use(router)
}
