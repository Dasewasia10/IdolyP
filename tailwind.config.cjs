/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
		"./page/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				bifur: ["Bifur", "sans-serif"],
				movement: ["Movement", "sans-serif"],
			},
		},
	},
	plugins: [],
};
