<script>
	import Header from '$lib/header/Header.svelte';
	import '../app.css';
</script>

<Header />

<main style="height: calc(100VH - 47px);margin-top:47px;overflow:hidden; display: flex;align-items:center;justify-content:center;">
	<slot />
</main>

<footer>

</footer>

<style>

</style>
