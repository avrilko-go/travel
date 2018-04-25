<template>
    <div class="list" ref="wrapper">
        <div>
            <div class="area">
                <div class="title border-topbottom">当前城市</div>
                <div class="button-list">
                    <div class="button-wrap">
                        <div class="button">
                            {{this.$store.state.city}}
                        </div>
                    </div>
                </div>
            </div>
            <div class="area">
                <div class="title border-topbottom">热门城市</div>
                <div class="button-list">
                    <div class="button-wrap" v-for="(item,index) in hotCities">
                        <div @click="handleChangeCity(item.name)" class="button">{{item.name}}</div>
                    </div>

                </div>
            </div>
            <div :ref="index" class="area" v-for="(item,index) in cities" :key="index">
                <div class="title border-topbottom">{{index}}</div>
                <div class="item-list">
                    <div @click="handleChangeCity(city.name)" class="item border-bottom" v-for="city in item" :key="city.id">{{city.name}}</div>
                </div>
            </div>
        </div>


    </div>
</template>

<script>
    import Bscroll from 'better-scroll'
    export default {
      name:'CityList',
      mounted(){
        this.scroll=new Bscroll(this.$refs.wrapper);
      },
      props:['hotCities','cities','content'],
      methods:{
        handleChangeCity(name){
          this.$store.dispatch('change',name);
          this.$router.push('/')
        }
      },
      watch:{
        content(){
            let element=this.$refs[this.content][0];
            this.scroll.scrollToElement(element);
        }
      }
    }
</script>

<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    .list
        overflow hidden
        position absolute
        top 1.58rem
        left 0
        right 0
        bottom 0
        .title
            height .55rem
            background #eee
            padding-left .2rem
            color #666
            line-height .55rem
            font-size .26rem
        .border-topbottom
            &:before
                border-color  #ccc
            &:after
                border-color  #ccc
        .button-list
            padding .1rem .6rem .1rem .1rem
            overflow hidden
            .button-wrap
                width 33.3%
                float left
                .button
                    border .02rem solid #ccc
                    border-radius .06rem
                    padding .1rem 0
                    text-align center
                    margin .1rem
        .item-list
            line-height .75rem
            padding-left .2rem
            line-height .75rem
        .border-bottom
            &:before
                border-color  #ccc
            &:after
                border-color  #ccc
</style>