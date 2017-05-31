/**
 * Created by ytftianwen on 2017/5/4.
 */
import http from '../../../utils/http'
let url = {
  urlGetDisasterTypes: '/disaster_type/all',
  urlGetDisasterVariables: '/variable/all',
  urlGetDisasterLimits: '/scope_limit/all',
  urlPostConfig: '/alarm_config',
  urlEditLimit: '/scope_limit/edit'
}
let httpModel = {
  getDisasterTypes(){
    return http.get(url.urlGetDisasterTypes)
      .then(res => res.data)
  },
  getVariables(param){
    return http.get(url.urlGetDisasterVariables, param)
      .then(res => res.data)
  },
  getLimits(param = {variableLevel: 0}){
    return http.get(url.urlGetDisasterLimits, param)
      .then(res => res.data)
  },
  subConfig(params){
    return http.post(url.urlPostConfig, params)
      .then(res => res)
  },
  editLimit(params){
    return http.post(url.urlEditLimit, params)
      .then(res => res.data)
  }
}
export default httpModel
