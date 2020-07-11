import {request} from "./request";

export function getDetailData(id) {
   return request({
    url:'/detail',
    params:{
      iid:id
    }
  })
}
export function getRecommend() {
  return request({
    url:'/recommend'
  })

}
export class GoodsInfo {
  constructor(columns,services,itemInfo) {
    this.title = itemInfo.title
    this.desc = itemInfo.desc
    this.newPrice = itemInfo.price
    this.oldPrice = itemInfo.oldPrice
    this.discount = itemInfo.discountDesc
    this.columns = columns
    this.services = services
    this.realPrice = itemInfo.lowNowPrice
  }
}
export class ShopInfo {
  constructor(shopInfo) {
    this.shopname = shopInfo.name
    this.shoplogo = shopInfo.shopLogo
    this.cfnas = shopInfo.cFnas
    this.cgoods = shopInfo.cGoods
    this.csells = shopInfo.cSells
    this.score = shopInfo.score
  }
}
export class goodsParamsInfo {
  constructor(paramsInfo) {
    // 注: images可能没有值(某些商品有值, 某些没有值)
    this.images = paramsInfo.info.images ? paramsInfo.info.images[0] : '';
    this.infos = paramsInfo.info.set;
    this.sizes = paramsInfo.rule.tables;
  }
}
export class GoodsParam {
  constructor(info, rule) {
    // 注: images可能没有值(某些商品有值, 某些没有值)
    this.image = info.images ? info.images[0] : '';
    this.infos = info.set;
    this.sizes = rule.tables;
  }
}
