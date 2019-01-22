import Vue from 'vue'
import Router from 'vue-router'

// 导入路由页面组件
import Goods from './components/goods/goods'
import Ratings from './components/ratings/ratings'
import Seller from './components/seller/seller'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', redirect: '/goods' },
    { path: '/goods', name: 'goods', component: Goods },
    { path: '/ratings', name: 'ratings', component: Ratings },
    { path: '/seller', name: 'seller', component: Seller },
  ],
  linkActiveClass: 'active'
})
