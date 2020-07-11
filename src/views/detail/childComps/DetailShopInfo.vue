<template>
  <div class="shop-info">
    <div class="shop-name">
      <img class="shop-logo" :src="shopinfo.shoplogo" alt="">
      <span>{{shopinfo.shopname}}</span>
    </div>
    <div class="detail-info">
      <div class="shop-sells">
        <span>{{shopinfo.csells}}</span>
        <span>总销量</span>
      </div>
      <div class="shop-goods">
        <span>{{shopinfo.cgoods}}</span>
        <span>全部宝贝</span>
      </div>
      <div class="shop-desc">
        <div class="desc-item" v-for="item in shopinfo.score">
          <span>{{item.name}}</span>
          <span>{{item.score}}</span>
          <span>{{item.isBetter?'高':'低'}}</span>
        </div>
      </div>
    </div>
    <div class="shop-link">
      <a href="javascript:;">进店看看</a>
    </div>
  </div>

</template>

<script>
  export default {
    name: "DetailShopInfo",
    props:{
      shopinfo:{
        type:Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  .shop-info {
    padding: 20px 10px;
  }
  .shop-name {
    margin: 10px 0;
    font-size: 16px;
  }
  .shop-logo {
    width: 38px;
    height: 38px;
    vertical-align: middle;
    margin-right: 10px;
  }
  .detail-info {
    display: flex;
    height: 70px;
    width: 100%;
    background-color: #F0EEF0;
    font-size: 12px;
    border-radius: 10px;
  }
  .shop-sells {
    flex: 1;
    /*text-align: center;*/
    display: flex;
    flex-direction: column;
  }
  .shop-sells span {
    flex: 1;
    /*justify-content: space-around;*/
    /*align-content: center;*/
    text-align: center;
    line-height: 35px;
  }
  .shop-sells span:first-child {
    font-size: 15px;
  }
  .shop-goods {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
  .shop-goods span {
    flex: 1;
    text-align: center;
    line-height: 35px;
  }
  .shop-goods span:first-child {
    font-size: 15px;
  }
  .shop-desc {
    flex: 2;
    display: flex;
    flex-direction: column;
  }
  .desc-item {
    flex: 1;
    display: flex;
    line-height:23px ;
    text-align: center;
  }
  .desc-item span {

  }
  .desc-item span:first-child {
    flex: 5;
  }
  .desc-item span:nth-child(2) {
    flex:3;
  }
  .desc-item span:nth-child(3) {
    flex:2;
  }
  .shop-link {
    text-align: center;
    margin-top: 5px;
  }
  .shop-link a {
    display: inline-block;
    width: 125px;
    height: 25px;
    font-size: 13px;
    background-color: #F0EEF0;
    border-radius: 10px;
    line-height: 25px;
  }
</style>