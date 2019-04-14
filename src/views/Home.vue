<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
    <home-hot></home-hot>
    <home-recommend></home-recommend>
    <home-Weekend></home-Weekend>
  </div>
</template>
<script>
import HomeHeader from '../components/Header'
import HomeSwiper from '../components/Swiper'
import HomeIcons from '../components/Icons'
import HomeHot from '../components/Hot'
import HomeRecommend from '../components/Recommend'
import HomeWeekend from '../components/Weekend'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeHot,
    HomeRecommend,
    HomeWeekend
  }
}
</script>
<style lang="">
  
</style>

