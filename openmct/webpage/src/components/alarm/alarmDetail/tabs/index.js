/**
 * Created by ytftianwen on 2017/5/11.
 */
import template from './view.html'
import style from './style.css'
import viewMap from './map'
import lineChart from './lineChart/index'
import swiper from './swiper/index'
export default {
  template,
  style,
  components:{
    lineChart,
    swiper,
    viewMap
  },
  data(){
    return{
      btnTabs: ['地图模式', '云图模式', '折线图'],
      currentIndex: 0
    }
  }
}
