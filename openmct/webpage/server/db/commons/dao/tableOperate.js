/**
 * Created by ytftianwen on 2017/5/4.
 */
const seqCommon = require('../sequelizeModel')
class TableOperate {
  addField(tableName, params) { //添加字段
    console.log(tableName)
    console.log(params)
    let seqModel = seqCommon(tableName)
    return seqModel.create(params)
  }

  deleteField(tableName, params) { // 删除字段
    let seqModel = seqCommon(tableName)
    return seqModel.destroy({
      'where': params
    })
  }

  queryAll(tableName) { // 查询所有
    let seqModel = seqCommon(tableName)
    return seqModel.findAll()
  }
  queryByLimit(tableName, limit) { // 通过条件查询
    let seqModel = seqCommon(tableName)
    return seqModel.findAll({
      where: limit
    })
  }
}
module.exports = new TableOperate()
