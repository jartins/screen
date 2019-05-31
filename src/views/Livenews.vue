<template>
  <div class="home-bg" style="background: url('/assets/img/monitors/monitors-bg.png') no-repeat centenr;">
    <div class="title" style="background: url('/assets/img/monitors/top.png') no-repeat centenr;">
      <p>焦点实时新闻直播</p>
    </div>
    <div class="content" style="background: url('/assets/img/monitors/lang.png') no-repeat centenr;">
      <!-- 开始 -->
      <div style="height: 50px"></div>
      <div class="news-bg live-new">
        <div class="news-title"></div>
        <video width="100%" height="690px" id="video1"  controls="controls" style="margin: 0; object-fit: fill" src="../assets/img/gbzy.mp4"> 
          <!-- <source src="../assets/img/gbzy.mp4" type="video/mp4"></source>  -->
          your browser does not support the video tag 
        </video>
        <div class="bor-lf"></div>
        <div class="bor-rt"></div>
      </div>
      <!-- 结束 -->
    </div>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
    };
  },
  filters: {},
  computed: {},
  created() {},
  mounted() {
    this.drawLine();
  },
  watch: {},
  methods: {
    drawLine() {
      var myVideo=document.getElementById("video1");
      myVideo.play(); 
      // console.log(this.$echarts);
      // // 基于准备好的dom，初始化echarts实例
      // let myChart = this.$echarts.init(document.getElementById("myChart"));
      // // 绘制图表
      // myChart.setOption({
      //   angleAxis: {},
      //   radiusAxis: {
      //     type: "category",
      //     data: ["周一", "周二", "周三", "周四"],
      //     z: 10,
      //     axisLine: {
      //       lineStyle: {
      //         color: '#fff',
      //         shadowColor: '#fff'
      //       }
      //     }
      //   },
      //   color: ["#AC4ED3", "#E6AF08", "#00AF6D", "#0E6DE9", "#2C77DE"],
      //   polar: {},
      //   series: [
      //     {
      //       type: "bar",
      //       data: [5, 2, 4, 8],
      //       coordinateSystem: "polar",
      //       textShadowColor: '#fff',
      //       emphasis: {
      //         color: '#fff',
      //         borderColor : '#fff'
      //       }
      //     }
      //   ]
      // });

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
  height 936px
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
    width 63px
    height 63px
    border-left 2px solid #00A2FF 
    border-bottom 2px solid #00A2FF
    position absolute
    bottom 0px
    left 0px
  .bor-rt
    width 63px
    height 63px
    border-right 2px solid #00A2FF 
    border-bottom 2px solid #00A2FF
    position absolute
    bottom 0px
    right 0 px

.news-title
  width 100%
  height 36px
  font-size 18px
  color #20FDFA
  background linear-gradient(to right, rgba(8, 37, 183, 0.6), rgba(1, 180, 255, 0))
  line-height 36px
  padding-left 20px

.content
  width 100%
  height 836px
  background url('../assets/img/monitors/lang.png') no-repeat center
  background-size 100% 100%

.live-new
  width 90%
  height 730px
  margin 0 auto
  

</style>
