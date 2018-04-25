<template>
    <div class="icons">
        <swiper :options="swiperOption">
            <swiper-slide v-for="(page,index) in pages" :key="index">
                <div class="icon" v-for="(item,indexs) in page" :key="item.id">
                    <div class="icon-img">
                        <img class="icon-img-content" :src="item.imgUrl" alt="">
                    </div>
                    <p class="icon-content">{{item.desc}}</p>
                </div>
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>

    </div>
</template>

<script>
    export default {
      name:'HomeIcons',
      props:['iconList'],
      data (){
        return {
          swiperOption:{
            autoplay:false
          }
        }
      },
      computed:{
        pages(){
            const pages=[];
            this.iconList.forEach((item,index)=>{
                const page=Math.floor(index/8);
                if(!pages[page]){
                  pages[page]=[]
                }
                pages[page].push(item)
            })
            return pages;
        }
      }
    }
</script>

<style lang="stylus" scoped>
    @import "~styles/varibles.styl"
    @import "~styles/mixin.styl"
    .icons >>> .swiper-container
        height 0
        width 100%
        overflow hidden
        padding-bottom 50%
    .icons
        margin-top .1rem
        width 100%
        height 0
        overflow hidden
        padding-bottom 50%
        .icon
            position relative
            height 0
            width 25%
            float left
            padding-bottom 25%
            overflow hidden
            .icon-img
                position absolute
                top 0
                left 0
                right 0
                bottom .44rem
                padding .1rem
                box-sizing border-box
                .icon-img-content
                    display block
                    height 100%
                    margin 0 auto
            .icon-content
                position absolute
                left 0
                right 0
                bottom 0
                text-align center
                height .44rem
                line-height .44rem
                color $darkTextColor
                ellipses()
</style>