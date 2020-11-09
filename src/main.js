import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'

import res1 from './data/res1.js'
import res2 from './data/res2.js'
import 'vue-g2'
import G2 from "@antv/g2"
Vue.use(res2)
Vue.config.productionTip = false
Vue.use(res1)
Vue.use(G2)
new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
