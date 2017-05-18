/**
 * Created by ytftianwen on 2017/5/4.
 */
import http from '../../../../utils/http'
import tableData from '../../../config/data'
let url = {
  urlGetParams: '/line_chart_data'
}
let httpModel = {
  getParams(tableName) { // 根据灾害类型获取数据
    return http.get('/' + tableName + url.urlGetParams)
      .then(res => {
        let result = []
        let tempData = res.data.splice(0)
        tempData.forEach(item => {
          delete item.id
          delete item.createdAt
          delete item.updatedAt
        })
        let tempKeys = tempData[0] || {}
        Object.keys(tempKeys).forEach(val => {
          result.push({
            [val]: {
              name: '',
              values: [],
              key: val
            }
          })
        })
        let typeObj = tableData.type.find(item => {
          return item.value === tableName
        })
        typeObj.params.forEach(item => {
          result.forEach(val => {
            if (Object.keys(val)[0] === item.key){
              val[item.key]['name'] = item.name
            }
          })
        })
        result.forEach(item => {
          let key = Object.keys(item)[0]
          tempData.forEach(obj => {
            item[key].values.push(obj[key])
          })
        })
        return result
      })
  }
}
export default httpModel
// result结构 =[
//  {
//    "rainFall": {
//      "name": "",
//      "values": [],
//      "key": "rainFall"
//    }
//  },
//    {
//      "debrisSound": {
//        "name": "",
//        "values": [],
//        "key": "debrisSound"
//      }
//    },
//    {
//      "debrisDisplacement": {
//        "name": "",
//        "values": [],
//        "key": "debrisDisplacement"
//      }
//    }
//  ]
