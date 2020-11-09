import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'

import res1 from './data/res1.js'
import G2 from "@antv/g2"
import VueG2 from 'vue-g2'
Vue.use(VueG2)
Vue.config.productionTip = false
Vue.use(res1)
Vue.use(G2)
new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
