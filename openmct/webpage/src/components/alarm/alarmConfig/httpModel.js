/**
 * Created by ytftianwen on 2017/5/4.
 */
import http from '../../../utils/http'
let url = {
  urlGetDisasterTypes: '/disaster_type/all',
  urlGetDisasterVariables: '/variable/all',
  urlGetDisasterLimits: '/scope_limit/all',
  urlPostConfig: '/alarm_config'
}
let httpModel = {
  getDisasterTypes(){
    return http.get(url.urlGetDisasterTypes)
      .then(res => res.data)
  },
  getVariables(param){
    return http.get(url.urlGetDisasterVariables, param)
      .then(res => {
        let arr = []
        res.data.forEach(item => {
          arr.push({
            name: item.name,
            key: item.value,
            level: item.level
          })
        })
        return arr
      })
  },
  getLimits(param = {variableLevel: 0}){
    return http.get(url.urlGetDisasterLimits, param)
      .then(res => res.data)
  },
  subConfig(params){
    return http.post(url.urlPostConfig, params)
      .then(res => res)
  }
}
export default httpModel
