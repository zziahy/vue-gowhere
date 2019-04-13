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
      },
      iconList: [{
        id: '0001',
        imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
        desc: '景点门票'
      },
      {
        id: '0002',
        imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
        desc: '一日游'
      },
      {
        id: '0003',
        imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
        desc: '郑州必游'
      },
      {
        id: '0004',
        imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1803/95/8246f27355943202.png',
        desc: '郑州方特'
      },
      {
        id: '0005',
        imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1803/bd/9f7b9b2b60c1502.png',
        desc: '踏青赏花'
      },
      {
        id: '0006',
        imgUrl: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/51916fbd2017181f28110473eafcf5c7.png',
        desc: '洛阳牡丹会'
      },
      {
        id: '0007',
        imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png',
        desc: '动植物园'
      },
      {
        id: '0008',
        imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1803/50/26ffa31b56646402.png',
        desc: '亲子游'
      },
      {
        id: '0009',
        imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1803/50/26ffa31b56646402.png',
        desc: '海洋馆'
      }
      ]
    }
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
  @import '../assets/styles/reset.css'
  @import '../assets/styles/maxins.sty'
  .nav >>> .swiper-container
   height: 3.6rem;
   border-bottom 1px solid #F3F3F3;
  .nav >>> .swiper-pagination-bullets
   bottom: 6px;
  .nav 
    width: 100%;
    padding-top: .1rem;
    height: 3.2rem;
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