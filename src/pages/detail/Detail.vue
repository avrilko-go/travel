<template>
    <div>
        <detail-banner :gallaryImgs="gallaryImgs" :sightName="sightName" :bannerImg="bannerImg"></detail-banner>
        <detail-header></detail-header>
        <detail-list :list="list"></detail-list>
    </div>
</template>

<script>
    import DetailBanner from './components/Banner'
    import DetailHeader from './components/Header'
    import DetailList from  './components/List'
    import axios from 'axios'
    export default {
      name:'Detail',
      components:{
        DetailBanner,
        DetailHeader,
        DetailList
      },
      mounted(){
        this.getDetailInfo()
      },
      methods:{
        getDetailInfo(){
          axios.get('/api/detail.json/?id='+this.$route.params.id).then(this.getInfoSucc)
        },
        getInfoSucc(res){
          if(res.data.ret && res.data.data){
            const data=res.data.data;
            console.log(data);
            this.list=data.categoryList;
            this.bannerImg=data.bannerImg;
            this.sightName=data.sightName;
            this.gallaryImgs=data.gallaryImgs;
          }
        }
      },
      data (){
        return {
          list:[],
          bannerImg:'',
          gallaryImgs:[],
          sightName:''

        }
      }
    }
</script>

<style lang="stylus" scoped>

</style>