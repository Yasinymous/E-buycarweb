import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Car from "@/views/Car";
import CarDetail from "@/views/CarDetail";
import CarType from "@/views/CarType";
import CarModel from "@/views/CarModel";
import CarBrand from "@/views/CarBrand";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/car',
    name: 'Car',
    component: Car
  },
  {
    path: '/car/:type',
    name: 'CarType',
    component: CarType,
  },
  {
    path: '/car/:type/:brand',
    name: 'CarBrand',
    component: CarBrand,
  },
  {
    path: '/car/:type/:brand/:model',
    name: 'CarModel',
    component: CarModel,
  },
  {
    path: '/car',
    name: 'Car',
    component: Car,
    props: route => ({ query: route.query.b })
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
