/**
 * Created by ytftianwen on 2017/5/2.
 */
import moment from 'moment'
export const timeFormat = function() {
  let xData = []
  for(let i = 6;i >0;i--){
    xData.push(moment(moment().subtract(i, 's')).format('HH:mm:ss'))
  }
  return xData
}
export const option = {
  title: {
    text: '地磁波',
    subtext: ''
  },
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    data: ['范围上限', '实际值', '范围下限']
  },
  toolbox: {
    show: true,
    feature: {
      magicType: {show: true, type: ['stack', 'tiled']},
      saveAsImage: {show: true}
    }
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    name: '时间',
    data: timeFormat()
  },
  yAxis: {
    type: 'value',
    name: '地磁'
  },
  series: [{
    name: '范围下限',
    type: 'line',
    smooth: true,
    data: [350, 350, 350, 350, 350, 350, 350]
  },
    {
      name: '实际值',
      type: 'line',
      smooth: true,
      data: []
    },
    {
      name: '范围上限',
      type: 'line',
      smooth: true,
      data: [650, 650, 650, 650, 650, 650, 650]
    }]
}
