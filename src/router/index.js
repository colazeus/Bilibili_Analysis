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
    name: '/',
    component: getComponent('dashboard'),
    meta: {
      auth: true,
      title: '仪表盘'
    }
  },{
    path: '/video_manager',
    name: 'video_manager',
    component: getComponent('video-manager'),
    meta: {
      auth: true,
      title: '视频管理'
    }
  },{
    path: '/up_manager',
    name: 'up_manager',
    component: getComponent('up-manager'),
    meta: {
      auth: true,
      title: 'UP主管理'
    }
  },{
    path: '/rank',
    name: 'rank',
    component: getComponent('rank'),
    meta: {
      auth: true,
      title: '排行榜'
    }
  },{
    path: '/404',
    name: '404',
    component: getComponent('404'),
    meta: {
      auth: false,
      title: '404'
    }
  }
  ]}, {
  path: '/login',
  name: 'login',
  component: getComponent('login'),
  meta: {
    auth: false,
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
  if(to.meta.auth && !localStorage.getItem('token')){
    next({path:'/login',query: {redirect: to.fullPath}});
  } else if (to.matched.length ===0) {  //如果未匹配到路由
    from.name ? next({ path: '/404' }) : next({ path: '/404' });   //如果上级也未匹配到路由则跳转登录页面，如果上级能匹配到则转上级路由
  } else {
    if (to.meta.title) {
      document.title = to.meta.title
    }
    next();    //如果匹配到正确跳转
  }
})

// 路由跳转后hook
router.afterEach(() => {
    NProgress.done()
})

export default router
