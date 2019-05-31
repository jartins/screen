<template>
  <div class="home-bg" style="background: url('/assets/img/login/loginbg.png') no-repeat centenr;">
    <div style="height: 130px;"></div>
    <div class="title">
      <h1>融媒体指挥调度中心</h1>
      <h1 style="font-size: 26px;letter-spacing: 2.4px">Financial Media Command Center</h1>
    </div>
    <div class="login">
      <img :src="require('@/assets/img/login/shou.png')" height="504">
      <div class="pwd">
        <div class="account" style="margin-top: 90px;">
          <div class="icon fll">
            <img :src="require('@/assets/img/login/user.png')" width="32">
          </div>
          <input class="fll" type="text" v-model="user" placeholder="请输入用户名/手机号" value="" v-on:keyup="inputTargetValue">
        </div>
        <div class="account">
          <div class="icon fll">
            <img :src="require('@/assets/img/login/pwd.png')" width="28">
          </div>
          <input class="fll" type="text" v-model="password" placeholder="请输入密码" value="" v-on:keyup="inputkeyupValue">
        </div>
        <div class="btn" @click="onLogin">立即登录</div>
        <p class="register" @click="register">注册 ></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      user: '',
      password: '',
      name:'',
      kepu:'',
    };
  },
  filters: {},

  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {
    // 账号
    inputTargetValue: function(e){
        console.log(e.target.value)
        this.name = e.target.value
    },
     //密码
     inputkeyupValue:function(e){
        console.log(e.target.value)
        this.kepu = e.target.value
    },
    onLogin() {
       let parmas = {
        username:this.name,	//是	string	用户名
        password:this.kepu,	//是	string	密码
      }
      this.get('/index.php/api/screenv1.login/do_login', parmas).then(res => {
        if(res.data.code == 200) {
          console.log(res.data);
          this.$message.success('ok');
          this.$router.push({ path: '/Btninnerlougo' });
          // this.$routers.push('/maps');
        } else if(!res.data.code == 201) {
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
    register() {
      //  this.$router.push('/Btninnerlougo');
    }
  },
  components: {}
};
</script>

<style>
.fll::-webkit-input-placeholder{
  color: #4568E6;
}
.fll::-moz-placeholder{
  color: #4568E6;
}
.fll:-ms-input-placeholder{
  color: #4568E6;
}
</style>


<style scoped lang="stylus">
.home-bg
  width 100%;
  height 937px
  background url('../assets/img/login/loginbg.png') no-repeat center
  background-size 100% 100%
  .title
    width 50%;
    margin 0 auto
    font-size 24px
    color #D9F0FF
    text-align center
    letter-spacing 8px
  .login
    width 913px
    height 504px
    background #152D80
    margin 62px auto
    box-shadow 1px 0px 11px 7px #2576e6
  .pwd
    width 510px
    height 504px
    float right 
  .account
    width 400px
    height 65px
    border 1px solid #2576E6
    box-shadow 1px 0px 3px 0px #2576e6
    margin 50px auto
    .icon
      width 65px
      height 65px
      background #2576E6
      img
        margin 16px
    input 
      width 300px
      line-height 63px
      background #152D80
      border 0
      padding-left 20px
      font-size 16px
      color #4568E6
      outline none
  .btn
    width 400px
    height 65px
    line-height 65px
    background #2982FF
    color #fff
    font-size 20px
    margin 0 auto
    text-align center
    border-radius 4px
    cursor pointer 
  .register
    text-align right
    margin 20px 50px 0 0
    color #B2CDFF
    cursor pointer 
</style>
