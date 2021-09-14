import { createRouter, createWebHashHistory } from 'vue-router'
// @ts-ignore
import Home from '../views/Home.vue'
// @ts-ignore
import Detail from '../views/Detail.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/detail',
    name: 'Details',
    component: Detail
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
