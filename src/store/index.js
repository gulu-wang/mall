import Vue from 'vue'
import Vuex from 'vuex'
import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";

Vue.use(Vuex)

const state = {
  //购物车里面的商品数组
  cartGoods:[]
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,

})
