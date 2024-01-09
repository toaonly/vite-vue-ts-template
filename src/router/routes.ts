import HomeView from '@/views/HomeView.vue'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: HomeView,
  },
  {
    path: '/about',
    component: () => import('@/views/AboutView.vue'),
  },
]

export default routes
