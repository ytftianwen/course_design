/**
 * Created by ytftianwen on 2017/5/5.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import alarmDetail from './modules/alarmDetail'
Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    alarmDetail
  }
})
