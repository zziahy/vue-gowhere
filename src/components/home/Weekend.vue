<template>
  <div class="weekend">
    <div class="weekend-hd">
      周末去哪儿
    </div>
    <div class="weekend-bd">
      <div v-for="item in weekendList" :key="item.id">
        <div class="product">
          <a href="#" class="item">
            <img :src="item.imgUrl" alt="">
            <div class="product-info">
              <p class="name">{{ item.name }}</p>
              <p class="desc">{{ item.desc }}</p>
            </div>
          </a>
      </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HomeWeekend',
  props:{
    weekendList: Array
  }
}
</script>
<style lang="stylus" scoped>
@import '../../assets/styles/maxins.sty'
  .weekend-hd
    height: .8rem;
    padding-left: .26rem;
    line-height: .8rem;
    color: #212121;
    background: #F5F5F5;
  .weekend-bd
    .product
      border-bottom: .1rem solid #F5F5F5;
      .item
        display block;
        width: 100%;
        img 
          display: block;
          height: 2.8rem; 
        .product-info
          padding: .14rem .2rem .2rem .2rem;
          .name
            padding-right: 1.4rem;
            color: #212121;
            font-size: .28rem;
            line-height: .48rem;
          .desc
            padding-right: 1.4rem;
            color: #616161;
            font-size: .24rem;
            line-height: .42rem;
            ellipsis();
</style>