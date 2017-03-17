/**
 * Created by yangtaofeng on 2017/3/17.
 */
let randomData = function () {
  now = new Date(+now + oneDay);
  value = value + Math.random() * 21 - 10;
  return {
    name: now.toString(),
    value: [
      [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'),
      Math.round(value)
    ]
  }
}

let dynamicData = [];
var now = +new Date(2000, 9, 29);
var oneDay = 24 * 3600 * 1000;
var value = Math.random() * 1000;
for (var i = 0; i < 1000; i++) {
  dynamicData.push(randomData());
}

var dynamicOption = {
  title: {
    text: '地区：北京，竖轴：灾害类型，横轴：时间',
    textStyle: {
      color: '#ccc'
    }
  },
  tooltip: {
    trigger: 'axis',
    formatter: function (params) {
      params = params[0];
      var date = new Date(params.name);
      return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + ' : ' + params.value[1];
    },
    legend: {
      backgroundColor: '#ccc'
    },
    axisPointer: {
      animation: false
    }
  },
  xAxis: {
    type: 'time',
    splitLine: {
      show: false
    },
    nameTextStyle: {
      color: '#ddd'
    },
    axisLine: {
      lineStyle: {
        color: '#ddd'
      }
    }
  },
  yAxis: {
    type: 'value',
    // data: ['地震', '台风', '霜冻', '沙尘暴', '泥石流'],
    boundaryGap: [0, '100%'],
    nameTextStyle: {
      color: '#ddd'
    },
    splitLine: {
      show: false
    },
    axisLine: {
      lineStyle: {
        color: '#ddd'
      }
    }
  },
  series: [{
    name: '模拟数据',
    type: 'line',
    showSymbol: false,
    hoverAnimation: false,
    data: dynamicData
  }]
};
export {randomData, dynamicData, dynamicOption}

