import Vue from 'vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'
Vue.use(VueMaterial)

import App from './App.vue'


new Vue({
  el: '#app',
  render: h => h(App)
})
