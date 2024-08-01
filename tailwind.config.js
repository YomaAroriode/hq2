/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				'custom-green': '#75FA67',
				'custom-yellow': '#FBBC05',
				'custom-black': '#D9D9D9',
			},
		},
	},
	plugins: [],
};
