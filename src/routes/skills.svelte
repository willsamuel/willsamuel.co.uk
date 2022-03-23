<script context="module">
	export const prerender = true;
	import { fly } from 'svelte/transition';
</script>


<script>
	import Counter from '$lib/Counter.svelte'; 
</script>

<svelte:head>
	<title>Home</title> 
</svelte:head>

<section in:fly="{{ y: 200, duration: 300}}" >
	<div class="inner">
		<h1>Skills</h1>
		<p>Including, but not limited to...</p>
		<div class="circle">
			<div class="triangle">
				<div class="triangle-inner">
				<h2>PHP</h2> 
				<p>WordPress, Laravel</p>
				</div>
			</div>
			<div class="triangle">
				<div class="triangle-inner">
					<h2>Python</h2> 
					<p>Django, Flask</p>
					</div>
			</div>
			<div class="triangle">
				<div class="triangle-inner">
					<h2>Javascript</h2> 
					<p>jquery, React, Svelte</p>
				</div>
			</div>
			<div class="triangle">
				<div class="triangle-inner">
					<h2>Dev Ops</h2> 
					<p>Linux, CI/CD, GIT</p>
				</div>
			</div>
			<div class="triangle">
				<div class="triangle-inner">
					<h2>Markup</h2> 
					<p>HTML5, CSS3, SASS, Less, Gulp, NPM</p>
				</div>
			</div>
		</div>
	</div>
</section>

<style lang="scss">
.circle {
	width: 65VH;
	height: 65VH;
	border-radius: 100%;
	border: 2px solid rgba(0,93,221,1);
	position: relative;
	overflow: hidden;
	animation-name: rotate;
  animation-duration: 20s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}

.triangle {
	width: 50%; 
    height: 50%;
    position: absolute;
    top: 0%;
    left: 25%;
    transform: rotate(0deg);
    transform-origin: bottom;
	display: flex;
	align-items: flex-start;
	justify-content: center;

	.triangle-inner {
		width: 70%;
		height: 70%;
		border-radius: 100%;
		// border: 1px solid rgba(0,93,221,1);
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		animation-name: circle-1;
  animation-duration: 20s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
	}

	&:nth-of-type(2) {
		transform: rotate(72deg);
		.triangle-inner {
			animation-name: circle-2;
		}
	}
	&:nth-of-type(3) {
		transform: rotate(144deg);
		.triangle-inner {
			animation-name: circle-3;
		}
	}
	&:nth-of-type(4) {
		transform: rotate(216deg);
		.triangle-inner {
			animation-name: circle-4;
		}
	}
	&:nth-of-type(5) {
		transform: rotate(288deg); 
		.triangle-inner {
			animation-name: circle-5;
		}
	}
}

.triangle:before {
    content: "";
    position: absolute;
    bottom: 0px;
    left: calc(50% - 1px);
    width: 2px;
    height: 200%;
    background-color: rgba(0,93,221,1);
    display: block;
    transform: rotate(-36deg);
    transform-origin: bottom;
}

.triangle:after {
    content: "";
    position: absolute;
    bottom: 0px;
    left: calc(50% - 1px);
    width: 2px;
    height: 200%;
    background-color: rgba(0,93,221,1);
    display: block;
    transform: rotate(36deg);
    transform-origin: bottom;
}

@keyframes rotate {
  from {transform:rotate(0deg);}
  to {transform: rotate(360deg)}
}

@keyframes circle-1 {
	from {transform:rotate(0deg);}
  to {transform: rotate(-360deg)}
}

@keyframes circle-2 {
	from {transform:rotate(-72deg);}
  to {transform: rotate(-432deg)}
}

@keyframes circle-3 {
  from {transform:rotate(-144deg);}
  to {transform: rotate(-504deg)}
}

@keyframes circle-4 {
  from {transform:rotate(-216deg);}
  to {transform: rotate(-576deg)}
}

@keyframes circle-5 {
  from {transform:rotate(-288deg);}
  to {transform: rotate(-648deg)}
}

p {
	text-align: center;
}

h2 {
	margin: 0px;
}
</style>
