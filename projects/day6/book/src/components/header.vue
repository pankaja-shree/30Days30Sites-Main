<template>
<!-- Home -->
	<section class="home" id="home">
		<div class="home-bg">
			<div class="container-fluid">
				 <div class="row">
					<div class="col-xs-12 col-sm-5 col-sm-offset-6 col-md-5">
						<div class="header-wrapper">
							<h1 class="header-title">Book title</h1>
							<p class="header-sub">
								Book subtitle; Author name.
							</p>
							<p class="description">
								Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
							</p>
							<a class="btn btn-default btn-lg bttn" href="#about" role="button">About The Book</a>
							<a class="btn btn-default btn-lg red" href="#purchase" role="button">Purchase The Book</a>
						</div> <!-- /.header-wrapper -->
					</div>	<!-- .col-sm-5 -->
				</div> <!-- .row -->
			</div> <!-- /.container-fluid -->
				<section class="book" id="book">
		<div class="book-bg">
			<div class="container section-wrapper">
				<div class="row">
					<div class="col-sm-6">
						<h2 class="section">
							About The Book
						</h2>
						<p class="light">
							Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
						</p>
						<p class="body">
							Ankkurissa seuratessa ai on et porstuasta en pirullisen. Ei ne ristiin paassyt he eikohain isomman tulossa uudesta. Nyt ota jattaa viinan edessa kai. <strong>Your Culture is your brand</strong> .Kuunnella ainaisena se kajuttaan ja asiakseen. Voi sylkea kay jos auttaa saalla nuo siella saukko sisaan. Kuin no koko ihan joka te mina he ne.
						</p>
						<p class="body">
							uoksette ota vavahtaen jaa tee <strong>kaantynyt</strong> mimmoinen. Paahasi et talloin ja ne uusilla. Paljo milla uhria ja ja onkin. Jotakin on jo karille jaa tee kaanty ok done.
						</p>
					</div>
				</div>
			</div> <!-- .container -->
		</div> <!-- /.book-bg -->
	</section> <!-- #book --> 
	<section class="cta-1 container-fluid">
	<blockquote class="blockquote">
		<p class="mb-0">"A few hundred years of type and <strong class="regular">typography</strong> have <br> established <strong class="regular">rules</strong> that only a fool would ignore."</p>
	</blockquote>
	</section> <!-- /.cta-1 -->
		</div> <!-- .home-bg -->
	</section> <!-- #home -->
    </template>

    <script>
		import book from './book.vue'
export default {
  name: 'header',
  data () {
    return {
    }
  },
	components: {
    'app-book': book
  }
}
</script>


