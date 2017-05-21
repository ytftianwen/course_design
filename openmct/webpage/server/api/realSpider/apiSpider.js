/**
 * Created by ytftianwen on 2017/5/18.
 */
const express = require('express')
const router = express.Router()
const spiderEarthquake = require('./spiderEarthquake')
let routerFn = function (spiderType) {
  router.get('/', function (req, res) {
    spiderEarthquake.then(function (data) {
      res.json({data: data})
    })
      .catch(function (err) {
        res.json({err: err})
      })
  })
  return router
}
module.exports = routerFn
