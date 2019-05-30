<template>
  <div
    class="home-bg"
    style="background: url('/assets/img/monitors/monitors-bg.png') no-repeat centenr;"
  >
    <div class="title" style="background: url('/assets/img/monitors/top.png') no-repeat centenr;">
      <p>融媒体指挥调度中心</p>
    </div>
    <div class="content" style="background: url('/assets/img/monitors/lang.png') no-repeat centenr;">
      <!-- 左侧栏 -->
      <div class="fll" style="width: 465px; margin: 64px 0 0 50px;">
        <div class="news-bg national-news">
          <p class="news-title">全国新闻热点</p>
          <div class="fll">
            <p style="text-align: center; color: #fff; font-size: 12px; margin-top: 11px;">项目数量</p>
            <p style="text-align: center; color: #20FDFA; font-size: 17px; margin-top: 5px;">10036个</p>
            <p style="text-align: center; color: #fff; font-size: 12px; margin: 15px 0;">同比 <span style="color: red;">2.3% ↑</span></p>
            <div id="myChart" :style="{width: '230px', height: '250px'}"></div>
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
            <div id="myChart2" :style="{width: '230px', height: '250px'}"></div>
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
        </div>
        <div class="news-bg real-time">
          <p class="news-title">实时数据监控</p>
           <div id="myChart3" :style="{width: '470px', height: '280px'}"></div>
        </div>
      </div>
      <!-- 中部 -->
      <div class="fll news-bg map-bg">
        <div class="total-data">
          数据总量
          <span>1</span>
        </div>
      </div>
      <!-- 右侧栏 -->
      <div class="fll news-rgt">
        <div class="examine">
          <div class="news-title">全国新闻热点</div>
        </div>
        <div class="examine">
          <div class="news-title">全国新闻热点</div>
        </div>
        <div class="examine">
          <div class="news-title">全国新闻占比</div>
        </div>
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


      // 基于准备好的dom，初始化echarts实例
      let myChart3 = this.$echarts.init(document.getElementById("myChart3"));
      // 绘制图表
      myChart3.setOption({
        tooltip: {
            trigger: 'axis'
        },
        color: ['#00C4F5', '#49CE7A'],
        legend: {
            data:['蒸发量','平均温度'],
            textStyle: {
              color: '#fff'
            }
        },
        xAxis: [
          {
            type: 'category',
            data: ['市本级','常熟市', '张家港市', '昆山市', '太仓市', '相城市', '工业园区', '姑苏区', '高新区', '吴中区'],
            axisPointer: {
                type: 'shadow'
            },
            axisLine: {
              lineStyle: {
                color: '#fff'
              }
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            name: '水量',
            min: 0,
            max: 25,
            interval: 5,
            axisLabel: {
                formatter: '{value}'
            },
            axisLine: {
              lineStyle: {
                color: '#fff'
              }
            }
          },
          {
            type: 'value',
            name: '温度',
            min: 0,
            max: 25,
            interval: 5,
            axisLabel: {
                formatter: '{value}'
            },
            axisLine: {
              lineStyle: {
                color: '#fff'
              }
            }
          }
        ],
        series: [
          {
            name:'蒸发量',
            type:'bar',
            data:[5,6,6,8,9,1,8,1,2,5]
          },
          {
            name:'平均温度',
            type:'line',
            yAxisIndex: 1,
            data:[7,8,8,10,11,3,10,3,5,7]
          }
        ]
      });

      var a = '123456'.split('');
      



    }
  },
  components: {}
};
</script>

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
  height 980px
  background url('../assets/img/monitors/lang.png') no-repeat center
  background-size 100% 100%
  .national-news
    width 462px
    height 527px
  .real-time
    width 462px
    height 295px
    margin-top 12px
  
.map-bg
  width 855px
  height 835px
  margin 64px 0 0 10px
  .total-data
    text-align center
    color #fff
    font-size 26px
    span
      font-family 'DS-Digital-Bold'
      width 58px
      height 77px
      display inline-black

.news-rgt
  width 450px
  margin 64px 0 0 10px
  .examine
    width 100%;
    height 277px


</style>
