import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Car from "@/views/Car";
import CarDetail from "@/views/CarDetail";
import PostCar from "@/views/PostCar";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/car/create',
    name: 'PostCar',
    component: PostCar
  },
  {
    path: '/car',
    name: 'CarList',
    component: Car
  },
  {
    path: '/car/:type',
    name: 'CarType',
    component: Car,
  },
  {
    path: '/car/:type/:brand',
    name: 'CarBrand',
    component: Car,
  },
  {
    path: '/car/:type/:brand/:model',
    name: 'CarModel',
    component: Car,
  },
  {
    path: '/ilan/:id',
    name: 'CarDetail',
    component: CarDetail
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
