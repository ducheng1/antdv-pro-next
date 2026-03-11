import { createApp } from 'vue'
import App from './App.vue'
import { setupRouter } from './plugins'
import 'virtual:uno.css'
import 'antdv-next/dist/reset.css'
import '@/styles/global.scss'

const app = createApp(App)
setupRouter(app)

app.mount('#app')
