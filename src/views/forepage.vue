<template>
  <div
    class="home-bg"
    style="background: url('/assets/img/monitors/monitors-bg.png') no-repeat centenr;"
  >
    <div class="title" style="background: url('/assets/img/monitors/top.png') no-repeat centenr;">
      <p>融媒体指挥调度中心</p>
    </div>
    <div
      class="content"
      style="background: url('/assets/img/monitors/lang.png') no-repeat centenr;"
    >
    <div class="flexkepnum">

   
      <div class="fll-parent">
        <div class="national-news">
          <p class="news-title">全国新闻热点</p>
          <div class="fll">
            <p style="text-align: center; color: #fff; font-size: 12px; margin-top: 11px;">项目数量</p>
            <p style="text-align: center; color: #20FDFA; font-size: 17px; margin-top: 5px;">10036个</p>
            <p style="text-align: center; color: #fff; font-size: 12px; margin: 15px 0;">同比 <span style="color: red;">2.3% ↑</span></p>
            <div id="myChart" :style="{width: '200px', height: '250px'}"></div>
            <p style="font-size: 12px; margin: 12px; color: #00DEFF;">
              <span style="width: 12px; height: 12px; background: #0E6DE9; display: inline-block;"></span>
              <span style="margin-left: 10px; color: #Fff;">互联网</span>
              <span style="margin: 0 16px 0 40px;">212个</span>
              <span>36%</span>
            </p>
            <p style="font-size: 12px; margin: 12px; color: #00DEFF;">
              <span style="width: 12px; height: 12px; background: #AC4ED3; display: inline-block;"></span>
              <span style="margin-left: 10px; color: #Fff;">娱乐八卦</span>
              <span style="margin: 0 16px 0 40px;">212个</span>
              <span>36%</span>
            </p>
            <p style="font-size: 12px; margin: 12px; color: #00DEFF;">
              <span style="width: 12px; height: 12px; background: #E6AF08; display: inline-block;"></span>
              <span style="margin-left: 10px; color: #Fff;">军事新闻</span>
              <span style="margin: 0 16px 0 40px;">212个</span>
              <span>36%</span>
            </p>
            <p style="font-size: 12px; margin: 12px; color: #00DEFF;">
              <span style="width: 12px; height: 12px; background: #00AF6D; display: inline-block;"></span>
              <span style="margin-left: 10px; color: #Fff;">街头采访</span>
              <span style="margin: 0 16px 0 40px;">212个</span>
              <span>36%</span>
            </p>
          </div>
          <div class="flr">
            <p style="text-align: center; color: #fff; font-size: 12px; margin-top: 11px;">项目数量</p>
            <p style="text-align: center; color: #20FDFA; font-size: 17px; margin-top: 5px;">10036个</p>
            <p style="text-align: center; color: #fff; font-size: 12px; margin: 15px 0;">同比 <span style="color: red;">2.3% ↑</span></p>
            <div id="myChart2" :style="{width: '250px', height: '250px'}"></div>
            <p style="font-size: 12px; margin: 12px; color: #00DEFF;">
              <span style="width: 12px; height: 12px; background: #0E6DE9; display: inline-block;"></span>
              <span style="margin-left: 10px; color: #Fff;">互联网</span>
              <span style="margin: 0 16px 0 40px;">212个</span>
              <span>36%</span>
            </p>
            <p style="font-size: 12px; margin: 12px; color: #00DEFF;">
              <span style="width: 12px; height: 12px; background: #AC4ED3; display: inline-block;"></span>
              <span style="margin-left: 10px; color: #Fff;">娱乐八卦</span>
              <span style="margin: 0 16px 0 40px;">212个</span>
              <span>36%</span>
            </p>
            <p style="font-size: 12px; margin: 12px; color: #00DEFF;">
              <span style="width: 12px; height: 12px; background: #E6AF08; display: inline-block;"></span>
              <span style="margin-left: 10px; color: #Fff;">军事新闻</span>
              <span style="margin: 0 16px 0 40px;">212个</span>
              <span>36%</span>
            </p>
            <p style="font-size: 12px; margin: 12px; color: #00DEFF;">
              <span style="width: 12px; height: 12px; background: #00AF6D; display: inline-block;"></span>
              <span style="margin-left: 10px; color: #Fff;">街头采访</span>
              <span style="margin: 0 16px 0 40px;">212个</span>
              <span>36%</span>
            </p>
          </div>
          <div class="originflsh"></div>
          <div class="commitfshr"></div>
        </div>
      </div>
      <div class="fll-parent"></div>
      <div class="fll-parent"></div>
      <div class="fll-parent"></div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      user: "",
      password: ""
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
      console.log(this.$echarts);
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("myChart"));
      // 绘制图表
      myChart.setOption({
        angleAxis: {},
        radiusAxis: {
          type: "category",
          data: ["周一", "周二", "周三", "周四"],
          z: 10
        },
        color: ["#AC4ED3", "#E6AF08", "#00AF6D", "#0E6DE9", "#2C77DE"],
        polar: {},
        series: [
          {
            type: "bar",
            data: [1, 2, 3, 4],
            coordinateSystem: "polar",
            name: "A",
            stack: "a"
          },
          {
            type: "bar",
            data: [2, 4, 6, 8],
            coordinateSystem: "polar",
            name: "B",
            stack: "a"
          },
          {
            type: "bar",
            data: [1, 2, 3, 4],
            coordinateSystem: "polar",
            name: "C",
            stack: "a"
          }
        ],
        legend: {
          show: true,
          data: ["A", "B", "C", "D"]
        }
      });

      // 基于准备好的dom，初始化echarts实例
      let myChart2 = this.$echarts.init(document.getElementById("myChart2"));
      // 绘制图表
      myChart2.setOption({
        series: [
          {
            type: "pie",
            radius: [20, 100],
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

<style scoped lang="stylus">
.home-bg
  width 100%
  height 100vh
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
.content
  width 100%
  height 837px
  background url('../assets/img/monitors/lang.png') no-repeat center
  background-size 100% 100%
  overflow hidden
  .national-news
    width 462px
    height 527px
    box-shadow #3755DA 0px 0px 16px inset
    position relative
    .news-title
      width 100%
      height 36px
      color #20FDFA
      background linear-gradient(to right, rgba(8, 37, 183, 0.6), rgba(1, 180, 255, 0))
      line-height 36px
      text-indent 20px
.originflsh{
    position absolute
    bottom -1px
    left -1px
    width 25px
    height 25px
    border-bottom 2px solid rgba(0,162,255,1)
    border-left 2px solid rgba(0,162,255,1)
}
.commitfshr{
    position absolute
    bottom -1px
    right  -1px
    width 25px
    height 25px
    border-bottom 2px solid rgba(0,162,255,1)
    border-right 2px solid rgba(0,162,255,1)
}
.flexkepnum{
    width 80%
    margin 45px auto 
    margin-bottom 0
   
}
.fll-parent{
   width 35%
   margin 10px 5%
   float left
}
</style>
