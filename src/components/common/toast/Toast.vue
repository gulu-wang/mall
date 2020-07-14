<template>
  <div class="toast" v-show="isShow">
    <div>{{message}}</div>
  </div>
</template>

<script>
  export default {
    name: "Toast",
    props:{
      message: {
        type:String,
        default() {
          return ''
        }
      },
      isShow:{
        type:Boolean,
        default() {
          return false;
        }
      }
    },
  }
</script>

<style scoped>
  .toast {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 5px 10px;
    background-color: rgba(0,0,0, 0.6);
    color: #ffff;
    border-radius: 8px;
    font-size: 20px;
  }
</style>