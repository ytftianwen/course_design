import Vue from 'vue'
import Router from 'vue-router'
import realTime from '../components/real/realTime/index'
import alarm from '../components/alarm/alarmDetail/index'
import alarmConfig from '../components/alarm/alarmConfig/index'
import realEntry from '../components/real/realConfig/index'
import systemConfig from '../components/config/system/index'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'real',
    component: realTime
  }, {
    path: '/real/entry',
    name: 'entry',
    component: realEntry
  },{
    path: '/alarm',
    name: 'alarm',
    component: alarm
  }, {
    path: '/config/alarm',
    name: 'configAlarm',
    component: alarmConfig
  }, {
    path: '/config/system',
    name: 'configSystem',
    component: systemConfig
  }
  ]
})
