import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import ContentLayout from "@/layout/ContentLayout.vue";
import DonationView from '@/views/DonationView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: ContentLayout,
      children: [
        {
          path: '',
          name: "DonationView",
          component: DonationView
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
