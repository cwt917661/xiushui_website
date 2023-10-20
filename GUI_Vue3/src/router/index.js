import { createRouter, createWebHistory } from 'vue-router'
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
    }
  ]
})

export default router
