<template>
     <tab-bar class="tab-bar">
      <tab-bar-item path="/home" active-color="#FF5777">
          <img slot="item-icon" src="~assets/images/tabbar/home.svg" alt="">
          <img slot="item-icon-active" src="~assets/images/tabbar/home_active.svg" alt="">
          <span slot="item-text">首页</span>
      </tab-bar-item>
      <tab-bar-item path="/category" active-color="#FF5777">
          <img slot="item-icon" src="~assets/images/tabbar/category.svg" alt="">
          <img slot="item-icon-active" src="~assets/images/tabbar/category_active.svg" alt="">
          <span slot="item-text">分类</span>
      </tab-bar-item>
      <tab-bar-item path="/cart" active-color="#FF5777">
          <img slot="item-icon" src="~assets/images/tabbar/shopcart.svg" alt="">
          <img slot="item-icon-active" src="~assets/images/tabbar/shopcart_active.svg" alt="">
          <span slot="item-text">购物车</span>
      </tab-bar-item>
      <tab-bar-item path="/profile" active-color="#FF5777">
          <img slot="item-icon" src="~assets/images/tabbar/profile.svg" alt="">
          <img slot="item-icon-active" src="~assets/images/tabbar/profile_active.svg" alt="">
          <span slot="item-text">我的</span>
      </tab-bar-item>
    </tab-bar>
</template>

<script>
import TabBar from "../../common/tabbar/TabBar"
import TabBarItem from "../../common/tabbar/TabBarItem"
    export default {
        components:{
            TabBar,
            TabBarItem
        }
    }
</script>

<style scoped>
  .tab-bar {
    /*z-index: 999;*/
  }
</style>