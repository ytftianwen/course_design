import Vue from 'vue'
import Router from 'vue-router'
import alarmDetail from '../components/alarmDetail/index'
import config from '../components/config/index'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
      path: '/',
      name: 'main',
      component: alarmDetail
    }, {
      path: '/config',
      name: 'config',
      component: config
    }
  ]
})
