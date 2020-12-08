import http from './http'

//获取视频列表
export default {
  getVideoList(data){
    return http.get("/video/getlist",data)
  },
  getVideoInfo(bvid){
    return http.get("/video/getVideoInfo",{"bvid":bvid});
  },
  saveVideo(data){
    return http.post("/video/saveVideo",data);
  },
  login(data){
    return http.post("/user/login",data);
  }
}
