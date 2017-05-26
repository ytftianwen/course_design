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
      tableHeader: [],
      tableBody: []
    }
  },
  methods: {
    tableRowClassName(row, index) {
      return row.level >= 6 ? 'alarm-row' : '';
    },
    getDisasterTypes(){
      httpModel.getDisasterTypes()
        .then(res => {
          this.disasterTypes = res
          this.chooseType = res[0].value
        })
    },
    getDisasterDetail(){
      httpModel.getDisasterDetail()
        .then(res => {
          this.tableHeader = res.header
          this.tableBody = res.body
        })
    },
    init(){
      this.getDisasterTypes()
      this.getDisasterDetail()
    }
  },
  mounted(){
    this.init()
  }
}
