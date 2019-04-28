<template>
  <div class="info">
    <div class="info-card">
      <div class="icon">
        <a href="javascript:void(0)" class="icon-link"></a>
        <div>
          <span class="score">5.0</span>
          <span class="text">分</span>
          <span class="desc">超赞</span>
        </div>
        <div>
          <span class="comment">2321条评论</span>
          <span class="iconfont back">&#xe64a;</span>
        </div>
      </div>
      <div class="item">
        <a href="javascript:void(0)" class="item-link"></a>
        <div>
          <span class="title">景点简介</span>
        </div>
        <div>
          <span class="text">开放时间、贴士</span>
          <span class="iconfont back">&#xe64a;</span>
        </div>
      </div>
    </div>
    <div class="info-address">
      <p class="address-text">
        <span class="iconfont address-icon">&#xe641;</span>
        江苏省苏州市工业园区阳澄湖大道188号
        <span class="iconfont back">&#xe64a;</span>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'DetailInfo'
}
</script>
<style lang="stylus" scoped>
  .info 
    position: relative;
    top: -0.1rem;
    padding: .1rem .2rem 0 .2rem;
    margin-bottom: .1rem;
    background: #fff;
    border-radius: .1rem .1rem 0 0;
    .info-card
      padding-top: .1rem;
      padding-bottom: .2rem;
      display: flex;
      width: 100%;
      .icon
        position: relative;
        flex: 1;
        .icon-link
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
        .score
          font-size: .44rem;
          color: #ff8300;
          line-height: .44rem;
        .text 
          font-size: .28rem;
          color: #ff8300;
          line-height: .48rem;
        .desc 
          font-size: .28rem;
          color: #ff8300;
          line-height: .48rem;
          margin-left: .2rem;
        .comment
          font-size: .24rem;
          color: #9e9e9e;
          line-height: .32rem;
          margin-right: .2rem;
        .back 
          position: absolute;
          top: .3rem;
          right: .2rem;
          color: #9e9e9e;
          font-size: .24rem;
      .item
        position: relative;
        flex: 1;
        &:before 
          content: " ";
          overflow: hidden;
          position: absolute;
          left: 0;
          top: 0;
          width: 1px;
          height: 100%;
          color: #F6F6F6;
        .item-link
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
        .title
          font-size: .28rem;
          color: #212121;
          line-height: .48rem;
          padding-left: .3rem;
        .text 
          color: #9e9e9e;
          font-size: .24rem;
          padding-left: .3rem;
        .back
          position: absolute;
          top: .3rem;
          right: .2rem;
          color: #9e9e9e;
          font-size: .24rem;
    .info-address
      display: block;
      position: relative;
      padding: .2rem 0;
      line-height: .36rem;
      color: #212121;
      .address-text
        padding-right: .56rem;
        position: relative;
        padding-left: .56rem;
        .address-icon
          display: block;
          height: 100%;
          line-height: 100%;
          position: absolute;
          left: 0;
          top: .16rem;
          margin-top: -.16rem;
          margin-right: .2rem;
          color: #9e9e9e;
          font-size: .36rem;
        .back 
          position: absolute;
          right: .24rem;
          top: 50%;
          margin-top: -.14rem;
          color: #9e9e9e;
          font-size: .24rem;
</style>
