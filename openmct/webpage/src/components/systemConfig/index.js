/**
 * Created by ytftianwen on 2017/5/7.
 */
import template from './view.html'
import style from './style.css'

export default {
  template,
  style,
  data(){
    return {
      disasterType: '',
      plusIcon: '/static/icon/plus.png',
      plusList: [],
      plusPanelParam: {
        name: '',
        upperLimit: '',
        floorLimit: ''
      },
      successImg: '../static/icon/success.png',
      dialogVisible: false,
      resultParam: {}
    }
  },
  methods: {
    handleClose(){
    },

    plusPanelConfirm(){
      console.log(this.plusPanelParam)
      this.plusList.push({
        name: this.plusPanelParam.name,
        upperLimit: this.plusPanelParam.upperLimit,
        floorLimit: this.plusPanelParam.floorLimit
      })

      this.$message({
        message: `灾害:${this.plusPanelParam.name} 添加成功`,
        type: 'success'
      });
      this.clearParam()
      this.dialogVisible = false
    },
    clearParam(){
      this.plusPanelParam.name = ''
      this.plusPanelParam.upperLimit = ''
      this.plusPanelParam.floorLimit = ''
    },
    subSystemConfig(){
      if(this.plusList.length>0&&this.disasterType!==''){
        this.resultParam = {
          plusList: this.plusList,
          type: this.disasterType
        }
        this.clearParam()
        this.plusList = []
        this.$message({
          message: `添加成功`,
          type: 'success'
        });
      } else {
        this.$message({
          message: `提交内容不能为空`,
          type: 'warning'
        });
      }
    }
  }
}
