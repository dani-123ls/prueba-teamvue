import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Menu from '../views/Menu.vue'//coloco la ruta

import carrito from '../components/CarritoCompras.vue'
import envia from '../views/envia.vue'
import recibe from '../views/recibe.vue'
const routes = [
  {
    path: '/',//nombre de la ruta
    name: 'Home',
    component: Home//importación de una vista
  },

  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // },
  {
    path: '/Menu',
    name: 'Menu',
    component: Menu,//mismo nombre de import
  },
  
  {
    path: '/carro',
    name: 'carrito',
    component: carrito,
  },
  {
    path: '/envia',
    name: 'envia',
    component: envia,
  },
  {
    path: '/recibe',
    name: 'recibe',
    component: recibe,
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router


