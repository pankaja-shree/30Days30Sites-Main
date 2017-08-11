<template>
<div id="app">

  <b-navbar v-b-scrollspy:scrollspy-example toggleable type="light" variant="faded" toggle-breakpoint="md" fixed="top">
    <b-nav-toggle target="nav_collapse"></b-nav-toggle>
    <b-navbar-brand href="#home">BookName</b-navbar-brand>
    <b-collapse is-nav id="nav_collapse">
    <b-nav pills>
      <b-nav-item href="#about" @click.stop="scrollIntoView($event)">About</b-nav-item>
      <b-nav-item href="#author" @click.stop="scrollIntoView($event)">Author</b-nav-item>
      <b-nav-item href="#purchase" @click.stop="scrollIntoView($event)">Purchase</b-nav-item>
    </b-nav>
    </b-collapse>
  </b-navbar>


  <div id="scrollspy-example">
    <app-header id="home"></app-header>
      <app-book id="about"></app-book>
      <book-review></book-review>
      <book-author id="author"></book-author>
      <app-purchase id="purchase"></app-purchase>
  </div>
  <app-footer></app-footer>
</div>
</template>

<script>
import header from './components/header.vue'
import book from './components/book.vue'
import reviews from './components/reviews.vue'
import purchase from './components/purchase.vue'
import author from './components/author.vue'
import footer from './components/footer.vue'

export default {
  name: 'app',
  components: {
    'app-header': header,
    'app-book': book,
    'app-purchase': purchase,
    'book-review': reviews,
    'book-author': author,
    'app-footer': footer
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


