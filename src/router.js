import { createRouter, createWebHistory } from 'vue-router'
import QuemSou from './components/views/QuemSou.vue'
import OQueFaco from './components/views/OQueFaco.vue'
import UserHobbies from './components/views/UserHobbies.vue'

const routes = [
  { path: '/', redirect: '/quem-sou' },
  { path: '/quem-sou', component: QuemSou },
  { path: '/oque-faco', component: OQueFaco },
  { path: '/hobbies', component: UserHobbies },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router

