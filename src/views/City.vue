<template>
  <div>
    <city-header></city-header>
    <city-container :tab="tab"></city-container>
  </div>
</template>
<script>
import CityHeader from '../components/city/Header'
import CityContainer from '../components/city/Container'
import axios from 'axios'
export default {
  name: 'City',
  components: {
    CityHeader,
    CityContainer
  },
  data(){
    return{
      // cities: Object,
      // hotCities: [],
      tab: []
    }
  },
  methods: {
    getCity(){
      axios.get('/api/city.json').then(this.getCityData)
    },
    getCityData(res){
      var res = res.data;
      if(res.ret && res.data) {
        this.tab = res.data;
        // this.cities = res.data.cities;
        // this.hotCities = res.data.hotCities;
      }

    }
  },
  mounted(){
    this.getCity()
  }

}
</script>
<style lang="stylus" scoped>
  
</style>