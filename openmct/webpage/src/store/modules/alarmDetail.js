/**
 * Created by ytftianwen on 2017/5/5.
 */
import * as types from '../mutations'
const state = {
  disasterLevel: '0'
}
const getters = {
  getDisasterLevel: state => state.disasterLevel
}
const actions = {
  setDisasterLevel({commit}, data){
    commit(types.ALARM_DETAIL_TYPE, data)
  }
}
const mutations = {
  [types.ALARM_DETAIL_TYPE](state, data){
    state.disasterLevel = data
  }
}
export default {
  state,
  getters,
  actions,
  mutations
}
