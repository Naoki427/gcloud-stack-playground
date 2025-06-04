/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
	  "./app/**/*.{js,ts,jsx,tsx}",  // App Router構成ならこう指定
	  "./components/**/*.{js,ts,jsx,tsx}"  // components配下もスキャン対象に
	],
	theme: {
	  extend: {},
	},
	plugins: [],
  }
  