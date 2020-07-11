import Vue from 'vue'
import VueRouter from 'vue-router'
import Detail from "../views/detail/Detail";

Vue.use(VueRouter)
//懒加载
const Home = () => import('../views/home/Home')
const Cate = () => import('../views/cate/Cate')
const Cart = () => import('../views/cart/Cart')
const Profile = () => import('../views/profile/Profile')
const Details = () => import('../views/detail/Detail')


  const routes = [
    { path:'',redirect: '/home'},
    { path:'/home',component: Home},
    { path:'/category',component: Cate},
    { path:'/cart',component: Cart},
    { path:'/profile',component: Profile},
    { path:'/detail/:id',component:Details}
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
