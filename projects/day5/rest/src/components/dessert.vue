<template>
<md-layout md-align="center" md-flex-xsmall="100" md-flex-small="50" md-flex-medium="25">
  <md-list>
    <md-list-item v-for="dessert in desserts">
      <md-avatar>
        <img :src="dessert.image" :alt="dessert.name">
      </md-avatar>
      <span>{{dessert.name}}</span>

      <md-list-expand>
        <md-list>
            <md-list-item class="md-inset">${{dessert.price}}</md-list-item>
            <md-list-item class="md-inset">{{dessert.description}}</md-list-item>
        </md-list>
        </md-list-expand>

      <span>View details</span>
      <md-divider class="md-inset"></md-divider>
    </md-list-item>
  </md-list>
  </md-layout>
</template>

<script>
export default {
  name: 'lunch',
  data () {
    return {
      desserts: [
          {
            "name": "ElaiCheese Cake",
            "image": "./src/assets/elaicheesecake.png",
            "price": "2.99",
            "description": "A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms",
            },
          {
             "name": "Death by Chocolate",
             "image": "./src/assets/desserts.png",
             "price": "3.99",
             "description": "A wonderful combination of pastry, brown chocolate, ice cream and nuts. An out of the world experience."
          }
        ]
    }
  }
}
</script>

<style src=".../node_modules/vue-material/dist/vue-material.css"></style>
