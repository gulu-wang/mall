import {
  ADD_COUNTER,
  ADD_GOODS
} from "./mutation-types";

export default {
  [ADD_COUNTER](state, payload) {
    payload.count++
  },
  [ADD_GOODS](state, payload) {
    state.cartGoods.push(payload)
  }
};