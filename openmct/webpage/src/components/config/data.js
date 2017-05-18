/**
 * Created by ytftianwen on 2017/5/2.
 */
let configData = {
  type: [{
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
  }]

}
export default configData
