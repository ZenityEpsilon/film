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
	name: 'DefaultLayout',
};
</script>
