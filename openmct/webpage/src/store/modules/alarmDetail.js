/**
 * Created by ytftianwen on 2017/5/5.
 */
import * as types from '../mutations'
const state = {
  alarmType: 'earthquake'
}
const getters = {
  getAlarmType: state => state.alarmType
}
const actions = {
  setAlarmType({commit}, data){
    commit(types.ALARM_DETAIL_TYPE, data)
  }
}
const mutations = {
  [types.ALARM_DETAIL_TYPE](state, data){
    state.alarmType = data
  }
}
export default {
  state,
  getters,
  actions,
  mutations
}
