/**
 * Created by ytftianwen on 2017/5/5.
 */
import template from './view.html'
import style from './style.css'
import typesData from '../../alarmConfig/data'
export default {
  template,
  style,
  data(){
    return{
      typesArr: [],
      currentIndex: 0
    }
  },
  competed:{
    'currentType': function () {
      return this.typesArr[this.currentIndex].name
    },
    'btnType': function () {
      return 'info'?this.currentIndex === index: ''
    }
  },
  methods:{
    switchType(index){
      this.currentIndex = index
      this.$store.dispatch('setAlarmType', this.typesArr[this.currentIndex].value)
    },
    init(){
      typesData.type.forEach(item=>{
        this.typesArr.push({
          name: item.name,
          value: item.value
        })
      })
    }
  },
  mounted(){
    this.init()
  }
}
