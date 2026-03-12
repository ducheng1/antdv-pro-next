import type { App } from 'vue'
import { setupLayouts } from 'virtual:generated-layouts'
import { createRouter, createWebHistory } from 'vue-router'
import { handleHotUpdate, routes } from 'vue-router/auto-routes'
import { useAppStoreHook } from '@/stores/app'
import { i18n } from './i18n'

const extendedRoutes = setupLayouts(
  routes.map((item) => {
    item.meta ??= {}
    item.meta.requiresLogin = item.meta.requiresLogin ?? true
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

router.beforeEach((to, _from, next) => {
  const userStore = useUserStoreHook()
  // 登录且访问登录页，跳转到首页
  if (userStore.isLogin && to.path === '/login') {
    return next('/')
  }
  // 未登录且访问非公共页面，跳转到登录页
  if (to.meta.requiresLogin && !userStore.isLogin) {
    return next({ path: '/login', query: { redirect: to.fullPath }, replace: true })
  }

  // 设置页面标题
  const appStore = useAppStoreHook()
  const { t } = i18n.global
  const title = to.meta.title ? `${t(to.meta.title)} - ` : ''
  useTitle(title + t('app.title', {}, { locale: appStore.config.locale }))

  return next()
})

export function setupRouter(app: App) {
  app.use(router)
}
