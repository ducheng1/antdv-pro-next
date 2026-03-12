import { loadingFadeOut } from 'virtual:app-loading'
import { createApp } from 'vue'
import App from './App.vue'
import { router, setupPlugins } from './plugins'
import 'antdv-next/dist/reset.css'
import 'virtual:uno.css'
import '@/styles/global.scss'

const app = createApp(App)

setupPlugins(app)

router.isReady().then(() => {
  app.mount('#app')
  loadingFadeOut()
})
