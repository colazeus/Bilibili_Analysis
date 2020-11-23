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
  },{
    path: '/404',
    name: '404',
    component: getComponent('404'),
    meta: {
      title: '404'
    }
  }
  ]}, {
  path: '/login',
  name: 'login',
  component: getComponent('login'),
  meta: {
    title: '登录'
  }
},{
  path: '*',
  redirect: '/',
  hidden: true
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
  if (to.matched.length ===0) {  //如果未匹配到路由
    from.name ? next({ path: '/404' }) : next({ path: '/404' });   //如果上级也未匹配到路由则跳转登录页面，如果上级能匹配到则转上级路由
  } else {
    next();    //如果匹配到正确跳转
  }
})

// 路由跳转后hook
router.afterEach(() => {
    NProgress.done()
})

export default router
