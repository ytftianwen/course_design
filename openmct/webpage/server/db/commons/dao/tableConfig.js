/**
 * Created by ytftianwen on 2017/5/3.
 */
let tableConfig = {
  tables: ['disaster_type', 'scope_limit', 'variable', 'factor'],
  tableField:{
    disaster_type:[{
      value: 'value',
      type: 'string'
    },{
      value: 'level',
      type: 'int'
    },{
      value: 'name',
      type: 'string'
    },{
      value: 'hasMap',
      type: 'int'
    },{
      value: 'hasImg',
      type: 'int'
    },{
      value: 'hasChart',
      type: 'int'
    }],
    scope_limit: [{
      value: 'topLimit',
      type: 'int'
    },{
      value: 'floorLimit',
      type: 'int'
    },{
      value: 'disasterLevel',
      type: 'int'
    },{
      value: 'variableLevel',
      type: 'int'
    }],
    variable: [{
      value: 'name',
      type: 'string'
    },{
      value: 'level',
      type: 'int'
    },{
      value: 'disasterLevel',
      type: 'int'
    }],
    factor: [{
      value: 'factor',
      type: 'int'
    },{
      value: 'disasterLevel',
      type: 'int'
    },{
      value: 'variableLevel',
      type: 'int'
    }]
  }
}
module.exports = tableConfig
