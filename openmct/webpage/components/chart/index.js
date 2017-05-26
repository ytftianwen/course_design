/**
 * Created by ytftianwen on 2017/5/2.
 */
import Vue from 'vue'
import echart from 'echarts'
import template from './view.html'
import {option, timeFormat} from './option'
import style from './style.css'
Vue.use(echart)
let Chart = {
  name: 'lineChart',
  template,
  style,
  props: {
    options: {
      default: function () {
        return {}
      },
      type: Object
    },
    id: {
      default: function () {
        return 'id'
      },
      type: String
    },
    isCustomization:{
      default: function () {
        return false
      },
      type: Boolean
    }
  },
  created(){
  },
  data(){
    return {
      randomId: 'chart-' + Math.random()
    }
  },
  methods: {
    init(){
      let domId = document.getElementById(this.randomId)
      let priChart = echart.init(domId)

      setInterval(() => {
        option.title.text = this.options.title
        option.series[1].data = this.options.realData
        option.xAxis.data = timeFormat()
        priChart.setOption(option)
      }, 1000 * 2)
    }
  },
  mounted(){
    this.init()
  }
}
Chart.install = function (Vue) {
  Vue.component(this.name, Chart)
}
export default Chart
