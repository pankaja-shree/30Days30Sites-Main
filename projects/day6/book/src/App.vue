<template>
  <div id="app">
  <app-header></app-header>
  <app-navbar></app-navbar>
  <app-book></app-book>
  </div>
</template>

<script>
import header from './components/header.vue'
import navbar from './components/navbar.vue'
import book from './components/book.vue'

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    'app-header': header,
    'app-navbar': navbar,
    'app-book': book
  }
}
</script>

<style>

</style>
