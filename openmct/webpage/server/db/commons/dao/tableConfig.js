/**
 * Created by ytftianwen on 2017/5/3.
 */
let tableConfig = {
  tables: ['disaster_type', 'scope_limit', 'variable', 'factor', 'address'],
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
    }],
    address: [{
      value: 'province',
      type: 'string'
    },{
      value: 'city',
      type: 'string'
    },{
      value: 'area',
      type: 'string'
    },{
      value: 'longitude',
      type: 'int'
    },{
      value: 'latitude',
      type: 'int'
    },{
      value: 'disasterLevel',
      type: 'int'
    }]
  },
  tableName: {
    disaster_type: 'disaster_type',
    scope_limit: 'scope_limit',
    variable: 'variable',
    factor: 'factor',
    address: 'address'
  }
}
module.exports = tableConfig
