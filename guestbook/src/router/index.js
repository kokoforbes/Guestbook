import Vue from 'vue'
import Router from 'vue-router'
import home from '../components/home.vue'
import records from '../components/records.vue'

Vue.use(Router)

export default new Router({
  linkExactActiveClass: 'is-active',
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/records',
      name: 'records',
      component: records
    }
  ]
})
