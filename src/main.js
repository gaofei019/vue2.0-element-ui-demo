import Vue from 'vue'
import App from './App.vue'
import './element-ui.js'//按需加载
//import ElementUI from 'element-ui' //引用全局
//import 'element-ui/lib/theme-default/index.css' //引用全局

//Vue.use(ElementUI) //使用全局组件


new Vue({
  el: '#app',
  render: h => h(App)
})
