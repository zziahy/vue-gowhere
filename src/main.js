import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import fastClick from 'fastclick' //300毫秒延迟
import './assets/styles/reset.css'
import './assets/styles/border.css' //二倍屏问题

Vue.config.productionTip = false
fastClick.attach(document.body)
new Vue({
  router,
  store,
  render: h => h(App) //把App大组件渲染到页面上
}).$mount('#app')
