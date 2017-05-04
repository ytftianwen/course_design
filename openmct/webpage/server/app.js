/**
 * Created by ytftianwen on 2017/5/3.
 */
const express = require('express')
const app = express()
const cors = require('cors')
const apiCommon = require('./api/apiCommon')
const tables = require('./db/commons/tables') // 数据库的表名数组
app.use(cors()) // 允许跨域

tables.forEach(function (item) {
  app.use('/api', apiCommon(item))
})

var server = app.listen(8899, function () {
  console.log('express listening at ', server.address().port)
})
