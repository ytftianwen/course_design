/**
 * Created by ytftianwen on 2017/4/24.
 */
// import Vue from 'vue'
import template from './view.html'
import style from './style.css'
let model = {
  style,
  template,
  data(){
    return {
      imgs: [],
      showIndex: 24,
      count: 0
    }
  },
  computed:{

  },
  methods: {
    onSlideChangeStart(){
    },
    onSlideChangeEnd(){
    },
    init(){
      for (let i = 0; i < 24; i++) {
        this.imgs.push({
          url: '/static/imgs/'+i + '.jpg',
          style: {
            left: i * 620
          }
        })
      }
      setInterval(()=>{
        this.showIndex = this.count % 24
        this.count++
        if(this.count >= 24) this.count = 0
      }, 1000)
    }
  },
  mounted(){
    this.init()
  }
}
export default model
