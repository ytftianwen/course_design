/**
 * Created by ytftianwen on 2017/5/3.
 */
const express = require('express')
const stringify = require('json-stringify-safe');
const bodyParser = require('body-parser')
const dbOperate = require('../db/commons/dao/tableOperate')
const jsonParser = bodyParser.json()
const router = express.Router()

let routerFn = function (tableName) {
  router.get('/' + tableName + '/all', (req, res) => {
    if (Object.keys(req.query).length <= 0) {
      dbOperate.queryAll(tableName).then(function (data) {
        res.json({data: data})
      })
    } else {
      dbOperate.queryByLimit(tableName, req.query).then(function (data) {
        res.json({data: data})
      })
    }
  })
  router.post('/' + tableName + '/systemConfig', jsonParser, (req, res) => {
    let configParams = req.body
    dbOperate.addField(configParams.configType.value, configParams.params)
      .then(function (data) {
        res.json({data: data})
      })
      .catch(function (err) {
        res.json({err: err})
      })
  })
  return router
}

module.exports = routerFn
