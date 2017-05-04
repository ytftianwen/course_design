/**
 * Created by ytftianwen on 2017/5/4.
 */
import http from '../../utils/http'
let url = {
  urlSubConfig: '/systemConfig/'
}
let httpModel = {
  subConfig(params, tableName){
    return http.post(url.urlSubConfig + tableName, params)
      .then(res => res)
  }
}
export default httpModel
