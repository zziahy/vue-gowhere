<template>
  <div class="continer">
    <detail-banner :sightName="sightName" :bannerImg="bannerImg" :bannerImgs="gallaryImgs"></detail-banner>
    <detail-header></detail-header>
    <detail-info></detail-info>
    <div class="content">
      <detail-list :list="list"></detail-list>
    </div>
  </div>
</template>
<script>
import DetailBanner from '../components/detail/Banner'
import DetailHeader from '../components/detail/Header'
import DetailInfo from '../components/detail/Info'
import DetailList from '../components/detail/List'
import axios from 'axios'
export default {
  name: 'Detail',
  data() {
    return {
      sightName: '',
      bannerImg: '',
      gallaryImgs: [],
      list: []
    }
  },
  methods: {
    getAjaxDetail(){
      axios.get('/api/detail.json',{
        params: {
          id: this.$route.params.id
        }
      }).then(this.getDataSucc)
    },
    getDataSucc(res) {
      res = res.data
      if(res.ret && res.data){
        const data = res.data
        this.sightName = data.sightName
        this.bannerImg = data.bannerImg
        this.gallaryImgs = data.gallaryImgs
        this.list = data.categoryList
        }
      },
  },
  components: {
    DetailBanner,
    DetailHeader,
    DetailInfo,
    DetailList
  },
  mounted() {
    this.getAjaxDetail();
  }
}
</script>
<style lang="stylus" scoped>
  .continer 
    height: 20rem
    background: #F5F5F5
</style>