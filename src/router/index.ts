import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView/AboutView.vue'),
    },
    {
      path: '/article',
      name: 'article',
      component: () => import('../views/ArticleView/ArticleView.vue'),
    },
    {
      path: '/photography',
      name: 'photography',
      component: () => import('../views/PhotographyView/PhotographyView.vue'),
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('../views/ProjectsView/ProjectsView.vue'),
    },
    {
      path: '/shatter',
      name: 'shatter',
      component: () => import('../views/ShatterView/ShatterView.vue'),
    },
  ],
})

export default router
