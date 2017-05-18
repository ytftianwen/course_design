/**
 * Created by ytftianwen on 2017/5/18.
 */
import http from '../../utils/http'
let url = {
  urlGetDisasterTypes: '/disaster_type/all',
}
let httpModel = {
  getDisasterTypes(){
    return http.get(url.urlGetDisasterTypes)
      .then(res => res.data)
  }
}
export default httpModel
