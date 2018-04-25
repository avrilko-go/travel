<template>
    <div class="container" @click="closeGallory">
        <div class="container-contents">
            <swiper :options="swiperOption">
                <swiper-slide v-for="item in imgs">
                    <img class="container-imgone" :src="item" alt="">
                </swiper-slide>
                <div class="swiper-pagination"  slot="pagination"></div>
            </swiper>
        </div>
    </div>
</template>

<script>
    export default {
      name:'Gallory',
      props:['imgs'],
      data () {
        return {
          swiperOption:{
            pagination:'.swiper-pagination',
            paginationType:'fraction',
            observer:true,
            observeParents:true
          }
        }
      },
      methods:{
        closeGallory(){
          this.$emit('closeGalary')
        }
      }
    }
</script>

<style lang="stylus" scoped>
    .container >>> .swiper-container
        overflow inherit
    .container
        display flex
        flex-direction column
        justify-content center
        z-index 99
        position fixed
        top 0
        left 0
        right 0
        bottom 0
        background black
        .container-contents
            height 0
            padding-bottom 100%
            width 100%
            .container-imgone
                width 100%
            .swiper-pagination
                color #ffffff
                bottom -1rem

</style>