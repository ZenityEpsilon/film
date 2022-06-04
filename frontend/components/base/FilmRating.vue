<template>
	<section class="rating">
		<svg v-for="(item, index) in items" :key="index" class="card-svg icons icons_serial">
			<use v-bind="{ 'xlink:href': '/images/icons.svg#' + item }"></use>
		</svg>
	</section>
</template>

<script>
export default {
	name: 'FilmRating',
	props: {
		rating: {
			type: Number,
			default() {
				return 0;
			},
		},
	},
	computed: {
		items() {
			return Array.from({ length: 5 }, (_, index) => {
				return this.rating > index
					? (this.rating * 2) % 2 === 1 && this.rating * 2 === (index + 1) * 2 - 1
						? 'star-half'
						: 'star-full'
					: 'star';
			});
		},
	},
};
</script>
