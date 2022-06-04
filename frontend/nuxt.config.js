import path from 'path';

export default {
	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: 'Film',
		htmlAttrs: {
			lang: 'en',
		},
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: '' },
			{ name: 'format-detection', content: 'telephone=no' },
		],
		link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: ['~/assets/css/fonts.css', '~/assets/scss/defaults.scss', '~/assets/scss/icons.scss'],

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: ['~/plugins/components.js'],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [
		// https://go.nuxtjs.dev/eslint
		'@nuxtjs/eslint-module',
		// https://go.nuxtjs.dev/tailwindcss
		'@nuxtjs/tailwindcss',
	],

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: ['@nuxtjs/i18n', '@nuxtjs/proxy'],

	proxy:
		process.env.NODE_ENV !== 'production'
			? {
					'/api': { target: 'https://film.island-rp.in.ua/api', ws: false },
			  }
			: {},

	i18n: {
		detectBrowserLanguage: {
			useCookie: true,
			cookieKey: 'i18n_redirected',
			redirectOn: 'root', // recommended
		},
		strategy: 'prefix',
		langDir: '~/locales/',
		locales: [
			{ code: 'ru', iso: 'ru-RU', file: 'ru.js', dir: 'ltr' },
			{ code: 'ua', iso: 'ua-UA', file: 'ua.js', dir: 'ltr' },
			//{ code: 'en', iso: 'en-US', file: 'en.js', dir: 'ltr' },
		],
		defaultLocale: 'ru',
	},

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {
		extractCSS: true,
		purgeCSS: { mode: 'postcss' },
		postcss: {
			plugins: {
				tailwindcss: path.resolve(__dirname, './tailwind.config.js'),
			},
		},
		html: {
			minify: {
				collapseBooleanAttributes: true,
				decodeEntities: true,
				minifyCSS: false,
				minifyJS: false,
				processConditionalComments: false,
				removeEmptyAttributes: true,
				removeRedundantAttributes: true,
				trimCustomFragments: false,
				useShortDoctype: true,
			},
		},
		splitChunks: {
			pages: true,
			vendor: false,
			commons: false,
			runtime: false,
			layouts: false,
		},
		optimization: {
			splitChunks: {
				cacheGroups: {
					styles: {
						name: 'styles',
						test: /\.(css|vue)$/,
						chunks: 'all',
						enforce: true,
					},
				},
			},
		},
		/**
		 * @param {object} config
		 * @param {{isDev, isClient}} ctx
		 */
		extend(config, ctx) {
			// Run ESLint on save
			if (ctx.isDev && ctx.isClient) {
				config.module.rules.push({
					enforce: 'pre',
					test: /\.(js|vue)$/,
					loader: 'eslint-loader',
					exclude: /(node_modules)/,
				});
			}

			if (ctx.isDev) {
				config.devtool = ctx.isClient ? 'source-map' : 'inline-source-map';
			}
		},
	},
};
