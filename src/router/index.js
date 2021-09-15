import { createRouter, createWebHashHistory } from 'vue-router'
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
    path: '/search/:id',
    name: 'Search',
    component: Search
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
