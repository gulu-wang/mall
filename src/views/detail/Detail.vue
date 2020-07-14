<template>
  <div id="detail">
    <detail-nav class="detail-nav" @titleClick="titleClick" ref="detailNavBar" />
    <bscroll class="content" ref="bscroll" :probe-type="3"  @scrollTop="scrollTop" >
      <detail-swiper :detailSwiperData="detailSwiperImages"/>
      <detail-base-info :goods="goodsinfo"/>
      <detail-shop-info :shopinfo="shopinfo"/>
      <detail-goods-info :detail-info="goodsimages" @imagesLoaded="imagesLoaded" />
      <detail-param-info :param-info="goodsParamsInfo" ref="paramInfo"/>
      <detail-comment-info :comment-info="commentinfo" ref="commentInfo"/>
      <goods-list :goods="goodslist" ref="recommendInfo" />
    </bscroll>
    <detail-bottom-bar class="detail-bar" @addToCart="addToCart"/>
    <back-top  v-show="backTopIsShow" @click.native="backTopClick"/>
    <Toast :message="tanChuangMsg" :is-show="isShow"/>
  </div>
</template>

<script>
  //引入网络请求函数
  import {getDetailData, GoodsInfo, ShopInfo, goodsParamsInfo, getRecommend} from "../../network/detail";

  import DetailNav from "./childComps/DetailNav";
  import DetailSwiper from "./childComps/DetailSwiper";
  import DetailBaseInfo from "./childComps/DetailBaseInfo";
  import DetailShopInfo from "./childComps/DetailShopInfo";
  import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
  import DetailParamInfo from "./childComps/DetailParamInfo";
  import DetailCommentInfo from "./childComps/DetailCommentInfo";
  import DetailBottomBar from "./childComps/DetailBottomBar";


  import Bscroll from "../../components/common/bscroll/Bscroll";
  import GoodsList from "../../components/content/goods/GoodsList";
  import {goodsItemlistenerMixin,backTopMixin} from "../../common/mixin";
  import BackTop from "../../components/content/backtop/BackTop";

  //引入自己的弹窗组件
  import Toast from "../../components/common/toast/Toast";


  export default {
    name: "Detail",
    data() {
      return {
        id:null,
        detailSwiperImages:[],
        goodsinfo: {},
        shopinfo:{},
        goodsimages:{},
        goodsParamsInfo:{},

        commentinfo:{},
        goodslist:[],
        paramTop:0,  //参数栏距离顶部的高度
        commentTop:0,  //评论栏距离顶部的高度
        recommandTop:0,  //推荐栏距离顶部的高度
        tops:[0,1000,2000,3000],  //存放对应标题栏的y轴
        tanChuangMsg:'',
        isShow:false
      }
    },
    created() {
      this.id = this.$route.params.id
      this.getDetailData(this.id)
      this.getGoodslist()
    },
    mounted() {

    },
    updated() {
      this.paramTop = this.$refs.paramInfo.$el.offsetTop
      this.commentTop = this.$refs.commentInfo.$el.offsetTop
      this.recommandTop = this.$refs.recommendInfo.$el.offsetTop
      this.tops = [0,this.paramTop,this.commentTop,this.recommandTop]
      // console.log(this.tops)
    },
    destroyed() {
      // 取消detail组件事件总线的监听
      this.$bus.$off("itemImgloaded", this.imgListener);
    },
    mixins:[goodsItemlistenerMixin,backTopMixin],
    components:{
      DetailNav,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      Bscroll,
      DetailGoodsInfo,
      DetailParamInfo,
      DetailCommentInfo,
      GoodsList,
      DetailBottomBar,
      BackTop,
      Toast

    },
    methods:{
      getDetailData(id) {
        getDetailData(id).then(res=>{
          let data = res.result
          // console.log(data)
          this.detailSwiperImages = data.itemInfo.topImages
          // console.log(this.detailSwiperImages)
          //  获取商品基础信息
          this.goodsinfo = new GoodsInfo(data.columns,data.shopInfo.services,data.itemInfo)
          //获取商店信息
          this.shopinfo = new ShopInfo(data.shopInfo)
          //获取商品图片信息
          this.goodsimages = data.detailInfo
          //获取商品参数信息
          this.goodsParamsInfo = new goodsParamsInfo(data.itemParams)
          // this.goodsParamsInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)
          //获取商品的评论信息
          this.commentinfo = data.rate.list && data.rate.list[0];
          // console.log(this.commentinfo)
        });
      },

      imagesLoaded() {
        this.$refs.bscroll.refresh()
      },
      titleClick(index) {
        // console.log(index)
        //这里把有坐标存储在一个数组中，然后使用索引获取每个值。
        this.$refs.bscroll.scrollTo(0,-this.tops[index],200)
      },
      //  检测scroll上方卷曲的距离
      scrollTop(position) {
        // console.log(position.y)
        // 监听详情页滚动事件,并动态设置navBar的index
        if(-(position.y) < this.paramTop) {
          this.$refs.detailNavBar.currentIndex = 0
        } else if (-(position.y) < this.commentTop) {
          this.$refs.detailNavBar.currentIndex = 1
        } else if (-(position.y) < this.recommandTop) {
          this.$refs.detailNavBar.currentIndex = 2
        } else  {
          this.$refs.detailNavBar.currentIndex = 3
        }
        //监听是否显示backtop图标
        this.backTopIsShow = -(position.y) > 1000 ? true : false
      },

      getGoodslist() {
        getRecommend().then(res=>{
          // console.log(res);
          this.goodslist = res.data.list
          // console.log(this.goodslist)
        })
      },
      addToCart() {
        // console.log('1111111111')
        let product = {}
        product.id = this.id
        product.img = this.detailSwiperImages[0]
        product.title = this.goodsinfo.title
        product.desc = this.goodsinfo.desc
        product.price = this.goodsinfo.realPrice
        this.$store.dispatch('addToCart',product)
        .then(res=>{
          this.tanChuangMsg = res
          this.isShow = true
          setTimeout(()=>{
            this.tanChuangMsg = ''
            this.isShow = false
          },1000)
          // this.$toast.show(res,2000)
        })
      }
    }

  }
</script>

<style scoped>
  #detail {
    position: relative;
    height: 100vh;
    z-index: 10;
    background-color: #fff;
  }
  .detail-nav {
    position: relative;
    z-index: 10;
  }
  .content {
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
  /**/
</style>