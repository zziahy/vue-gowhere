<template>
  <div class="container" @click="handleClick">
    <div class="wrapper">
      <swiper :options="swiperOptions">
          <swiper-slide v-for="(item,index) in imgs" :key="index">
            <a href="javascript:void(0)">
              <img class="swiper-img" :src="item" alt="">
            </a>
          </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
    </div>
  </div>
</template>
<script>

export default {
  name: 'CommonGallary',
  props: ['imgs'],
  data() {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        observeParents: true,
        observer: true,
        loop: false
      },

    }
  },
  methods: {
    handleClick(){
      this.$emit('handleCancel');
    }
  },
}
</script>
<style lang="stylus" scoped>
  .container >>> .swiper-container
    overflow: inherit;
  .container 
    display: flex;
    flex-direction: column;
    justify-content: center;
    z-index: 99;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background:#000;
    .wrapper
      height: 0;
      width: 100%;
      padding-bottom: 66%;
      
      .swiper-pagination
        color: #fff;
        bottom: -3.6rem;

      img 
        width: 100%;
        display: block;
</style>