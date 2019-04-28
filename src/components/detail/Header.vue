<template>
  <div class="header">
    <a href="#/" class="banner-back">
        <div class="icon-bg"></div>
        <span class="iconfont icon-back">&#xe667;</span>
    </a>
    <div class="header-fixed" v-if="show" :style="opacityStyle">
      <a href="#/" class="iconfont">&#xe667;</a>
      <h1 class="header-title">郑州方特游乐园</h1>
    </div>
  </div>
</template>
<script>
export default {
  name: 'DetailHeader', 
  data() {
    return {
      show: false,
      opacityStyle: {
        opacity: 0
      }
    }
  }, 
  methods: {
    handleScroll() {
      const top = document.documentElement.scrollTop;
      if(top > 60){
        let opacity = top /140;
        opacity = opacity>1 ? 1:opacity;
        this.opacityStyle = {opacity}
        this.show = true;

      }else{
        this.show = false;
      }
    }
  },
  mounted() {
    window.addEventListener('scroll',this.handleScroll)
  },
  unmounted(){
    window.removeEventListener('scroll',this.handleScroll)
  }
}
</script>
<style lang="stylus" scoped>
  @import '../../assets/styles/iconfont.css'
  @import '../../assets/styles/varibles.styl'

    .banner-back
      display inline-block;
      position absolute;
      left: .1rem;
      top: .1rem;
      width: .72rem;
      height: .72rem;
      line-height: .72rem;
      text-align: center;
      
      .icon-bg
        opacity: .5;
        background:#000;
        width: .72rem;
        height: .72rem;
        border-radius: 50%;
      .icon-back
        position: absolute;
        left: .16rem;
        top: 0;
        display: block; 
        color:#fff;
        font-size: .4rem;
    .header-fixed
      position: fixed;
      width: 100%;
      top: 0px;
      left: 0px;
      display: block;
      height: .88rem;
      background: #00bcd4;
      z-index: 91;
      
      h1 
        margin: 0 1rem;
        line-height: .88rem;
        ellipsis();
        font-size: .32rem;
        text-align: center;
        color: #fff;
        font-weight: 400
      a
        position: absolute;
        font-size: .36rem;
        color: #fff;
        text-align: center;
        left: 0;
        top: 0;
        width: .8rem;
        height: .88rem;
        line-height: .88rem;
</style>