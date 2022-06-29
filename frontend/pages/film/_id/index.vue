<template>
	<section>
		<div class="film">
			<div class="film-container">
				<div class="film-imgContainer">
					<img :src="item.img" :alt="item.alt" class="film-img" />
					<div class="film-type">
						<svg class="film-svg icons icons_serial" v-if="item.type === 2">
							<use xlink:href="/images/icons.svg#tv"></use>
						</svg>
						<svg class="film-svg icons icons_tv" v-else-if="item.type === 1">
							<use xlink:href="/images/icons.svg#serial"></use>
						</svg>
						{{ type }}
					</div>
					<div class="film-room" @click="popup = !popup">
						<svg class="film-svg icons icons_play">
							<use xlink:href="/images/icons.svg#play"></use>
						</svg>
						{{ $t('createRoom') }}
					</div>
				</div>
				<div class="film-info">
					<h1 class="film-title">{{ item.title }}</h1>
					<film-rating :rating="item.rating"></film-rating>
					<div class="film-release">{{ $t('release') }}: {{ item.release }}</div>
					<div class="film-country">{{ $t('country') }}: {{ item.country }}</div>
					<div class="film-genres">
						{{ this.$t('genres') }}:
						<!-- prettier-ignore -->
						<nuxt-link
							v-for="(genre, index) in item.genres"
							:key="index"
							:to="localeLocation({ name: 'genres-id', params: { id: genre.pseudoname } })"
							class="film-genreLink"
						>
							{{ genre.title }}<template v-if="index < item.genres.length - 1">,</template>
						</nuxt-link>
					</div>
					<div class="film-actors">
						Актёры:
						<span v-for="(actor, index) in item.actors" :key="index" class="film-actorsItem">
							{{ actor.name }}
							<template v-if="index < item.actors.length - 1">,</template>
						</span>
					</div>
					<div class="film-description" v-html="item.description"></div>
				</div>
			</div>
			<div class="film-relative">
				<div v-for="(film, index) in relative" :key="index" class="film-relativeItem">
					<card-film :item="film"></card-film>
				</div>
			</div>
		</div>
		<the-popup v-model="popup" :active="popup">
			<create-room></create-room>
		</the-popup>
	</section>
</template>

<script>
import FilmRating from '~/components/base/FilmRating';
import CardFilm from '~/components/base/CardFilm';
import CreateRoom from '~/components/base/CreateRoom';

export default {
	name: 'pageFilm',
	components: {
		FilmRating,
		CardFilm,
		CreateRoom,
	},
	data() {
		return {
			popup: false,
		};
	},
	computed: {
		item() {
			return this.$store.state.films.items.find((item) => item.pseudoname === this.$route.params.id);
		},
		type() {
			const TYPES = {
				1: this.$t('film'),
				2: this.$t('serial'),
			};
			return TYPES[this.item.type];
		},
		relative() {
			return this.$store.state.films.items
				.filter((film) => {
					if (film.title !== this.item.title) return film;
				})
				.slice(0, 5);
		},
	},
	middleware: ['init'],
};
</script>

<style lang="scss">
.film {
	@apply flex justify-between text-lg leading-5 px-14;
	&-relative {
		@apply flex flex-wrap p-2.5;
		flex: 0 0 20%;
		&Item {
			@apply p-2.5;
			flex: 0 0 100%;
		}
	}
	&-container {
		flex: 0 0 75%;
	}
	&-room {
		@apply flex absolute items-center justify-center p-6 cursor-pointer w-full;
		background-color: rgba(0, 0, 0, 0.7);
		transition: all 0.5s;
		bottom: 0;
		&:hover {
			background-color: rgba(0, 0, 0, 0.9);
		}
	}
	&-svg {
		@apply mr-1;
	}
	&-img {
		@apply w-full;
		&Container {
			@apply relative mr-5 mb-5;
			float: left;
			width: 275px;
		}
	}
	&-type {
		@apply absolute p-2.5;
		background-color: rgba(0, 0, 0, 0.7);
		border-radius: 10px;
		top: 10px;
		right: 10px;
	}
	&-title {
		@apply text-4xl mb-5;
	}
	&-description {
		@apply mb-5;
	}
	&-release,
	&-country {
		@apply mb-2.5;
	}
	&-genres,
	&-actors {
		@apply mb-2.5;
	}
}
</style>
