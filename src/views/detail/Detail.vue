<template>
  <div id="detail">
   <detail-nav class="detail-nav"></detail-nav>
    <bscroll class="content" ref="bscroll" >
      <detail-swiper :detailSwiperData="detailSwiperImages"/>
      <detail-base-info :goods="goodsinfo"/>
      <detail-shop-info :shopinfo="shopinfo"/>
      <detail-goods-info :detail-info="goodsimages" @imagesLoaded="imagesLoaded" />
      <detail-param-info :param-info="goodsParamsInfo" ref="paramInfo"/>
      <detail-comment-info :comment-info="commentinfo"/>
      <goods-list :goods="goodslist"></goods-list>
    </bscroll>


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


  import Bscroll from "../../components/common/bscroll/Bscroll";
  import GoodsList from "../../components/content/goods/GoodsList";



  export default {
    name: "Detail",
    components:{
      DetailNav,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      Bscroll,
      DetailGoodsInfo,
      DetailParamInfo,
      DetailCommentInfo,
      GoodsList
    },
    data() {
      return {
        id:null,
        detailSwiperImages:[],
        goodsinfo: {},
        shopinfo:{},
        goodsimages:{},
        goodsParamsInfo:{},
        paramInfoTop:0,
        commentinfo:{},
        goodslist:[]
      }
    },

    created() {
      this.id = this.$route.params.id
      getDetailData(this.id).then(res=>{
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
      //  获取商品的评论信息
        this.commentinfo = data.rate.list[0];
        // console.log(this.commentinfo)
      });
      this.getGoodslist()
    },
    methods:{
      imagesLoaded() {
        this.$refs.bscroll.refresh()
        // this.paramInfoTop = this.$refs.paramInfo.$el.offsetTop
        // console.log(this.paramInfoTop)
      },
      getGoodslist() {
        getRecommend().then(res=>{
          console.log(res);
          this.goodslist = res.data.list
          console.log(this.goodslist)
        })
      }

    }

  }
</script>

<style scoped>
  #detail {
    position: relative;
    z-index: 9;
    background-color: #fff;
    height: 100vh;
  }
  .detail-nav {
    position: relative;
    z-index: 9;
  }
  .content {
    position: absolute;
    top: 44px;
    bottom: 0;
    left: 0;
    right: 0;
  }

</style>