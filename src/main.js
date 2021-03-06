import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueBus from 'vue-bus'
import fastClick from 'fastclick' //300毫秒延迟
import './assets/styles/reset.css'
import './assets/styles/border.css' //二倍屏问题
import './assets/styles/iconfont.css' 
import 'swiper/dist/css/swiper.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'


Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)
Vue.use(VueBus)
fastClick.attach(document.body)
new Vue({
  router,
  store,
  render: h => h(App) //把App大组件渲染到页面上
}).$mount('#app')
