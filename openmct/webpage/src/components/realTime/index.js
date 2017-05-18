/**
 * Created by ytftianwen on 2017/5/18.
 */
import template from './view.html'
import httpModel from './httpModel'
import style from './style.css'
export default {
  template,
  style,
  data(){
    return {
      disasterTypes: [],
      chooseType: '',
      tableHeader: [{
        prop: 'date',
        label: '日期'
      }, {
        prop: 'name',
        label: '姓名'
      }, {
        prop: 'address',
        label: '地址'
      }],
      tableData2: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }]
    }
  },
  methods: {
    tableRowClassName(row, index) {
      if (index === 1) {
        return 'info-row';
      } else if (index === 3) {
        return 'positive-row';
      }
      return '';
    },
    getDisasterTypes(){
      httpModel.getDisasterTypes()
        .then(res => {
          this.disasterTypes = res
          this.chooseType = res[0].value
        })
    },
    init(){
      this.getDisasterTypes()
    }
  },
  mounted(){
    this.init()
  }
}
