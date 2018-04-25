<template>
    <div class="header">
        <div class="header-left">
            <div class="iconfont back-icon">&#xe624;</div>
        </div>
        <div class="header-input">
            <span class="iconfont">&#xe632;</span>
            输入城市/景点/游玩主题
        </div>
        
        <router-link to="/city">
            <div class="header-right">
                <span class="iconfont arrow-icon">&#xe64a;</span>
                {{this.$store.state.city}}
            </div>
        </router-link>

    </div>
</template>

<script>
    export default {
      name:'home-header',
      data (){
        return {

        }
      }
    }
</script>

<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    .header
        display flex
        line-height $lineHeight
        background $bgColor
        color #ffffff
        .header-left
            float left
            width .64rem
            .back-icon
                font-size .4rem
                text-align center
        .header-input
            flex 1
            background #ffffff
            border-radius .1rem
            margin-top .12rem
            margin-left .2rem
            padding-left .2rem
            height .64rem
            line-height .64rem
            color #ccc
        .header-right
            color #ffffff
            min-width 1.04rem
            padding 0 .1rem
            float right
            text-align center
            .arrow-icon
                font-size .2rem
                margin-left -.04rem
</style>