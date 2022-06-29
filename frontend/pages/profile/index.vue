<template>
	<section class="profile">
		<pre>{{ $store.state.user }}</pre>
	</section>
</template>

<script>
export default {
	name: 'ProfileIndex',
	middleware: ['init', 'user'],
	created() {
		if (process.client && !this.$store.state.user.session.user) {
			this.$router.push(this.localeRoute('/profile/login'));
		}
	},
};
</script>
