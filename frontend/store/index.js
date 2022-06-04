export const state = () => ({
	genres: [
		{ title_ru: 'Вестерн', title_ua: 'Вестерн', pseudoname: 'western' },
		{ title_ru: 'Драма', title_ua: 'Драма', pseudoname: 'action' },
		{ title_ru: 'Комедия', title_ua: 'Комедія', pseudoname: 'comedy' },
		{ title_ru: 'Приключения', title_ua: 'Пригоди', pseudoname: 'adventures' },
		{ title_ru: 'Фантастика', title_ua: 'Фантастика', pseudoname: 'fantasy' },
	],
	token: '',
});
export const mutations = {};
export const actions = {
	async nuxtServerInit({ dispatch }) {
		await dispatch('films/load');
	},
};
export const getters = {};
