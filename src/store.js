import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    city: '北京'
  },
  mutations: {
    //能改变state中的数据
    changeCity(state,city){
      state.city = city
    }
  },
  actions: {
    changeCity(ctx,city){
      //调用mutations
      ctx.commit('changeCity',city)
    }
  }
})
