import { createWebHistory, createRouter } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'homepage-claro-pay',
    component: () => import('./views/Home.vue')
  },

  {
    path: '/:pathMatch(.*)*', name: 'not-found', component: () => import('./views/NotFound.vue')
  },

]

export default createRouter({
  history: createWebHistory(),
  mode: 'history',
  routes,
})
