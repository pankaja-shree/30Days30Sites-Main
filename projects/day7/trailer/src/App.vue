<template>
  <div id="app">
		<h1 class ="slide-in-fwd-center">Responsive CSS Tabs</h1>
		<div class="tab_container">
			<input id="tab1" type="radio" name="tabs" checked>
			<label for="tab1"><span>Home</span></label>

			<input id="tab2" type="radio" name="tabs">
			<label for="tab2"><span>Synopsis</span></label>

			<input id="tab3" type="radio" name="tabs">
			<label for="tab3"><span>Videos</span></label>

			<input id="tab4" type="radio" name="tabs">
			<label for="tab4"><span>Gallery</span></label>

			<input id="tab5" type="radio" name="tabs">
			<label for="tab5"><span>Legal</span></label>

			<section id="content1" class="tab-content">
				<h3>Headline 1</h3>
		      	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
		      	tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
		      	quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
		      	consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
		      	cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
		      	proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
		      	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
		      	tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
		      	quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
		      	consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
		      	cillum dolore eu fugiat nulla pariatur.</p>
			</section>

			<section id="content2" class="tab-content">
				<h3>Headline 2</h3>
		      	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
		      	tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
		      	quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.</p>
		      	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
		      	tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
		      	quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
		      	consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
		      	cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
		      	proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
			</section>

			<section id="content3" class="tab-content">
				<h3>Headline 3</h3>
		      	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
		      	tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
		      	quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
		      	consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
		      	cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
		      	proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
		      	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
		      	tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
		      	quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
		      	consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
		      	cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
		      	proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
			</section>

			<section id="content4" class="tab-content">
				<h3>Headline 4</h3>
		      	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
		      	tempor incididunt ut labore et dolore magna aliqua.</p>
		      	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
		      	tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
		      	quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
		      	consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
		      	cillum dolore eu fugiat nulla pariatur.</p>
		      	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
		      	tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
		      	quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
		      	consequat.</p>
			</section>

			<section id="content5" class="tab-content">
				<h3>Headline 5</h3>
		      	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
		      	tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
		      	quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.</p>
		      	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
		      	tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
		      	quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
		      	consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
		      	cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
		      	proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
			</section>
	</div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped>
#app{
  background: 
    /* top, transparent red, faked with gradient */ 
    linear-gradient(
      rgba(0,0,0,0.6), 
      rgba(0,0,0,0.6)
    ),
    /* bg image */
    url('./assets/img4.jpg');
    opacity: 0.7;
    margin: 0;
		font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;
		background-size: cover;

  }
*,
*:after,
*:before {
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	box-sizing: border-box;
}

.clearfix:before,
.clearfix:after {
	content: " ";
	display: table;
}

.clearfix:after {
	clear: both;
}

h1 {
	color: white;
	text-align: center;
}

a {
  color: #ccc;
  text-decoration: none;
  outline: none;
}

/*Fun begins*/
.tab_container {
	width: 90%;
	margin: 0 auto;
	padding-top: 70px;
	position: relative;
}

input, section {
  clear: both;
  padding-top: 10px;
  display: none;
}

label {
  display: block;
  float: left;
  width: 20%;
  padding: 1.5em;
  cursor: pointer;
  text-decoration: none;
  text-align: center;
	color: white;
}

#tab1:checked ~ #content1,
#tab2:checked ~ #content2,
#tab3:checked ~ #content3,
#tab4:checked ~ #content4,
#tab5:checked ~ #content5 {
  display: block;
  padding: 20px;
  /*background: #fff;*/
  color: #fff;
  border-bottom: 2px solid #f0f0f0;
}

.tab_container .tab-content p,
.tab_container .tab-content h3 {
  -webkit-animation: fadeInScale 0.7s ease-in-out;
  -moz-animation: fadeInScale 0.7s ease-in-out;
  animation: fadeInScale 0.7s ease-in-out;
}
.tab_container .tab-content h3  {
  text-align: center;
}

.tab_container [id^="tab"]:checked + label {
	-webkit-animation: text-pop-up-top 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
	        animation: text-pop-up-top 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}

/* ----------------------------------------------
 * Generated by Animista on 2017-8-18 19:8:44
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

/**
 * ----------------------------------------
 * animation text-pop-up-top - for label on click
 * ----------------------------------------
 */
@-webkit-keyframes text-pop-up-top {
  0% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    -webkit-transform-origin: 50% 50%;
            transform-origin: 50% 50%;
    text-shadow: none;
  }
  100% {
    -webkit-transform: translateY(-50px);
            transform: translateY(-50px);
    -webkit-transform-origin: 50% 50%;
            transform-origin: 50% 50%;
    text-shadow: 0 1px 0 #cccccc, 0 2px 0 #cccccc, 0 3px 0 #cccccc, 0 4px 0 #cccccc, 0 5px 0 #cccccc, 0 6px 0 #cccccc, 0 7px 0 #cccccc, 0 8px 0 #cccccc, 0 9px 0 #cccccc, 0 50px 30px rgba(0, 0, 0, 0.3);
  }
}
@keyframes text-pop-up-top {
  0% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    -webkit-transform-origin: 50% 50%;
            transform-origin: 50% 50%;
    text-shadow: none;
  }
  100% {
    -webkit-transform: translateY(-50px);
            transform: translateY(-50px);
    -webkit-transform-origin: 50% 50%;
            transform-origin: 50% 50%;
    text-shadow: 0 1px 0 #cccccc, 0 2px 0 #cccccc, 0 3px 0 #cccccc, 0 4px 0 #cccccc, 0 5px 0 #cccccc, 0 6px 0 #cccccc, 0 7px 0 #cccccc, 0 8px 0 #cccccc, 0 9px 0 #cccccc, 0 50px 30px rgba(0, 0, 0, 0.3);
  }
}
.text-pop-up-top{
	-webkit-animation: text-pop-up-top 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
	        animation: text-pop-up-top 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}

/*Media query*/
@media only screen and (max-width: 930px) {
  label span {
    font-size: 14px;
  }
}

@media only screen and (max-width: 768px) {
  label span {
    font-size: 0.7em;
  }

  .tab_container {
    width: 98%;
  }
}

/*Content Animation*/
@keyframes fadeInScale {
  0% {
  	transform: scale(0.9);
  	opacity: 0;
  }
  
  100% {
  	transform: scale(1);
  	opacity: 1;
  }
}
</style>
