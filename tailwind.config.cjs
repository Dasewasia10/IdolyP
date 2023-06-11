/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
		"./page/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				ip: "#1024fc",
			},
			fontFamily: {
				bifur: ["Bifur", "sans-serif"],
				movement: ["Movement", "sans-serif"],
				notoJP: ["NotoSansJP", "sans-serif"]
			},
		},
	},
	plugins: [require("prettier-plugin-tailwindcss")],
};
