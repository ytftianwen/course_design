/**
 * Created by ytftianwen on 2017/5/21.
 */
import http from '../../../utils/http'

let url = {
  urlGetDisasterType: '/disaster_type/all',
  urlSystemConfig: '/system_config'
}

let httpModel = {
  getDisasterTypesMaxLevel(){
    console.log('url.urlGetDisasterTypes', url.urlGetDisasterType)
    return http.get(url.urlGetDisasterType)
      .then(res => {
        let arrLevel = []
        res.data.forEach(item=>{
          arrLevel.push(item.disasterLevel)
        })
        return Math.max(...arrLevel)
      })
  },
  systemPost(param){
    return http.post(url.urlSystemConfig, param)
      .then(res => res)
  }
}

export default httpModel
