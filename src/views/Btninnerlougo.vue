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
           <li v-for="(item,index) in data" :key="item" @click = "clickfun(index)">
             <img src="../assets/img/keisiforter/kuangke1.png" alt="" class="imageskesi">
             <div class="textcentent">{{item}}</div>
           </li>
           
         </ul>
         <ul class="chromeblack">
            <li v-for="item in list" :key="item.index" @click="getData()">
              <img src="../assets/img/keisiforter/xuanz.png" v-if="!item.name" alt="" class="imageskesi">
              <img src="../assets/img/keisiforter/xuanz1.png" v-if="item.name" alt="" class="imageskesi">
              <div class="listkepnum">{{item.name}}</div>
            </li>
           <!-- <li>
             <img src="../assets/img/keisiforter/xuanz.png" alt="" class="imageskesi">
              <div class="listkepnum">全球资源管理系统</div>
           </li> -->
           
         </ul>
        <div class="da-btn" @click="goSudoku">进入大屏></div>
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
      password: "",
      // data: ['市本级','常熟市', '张家港市', '昆山市', '太仓市', '相城市', '工业园区', '姑苏区', '高新区', '吴中区'],
      data:null,
      zanList: [],
      list:[{id: 1,name: ''},{id: 1,name: ''},{id: 1,name: ''},{id: 1,name: ''},{id: 1,name: ''},{id: 1,name: ''},{id: 1,name: ''},{id: 1,name: ''},{id: 1,name: ''}],
      srckup:require('../assets/img/keisiforter/xuanz.png'),
      text:null,
      content:[],
    };
  },
  filters: {},

  computed: {},
  created() {
    
  },
  mounted() {
    // this.drawLine();
    this.get('/index.php/api/screenv1.menubar/get_menu').then(res => {
        console.log(res.data)
        this.data=res.data;
        
      }).catch(e => {
        this.$message.error(e.message);
      });
  },
  watch: {},
  methods: {
    goSudoku() {
      this.$router.push('/sudoku');
    },
    clickfun(ine) {
      console.log(ine)
     
     var btnkeisi=this.data[ine]
       console.log(btnkeisi)
     if(this.zanList.length<9){
        this.zanList.push(btnkeisi)
        this.data.splice(ine,1)
      }else if(this.zanList.length>9){
          this.zanList.length=9
      }

      
      this.zanList.forEach((v, index) => {
        this.list[index].name = v;
        console.log( v )
      })
     
       
      
      
    },
    getData() {
      

    },

  },
  components: {}
};
</script>

<style scoped>
.Timewebkit li{
width:147px;
height:60px;
background: #05065B;
float :left;
margin: 0px 16px 40px 20px;
position: relative;
}
.imageskesi{
  width:100%;
 height:100%;
  position: absolute;
  top: 0;
  left: 0;
  display: block;
}
.textcentent{
font-size: 20px;
font-family: SourceHanSansCN-Bold; 
color: rgba(0,150,255,1); 
background: linear-gradient(92deg,rgba(0,114,255,1) 0%, rgba(0,234,255,1) 48.8525390625%, rgba(1,170,255,1) 100%); 
-webkit-background-clip: text;
-webkit-text-fill-color: transparent; 
text-align: center;
line-height: 60px;
}
.chromeblack{
 overflow: hidden;
 margin: 50px 0 0 0;
}
.chromeblack li{
width: 27.3%;
height: 95px;
background:#042D7A;
border-radius:10px;
float :left;
margin: 0px 3% 40px 3%;
position: relative;
}
.listkepnum{
  font-size:20px;
  font-family:PingFangSC-Regular;
  font-weight:300;
  color: #fff;
  text-shadow: 0px 1px 5px white,
                0 0 10px #fff;
  /* line-height: 95px;
  text-align: center; */
  position: absolute;
  left: 40%;
  top: 33%;
  z-index: 2;
}
</style>


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
    .news-title
      width 100%
      height 36px
      color #20FDFA
      background linear-gradient(to right, rgba(8, 37, 183, 0.6), rgba(1, 180, 255, 0))
      line-height 36px
      padding-left 20px

.kepuPOPsikitev
    width 80%
    margin 45px auto
    margin-bottom 0
.Timewebkit
  overflow hidden

.da-btn
  width 147px
  height 60px
  line-height 60px
  border-radius 10px
  color #00EAFF
  border 1px solid #00EAFF
  font-size 20px
  text-align center
  position fixed
  right 50px
  bottom 80px
  cursor pointer



</style>
