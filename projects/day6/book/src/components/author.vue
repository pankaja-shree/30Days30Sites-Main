<template>
	<div id="header">
<!-- Home -->
	<section class="blog section-wrapper" id="blog">
 		<div class="container">
 			<div class="row">
 				<div class="col-sm-8 blog-left">
 					<div class="blogger-id">
	 					<div class="blogger-title">Author Name</div>
	 					<div class="id">Subtitle, profession, etc</div>
 					</div>
 					<p class="light">
 						Ankkurissa seuratessa ai on et porstuasta en pirullisen. Ei ne ristiin paauasta en pirullisen. Ei ne ristiin paassyt he eikohain.
 					</p>
 					<p class="body">
 						Ankkurissa seuratessa ai on et porstuasta en pirullisen. Ei ne ristiin paassyt he eikohain isomman tulossa uudesta. Nyt ota jattaa viinan edessa kai. Your Culture is your brand.Kuunnella ainaisena se kajuttaan ja asiakseen. Voi sylkea kay jos auttaa saalla nuo siella saukko sisaan. Kuin no koko ihan joka te mina he ne.
 					</p>
 				</div> <!-- /.col-sm-8 -->
 				<div class="col-sm-4 text-center">
                 <img :src="author_img" alt="author" class="blogger">
 					<h2 class = "blogger-id">
 						Get in touch 
 					</h2>
 					<div class="text-center">
					<div class="social-icons">
						<a href="#"><i class="fa fa-facebook icons" aria-hidden="true"></i></a>
						<a href="#"><i class="fa fa-twitter icons" aria-hidden="true"></i></a>
						<a href="#"><i class="fa fa-reddit-alien icons" aria-hidden="true"></i></a>
						<a href="#"><i class="fa fa-pinterest icons" aria-hidden="true"></i></i></a>
					</div>
                    <button class="btn btn-send">
                        <i class="fa fa-envelope-o" aria-hidden="true"></i>
                            Send Email
                        </button>
				</div>
 				</div>
 			</div> <!-- /.row -->
 		</div> <!-- /.container -->
 	</section> <!-- /#blog -->
	</div>
    </template>

    <script>
export default {
  name: 'reviews',
  data () {
    return {
		author_img: './src/assets/author.jpg'
    }
  }
}
</script>

