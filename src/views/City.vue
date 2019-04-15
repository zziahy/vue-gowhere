<template>
  <div>
    <city-header></city-header>
    <city-container></city-container>
  </div>
</template>
<script>
import CityHeader from '../components/city/Header'
import CityContainer from '../components/city/Container'
export default {
  name: 'City',
  components: {
    CityHeader,
    CityContainer
  }
}
</script>
<style lang="stylus" scoped>
  
</style>