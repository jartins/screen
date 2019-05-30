<template>
  <div
    class="home-bg"
    style="background: url('/assets/img/monitors/monitors-bg.png') no-repeat centenr;"
  >
    <div class="title" style="background: url('/assets/img/monitors/top.png') no-repeat centenr;">
      <p>融媒体指挥调度中心</p>
    </div>
    <div class="content" style="background: url('/assets/img/monitors/lang.png') no-repeat centenr;">
       <div class="kepuPOPsikitev">
         <ul class="Timewebkit">
           <li></li>
           <li></li>
           <li></li>
           <li></li>
           <li></li>
           <li></li>
         </ul>

       </div>
    </div>
    <!-- <div class="pagenum">
        
    </div> -->
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
    // this.drawLine();
  },
  watch: {},
  methods: {
    // drawLine() {
    //   console.log(this.$echarts);
    //   // 基于准备好的dom，初始化echarts实例
    //   let myChart = this.$echarts.init(document.getElementById("myChart"));
    //   // 绘制图表
    //   myChart.setOption({
    //     angleAxis: {},
    //     radiusAxis: {
    //       type: "category",
    //       data: ["周一", "周二", "周三", "周四"],
    //       z: 10
    //     },
    //     color: ["#AC4ED3", "#E6AF08", "#00AF6D", "#0E6DE9", "#2C77DE"],
    //     polar: {},
    //     series: [
    //       {
    //         type: "bar",
    //         data: [1, 2, 3, 4],
    //         coordinateSystem: "polar",
    //         name: "A",
    //         stack: "a"
    //       },
    //       {
    //         type: "bar",
    //         data: [2, 4, 6, 8],
    //         coordinateSystem: "polar",
    //         name: "B",
    //         stack: "a"
    //       },
    //       {
    //         type: "bar",
    //         data: [1, 2, 3, 4],
    //         coordinateSystem: "polar",
    //         name: "C",
    //         stack: "a"
    //       }
    //     ],
    //     legend: {
    //       show: true,
    //       data: ["A", "B", "C", "D"]
    //     }
    //   });

    //   // 基于准备好的dom，初始化echarts实例
    //   let myChart2 = this.$echarts.init(document.getElementById("myChart2"));
    //   // 绘制图表
    //   myChart2.setOption({
    //     series: [
    //       {
    //         type: "pie",
    //         radius: [20, 100],
    //         center: ["50%", "50%"],
    //         roseType: "radius",
    //         color: ["#0E6DE9", "#E6AF08", "#00AF6D", "#AC4ED3"],
    //         label: {
    //           normal: {
    //             show: false
    //           }
    //         },
    //         data: [
    //           { value: 10},
    //           { value: 13},
    //           { value: 18},
    //           { value: 25}
    //         ]
    //       }
    //     ]
    //   });
    // }
  },
  components: {}
};
</script>

<style scoped lang="stylus">
.home-bg
  width 100%
  height 937px
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
    .news-title
      width 100%
      height 36px
      color #20FDFA
      background linear-gradient(to right, rgba(8, 37, 183, 0.6), rgba(1, 180, 255, 0))
      line-height 36px
      padding-left 20px

.kepuPOPsikitev
    width 80%
    height 500px
    background red
    margin 45px auto
    margin-bottom 0
.Timewebkit
overflow hidden
.Timewebkit li{
  padding 5px 10px;
  float left
  width:89px;
height:22px;
font-size:23px;
font-family:SourceHanSansCN-Bold;
font-weight:bold;
color:rgba(0,150,255,1);
line-height:60px;

background:linear-gradient(92deg,rgba(0,114,255,1) 0%, rgba(0,234,255,1) 48.8525390625%, rgba(1,170,255,1) 100%);
-webkit-background-clip:text;
-webkit-text-fill-color:transparent;
}
      
</style>
