<script context="module">
	export const prerender = true;
	import { fly } from 'svelte/transition';
</script>


<script>
	var date = new Date().getFullYear();
	let year = date - "2015";
	let age = date - "1993";
</script>



<svelte:head>
	<title>Will Samuel - About</title>
</svelte:head>

<section in:fly="{{ y: 200, duration: 300}}">
	<div class="inner">
		<h1>About Will Samuel</h1>
		<code>		
			<span style='color:#f92472'>from</span> jobs <span style='color:#f92472'>import</span> developer<br/>
			Will <span style='color:#f92472'>=</span> <span style='color:#67d8ef'>developer</span>()<br/>
			Will.<span style='color:#67d8ef'>setGender</span>(<span style='color:#e7db74'>'Male'</span>)<br/>
			Will.<span style='color:#67d8ef'>setAge</span>(<span style='color:#ac80ff'>{age}</span>)<br/>
			Will.<span style='color:#67d8ef'>setNationality</span>(<span style='color:#e7db74'>'English'</span>)<br/>
			Will.<span style='color:#67d8ef'>setLocation</span>(<span style='color:#e7db74'>'London'</span>)<br/>
			Will.<span style='color:#67d8ef'>setYearsCoding</span>(<span style='color:#ac80ff'>{year}</span>)<br/>
			Will.<span style='color:#67d8ef'>setLanguages</span>([<span style='color:#e7db74'>'PHP'</span>, <span style='color:#e7db74'>'Python'</span>, <span style='color:#e7db74'>'JavaScript'</span>])<span class="blinker">|</span>		
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
		background-color: #282923;
    padding: 20px;
    color: #f8f8f2;
    margin-top: 10px;
	font-size: 14px;
	} 
	
	.blinker {
		animation:1.3s blink infinite step-end;
		font-size: 18px;
		line-height: 16px;
		margin-left: -5px;
	} 

	@keyframes blink{
  0%   {opacity: 1}
  50%  {opacity: 0}
  0%   {opacity: 1}
}

</style>
