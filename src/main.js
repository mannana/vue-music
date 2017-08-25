// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
//解决移动端300ms延迟
const FastClick = require('fastclick')
FastClick.attach(document.body)
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
//引入懒加载插件
import VueLazyload from 'vue-lazyload'
//定义懒加载插件
Vue.use(VueLazyload, {
    attempt: 1
})
Vue.config.productionTip = false

/* eslint-disable no-new */
//引入公用方法库
import format from './utils/utils';
//将公用方法定义在vue原型
Vue.prototype.format = format;
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
