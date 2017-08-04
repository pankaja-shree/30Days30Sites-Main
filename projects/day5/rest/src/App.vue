<template>
  <div id="app">
    <md-toolbar>
    <h1 class="md-title" style="flex: 1">Yumm</h1>
    <md-button class="md-icon-button">
      <md-icon>more_vert</md-icon>
    </md-button>
  </md-toolbar>

  <md-tabs md-fixed md-purple>
  <md-tab id="starters" md-label="Starters">
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas amet cum vitae, omnis! Illum quas voluptatem, expedita iste, dicta ipsum ea veniam dolore in, quod saepe reiciendis nihil.</p>
  </md-tab>

  <md-tab id="lunch" md-label="Lunch">
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas amet cum vitae, omnis! Illum quas voluptatem, expedita iste, dicta ipsum ea veniam dolore in, quod saepe reiciendis nihil.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas amet cum vitae, omnis! Illum quas voluptatem, expedita iste, dicta ipsum ea veniam dolore in, quod saepe reiciendis nihil.</p>
  </md-tab>

  <md-tab id="dinner" md-label="Dinner">
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas.</p>
  </md-tab>

  <md-tab id="drinks" md-label="Beverages">
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas.</p>
  </md-tab>
</md-tabs>

  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style src="../node_modules/vue-material/dist/vue-material.css"></style>
