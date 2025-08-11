import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import './assets/main.css'
import { useThemeStore } from './stores/themeStore'

const app = createApp(App)
const pinia = createPinia()
app.use(pinia)

const themeStore = useThemeStore()
themeStore.initTheme()

app.mount('#app')
