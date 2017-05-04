/**
 * Created by ytftianwen on 2017/5/4.
 */
import Vue from 'vue'
import VueResource from 'vue-resource'
Vue.use(VueResource)
let baseDomain = 'http://127.0.0.1:8899/api'
let http = {
  get(url, params = {}) {
    return Vue.http.get(baseDomain + url, params)
      .then((res) => {
        return res.body
      })
      .catch((err) => {
        return err
      })
  },
  post(url, params){
    return Vue.http.post(baseDomain + url, params)
      .then(res => {
        return res.body
      })
      .catch(err => {
        return err
      })
  }
}
export default http