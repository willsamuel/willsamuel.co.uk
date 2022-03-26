<script>
	import { page } from '$app/stores';
</script>

<header>
	<div>
	</div>

	<nav>
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z" />
		</svg>
		<ul>
			<li class:active={$page.url.pathname === '/'}><a sveltekit:prefetch href="/">Home</a></li>
			
			<li class:active={$page.url.pathname === '/about'}>
				<a sveltekit:prefetch href="/about">About</a>
			</li>
			
			<li class:active={$page.url.pathname === '/skills'}>
				<a sveltekit:prefetch href="/skills">Skills</a>
			</li>

			<li class:active={$page.url.pathname === '/git'}>
				<a sveltekit:prefetch href="/git">Git</a>
			</li>

			<li class:active={$page.url.pathname === '/contact'}>
				<a sveltekit:prefetch href="/contact">Contact</a>
			</li>
		</ul>
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z" />
		</svg>
	</nav>

</header>

<style lang="scss">
	header {
		display: flex;
		align-items: center;
		justify-content: center;
		position: fixed;
		top: 0px;
		left: 0px;
		width: 100%;
	}

	nav {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
		--background: rgba(255, 255, 255, 0.9);
	}

	svg {
		width: 2em;
		height: 3em;
		display: block;
	}

	path {
		fill: var(--background);
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 10px;
		color: var(--heading-color);
		font-weight: 700;
		font-size: 13px;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;

		&:hover {
			color: #005ddd;
		}

		@media(max-width:720px){
			font-size: 12px;
			padding: 0px 6px;
		}
	}

	a:hover {
		color: var(--accent-color);
	}
</style>
