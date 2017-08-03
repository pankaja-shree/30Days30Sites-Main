<template>
  <div id="app">
<md-toolbar class="md-transparent">
  <md-button class="md-icon-button">
    <md-icon>menu</md-icon>
  </md-button>

  <h2 class="md-title" style="flex: 1">Brand</h2>

 <md-button class="md-icon-button">
      <md-icon>search</md-icon>
    </md-button>

  <md-button class="md-raised md-accent" @click="toggleRightSidenav"><md-icon>filter_list</md-icon>&nbsp; Filter Products </md-button>
    
  <md-button class="md-raised md-warn">Sign in</md-button>
</md-toolbar> 

  <md-sidenav class="md-right" ref="rightSidenav" @open="open('Right')" @close="close('Right')">
    <md-toolbar>
      <div class="md-toolbar-container">
        <h3 class="md-title">Filter Products by:</h3>
      </div>
    </md-toolbar>
   <div style = "padding: 5%"> 
   <h4 class="md-title">Brand</h4>
        <md-checkbox id="my-test1" name="my-test1" v-model="checkbox_brand">Brand 1</md-checkbox>
        <md-checkbox id="my-test1" name="my-test1" v-model="checkbox_brand">Brand 2</md-checkbox>
        <md-checkbox id="my-test1" name="my-test1" v-model="checkbox_brand">Brand 3</md-checkbox>

   <h4 class = "md-title">Price</h4>
       <form novalidate @submit.stop.prevent="submit">
  <md-input-container>
    <label>Min Price: </label>
    <md-input v-model="initialValue"></md-input>
  </md-input-container>
  <md-input-container>
    <label>Max Price: </label>
    <md-input v-model="finalValue"></md-input>
  </md-input-container>
  </form>

  <h4 class="md-title">Sort</h4>
        <md-checkbox id="my-test1" name="my-test1" v-model="checkbox_sort">Highest Price first</md-checkbox>
        <md-checkbox id="my-test1" name="my-test1" v-model="checkbox_sort">Highest rating first</md-checkbox>
        </div>
    <md-button class="md-raised md-accent" @click="closeRightSidenav">Close</md-button>
  </md-sidenav>

<md-layout md-gutter = "8" style = "padding: 2%">

<md-layout md-flex-xsmall="100" md-flex-small="50" md-flex-medium="33" v-for='product in products'>

  <md-card class="card-ripple" md-with-hover style = "margin:2%">
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
    <md-ink-ripple />  
    <img :src = "product.img" :alt="product.name" />
  </md-card-media>

  <md-card-content>
    <span class = "md-subheading"> Product description: </span><br> {{product.description}}<br>
    Price: {{product.price}}<br>
    <md-rating-bar v-model="product.rating" :md-max-rating="5" class="md-accent" disabled></md-rating-bar>

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
          'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ',
          'price': '$500',
          'rating':'3',
          'img': './src/assets/img2.jpg'
          
        },
        {
          'name': 'Product 2',
          'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ',
          'price': '$500',
          'rating': '2',
          'img': './src/assets/img2.jpg'
        },
        {
          'name': 'Product 3',
          'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ',
          'price': '$500',
          'rating': '4',
          'img': './src/assets/img2.jpg'
        },
        {
          'name': 'Product 4',
          'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ',
          'price': '$500',
          'rating': '2.5',
          'img': './src/assets/img2.jpg'
        },
        {
          'name': 'Product 5',
          'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ',
          'price': '$500',
          'rating': '4.5',
          'img': './src/assets/img2.jpg'
        },
        {
          'name': 'Product 6',
          'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ',
          'price': '$500',
          'rating': '4',
          'img': './src/assets/img2.jpg'
        }
      ],
      initialValue: 'Min price',
      finalValue: 'Max price',
      checkbox_brand: ' ',
      checkbox_sort: ' '
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
    },
  },
  components: {
    'app-footer': footer
  }
}
</script>
<style src="../node_modules/vue-material/dist/vue-material.css">
.card-ripple {
  width: 300px;
  margin-top: 24px;
}
</style>


