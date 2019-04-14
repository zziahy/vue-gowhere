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
  data(){
    return {
      weekendList: [{
        id: '001',
        imgUrl: 'https://imgs.qunarzz.com/sight/source/1505/86/57819390ea997c.jpg_r_640x214_00888590.jpg',
        name: '郑州打卡',
        desc: '日月轮回，孕育出新的美丽'
      },{
        id: '002',
        imgUrl: 'https://imgs.qunarzz.com/sight/source/1811/d2/017059dd59b0ee.jpg_r_640x214_497664a4.jpg',
        name: '城中碧玉万仙山',
        desc: '清幽山乡，人间仙境，世外桃源，雄壮而苍茫的红崖绝壁，妙曼而秀雅的山乡风韵，太行风光的典型代表'
      },{
        id: '003',
        imgUrl: 'https://imgs.qunarzz.com/sight/source/1603/eb/7f570846b929d8.jpg_r_640x214_7caca563.jpg',
        name: '本地人最爱玩',
        desc: '洛阳牡丹，美艳群芳'
      },{
        id: '004',
        imgUrl: 'https://imgs.qunarzz.com/sight/source/1505/ac/4c5317165807.jpg_r_640x214_f7431b62.jpg',
        name: '发现周末好玩',
        desc: '周末，想去哪儿就去哪儿'
      },]
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '../assets/styles/maxins.sty'
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