import Vue from 'vue'
import App from './App.vue'
//引入路由
import router from './views'
//引入element-ui
import ElementUI from 'element-ui'
//引入element-ui样式
import 'element-ui/lib/theme-chalk/index.css';
import 'element-ui/lib/theme-chalk/display.css';
import './assets/global.css'

Vue.use(ElementUI)


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
