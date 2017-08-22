<template>
<div id = "Gallery">
<swipe :options="swipeOptions">
  <swipe-item><img src="./assets/img1.jpg"></swipe-item>
  <swipe-item><img src="./assets/img3.jpg"></swipe-item>
  <swipe-item><img src="./assets/img4.jpg"></swipe-item>
</swipe>
</div>
</template>

<script>
export default {
    name: 'Gallery',
    data () {
      return {
        swipeOptions: {
          startSlide: 0,
          speed: 300,
          auto: 4000,
          continuous: true,
          disableScroll: false,
          stopPropagation: false,
          callback: function (index, slide) { console.log('slide changes') },
          transitionEnd: function (index, slide) { console.log('slide transition ends') }
        }
      }
    }
}
</script>

