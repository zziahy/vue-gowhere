import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
import City from './views/City'
import Detail from './views/Detail'
import BannerPoto from './components/detail/BannerPoto'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
       name: 'home',
       component: Home
    },
    {
      path: '/city',
      name: 'city',
      component: City
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: Detail
    },
    {
      path: '/list',
      name: 'bannerpoto',
      component: BannerPoto
    }
    
  ],
  scrollBehavior () {
    return { x: 0, y: 0 }
  }

})
