<template>
  <div class="bottom-bar">
   <div class="bar-left">
     <div class="left-kefu">
       <i class="icon-kefu"></i>
       <span>客服</span>
     </div>
     <div class="left-shop">
       <i class="icon-shop"></i>
       <span>商店</span>
     </div>
     <div class="left-collect" @click="addCollect">
       <i :class="showCollect"></i>
       <span>收藏</span>
     </div>
   </div>
   <div class="bar-right">
     <div class=" addToCart" @click="addToCart">加入购物车</div>
     <div class=" nowBuy" @click="nowBuy">立即购买</div>
   </div>
  </div>
</template>

<script>
  export default {
    name: "DetailBottomBar",
    data() {
      return {
        isCollected:false
      }
    },
    computed:{
      showCollect() {
        return this.isCollected ? 'icon-collected' : 'icon-collect'
      }
    },
    methods:{
      //添加到购物车
      addToCart() {
        // console.log('点击的加入购物车');
        this.$emit('addToCart')
      },

      nowBuy() {
        this.$toast.show('暂不支持该功能', 1000)
      },
      addCollect() {
        this.isCollected = !this.isCollected
        if(this.isCollected) {
          this.$toast.show('收藏成功',1000)
        }
      }
    }
  }
</script>

<style scoped>
  .bottom-bar {
    position: fixed;
    display: flex;
    height: 49px;
    bottom:0;
    left: 0;
    right: 0;
    background-color: #fff;
    z-index: 10;
  }
  .bar-left {
    flex: 1;
    display: flex;
    font-size: 12px;

  }
  .bar-right {
    flex: 1;
    display:flex;
    line-height: 49px;
    align-items: center;
  }
  div[class^="left"] {
    flex: 1;
    /*background-color: pink;*/
    text-align: center;

  }
  .icon-kefu, .icon-shop, .icon-collect {
    display: inline-block;
    width: 22px;
    height: 22px;
    margin-top: 5px;

  }
  .icon-kefu {
    background: url("~assets/images/detail/detail_bottom.png") no-repeat 0 -52px;
    background-size: 22px;
  }
  .icon-shop {
    background: url("~assets/images/detail/detail_bottom.png") no-repeat 0 -98px;
    background-size: 22px;
  }
  .icon-collect {
    background: url("~assets/images/detail/detail_bottom.png") no-repeat 0 0;
    background-size: 22px;
  }
  .icon-collected {
    display: inline-block;
    width: 22px;
    height: 22px;
    margin-top: 5px;
    background: url("~assets/images/detail/detail_bottom.png") no-repeat 0 -26px;
    background-size: 22px;
  }
  div[class^="left"] span {
    display: block;
  }
  .addToCart, .nowBuy{
    flex: 1;
    height: 30px;
    text-align: center;
    line-height: 30px;

    font-size: 12px;

  }
  .addToCart {
    background: -webkit-linear-gradient(left, #FFCC1E,#FF8917);
    border-bottom-left-radius: 15px ;
    border-top-left-radius: 15px;
  }
  .nowBuy {
    background: -webkit-linear-gradient(left, #FE5B33,#EF0C25);
    border-bottom-right-radius: 15px ;
    border-top-right-radius: 15px;
  }

</style>