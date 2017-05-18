/**
 * Created by yangtaofeng on 2017/3/17.
 */
import template from './view.html'
import style from './style.css'
import echarts from 'echarts'
import 'echarts/lib/chart/map'
import chinaJson from '../../../../commons/china'
import {option, address} from './model'
import {randomData, dynamicData, dynamicOption} from './dynamicChart'
export default {
  template,
  style,
  components: {
  },
  name: 'map',
  data () {
    return {
      detailData: [{
        address: '北京',
        time: '2017.03.16 09:12:53',
        type: '沙尘暴',
        grade: '危急',
        description: '北京地区发生强大沙尘暴'
      }],
      lineChartOption: dynamicOption,
      selectedAddress: 0,
      address: address,
      startTime: '',
      endTime: ''
    }
  },
  methods: {
    drawMap () {
      let myChart = echarts.init(document.getElementById('main'))
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
        this.lineChartOption.title.text = `地区：${params.name}，竖轴：灾害类型，横轴：时间`
        this.drawLineChart()
      })
    },
    drawLineChart () {
      let dynamicChart = echarts.init(document.getElementById('dynamic'))
      dynamicChart.setOption(this.lineChartOption)
      setInterval(function () {
        for (var i = 0; i < 6; i++) {
          dynamicData.shift();
          dynamicData.push(randomData());
        }
        dynamicChart.setOption({
          series: [{
            data: dynamicData
          }]
        });
      }, 2000);
    },
    getNowTime () {
      let now = new Date()
      return `${now.getFullYear()}.${now.getMonth() + 1}.${now.getDay()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`
    }
  },
  mounted () {
    this.drawMap()
    this.drawLineChart()
  }
}
