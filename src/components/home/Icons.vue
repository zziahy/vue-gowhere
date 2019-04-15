<template>
  <nav class="nav">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(item,index) in pages" :key="index">
        <ul class="clearFix">
          <li v-for="items in item" :key="items.id">
            <a href="#">
              <img :src="items.imgUrl" alt="">
            </a>
            <p>{{items.desc}}</p>
          </li>
        </ul>
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
    
  </nav>
</template>
<script>
export default {
  name: 'HomeIcons',
  data(){
    return {
      'swiperOption': {
        pagination: '.swiper-pagination',
      }
    }
  },
  props: {
    iconList: Array
  },
  computed: {
    pages(){
      const pages=[];
      this.iconList.forEach((item,index)=>{
        const page = Math.floor(index / 8)
        if(!pages[page]){
          pages[page] = []
        }
        pages[page].push(item)
       
      })
       return pages
    }
  },
}
</script>
<style lang="stylus" scoped>
  @import '../../assets/styles/reset.css'
  @import '../../assets/styles/maxins.sty'
  .nav >>> .swiper-container
   height: 3.6rem;
   border-bottom 1px solid #F3F3F3;
  .nav >>> .swiper-pagination-bullets
   bottom: 6px;
  .nav 
    width: 100%;
    padding-top: .1rem;
    height: 3.6rem;
    li
      width: 25%;
      text-align: center;
      float left;

      a
        display: block;
        width: 100%;

        img 
          display: block;
          width: 1rem;
          height: 1rem;
          margin: 0 auto;
        
      p
        padding: .1rem 0 .15rem 0;
        font-size .24rem;
        color #666; 
        ellipsis();
</style>