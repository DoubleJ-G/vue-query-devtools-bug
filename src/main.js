import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
import {VueQueryPlugin } from 'vue-query'
Vue.use(VueQueryPlugin)
new Vue({
  render: function (h) { return h(App) },
}).$mount('#app')
