import Vue from 'vue'
import Router from 'vue-router'
import Logo from '@/components/Logo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Logo',
      component: Logo
    }
  ]
})
