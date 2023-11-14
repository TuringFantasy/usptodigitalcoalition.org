import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Mission from './views/Mission.vue'
import About from './views/About.vue'
import Membership from './views/Membership.vue'
import Contact from './views/Contact.vue'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/mission',
      name: 'mission',
      component: Mission
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import(/* webpackChunkName: "about" */ './views/Mission.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/membership',
      name: 'membership',
      component: Membership
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
