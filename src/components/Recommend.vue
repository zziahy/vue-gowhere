<template>
  <div>
    <div class="recommend-hd">
      <a><img src="https://imgs.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png" alt=""></a>
      <span>猜你喜欢</span>
    </div>
    <ul class="like-list" v-for="item in recommendList" :key="item.id">
      <li class="list-item">
        <a href="#">
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
  data(){
    return {
      recommendList: [{
        id: '001',
        imgUrl: 'https://imgs.qunarzz.com/sight/p0/1710/37/37da055bc2d39755a3.img.jpg_200x200_aec295f8.jpg',
        tagUrl: 'https://img1.qunarzz.com/piao/fusion/1802/20/2ba6d10b17972e02.png',
        tag: '随买随用',
        title: '郑州方特欢乐世界',
        comment: '7420',
        price: '255',
        address: '中牟县',
        decs: '高科技主题乐园，方特成就梦想'
      },{
        id: '002',
        imgUrl: 'https://imgs.qunarzz.com/sight/p0/1709/e9/e9b7ae23f567806ea3.img.jpg_200x200_bf985a3d.jpg',
        tagUrl: 'https://img1.qunarzz.com/piao/fusion/1802/20/2ba6d10b17972e02.png',
        tag: '随买随用',
        title: '少林寺',
        comment: '7027',
        price: '60',
        address: '嵩山',
      },{
        id: '003',
        imgUrl: 'https://imgs.qunarzz.com/sight/p0/1501/7f/7f95b9cb5cc9e227.water.jpg_200x200_2767529b.jpg',
        tagUrl: 'https://img1.qunarzz.com/piao/fusion/1802/20/2ba6d10b17972e02.png',
        tag: '随买随用',
        title: '郑州绿博园',
        comment: '1466',
        price: '17.4',
        address: '仲谋县',
      },{
        id: '004',
        imgUrl: 'https://imgs.qunarzz.com/sight/p0/1811/6c/6cbe2a1a22e6bab2a3.img.jpg_200x200_365f258b.jpg',
        tagUrl: 'https://img1.qunarzz.com/piao/fusion/1802/20/2ba6d10b17972e02.png',
        tag: '随买随用',
        title: '竹林长寿山景区',
        comment: '1139',
        price: '39.3',
        address: '巩义市',
        decs: '回归自然、放飞心情、陶冶情操的佳处'
      },{
        id: '005',
        imgUrl: 'https://imgs.qunarzz.com/sight/p0/1412/12/88ee179e9cdd4902ffecc16e12fa4e1e.water.jpg_200x200_08bf7b1e.jpg',
        tagUrl: 'https://img1.qunarzz.com/piao/fusion/1802/52/b9080e45b69b4f02.png',
        tag: '明日可订',
        title: '世纪欢乐园',
        comment: '10475',
        price: '35',
        address: '管城回族',
      },]
    }
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