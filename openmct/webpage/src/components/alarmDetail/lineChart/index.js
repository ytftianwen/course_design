/**
 * Created by ytftianwen on 2017/5/2.
 */
import template from './view.html'
import style from './style.css'
import echart from 'echarts'
import option from './model'
import httpModel from './httpModel'
export default {
  template,
  style,
  data(){
    return {
      floodOption: {
        title: '流体波',
        realData: [500, 400, 434, 378, 390, 560, 610]
      },
      xOption: {
        title: '地磁',
        realData: [450, 400, 500, 378, 530, 560, 610]
      }
    }
  },
  methods: {
    drawLine(){
      let waterChart = echart.init(document.getElementById('water'))
      waterChart.setOption(option)
    },
    init(){
      httpModel.getParams()
      this.drawLine()
    }
  },
  mounted(){
    this.init()
  }
}
