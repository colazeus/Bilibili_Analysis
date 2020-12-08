<template>
<el-row :gutter="30">
  <el-col :span="6">
    <el-card class="box-card">
      <div class="title">本日点击量</div>
      <div class="number">32</div>
    </el-card>
  </el-col>
  <el-col :span="6">
    <el-card class="box-card">
      <div class="title">总计点击量</div>
      <div class="number">33</div>
    </el-card>
  </el-col>
  <el-col :span="6">
    <el-card class="box-card">
      <div class="title">本日收藏量</div>
      <div class="number">32</div>
    </el-card>
  </el-col>
  <el-col :span="6">
    <el-card class="box-card">
      <div class="title">总计收藏量</div>
      <div class="number">32</div>
    </el-card>
  </el-col>
</el-row>
</template>

<script>
export default {
  name: 'dashboard',
  data() {
    return {}
  },
  methods: {
  }
}
</script>

<style>
  .el-card .title{
    color: #333333;
  }

  .el-card .number{
    font-size: 2em;
  }
</style>
