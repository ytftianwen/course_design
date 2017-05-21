/**
 * Created by ytftianwen on 2017/4/23.
 */
let routers = {
  real: [{
    path: '/',
    text: '灾害实时详情'
  },{
    path: '/real/entry',
    text: '实时详情录入'
  }],
  alarm: [{
    path: '/alarm',
    text: '灾害预警详情'
  }, {
    path: '/config/alarm',
    text: '预警参数配置'
  }],
  config:[{
    path: '/config/system',
    text: '系统参数配置'
  }]
}
export default routers
