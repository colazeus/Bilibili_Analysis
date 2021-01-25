<template>
  <el-row :gutter="20">
    <el-col :span="17">
        我关注的
    </el-col>
    <el-col :span="7">
      <el-card shadow="hover">
        <rank></rank>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
import rank from '@/components/rank-component'

export default {
  name: 'dashboard',
  components: {
    rank
  },
  data() {
    return {}
  },
  methods: {
  }
}
</script>

<style>
</style>
