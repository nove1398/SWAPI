import { createRouter, createWebHistory } from 'vue-router'
// @ts-ignore
import Home from '../views/Home.vue'
// @ts-ignore
import Detail from '../views/Detail.vue'

// @ts-ignore
import Search from '../views/Search.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/detail/:id',
    name: 'Details',
    component: Detail
  },
  {
    path: '/search/:term',
    name: 'Search',
    component: Search
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
