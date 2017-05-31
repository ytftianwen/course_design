/**
 * Created by ytftianwen on 2017/5/7.
 */
import template from './view.html'
import style from './style.css'
import httpModel from './httpModel'
import pinyin from 'pinyin'
console.log('00000..', pinyin('中文', {style: pinyin.STYLE_NORMAL}).join(''))
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
      checkList: [],
      successImg: '../static/icon/success.png',
      dialogVisible: false,
      resultParam: {},
      checkMode: {
        hasMap: true,
        hasImg: true,
        hasChart: true
      }
    }
  },
  watch: {
    checkMode: {
      handler(){
        console.log('....', this.checkMode)
      },
      deep: true
    }
  },
  methods: {
    handleClose(){
    },
    deleteItem(index){
      this.$confirm('确认移除这个因子吗', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消'
      }).then(() => {
        this.plusList.splice(index, 1)
        this.$message({
          type: 'success',
          message: '删除成功!'
        });
      })
    },
    plusPanelConfirm(){
      this.plusList.push({
        variable: this.plusPanelParam.name,
        topLimit: this.plusPanelParam.upperLimit,
        floorLimit: this.plusPanelParam.floorLimit,
        disasterLevel: this.resultParam.disasterLevel
      })
      this.$message({
        message: `灾害:${this.plusPanelParam.name} 添加成功`,
        type: 'success'
      });
      this.clearParam()
      this.dialogVisible = false
    },
    clearParam(){
      this.plusPanelParam = {
        name: '',
        upperLimit: '',
        floorLimit: ''
      }
    },
    clearInput(){
      this.checkMode = {
        hasMap: true,
        hasImg: true,
        hasChart: true
      }
      this.plusList = []
      this.disasterType = ''
    },
    subSystemConfig(){
      if (this.plusList.length > 0 && this.disasterType !== '') {
        this.plusList.forEach((item, index)=>{
          item.variableLevel = index
        })
        this.resultParam.variableList = this.plusList
        this.resultParam.name = this.disasterType
        this.resultParam.value = pinyin(this.resultParam.name, {style: pinyin.STYLE_NORMAL}).join('')
        this.resultParam = Object.assign(this.resultParam, this.checkMode)
        console.log('...', JSON.stringify(this.resultParam, null, 2))
        httpModel.systemPost(this.resultParam)
          .then(res => {
            this.clearParam()
            this.clearInput()
            this.$message({
              message: `添加成功:${res}`,
              type: 'success'
            });
          })
          .catch(err => {
            this.$message({
              message: `添加失败,err:${err}`,
              type: 'danger'
            });
          })

      } else {
        this.$message({
          message: `提交内容不能有空`,
          type: 'warning'
        });
      }
    },
    init(){
      httpModel.getDisasterTypesMaxLevel()
        .then(res=>{
          console.log('****', res)
          this.resultParam.disasterLevel = res + 1
          console.log('&&&', JSON.stringify(this.resultParam,null, 2))
        })
    }
  },
  mounted(){
    this.init()
  }
}
