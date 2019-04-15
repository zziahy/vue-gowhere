<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="swiperList.length">
      <swiper-slide v-for="item in swiperList" :key="item.id">
        <a href="#">
          <img class="swiper-img" :src="item.imgUrl" alt="">
        </a>
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
  
</template>
<script>
export default {
  name: 'HomeSwiper',
  props: {
    swiperList: Array
  },
  data(){
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true,

      }
    }
  }
}
</script>
<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active
    background: #fff;
  .swiper
    width: 100%;
    height: 2rem;
  .swiper-img
    width: 100%;
</style>