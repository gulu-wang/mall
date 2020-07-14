<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物车</div></nav-bar>
    <tab-control v-show="isShowTabControl" ref="tabcontrol1" class="tab-control"
                 :titles="['流行','新款','精选']" @tabClick="tabClick"/>
    <b-scroll class="content" ref="bscroll" :probe-type="3" @scrollTop="scrollTop"
    :pullUpLoad="true" @pullUpload="loadMore">
      <home-swiper :bannars="bannars" class="swipers" @swiperImgload="swiperImgload" />
      <home-recommend-view :recommends="recommends"/>
      <home-future-view/>
      <tab-control ref="tabcontrol" :titles="['流行','新款','精选']" @tabClick="tabClick"/>
      <goods-list :goods="showGoods"/>
    </b-scroll>
    <back-top @click.native="backTopClick" v-show="backTopIsShow"/>

  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";

  import HomeSwiper from "./childComps/HomeSwiper";
  import HomeRecommendView from "./childComps/HomeRecommendView";
  import HomeFutureView from "./childComps/HomeFutureView";

  import TabControl from "components/content/tabcontrol/TabControl";
  import GoodsList from "../../components/content/goods/GoodsList";
  import BScroll from "components/common/bscroll/Bscroll"
  import BackTop from "../../components/content/backtop/BackTop";

  import {getHomeMultiData, getHomeGoodsData} from "network/home";
  import {goodsItemlistenerMixin,backTopMixin} from "../../common/mixin";

  export default {
    name: "home",

    data() {
      return {
        bannars:[],
        recommends:[],
        goods:{
          'pop':{ page:0, list: [] },
          'new':{ page:0, list: [] },
          'sell':{ page:0, list: [] }
        },
        currentTab:'pop',
        tabControlOffsetTop:0,
        isShowTabControl:false,
        saveY:0
      }
    },
    components:{
      NavBar,
      HomeSwiper,
      HomeRecommendView,
      HomeFutureView,
      TabControl,
      GoodsList,
      BScroll,
      BackTop
    },
    created() {
      this.getHomeMultiData()
      //  请求商品数据
      this.getHomeGoodsData('pop')
      this.getHomeGoodsData('new')
      this.getHomeGoodsData('sell')
    },

    mounted() {
      // let refresh = debounce(this.$refs.bscroll.refresh,200)
      // this.$bus.$on('itemImgloaded',()=>{
      //   // console.log('111111111')
      //   refresh()
      // })
    },


    mixins:[goodsItemlistenerMixin,backTopMixin],

    methods: {
      getHomeMultiData() {
        getHomeMultiData().then(res =>{
          // console.log(res)
          this.bannars = res.data.banner.list;
          this.recommends = res.data.recommend.list;
        })
      },
      getHomeGoodsData(type) {
        let page = this.goods[type].page + 1
        getHomeGoodsData(type,page).then(res=>{
          // console.log(res.data.list)
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page += 1
          // console.log(this.goods);
        //  完成上拉加载更多
          this.$refs.bscroll.finishUpload()
        })
      },
      tabClick(index) {
        switch (index) {
          case 0:
            this.currentTab = 'pop'
            break
          case 1:
            this.currentTab = 'new'
            break
          case 2:
            this.currentTab = 'sell'
            break
        }
        this.$refs.tabcontrol.currentIndex = index
        this.$refs.tabcontrol1.currentIndex = index
        // console.log(this.currentTab);
      },
      swiperImgload() {
        this.tabControlOffsetTop = this.$refs.tabcontrol.$el.offsetTop
      },
      //监测scroll上方卷曲的距离
      scrollTop(position) {
        // console.log(position.y)
        this.backTopIsShow = -(position.y) > 1000 ? true : false
        this.isShowTabControl = -(position.y) > this.tabControlOffsetTop ? true : false
      },
      loadMore() {
        // console.log('上拉加载更多');
        this.getHomeGoodsData(this.currentTab)
      },
      //防抖动函数


    },
    computed:{
      showGoods() {
         return this.goods[this.currentTab].list
      }
    },
    // destroyed() {
    //   //这里说明了一离开,home组件就被消亡了，所以每次切换回来不能回到原来的位置
    //   //解决办法是保持home组件不被销毁，然后将离开时的位置保留下来
    //   console.log('离开了');
    // },
    deactivated() {
      // console.log('离开了home');
      this.saveY = this.$refs.bscroll.getBscrollY()
      // console.log(this.saveY)
      this.$bus.$off("itemImgloaded", this.imgListener);
    },
    activated() {  //
      // console.log('进入了home');
      this.$refs.bscroll.refresh()
      this.$refs.bscroll.scrollTo(0,this.saveY,0)
    }
  }
</script>

<style scoped>
  #home {
    /*padding-top: 44px;*/
    position: relative;
    height: 100vh;
    /*background-color: #fff;*/
  }
  .content {
     position: absolute;
     /*overflow: hidden;*/
     top:44px;
     bottom: 49px;
     left: 0;
     right: 0;

   }
  .home-nav {
    position: relative;
    /*position: fixed;*/
    /*top: 0;*/
    /*left: 0;*/
    /*right: 0;*/
    color: #fff;
    font-weight: 600;
    background-color: #FF8E97;
    font-size: 16px;
    z-index: 9;
  }
  .swipers {
    /*margin-top: 44px;*/
  }
  .tab-control {
    position: relative;
    /*top: 44px;*/
    z-index: 9;
  }

</style>