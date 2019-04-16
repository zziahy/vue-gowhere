<template>
  <div class="header">
    <a href="#/" class="icon-back iconfont">&#xe667;</a>
    <h1 class="header-title">城市选择</h1>
  </div>
</template>
<script>
export default {
  name: 'CityHeader'

}
</script>
<style lang="stylus">
@import '../../assets/styles/iconfont.css'
  .header
   
    border-bottom: 0;
    position: relative;
    background: #00bcd4;
  .header-title 
    overflow: hidden;
    margin: 0 1rem;
    line-height: .88rem;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: .32rem;
    text-align: center;
    color: #fff;
    font-weight: 400;
  .icon-back
    text-align: center;
    position: absolute;
    left: 0;
    top: 0;
    width: .8rem;
    height: .88rem;
    line-height: .88rem;
    font-size: .4rem !important; 
    color: #fff;
</style>