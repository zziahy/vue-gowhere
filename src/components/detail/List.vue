<template>
  <div>
    <div class="item" v-for="(item,index) in list" :key="index">
      <div :class="item.test==1? 'test':'item-title'" >
        <div class="item-title-hd">
          <span :class="item.test==1? 'test-icon':'item-title-icon'"></span>
          {{ item.title }}
        </div>
        <div class="price" v-if="item.test==1">
          ￥<em class="price-num">199</em>
          <span class="numicon">起</span>
          <span 
          :class="isOk==index && flag?'iconfont iconiconfonticonfonti2copy':'iconfont iconai-arrow-down'"
          @click="handleClick(index)"></span>
          
        </div>
      </div>
      <div class="price-item" v-if="isOk==index && flag">
           <div class="price-item-main">
             <h6 class="title">华谊兄弟电影世界成人票</h6>
             <ul>
               <li class="desc">
                 <img src="https://img1.qunarzz.com/piao/fusion/1804/25/792e9929973a9902.png" alt="">
                 23:00前可订明日
               </li>
               <li class="labelcon">
                 <span>
                   <img src="https://img1.qunarzz.com/piao/fusion/1804/b0/c3cf2897c74ecc02.png" alt="">
                   自营
                 </span>
                 <span>
                   无需换票
                 </span>
                 <span>
                   条件退
                 </span>
               </li>
             </ul>
           </div>
           <div class="price-item-side">
             <a href="#"></a>
             <span class="price-sale">￥<em class="price-num">200.0</em></span>
             <em class="price-btn">预定</em>
           </div>
      </div>
      <div v-if="item.children" class="item-children">
        <detail-list :list="item.children"></detail-list>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'DetailList',
  data() {
    return {
      isOk: -1,
      flag: false
    }
  },
  methods: {
    handleClick(index){
      this.flag = !this.flag;
      if(this.isOk!==index && this.isOk>-1){
        this.flag = true;
      }
      this.isOk = index;
      console.log(this.flag,this.isOk)
    }
  },
  props: {
    list: Array
  }
}
</script>
<style lang="stylus" scoped>
  .item
    margin-bottom: .2rem;
    background: #fff;
    .item-title
      overflow: hidden;
      position: relative;
      z-index: 4;
      margin-bottom: -.02rem;
      padding: 0 .2rem;
      height: .88rem;
      background: #fff;
      color: #333;
      font-size: .32rem;
      line-height: .88rem;
      text-indent: .4rem;
      display: flex;
      .item-title-hd
        flex: 1;
        .item-title-icon
          display: inline-block;
          position: absolute;
          width: .36rem;
          height: .36rem;
          top: .26rem;
          left: .2rem;
          background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat;
          margin-right: .1rem;
          background-size: .4rem 3rem;
          
      
    .test
      margin: 0;
      padding:0;
      text-indent: 0;
      overflow: hidden;
      position: relative;
      z-index: 4;
      height: .88rem;
      background: #fff;
      color: #333;
      font-size: .32rem;
      line-height: .88rem;
      border-bottom: 1px solid #9e9e9e52;
      display: flex;
      padding-left: .2rem;
      .item-title-hd
        flex: 1;
      .price
        align-self: flex-end;
        margin-top: -.28rem;
        color: #ff9800;
        font-size: .24rem;
        .price-num
          font-style:normal;
          margin-left: .04rem;
          font-size: .4rem;
          padding-right .1rem;
        .iconai-arrow-down,.iconiconfonticonfonti2copy
          color: #bbb;
          font-size: .24rem;
          padding:0 .1rem;
        .numicon
          color: #9e9e9e;
    .item-children
     
      background: none;
    .price-item
      background: #f5f5f5;
      box-sizing: border-box;
      padding: .2rem;
      display: flex;
      width: 100%;
      .price-item-main
        flex: 2.92;
        align-items: center;
        .title 
          padding: 0;
          color: #616161;
          font-size: .28rem;
          line-height: .4rem;
          font-weight: 400;
        ul
          overflow: hidden;
          .desc 
            display: inline-block;
            height: .32rem;
            color: #616161;
            font-size: .24rem;
            line-height: .32rem;
            white-space: nowrap;
            img 
              display: inline-block;
              width: .2rem;
              max-height: .32rem;
              margin-right: .04rem;
              vertical-align: 0;
          .labelcon
            span 
              display: inline-block;
              margin-top: .08rem;
              padding: 0 .04rem;
              height: .32rem;
              color: #00afc7;
              font-size: .2rem;
              line-height: .32rem;
              white-space: nowrap;
              img 
                display: inline-block;
                width: .2rem;
                max-height: .32rem;
                margin-right: .04rem;
                vertical-align: 0;
      .price-item-side
        flex:1;
        a 
          box-sizing: border-box;
          display: block;
          width: 100%;
          padding-left: .2rem;
        .price-sale
          color: #ff9800;
          em 
            margin-left: .04rem;
            font-size: .4rem;
            line-height: .4rem;
            font-style:normal
        .price-btn
          display block
          height: .6rem;
          color: #fff;
          font-size: .28rem;
          line-height: .6rem;
          background-image: linear-gradient(130deg,#ffab1e 37%,#ff8c12 100%);
          overflow:hidden;
          text-align:center;
          font-style:normal;
          border-radius: .08rem;
</style>
