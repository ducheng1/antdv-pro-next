import { loadingFadeOut } from 'virtual:app-loading'
import { createApp } from 'vue'
import App from './App.vue'
import { router, setupPlugins } from './plugins'
import 'antdv-next/dist/reset.css'
import 'virtual:uno.css'
import '@/styles/global.scss'
import '@/styles/view-transition.scss'

const app = createApp(App)

setupPlugins(app)

router.isReady().then(() => {
  // 生成路由
  const routesStore = useRoutesStoreHook()
  routesStore.generateMenu()
  // 设置默认语言
  const appStore = useAppStoreHook()
  appStore.setDefaultLocale()
  // 挂载
  app.mount('#app')
  loadingFadeOut()
})
