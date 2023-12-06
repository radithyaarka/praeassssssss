import { createRouter, createWebHistory } from 'vue-router'
import homeView from '../views/homeView.vue'
import loginView from '../views/loginView.vue'
import chatView from '../views/chatView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: homeView
    },
    {
      path: '/login',
      name: 'login',
      component: loginView
    },
    {
      path: '/chat',
      name: 'chat',
      component: chatView
    }
  ]
})

export default router
