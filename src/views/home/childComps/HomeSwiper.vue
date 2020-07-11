<template>
  <div>
    <Swiper>
      <SwiperItem v-for="(item,index) in bannars" :key="index">
        <a :href="item.link"><img :src="item.image" alt="" @load="swiperImgload"></a>
      </SwiperItem>
    </Swiper>
  </div>
</template>

<script>
  import { Swiper, SwiperItem } from  "components/common/swiper";
  export default {
    name: "HomeSwiper",
    data() {
      return{
        isimgloaded:false
      }
    },
    props:{
      bannars: {
        type:Array,
        default() {
          return []
        }
      }
    },
    components:{
      SwiperItem,
      Swiper
    },
    methods:{
      swiperImgload() {
        // console.log('加载完毕');
        if(!this.isimgloaded) {
          this.$emit('swiperImgload')
          this.isimgloaded = true
        }

      }
    }
  }
</script>

<style scoped>

</style>