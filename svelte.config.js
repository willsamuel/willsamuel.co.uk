import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import path, { dirname } from 'path'
import { fileURLToPath } from 'url'

const filePath = dirname(fileURLToPath(import.meta.url))
const sassPath = `${filePath}/src/`

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess({
		scss: {
			prependData: `@import '${sassPath}app.scss';`
		} 
	 }),
	kit: { 
		adapter: adapter(),

		// Override http methods in the Todo forms
		methodOverride: {
			allowed: ['PATCH', 'DELETE']
		}
	}
}; 

export default config;
