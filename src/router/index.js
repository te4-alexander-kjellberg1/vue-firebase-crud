import Vue from 'vue'
import VueRouter from 'vue-router'
import firebase from 'firebase'

import Home from '../views/Home.vue'
import SignInPage from '../views/SignInPage.vue'
import CrudSite from '../views/CrudSite.vue'
import CloudDatabase from '../views/CloudDatabase.vue'
import AdminPage from '../views/AdminPage.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/signinpage',
    name: 'Sign In',
    component: SignInPage
  },
  {
    path: '/crud',
    name: 'CRUD',
    component: CrudSite,
    meta: {
      authRequired: true,
    }  
  },
  {
    path: '/clouddb',
    name: 'Cloud Database',
    component: CloudDatabase,
    meta: {
      authRequired: true,
    }
  },
  {
    path: '/adminpage',
    name: 'Admin Page',
    component: AdminPage,
    meta: {
      authRequired: true,
    }
  },
]

const router = new VueRouter({
  routes,
  mode: 'history'
})


window.fetchedAuthState = false
firebase.auth().onAuthStateChanged(function() {
  window.fetchedAuthState = true
});

router.beforeEach(async(to, from, next) => {
  document.title = ` ${process.env.VUE_APP_TITLE} - ${to.name}`;

  while(!window.fetchedAuthState) {
    await new Promise(resolve => setTimeout(resolve, 50))
  }
  if (to.matched.some(record => record.meta.authRequired)) {
    let user = await firebase.default.auth().currentUser
    console.log(user)
    if (user) {
      next();
    } else {
      alert('You must be logged in to see this page');
      next({
        path: '/',
      });
    }
  } else {
    next()
  }
})

export default router
