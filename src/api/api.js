import http from './http'

//获取视频列表
export default {
  getVideoList(data){
    return http.get("/video/getlist",data)
  }
}
