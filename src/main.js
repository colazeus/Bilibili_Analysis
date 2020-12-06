import Vue from 'vue'
import App from './App.vue'
//import './plugins/element.js'
import router from './router'
import store from './store'
import api from './api/api.js'
//import VCharts from 'v-charts'
import VueFab from 'vue-float-action-button'
import IconSvg from './components/icon-component'
import VideoCard from './components/video-component'
import VideoList from './components/video-list-component'

Vue.config.productionTip = false
Vue.component('icon-svg', IconSvg)
Vue.component('video-card', VideoCard)
Vue.component('video-list', VideoList)
//Vue.use(VCharts)
Vue.use(VueFab)

Vue.prototype.$api = api;

Vue.filter('formatData', function(value) {
  if (!value) return '';
  return value.substring(0, 16);
})

Vue.filter('formatNum', function(value) {
  if (!value) return '';
  var param = {};
  var k = 10000,
    sizes = ['', '万', '亿', '万亿'],
    i;
  if (value < k) {
    param.value = value
    param.unit = ''
  } else {
    i = Math.floor(Math.log(value) / Math.log(k));

    param.value = ((value / Math.pow(k, i))).toFixed(2);
    param.unit = sizes[i];
  }
  return param.value + param.unit;
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
