<template>
    <div>
        <div class="title">周末去哪</div>
        <ul>
            <li class="item border-bottom" v-for="(item,index) in weekendList" :key="item.id">
                <div class="item-warp">
                    <img class="item-img" :src="item.imgUrl" alt="">
                </div>

                <div class="item-info">
                    <div class="item-title">{{item.title}}</div>
                    <div class="item-desc">{{item.desc}}</div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
  export default {
    name:'HomeWeekend',
    props:['weekendList'],
    data (){
      return {

      }
    }
  }
</script>

<style lang="stylus" scoped>
    @import "~styles/mixin.styl"
    .title
        background #eee
        text-indent .2rem
        line-height .8rem
    .item
        .item-warp
            height 0
            overflow hidden
            padding-bottom 37.09%
            .item-img
                width  100%;
        .item-info
            flex 1;
            padding .1rem
            min-width 0
            .item-title
                line-height .54rem
                font-size .32rem
                ellipses()
            .item-desc
                line-height .4rem
                color #ccc
                ellipses()
                font-size .1em

</style>