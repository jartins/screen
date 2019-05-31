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
          <p> - 物以“稀”为贵，九成稀土概念股上涨，14天市值增千亿</p>
          <p> - 物以“稀”为贵，九成稀土概念股上涨，14天市值增千亿</p>
          <p> - 物以“稀”为贵，九成稀土概念股上涨，14天市值增千亿</p>
          <p> - 物以“稀”为贵，九成稀土概念股上涨，14天市值增千亿</p>
          <p> - 物以“稀”为贵，九成稀土概念股上涨，14天市值增千亿</p>
          <p> - 物以“稀”为贵，九成稀土概念股上涨，14天市值增千亿</p>
          <p> - 物以“稀”为贵，九成稀土概念股上涨，14天市值增千亿</p>
          <div class="bor-lf"></div>
          <div class="bor-rt"></div>
        </div>
        <div class="gather-weChat news-bg" style="margin-top: 5px;">
          <div class="news-title">新闻线索</div>
          <p>记者录入</p>
          <p>
            <span style="width: 350px; display:inline-block;">驻日美军佩戴特朗普头像徽章，美媒... </span>
            <span style="width: 114px;font-size: 12px; display:inline-block;">10分钟前</span>
            <span style="font-size: 12px; display:inline-block;">作者：小树</span>
          </p>
          <p>
            <span style="width: 350px; display:inline-block;">驻日美军佩戴特朗普头像徽章，美媒... </span>
            <span style="width: 114px;font-size: 12px; display:inline-block;">10分钟前</span>
            <span style="font-size: 12px; display:inline-block;">作者：小树</span>
          </p>
          <p>
            <span style="width: 350px; display:inline-block;">驻日美军佩戴特朗普头像徽章，美媒... </span>
            <span style="width: 114px;font-size: 12px; display:inline-block;">10分钟前</span>
            <span style="font-size: 12px; display:inline-block;">作者：小树</span>
          </p>
          <p>
            <span style="width: 350px; display:inline-block;">驻日美军佩戴特朗普头像徽章，美媒... </span>
            <span style="width: 114px;font-size: 12px; display:inline-block;">10分钟前</span>
            <span style="font-size: 12px; display:inline-block;">作者：小树</span>
          </p>
          <p>
            <span style="width: 350px; display:inline-block;">驻日美军佩戴特朗普头像徽章，美媒... </span>
            <span style="width: 114px;font-size: 12px; display:inline-block;">10分钟前</span>
            <span style="font-size: 12px; display:inline-block;">作者：小树</span>
          </p>
          <p>
            <span style="width: 350px; display:inline-block;">驻日美军佩戴特朗普头像徽章，美媒... </span>
            <span style="width: 114px;font-size: 12px; display:inline-block;">10分钟前</span>
            <span style="font-size: 12px; display:inline-block;">作者：小树</span>
          </p>
          <div class="bor-lf"></div>
          <div class="bor-rt"></div>
        </div>
        <div class="gather-weChat news-bg" style="margin-top: 5px;">
          <div class="news-title">舆情分析</div>
          <el-row style="width: 90%; margin: 50px auto;">
            <el-col :span="6" style="margin: 0 auto; text-align: center;">
              <el-progress type="circle" :percentage="68" color="#8e71c7" :width="100"></el-progress>
              <h3 style="color: #fff">广 告</h3>
            </el-col>
            <el-col :span="6" style="margin: 0 auto; text-align: center;">
              <el-progress type="circle" :percentage="35" color="#FE8E5F" :width="100"></el-progress>
              <h3 style="color: #fff">资 讯</h3>
            </el-col>
            <el-col :span="6" style="margin: 0 auto; text-align: center;">
              <el-progress type="circle" :percentage="23" color="#7DE3F6" :width="100"></el-progress>
              <h3 style="color: #fff">视 频</h3>
            </el-col>
            <el-col :span="6" style="margin: 0 auto; text-align: center;">
              <el-progress type="circle" :percentage="12" color="#E6AF08" :width="100"></el-progress>
              <h3 style="color: #fff">y 娱 乐</h3>
            </el-col>
          </el-row>
          <div class="bor-lf"></div>
          <div class="bor-rt"></div>
        </div>
      </div>
      <!-- 中部 -->
      <div class="fll content-lf" style="width: 560px; margin-left: 10px;">
       <div class="gather-weChat news-bg">
          <div class="news-title">新闻线索</div>
          <p>记者录入</p>
          <div id="app"></div>
          <!-- <p>
            <span style="width: 234px; display:inline-block;">· 航班延误乘客要工作人..</span>
            <span style="width: 155px;font-size: 12px; display:inline-block;">发布人：张麻子</span>
            <span style="font-size: 12px; display:inline-block;">2019-02-31-12:33</span>
          </p>
          <p>
            <span style="width: 234px; display:inline-block;">· 航班延误乘客要工作人..</span>
            <span style="width: 155px;font-size: 12px; display:inline-block;">发布人：张麻子</span>
            <span style="font-size: 12px; display:inline-block;">2019-02-31-12:33</span>
          </p>
          <p>
            <span style="width: 234px; display:inline-block;">· 航班延误乘客要工作人..</span>
            <span style="width: 155px;font-size: 12px; display:inline-block;">发布人：张麻子</span>
            <span style="font-size: 12px; display:inline-block;">2019-02-31-12:33</span>
          </p>
          <p>
            <span style="width: 234px; display:inline-block;">· 航班延误乘客要工作人..</span>
            <span style="width: 155px;font-size: 12px; display:inline-block;">发布人：张麻子</span>
            <span style="font-size: 12px; display:inline-block;">2019-02-31-12:33</span>
          </p>
          <p>
            <span style="width: 234px; display:inline-block;">· 航班延误乘客要工作人..</span>
            <span style="width: 155px;font-size: 12px; display:inline-block;">发布人：张麻子</span>
            <span style="font-size: 12px; display:inline-block;">2019-02-31-12:33</span>
          </p>
          <p>
            <span style="width: 234px; display:inline-block;">· 航班延误乘客要工作人..</span>
            <span style="width: 155px;font-size: 12px; display:inline-block;">发布人：张麻子</span>
            <span style="font-size: 12px; display:inline-block;">2019-02-31-12:33</span>
          </p> -->
          <div class="bor-lf"></div>
          <div class="bor-rt"></div>
        </div>
        <div class="gather-weChat news-bg" style="margin-top: 5px;">
          <div class="news-title">最新任务</div>
          <p>记者录入</p>
          <p>
            <span style="width: 234px; display:inline-block;">· 航班延误乘客要工作人..</span>
            <span style="width: 155px;font-size: 12px; display:inline-block;">发布人：张麻子</span>
            <span style="font-size: 12px; display:inline-block;">2019-02-31-12:33</span>
          </p>
          <p>
            <span style="width: 234px; display:inline-block;">· 航班延误乘客要工作人..</span>
            <span style="width: 155px;font-size: 12px; display:inline-block;">发布人：张麻子</span>
            <span style="font-size: 12px; display:inline-block;">2019-02-31-12:33</span>
          </p>
          <p>
            <span style="width: 234px; display:inline-block;">· 航班延误乘客要工作人..</span>
            <span style="width: 155px;font-size: 12px; display:inline-block;">发布人：张麻子</span>
            <span style="font-size: 12px; display:inline-block;">2019-02-31-12:33</span>
          </p>
          <p>
            <span style="width: 234px; display:inline-block;">· 航班延误乘客要工作人..</span>
            <span style="width: 155px;font-size: 12px; display:inline-block;">发布人：张麻子</span>
            <span style="font-size: 12px; display:inline-block;">2019-02-31-12:33</span>
          </p>
          <p>
            <span style="width: 234px; display:inline-block;">· 航班延误乘客要工作人..</span>
            <span style="width: 155px;font-size: 12px; display:inline-block;">发布人：张麻子</span>
            <span style="font-size: 12px; display:inline-block;">2019-02-31-12:33</span>
          </p>
          <p>
            <span style="width: 234px; display:inline-block;">· 航班延误乘客要工作人..</span>
            <span style="width: 155px;font-size: 12px; display:inline-block;">发布人：张麻子</span>
            <span style="font-size: 12px; display:inline-block;">2019-02-31-12:33</span>
          </p>
          <div class="bor-lf"></div>
          <div class="bor-rt"></div>
        </div>
        <div class="gather-weChat news-bg" style="margin: 5px 0 0 0;">
          <div class="news-title" style="margin: 0;">移动直播</div>
          <video width="99%" height="245px" id="video1" controls="controls" style="margin: 3px;"> 
            <source src="../assets/img/gbzy.mp4" type="video/mp4"></source> 
            your browser does not support the video tag 
          </video>
          <div class="bor-lf"></div>
          <div class="bor-rt"></div>
        </div>
      </div>
      <!-- 右侧栏 -->
      <div class="fll content-lf" style="width: 566px; margin-left: 10px;">
        <div class="gather-weChat news-bg">
          <div class="news-title">素材回传</div>
          <el-row>
            <el-col :span="5" style="color: #fff; text-align: center;">
              任务资源
            </el-col>
            <el-col :span="13">
              <el-progress :text-inside="true" :stroke-width="18" :percentage="80" color="#01B4FF" class="resource"></el-progress>
            </el-col>
            <el-col :span="6" style="color: #02AFFF; text-align: center;">
              21200 万个
            </el-col>
          </el-row>
          <el-row style="margin-top: 25px;">
            <el-col :span="5" style="color: #fff; text-align: center;">
              任务资源
            </el-col>
            <el-col :span="13">
              <el-progress :text-inside="true" :stroke-width="18" :percentage="80" color="#01B4FF" class="resource"></el-progress>
            </el-col>
            <el-col :span="6" style="color: #02AFFF; text-align: center;">
              21200 万个
            </el-col>
          </el-row>
          <el-row style="margin-top: 25px;">
            <el-col :span="5" style="color: #fff; text-align: center;">
              任务资源
            </el-col>
            <el-col :span="13">
              <el-progress :text-inside="true" :stroke-width="18" :percentage="80" color="#01B4FF" class="resource"></el-progress>
            </el-col>
            <el-col :span="6" style="color: #02AFFF; text-align: center;">
              21200 万个
            </el-col>
          </el-row>
          <el-row style="margin-top: 25px;">
            <el-col :span="5" style="color: #fff; text-align: center;">
              任务资源
            </el-col>
            <el-col :span="13">
              <el-progress :text-inside="true" :stroke-width="18" :percentage="80" color="#01B4FF" class="resource"></el-progress>
            </el-col>
            <el-col :span="6" style="color: #02AFFF; text-align: center;">
              21200 万个
            </el-col>
          </el-row>
          <el-row style="margin-top: 25px;">
            <el-col :span="5" style="color: #fff; text-align: center;">
              任务资源
            </el-col>
            <el-col :span="13">
              <el-progress :text-inside="true" :stroke-width="18" :percentage="80" color="#01B4FF" class="resource"></el-progress>
            </el-col>
            <el-col :span="6" style="color: #02AFFF; text-align: center;">
              21200 万个
            </el-col>
          </el-row>
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
              <span>36%</span>
            </p>
            <p style="font-size: 12px; margin-left: 60px; color: #00DEFF;">
              <span style="width: 12px; height: 12px; background: #AC4ED3; display: inline-block;"></span>
              <span style="margin: 0 40px 0 10px; color: #Fff;">娱乐八卦</span>
              <span>36%</span>
            </p>
          </div>
          <!-- 右边 -->
          <div class="flr" style="width: 50%;">
            <div id="myChart2" :style="{width: '160px', height: '150px', margin: '10px auto'}"></div>
            <p style="font-size: 12px; margin-left: 60px; color: #00DEFF;">
              <span style="width: 12px; height: 12px; background: #0E6DE9; display: inline-block;"></span>
              <span style="margin: 0 40px 0 10px; color: #Fff;">互联网</span>
              <span>36%</span>
            </p>
            <p style="font-size: 12px; margin-left: 60px; color: #00DEFF;">
              <span style="width: 12px; height: 12px; background: #AC4ED3; display: inline-block;"></span>
              <span style="margin: 0 40px 0 10px; color: #Fff;">娱乐八卦</span>
              <span>36%</span>
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
              <img :src="item" alt="" style="width: 100%;">
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
      imgList: ['https://wx1.sinaimg.cn/mw690/9b02391aly1g3jjb6hzqzj20r80r8q6a.jpg',
      'https://wx1.sinaimg.cn/mw690/9b02391aly1g3jjb6hzqzj20r80r8q6a.jpg',
      'https://wx1.sinaimg.cn/mw690/9b02391aly1g3jjb6hzqzj20r80r8q6a.jpg',
      'https://wx1.sinaimg.cn/mw690/9b02391aly1g3jjb6hzqzj20r80r8q6a.jpg',
      'https://wx1.sinaimg.cn/mw690/9b02391aly1g3jjb6hzqzj20r80r8q6a.jpg']
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
      this.get('/index.php/api/screenv1.converge/wxdata', parmas).then(res => {
        if(res.data.code == 200) {
          console.log(res.data);
          this.$message.success('ok');
        } else if(res.data.code == 201) {
          this.$message.error(res.data.message);
        } else if (res.data.code == 202){
          window.localStorage.removeItem("user_id");
          window.localStorage.removeItem("user_token");
          this.$router.go(0);
        }
      }).catch(e => {
        this.$message.error(e.message);
      });

    },
    drawLine() {

      // const player = AwesomeDanmaku.getPlayer('#app');
      // player.play();
      // player.insert([
      //   'Hello Awesome Danmaku!',
      //   '我是第1条弹幕...',
      //   '我是第2条弹幕...',
      //   '我是第3条弹幕...',
      // ]);

      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("myChart"));
      // 绘制图表
      myChart.setOption({
        angleAxis: {},
        radiusAxis: {
          type: "category",
          data: ["周一", "周二", "周三", "周四"],
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
            data: [5, 2, 4, 8],
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
              { value: 10},
              { value: 13},
              { value: 18},
              { value: 25}
            ]
          }
        ]
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
  

</style>
