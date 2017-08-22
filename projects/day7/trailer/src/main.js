import Vue from 'vue'
import App from './App.vue'

import VSwipe from 'vswipe';
Vue.use(VSwipe);
new Vue({
  el: '#app',
  render: h => h(App)
})
