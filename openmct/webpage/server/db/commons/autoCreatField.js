/**
 * Created by ytftianwen on 2017/5/4.
 */
const Sequelize = require('sequelize');
let autoField = function (fieldObj) {
  let result = {
    id: {type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true, unique: true},
  }
  for(let key in fieldObj){
    if (!isNaN(fieldObj[key])){ // 数字类型
      result[key] = Sequelize.INTEGER
    } else if (typeof fieldObj === 'string'){
      result[key] = Sequelize.STRING
    }
  }
  return result
}
module.exports = autoField
