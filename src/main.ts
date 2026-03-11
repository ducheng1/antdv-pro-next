import { createApp } from 'vue'
import App from './App.vue'
import { router, setupPlugins } from './plugins'
import 'virtual:uno.css'
import 'antdv-next/dist/reset.css'
import '@/styles/global.scss'

const app = createApp(App)

setupPlugins(app)

router.isReady().then(() => {
  app.mount('#app')
})
