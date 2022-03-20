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
		<img src="will-turin.jpg"/>
		<h1>Will Samuel <br/> Developer</h1>
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
	}

	.home-inner img {
		width: 200px;
		height: 200px;
		display: block;
		object-fit: cover;
		object-position: top;
		border: 3px solid #84D2F6;
		margin-right: 10px;
		border-radius: 100%;
	}
	h1 {
		color: #84D2F6;
    font-size: 100px;
    line-height: 0.7;
    letter-spacing: -14.9px;
	text-transform: uppercase;
	}
</style>
