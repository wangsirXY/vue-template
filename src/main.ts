import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from "pinia-plugin-persistedstate"

import App from './App.vue'
import router from './router'

// 清除默认css样式
import "normalize.css"
import './assets/styles/main.css'

const app = createApp(App)

const pinia = createPinia()
// pinia持久化
pinia.use(piniaPluginPersistedstate)

app.use(pinia)
app.use(router)
app.mount('#app')