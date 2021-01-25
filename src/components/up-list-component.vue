<template>
<el-row :gutter="40">
  <el-col :span="6">
    <up-card @cardClicked="cardClicked($event)" v-for="(item, index) in list1" :key="index" v-bind="item"></up-card>
  </el-col>
  <el-col :span="6">
    <up-card v-for="(item, index) in list2" :key="index" v-bind="item"></up-card>
  </el-col>
  <el-col :span="6">
    <up-card v-for="(item, index) in list3" :key="index" v-bind="item"></up-card>
  </el-col>
  <el-col :span="6">
    <up-card v-for="(item, index) in list4" :key="index" v-bind="item"></up-card>
  </el-col>
</el-row>
</template>

<script>
export default {
  name: 'up-list',
  data() {
    return {
      list1: [],
      list2: [],
      list3: [],
      list4: []
    }
  },
  props: {
  },
  methods: {
    addList: function(listdata) {
      for (var i = 0; i < listdata.length; i++) {
        switch (i % 4) {
          case 0:
            this.list1.push(listdata[i]);
            break;
          case 1:
            this.list2.push(listdata[i]);
            break;
          case 2:
            this.list3.push(listdata[i]);
            break;
          case 3:
            this.list4.push(listdata[i]);
            break;
        }
      }
    },
    cardClicked:function(mid) {
      this.$emit('cardClicked',mid);
    }
  },
  mounted: function() {
    this.$api.getMemberList().then(res => {
      var listdata = res['data'];
      console.log(res);
      this.addList(listdata);
    }).catch((err) => {
      console.log(err);
    })
  }
}
</script>
