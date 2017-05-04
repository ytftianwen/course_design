/**
 * Created by ytftianwen on 2017/5/4.
 */
const seqCommon = require('./sequelizeModel')
class TableOperate {
  addField(tableName, params) { //添加字段
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

  queryById(tableName, id) { // 通过id查询
    let seqModel = seqCommon(tableName)
    return seqModel.findAll({
      where: {
        id: id
      }
    })
  }
}
module.exports = new TableOperate()
