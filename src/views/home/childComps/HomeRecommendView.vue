<template>
  <div class="recommend-view">
    <div v-for="(item,index) in recommends" :key="index" class="recommend-item">
      <a :href="item.link"><img :src="item.image" alt=""></a>
      <div><a href="item.link">{{item.title}}</a></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "HomeRecommendView",
    props:{
      recommends:{
        type:Array,
        default() {
          return [];
        }
      }
    }
  }
</script>

<style scoped>
  .recommend-view {
    display: flex;
    width: 100%;
    text-align: center;
    padding-top: 10px;
    padding-bottom: 20px;
    margin-bottom: 10px;
    background-color: #fff;
  }
  .recommend-item {
    flex: 1;
    font-size: 14px;


  }
  .recommend-item img {
    width: 80px;
    height: 80px;
    margin-bottom: 10px;
  }
</style>