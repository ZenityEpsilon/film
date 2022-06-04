<template>
	<section class="menu" ref="menu" :class="{ menu_fixed: fixed }">
		<div class="menu-container">
			<ul class="menu-list" :class="{ 'menu-list_visible': hidden }">
				<li v-for="(item, index) in items" :key="index" class="menu-listItem">
					<nuxt-link :to="localePath({ path: item.pseudoname })" class="menu-listLink">
						{{ item.title }}
					</nuxt-link>
					<ul v-if="item.genres" class="menu-sublist" :class="{ 'menu-sublist_visible': hidden }">
						<li v-for="(genre, number) in item.genres" :key="number" class="menu-sublistItem">
							<nuxt-link
								:to="localePath({ path: '/genres/:id', params: { id: genre.pseudoname } })"
								class="menu-sublistLink"
							>
								{{ genre.title }}
							</nuxt-link>
						</li>
					</ul>
				</li>
			</ul>
			<nuxt-link
				:to="switchLocalePath(this.$i18n.locale === 'ru' ? 'ua' : 'ru')"
				class="menu-lang"
				:class="['menu-lang_' + this.$i18n.locale, { 'menu-lang_visible': hidden }]"
			>
				<i><i></i></i>
			</nuxt-link>
			<form action="" class="menu-form">
				<button class="menu-formButton">
					<svg class="menu-formSVG icons icons_loupe">
						<use xlink:href="/images/icons.svg#loupe"></use>
					</svg>
				</button>
				<input type="text" class="menu-formInput" :placeholder="$t('search')" />
			</form>
			<nuxt-link to="profile" class="menu-profile" :class="{ 'menu-profile_visible': hidden }">
				<svg class="menu-profileSVG icons icons_tv">
					<use xlink:href="/images/icons.svg#profile"></use>
				</svg>
			</nuxt-link>
			<div class="menu-burger" @click="hidden = !hidden" :class="{ 'menu-burger_cross': hidden }">
				<i>
					<i>
						<i></i>
					</i>
				</i>
			</div>
		</div>
	</section>
</template>

<script>
import { locale } from '~/lib/helper.js';

export default {
	name: 'CoreMenu',
	data() {
		return {
			fixed: false,
			hidden: false,
		};
	},
	mounted() {
		document.addEventListener('scroll', this.checkScroll);
		this.checkScroll();
		window.addEventListener('resize', () => {
			this.hidden = false;
		});
	},
	methods: {
		checkScroll() {
			this.fixed = window.scrollY > this.$refs.menu.offsetTop;
		},
	},
	computed: {
		items() {
			return [
				{ title: this.$i18n.t('main'), pseudoname: '/' },
				{ title: this.$i18n.t('news'), pseudoname: '/news' },
				{
					title: this.$i18n.t('genres'),
					pseudoname: '/genres',
					genres: locale(this.$store.state.genres, ['title'], this.$i18n.locale),
				},
				{
					title: this.$i18n.t('rooms'),
					pseudoname: '/rooms',
				},
				{ title: this.$i18n.t('pravo'), pseudoname: '/pravo' },
			];
		},
	},
	beforeDestroy() {
		document.removeEventListener('scroll', this.checkScroll);
	},
};
</script>

<style lang="scss">
.menu {
	@apply relative mb-10;
	height: 70px;
	z-index: 3;
	&_fixed {
		.menu-container {
			@apply top-0 left-0 fixed;
			z-index: 3;
		}
	}
	&-container {
		@apply flex justify-between items-center relative w-full bg-gray-900 px-4 text-xl;
		height: 70px;
		@screen md {
			@apply px-8;
		}
	}
	&-list {
		@apply hidden relative;
		@screen md {
			@apply flex;
		}
		&_visible {
			@apply block absolute bg-gray-900;
			top: 128px;
			left: 0;
			right: 0;
		}
		&Item {
			&:hover {
				@apply bg-gray-700;
				.menu-sublist {
					@apply block;
				}
			}
		}
		&Link {
			@apply block md:inline-block px-5 py-2.5;
			transition: all 0.5s;
			@screen md {
				@apply p-5;
			}
			&:hover {
				@apply bg-gray-700;
			}
		}
	}
	&-sublist {
		@apply hidden absolute bg-gray-900;
		&_visible {
			@apply block static pl-5;
		}
		&Link {
			@apply block md:inline-block w-full px-5 py-2.5;
			transition: all 0.5s;
			&:hover {
				@apply bg-gray-700;
			}
		}
	}
	&-lang {
		@apply hidden;
		border-radius: 50%;
		padding: 16px 9px;
		@screen md {
			@apply block;
		}
		&:hover {
			@apply bg-gray-700;
		}
		&_ua {
			i {
				@apply block relative bg-blue-500;
				width: 40px;
				height: 26px;
				margin: 0 auto;
				i {
					@apply absolute bg-yellow-300;
					height: 13px;
					top: 13px;
				}
			}
		}
		&_ru {
			i {
				@apply block relative bg-white;
				width: 40px;
				height: 26px;
				margin: 0 auto;
				i {
					@apply absolute bg-blue-500;
					height: 8px;
					top: 9px;
				}
			}
		}
		&_visible {
			@apply block absolute bg-gray-900;
			border-radius: 0;
			height: 62px;
			top: 69px;
			left: 0;
			right: 49.6%;
		}
	}
	&-form {
		@apply flex items-start;
		&Button {
			@apply py-1 px-3.5;
			transition: all 0.5s;
			border: 2px solid white;
			border-radius: 25px 0 0 25px;
			height: 40px;
			&:hover {
				@apply bg-gray-700;
			}
		}
		&Input {
			@apply p-1 text-black;
			width: 200px;
			border: 2px solid white;
			border-radius: 0 25px 25px 0;
			&:active,
			&:focus {
				outline: none;
			}
		}
	}
	&-profile {
		@apply hidden py-5 px-7;
		transition: all 0.5s;
		@screen md {
			@apply inline-block;
		}
		&:hover {
			@apply bg-gray-700;
		}
		&_visible {
			@apply block absolute bg-gray-900;
			top: 68px;
			right: 0;
			left: 50%;
		}
		&SVG {
			display: block !important;
			margin: 0 auto;
		}
	}
	&-burger {
		@apply py-8 px-5 md:hidden;
		transition: all 0.55s;
		&_cross {
			@apply bg-gray-700 cursor-pointer;
			i {
				transform: rotate(45deg);
				bottom: 0 !important;
				i {
					transform: rotate(90deg);
					top: 0 !important;
					i {
						@apply hidden;
					}
				}
			}
		}
		i {
			@apply block relative bg-white;
			transition: all 0.55s;
			border-radius: 15px;
			width: 30px;
			height: 4px;
			bottom: 8px;
			i {
				@apply block absolute bg-white;
				transition: all 0.55s;
				width: 30px;
				height: 4px;
				top: 10px;
				i {
					@apply absolute bg-white;
					transition: all 0.55s;
					width: 30px;
					height: 4px;
					bottom: 19px;
				}
			}
		}
	}
}
</style>
