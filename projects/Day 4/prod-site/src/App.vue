<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    
    <app-footer></app-footer>
  </div>
</template>

<script>
import footer from './components/footer.vue'

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      
    }
  },
  components: {
    'app-footer': footer
  }
}
</script>
<style src="../node_modules/vue-material/dist/vue-material.css"></style>


