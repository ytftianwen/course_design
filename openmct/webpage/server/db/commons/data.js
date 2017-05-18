/**
 * Created by ytftianwen on 2017/5/4.
 */
/**
 * Created by ytftianwen on 2017/5/2.
 */
let configData = {
  type: [{
    name: '地震',
    value: 'earthquake',
    params: [{
      name:'流体波',
      key: 'fluidWave'
    },{
      name:'地磁',
      key: 'geomagnetic'
    },{
      name:'次声波',
      key: 'infrasound'
    },{
      name:'地声',
      key: 'toSound'
    }, {
      name:'温度',
      key: 'toSound'
    },{
      name:'深井流体',
      key: 'deepFluid'
    },{
      name:'浅井流体',
      key: 'shallowFluid'
    }, {
      name:'天然地电位',
      key: 'naturalPotential'
    },{
      name:'时纬残差',
      key: 'timeDifference'
    }],
    paramsAfter:[{
      name:'震后破坏场景图像',
      key: 'sceneImage'
    },{
      name:'地震谱烈度',
      key: 'intensity'
    }, {
      name:'温度',
      key: 'temperature'
    },{
      name:'烟气浓度',
      key: 'flueGasConcentration'
    },{
      name:'毒气浓度',
      key: 'gasConcentration'
    }]
  }, {
    name: '滑坡',
    value: 'landslide',
    params: [{
      name:'位移',
      key: 'displacement'
    },{
      name:'倾斜',
      key: 'tilt'
    },{
      name:'含水率',
      key: 'moistureContent'
    },{
      name:'土压力',
      key: 'earthPressure'
    }, {
      name:'水位及雨量',
      key: 'waterLevel'
    }],
    paramsAfter:[]
  }, {
    name: '泥石流',
    value: 'debris_flow',
    params: [{
      name:'雨量',
      key: 'rainFall'
    },{
      name:'泥石流地声',
      key: 'debrisSound'
    }, {
      name:'泥位和泥石流物源位移',
      key: 'debrisDisplacement'
    }],
    paramsAfter:[]
  }, {
    name: '水环境',
    value: 'water',
    params: [{
      name:'水温',
      key: 'waterTemperature'
    },{
      name:'COD',
      key: 'cod'
    }, {
      name:'pH值',
      key: 'ph'
    }, {
      name:'浊度',
      key: 'turbidity'
    },{
      name:'溶解氧',
      key: 'dissolvedOxygen'
    }, {
      name:'电导率',
      key: 'conductivity'
    },{
      name:'高锰酸盐指数',
      key: 'mn'
    },{
      name:'氨氮',
      key: 'nhn'
    }, {
      name:'叶绿素a',
      key: 'a'
    },{
      name:'总磷',
      key: 'p'
    },{
      name:'总氮',
      key: 'n'
    }, {
      name:'总有机碳',
      key: 'c'
    }],
    paramsAfter:[]
  }, {
    name: '大气环境',
    value: 'atmosphere',
    params: [{
      name:'可吸入颗粒物（PM5,PM10)',
      key: 'pm'
    },{
      name:'二氧化硫',
      key: 'so'
    }, {
      name:'二氧化氮',
      key: 'no'
    }],
    paramsAfter:[]
  }, {
    name: '森林与草原火灾',
    value: 'forest_fire',
    params: [{
      name:'温度',
      key: 'temperature'
    },{
      name:'湿度',
      key: 'humidity'
    }, {
      name:'降水',
      key: 'precipitation'
    },{
      name:'风速',
      key: 'windSpeed'
    },{
      name:'风向',
      key: 'windDirection'
    }, {
      name:'载量',
      key: 'Load'
    }],
    paramsAfter:['热辐射','蔓延变化']
  }, {
    name: '洪涝',
    value: 'floods',
    params: [{
      name:'土壤水分',
      key: 'soilMoisture'
    },{
      name:'逐日降水量',
      key: 'dailyPrecipitation'
    }, {
      name:'作物光谱',
      key: 'cropSpectrum'
    },{
      name:'作物长势',
      key: 'cropGrowth'
    }],
    paramsAfter:[]
  }, {
    name: '旱灾',
    value: 'drought',
    params: [{
      name:'土壤水分',
      key: 'soilMoisture'
    }, {
      name:'作物光谱',
      key: 'cropSpectrum'
    }, {
      name:'作物冠层温度',
      key: 'cropTemperature'
    },{
      name:'作物长势',
      key: 'cropGrowth'
    },{
      name:'逐日降水量',
      key: 'dailyPrecipitation'
    }],
    paramsAfter:[]
  }, {
    name: '低温冷冻',
    value: 'freezing',
    params: [{
      name:'逐日最高温度',
      key: 'topTemperature'
    }, {
      name:'逐日最低温度',
      key: 'lowTemperature'
    }, {
      name:'作物光谱',
      key: 'cropSpectrum'
    },{
      name:'作物长势',
      key: 'cropGrowth'
    }],
    paramsAfter:[]
  }]

}
module.exports = configData
