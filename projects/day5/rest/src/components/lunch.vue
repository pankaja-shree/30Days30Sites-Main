<template>
<md-layout md-align="center" md-flex-xsmall="100" md-flex-small="50" md-flex-medium="20">
  <md-list >
    <md-list-item v-for="lunch in lunches">
      <md-avatar>
        <img :src="lunch.image" :alt="lunch.name">
      </md-avatar>
      <span>{{lunch.name}}</span>

      <md-list-expand>
        <md-list>
            <md-list-item class="md-inset">${{lunch.price}}</md-list-item>
            <md-list-item class="md-inset">{{lunch.description}}</md-list-item>
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
      lunches: [
          {
            "name": "Uthapizza",
            "image": "./src/assets/uthapizza.png",
            "price": "4.99",
            "description": "A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.",
            },
          {
             "name": "Cheese burger",
             "image": "./src/assets/lunch.png",
             "price": "1.99",
             "description": "Mouthwatering experience, with Mozarilla Cheese, lettuce, tomato and our spicy signature sauce."
          }
        ]
    }
  }
}
</script>

<style src=".../node_modules/vue-material/dist/vue-material.css"></style>
