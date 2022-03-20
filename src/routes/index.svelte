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
		<img src="bill-cropped.jpg"/>
		<h1>Will Samuel - Developer</h1>
	</div>
</section>

<style>
	section {
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: rgba(255,255,255,0.5);
		padding: 20px;
	}

	.home-inner {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.home-inner img {
		width: 300px;
		margin-right: 10px;
	}
</style>
