export default {
	async load() {
		return this.$api.get('main.meta');
	},
};
