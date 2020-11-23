import axios from 'axios'
import helper from './helper'
import QS from 'qs'

axios.defaults.baseURL = process.env.VUE_APP_BASE_URL
axios.defaults.timeout = 10000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

function apiAxios(method, url, params) {
  return axios({
    method: method,
    //拼接参数
    url: method === 'GET'|| method === 'DELETE' ? helper.queryString(url,params) : url,
    data: method === 'POST' || method === 'PUT' ? QS.stringify(params) : null
  })
}

export default {
  get: function (url, params) {
    return apiAxios('GET', url, params)
  },
  post: function (url, params) {
    return apiAxios('POST', url, params)
  },
  put: function (url, params) {
    return apiAxios('PUT', url, params)
  },
  delete: function (url, params) {
    return apiAxios('DELETE', url, params)
  },
}
