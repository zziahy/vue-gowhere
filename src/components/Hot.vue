<template>
  <div class="hot">
    <div class="hot-hd">
      <div class="hot-hd-left">
        <img src="https://imgs.qunarzz.com/piao/fusion/1711/16/bfbb9874e8f11402.png" alt="">
        <span>本周热门榜单</span>
      </div>
      <div class="hot-hd-right">
        <a href="#">
          全部榜单
          <span class="iconfont">&#xe64a;</span>
        </a>
      </div>
    </div>
    <div class="hot-bd">
      <ul class="hot-list">
        <li v-for="item in hotList" :key="item.id">
          <a href="#">
            <img :src="item.imgUrl" alt="">
          </a>
          <img  v-if="item.imgUrl1" :src="item.imgUrl1" alt="" class="top">
          <p>{{ item.decs0 }}</p>
          <span>{{ item.decs1 }}</span>起
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HomeHot',
  data(){
    return {
      hotList: [{
        id: '001',
        imgUrl: 'https://imgs.qunarzz.com/sight/p0/1709/e9/e9b7ae23f567806ea3.img.jpg_250x250_4117ce07.jpg',
        imgUrl1: 'https://imgs.qunarzz.com/piao/fusion/1710/ab/159673b63e6ca702.png',
        decs0: '少林寺',
        decs1: '$60'
      },
      {
        id: '002',
        imgUrl: 'https://imgs.qunarzz.com/sight/p0/1709/63/637ea7611e472428a3.img.jpg_250x250_808fba82.jpg',
        imgUrl1: 'https://imgs.qunarzz.com/piao/fusion/1710/2d/36d0c4adaebbbc02.png',
        decs0: '郑州园博园',
        decs1: '$38.9'
      },
      {
        id: '003',
        imgUrl: 'https://imgs.qunarzz.com/sight/p0/1501/7f/7f95b9cb5cc9e227.water.jpg_250x250_61472b75.jpg',
        imgUrl1: 'https://imgs.qunarzz.com/piao/fusion/1710/67/edc47ffef9e96b02.png',
        decs0: '郑州绿博园',
        decs1: '$17.5'
      },
      {
        id: '004',
        imgUrl: 'https://imgs.qunarzz.com/sight/p0/201309/12/317f9a83c526f54ac8d65eac.jpg_250x250_64f3e8b6.jpg',
        decs0: '郑州动物园',
        decs1: '$30'
      },
      {
        id: '005',
        imgUrl: 'https://imgs.qunarzz.com/sight/p0/201309/12/317f9a83c526f54ac8d65eac.jpg_250x250_64f3e8b6.jpg',
        decs0: '郑州动物园',
        decs1: '$30'
      },]
    }
  }
}
</script>
<style lang="stylus" scoped>
.hot 
  padding: .2rem 0;
  background: #F5F5F5;
  .hot-hd
    height: .9rem;
    line-height: .9rem;
    background: #fff;

    .hot-hd-left
      float: left;

      img
        width: .3rem;
        heigth: .3rem;
        margin: 0 .08rem 0 .2rem;

    .hot-hd-right
      float: right;
      padding-right: .2rem;
      a
        font-size: .24rem;
        color: #616161;
        display: block;
        span  
          font-size: .26rem;

  .hot-bd  
    background: #fff;
    .hot-list
      padding: 0 .24rem;
      overflow-x: scroll;
      white-space: nowrap;

      li
        display: inline-block;
        position relative;
        width: 2rem;
        padding-bottom: .2rem;
        color: #212121;
        font-size: .24rem;
        text-align: center;
        a
          display:block;
          img
            width: 100%;
            height: 100%;
        .top 
          width: .84rem;
          height: .4rem;
          position: absolute;
          top: 0;
          left: 0;
        
        p
          margin-top: .12rem;
        span 
          color: #ff8300;  
      li:not(:first-child)
        margin-left: .12rem;  
</style>