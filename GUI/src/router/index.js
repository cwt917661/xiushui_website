import Vue from 'vue'
import VueRouter from 'vue-router'

import ContentLayout from "@/layout/ContentLayout.vue";

import Donation from '@/views/Donation.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: ContentLayout,
    // redirect: "/donation",
    children: [
      {
        path: '',
        // path: "donation",
        name: "Donation",
        component: Donation
      }
    ]
  }
];

const router = new VueRouter({
  routes,
  linkExactActiveClass: "nav-item active"
})

export default router
