/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {},
			boxShadow: {
				'box-shadow-white': '0 0 15px rgba(255, 255, 255, 0.8)',
				'box-shadow-blue': '0 0 60px rgba(30, 50, 255, 0.8)',
			},
			dropShadow: {
				'3xl': '3px 5px 2px rgb(0 0 0 / 0.7)',
				'header': '3px 3px 2px rgb(0 0 0 / 0.5)',
			}
		},
	},
	plugins: [],
}