import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { bCarousel, bCarouselSlide } from 'bootstrap-vue/lib/components'
import App from './App.vue'

Vue.use(BootstrapVue);

new Vue({
  components: {
    bCarousel,
    bCarouselSlide
  }
})
new Vue({
  el: '#app',
  render: h => h(App)
})
