<template>
  <div class="city-container">
    <div class="city-tab">
      <ul>
        <li class="active">境内</li>
        <li>境外</li>
      </ul>
    </div>
    <div class="city-list">
      <div class="city-list-title">热门城市</div>
      <ul class="hotcity-list">
        <li>北京</li>
        <li>北京</li>
        <li>北京</li>
        <li>北京</li>
      </ul>
      <div class="city-list-title">字母排序</div>
      <ul class="character-list">
        <li>A</li>
        <li>B</li>
        <li>C</li>
        <li>D</li>
        <li>A</li>
        <li>B</li>
        <li>C</li>
        <li>D</li>
        <li>A</li>
        <li>B</li>
        <li>C</li>
        <li>D</li>
      </ul>
      <div class="city-list-title">A</div>
      <ul class="hotcity-list">
        <li>安顺</li>
        <li>安顺</li>
        <li>安顺</li>
        <li>安顺</li>
      </ul>
    </div>

  </div>
</template>
<script>
export default {
  name: 'CityContainer'

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