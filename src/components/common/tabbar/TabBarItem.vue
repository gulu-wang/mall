<template>
    <div class="tab-bar-item" @click="handelClick">
<!--        这里需要放两个插槽，一个是icon ，一个是txt-->
        <div v-if="!isActive">
            <slot  name="item-icon"></slot>
        </div>
        <div v-else>
            <slot  name="item-icon-active"></slot>
        </div>
        <div :style="activeStyle">
            <slot name="item-text"></slot>
        </div>
    </div>

</template>

<script>
    export default {
        name: "TabBarItem",
        data() {
            return {
                // isActive: true
            }
        },
        props:{
            path:String,  //接受父组件传过来的值
            activeColor:{
                type:String,
                default:'red'
            }
        },
        methods: {
            handelClick() {
                this.$router.push(this.path)  //动态接受地址
            }
        },
        computed: {
            isActive() {
                return this.$route.path.indexOf(this.path) !== -1
            },
            activeStyle() {
                return this.isActive ? {color:this.activeColor} : {}
            }
        }

    }
</script>

<style scoped>
    .tab-bar-item {
        flex: 1;
        text-align: center;

    }
    .tab-bar-item img {
        width: 24px;
        height: 24px;
        vertical-align: middle;
        margin-top: 3px;
    }
    .tab-bar-item span {
        display: block;
        font-size: 14px;
    }
    .active {
        color: red;
    }
</style>