import type { App } from 'vue'
import { setupI18n } from './i18n'
import { setupRouter } from './router'
import { setupStore } from './store'

export async function setupPlugins(app: App) {
  setupStore(app)
  const userStore = useUserStore()
  if (userStore.isLogin) {
    // 获取用户权限
    await userStore.getPermissionList()
  }
  setupI18n(app)
  setupRouter(app)
}

export { i18n } from './i18n'
export { router } from './router'
export { store } from './store'
