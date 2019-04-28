<template>
  <div>
    <div class="recommend-hd">
      <a><img src="https://imgs.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png" alt=""></a>
      <span>猜你喜欢</span>
    </div>
    <ul class="like-list" v-for="item in recommendList" :key="item.id">
      <li class="list-item">
        <a :href="'#/detail/'+item.id">
          <div class="item-left">
            <img class="imgcon" :src="item.imgUrl" alt="">
            <div class="tag" :style="{backgroundImage:'url('+item.tagUrl+')'}">{{ item.tag }}</div>
          </div>
          <div class="item-right">
            <p class="title">{{ item.title }}</p>
            <p class="level"><strong></strong><span>{{ item.comment }}评论</span></p>
            <div class="item-price">
              <em class="price">￥<span>{{ item.price }}</span></em>起
              <span class="address">{{ item.address }}</span>
            </div>
            
            <p v-if="item.decs" class="decs">{{ item.decs }}</p>
          </div>
        </a>
      </li>
    </ul>
    <a href="#" class="more">查看所有产品</a>
  </div>
</template>
<script>
export default {
  name: 'HomeRecommend',
  props: {
    recommendList: Array
  }
}
</script>
<style lang="stylus" scoped>
  .recommend-hd 
    padding: .24rem 0 .26rem;
    img
      width 0.3rem;
      margin: 0 0.08rem 0 0.2rem;
  .like-list
    .list-item
      overflow: hidden;
      padding: .2rem 0;
      margin-left: .24rem;
      .item-left 
        position relative;
        width: 30%;
        float: left;
        .imgcon
          width: 100%;
          display: block;
        .tag
          position absolute;
          top: 0;
          left: 0;
          width: 1.02rem;
          height: .38rem;
          background-size: 100%;
          color: #fff;
          font-size: .2rem;
          line-height: .38rem;
          text-indent: .04rem;
      .item-right
        width: 70%;
        float left;
        overflow: hidden;
        padding-left: .22rem;
        .title
          margin-top: .26rem;
          height: .44rem;
          color: #212121;
          font-size: .32rem;
          line-height: .44rem;
        .level
          margin-top: .14rem;
          height: .34rem;
          span 
            color: #616161;
            font-size: .24rem;
        .item-price
          position: relative;
          margin-top: .3rem;
          color: #616161;
          font-size: .24rem;
          line-height: .4rem;
          .price 
            color: #ff8300;
            font-style: normal;
            span
              font-size: .4rem;
          .address
              position: absolute;
              right: .24rem;
              bottom: 0;  
        .decs
          margin-top: .4rem;
          margin-right: .24rem;
          background: #fff9f9;
          padding: .04rem .1rem;
          color: #f55;
          font-size: .24rem;
          line-height: .34rem;   
  .more
    display: block;
    padding: .2rem 0;
    color: #00afc7;
    font-size: .28rem;
    line-height: .4rem;
    text-align: center;  
    border-top: .04rem solid #F5F5F5;      
</style>