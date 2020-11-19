<template>
<el-container>
  <el-header>
    <el-container>
        <img src="../assets/logo.jpeg" style="height:50px;padding:5px">
        <icon-svg icon-class="bl-icon-bilibili" />
    </el-container>
  </el-header>
  <el-container>
    <el-aside width="200px">
      <el-menu :default-active=this.$route.path :active=this.$route.path router>
        <el-menu-item index="/">
          <i class="el-icon-menu"></i>
          <span slot="title">仪表盘</span>
        </el-menu-item>
        <el-menu-item index="/video_manager">
          <i class="el-icon-document"></i>
          <span slot="title">视频管理</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</el-container>
</template>

<script>
export default {
  name: 'layout',
  data() {
    return {}
  },
  methods: {}
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
}

html,
body {
  width: 100%;
  height: 100%;
}

#app {
  height: 100%;
}

.el-header {
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.08);
  position: relative;
  width: 100%;
  height: 60px;
}

.el-header svg{
  font-size: 4em;
  color: #409EFF;
}

.el-aside {
  height: 90vh;
  margin-top: 10px;
}

.el-aside .el-menu {
  height: 100%;
  border-right:0px;
}

.el-main{
  padding:40px;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
