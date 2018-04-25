<template>
    <div class="wrapper">
        <swiper :options="swiperOption" v-if="showSwiper" >
            <!-- slides -->
            <swiper-slide v-for="(item , index) in swiperList" :key="item.id">
                <img class="swipe-img" :src="item.imgUrl" alt="">
            </swiper-slide>

            <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>

</template>

<script>
    export default {
      name : 'HomeSwiper',
      props:['swiperList'],
      data (){
        return {
          swiperOption:{
            pagination:'.swiper-pagination',
            loop:true
          }
        }
      },
      computed:{
        showSwiper(){
          return this.swiperList.length;
        }
      }
    }
</script>

<style lang="stylus" scoped>
    .wrapper >>> .swiper-pagination-bullet-active
        background #ffffff
    .wrapper
        width 100%
        height 0
        overflow hidden
        padding-bottom 31.25%
        background #ccc
        .swipe-img
            width 100%
</style>