/**
 * Created by ytftianwen on 2017/5/3.
 */
const express = require('express')
const app = express()
const cors = require('cors')
const apiCommon = require('./api/apiCommon')
const apiSpider = require('./api/realSpider/apiSpider')
const tableConfig = require('./db/commons/dao/tableConfig') // 数据库的表名数组
const spiderConfig = require('./commons/spiderConfig')
app.use(cors()) // 允许跨域

tableConfig.tables.forEach(function (item) {
  app.use('/api', apiCommon(item))
})

spiderConfig.types.forEach(function (item) {
  app.use('/spider', apiSpider(item))
})

var server = app.listen(8899, function () {
  console.log('express listening at ', server.address().port)
})
