/**
 * Created by ytftianwen on 2017/5/18.
 */
const request = require('request')
const cheerio = require('cheerio')
let promise = new Promise(function (resolve, reject) {
  let url = 'http://www.ceic.ac.cn/'
  let msg = {
    header: [],
    body: []
  }
  request(url, function (err, res, body) {
    if(err){
      reject(err)
      return
    }
    let $ = cheerio.load(body)
    let thTemp = []
    $('#news tr').find('th').each(function () {
      thTemp.push($(this).text())
    })
    msg.header.push({
      prop: 'level',
      label: thTemp[0]
    },{
      prop: 'time',
      label: thTemp[1]
    },{
      prop: 'longitude',
      label: thTemp[2]
    },{
      prop: 'latitude',
      label: thTemp[3]
    },{
      prop: 'depth',
      label: thTemp[4]
    },{
      prop: 'location',
      label: thTemp[5]
    })
    $('#news tr').each(function () {
      let temp = []

      $(this).find('td').each(function () {
        temp.push($(this).text())
      })
      msg.body.push({
        level: temp[0],
        time: temp[1],
        longitude: temp[2],
        latitude: temp[3],
        depth: temp[4],
        location: temp[5],
        markLevel: temp[0] >= 6
      })
    })
    msg.body.splice(0,1)
    resolve(msg)
  })
})

module.exports = promise
