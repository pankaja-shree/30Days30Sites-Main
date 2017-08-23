<template>
  <div>
    <b-carousel id="carousel1"
                controls
                indicators
                background="transparent"
                :interval="4000"
                v-model="slide"
                @slide="onSlide"
                @slid="onSlid"
    >

      <!-- Slides with image only -->
      <b-carousel-slide img="https://goo.gl/qcw3qS">
      </b-carousel-slide>
<b-carousel-slide img="https://goo.gl/cpvNMq">
      </b-carousel-slide>
<b-carousel-slide img="https://goo.gl/sWnSrq">
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {
  data: {
    slide: 0,
    sliding: null
  },
  methods: {
    blankImg(x, y) {
      // Return a blank SVG image with specified width and height
      // Handy for maintaining aspect ratio for text only slides
      return "data:image/svg+xml;charset=utf-8,%3Csvg xmlns%3D" +
             "'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg' " +
             "viewBox%3D'0 0 " + x + " " + y + "'%2F%3E";
    },
    onSlide(slide) {
        this.sliding = true;
    },
    onSlid(slide) {
        this.sliding = false;
    }
  }
}
</script>
<!-- carousel-1.vue -->
<style scoped>
#carousel1{
  width: 70%;
  margin: 0 auto;
  outline: none;
  border: none;
}
#carousel1:hover, #carousel1:active{
  outline: none;
  border: none;
}
</style>