/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				hero: "url('../public/assets/hero.jpg')",
				luckbox: "url('../public/assets/luckboxdim.png')",
			},
			fontFamily: {
				sans: ['Oswald', ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [],
};
