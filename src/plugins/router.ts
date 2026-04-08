import type { App } from 'vue'
import type { RouteRecordRaw } from 'vue-router'
import { setupLayouts } from 'virtual:generated-layouts'
import { createRouter, createWebHistory } from 'vue-router'
import { handleHotUpdate, routes } from 'vue-router/auto-routes'
import { useAppStoreHook } from '@/stores/app'
import { i18n } from './i18n'
import { progressBar } from './progress-bar'

function addDefaultMeta(routes: readonly RouteRecordRaw[]) {
  return routes.map((item) => {
    item.meta ??= {}
    item.meta.requiresLogin = item.meta.requiresLogin ?? true
    if (item.children) {
      item.children = addDefaultMeta(item.children)
    }
    return item
  })
}

const extendedRoutes = setupLayouts(addDefaultMeta(routes))

export const router = createRouter({
  history: createWebHistory(),
  routes: extendedRoutes,
})

if (import.meta.hot) {
  handleHotUpdate(router)
}

router.beforeEach((to, _from) => {
  progressBar.start()
  const userStore = useUserStoreHook()
  // 登录且访问登录页，跳转到首页
  if (userStore.isLogin && to.path === '/login') {
    return '/'
  }

  // 无权限访问，跳转到无权限页
  if (to.meta.auth && !userStore.hasPermission(to.meta.auth)) {
    return { path: '/error/403', replace: true }
  }

  // 未登录且访问非公共页面，跳转到登录页
  if (to.meta.requiresLogin && !userStore.isLogin) {
    return { path: '/login', query: { redirect: to.fullPath }, replace: true }
  }

  // 设置页面标题
  const appStore = useAppStoreHook()
  const { t } = i18n.global
  const title = to.meta.title
    ? `${t(to.meta.title, {}, { locale: appStore.config.locale })} - `
    : ''
  useTitle(title + t('app.title', {}, { locale: appStore.config.locale }))

  return true
})

router.afterEach(() => {
  progressBar.done()
})

export function setupRouter(app: App) {
  app.use(router)
}
