<template>
    <div class="header">
        城市选择
        <router-link to="/">
            <div class="iconfont back-icon">&#xe624;</div>
        </router-link>

    </div>
</template>

<script>
    export default {
      name:'CityHeader',
    }
</script>

<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    .header
        height $lineHeight
        line-height $lineHeight
        background $bgColor
        text-align center
        position relative
        font-size .32rem
        color #ffffff
        overflow hidden
        .back-icon
            position absolute
            top 0
            left 0
            width .64rem
            text-align center
            font-size .4rem
            color #ffffff

</style>