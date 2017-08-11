<template>
<div id="app">

  <b-navbar v-b-scrollspy:scrollspy-example toggleable type="light" variant="faded" toggle-breakpoint="md" fixed="top">
    <b-nav-toggle target="nav_collapse"></b-nav-toggle>
    <b-navbar-brand href="#home" @click.stop="scrollIntoView($event)">BookName</b-navbar-brand>
    <b-collapse is-nav id="nav_collapse">
    <b-nav pills>
      <b-nav-item href="#about" @click.stop="scrollIntoView($event)">About</b-nav-item>
      <b-nav-item href="#mdo" @click.stop="scrollIntoView($event)">@mdo</b-nav-item>
      <b-nav-item href="#pi0" @click.stop="scrollIntoView($event)">@pi0</b-nav-item>
    </b-nav>
    </b-collapse>
  </b-navbar>


  <div id="scrollspy-example">
    <app-header id="home"></app-header>
    <h4 id="about">About</h4>
    <p v-for="i in 3">
      <app-book></app-book>
    </p>
    <h4 id="mdo">@mdo</h4>
    <p v-for="i in 4">
      Veniam marfa mustache skateboard, adipisicing fugiat velit pitchfork beard. Freegan
      beard aliqua cupidatat mcsweeney's vero. Cupidatat four loko nisi, ea helvetica nulla
      carles. Tattooed cosby sweater food truck, mcsweeney's quis non freegan vinyl. Lo-fi wes
      anderson +1 sartorial. Carles non aesthetic exercitation quis gentrify. Brooklyn
      adipisicing craft beer vice keytar deserunt.
    </p>
    <h4 id="one">one</h4>
    <p v-for="i in 2">
      Occaecat commodo aliqua delectus. Fap craft beer deserunt skateboard ea. Lomo bicycle
      rights adipisicing banh mi, velit ea sunt next level locavore single-origin coffee
      in magna veniam. High life id vinyl, echo park consequat quis aliquip banh mi pitchfork.
      Vero VHS est adipisicing. Consectetur nisi DIY minim messenger bag. Cred ex in,
      sustainable delectus consectetur fanny pack iphone.
    </p>
    <h4 id="two">two</h4>
    <p v-for="i in 2">
      Veniam marfa mustache skateboard, adipisicing fugiat velit pitchfork beard. Freegan
      beard aliqua cupidatat mcsweeney's vero. Cupidatat four loko nisi, ea helvetica nulla
      carles. Tattooed cosby sweater food truck, mcsweeney's quis non freegan vinyl. Lo-fi wes
      anderson +1 sartorial. Carles non aesthetic exercitation quis gentrify. Brooklyn
      adipisicing craft beer vice keytar deserunt.
    </p>
    <h4 id="three">three</h4>
    <p v-for="i in 3">
      Occaecat commodo aliqua delectus. Fap craft beer deserunt skateboard ea. Lomo bicycle
      rights adipisicing banh mi, velit ea sunt next level locavore single-origin coffee
      in magna veniam. High life id vinyl, echo park consequat quis aliquip banh mi pitchfork.
      Vero VHS est adipisicing. Consectetur nisi DIY minim messenger bag. Cred ex in,
      sustainable delectus consectetur fanny pack iphone.
    </p>
    <h4 id="pi0">@pi0</h4>
    <p v-for="i in 4">
      Veniam marfa mustache skateboard, adipisicing fugiat velit pitchfork beard. Freegan
      beard aliqua cupidatat mcsweeney's vero. Cupidatat four loko nisi, ea helvetica nulla
      carles. Tattooed cosby sweater food truck, mcsweeney's quis non freegan vinyl. Lo-fi wes
      anderson +1 sartorial. Carles non aesthetic exercitation quis gentrify. Brooklyn
      adipisicing craft beer vice keytar deserunt.
    </p>
  </div>
</div>
</template>

<script>
import header from './components/header.vue'
import book from './components/book.vue'

export default {
  name: 'app',
  components: {
    'app-header': header,
    'app-book': book
  },
  methods: {
        // Convenience method to scroll an element that is offscreen into view
        // Not required for ScrollSpy to work
        scrollIntoView($event) {
            const href = $event.target.getAttribute('href');
            if (href) {
                const el = document.querySelector(href);
                if (el) {
                    el.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        }
    }
}
</script>
<!-- scrollspy.vue ->


