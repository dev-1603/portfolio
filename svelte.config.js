import { mdsvex } from 'mdsvex';
import adapterVercel from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [vitePreprocess(), mdsvex()],
	kit: {
		adapter: adapterVercel({
			runtime: 'nodejs22.x'
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
