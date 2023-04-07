import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import excel from 'vue-excel-export'
import vueApexChats from 'vue-apexcharts'

Vue.config.productionTip = false

new Vue({
  vuetify,
  excel,
  vueApexChats,
  render: h => h(App)
}).$mount('#app')
