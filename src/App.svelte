<script>
	import { Router, Link, Route } from "svelte-routing";
	import Home from "../routes/home.svelte";
	import About from "../routes/about.svelte";
	export let url = "";
	export let name;
</script>

<Home />
<!-- <Router {url}> -->
	<!-- <nav>
		<Link to="/">Home</Link>
		<Link to="welcome/contact">About</Link>
	</nav> -->
	<!-- <div class="container">
		<Route path="/" component={Home} />
		<Route path="welcome/contact" component={About} />
	</div> -->
<!-- </Router> -->

<style>
	@import url("https://fonts.googleapis.com/css2?family=Teko&display=swap");

	main {
		padding: 100px 0;
		display: flex;
		justify-content: center;
		background-color: #8a00ec;
	}
	.container {
		width: 1024px;
	}
	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}
	.background {
		background-size: cover;
	}
	:global(body, h1) {
		padding: 0;
		margin: 0;
	}
	/* :global(body) {
		background-image: url("../assets/image/bg.jpeg");
		background-size: cover;
	} */
	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
