<template>
    <div>
        <div class="title">热销推荐</div>
        <ul>
            <router-link tag="li" :to=" '/detail/'+item.id " class="item border-bottom" v-for="(item,index) in recommendList" :key="item.id">
                <img class="item-img" :src="item.imgUrl" alt="">
                <div class="item-info">
                    <div class="item-title">{{item.title}}</div>
                    <div class="item-desc">{{item.desc}}</div>
                    <button class="item-button">查看详情</button>
                </div>
            </router-link>
        </ul>
    </div>
</template>

<script>
    export default {
      name:'HomeRecommend',
      props:['recommendList'],
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
        margin-top .2rem
        line-height .8rem
    .item
        height 1.9rem
        overflow hidden
        display flex
        .item-img
            height 1.7rem
            padding .1rem
            width 1.7rem
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
                font-size .2rem
            .item-button
                color #fff
                background #ff9300
                padding 0 .2rem
                border-radius .06rem
                margin-top .16rem
                line-height .44rem
</style>