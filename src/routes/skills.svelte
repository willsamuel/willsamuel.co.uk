<script context="module">
	export const prerender = true;
	import { fly } from 'svelte/transition';
</script>


<script>
	import Counter from '$lib/Counter.svelte'; 
</script>

<svelte:head>
	<title>Will Samuel - Skills</title> 
</svelte:head>

<section in:fly="{{ y: 200, duration: 300}}" >
	<div class="inner">
		<h1>Skills</h1>
		<div class="circle-outer">
		<div class="circle">
			<div class="triangle">
				<div class="triangle-inner">
				<h2>Front End</h2> 
				<p>HTML, CSS, SASS, jQuery, React, Svelte, NPM</p>
				</div>
				<div class="background"></div>
			</div>
			<div class="triangle">
				<div class="triangle-inner">
					<h2>Back End</h2> 
					<p>PHP, WordPress, Laravel, Python, Django, Flask, SQL</p>
				</div>
				<div class="background"></div>
			</div>
			<div class="triangle">
				<div class="triangle-inner">
					<h2>Dev Ops</h2> 
					<p>Linux Server, cPanel, Plesk, CI/CD, GIT</p>					
				</div>
				<div class="background"></div>
			</div>
			<div class="triangle">
				<div class="triangle-inner">
					<h2>SEO</h2> 
					<p>Tech SEO, Speed Optimisation, Site Audits</p>
					
				</div>
				<div class="background"></div>
			</div>
			<div class="triangle">
				<div class="triangle-inner">
					<h2>Soft Skills</h2> 
					<p>Developer Mentoring, Client Meetings, Project Management</p>					
				</div>
				<div class="background"></div>
			</div>
		</div>
	</div>
	</div>
</section>

<style lang="scss">

	.circle-outer {
		background: linear-gradient(90deg, rgba(0,93,221,1) 0%, rgba(0,191,230,1) 100%);
		border-radius: 100%;
	}
.circle {
	width: 65VH;
	height: 65VH;
	border-radius: 100%;
	border: 2px solid rgba(0,93,221,1);
	position: relative;
	overflow: hidden;
	animation-name: rotate;
	animation-duration: 30s;
	animation-timing-function: linear;
	animation-iteration-count: infinite;
	// background: linear-gradient(90deg, rgba(0,93,221,1) 0%, rgba(0,191,230,1) 100%);
	color: white;

	@media(max-width:1000px){
		width:calc(100VW - 80px);
		height:calc(100VW - 80px);
	}

	h2 {
		color: white;
		background: transparent;
		-webkit-background-clip: initial;
		-webkit-text-fill-color: white;
		margin-bottom: 10px;
	}
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

	.background {
		position: absolute;
		bottom: 0px;
		left: 50%;
		transform: translateX(-50%);
		width: 0;
		height: 0;
		border-style: solid;
		border-width: 500px 359px 0 359px;
		border-color: #5650F5 transparent transparent transparent;	
		z-index:-1;
	}

	.triangle-inner {
		margin-top: 2%;
		width: 70%;
		height: 70%;
		border-radius: 100%;
		// border: 1px solid rgba(0,93,221,1);
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		animation-name: circle-1;
		animation-duration: 30s;
		animation-timing-function: linear;
		animation-iteration-count: infinite;
	}

	&:nth-of-type(2) {
		transform: rotate(72deg);
		.triangle-inner {
			animation-name: circle-2;
		}
		.background {
			border-color: #3EDEB4 transparent transparent transparent
		}
	}
	&:nth-of-type(3) {
		transform: rotate(144deg);
		.triangle-inner {
			animation-name: circle-3;
		}
		.background {
			border-color: #6cff47 transparent transparent transparent
		}
	}
	&:nth-of-type(4) {
		transform: rotate(216deg);
		.triangle-inner {
			animation-name: circle-4;
		}
		.background {
			border-color: #FAB348 transparent transparent transparent
		}
	}
	&:nth-of-type(5) {
		transform: rotate(288deg); 
		.triangle-inner {
			animation-name: circle-5;
		}
		.background {
			border-color: #DE3E75 transparent transparent transparent
		}
	}
}

.triangle:before {
    content: "";
    position: absolute;
    bottom: 0px;
    left: calc(50% - 1px);
    width: 2px;
    height: 100%;
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
    height: 100%;
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
	margin: 0px;
}

h2 {
	margin: 0px;
	padding: 0px;
}
</style>
