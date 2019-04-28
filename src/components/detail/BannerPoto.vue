<template>
  <div class="list-img">
    <div class="list-header">
      <a class="iconfont" :href="'#/detail/'+id">&#xe667;</a>
      <h1 class="list-title">景区图片</h1>
    </div>
    <div class="list-main">
      <div class="img-con" v-for="(item,index) in imgs" :key="index" @click.prevent="open">
        <img :src="item" alt="" class="imglist">
      </div>
    </div>
    <common-gallary
        :imgs="imgs"
        v-show="show"
        @handleCancel="close"
      ></common-gallary>
  </div>
</template>
<script>
import CommonGallary from '../../common/gallary/Gallary'
import axios from 'axios'
export default {
  name: 'BannerPoto',
  data() {
    return {
      imgs: ['http://img1.qunarzz.com/sight/p0/1811/d5/d5153b5e337c0644a3.water.jpg_r_800x800_5785f05e.jpg',
      'http://img1.qunarzz.com/sight/p0/1811/ff/ff0ba07998df4d1a3.water.jpg_r_800x800_b508383f.jpg'],
      show: false,
      id: ''
    }
  },
   methods: {
    open(){
      this.show = !this.show;
    },
    close(){
      this.show = !this.show;
    },
    getAjaxImgs(){
      axios.get('/api/detail.json')
    },
   
  },
  components: {
    CommonGallary,
  },
  mounted() {
    this.id=this.$route.query.key
    console.log(this.id)
  },
}
</script>
<style lang="stylus" scoped>

  .list-img
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 100%;
    background: #f5f5f5;
    .list-main
      padding: 1.08rem .2rem .4rem .2rem;
      zoom: 1;
      overflow: hidden;
      .img-con:nth-child(odd)
        padding-right: .05rem;
      .img-con 
        width: 50%;
        float: left;
        margin-bottom: .1rem;
        box-sizing: border-box;
        height: 2.4rem
        img 
          width: 100%;
          height: 100%;
    .list-header
      position: fixed;
      width: 100%;
      height: .88rem;
      background: #fff;
      z-index: 91;
      border-bottom: 1px solid #e0e0e0;
      a 
        position: absolute;
        font-size: .48rem;
        color: #333;
        text-align: center;
        left: 0;
        top: 0;
        width: .8rem;
        height: .88rem;
        line-height: .88rem;
      .list-title
        overflow: hidden;
        margin: 0 1rem;
        line-height: .88rem;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-size: .32rem;
        text-align: center;
        color: #333;
        font-weight: 400
</style>