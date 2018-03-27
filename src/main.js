var router = require('./router')
require('./assets/common.css');
window.utils = require('utils/utils')
window.moment = require('moment')
require('utils/vue-filter')
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: router,
  template: '<router-view></router-view>'
  // components: {App}
})
