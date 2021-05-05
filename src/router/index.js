import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '../App.vue'
import SignInPage from '../views/SignInPage.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'App',
    component: App
  },
  {
    path: '/signinpage',
    name: 'SignInPage',
    component: SignInPage
  },
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
