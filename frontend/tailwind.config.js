module.exports = {
	purge: [
		'./components/**/*.{vue,js}',
		'./layouts/**/*.vue',
		'./pages/**/*.vue',
		'./plugins/**/*.{js,ts}',
		'./nuxt.config.{js,ts}',
	],
	darkMode: false, // or 'media' or 'class'
	theme: {
		screens: {
			md: '768px',
			lg: '1200px',
		},
		flex: {
			auto: '0 0 auto',
			none: 'none',
			12: '0 0 100%',
			7: '0 0 75%',
			6: '0 0 50%',
			4: '0 0 33.3333%',
			3: '0 0 25%',
		},
		extend: {},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
