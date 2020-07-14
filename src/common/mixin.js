import {debounce} from "./utils";

export const goodsItemlistenerMixin = {
  data() {
    return {
      imgListener:null
    }
  },
  mounted() {
    this.imgListener = ()=>{
      // console.log('111111111')
      refresh()
    }
    let refresh = debounce(this.$refs.bscroll.refresh,200)
    this.$bus.$on('itemImgloaded',this.imgListener)
    // console.log('我是混入');
  }
}
export const backTopMixin = {
  data() {
    return {
      backTopIsShow:false,
    }
  },
  methods:{
    backTopClick() {
      this.$refs.bscroll.scrollTo(0,0)
      // console.log(123)
    },
  }
}

