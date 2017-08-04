<template>
  <md-list class="md-double-line">
    <md-list-item v-for="dinner in dinners">
      <md-avatar>
        <img :src="dinner.image" :alt="dinner.name">
      </md-avatar>

      <div class="md-list-text-container">
      <span>{{dinner.name}}</span>
      <span>{{dinner.description}}</span>
      </div>

      <md-button>
        ${{dinner.price}}
      </md-button>

    </md-list-item>
  </md-list>
</template>

<script>
export default {
  name: 'dinner',
  data () {
    return {
      dinners: [
          {
            "name": "Uthapizza",
            "image": "./src/assets/buffet.png",
            "price": "4.99",
            "description": "A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.",
            },
          {
             "name": "Cheese burger",
             "image": "./src/assets/dinner.png",
             "price": "1.99",
             "description": "Mouthwatering experience, with Mozarilla Cheese, lettuce, tomato and our spicy signature sauce."
          }
        ]
    }
  }
}
</script>

<style src=".../node_modules/vue-material/dist/vue-material.css"></style>
