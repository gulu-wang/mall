<template>
  <div class="tab-control">
    <div v-for="(item, index) in titles " :key="index" class="tab-control-item"
    :class="{active: currentIndex === index}" @click="tabClick(index,item)">
      <span >{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabControl",
    props :{
      titles:{
        type:Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {
        currentIndex: 0
      }
    },
    methods: {
      tabClick(index,val) {
        this.currentIndex = index
        this.$emit('tabClick',index)

      }
    }
  }
</script>

<style scoped>
  .tab-control {
    display: flex;
    height: 44px;
    line-height: 44px;
    width: 100%;
    text-align: center;

    background-color: #fff;
  }
  .tab-control-item {
    flex: 1;
  }
  .tab-control-item span {
    padding: 5px;
  }
  .active {
    color: hotpink;
  }

  .active span {
    border-bottom: 3px solid hotpink;

  }
</style>