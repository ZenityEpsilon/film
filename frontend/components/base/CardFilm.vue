<template>
	<nuxt-link :to="localeLocation({ name: 'film-id', params: { id: item.pseudoname } })" class="card">
		<img :src="item.img" :alt="item.alt" class="card-img" />
		<div class="card-inform" ref="inform">
			<div class="card-title">{{ item.title }}</div>
			<div class="card-genre">
				{{ this.$t('genres') }}:
				<!-- prettier-ignore -->
				<nuxt-link
					tag="span"
					v-for="(genre, index) in item.genres.slice(0, 5)"
					:key="index"
					:to="genre.pseudoname"
					class="card-genreLink"
				>
					{{ genre.title }}<template v-if="index < item.genres.slice(0, 5).length - 1">,</template>
				</nuxt-link>
			</div>
			<div class="card-description" v-html="item.description"></div>
			<div class="card-rating">
				<span class="card-ratingText">{{ this.$t('rating') }}</span>
				<film-rating :rating="item.rating"></film-rating>
			</div>
		</div>
		<div class="card-type">
			<svg class="card-svg icons icons_serial" v-if="item.type === 2">
				<use xlink:href="/images/icons.svg#tv"></use>
			</svg>
			<svg class="card-svg icons icons_tv" v-else-if="item.type === 1">
				<use xlink:href="/images/icons.svg#serial"></use>
			</svg>
			{{ type }}
		</div>
	</nuxt-link>
</template>

<script>
import FilmRating from './FilmRating';

export default {
	name: 'CardFilm',
	props: {
		item: {
			type: Object,
			required: true,
		},
	},
	components: {
		FilmRating,
	},
	mounted() {
		window.addEventListener('resize', this.updateHeight);
		this.updateHeight();
	},
	methods: {
		updateHeight() {
			this.$refs.inform.style.height = null;
			window.requestAnimationFrame(() => {
				this.$refs.inform.style.height = this.$refs.inform.offsetHeight + 'px';
			});
		},
	},
	computed: {
		type() {
			const TYPES = {
				1: this.$t('film'),
				2: this.$t('serial'),
			};
			return TYPES[this.item.type];
		},
	},
	beforeDestroy() {
		window.removeEventListener('resize', this.updateHeight);
	},
};
</script>

<style lang="scss">
.card {
	@apply block relative h-full;
	&:hover {
		.card {
			&-inform {
				height: 100% !important;
			}
			&-type {
				opacity: 0;
			}
			&-description {
				display: -webkit-box;
			}
			&-rating {
				@apply block;
			}
		}
	}
	&-img {
		@apply w-full h-full;
	}
	&-inform {
		@apply absolute px-3 py-2 w-full overflow-hidden;
		bottom: 0;
		background-color: rgba(0, 0, 0, 0.7);
		transition: all 0.5s;
	}
	&-title {
		@apply text-2xl font-medium mb-1.5 overflow-hidden;
		-o-text-overflow: clip;
		text-overflow: clip;
		display: -moz-box;
		display: -webkit-box;
		box-orient: vertical;
		-webkit-box-orient: vertical;
		line-clamp: 4;
		-webkit-line-clamp: 4;
		transition: all 0.5s;
	}
	&-genre {
		@apply block text-xl;
		&Link {
			&:hover {
				@apply text-gray-500;
			}
		}
	}
	&-description {
		@apply hidden leading-5 overflow-hidden mb-2.5;
		-webkit-line-clamp: 7;
		-webkit-box-orient: vertical;
	}
	&-rating {
		@apply hidden text-xl;
	}
	&-type {
		@apply absolute p-2.5;
		background-color: rgba(0, 0, 0, 0.7);
		transition: all 0.4s;
		border-radius: 10px;
		opacity: 100%;
		top: 15px;
		right: 15px;
	}
}
</style>
