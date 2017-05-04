/**
 * Created by ytftianwen on 2017/5/4.
 */
const Sequelize = require('sequelize');
const dbConfig = require('./dbConfig');
const tables = require('./tables')
// const field = require('./autoCreatField')
let sequelize = new Sequelize(
  dbConfig.dbName,
  dbConfig.dbUser,
  dbConfig.dbPW,
  {
    host: dbConfig.dbHost,
    dialect: dbConfig.dbType
  });
let seqCommon = function (tableName,params) {
  let param = {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      unique: true
    }
  }
  params.forEach(function (item) {
    console.log('表名：'+tableName+'>>>>>'+item.key)
    param[item.key]= {
      type:Sequelize.INTEGER,
      field: item.key
    }
  })
  let temp = sequelize.define(tableName, param)
  temp.sync({force: true})
  return temp
}
tables.forEach(function (item) {
  seqCommon(item.value, item.params)
})
module.exports = seqCommon;
