<template>
<div>
  <el-table :data="weekTableData" style="width: 100%">
    <el-table-column type="index">
    </el-table-column>
    <el-table-column prop="title" label="名称" width="350">
    </el-table-column>
    <el-table-column prop="owner.name" label="UP主">
    </el-table-column>
    <el-table-column prop="stat.view" label="播放数" width="100">
    </el-table-column>
    <el-table-column prop="stat.like" label="点赞数" width="100">
    </el-table-column>
    <el-table-column prop="stat.danmaku" label="弹幕数" width="100">
    </el-table-column>
    <el-table-column prop="stat.favorite" label="收藏数" width="100">
    </el-table-column>
    <el-table-column prop="stat.coin" label="投币数" width="100">
    </el-table-column>
    <el-table-column prop="stat.share" label="转发数" width="100">
    </el-table-column>
    <el-table-column prop="ctime" :formatter="timestampToTime" label="发布时间">
    </el-table-column>
  </el-table>
</div>
</template>

<script>
export default {
  data() {
    return {
      weekTableData: []
    }
  },
  methods: {
    timestampToTime(row, column) {
      var date = new Date(row.ctime * 1000);
      var y = date.getFullYear();
      var m = date.getMonth() + 1;
      var d = date.getDate();
      return y + "-" + (m < 10 ? "0" + m : m) + "-" + (d < 10 ? "0" + d : d) + " " + date.toTimeString().substr(0, 8)
    }
  },
  mounted: function() {
    this.$api.getWeekRank().then(res => {
      var listdata = res['data']['list'];
      this.weekTableData = listdata;
    }).catch((err) => {
      console.log(err);
    })
  }
}
</script>
