import Toast1 from "./Toast1";
const obj = {}
obj.install = function (Vue) {
//1.创建组件的构造器
  const toastContrustor = Vue.extend(Toast1)
//2.new 的方式，通过组价构造器创建一个组件实例
  const toast = new toastContrustor()
//3.将组件对象手动挂在到实例上
  toast.$mount(document.createElement('div'))
  // 4.toast.$el 对应的就是div实例,把它插入到body
  document.body.appendChild(toast.$el)

  Vue.prototype.$toast = toast
}
export default obj