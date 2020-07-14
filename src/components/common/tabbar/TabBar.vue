<template>
    <div id="tab-bar">
        <slot></slot>
<!--        <router-view></router-view>-->
    </div>
</template>

<script>
    export default {
        name: "TabBar"
    }
</script>

<style scoped>
    #tab-bar {
        position: fixed;
        display: flex;
        height: 49px;
        background-color: #f6f6f6;
        left: 0;
        right: 0;
        bottom:0;
        box-shadow: 0 -2px 2px rgba(100, 100, 100, .1);
    }
</style>