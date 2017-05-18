/**
 * Created by ytftianwen on 2017/5/4.
 */
const Sequelize = require('sequelize');
const dbConfig = require('./dao/dbConfig');
const tableConfig = require('./dao/tableConfig')

let sequelize = new Sequelize(
  dbConfig.dbName,
  dbConfig.dbUser,
  dbConfig.dbPW,
  {
    host: dbConfig.dbHost,
    dialect: dbConfig.dbType
  });
let seqCommon = function (tableName) {
  let param = {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      unique: true
    }
  }
  tableConfig.tableField[tableName].forEach(item => {
    let type = item.type === 'int' ? Sequelize.INTEGER : Sequelize.STRING
    param[item.value] = {
      type: type
    }
  })
  return sequelize.define(tableName, param)
}
module.exports = seqCommon;
