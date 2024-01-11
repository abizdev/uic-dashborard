import './assets/css/base.css'
import 'v-calendar/style.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import VCalendar from 'v-calendar';

// Use plugin with optional defaults

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VCalendar, {})

app.mount('#app')
