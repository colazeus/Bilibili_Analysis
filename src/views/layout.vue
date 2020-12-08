<template>
<el-container>
  <el-header>
    <el-row type="flex" align="middle" class="top-bar">
      <el-col :span="6">
        <img src="../assets/logo.jpeg" style="height:38px;padding:5px">
        <icon-svg icon-class="bl-icon-bilibili" />
      </el-col>
      <el-col :span="6" :offset="12" class="user-menu">
        <el-dropdown trigger="click" @command="userCommand">
          <span><i class="el-icon-more"></i></span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="logout">登出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
    </el-row>
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
        <el-menu-item index="/up_manager">
          <i class="el-icon-s-custom"></i>
          <span slot="title">UP主管理</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-main>
      <router-view v-if="isRouterAlive" @showMessage="showMessage"></router-view>
    </el-main>
  </el-container>
</el-container>
</template>

<script>
export default {
  name: 'layout',
  provide() {
    return {
      reload: this.reload,
      showMessage: this.showMessage
    }
  },
  data() {
    return {
      isRouterAlive: true
    }
  },
  methods: {
    showMessage($msg) {
      const h = this.$createElement;

      this.$notify({
        title: '标题名称',
        message: h('i', {
          style: 'color: teal'
        }, $msg)
      });
    },
    userCommand(command) {
      switch (command) {
        case "logout":
          this.$store.dispatch("logout");
          this.$router.push({path: '/login'});
          break;
      }
    },
    reload() {
      this.isRouterAlive = false
      this.$nextTick(() => (this.isRouterAlive = true))
    }
  }
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
  width: 100%;
  height: 60px;
}

.el-header svg {
  font-size: 3.8em;
  color: #409EFF;
}

.el-aside {
  height: 90vh;
  margin-top: 10px;
}

.el-aside .el-menu {
  height: 100%;
  border-right: 0px;
}

.el-main {
  padding: 40px;
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

.user-menu {
  text-align: right;
}

.user-menu span {
  cursor: pointer;
  color: #979797;
  font-size: 1.5em;
}

.top-bar {}
</style>
