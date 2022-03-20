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
		<h1>Contact Will Samuel</h1>
		<p>mail@willsamuel.co.uk</p>
		
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
		padding: 10px;
	}


</style>
