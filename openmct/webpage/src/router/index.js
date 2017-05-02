import Vue from 'vue'
import Router from 'vue-router'
import map from '../components/map/index'
import config from '../components/config/index'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
      path: '/',
      name: 'main',
      component: map
    }, {
      path: '/config',
      name: 'config',
      component: config
    }
  ]
})
