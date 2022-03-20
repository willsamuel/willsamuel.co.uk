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
		<h1>Will Samuel Skills</h1>
		<h2>PHP Related Skills</h2>
		<p>Wordpress & Laravel</p>
		<h2>Javascript Related SKills</h2>
		<p>Jquery, React(Next.JS and Gatsyby.js), Svelte</p>
		<h2>Python Related Skills</h2>
		<p>Django, Flask</p>
		<h2>Dev Ops</h2>
		<p>Linux Server, Cpanel, Plesk, CI/CD, AWS</p>
		<h2>Design Related Skills</h2>
		<p>HTML5, CSS3, SASS, LESS, Tailwind, Gulp, Grunt, npm</p>
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
