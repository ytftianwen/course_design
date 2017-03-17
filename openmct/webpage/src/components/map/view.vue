<template>
  <div class="disaster-home">
    <div class="disaster-map">
      <div id="charts">
        <div id="main" :style="{width:'600px',height:'400px'}"></div>
      </div>
      <div class="line-chart">
        <div id="dynamic" :style="{width: '400px'}"></div>
        <div class="disaster-search">
          <div class="row-item">
            <label>选择地点</label>
            <select v-model="selectedAddress">
              <option v-for="item in address" :value="item.value">
                {{item.name}}
              </option>
            </select>
          </div>
          <div class="row-item">
            <label>起始时间</label>
            <input type="date" :value="startTime">
          </div>
          <div class="row-item">
            <label>截止时间</label>
            <input type="date" :value="endTime">
            <button>搜索</button>
          </div>
          <!--<div class="row-item" style="text-align: right;width: 250px;">-->
            <!--<button>搜索</button>-->
          <!--</div>-->
        </div>
      </div>
    </div>
    <div class="disaster-bottom">
      <div class="disasterDetails">
        <h4>详情展示</h4>
        <table cellspacing="0">
          <tr>
            <th style="width: 16%">灾害地点</th>
            <th style="width: 16%">发生时间</th>
            <th style="width: 16%">灾害类型</th>
            <th style="width: 16%">灾害等级</th>
            <th style="width: 52%">灾害详情</th>
          </tr>
          <tr>
            <td v-text="detailData.address"></td>
            <td v-text="detailData.time"></td>
            <td v-text="detailData.type"></td>
            <td v-text="detailData.grade"></td>
            <td v-text="detailData.description"></td>
          </tr>
        </table>
      </div>
      <p >Tips:点击地图上颜色点可以在下方表格显示详细数据，同时右侧动态坐标轴也会切换到相应地区的数据，点击地图右下角颜色块可切换地图的色块数据显示</p>
    </div>
    <h1 style="color: #ffffff;text-align: center">以上均为静态模拟数据！</h1>
  </div>
</template>

<script src="./index.js"></script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .disaster-map {
    display: flex;
    max-height: 400px;
  }

  #charts {
    flex: 4;
  }

  .line-chart {
    flex: 3;
  }

  #dynamic {
    /*width: 100%;*/
    height: 300px;
  }

  .disaster-search {
    /*flex: 3;*/
  }

  .disaster-search label {
    color: #eee;
  }

  .disaster-search select {
    width: 180px;
    height: 28px;
  }

  .row-item {
    width: 100%;
    margin-top: 10px;
    padding-left: 10px;
  }

  .row-item input {
    width: 180px;
  }

  .row-item button {
    padding: 4px 10px;
    font-size: 14px;
    line-height: 18px;
    min-width: 75px;
    border-radius: 3px;
    outline: none;
    cursor: pointer;
    color: #eeeeee;
    border: none;
    margin-left: 15px;
    background-color: #009AFC;
  }

  .disaster-search p {
    color: #eeeeee;
    opacity: 0.6;
    font-size: 14px;
  }
  .disaster-bottom {
    display: flex;
  }
  .disasterDetails {
    padding: 10px;
    flex: 4;
  }
  .disaster-bottom p {
    flex: 3;
    color: #c4c4c4;
    padding-top: 20px;
  }
  .disasterDetails h4 {
    color: #eeeeee;
    margin: 0;
    padding: 0 10px 10px 10px;
  }

  .disasterDetails table {
    width: 100%;
    color: #eeeeee;
    text-align: center;
    font-size: 12px;
  }

  .disasterDetails tr {
    height: 35px;
  }

  .disasterDetails table td, th {
    white-space: pre-wrap;
    border: 1px solid #c4c4c4;
    word-break: break-all;
  }
</style>
