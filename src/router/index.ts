import { createRouter, createWebHistory } from 'vue-router'
import LogIn from '../views/LogIn.vue'
import Main from '../views/Main.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: '/', name: 'logIn', component: LogIn},
    {path: '/main', name: 'main', component: Main},
  ]
})
export default router
