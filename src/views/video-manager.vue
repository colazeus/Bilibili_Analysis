<template>
<div>
  <video-list></video-list>
  <vue-fab mainBtnColor="#e53222" size="big" @clickMainBtn="addVideo"></vue-fab>
</div>
</template>

<script>
export default {
  name: 'video_manager',
  data() {
    return {}
  },
  methods: {
    addVideo: function() {
      const h = this.$createElement;
      this.$msgbox({
        title: '添加新视频',
        message: h('p', null, [
          h('span', null, '内容可以是 '),
          h('i', {
            style: 'color: teal'
          }, 'VNode')
        ]),
        showCancelButton: true,
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        beforeClose: (action, instance, done) => {
          done();
        }
      }).then(action => {
        console.log("hello");
      }).catch((err)=>{
        console.log(err);
      });
    }
  }
}
</script>

<style>
.el-card .image {
  width: 100%;
  display: block;
}

.el-card .time {
  color: #969696;
  font-size: 0.9em;
  margin-top: 8px;
}

.el-card .time span {
  color: #409EFF;
  margin-left: 15px;
  cursor: pointer;
}

.param-list {
  border-top: 1px solid #ebeef5;
  margin-top: 10px;
  padding-top: 12px;
}

.param-list span {
  margin-right: 24px;
}

.param-list svg {
  color: #333;
  font-size: 1.2em;
  margin-right: 6px;
}
</style>
