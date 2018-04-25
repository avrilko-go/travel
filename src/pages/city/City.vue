<template>
    <div>
        <city-header></city-header>
        <city-search :cities="cities"></city-search>
        <city-list :content="content" :cities="cities" :hotCities="hotCities"></city-list>
        <city-alphabet @change="handelClickChange" :cities="cities"></city-alphabet>
    </div>

</template>

<script>
    import CityHeader from './components/Header'
    import CitySearch from './components/Search'
    import CityList from './components/List'
    import CityAlphabet from './components/Alphabet'
    import axios from 'axios'
    export default {
      name:'City',
      data(){
        return {
          hotCities:[],
          cities:{},
          content:""
        }
      },
      components:{
        CityHeader,
        CitySearch,
        CityList,
        CityAlphabet
      },
      methods:{
        getCityInfo(){
          axios.get('/api/city.json').then(this.handelCityInfoSucc)
        },
        handelCityInfoSucc(res){
            if(res.data.ret && res.data.data){
              const data=res.data.data;
              this.hotCities=data.hotCities;
              this.cities=data.cities
            }
        },
        handelClickChange(info){
            this.content=info
        }
      },
      mounted(){
        this.getCityInfo()
      }
    }
</script>

<style lang="stylus" scoped>

</style>