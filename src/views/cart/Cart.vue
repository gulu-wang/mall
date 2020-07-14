<template>
  <div class="cart">
    <nav-bar class="nav-bar">
      <div slot="center">购物车（{{cartListLen}}）</div>
    </nav-bar>
    <cart-goods-list class="goods-list"/>
    <cart-bottom-bar/>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  //导入navbar模块
  import NavBar from "../../components/common/navbar/NavBar";
  import CartGoodsList from "./childComps/CartGoodsList";
  import CartBottomBar from "./childComps/CartBottomBar";

  export default {
    name: "cat",
    components: {
      NavBar,
      CartGoodsList,
      CartBottomBar
    },
    computed: {
      ...mapGetters(['cartListLen'])
    },
    methods: {}

  }
</script>

<style scoped>
  .cart {
    position: relative;
    height: 100vh;
  }

  .nav-bar {
    background-color: #FF8E97;
    color: #fff;
    font-weight: 600;

  }

  .goods-list {
    position: absolute;
    left: 0;
    right: 0;
    top: 44px;
    bottom: 89px;
  }
</style>