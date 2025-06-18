import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import SiteInfoView from '../views/SiteInfoView.vue'
import EditPackageView from '../views/EditPackageView.vue'

const routes = [
  {
    path: '/packages',
    name: 'packages',
    component: HomeView
  },
  {
    path: '/siteinfo',
    name: 'siteinfo',
    component: SiteInfoView
  },
  {
    path: '/edit-package/:id',
    name: 'edit-package',
    component: EditPackageView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
