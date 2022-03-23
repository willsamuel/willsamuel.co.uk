<script context="module">
	export const prerender = true;
	import { fly } from 'svelte/transition';

</script>


<script>
	 import { fade } from 'svelte/transition';
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section in:fly="{{ y: 200, duration: 300}}" >
	<div class="inner">
		<h1>Will Samuel's Git</h1>
		<p>I don't really have much code in public GITs, all my best work is for private companies, but here are a few things I've put together.</p>
		<div class="git-items"> 
			<div class="git-single">
				<p>Python SEO Tools</p>
			</div>
			<div class="git-single">
				<p>Wordpress Weather Plugin</p>
			</div>
			<div class="git-single">
				<p>willsamuel.co.uk</p>
			</div>
			<div class="git-single">
				
			</div>
			<div class="git-single">
				
			</div>
		</div>
	</div>
</section>

<style>

	.git-items {
		display: flex;
		flex-wrap: wrap;
	}

	.git-single {
		width: 30%;
		border: 1px solid orange;
	}

</style>
