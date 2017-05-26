/**
 * Created by yangtaofeng on 2017/3/17.
 */
import template from './view.html'
import style from './style.css'
import echarts from 'echarts'
import 'echarts/lib/chart/map'
import chinaJson from '../../src/commons/china'
import {option, address} from './model'
let viewMap = {
  template,
  style,
  name: 'viewMap',
  data () {
    return {
      randomId: 'map-'+Math.random(),
      detailData: [{
        address: '北京',
        time: '2017.03.16 09:12:53',
        type: '沙尘暴',
        grade: '危急',
        description: '北京地区发生强大沙尘暴'
      }],
      selectedAddress: 0,
      address: address,
      startTime: '',
      endTime: ''
    }
  },
  methods: {
    drawMap () {
      let myChart = echarts.init(document.getElementById(this.randomId))
      echarts.registerMap('china', chinaJson)
      myChart.setOption(option)
      myChart.on('click', (params) => {
        this.detailData[0].address = params.name
        this.detailData[0].type = '地震'
        this.detailData[0].time = this.getNowTime()
        this.detailData[0].description = `${params.name}发生灾害，${params.seriesName}`
        if (params.color === 'red') {
          this.detailData[0].grade = '危急'
        } else {
          this.detailData[0].grade = '中危'
        }
      })
    },
    getNowTime () {
      let now = new Date()
      return `${now.getFullYear()}.${now.getMonth() + 1}.${now.getDay()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`
    }
  },
  mounted () {
    this.drawMap()
  }
}
viewMap.install = function (Vue) {
  Vue.component(this.name, viewMap)
}
export default viewMap
