/**
 * Created by ytftianwen on 2017/4/24.
 */
// import Vue from 'vue'
import template from './view.html'
import style from './style.css'
// import Swiper from 'vue-swiper'
// Vue.use(Swiper)
export default {
  style,
  template,
  components: {
    // Swiper
  },
  data(){
    return {
      imgs: [],
      showIndex: 24,
      count: 0
    }
  },
  methods: {
    onSlideChangeStart(){
    },
    onSlideChangeEnd(){
    },
    init(){
      for (let i = 0; i < 25; i++) {
        this.imgs.push({
          url: require('../../../assets/imgs/' + i + '.jpg'),
          style: {
            left: i * 620
          }
        })
      }
      setInterval(()=>{
        this.showIndex = this.count % 25
        this.count++
        if(this.count >= 25) this.count = 0
      }, 1000)
    }
  },
  mounted(){
    this.init()
  }
}
