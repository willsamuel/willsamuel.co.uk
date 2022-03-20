<script>
	import Header from '$lib/header/Header.svelte';
	import '../app.css';
</script>

<Header />

<main style="height: calc(100VH - 50px); display: flex;align-items:center;justify-content:center;">
	<slot />
</main>

<footer>

</footer>

<style>

</style>
