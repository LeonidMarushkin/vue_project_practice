import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '../views/MainPage.vue'
import BasketPage from '../views/BasketPage.vue'
import GoodPage from '../views/GoodPage.vue'
import AuthorizationPage from '../views/AuthorizationPage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: MainPage
  },
  {
    path: '/basket',
    name: 'basket',
    component: BasketPage
  },
  {
    path: '/good/:id',
    name: 'good',
    component: GoodPage
  },
  {
    path: '/authorization',
    name: 'authorization',
    component: AuthorizationPage
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
