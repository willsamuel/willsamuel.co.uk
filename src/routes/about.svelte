<script context="module">
	export const prerender = true;
	import Test from '$lib/Test.svelte';
	import { fly } from 'svelte/transition';
</script>


<script>

	var date = new Date().getFullYear();
	let year = date - "2015";

	let code = "\
	Will <span style='color:red'>=</span> <span style='color:aqua'>Developer</span>()<br/>\
	Will.<span style='color:aqua'>setGender</span>(<span style='color:yellow'>'Male'</span>)<br/>\
	Will.<span style='color:aqua'>setAge</span>(<span style='color:mediumpurple'>29</span>)<br/>\
	Will.<span style='color:aqua'>setCodingExperience</span>(<span style='color:mediumpurple'>7</span>)<br/>\
	Will.<span style='color:aqua'>setNationality</span>(<span style='color:yellow'>'English'</span>)<br/>\
	Will.<span style='color:aqua'>setLocation</span>(<span style='color:yellow'>'London'</span>)<br/>\
	Will.<span style='color:aqua'>setLanguages</span>([<span style='color:yellow'>'PHP'</span>, <span style='color:yellow'>'Python'</span>, <span style='color:yellow'>'JavaScript'</span>])";
</script>



<svelte:head>
	<title>Will Samuel - About</title>
</svelte:head>

<section in:fly="{{ y: 200, duration: 300}}">
	<div class="inner">
		<h1>About Will Samuel</h1>
		<code>		
{@html code}			
		</code>
	</div>
</section>
 
<style>
	section {
		display: flex;
		align-items: center;
		justify-content: center;		
		padding: 20px;
		width: 800px;
	}

	code {
		background-color: #1e1e1e;
		padding: 10px;
		color: white;
	} 

</style>
