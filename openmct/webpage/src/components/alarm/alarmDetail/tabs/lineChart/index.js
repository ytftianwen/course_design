/**
 * Created by ytftianwen on 2017/5/2.
 */
import template from './view.html'
import style from './style.css'
import echart from 'echarts'
import option from './model'
import httpModel from './httpModel'
import {mapGetters} from 'vuex'
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
      },
      chartOptions: [],
      lineChartTypes: []
    }
  },
  computed: {
    ...mapGetters({
      disasterType: 'getAlarmType'
    })
  },
  watch: {
    'disasterType'(){
      this.switchOptions()
    }
  },
  methods: {
    switchOptions(){
      this.chartOptions = []
      this.chartOptions.push({
        title: '次声波',
        key: 'earthquake',
        // realData: item[key].values,
        realData: [450, 400, 500, 378, 530, 560, 610]
      },{
        title: '水位及雨量',
          key: 'earthquake',
          // realData: item[key].values,
          realData: [400, 340, 450, 378, 500, 460, 550]
      })
      // httpModel.getParams(this.disasterType)
      //   .then(res => {
      //     res.forEach(item => {
      //       let key = Object.keys(item)[0]
      //       this.chartOptions.push({
      //         title: item[key].name,
      //         key: key,
      //         // realData: item[key].values,
      //         realData: [450, 400, 500, 378, 530, 560, 610]
      //       })
      //     })
      //   })
    },
    init(){
      this.switchOptions()
    }
  },
  mounted(){
    this.init()
  }
}
