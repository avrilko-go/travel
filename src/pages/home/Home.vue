<template>
    <div>
        <home-header></home-header>
        <home-swiper :swiperList="swiperList"></home-swiper>
        <home-icons :iconList="iconList"></home-icons>
        <home-recommend :recommendList="recommendList"></home-recommend>
        <home-weekend :weekendList="weekendList"></home-weekend>
    </div>
</template>

<script>
    import HomeHeader from './components/Header'
    import HomeSwiper from './components/Swiper'
    import HomeIcons from './components/Icons'
    import HomeRecommend from './components/Recommend'
    import HomeWeekend from './components/Weekend'
    import axios from 'axios'
    export default {
      name:'Home',
      data (){
        return {
          lastCity:this.$store.state.city,
          swiperList:[],
          iconList:[],
          recommendList:[],
          weekendList:[]
        }
      },
      components:{
        HomeHeader,
        HomeSwiper,
        HomeIcons,
        HomeRecommend,
        HomeWeekend
      },
      mounted(){
        this.getHomeInfo();
      },
      methods:{
        getHomeInfo(){
          axios.get('/api/index.json?name='+this.$store.state.city).then(this.getHomeInfoSucc);
        },
        getHomeInfoSucc(res){
            if(res.data.ret && res.data.data){
              const data=res.data.data;
              this.swiperList=data.swiperList;
              this.iconList=data.iconList;
              this.recommendList=data.recommendList;
              this.weekendList=data.weekendList;
            }
        }
      },
      activated(){
        if(this.lastCity!==this.$store.state.city && this.lastCity){
          this.lastCity=this.$store.state.city;
          this.getHomeInfo();
        }
      }
    }
</script>

<style>

</style>