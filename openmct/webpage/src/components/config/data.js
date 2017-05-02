/**
 * Created by ytftianwen on 2017/5/2.
 */
let configData = {
  type: [{
    name: '地震',
    value: 'earthquake',
    params: ['流体波', '地磁', '次声波', '地声', '温度', '深井流体', '浅井流体', '天然地电位', '时纬残差'],
    paramsAfter:['震后破坏场景图像','地震谱烈度','温度','烟气浓度','毒气浓度']
  }, {
    name: '滑坡',
    value: 'landslide',
    params: ['位移', '倾斜', '含水率', '土压力', '水位及雨量'],
    paramsAfter:[]
  }, {
    name: '泥石流',
    value: 'debris_flow',
    params: ['雨量', '泥石流地声', '泥位和泥石流物源位移'],
    paramsAfter:[]
  }, {
    name: '水环境',
    value: 'water',
    params: ['水温', 'COD', 'pH值', '浊度', '溶解氧', '电导率', '高锰酸盐指数', '氨氮', '叶绿素a', '总磷', '总氮', '总有机碳'],
    paramsAfter:[]
  }, {
    name: '大气环境',
    value: 'atmosphere',
    params: ['可吸入颗粒物（PM5,PM10', '二氧化硫', '二氧化氮'],
    paramsAfter:[]
  }, {
    name: '森林与草原火灾',
    value: 'forest_fire',
    params: ['温度', '湿度', '降水', '风速', '风向', '载量'],
    paramsAfter:['热辐射','蔓延变化']
  }, {
    name: '洪涝',
    value: 'floods',
    params: ['土壤水分','逐日降水量','作物光谱','作物长势'],
    paramsAfter:[]
  }, {
    name: '旱灾',
    value: 'drought',
    params: ['土壤水分','作物光谱','作物冠层温度','作物长势','逐日降水量'],
    paramsAfter:[]
  }, {
    name: '低温冷冻',
    value: 'freezing',
    params: ['逐日最高温度','逐日最低温度','作物光谱','作物长势'],
    paramsAfter:[]
  }]

}
export default configData
