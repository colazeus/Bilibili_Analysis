<template>
<div>
  <video-list></video-list>
  <vue-fab mainBtnColor="#e53222" size="big" @clickMainBtn="dialogVisible = true"></vue-fab>
  <el-dialog title="添加新追踪的视频" :visible.sync="dialogVisible" width="40%" :before-close="handleClose" @closed="closeNewVideoDialog">

    <div class="search-video">
      <el-input v-model="newVideo.url" placeholder="请复制BiliBili的视频地址到这里"></el-input>
      <el-button type="primary" @click="searchVideo">查询</el-button>
    </div>
    <el-divider>视频信息</el-divider>
    <el-row class="video-info">
      <el-col :span="12">
        <div class="img-wrapper">
          <img :src="newVideo.img"/>
        </div>
      </el-col>
      <el-col :span="12">
        <h2>{{newVideo.title}}</h2>
        <sub>作者:{{newVideo.owner}}</sub>
      </el-col>
    </el-row>
    <el-divider>监控设置</el-divider>
    <el-form :model="newVideo" ref="newVideo" label-width="120px" class="video-form">
      <el-form-item label="监控持续时间" prop="expiration">
        <el-radio-group v-model="newVideo.expiration" size="medium">
          <el-radio-button label="不监控"></el-radio-button>
          <el-radio-button label="1天"></el-radio-button>
          <el-radio-button label="3天"></el-radio-button>
          <el-radio-button label="7天"></el-radio-button>
          <el-radio-button label="自动"></el-radio-button>
        </el-radio-group>
      </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button @click="dialogVisible = false">取 消</el-button>
      <el-button type="primary" @click="postNewVideoDialog">确 定</el-button>
    </span>
  </el-dialog>
</div>
</template>

<script>
export default {
  inject:  ['reload','showMessage'],
  data() {
    return {
      dialogVisible: false,
      newVideo: {
        bvid:'',
        img:'',
        url:'',
        title:"视频标题",
        owner:"名称",
        expiration:"自动"
      }
    }
  },
  methods: {
    searchVideo(){
      var url = this.newVideo.url;
      var bvid = url.substr(url.indexOf("BV"),12);
      this.$api.getVideoInfo(bvid).then(res => {
        var data = res['data'];
        this.newVideo.img = data['pic'];
        this.newVideo.title = data['title'];
        this.newVideo.owner = data['owner']['name'];
        this.newVideo.bvid = data['bvid'];
        console.log();

      }).catch((err) => {
        console.log(err)
      })
    },
    closeNewVideoDialog(){
      Object.assign(this.newVideo, this.$options.data().newVideo);
      this.reload();
    },
    postNewVideoDialog(){
      var data = {
        'bvid': this.newVideo.bvid,
        'expiration':this.newVideo.expiration
      };

      this.$api.saveVideo(data).then(res => {
        if(res['code']==0){
          this.showMessage("视频创建成功,vid:"+res['data']['vid']);
        }
        else{
          this.showMessage(res['message']);
        }
      }).catch((err) => {
        console.log(err)
      })

      this.dialogVisible = false;
      setTimeout(function(){
        this.reload();
      }, 500)

    }
  }
}
</script>

<style>

.search-video .el-input {
  margin-right: 10px;
  width: 80%;
  vertical-align: top;
}

.video-form{
  width: 80%;
}

.video-info{
  margin-bottom: 40px;
}

.video-info sub{
  font-size:1.0em;
  color:#969696;
}

.video-info .img-wrapper{
  width:206px;
  height:116px;
  background-color: #e3e3e3;
  margin: 0 auto;
}

.video-info .img-wrapper img{
  width:100%;
}
</style>
