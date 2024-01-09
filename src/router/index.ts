import { createRouter, createWebHistory } from 'vue-router'
import LogIn from '../views/LogIn.vue'
import Main from '../views/Main.vue'
import Sponsor from '../views/Sponsor.vue'
import Student from '../views/Student.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: '/', name: 'logIn', component: LogIn},
    {path: '/main', name: 'main', component: Main},
    {path: '/sponsor/:id', name: 'sponsor', component: Sponsor},
    {path: '/student/:id', name: 'student', component: Student},
  ]
})
export default router
