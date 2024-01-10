import { createRouter, createWebHistory } from 'vue-router'
import LogIn from '../views/LogIn.vue'
import Main from '../views/Main.vue'
import Sponsor from '../views/Sponsor/Sponsor.vue'
import Student from '../views/Student/Student.vue'
import Dashboard from '../views/Dashboard.vue'
import SponsorsList from '@/views/Sponsor/SponsorsList.vue'
import StudentsList from '@/views/Student/StudentsList.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: '/', name: 'logIn', component: LogIn},
    {path: '/main', name: 'main', component: Main},
    {path: '/dashboard', name: 'dashboard', component: Dashboard},
    {path: '/sponsor', name: 'sponsors', component: SponsorsList},
    {path: '/student', name: 'students', component: StudentsList},
    {path: '/sponsor/:id', name: 'sponsor', component: Sponsor},
    {path: '/student/:id', name: 'student', component: Student},
  ]
})
export default router
