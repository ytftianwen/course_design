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
    $('#news tr').each(function () {
      let temp = []
      $(this).find('th').each(function () {
        msg.header.push($(this).text())
      })
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
    resolve(msg)
  })
})

module.exports = promise
