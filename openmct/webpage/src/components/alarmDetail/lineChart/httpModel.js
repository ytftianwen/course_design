/**
 * Created by ytftianwen on 2017/5/4.
 */
import http from '../../../utils/http'
let url = {
  urlGetParams: '/earthquake/all'
}
let httpModel = {
  getParams() {
    return http.get(url.urlGetParams)
  }
}
export default httpModel
