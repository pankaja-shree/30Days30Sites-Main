<template>
  <div id="app">
    <md-toolbar>
    <md-icon>local_dining</md-icon><h1 class="md-title" style="flex: 1">&nbsp; Yumm</h1>
    <md-button class="md-icon-button">
      <md-icon>info</md-icon>
    </md-button>
    <md-button class="md-icon-button">
      <md-icon>directions</md-icon>
    </md-button>
    <md-button class="md-icon-button">
      <md-icon>call</md-icon>
    </md-button>
  </md-toolbar>

  <md-tabs md-fixed>
  <md-tab id="starters" md-label="Starters" md-icon="local_pizza">
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas amet cum vitae, omnis! Illum quas voluptatem, expedita iste, dicta ipsum ea veniam dolore in, quod saepe reiciendis nihil.</p>
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


  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      'starters': [

      ],
      'lunch':[

      ],
      'dinner':[

      ],
      'desserts':[

      ],
      'beverages':[
        
      ]
    }
  }
}
</script>

<style src="../node_modules/vue-material/dist/vue-material.css"></style>
