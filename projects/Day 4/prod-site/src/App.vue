<template>
  <div id="app">
<md-toolbar class="md-transparent">
  <md-button class="md-icon-button">
    <md-icon>menu</md-icon>
  </md-button>

  <h2 class="md-title" style="flex: 1">Brand</h2>

  <md-button class="md-raised md-warn">Sign in</md-button>
</md-toolbar>
    <md-button class="md-raised md-accent" @click="toggleRightSidenav">Filter Products</md-button>

  <md-sidenav class="md-right" ref="rightSidenav" @open="open('Right')" @close="close('Right')">
    <md-toolbar>
      <div class="md-toolbar-container">
        <h3 class="md-title">Filter Products</h3>
        
      </div>
    </md-toolbar>

    <md-button class="md-raised md-accent" @click="closeRightSidenav">Close</md-button>
  </md-sidenav>

<md-layout md-gutter = "8" style = "padding: 2%">

<md-layout md-flex-xsmall="100" md-flex-small="50" md-flex-medium="33" v-for='product in products'>

  <md-card style = "margin:2%">
  <md-card-header>
    <md-card-header-text>
      <div class="md-title">{{product.name}}</div>
    </md-card-header-text>

    <md-menu md-size="4" md-direction="bottom left">
      <md-button class="md-icon-button" md-menu-trigger>
        <md-icon>more_vert</md-icon>
      </md-button>

      <md-menu-content>
        <md-menu-item>
          <span>Add to cart</span>
          <md-icon>add_shopping_cart</md-icon>
        </md-menu-item>

        <md-menu-item>
          <span>Read more</span>
          <md-icon>more_horiz</md-icon>
        </md-menu-item>
      </md-menu-content>
    </md-menu>
  </md-card-header>

  <md-card-media>
    <img :src = "product.img" alt="Alarm clock 1" />
  </md-card-media>

  <md-card-content>
    {{product.description}}<br>
    Price: {{product.price}}<br>
    Rating: {{product.rating}}
  </md-card-content>
  <md-card-actions>
    <md-button class="md-icon-button">
      <md-icon>favorite</md-icon>
    </md-button>

    <md-button class="md-icon-button">
      <md-icon>add_shopping_cart</md-icon>
    </md-button>

    <md-button class="md-icon-button">
      <md-icon>share</md-icon>
    </md-button>
  </md-card-actions>
</md-card>

</md-layout>
</md-layout>
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
          'img': './src/assets/img1.jpg'
          
        },
        {
          'name': 'Product 2',
          'description': 'Lorem ipsum',
          'price': '$500',
          'rating': '4',
          'img': './src/assets/img2.jpg'
        },
        {
          'name': 'Product 3',
          'description': 'Lorem ipsum',
          'price': '$500',
          'rating': '4',
          'img': './src/assets/img2.jpg'
        },
        {
          'name': 'Product 3',
          'description': 'Lorem ipsum',
          'price': '$500',
          'rating': '4',
          'img': './src/assets/img2.jpg'
        },
        {
          'name': 'Product 3',
          'description': 'Lorem ipsum',
          'price': '$500',
          'rating': '4',
          'img': './src/assets/img2.jpg'
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
<style src="../node_modules/vue-material/dist/vue-material.css">
.parent {
  overflow: hidden;
}

.card img {
  width: 100%;
  height: auto;
}</style>


