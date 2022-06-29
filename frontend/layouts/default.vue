<template>
	<section class="site">
		<core-menu></core-menu>
		<nuxt></nuxt>
	</section>
</template>
<script>
import CoreMenu from '@/components/core/CoreMenu';
export default {
	components: {
		CoreMenu,
	},
	mounted() {
		this.$store.dispatch('user/load');
	},
	name: 'DefaultLayout',
};
</script>

<style lang="scss">
.site {
	@apply block;
	height: 100vh;
}
</style>
