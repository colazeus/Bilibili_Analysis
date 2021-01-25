<template>
<div>
  <el-drawer :title="upData.name + ' - UP主数据分析'" :visible.sync="drawer" :direction="direction">
    <div class="drawer-body">

      <div class="up-detile">
        <div class="up-face">
          <img v-bind:src="upData.pic" class="image">
        </div>
        <div class="up-info">
          <a class="title">{{upData.name}}</a>
          <i class="lv icon-lv6"></i>
          <div class="sign"> 个性签名：{{upData.sign | ellipsis(25)}}</div>
        </div>
      </div>

      <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
        <el-tab-pane label="综合数据" name="totle">
          <div v-if="tabTotle" class="tabs-body">
            <el-row>
              <el-col :span="8">
                <div class="number-block bg-blue-light">
                  <div class="data-name">粉丝数</div>
                  <div class="text-content blue">{{upData.m_follower | formatNum}}</div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="number-block bg-blue-light">
                  <div class="data-name">视频数</div>
                  <div class="text-content blue">37</div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="number-block bg-blue-light">
                  <div class="data-name">播放数</div>
                  <div class="text-content blue">1053.3万</div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="number-block bg-blue-light">
                  <div class="data-name">点赞数</div>
                  <div class="text-content blue">98.7万</div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="number-block bg-blue-light">
                  <div class="data-name">收藏数</div>
                  <div class="text-content blue">16.9万</div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="number-block bg-blue-light">
                  <div class="data-name">评论数</div>
                  <div class="text-content blue">2.5万</div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="number-block bg-blue-light">
                  <div class="data-name">弹幕数</div>
                  <div class="text-content blue">3万</div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="number-block bg-blue-light">
                  <div class="data-name">投币数</div>
                  <div class="text-content blue">31.6万</div>
                </div>
              </el-col>
            </el-row>
            <el-card class="box-card number-card">
              <div slot="header" class="clearfix blue">
                <span>粉丝变化数据</span>
              </div>
              <ve-line :data="fansData" :settings="oneSettings" height="300px" :colors='chartColor'></ve-line>
            </el-card>
            <el-card class="box-card number-card">
              <div slot="header" class="clearfix blue">
                <span>播放数据</span>
              </div>
              <ve-line :data="viewData" :settings="oneSettings" height="300px" :colors='chartColor'></ve-line>
            </el-card>
            <el-card class="box-card number-card">
              <div slot="header" class="clearfix blue">
                <span>互动传播数据</span>
              </div>
              <ve-line :data="otherData" :settings="chartSettings" height="300px" :colors='chartColor'></ve-line>
            </el-card>
          </div>
        </el-tab-pane>
        <el-tab-pane label="作品列表" name="video">
          <div v-if="tabVideo" class="tabs-body">
            <el-row class="order-select" type="flex" justify="end">
              <el-radio-group v-model="order" size="small">
                <el-radio-button label="最新发布"></el-radio-button>
                <el-radio-button label="最多播放"></el-radio-button>
                <el-radio-button label="最多收藏"></el-radio-button>
              </el-radio-group>
            </el-row>
            <el-row type="flex" justify="center">
              <el-col :span="20">
                <video-card v-for="(item, index) in videolist" :key="index" v-bind="item"></video-card>
              </el-col>
            </el-row>
          </div>
        </el-tab-pane>
        <el-tab-pane label="作品分析" name="works">
          <div v-if="tabWorks" class="tabs-body">
            <el-row>
              <el-col :span="8">
                <div class="number-block bg-blue-light">
                  <div class="data-name">平均播放</div>
                  <div class="text-content blue">18.5万</div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="number-block bg-blue-light">
                  <div class="data-name">平均点赞</div>
                  <div class="text-content blue">1.4万</div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="number-block bg-blue-light">
                  <div class="data-name">平均收藏</div>
                  <div class="text-content blue">1428</div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="number-block bg-blue-light">
                  <div class="data-name">平均评论</div>
                  <div class="text-content blue">597</div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="number-block bg-blue-light">
                  <div class="data-name">平均弹幕</div>
                  <div class="text-content blue">415</div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="number-block bg-blue-light">
                  <div class="data-name">平均投币</div>
                  <div class="text-content blue">4196</div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="number-block bg-blue-light">
                  <div class="data-name">平均转发</div>
                  <div class="text-content blue">1780</div>
                </div>
              </el-col>
            </el-row>
            <el-card class="box-card number-card">
              <div slot="header" class="clearfix blue">
                <span>表现趋势</span>
              </div>
              <ve-line :data="videoFollow" :settings="chartSettings" height="300px" :colors='chartColor'></ve-line>
            </el-card>
            <el-card class="box-card number-card">
              <div slot="header" class="clearfix blue">
                <span>热门分类</span>
              </div>
            </el-card>
            <el-card class="box-card number-card">
              <div slot="header" class="clearfix blue">
                <span>播放量分布</span>
              </div>
            </el-card>
            <el-card class="box-card number-card">
              <div slot="header" class="clearfix blue">
                <span>时长分析</span>
              </div>
            </el-card>
            <el-card class="box-card number-card">
              <div slot="header" class="clearfix blue">
                <span>发布时间</span>
              </div>
            </el-card>
          </div>
        </el-tab-pane>
        <el-tab-pane label="粉丝画像" name="fans">
          <div v-if="tabFans" class="tabs-body">
            <el-card class="box-card number-card">
              <div slot="header" class="clearfix blue">
                <span>性别分布</span>
              </div>
            </el-card>
            <el-card class="box-card number-card">
              <div slot="header" class="clearfix blue">
                <span>年龄分布</span>
              </div>
            </el-card>
            <el-card class="box-card number-card">
              <div slot="header" class="clearfix blue">
                <span>活跃时间分布</span>
              </div>
            </el-card>
            <el-card class="box-card number-card">
              <div slot="header" class="clearfix blue">
                <span>热词分布</span>
              </div>
              <wordcloud :data="hotwrod" nameKey="name" valueKey="count" :color="chartColor" spiral="rectangular" :fontSize="wrodcloudSize"></wordcloud>
            </el-card>
          </div>
        </el-tab-pane>
        <el-tab-pane label="舆情分析" name="talk">
          <div v-if="tabTalk" class="tabs-body">
            <el-card class="box-card number-card">
              <div slot="header" class="clearfix blue">
                <span>评论热词</span>
              </div>
            </el-card>
            <el-card class="box-card number-card">
              <div slot="header" class="clearfix blue">
                <span>评论词云</span>
              </div>
            </el-card>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </el-drawer>
</div>
</template>

<style>
.drawer-body {
  padding: 10px 20px 20px 20px;
}

.up-detile {
  margin-bottom: 20px;
}

.up-detile .up-face {
  display: inline-block;
  vertical-align: middle;
}

.up-detile .up-info {
  display: inline-block;
  vertical-align: middle;
  padding-left: 20px;
}

.up-detile .up-info i {
  margin-left: 10px;
}

.number-block {
  margin: 10px;
  padding: 10px;
  border-radius: 4px;
}

.number-block .data-name {
  font-size: 12px;
  color: #757575;
  line-height: 16px;
}

.number-block .text-content {
  line-height: 32px;
  font-weight: 600;
  font-size: 20px;
  letter-spacing: .5px;
}

.number-card .clearfix {
  font-size: 16px;
  font-weight: 700;
}

.order-select {
  margin-top: 20px;
  margin-bottom: 20px;
  padding-right: 40px;
}
</style>

<script>
import wordcloud from 'vue-wordcloud';

export default {
  components:{
    wordcloud
  },
  data() {
    this.oneSettings = {
        labelMap: {
          date: '日期',
          fans: '粉丝数',
          view: '播放数'
        },
        area: true,
        xAxisType: 'time',
        scale: [true]
     },
     this.chartSettings = {
        labelMap: {
          date: '日期',
          reply: '评论数',
          danmaku: '弹幕数',
          share: '分享数'
        },
        xAxisType: 'time',
        scale: [true]
     }
    return {
      order: "最多播放",
      videolist: {},
      title: 'UP主信息',
      activeName: 'totle',
      tabTotle: true,
      tabVideo: false,
      tabWorks: false,
      tabFans: false,
      tabTalk: false,
      upData: {},
      drawer: false,
      direction: 'rtl',
      chartColor: ['#75c9ee', '#9fdda2', '#f6c67f', '#f1a2b5'],
      wrodcloudSize:[30,50],
      fansData: {
        columns: ['date', 'fans'],
        rows: [{
            'date': '2021-01-10',
            'fans': 191336,
          },
          {
            'date': '2021-01-11',
            'fans': 191233,
          },
          {
            'date': '2021-01-12',
            'fans': 191158,
          },
          {
            'date': '2021-01-13',
            'fans': 191070,
          },
          {
            'date': '2021-01-14',
            'fans': 190978,
          },
          {
            'date': '2021-01-15',
            'fans': 190868,
          },
          {
            'date': '2021-01-16',
            'fans': 190729,
          }
        ]
      },
      viewData: {
        columns: ['date', 'view'],
        rows: [{
            'date': '2021-01-10',
            'view': 6036,
          },
          {
            'date': '2021-01-11',
            'view': 5150,
          },
          {
            'date': '2021-01-12',
            'view': 3692,
          },
          {
            'date': '2021-01-13',
            'view': 3490,
          },
          {
            'date': '2021-01-14',
            'view': 3595,
          },
          {
            'date': '2021-01-15',
            'view': 5146,
          },
          {
            'date': '2021-01-16',
            'view': 5646,
          }
        ]
      },
      otherData: {
        columns: ['date', 'reply', 'danmaku', 'share'],
        rows: [{
            'date': '2021-01-10',
            'reply': 2,
            'danmaku': 1,
            'share': 1
          },
          {
            'date': '2021-01-11',
            'reply': 3,
            'danmaku': 0,
            'share': 3
          },
          {
            'date': '2021-01-12',
            'reply': 7,
            'danmaku': 9,
            'share': 3
          },
          {
            'date': '2021-01-13',
            'reply': 8,
            'danmaku': 1,
            'share': 6
          },
          {
            'date': '2021-01-14',
            'reply': 92,
            'danmaku': 5,
            'share': 1
          },
          {
            'date': '2021-01-15',
            'reply': 93,
            'danmaku': 13,
            'share': 3
          },
          {
            'date': '2021-01-16',
            'reply': 35,
            'danmaku': 1,
            'share': 2
          }
        ]
      },
      videoFollow: {
        columns: ['date', 'reply', 'danmaku', 'share'],
        rows: [{
            'date': '2021-01-10',
            'reply': 2,
            'danmaku': 1,
            'share': 1
          },
          {
            'date': '2021-01-11',
            'reply': 3,
            'danmaku': 0,
            'share': 3
          },
          {
            'date': '2021-01-12',
            'reply': 7,
            'danmaku': 9,
            'share': 3
          },
          {
            'date': '2021-01-13',
            'reply': 8,
            'danmaku': 1,
            'share': 6
          },
          {
            'date': '2021-01-14',
            'reply': 92,
            'danmaku': 5,
            'share': 1
          },
          {
            'date': '2021-01-15',
            'reply': 93,
            'danmaku': 13,
            'share': 3
          },
          {
            'date': '2021-01-16',
            'reply': 35,
            'danmaku': 1,
            'share': 2
          }
        ]
      },
      hotwrod: [{
            'name': '音乐舞蹈',
            'count': 6036,
          },
          {
            'name': '单机游戏',
            'count': 5150,
          },
          {
            'name': '鬼畜动画',
            'count': 3692,
          },
          {
            'name': '综艺娱乐',
            'count': 3490,
          },
          {
            'name': '知识科普',
            'count': 3595,
          },
          {
            'name': '美食圈',
            'count': 5146,
          },
          {
            'name': '动物圈',
            'count': 5646,
          }
        ],
    };
  },
  methods: {
    show(mid) {
      this.drawer = true;
      this.$api.getMemberInfo(mid).then(res => {
        this.upData = res['data'];
      }).catch((err) => {
        console.log(err);
      });
      this.$api.getMemberPopVdeo(mid).then(res => {
        this.videolist = res['data'];
      }).catch((err) => {
        console.log(err);
      });
    },
    handleClick(tab) {
      this.tabTotle = false;
      this.tabVideo = false;
      this.tabWorks = false;
      this.tabFans = false;
      this.tabTalk = false;

      switch(tab.name){
        case "totle":
          this.tabTotle = true;
          break;
        case "video":
          this.tabVideo = true;
          break;
        case "works":
          this.tabWorks = true;
          break;
        case "fans":
          this.tabFans = true;
          break;
        case "talk":
          this.tabTalk = true;
          break;
      }
    }
  },
};
</script>
