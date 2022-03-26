<script context="module">
	export const prerender = true;
	import { fly } from 'svelte/transition';
</script>


<script>

</script>

<svelte:head>
	<title>Will Samuel - Home</title>
</svelte:head>

<section in:fly="{{ y: 200, duration: 300}}" >
	<div class="home-inner">
		<div class="image-div">
			<img src="will-turin.webp" alt="Photo of Will Samuel at the Stadio Olimpico de Turin"/>
		</div>
		<h1>Will Samuel <br/> Developer</h1>
	</div>
</section>

<style> 
	.home-inner {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.image-div {
		background: linear-gradient(90deg, rgba(0,93,221,1) 0%, rgba(0,191,230,1) 100%);
		border-radius: 100%;
		width: 250px;
		height: 250px;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-right: 20px;
	}

	.home-inner img {
		width: 96%;
		height: 96%;
		display: block;
		object-fit: cover;
		object-position: top;
		border-radius: 100%;
	}

	h1 {
		color: #84D2F6;
		font-size: 100px;
		line-height: 0.7;
		letter-spacing: -14.9px;
		text-transform: uppercase;
	}

	@media(max-width: 1000px){		
		.home-inner {
			flex-direction: column;
		}

		h1 {
			font-size: 50px;
		}
	}
</style>
