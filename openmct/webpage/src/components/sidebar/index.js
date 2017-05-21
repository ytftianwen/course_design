/**
 * Created by ytftianwen on 2017/4/23.
 */
import template from './view.html'
import style from './style.css'
import routers from '../../router/routers'
export default {
  template,
  style,
  data(){
    return {
      sidebarList: routers
    }
  },
  methods:{
  }
}
