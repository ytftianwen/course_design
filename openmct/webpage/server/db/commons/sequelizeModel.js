/**
 * Created by ytftianwen on 2017/5/4.
 */
const Sequelize = require('sequelize');
const dbConfig = require('./dbConfig');
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
  let temp = sequelize.define(tableName, param)
  temp.sync({force: false})
  return temp
}
module.exports = seqCommon;
