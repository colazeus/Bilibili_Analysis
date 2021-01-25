import http from './http'

//获取视频列表
export default {
  getVideoList(data){
    return http.get("/video/getlist",data)
  },
  getVideoInfo(bvid){
    return http.get("/video/getVideoInfo",{"bvid":bvid});
  },
  getMemberList(data){
    return http.get("/member/getlist",data)
  },
  saveVideo(data){
    return http.post("/video/saveVideo",data);
  },
  login(data){
    return http.post("/user/login",data);
  },
  getMemberInfo(mid){
    return http.get("/member/getInfo",{"mid":mid});
  },
  getMemberPopVdeo(mid){
    return http.get("/member/getVideoList",{"mid":mid});
  },
  //周榜
  getWeekRank(){
    return http.get("/channel/getSeries");
  }
}
