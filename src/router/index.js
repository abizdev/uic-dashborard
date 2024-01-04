import { createRouter, createWebHistory } from 'vue-router'
import LogIn from '../views/LogIn.vue'
import Sponsor from '../views/Sponsor.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: '/', name: 'logIn',  component: LogIn},
    {path: '/sponsor', name: 'sponsor',  component: Sponsor},
  ]
})

export default router
