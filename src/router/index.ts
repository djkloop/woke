import { useHead } from '@unhead/vue'
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      meta: {
        title: '蜗牛的博客',
      },
      component: HomeView,
    },
    {
      path: '/article-detail',
      name: 'article-detail',
      component: () => import('../views/ArticleDetailView/ArticleDetailView.vue'),
    },
    {
      path: '/about',
      name: 'about',
      meta: {
        title: '蜗壳 - 关于',
      },
      component: () => import('../views/AboutView/AboutView.vue'),
    },
    {
      path: '/article',
      name: 'article',
      meta: {
        title: '蜗壳 - 水文',
      },
      component: () => import('../views/ArticleView/ArticleView.vue'),
    },
    {
      path: '/photography',
      name: 'photography',
      meta: {
        title: '蜗壳 - 摄影',
      },
      component: () => import('../views/PhotographyView/PhotographyView.vue'),
    },
    {
      path: '/projects',
      name: 'projects',
      meta: {
        title: '蜗壳 - 项目',
      },
      component: () => import('../views/ProjectsView/ProjectsView.vue'),
    },
    {
      path: '/shatter',
      name: 'shatter',
      meta: {
        title: '蜗壳 - 碎嘴',
      },
      component: () => import('../views/ShatterView/ShatterView.vue'),
    },
  ],
})

router.beforeEach((to) => {
  if (to.meta.title) { // 如果设置标题，拦截后设置标题
    useHead({
      title: to.meta.title,
    })
  }
})

export default router
