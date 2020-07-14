import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//解决300毫秒延时问题
import FastClick from 'fastclick'
//引入图片懒加载
import LazyLoad from 'vue-lazyload'

//导入弹框插件
import toast from 'components/common/toast'
//安装插件
Vue.use(toast)
Vue.use(LazyLoad,{
  loading:require('./assets/images/common/placeholder.png')
})


FastClick.attach(document.body)

Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
