<template>
    <div class="list">
        <div v-for="(item,index) in list" :key="index">
            <div class="list-item border-bottom">
                <span class="iconfont list-icon" >&#xe6ee;</span>
                {{item.title}}
            </div>
            <div v-if="item.children">
                <detail-list :list="item.children" class="child-detail"></detail-list>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
      name:'DetailList',
      props:['list'],
      data(){
        return {

        }
      }
    }
</script>

<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    .list-item
        height .8rem
        line-height .8rem
        margin-left .2rem
        .list-icon
            color $bgColor

    .child-detail
        padding-left .2rem
</style>