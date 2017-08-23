<template>
<div id = "Slide">
  <div class="slides-inner">
    <div v-for="slide in slides">
    {{slide.src}}
    </div>
  </div>
</div>
</template>

<script>
export default {
    name: 'Slide',
    data () {
      return {
        
      }
    }
}
</script>

<style scoped>
#Gallery{
  max-width: 900px;
}
</style>

