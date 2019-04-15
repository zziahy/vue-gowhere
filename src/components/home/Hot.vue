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
  props:{
    hotList: Array
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