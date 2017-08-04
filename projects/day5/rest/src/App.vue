<template>
  <div id="app">
    <app-toolbar></app-toolbar>

  <md-tabs md-fixed>
  <md-tab id="starters" md-label="Starters" md-icon="local_pizza">
    <app-starter></app-starter>
  </md-tab>

  <md-tab id="lunch" md-label="Lunch" md-icon="restaurant">
    <app-lunch></app-lunch>
  </md-tab>

  <md-tab id="dinner" md-label="Dinner" md-icon="restaurant_menu">
    <app-dinner></app-dinner>
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
import lunch from './components/lunch.vue'
import dinner from './components/dinner.vue'

export default {
  name: 'app',
  components: {
    'app-toolbar': toolbar,
    'app-footer': footer,
    'app-starter': starters,
    'app-lunch': lunch,
    'app-dinner': dinner
  }
}
</script>

<style src="../node_modules/vue-material/dist/vue-material.css"></style>
