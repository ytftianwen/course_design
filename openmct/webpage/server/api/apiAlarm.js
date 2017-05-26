/**
 * Created by ytftianwen on 2017/5/22.
 */
const express = require('express')
const bodyParser = require('body-parser')
const Promise = require('bluebird')
const dbOperate = require('../db/commons/dao/tableOperate')
const tableConfig = require('../db/commons/dao/tableConfig')
const router = express.Router()
const jsonPaser = bodyParser.json()

let routerFn = function () {
  router.post('/alarm_config', jsonPaser, function (req, res) {
    let variableArr = []
    let factorArr = []
    let configParams = req.body
    let addressObj = {
      province: configParams.location.selectedProvince,
      city: configParams.location.selectedCity,
      area: configParams.location.selectedArea,
      longitude: configParams.location.longitude,
      latitude: configParams.location.latitude,
      disasterLevel: configParams.disasterLevel
    }
    configParams.variable.forEach(item => {
      variableArr.push({
        name: item.name,
        level: item.variableLevel,
        disasterLevel: configParams.disasterLevel
      })
      factorArr.push({
        factor: item.factorVal,
        disasterLevel: configParams.disasterLevel,
        variableLevel: item.variableLevel
      })
    })
    let promiseAdd = dbOperate.addField(tableConfig.tableName.address, addressObj)
      .then(() => {
        Promise.map(variableArr, (variableItem) => {
          return dbOperate.addField(tableConfig.tableName.variable, variableItem)
        })
        Promise.map(factorArr, (factorItem)=>{
          return dbOperate.addField(tableConfig.tableName.factor, factorItem)
        })
      })
    promiseAdd.then((data) => {
      res.json({data: data, status: 200, msg: 'ok'})
    })
      .catch(err => {
        res.json({data: err, status: 201, msg: 'error'})
      })
  })
  router.get('/line_chart', function (req, res) {
    let disasterLevel = 0
    dbOperate.queryByLimit('factor', {disasterLevel: disasterLevel})
      .then(factorData => {
        factorData = JSON.parse(JSON.stringify(factorData))
        dbOperate.queryByLimit('variable', {
          disasterLevel: disasterLevel
        })
          .then(variableData => {
            variableData = JSON.parse(JSON.stringify(variableData))
            factorData.forEach(item => {
              let obj = variableData.find(val => item.variableLevel === val.level)
              item.title = obj.name
            })
            res.json({data: factorData})
          }, err => {
            res.json({err: err, data: []})
          })
      }, err => {
        res.json({err: err, data: []})
      })
  })
  return router
}

module.exports = routerFn
