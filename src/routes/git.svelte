<script context="module">
	export const prerender = true;
</script>


<script>
	import Counter from '$lib/Counter.svelte';
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section>
	<div class="home-inner">
		<h1>Will Samuel's Git</h1>
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
	section {
		display: flex;
		align-items: center;
		justify-content: center;		
		padding: 20px;
	}

	.home-inner {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		background-color: white;
	}

	.git-items {
		display: flex;
		flex-wrap: wrap;
	}

	.git-single {
		width: 30%;
		border: 1px solid orange;
	}

</style>
