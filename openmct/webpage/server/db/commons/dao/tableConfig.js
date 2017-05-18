/**
 * Created by ytftianwen on 2017/5/3.
 */
let tableConfig = {
  tables: ['disaster_type', 'scope_limit', 'variable'],
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
    }],
    scope_limit: [{
      value: 'topLimit',
      type: 'int'
    },{
      value: 'floorLimit',
      type: 'int'
    },{
      value: 'belongLevel',
      type: 'int'
    }],
    variable: [{
      value: 'name',
      type: 'string'
    },{
      value: 'value',
      type: 'string'
    },{
      value: 'level',
      type: 'int'
    },{
      value: 'belongLevel',
      type: 'int'
    }]
  }
}
module.exports = tableConfig
