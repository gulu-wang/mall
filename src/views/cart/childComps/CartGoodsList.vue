<template>
  <div class="goods-list">
    <b-scroll class="wrapper" ref="bscroll">
      <cart-list-item v-for="(item,index) in cartGoodsList"
                      :key="index"
                      :itemInfo="item"/>

    </b-scroll>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import BScroll from "../../../components/common/bscroll/Bscroll";
  import CartListItem from "./CartListItem";
  export default {
    name: "CartGoodsList",
    components:{
      BScroll,
      CartListItem
    },
    computed:{
      ...mapGetters(['cartGoodsList'])
    },
    activated() {
      this.$refs.bscroll.refresh()
    }
  }
</script>

<style scoped>
  .goods-list{
  }
  .wrapper {
    height: 100%;
    overflow: hidden;
  }
</style>