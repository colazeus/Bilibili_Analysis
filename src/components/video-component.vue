<template>
<el-card :body-style="{ padding: '0px' }">
  <img v-bind:src="videoImage" class="image">
  <div style="padding: 14px;">
    <span>{{videoName}}</span>
    <div class="time">{{crateTime}}<span @click="clickUp">{{upName}}</span></div>
    <div class="param-list">
      <span><icon-svg icon-class="bl-icon-zan" />{{num[0]}}</span>
      <span><icon-svg icon-class="bl-icon-Bbi" />{{num[1]}}</span>
      <span><icon-svg icon-class="bl-icon-shoucang" />{{num[2]}}</span>
      <span><icon-svg icon-class="bl-icon-fenxiang" />{{num[3]}}</span>
    </div>
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
    videoName:String,
    videoImage:String,
    crateTime:String,
    upName:String,
    num:{
      type:Array,
      default() {
        return [0,0,0,0];
      }
    }
  },
  methods: {
    clickUp: function() {
    }
  }
}
</script>
