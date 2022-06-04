export default {
	async load({ commit }) {
		commit('setItems', [
			{
				id: 0,
				title: 'Комната питухов',
				description: 'Тут должен быть долгий текст с описанием что бы верстать',
				pseudoname: 'pituchi',
				peopleCount: 5,
				movieTitle: 'Жосткое порево',
				open: true,
				dateCreate: 1294941,
			},
			{
				id: 1,
				title: 'Не питухи',
				pseudoname: 'nonepituchi',
				peopleCount: 1,
				movieTitle: 'НЕЖосткое порево',
				open: false,
			},
		]);
	},
};
