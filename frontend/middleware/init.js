export default async ({ store }) => {
	await store.dispatch('meta/load');
};
