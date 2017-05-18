/**
 * Created by ytftianwen on 2017/5/1.
 */
import template from './view.html'
import style from './style.css'
import provinces from '../../commons/provinces'
import httpModel from './httpModel'
export default {
  template,
  style,
  data(){
    return {
      selectedProvince: '北京',
      provinces: provinces,
      currentCities: provinces[0].city,
      selectedCity: '北京',
      currentArea: provinces[0].city[0].area,
      selectedArea: provinces[0].city[0].area[0],
      disasterTypes: [],
      chooseType: '',
      configParams: [],
      configResult: {},
      fileList: [],
      factorList: [],
      typeLevel: 0
    }
  },
  watch: {
    'selectedProvince': function () {
      let obj = this.provinces.find(item => {
        return item.name === this.selectedProvince
      })
      this.currentCities = obj.city
      this.selectedCity = this.currentCities[0].name
      this.currentArea = this.currentCities[0].area
      this.selectedArea = this.currentArea[0]
    },
    'selectedCity': function () {
      let obj = this.currentCities.find(item => {
        return this.selectedCity === item.name
      })
      this.currentArea = obj.area
      this.selectedArea = this.currentArea[0]
    },
    'chooseType' () {
      let obj = this.disasterTypes.find((item, index) => {
        if(item.value === this.chooseType) this.typeLevel = index
        return item.value === this.chooseType
      })
      this.switchVariable(obj.level)
    }
  },
  methods: {
    submitConfig(){
      console.log('7777', JSON.stringify(this.configResult, null, 2))
      this.configResult['province'] = this.selectedProvince
      this.configResult['city'] = this.selectedCity
      this.configResult['area'] = this.selectedArea
      let obj = this.disasterTypes.find(item => {
        return item.value === this.chooseType
      })
      let configType = {
        value: this.chooseType,
        name: obj.name
      }
      let param = {
        params: this.configResult,
        configType: configType
      }
      httpModel.subConfig(param, this.chooseType)
        .then(res => {
          console.log('***', res)
        })
        .catch(err => {
          console.log('&&&&', err)
        })
    },
    switchVariable(belongLevel = 0){
      httpModel.getVariables({belongLevel: belongLevel})
        .then(res => {
          this.configParams = res
          this.getLimit()
        })
    },
    getLimit() {
      httpModel.getLimits({typeLevel: this.typeLevel})
        .then(res => {
          this.factorList = []
          this.configParams.forEach(item => {
            let obj = res.find(o => {
              return o.belongLevel === item.level
            })
            this.factorList.push({
              val: '',
              topLimit: obj.topLimit,
              floorLimit: obj.floorLimit
            })
          })
          console.log('this.factorList;;;', JSON.stringify(this.factorList, null, 2))
        })
    },
    init(){
      httpModel.getDisasterTypes().then(res => {
        this.disasterTypes = res
        this.chooseType = this.disasterTypes[0].value
      })
    }
  },
  mounted(){
    this.init()
  }
}
