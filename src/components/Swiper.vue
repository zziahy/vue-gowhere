<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item in swiperList">
        <a href="#">
          <img class="swiper-img" :src="item.imgUrl" :key="item.id" alt="">
        </a>
      </swiper-slide>
   
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
  
</template>
<script>
export default {
  name: 'HomeSwiper',
  data(){
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      },
      swiperList: [{
        id: '0001',
        imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/942d87cc1576c333c77dc1f86af145cd.jpg_750x200_d25bf3eb.jpg'
      },{
        id: '0002',
        imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/5aed0c962f09f0681d31c6e7a159a80d.jpg_750x200_5929f4c9.jpg'
      },{
        id: '0003',
        imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/065046b9ef7feccc4cbb7d2ff8257518.jpg_750x200_7082b648.jpg'
      }]
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