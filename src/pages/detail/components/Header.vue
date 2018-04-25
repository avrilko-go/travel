<template>
    <div>
        <router-link v-show="headerShow" tag="div" to="/" class="header-abs">
            <div class="iconfont back-icons">&#xe624;</div>
        </router-link>
        <div class="header" v-show="!headerShow" :style="opacitys">
            城市选择
            <router-link to="/">
                <div class="iconfont back-icon">&#xe624;</div>
            </router-link>
        </div>
    </div>

</template>

<script>
    export default {
      name:'DetailHeader',
      data (){
        return {
          headerShow:true,
          opacitys:{
            opacity:1
          }
        }
      },
      activated(){
        document.addEventListener('scroll',this.scrollListen);
      },
      deactivated(){
        document.removeEventListener('scroll',this.scrollListen);
      },
      methods:{
        scrollListen(){
          const top=document.documentElement.scrollTop;
          if(top > 60 && top< 140) {
            this.headerShow=false
            let op= (top-60)/80;
            this.opacitys={
              opacity:op
            }
          }else if(top>=140) {
            this.headerShow=false
          }else {
            this.headerShow=true
          }

        }
      }
    }
</script>

<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    .header-abs
        position absolute
        left .15rem
        top .15rem
        height .8rem
        width .8rem
        line-height .8rem
        border-radius .4rem
        opacity 0.5
        background black
        color #ffffff
        text-align center
        .back-icons
            color #ffffff
            font-weight 800
    .header
        z-index 22
        height $lineHeight
        line-height $lineHeight
        background $bgColor
        text-align center
        position fixed
        top 0
        left 0
        width 100%
        font-size .32rem
        color #ffffff
        .back-icon
            position absolute
            top 0
            left 0
            width .64rem
            text-align center
            font-size .4rem
            color #ffffff
</style>