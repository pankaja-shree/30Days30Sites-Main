<template>
  <div id="app">
    <app-toolbar></app-toolbar>

  <md-tabs md-fixed>
  <md-tab id="starters" md-label="Starters" md-icon="local_pizza">
    <app-starter></app-starter>
  </md-tab>

  <md-tab id="lunch" md-label="Lunch" md-icon="restaurant">
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas amet cum vitae, omnis! Illum quas voluptatem, expedita iste, dicta ipsum ea veniam dolore in, quod saepe reiciendis nihil.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas amet cum vitae, omnis! Illum quas voluptatem, expedita iste, dicta ipsum ea veniam dolore in, quod saepe reiciendis nihil.</p>
  </md-tab>

  <md-tab id="dinner" md-label="Dinner" md-icon="restaurant_menu">
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas.</p>
  </md-tab>

  <md-tab id="desserts" md-label="Desserts" md-icon="cake">
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas.</p>
  </md-tab>

  <md-tab id="drinks" md-label="Beverages" md-icon="local_bar">
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas.</p>
  </md-tab>
</md-tabs>

<app-footer></app-footer>
  </div>
</template>

<script>
import toolbar from './components/toolbar.vue'
import footer from './components/footer.vue'
import starters from './components/starters.vue'

export default {
  name: 'app',
  components: {
    'app-toolbar': toolbar,
    'app-footer': footer,
    'app-starter': starters
  }
}
</script>

<style src="../node_modules/vue-material/dist/vue-material.css"></style>
