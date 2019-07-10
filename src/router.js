import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Films from './views/Films.vue'
import Cinemas from './views/Cinemas.vue'
import Center from './views/Center.vue'
import Odds from './views/Odds.vue'

import ComingSoon from './views/ComingSoon.vue'
import List from './components/List.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect:{name:"films"}
    },
    {
      path:'/films',
      name:'films',
      component:Films,
      redirect:{name:'filmlist'},
      children:[
        {
          path:'/films/:type?',
          name:'filmlist',
          component:List
        }
      ]
    },
    {
      path:'/cinemas',
      name:'cinemas',
      component:Cinemas
    },
    {
      path:'/odds',
      name:'odds',
      component:Odds
    },
    {
      path:'/center',
      name:'center',
      component:Center
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
