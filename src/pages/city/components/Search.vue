<template>
    <div>
        <div class="search">
            <input v-model="keyword" class="search-input" type="text" placeholder="输入城市名或者拼音">
        </div>
        <div v-show="showContent" class="search-content">
            <ul>
                <li @click="handleChangeCity(item.name)" v-for="(item,index) in cityArr" class="border-bottom item" :key="item.id">{{item.name}}</li>
                <li v-show="searchShow" class="border-bottom item">暂无搜索结果！！！</li>
            </ul>


        </div>
    </div>

</template>

<script>
    export default {
      name:'CitySearch',
      props:['cities'],
      data (){
        return {
          keyword:'',
          timer:null,
          cityArr:[]
        }
      },
      methods:{
        handleChangeCity(name){
          this.$store.dispatch('change',name);
          this.$router.push('/');
        }
      },
      watch:{
        keyword(){
          if(this.keyword){
            const arr=[];
            if(this.timer){
              clearTimeout(this.timer)
            }
            this.timer=setTimeout(()=>{
              for (let x in this.cities){
                this.cities[x].forEach((value,index)=>{
                  if(value.name.indexOf(this.keyword)>=0 || value.spell.indexOf(this.keyword)>=0){
                    arr.push(value)
                  }
                })
              }
              this.cityArr=arr;
            },200);
          }
        }
      },
      computed:{
        showContent(){
          return this.keyword;
        },
        searchShow(){
          return !this.cityArr.length;
        }
      }
    }
</script>

<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    .search
        height .72rem
        background $bgColor
        padding 0 .1rem 0 .1rem
        .search-input
            box-sizing border-box
            width 100%;
            height .62rem
            line-height .62rem
            border-radius .06rem
            color #666
            padding 0 .1rem
            text-align center
    .search-content
        overflow hidden
        position absolute
        top 1.58rem
        background #ffffff
        bottom 0
        left 0
        right 0
        z-index 1
        .item
            padding-left .2rem
            line-height .75rem
            height .75rem
</style>