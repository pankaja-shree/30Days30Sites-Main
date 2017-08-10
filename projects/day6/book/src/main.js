import Vue from 'vue'
//Bootstrap vue dependencies
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/css/bootstrap.css';

Vue.use(BootstrapVue);

import App from './App.vue'

new Vue({
  el: '#app',
  render: h => h(App)
})
