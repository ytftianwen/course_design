/**
 * Created by ytftianwen on 2017/5/1.
 */
import template from './view.html'
import style from './style.css'
import provinces from '../../../commons/provinces'
import httpModel from './httpModel'
export default {
  template,
  style,
  data(){
    return {
      provinces: provinces,
      currentCities: provinces[0].city,
      currentArea: provinces[0].city[0].area,
      selectedLocation:{
        selectedProvince: '北京',
        selectedCity: '北京',
        selectedArea: provinces[0].city[0].area[0],
        longitude: '',
        latitude: ''
      },
      disasterTypes: [],
      chooseType: '',
      configParams: [],
      configResult: {},
      fileList: [],
      factorList: [],
      factorParam:[],
      disasterLevel: 0,
      dialogVisible: false,
      editLimitParam: {
        topLimit: '',
        floorLimit: ''
      }
    }
  },
  watch: {
    'selectedLocation.selectedProvince': function () {
      let obj = this.provinces.find(item => {
        return item.name === this.selectedLocation.selectedProvince
      })
      this.currentCities = obj.city
      this.selectedLocation.selectedCity = this.currentCities[0].name
      this.currentArea = this.currentCities[0].area
      this.selectedLocation.selectedArea = this.currentArea[0]
    },
    'selectedLocation.selectedCity': function () {
      let obj = this.currentCities.find(item => {
        return this.selectedLocation.selectedCity === item.name
      })
      this.currentArea = obj.area
      this.selectedLocation.selectedArea = this.currentArea[0]
    },
    'chooseType' () {
      let obj = this.disasterTypes.find((item, index) => {
        if(item.value === this.chooseType) this.disasterLevel = index
        return item.value === this.chooseType
      })
      this.disasterLevel = obj.disasterLevel
      this.switchVariable(obj.disasterLevel)
    }
  },
  methods: {
    editLimit(variableLevel, index){
      this.dialogVisible = true
      let obj = this.factorList[index]
      this.editLimitParam.topLimit = obj.topLimit
      this.editLimitParam.floorLimit = obj.floorLimit
      this.editLimitParam.variableLevel = variableLevel
      this.editLimitParam.disasterLevel = this.disasterLevel
    },
    editLimitConfirm(){
      httpModel.editLimit(this.editLimitParam)
        .then(()=>{
          this.$message({
            message: `修改成功`,
            type: 'success'
          })
          this.dialogVisible = false
        })
        .catch(()=>{
          this.$message({
            message: `修改失败,请稍后重试`,
            type: 'warning'
          })
        })
    },
    submitConfig(){
      this.configResult['disasterLevel'] = this.disasterLevel
      this.configResult['variable'] = this.configParams
      this.configResult['location'] = this.selectedLocation
      httpModel.subConfig(this.configResult)
        .then(res => {
          console.log('***', res)
        })
        .catch(err => {
          console.log('&&&&', err)
        })
    },
    switchVariable(disasterLevel = 0){
      httpModel.getVariables({disasterLevel: disasterLevel})
        .then(res => {
          this.configParams = res
          this.getLimit()
        })
    },
    getLimit() {
      httpModel.getLimits({disasterLevel: this.disasterLevel})
        .then(res => {
          this.factorList = []
          this.configParams.forEach(item => {
            item.factorVal = ''
            let obj = res.find(o => {
              return o.variableLevel === item.variableLevel
            })
            this.factorList.push({
              val: item.variableLevel,
              topLimit: obj.topLimit,
              floorLimit: obj.floorLimit
            })
          })
        })
    },
    init(){
      httpModel.getDisasterTypes().then(res => {
        this.disasterTypes = res
        this.chooseType = this.disasterTypes[0].value
      })
    }
  },
  created(){
    this.init()
  }
}
