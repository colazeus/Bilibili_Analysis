<template>
  <router-view>
  </router-view>
</template>

<style rel="stylesheet/scss" lang="scss">
:focus {
    outline: 0;
}

.el-drawer__body {
    overflow: auto;
    /* overflow-x: auto; */
}

.el-drawer__container ::-webkit-scrollbar{
    display: none;
}
</style>

<style>
a {
  color: #212121;
  text-decoration:none;
}

.blue{
  color: #00a1d6;
}

.bg-pink-light {
  background: #fdf2f5;
}
.bg-blue-light {
  background: #F9FBFF;
}
</style>

<script>
export default {

}
</script>
