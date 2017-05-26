/**
 * Created by ytftianwen on 2017/5/2.
 */
import lineChart from './chart/index'
import viewMap from './viewMap/index'
export default {
  install: function (Vue) {
    Vue.use(lineChart)
    Vue.use(viewMap)
  }
}
