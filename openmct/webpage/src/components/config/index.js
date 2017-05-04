/**
 * Created by ytftianwen on 2017/5/1.
 */
import template from './view.html'
import style from './style.css'
import provinces from '../../commons/provinces'
import disasterTypes from './data'
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
      disasterTypes: disasterTypes.type,
      chooseType: 'earthquake',
      configParams: disasterTypes.type[0].params,
      configResult: {},
      fileList: []
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
    'chooseType': function () {
      console.log(this.chooseType)
      let obj = this.disasterTypes.find(item=>{
        return this.chooseType === item.value
      })
      this.configParams = obj.params
    }
  }
}
