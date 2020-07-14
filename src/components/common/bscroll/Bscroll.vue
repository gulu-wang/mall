<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  //【注意】 调用这个需要外面有个盒子，盒子要设置宽高，里面内容只能有一个，所以当有很多内容时，需要把内容包装一下
  export default {
    name: "Bscroll",
    data() {
      return {
        scroll:null,
      }
    },
    props:{
      probeType:{
        type:Number,
        default:0
      },
      pullUpLoad: {
        type:Boolean,
        default: false
      }
    },
    mounted() {
      this.scroll = new BScroll(this.$refs.wrapper,{
        //里面的组件是否能够点击
        click:true,
        //是否监测卷曲高度属性，当为0，1时，不检测；当为2的时候，监测手指在滑动时的卷曲高度，
        // 值为3的时候，还能监测惯性滑动时的卷曲高度
        probeType:this.probeType,
        //是否上拉加载更多属性，值为布尔类型，为false不上拉加载更多，为true时上拉加载更多
        pullUpLoad:this.pullUpLoad
      })
      //监听scroll滚动事件
      this.scroll.on('scroll',(position)=>{
        // console.log(position);
        this.$emit('scrollTop',position)
      })
      this.scroll.on('pullingUp',()=>{
        // console.log('上拉加载更多');
        this.$emit('pullUpload')
      })
    },
    methods: {
      scrollTo(x,y,time=500) {
        this.scroll.scrollTo(x,y,time)
      },
      refresh() {  //这个函数是刷新页面的
        this.scroll.refresh()
        // console.log('------')
      },
      finishUpload() {
        this.scroll.finishPullUp()
      },
      getBscrollY() {
        return this.scroll.y
      }
    }
  }
</script>

<style scoped>
  .wrapper {
    overflow: hidden;
  }
</style>