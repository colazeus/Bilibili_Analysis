<template>
<el-card :body-style="{ padding: '0px' }">
  <img :src="pic" class="image">
  <div style="padding: 14px;">
    <span>{{title}}</span>
    <div class="time">{{create_time | formatData}} <span @click="clickUp">{{owner_name}}</span></div>
    <div class="view"> {{v_view | formatNum}}播放 · {{v_danmaku | formatNum}}弹幕</div>
    <el-row class="param-list">
      <el-col :span="6">
        <icon-svg icon-class="bl-icon-zan" />{{v_like | formatNum}}
      </el-col>
      <el-col :span="6">
        <icon-svg icon-class="bl-icon-Bbi" />{{v_coin | formatNum}}
      </el-col>
      <el-col :span="6">
        <icon-svg icon-class="bl-icon-shoucang" />{{v_favorite | formatNum}}
      </el-col>
      <el-col :span="6">
        <icon-svg icon-class="bl-icon-fenxiang" />{{v_share | formatNum}}
      </el-col>
    </el-row>
  </div>
</el-card>
</template>

<script>
export default {
  name: 'video-card',
  data() {
    return {

    }
  },
  props: {
    title: String,
    pic: String,
    create_time: String,
    owner_name: String,
    v_like: String,
    v_coin: String,
    v_favorite: String,
    v_share: String,
    v_view: String,
    v_danmaku: String,
  },
  methods: {
    clickUp: function() {}
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
  margin-top: 6px;
  color: #409EFF;
  cursor: pointer;
  padding-left: 8px;
}

.el-card .view {
  color: #969696;
  font-size: 0.8em;
  margin-top: 8px;
}

.param-list {
  border-top: 1px solid #ebeef5;
  margin-top: 10px;
  padding-top: 12px;
}

.param-list .el-col {
  font-size: 0.88em;
}

.param-list svg {
  margin-right: 4px;
}
</style>
