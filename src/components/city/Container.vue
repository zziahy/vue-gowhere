<template>
  <div class="city-container">
    <div class="city-tab">
      <ul>
        <li v-for="(item,index) in list" :key="index" :class="{active:num==index}" @click=getNum(index)>
          {{ item }}
        </li>
      </ul>
    </div>
    <div class="city-list" v-for="(data,index) in tab" :key="index" v-show="index==num" >
      <div class="city-list-title">热门城市</div>
      <ul class="hotcity-list">
        <li v-for="item in data.hotCities" :key="item.id"><a href="#">{{ item.name }}</a></li>
      </ul>
      <div class="city-list-title">字母排序</div>
      <ul class="character-list">
        <li v-for="(item,key) in data.cities"
         :key="key" 
        ><a href="javascript:void(0)" @click="goAnchor('#anchor-'+key)" >{{ key }}</a></li>
      </ul>
      <div v-for="(item,key) in data.cities" :key="key">
        <div class="city-list-title" :id="'anchor-'+key">{{ key }}</div>
        <ul class="hotcity-list">
          <li v-for="items in item" :key="items.id"><a href="#">{{ items.name }}</a></li>
        </ul>
      </div>
    </div>

  </div>
</template>
<script>
export default {
  name: 'CityContainer',
  data(){
  return {
    list:["境内","境外"],
    num: '',
    }
  },
  methods:{
    getNum(index) {
      this.num = index;
    },
     goAnchor(selector) {
     var anchor = this.$el.querySelector(selector)
     document.documentElement.scrollTop = anchor.offsetTop
    }
  },
  props: {
    tab: Array
  }
}
</script>
<style lang="stylus" scoped>
  .city-tab 
    height: .8rem;
    line-height: .4rem;
    background-color: #00bcd4;
    padding: .2rem 1rem;
    color: #fff;
    ul
      border: 1px solid #fff;
      border-radius: .03rem;
      zoom: 1;
      overflow: hidden
      li
        width: 50%;
        float: left;
        text-align: center;
      .active 
        background-color: #fff;
        color: #00bcd4;
  .city-list
    .city-list-title
      padding: .24rem .3rem;
      line-height: .3rem;
      font-size: .24rem;
      background: #F5F5F5;
    .hotcity-list
      overflow: hidden;
      position: relative
      &:before 
        content: '';
        position: absolute;
        height: 100%;
        width: 33.3%;
        left: 33.3%;
        border-left: .02rem solid #ddd;
        border-right: .02rem solid #ddd;
      li 
        width: 33.3%;
        height: .9rem;
        line-height: .9rem;
        font-size: .28rem;
        text-align: center;
        border-bottom: .02rem solid #ddd;
        margin-bottom: -1px;
        float: left;
        a  
          display: block;
          width: 100%;
    .character-list
      padding: .3rem 0;
      overflow hidden;
      li 
        width: 16.66%;
        height: .9rem;
        line-height: .9rem;
        font-size: .28rem;
        text-align: center;
        float: left;
        color: #212121;
</style>