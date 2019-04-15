<template>
  <div>
    <home-header :city="city"></home-header>
    <home-swiper :swiperList="swiperList"></home-swiper>
    <home-icons :iconList="iconList"></home-icons>
    <home-hot :hotList="hotList"></home-hot>
    <home-recommend :recommendList="recommendList"></home-recommend>
    <home-Weekend :weekendList="weekendList"></home-Weekend>
  </div>
</template>
<script>
import HomeHeader from '../components/home/Header'
import HomeSwiper from '../components/home/Swiper'
import HomeIcons from '../components/home/Icons'
import HomeHot from '../components/home/Hot'
import HomeRecommend from '../components/home/Recommend'
import HomeWeekend from '../components/home/Weekend'
import axios from 'axios'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeHot,
    HomeRecommend,
    HomeWeekend
  },
  data(){
    return {
      city: '',
      swiperList: [],
      iconList: [],
      hotList: [],
      recommendList: [],
      weekendList: []
    }
  },
  methods: {
    getAjax(){
      axios.get('/api/index.json').then(this.getData);
    },
    getData(res){
      res = res.data;
      if(res.ret && res.data) {
        this.city = res.data.city;
        this.swiperList = res.data.swiperList;
        this.iconList = res.data.iconList;
        this.hotList = res.data.hotList;
        this.recommendList = res.data.recommendList;
        this.weekendList = res.data.weekendList;
      }
    }
  },
  mounted(){
    this.getAjax()
  },
}
</script>
<style lang="">
  
</style>

