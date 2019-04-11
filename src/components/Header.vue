<template>
  <header class="header">
    <div class="header-box">
      <a href="#" class="back">
        <i class="iconfont iconjiantou-copy"></i>
      </a>
      <form>
        <i class="iconfont iconsousuo"></i>
        <input type="text" placeholder="附近热搜">
      </form>
      <a href="#" class="login">
        登录
        <i class="iconfont">&#xe6aa;</i>
      </a>
    </div>
  </header>
</template>
<script>
export default {
  name: 'HomeHeader'
}
</script>
<style lang="stylus" scoped>
@import '../assets/styles/varibles.styl'
.header 
  height: 0.8rem;
  width: 100%;
  background: $bgColor;

  .header-box
    position relative;
    width: 100%;
    height: .8rem;
    margin: 0 auto;
    
    .back 
      position: absolute;
      top: .19rem;
      left: .2rem;
      color: #fff;

      .iconjiantou-copy
        font-size: .46rem;
    
    form 
      width: 100%;
      padding-left: .8rem;
      padding-right: 1.2rem;
      color: #EEF0F2;

      .iconsousuo
        position: absolute;
        top: .15rem;
        left: 1rem;
        font-size: .5rem;

      input   
        width: 100%;
        height: .5rem;
        padding-left: .8rem;
        border-radius: .3rem;
        margin-top: .15rem;
        color: #EEF0F2;
    .login 
      color: #ffffff;
      position: absolute;
      top: .2rem;
      right: .1rem;
  
     

</style>
