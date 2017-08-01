<template>
  <div id="app">
<md-toolbar class="md-transparent">
  <md-button class="md-icon-button">
    <md-icon>menu</md-icon>
  </md-button>

  <h2 class="md-title" style="flex: 1">Brand</h2>

  <md-button class="md-raised md-warn">Sign in</md-button>
</md-toolbar>
    <md-button class="md-raised md-accent" @click="toggleRightSidenav">Toggle right</md-button>

  <md-sidenav class="md-right" ref="rightSidenav" @open="open('Right')" @close="close('Right')">
    <md-toolbar>
      <div class="md-toolbar-container">
        <h3 class="md-title">Sidenav content</h3>
      </div>
    </md-toolbar>

    <md-button class="md-raised md-accent" @click="closeRightSidenav">Close</md-button>
  </md-sidenav>

    <div v-for='product in products'>
    <img src = "product.img" />
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
import footer from './components/footer.vue'

export default {
  name: 'app',
  data () {
    return {
      products: [
        {
          'name': 'Product 1',
          'description': 'Lorem ipsum',
          'price': '$500',
          'rating':'3',
          'img': '~assets/img1.jpg'
          
        },
        {
          'name': 'Product 1',
          'description': 'Lorem ipsum',
          'price': '$500',
          'rating': '4',
          'img': 'assets/img2.jpg'
        }
      ]
      
    }
  },
  methods: {
    toggleLeftSidenav() {
      this.$refs.leftSidenav.toggle();
    },
    toggleRightSidenav() {
      this.$refs.rightSidenav.toggle();
    },
    closeRightSidenav() {
      this.$refs.rightSidenav.close();
    },
    open(ref) {
      console.log('Opened: ' + ref);
    },
    close(ref) {
      console.log('Closed: ' + ref);
    }
  },
  components: {
    'app-footer': footer
  }
}
</script>
<style src="../node_modules/vue-material/dist/vue-material.css"></style>


