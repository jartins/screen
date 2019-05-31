import Vue from "vue";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from "./App.vue";
import router from "./router";
import '@/assets/style/common.styl';
import echarts from 'echarts';
import "axios";
import axios from './public/public.js';

Vue.use(ElementUI);
Vue.use(new axios());
Vue.prototype.$echarts = echarts;
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
