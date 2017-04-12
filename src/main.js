// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import App from './App'
import router from './router'

Vue.config.productionTip = false
require('./assets/common.css')
window.utils = require('utils/utils')
window.moment = require('moment')
require('utils/vue-filter')
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<router-view></router-view>'
  // components: {App}
})
