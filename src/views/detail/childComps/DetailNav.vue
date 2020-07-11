<template>
  <div>
    <nav-bar class="nav-bar">
      <div slot="left" @click="backClick" class="back">
        <img class="back-link" src="~assets/images/common/back.svg" alt="">
      </div>
      <div slot="center" class="title">
        <div v-for="(item, index) in title"
             :class="{active: currentIndex===index }"
             class="title-item"
             :key="index" @click="titleClick(index)" >
          {{item}}
        </div>

      </div>
    </nav-bar>
  </div>
</template>

<script>
  //引入navbar模块
import NavBar from "../../../components/common/navbar/NavBar";
  export default {
    name: "DetailNav",
    data() {
      return {
        title:[ '商品','参数','评论','推荐' ],
        currentIndex:0
      }
    },
    components:{
      NavBar
    },
    methods:{
      backClick() {
        this.$router.back()
      },
      titleClick(index) {
        this.currentIndex = index
      }
    }
  }
</script>

<style scoped>
  .title {
    display: flex;
  }
  .title-item {
    flex: 1;
    font-size: 14px;
  }
  .back-link {
    position: relative;
    top: 6px;
    left: 10px;
  }
  .active {
    color: hotpink;
  }
</style>