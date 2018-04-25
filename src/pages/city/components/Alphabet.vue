<template>
    <ul class="list">
        <li v-for="index in content" class="item" :key="index" :ref="index" @click="change" @touchstart.prevent="handleTouchStart" @touchmove="handleTouchMove" @touchend="handleTouchEnd" >{{index}}</li>
    </ul>
</template>

<script>
    export default {
      name:"CityAlphabet",
      props:['cities'],
      data (){
        return {
          touchStatus:false,
          startY:0,
          timer:null
        }
      },
      computed:{
        content(){
          const arr=[];
          for (let x in this.cities){
            arr.push(x);
          }
          return arr;
        }
      },
      updated(){
        this.startY=this.$refs['A'][0].offsetTop;
      },
      methods:{
        change(e){
          this.$emit('change',e.target.innerHTML)
        },
        handleTouchStart(){
            this.touchStatus=true
        },
        handleTouchMove(e){
            if(this.touchStatus){
                if(this.timer){
                  clearTimeout(this.timer)
                }
                this.timer=setTimeout(()=>{
                  let touchY=e.touches[0].clientY-79;
                  let index=Math.floor((touchY-this.startY)/20);
                  if(index>=0 && index<this.content.length){
                    this.$emit('change',this.content[index]);
                  }
                },16);


            }
        },
        handleTouchEnd(){
            this.touchStatus=false
        }
      }
    }
</script>

<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    .list
        display flex
        flex-direction column
        justify-content center
        align-items center
        position absolute
        top .1.58rem
        right 0
        width .4rem
        height 100%
        .item
            height .4rem
            color $bgColor
            text-align center
</style>