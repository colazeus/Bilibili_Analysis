<template>
<el-row style="height:100%;" type="flex" align="middle" justify="center">
  <el-col :span="6" class="login">
    <icon-svg icon-class="bl-icon-bilibili" />
    <el-form :model="login" ref="login">
      <el-form-item>
        <el-input v-model="login.phone" placeholder="请输入手机号"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input v-model="login.password" placeholder="请输入密码" show-password></el-input>
      </el-form-item>
      <el-form-item class="login-button">
        <el-button type="primary" @click="userLogin">登 录</el-button>
      </el-form-item>
    </el-form>
  </el-col>
</el-row>
</template>

<script>
export default {
  data() {
    return {
      login: {
        phone: '',
        password: '',
      }
    }
  },
  methods: {
    userLogin() {
      this.$api.login(this.login).then(res =>{
        if(res['code'] == 0){
          this.$store.dispatch("login",res).then(()=>{
            const path = this.$route.query.redirect || '/';
            this.$router.push(path);
          })
        }
        else{
          this.$message.error(res['message']);
        }
      }).catch(error => {
        this.$message.error(error.message || error.response.data.message);
      });
    }
  }
}
</script>

<style>
html {
  height: 100%;
}

body {
  height: 100%;
}

.login-button {
  text-align: right;
}

.login-button button {
  width: 100%;
}

.login {
  text-align: center;
}

.login svg {
  color: #00a1d6;
  font-size: 8em;
}
</style>
