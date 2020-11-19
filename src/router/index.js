import Vue from 'vue'
import VueRouter from 'vue-router'
import NProgress from 'nprogress'

import 'nprogress/nprogress.css'

Vue.use(VueRouter)

const getComponent = (component) => () => import(`@/views/${component}.vue`);

const routes = [{
  path: '/',
  component: getComponent('layout'),
  children: [{
    path: '/',
    name: 'dashboard',
    component: getComponent('dashboard'),
    meta: {
      title: '仪表盘'
    }
  },{
    path: '/video_manager',
    name: 'video_manager',
    component: getComponent('video-manager'),
    meta: {
      title: '视频管理'
    }
  }
  ]}, {
  path: '/login',
  name: 'login',
  component: getComponent('login'),
  meta: {
    title: '登录'
  }
}]

const router = new VueRouter({
  mode: 'history',
  routes: routes
})

// 路由跳转前hook
router.beforeEach((to, from, next) => {
  NProgress.start()
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

// 路由跳转后hook
router.afterEach(() => {
    NProgress.done()
})

export default router
