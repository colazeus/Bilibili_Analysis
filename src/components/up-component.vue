<template>
<el-card @click.native="clickCard(id)" :body-style="{ padding: '0px' }">
  <el-row class="user-item">
    <el-col :span="6">
      <div class="up-face">
        <img v-bind:src="pic" class="image">
      </div>
    </el-col>
    <el-col :span="18">
      <div class="info-wrap">
        <a class="title">{{name}}</a>
        <i class="lv icon-lv6"></i>
        <div class="sign"> {{sign | ellipsis(14)}}</div>
        <div class="time">{{create_time | formatData}} <span @click="clickUp">{{owner_name}}</span></div>
      </div>
    </el-col>
  </el-row>
  <div style="padding:8px 14px 14px 14px">
    <el-row class="param-list">
      <el-col :span="7">
        <icon-svg icon-class="bl-icon-wodeweixuanzhong" />{{m_follower | formatNum}}
      </el-col>
      <el-col :span="7">
        <icon-svg icon-class="bl-icon-zan" />{{m_likes | formatNum}}
      </el-col>
      <el-col :span="10">
        <icon-svg icon-class="bl-icon-bofangqi-bofang" />{{m_view | formatNum}}
      </el-col>
    </el-row>
  </div>
</el-card>
</template>

<style>
.user-item {
  margin: 20px 10px 0px 15px;
}

.up-face img {
  border-radius: 50%;
}

.info-wrap {
  margin-left: 20px;
}

.info-wrap .title {
  display: inline-block;
  line-height: 21px;
  vertical-align: middle;
  font-size: 16px;
  color: #222;
  margin-right: 10px;
  font-weight: 700;
}

.sign {
  font-size: 0.9em;
  margin-top: 10px;
}

.lv {
    background-image: url(//s1.hdslb.com/bfs/static/jinkela/search/asserts/sprite-690be8a6ea.png);
    width: 28px;
    height: 16px;
    display: inline-block;
    line-height: 16px;
    vertical-align: middle;
}
.lv.icon-lv6 {
    background-position: -377px -490px;
}
</style>

<script>
export default {
  name: 'up-card',
  data() {
    return {

    }
  },
  props: {
    id: String,
    name: String,
    pic: String,
    sign: String,
    create_time: String,
    m_follower:String,
    m_likes:String,
    m_view:String,
  },
  methods: {
    clickUp: function() {},
    clickCard: function(mid) {
      this.$emit('cardClicked',mid);
    }
  }
}
</script>
