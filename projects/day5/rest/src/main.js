import Vue from 'vue'
import VueMaterial from 'vue-material'
import App from './App.vue'

Vue.use(VueMaterial)

Vue.material.registerTheme({
  default: {
    primary: {
      color: 'light-green',
      hue: 700
    },
    accent: 'red'
  },
  teal: {
    primary: 'blue',
    accent: 'pink'
  },
  purple: {
    primary: 'purple',
    accent: 'orange'
  }
})

new Vue({
  el: '#app',
  render: h => h(App)
})
