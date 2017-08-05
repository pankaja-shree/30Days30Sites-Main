<template>

  <md-list class="custom-list md-triple-line">
    <md-list-item v-for="drink in drinks">
      <md-avatar>
        <img :src="drink.image" :alt="drink.name">
      </md-avatar>

      <div class="md-list-text-container">
      <span>{{drink.name}}</span>
      <span>${{drink.price}}</span>
      <p>{{drink.description}}</p>
      </div>

      <md-button class="md-icon-button md-list-action">
        <md-icon class="md-accent">favorite</md-icon>
      </md-button>
      <md-divider class="md-inset"></md-divider>
    </md-list-item>
  </md-list>
</template>

<script>
export default {
  name: 'drinks',
  data () {
    return {
      drinks: [
          {
            "name": "Long Island Tea",
            "image": "./src/assets/dinner.png",
            "price": "1.99",
            "description": "Home-brewed taste, with mountain-grown tea, pure filtered water and just the right balance of sweetness."
          },
          {
             "name": "Strawberry Shake",
             "image": "./src/assets/starters.png",
             "price": "1.99",
             "description": "A fruit-filled pick-me-up combination of strawberries, ginger ale and your choice of Red Bull® Energy or Red Bull® Sugar-Free."
          }
        ]
    }
  }
}
</script>

<style src=".../node_modules/vue-material/dist/vue-material.css">
</style>
