import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ContactUs from '../views/ContactUs.vue'
import NotFound from '../components/NotFound.vue'

const routes = [
  {
    path: '/404',
    name: 'NotFound',
    component: NotFound
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/contactus',
    name: 'ContactUs',
    component: ContactUs
  },
  {
    path: "/:catchAll(.*)", // Unrecognized path automatically matches 404
    redirect: '/404',
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
