// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import highChart from 'vue-highcharts'
import App from './App'
import router from './router'
import store from './store/index'
import priUI from '../components/register'

Vue.use(ElementUi)
Vue.use(priUI)
Vue.use(highChart)
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})




