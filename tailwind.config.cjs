/** @type {import('tailwindcss').Config} */
const defaultTheme  = require("tailwindcss/defaultTheme")

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
		screens: {
			'msm' : '0px',
			'xs': '475px',
			...defaultTheme.screens,
		},
	},
	plugins: [],
}
