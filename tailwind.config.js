/**
 * @format
 * @type {import('tailwindcss').Config}
 */

module.exports = {
	darkMode: "class",
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#1fb6ff",
				secondary: "#7e5bef",
				"primary-dark": "#ff49db",
			},
		},
	},
	plugins: [],
};
