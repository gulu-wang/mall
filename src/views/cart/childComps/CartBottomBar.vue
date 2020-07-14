<template>
  <div class="bottom-bar">
    <div class="left ">
      <div class="selectAll">
        <input type="checkbox" :checked="isSelectAll" @click="selectAllChange" >
        <span>全选</span>
      </div>
      <div class="totalPrice">
        合计：{{totalPrices}} 元
      </div>
    </div>
    <div class="right submit-btn" @click="submitOrder">
      <span>提交订单({{checkLen}})</span>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  export default {
    name: "CartBottomBar",
    data() {
      return {
        checkedAll:false
      }
    },
    computed:{
      ...mapGetters(['cartGoodsList']),
      totalPrices() {
        return '￥  ' + this.cartGoodsList.filter(item => {
          return item.checked
        }).reduce((PreValue,item) => {
          return PreValue + item.price * item.count
        }, 0).toFixed(2)
      },
      checkLen() {
        return this.cartGoodsList.filter(item => {
          return item.checked
        }).length
      },
      isSelectAll() {
        if(this.cartGoodsList.length === 0)  return false
        return  this.cartGoodsList.every(item =>  item.checked === true)
      }
    },
    methods:{
      submitOrder() {
        if(!this.isSelectAll){
          this.$toast.show('请选择商品',1500)
        }
      },
      selectAllChange() {
        if(this.isSelectAll){  //全部选中
          this.cartGoodsList.forEach(item=>item.checked = false)
        }else {  //部分选中或者没有选中
          this.cartGoodsList.forEach(item=>item.checked = true)
        }
      }
    }
  }
</script>

<style scoped>
 .bottom-bar {
   position: absolute;
   display: flex;
   bottom: 49px;
   left: 0;
   right: 0;
   width: 100%;
   height: 40px;
 }
  .left {
    flex:3;
    /*background-color: skyblue;*/
    position: relative;
  }
  .right {
    flex: 1;
    font-size: 14px;
    outline: none;
    line-height: 40px;
    text-align: center;
    color: #fff;
    background: linear-gradient(to right, #ff6034, #ee0a24);
  }

  .selectAll {
    position: absolute;
    top: 14px;
    left: 10px;
    font-size: 13px;
  }
 .selectAll input {
   margin-right: 5px;
   line-height: 40px;
 }
  .totalPrice {
    position: absolute;
    top: 14px;
    right: 40px;
    font-size: 13px;
  }
</style>