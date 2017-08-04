<template>
  <md-list class="custom-list md-triple-line">
    <md-list-item v-for="starter in starters">
      <md-avatar>
        <img :src="starter.image" :alt="starter.name">
      </md-avatar>

      <div class="md-list-text-container">
      <span>{{starter.name}}</span>
      <span>${{starter.price}}</span>
      <p>{{starter.description}}</p>
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
  name: 'starters',
  data () {
    return {
      starters: [
          {
            "name": "Zucchipakoda",
            "image": "./src/assets/zucchipakoda.png",
            "price": "1.99",
            "description": "Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce"
          },
          {
             "name": "Vadonut",
             "image": "./src/assets/vadonut.png",
             "price": "1.99",
             "description": "A quintessential ConFusion experience, is it a vada or is it a donut?"
          }

        ]
    }
  }
}
</script>

<style src=".../node_modules/vue-material/dist/vue-material.css"></style>
