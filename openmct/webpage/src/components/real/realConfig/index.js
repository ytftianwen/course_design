/**
 * Created by ytftianwen on 2017/5/21.
 */
import template from './view.html'
import httpModel from './httpModel'
export default {
  template,
  data(){
    return{
      disasterTypes: [],
      choseType: '',
      factorObj: {
        0:[{
          val: 'level',
          text: '震级'
        },{
          val: 'depth',
          text: '深度'
        },{
          val: 'longitude',
          text: '经度'
        },{
          val: 'latitude',
          text: '维度'
        },{
          val: 'location',
          text: '参考位置'
        }]
      },
      formObj: {
        0:{
          depth: "",
          latitude: "",
          level: "",
          location: "",
          longitude: "",
          markLevel: false,
          time: ""
        }
      }
    }
  },
  computed: {
    'formLabelAlign' () {
      return this.formObj[this.choseType]
    },
    'currentFactorArr'(){
      return this.factorObj[this.choseType]
    }
  },
  methods:{
    init(){
      httpModel.getDisasterTypes()
        .then(res=>{
          this.disasterTypes = res
          this.choseType = res[0].level
        })
    }
  },
  mounted(){
    this.init()
  }
}
