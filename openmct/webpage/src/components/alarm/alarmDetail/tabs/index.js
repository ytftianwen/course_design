/**
 * Created by ytftianwen on 2017/5/11.
 */
import template from './view.html'
import style from './style.css'
import viewMap from './map/index'
import lineChart from './lineChart/index'
import swiper from './swiper/index'
export default {
  template,
  style,
  components: {
    lineChart,
    swiper,
    viewMap
  },
  data(){
    return {
      activeDisasterPanel: 'earthquake',
      disasterPanel:[{
        label: '地震',
        name: 'earthquake',
      },{
        label: '泥石流',
        name: 'flood',
      }],
      activeModePanel: 'map',
      modePanels: [{
        label: '地图模式',
        name: 'map',
        component: viewMap
      }, {
        label: '云图模式',
        name: 'img',
        component: swiper
      }, {
        label: '折线图模式',
        name: 'chart',
        component: lineChart
      }]
    }
  },
  methods: {
    switchDisaster(){},
    switchMode(){
    }
  }
}
