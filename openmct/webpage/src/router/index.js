import Vue from 'vue'
import Router from 'vue-router'
import realTime from '../components/realTime/index'
import alarmDetail from '../components/alarmDetail/index'
import config from '../components/config/index'
import systemConfig from '../components/systemConfig/index'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'real',
    component: realTime
  }, {
    path: '/alarm',
    name: 'alarm',
    component: alarmDetail
  }, {
    path: '/config',
    name: 'config',
    component: config
  }, {
    path: '/config/system',
    name: 'system',
    component: systemConfig
  }
  ]
})
