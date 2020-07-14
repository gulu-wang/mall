import {
  ADD_COUNTER,
  ADD_GOODS
} from "./mutation-types";

export default {
  addToCart(context,payload) {
    return new Promise((resolve,reject)=>{
      // console.log(val)
      let ret = context.state.cartGoods.find(item=>{
        return  item.id === payload.id
      })
      if(ret) {
        context.commit(ADD_COUNTER,ret)
        resolve('添加商品成功')
      } else {
        payload.count = 1
        payload.checked = true
        context.commit(ADD_GOODS,payload)
        resolve('添加商品成功')
      }
    })
  }
}