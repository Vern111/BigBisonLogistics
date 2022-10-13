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
			},
			fontFamily: {
				sans: ['Oswald', ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [],
};
