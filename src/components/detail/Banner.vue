<template>
  <div>
    <div class="banner">
      <router-link :to="{
        name:'bannerpoto',
        query: {
          key: this.$route.params.id
        }
      }">
        <img :src="bannerImg" alt="">
      </router-link>
      
      <div class="banner-info">
        <div class="info-title">
          {{ this.sightName }}
        </div>
        <div class="info-video">
          视频
          <span class="iconfont">&#xe64a;</span>
        </div>
      </div>
      <div class="banner-icon">
        <span class="iconfont">&#xe615;</span>
        <span class="icon-number">{{ this.bannerImgs.length }}</span>
      </div>
      
    </div>
    
  </div>
  
</template>
<script>

export default {
  name: 'DetailBanner',
  props: {
    bannerImg: String,
    sightName: String,
    bannerImgs: Array
  }
}
</script>
<style lang="stylus" scoped>
  
  .banner

    position relative;
    overflow: hidden;
    height: 0;
    width: 100%;
    padding-bottom: 55%;
    &:after
      content: " ";
      display: block;
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      min-height: .6rem;
      background-color: transparent;
      background-image: linear-gradient(to bottom,rgba(0,0,0,0),rgba(0,0,0,.8));
    img 
      display: block;
      width: 100%;
    .banner-info
      display:flex;
      justify-content:space-between;
      position: absolute;
      right: .2rem;
      bottom: .36rem;
      left: .2rem;
      line-height: .4rem;
      color: #fff;
      font-size: .36rem;
      z-index: 12
    .banner-icon
      position: absolute;
      left: .2rem;
      bottom: .86rem;
      width: 1.2rem;
      height: .4rem;
      background: rgba(0,0,0,.5);
      border-radius: .2rem;
      font-size: .24rem;
      color: #fff;
      line-height: .4rem;
      text-align: center;
      .icon-number
        margin-left: .1rem;
    
</style>