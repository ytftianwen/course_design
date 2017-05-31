/**
 * Created by ytftianwen on 2017/5/4.
 */
import http from '../../../../../utils/http'
import tableData from '../../../alarmConfig/data'
let url = {
  urlGetParams: '/line_chart'
}
let httpModel = {
  getParams(params) { // 根据灾害类型获取数据
    return http.get(url.urlGetParams, params)
      .then(res => {
        let result = []
        let variableLevelArr = []
        res.data.forEach(item => {
          variableLevelArr.push(item.variableLevel)
        })
        variableLevelArr = [...new Set(variableLevelArr)]
        variableLevelArr.forEach(val => {
          let realData = []
          let title = ''
          let topLimit = []
          let floorLimit = []
          res.data.forEach(item => {
            if (item.variableLevel === val) {
              realData.push(item.factor)
              title = item.title
              topLimit.push(item.topLimit)
              floorLimit.push(item.floorLimit)
            }
          })
          result.push({
            title: title,
            realData: realData,
            topLimit: topLimit,
            floorLimit: floorLimit
          })
        })
        return result
      })
  }
}
export default httpModel
// result结构 =[{
//   title: '位移量',
//   realData: [300,230,400,350,430,520,340], //实际值
//   topLimit: [800,800,800,800,800,800,800], //上限
//   floorLimit: [300,300,300,300,300,300,300] //下限
//  }]
