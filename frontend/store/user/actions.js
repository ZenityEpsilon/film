export default {
	async load() {
		return this.$api.get('user');
	},
	login(context, { username, password }) {
		return this.$api.get('users.login', { username, password });
	},
};
