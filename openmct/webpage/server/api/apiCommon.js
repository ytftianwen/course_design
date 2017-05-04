/**
 * Created by ytftianwen on 2017/5/3.
 */
const express = require('express')
const stringify = require('json-stringify-safe');
const bodyParser = require('body-parser')
const dbOperate = require('../db/commons/tableOperate')
const jsonParser = bodyParser.json()
// const urlencodedParser = bodyParser.urlencoded({extended: false})
const router = express.Router()

let routerFn = function (tableName) {
  router.get('/'+tableName+'/all', (req, res) => {
    // res.header('Access-Control-Origin', '*');
    dbOperate.queryAll(tableName).then(function (data) {
      res.json({data:data})
    })
  })
  router.post('/addUser', jsonParser, (req, res) => {
    // res.header('Access-Control-Origin', '*');
    res.json({age:22})
  })
  return router
}

module.exports = routerFn
