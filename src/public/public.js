import axios from "axios";
import qs from "qs";
export default class {

  Url = "http://alivl.com";

  install(Vue) {
    this.AxiosMotheds(Vue);
  }

  AxiosMotheds(Vue) {
    /**
     * get请求
     * @param url
     * @returns {Promise.<TResult>}
     */
    Vue.prototype.get = (url, data = {}) => {
      // let token=""
      return axios({
        url: this.Url + url,
        method: "get",
        headers: {
          // "Authorization": token,
          "Content-Type": "application/json"
        },
        params: data
      });
    };
    /**
     * post请求
     * @param url
     * @returns {Promise.<TResult>}
     */
    Vue.prototype.post = (url, data = {}) => {
      data["rd"] = Vue.prototype.rd;
      data["ra"] = Vue.prototype.ra;
      return axios({
        method: "post",
        url: this.Url + url,
        headers: {
          // "Authorization": token,
          "content-type": "application/x-www-form-urlencoded"
        },
        data: qs.stringify(data)
      });
    };

    Vue.prototype.setGlobalprama = function(field, value) {
      Vue.prototype[field] = value;
    };
    Vue.prototype.Url = this.Url;
  }
}
