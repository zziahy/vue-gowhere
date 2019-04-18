import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
let defaultCity = "郑州"
try {
  if(localStorage.city)
  defaultCity = localStorage.city;
} catch (error) {
  
}
export default new Vuex.Store({
  state: {
    city: defaultCity
  },
  mutations: {
    //能改变state中的数据
    changeCity(state,city){
      state.city = city;
      try {
        localStorage.city = city
      } catch (error) {
        
      }
    }
  },
  actions: {
    changeCity(ctx,city){
      //调用mutations
      ctx.commit('changeCity',city)
    }
  }
})
