import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import router from './router'
import store from './store'
import api from './api/api.js'
import VCharts from 'v-charts'
import VueFab from 'vue-float-action-button'
import IconSvg from './components/icon-component'
import VideoCard from './components/video-component'
import VideoList from './components/video-list-component'

Vue.config.productionTip = false
Vue.component('icon-svg', IconSvg)
Vue.component('video-card',VideoCard)
Vue.component('video-list',VideoList)
Vue.use(VCharts)
Vue.use(VueFab)

  alert(process.env.VUE_APP_ENV);

Vue.prototype.$api = api;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
