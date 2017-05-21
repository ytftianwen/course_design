/**
 * Created by ytftianwen on 2017/5/21.
 */
import http from '../../../utils/http'

let url = {
  urlSystemConfig: ''
}

let httpModel = {
  systemPost(param){
    return http.post(url.urlSystemConfig, param)
      .then(res => res)
  }
}

export default httpModel
