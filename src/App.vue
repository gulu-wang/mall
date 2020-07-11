<template>
  <div id="app">
    <main-tab-bar class="tab-bar"></main-tab-bar>
    <keep-alive exclude="Detail">
      <router-view/>
    </keep-alive>

  </div>
</template>
<script>
  import MainTabBar from "./components/content/maintabbar/MainTabBar"
  export default {
    name:'App',
    data() {
      return {}
    },
    components: {
      MainTabBar
    }
  }
</script>

<style>
  @import "assets/css/base.css";
  .tab-bar {
    z-index:9;
  }
</style>
