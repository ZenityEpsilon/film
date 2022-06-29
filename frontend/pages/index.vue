<template>
	<section class="main">
		<div class="main-filter"></div>
		<div class="main-list">
			<div v-for="(item, index) in items" :key="index" class="main-listItem">
				<card-film :item="item"></card-film>
			</div>
		</div>
	</section>
</template>

<script>
import CardFilm from '@/components/base/CardFilm';

export default {
	name: 'IndexPage',
	components: {
		CardFilm,
	},
	data() {
		return {
			items: this.$store.state.films.items,
		};
	},
	middleware: ['init'],
};
</script>

<style lang="scss">
.main {
	@apply overflow-hidden px-8;
	&-list {
		@apply flex justify-center flex-wrap -mx-4;
		&Item {
			@apply px-4 mb-8 flex-12;
			max-width: 320px;
			@screen md {
				@apply flex-6;
				max-width: 100%;
			}
			@screen lg {
				flex: 0 0 20%;
			}
		}
	}
}
</style>
