<template>
    <div>
        <div class="banner" @click="showGallory">
            <img class="banner-img" :src="bannerImg" alt="">
            <div class="banner-info">
                <div class="banner-title">
                    {{sightName}}
                </div>
                <div class="banner-count">
                    <span class="iconfont banner-icon">&#xe6ee;</span>34
                </div>
            </div>
        </div>
        <fade>
            <gallory :imgs="gallaryImgs" @closeGalary="closeGalary" v-show="galloryStatus"></gallory>
        </fade>

    </div>

</template>

<script>
  import Gallory from '../../../assets/common/gallory/Gallory'
  import Fade from '../../../assets/common/fade/Fade'
    export default {
      name:'DetailBanner',
      components:{
        Gallory,
        Fade
      },
      props:['bannerImg','gallaryImgs','sightName'],
      data (){
        return {
          galloryStatus:false
        }
      },
      methods:{
        showGallory(){
            this.galloryStatus=true
        },
        closeGalary(){
          this.galloryStatus=false
        }
      }
    }
</script>

<style lang="stylus" scoped>
    .banner
        position relative
        overflow hidden
        height 0
        padding-bottom 50%
        .banner-img
            width 100%
        .banner-info
            position absolute
            display flex
            bottom 0
            left 0
            right 0
            color #ffffff
            padding 0 .2rem
            height .6rem
            line-height .6rem
            background-image linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,0.8))
            .banner-title
                padding-left .2rem
                font-size .37rem
                flex 1
            .banner-count
                margin-top .1rem
                background rgba(0,0,0,.6)
                padding .1rem .3rem
                border-radius .23rem
                font-size .2rem
                height .2rem
                line-height .2rem
                .banner-icon
                    font-size .2rem
                    margin-right .1rem

</style>