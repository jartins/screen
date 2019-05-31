<template>
  <div class="home-bg" style="background: url('/assets/img/monitors/monitors-bg.png') no-repeat centenr;">
    <div class="title" style="background: url('/assets/img/monitors/top.png') no-repeat centenr;">
      <p>融媒体指挥调度中心</p>
    </div>
    <div class="content" style="background: url('/assets/img/monitors/lang.png') no-repeat centenr;">
      <!-- 左侧栏 -->
      <div class="fll content-lf">
        <div class="gather-weChat news-bg">
          <div class="news-title">汇聚微信</div>
          <div class="inner-father">
            <div class="inner-container">
              <p class="text" v-for="(text, index) in gatherList" :key="index">- {{text}}</p>
            </div>
            <div class="inner-container">
              <p class="text" v-for="(text, index) in gatherList" :key="index">- {{text}}</p>
            </div>
          </div>
          <div class="bor-lf"></div>
          <div class="bor-rt"></div>
        </div>
        <div class="gather-weChat news-bg" style="margin-top: 5px;">
          <div class="news-title">舆情分析</div>
          <el-row style="width: 90%; margin: 50px auto;">
            <el-col :span="6" style="margin: 0 auto; text-align: center;">
              <el-progress type="circle" :percentage="sentiment.ad - 0" color="#8e71c7" :width="100"></el-progress>
              <h3 style="color: #fff">广 告</h3>
            </el-col>
            <el-col :span="6" style="margin: 0 auto; text-align: center;">
              <el-progress type="circle" :percentage="sentiment.consult - 0" color="#FE8E5F" :width="100"></el-progress>
              <h3 style="color: #fff">资 讯</h3>
            </el-col>
            <el-col :span="6" style="margin: 0 auto; text-align: center;">
              <el-progress type="circle" :percentage="sentiment.video - 0" color="#7DE3F6" :width="100"></el-progress>
              <h3 style="color: #fff">视 频</h3>
            </el-col>
            <el-col :span="6" style="margin: 0 auto; text-align: center;">
              <el-progress type="circle" :percentage="sentiment.arecreationd - 0" color="#E6AF08" :width="100"></el-progress>
              <h3 style="color: #fff">y 娱 乐</h3>
            </el-col>
          </el-row>
          <div class="bor-lf"></div>
          <div class="bor-rt"></div>
        </div>
        <div class="gather-weChat news-bg" style="margin-top: 5px;">
          <div class="news-title">新闻线索</div>
          <div class="inner-father">
            <div class="inner-container">
              <p class="text" v-for="(item, index) in newsList" :key="index">
                <span style="width: 350px; display:inline-block;">{{item.title}}</span>
                <span style="width: 114px;font-size: 12px; display:inline-block;">{{item.regdate}}</span>
                <span style="font-size: 12px; display:inline-block;">{{item.author}}</span>
              </p>
            </div>
            <div class="inner-container">
              <p class="text" v-for="(item, index) in newsList" :key="index">
                <span style="width: 350px; display:inline-block;">{{item.title}}</span>
                <span style="width: 114px;font-size: 12px; display:inline-block;">{{item.regdate}}</span>
                <span style="font-size: 12px; display:inline-block;">{{item.author}}</span>
              </p>
            </div>
          </div>
          <div class="bor-lf"></div>
          <div class="bor-rt"></div>
        </div>
      </div>
      <!-- 中部 -->
      <div class="fll content-lf" style="width: 560px; margin-left: 10px;">
        <div class="gather-weChat news-bg">
          <div class="news-title" style="margin: 0;">移动直播</div>
          <video width="99%" height="245px" id="video1"  controls="controls" style="margin: 3px; object-fit: fill" :src="liveurl"> 
            <!-- <source src="../assets/img/gbzy.mp4" type="video/mp4"></source> -->
            your browser does not support the video tag 
          </video>
          <div class="bor-lf"></div>
          <div class="bor-rt"></div>
        </div>
        <div class="gather-weChat news-bg" style="margin-top: 5px;">
          <div class="news-title">最新任务</div>
          <div class="inner-father">
            <div class="inner-container">
              <p class="text" v-for="(item, index) in newtask" :key="index">
                <span style="width: 234px; display:inline-block;">· {{item.title}}</span>
                <span style="width: 155px;font-size: 12px; display:inline-block;">发布人：{{item.author}}</span>
                <span style="font-size: 12px; display:inline-block;">{{item.regdate}}</span>
              </p>
            </div>
            <div class="inner-container">
              <p class="text" v-for="(item, index) in newtask" :key="index">
                <span style="width: 234px; display:inline-block;">· {{item.title}}</span>
                <span style="width: 155px;font-size: 12px; display:inline-block;">发布人：{{item.author}}</span>
                <span style="font-size: 12px; display:inline-block;">{{item.regdate}}</span>
              </p>
            </div>
          </div>
          <!-- <p>
            
          </p> -->
          <div class="bor-lf"></div>
          <div class="bor-rt"></div>
        </div>
        <div class="gather-weChat news-bg" style="margin: 5px 0 0 0;">
          <div class="news-title">素材回传</div>
          <el-row v-for="(item, index) in materialreturn" :key="index" style="margin-top: 22px;">
            <el-col :span="5" style="color: #fff; text-align: center;">
              任务资源
            </el-col>
            <el-col :span="13">
              <el-progress :text-inside="true" :stroke-width="18" :percentage="item.baifenbi.substr(0, 2) - 0" color="#01B4FF" class="resource"></el-progress>
            </el-col>
            <el-col :span="6" style="color: #02AFFF; text-align: center;">
              {{item.task}} 万个
            </el-col>
          </el-row>
          <div class="bor-lf"></div>
          <div class="bor-rt"></div>
        </div>
      </div>
      <!-- 右侧栏 -->
      <div class="fll content-lf" style="width: 566px; margin-left: 10px;">
        <div class="gather-weChat news-bg">
          <div class="news-title" style="margin: 0;">最新选题</div>
          <div id="danm"></div>
          <!-- <p>
            <span style="width: 234px; display:inline-block;">· 航班延误乘客要工作人..</span>
            <span style="width: 155px;font-size: 12px; display:inline-block;">发布人：张麻子</span>
            <span style="font-size: 12px; display:inline-block;">2019-02-31-12:33</span>
          </p> -->
          <div class="bor-lf"></div>
          <div class="bor-rt"></div>
        </div>
        <div class="gather-weChat news-bg" style="margin-top: 5px;">
          <div class="news-title">资源分布</div>
          <!-- 左边 -->
          <div class="fll" style="width: 50%;">
            <div id="myChart" :style="{width: '150px', height: '150px', margin: '10px auto'}"></div>
            <p style="font-size: 12px; margin-left: 60px; color: #00DEFF;">
              <span style="width: 12px; height: 12px; background: #0E6DE9; display: inline-block;"></span>
              <span style="margin: 0 40px 0 10px; color: #Fff;">互联网</span>
              <span>{{resources.news}}%</span>
            </p>
            <p style="font-size: 12px; margin-left: 60px; color: #00DEFF;">
              <span style="width: 12px; height: 12px; background: #AC4ED3; display: inline-block;"></span>
              <span style="margin: 0 40px 0 10px; color: #Fff;">娱乐八卦</span>
              <span>{{resources.sale}}%</span>
            </p>
          </div>
          <!-- 右边 -->
          <div class="flr" style="width: 50%;">
            <div id="myChart2" :style="{width: '160px', height: '150px', margin: '10px auto'}"></div>
            <p style="font-size: 12px; margin-left: 60px; color: #00DEFF;">
              <span style="width: 12px; height: 12px; background: #0E6DE9; display: inline-block;"></span>
              <span style="margin: 0 40px 0 10px; color: #Fff;">互联网</span>
              <span>{{resources.entertainment}}%</span>
            </p>
            <p style="font-size: 12px; margin-left: 60px; color: #00DEFF;">
              <span style="width: 12px; height: 12px; background: #AC4ED3; display: inline-block;"></span>
              <span style="margin: 0 40px 0 10px; color: #Fff;">娱乐八卦</span>
              <span>{{resources.design}}%</span>
            </p>
          </div>
          <!-- +++++++++++++++++++++++++ -->
          <div class="bor-lf"></div>
          <div class="bor-rt"></div>
        </div>
        <div class="gather-weChat news-bg" style="margin-top: 5px;">
          <div class="news-title">资源中心</div>
          <el-carousel :interval="2000" type="card" height="200px" style="width: 98%; margin: 0 auto;">
            <el-carousel-item v-for="(item, index) in imgList" :key="index">
              <img :src="item.image" alt="" style="width: 100%;">
              <div class="img-content">
                <h3>科技引领未来的同时,你感受到了科技...</h3>
                <p style="padding-left: 0;">发布人：雪梨</p>
                <p style="float: right;">019-03-24-12:23</p>
              </div>
            </el-carousel-item>
          </el-carousel>
          <div class="bor-lf"></div>
          <div class="bor-rt"></div>
        </div>
      </div>
      <!-- 结束 -->
    </div>
  </div>
</template>

<script>
import AwesomeDanmaku from 'awesome-danmaku';

export default {
  props: {},
  data() {
    return {
      gatherList: [],
      newsList: [],
      sentiment: {},
      newtask: [],
      imgList: [],
      liveurl: '',
      materialreturn: {},
      resources: {},
      danmList: []
    };
  },
  filters: {},
  computed: {},
  created() {
    this.getData();
  },
  mounted() {
    this.drawLine();
  },
  watch: {},
  methods: {
    getData() {
      let parmas = {
        secret: '598f92d7e2212654288254facf4cdf51'
      }
      // 汇聚微信
      this.get('/index.php/api/screenv1.converge/wxdata', parmas).then(res => {
        if(res.data.code == 200) {
          this.gatherList = res.data.list;
        } else {
          this.$message.error(res.data.message);
        }
      }).catch(e => {
        this.$message.error(e.message);
      });

      // 新闻线索
      this.get('/index.php/api/screenv1.converge/newsdata', parmas).then(res => {
        if(res.data.code == 200) {
          this.newsList = res.data.list;
        } else {
          this.$message.error(res.data.message);
        }
      }).catch(e => {
        this.$message.error(e.message);
      });

      // 舆情分析
      this.get('/index.php/api/screenv1.converge/sentiment', parmas).then(res => {
        if(res.data.code == 200) {
          this.sentiment = res.data.list;
        } else {
          this.$message.error(res.data.message);
        }
      }).catch(e => {
        this.$message.error(e.message);
      });

      // 最新选题
      this.get('/index.php/api/screenv1.converge/selectopic', parmas).then(res => {
        if(res.data.code == 200) {
          this.danmList = res.data.list.map(v => {
            return {
              value: v.title + v.regdate + '发布人：' + v.author,
              color: '#26D4FF',
              fontSize: 14
            }
          });
        } else {
          this.$message.error(res.data.message);
        }
      }).catch(e => {
        this.$message.error(e.message);
      });

      // 最新任务
      this.get('/index.php/api/screenv1.converge/newtask', parmas).then(res => {
        if(res.data.code == 200) {
          this.newtask = res.data.list;
        } else {
          this.$message.error(res.data.message);
        }
      }).catch(e => {
        this.$message.error(e.message);
      });

      // 移动直播
      this.get('/index.php/api/screenv1.converge/livebroadcast', parmas).then(res => {
        if(res.data.code == 200) {
          this.liveurl = res.data.list.liveurl;
        } else {
          this.$message.error(res.data.message);
        }
      }).catch(e => {
        this.$message.error(e.message);
      });
      
      // 素材回传
      this.get('/index.php/api/screenv1.converge/materialreturn', parmas).then(res => {
        if(res.data.code == 200) {
          this.materialreturn = res.data.list;
        } else {
          this.$message.error(res.data.message);
        }
      }).catch(e => {
        this.$message.error(e.message);
      });

      // 资源中心
      this.get('/index.php/api/screenv1.converge/resourcecenter', parmas).then(res => {
        if(res.data.code == 200) {
          this.imgList = res.data.list;
        } else {
          this.$message.error(res.data.message);
        }
      }).catch(e => {
        this.$message.error(e.message);
      });

    },
    drawLine() {
      var myVideo=document.getElementById("video1");
      myVideo.play(); 

      this.danmList = [];
      const player = AwesomeDanmaku.getPlayer('#danm');
      console.log(player)

      player.play()
      player.insert(this.danmList);

      setInterval(() => {
        player.play()
        player.insert(this.danmList);
      }, 4000);
      // AwesomeDanmaku.getPlayer({
      //   el: '#danm',
      //   fontSize: 14
      // });
      
      let parmas = {
        secret: '598f92d7e2212654288254facf4cdf51'
      }
      // 资源分布
      this.get('/index.php/api/screenv1.converge/resources', parmas).then(res => {
        if(res.data.code == 200) {
          this.resources = res.data.list;

          // 基于准备好的dom，初始化echarts实例
          let myChart = this.$echarts.init(document.getElementById("myChart"));
          // 绘制图表
          myChart.setOption({
            angleAxis: {},
            radiusAxis: {
              type: "category",
              data: ["", "", "", ""],
              z: 10,
              axisLine: {
                lineStyle: {
                  color: '#fff',
                  shadowColor: '#fff'
                }
              }
            },
            color: ["#AC4ED3", "#E6AF08", "#00AF6D", "#0E6DE9", "#2C77DE"],
            polar: {},
            series: [
              {
                type: "bar",
                data: [res.data.list.news, res.data.list.sale, res.data.list.entertainment, res.data.list.design],
                coordinateSystem: "polar",
                textShadowColor: '#fff',
                emphasis: {
                  color: '#fff',
                  borderColor : '#fff'
                }
              }
            ]
          });

          // 基于准备好的dom，初始化echarts实例
          let myChart2 = this.$echarts.init(document.getElementById("myChart2"));
          // 绘制图表
          myChart2.setOption({
            series: [
              {
                type: "pie",
                radius: [10, 60],
                center: ["50%", "50%"],
                roseType: "radius",
                color: ["#0E6DE9", "#E6AF08", "#00AF6D", "#AC4ED3"],
                label: {
                  normal: {
                    show: false
                  }
                },
                data: [
                  { value: res.data.list.news},
                  { value: res.data.list.sale},
                  { value: res.data.list.entertainment},
                  { value: res.data.list.design}
                ]
              }
            ]
          });
        } else {
          this.$message.error(res.data.message);
        }
      }).catch(e => {
        this.$message.error(e.message);
      });

    }
  },
  components: {}
};
</script>

<style>
  .el-progress__text{
    color: #fff !important;
  }

  .resource .el-progress-bar__outer{
    background-color: #010170 !important;
  }

  .el-progress-bar__outer {
    background-color: #3A3F79;
  }
</style>


<style scoped lang="stylus">
.home-bg
  width 100%
  height 1080px
  background url('../assets/img/monitors/monitors-bg.png') no-repeat center
  background-size 100% 100%
.title
  width 100%
  height 100px
  background url('../assets/img/monitors/top.png') no-repeat center
  background-size 100% 100%
  p
    background linear-gradient(to right, #B4F3FE, #D6E1FF)
    -webkit-background-clip text
    color transparent
    font-size 25px
    text-align center
    line-height 50px

.news-bg
  box-shadow #3755DA 0px 0px 16px inset
  position relative
  .bor-lf
    width 25px
    height 25px
    border-left 1px solid #00A2FF 
    border-bottom 1px solid #00A2FF
    position absolute
    bottom 1px
    left 1px
  .bor-rt
    width 25px
    height 25px
    border-right 1px solid #00A2FF 
    border-bottom 1px solid #00A2FF
    position absolute
    bottom 1px
    right 1px

.news-title
  width 100%
  height 36px
  font-size 18px
  color #20FDFA
  background linear-gradient(to right, rgba(8, 37, 183, 0.6), rgba(1, 180, 255, 0))
  line-height 36px
  padding-left 20px
  margin-bottom 10px

.content
  width 100%
  height 980px
  background url('../assets/img/monitors/lang.png') no-repeat center
  background-size 100% 100%

.content-lf
  width 603px
  margin 64px 0 0 60px
  .gather-weChat
    width 100%
    height 288px
    p
      font-size 14px
      color #26D4FF
      line-height 30px
      padding-left 20px

#danm
  width 100%
  height 85%
  color #26D4FF
.inner-father
  width 100%
  height 240px
  overflow hidden

.inner-container {
  animation: myMove 5s linear infinite;
  animation-fill-mode: forwards;
}
  /*文字无缝滚动*/
@keyframes myMove {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-150px);
  }
}

.el-carousel__item img {
  width: 100%;
  height: 100%;
  position: relative;
  left: 0;
  top: 0;
}
.img-content {
  width 100%;
  height: 56px;
  background: rgba(0,0,0,0.3);
  color: #09C0FC;
  position: absolute;
  left: 0;
  bottom: 0;
}
.img-content h3 {
  font-size: 14px;
  color: #379AD9;
}
.img-content p {
  font-size: 12px;
  color: #379AD9;
  padding-left: 0;
  float: left;
}
.el-carousel__item:nth-child(2n) {
  background-color: rgba(0,0,0,0);
}

.el-carousel__item:nth-child(2n+1) {
  background-color: rgba(0,0,0,0);
}
  

</style>
