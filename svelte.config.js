import { mdsvex } from 'mdsvex';
import adapterStatic from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: [vitePreprocess(), mdsvex()],
	kit: {
		adapter: adapterStatic({
			// GitHub Pages has no server; strict: false allows dynamic routes to be skipped
			// so the rest of the site is still generated (main pages work, /api/contact will 404).
			strict: false
		}),
		paths: {
			base: ''
		},
		prerender: {
			handleHttpError: 'warn',
			entries: ['*']
		}
	},
	extensions: ['.svelte', '.svx']
};

export default config;
