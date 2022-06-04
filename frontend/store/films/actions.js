export default {
	async load({ commit }) {
		commit('setItems', [
			{
				title: 'Уэйн',
				pseudoname: 'wayne',
				img: '/posters/wayne.jpg',
				alt: 'Постер к сериалу Уэйн',
				description:
					'<p>Уэйна хорошо знают в полицейском участке. Юноша не считает себя хулиганом. В драках, которые случаются с ним все чаще, парень не доказывает собственное превосходство, а восстанавливает справедливость. Но закон считает иначе. Понимает героя только его отец. Но мужчина болен раком, и жить ему осталось недолго.</p>' +
					'<p>Перед самой смертью отец успевает рассказать Уэйну. О его матери. История печальная, но довольно обыденная: она бросила мужа и ребенка и сбежала с любовником в другой штат. С собой беглецы прихватили автомобиль брошенного мужа. Отец Уэйна смирился и с той, и с другой потерей, но сам парень так не может. Вместе с подругой он отправляется по следам воров и предателей, чтобы наказать их.</p>',
				genres: [
					{ title: 'Боевик', pseudoname: 'action' },
					{ title: 'Комедия', pseudoname: 'comedy' },
				],
				type: 2,
				rating: 4,
				release: '2019',
				directors: [{ name: 'Стив Пинк' }, { name: 'Тесса Хофф' }, { name: 'Майкл Патрик Джэнн' }],
				actors: [
					{ name: 'Марк МакКенна' },
					{ name: 'Сиэра Браво' },
					{ name: 'Джон Шампейн' },
					{ name: 'Джэми Шампейн' },
					{ name: 'Джеймс Эрл' },
					{ name: 'Стивен Кеарин' },
					{ name: 'Джошуа Дж. Уильямс' },
					{ name: 'Дин Уинтерс' },
					{ name: 'Франческо Антонио' },
					{ name: 'Майк О’Мэлли' },
				],
				country: 'США',
			},
			{
				title: 'Джанго освобожденный',
				pseudoname: 'django_unchained',
				img: '/posters/django.jpg',
				alt: 'Постер к фильму Джанго освобожденный',
				description:
					'<p>ксцентричный охотник за головами, также известный как Дантист, промышляет отстрелом самых опасных преступников. Работенка пыльная, и без надежного помощника ему не обойтись. Но как найти такого и желательно не очень дорогого? Освобождённый им раб по имени Джанго – прекрасная кандидатура. Правда, у нового помощника свои мотивы – кое с чем надо сперва разобраться.</p>',
				genres: [
					{ title: 'Вестерн', pseudoname: 'western' },
					{ title: 'Драма', pseudoname: 'action' },
					{ title: 'Комедия', pseudoname: 'comedy' },
					{ title: 'Приключения', pseudoname: 'adventures' },
				],
				type: 1,
				rating: 4.5,
				release: '2012',
				directors: [{ name: 'Квентин Тарантино' }],
				actors: [
					{ name: 'Джейми Фокс' },
					{ name: 'Кристоф Вальц' },
					{ name: 'Леонардо ДиКаприо' },
					{ name: 'Керри Вашингтон' },
					{ name: 'Сэмюэл Л. Джексон' },
					{ name: 'Уолтон Гоггинс' },
					{ name: 'Деннис Кристофер' },
					{ name: 'Джеймс Римар' },
					{ name: 'Дон Джонсон' },
					{ name: 'Лаура Кайот' },
				],
				country: 'США',
			},
			{
				title: 'Люди в черном',
				pseudoname: 'mib',
				img: '/posters/mib.jpg',
				alt: 'Постер к фильму Люди в черном',
				description:
					'<p>Агент Кей работает в супер секретной организации, отслеживающей инопланетную активность на Земле. Оказывается, что пришельцы живут среди людей уже достаточно давно, и большая их часть ведет безобидный быт, стараясь особо не выделяться из толпы двуногих. Но есть и такие, кто строит коварные планы и желает сделать с этой прекрасной планетой нечто ужасное. На Землю прилетает представитель агрессивной расы жуков-захватчиков, разыскивающий могущественный артефакт. Выследить и ликвидировать угрозу поручается агенту Кею, которому потребуется помощь. В качестве своего нового напарника он выбирает Джеймса Эдвардса – отчаянного нью-йоркского полицейского, встретившегося с пришельцем во время выполнения очередного задания.</p>',
				genres: [
					{ title: 'Боевик', pseudoname: 'action' },
					{ title: 'Комедия', pseudoname: 'comedy' },
					{ title: 'Приключения', pseudoname: 'adventures' },
					{ title: 'Фантастика', pseudoname: 'fantasy' },
				],
				type: 1,
				rating: 3.5,
				release: '1997',
				directors: [{ name: 'Барри Зонненфельд' }],
				actors: [
					{ name: 'Шиван Фэллон' },
					{ name: 'Серхио Кальдерон' },
					{ name: 'Тони Шэлуб' },
					{ name: 'Майк Нуссбаум' },
					{ name: 'Томми Ли Джонс' },
					{ name: 'Уилл Смит' },
					{ name: 'Линда Фиорентино' },
					{ name: 'Рип Торн' },
					{ name: 'Винсент Д’Онофрио' },
					{ name: 'Джон Грайз' },
				],
				country: 'США',
			},
			{
				title: 'Чудотворцы',
				pseudoname: 'miracle_workers',
				img: '/posters/miracle_workers.jpg',
				alt: 'Постер к сериалу Чудотворцы',
				description:
					'<p>Небесная канцелярия работает как огромная корпорация со множеством отделов и сотрудников. Здесь трудятся ангел низшего уровня Крейг, отвечающий на все молитвы человечества, и его новая напарница Элайза, которая только перевелась из Департамента Почвы.</p>' +
					'<p>Однажды Элайза, отвечая на молитву об осадках, случайно насылает разрушительный ураган, который уносит жизни множества людей. Это событие становится последней каплей, переполнившей чашу терпения уставшего Творца, и он на внеочередном собрании объявляет о своем желании уничтожить Землю. Понимая, что ответственность за гибель планеты частично лежит на ней, Элайза заключает с богом пари. И теперь у неё и Крейга есть всего две недели, чтобы исполнить невыполнимую молитву и спасти Землю.</p>',
				genres: [
					{ title: 'Комедия', pseudoname: 'comedy' },
					{ title: 'Фантастика', pseudoname: 'fantasy' },
				],
				type: 2,
				rating: 5,
				release: '2019',
				directors: [{ name: 'Дэн Шимпф' }, { name: 'Райан Кейс' }, { name: 'Морис Мэрэбл' }],
				actors: [
					{ name: 'Джейми Фокс' },
					{ name: 'Кристоф Вальц' },
					{ name: 'Леонардо ДиКаприо' },
					{ name: 'Керри Вашингтон' },
					{ name: 'Сэмюэл Л. Джексон' },
					{ name: 'Уолтон Гоггинс' },
					{ name: 'Деннис Кристофер' },
					{ name: 'Джеймс Римар' },
					{ name: 'Дон Джонсон' },
					{ name: 'Лаура Кайот' },
				],
				country: 'США',
			},
			{
				title: 'Название в четыре строки по тому что так надо для тестов по тому что букав мало надо больше бука понимаешь букав надо',
				pseudoname: 'test',
				img: '/posters/wayne.jpg',
				alt: 'Постер к сериалу Уэйн',
				description:
					'<p>Уэйна хорошо знают в полицейском участке. Юноша не считает себя хулиганом. В драках, которые случаются с ним все чаще, парень не доказывает собственное превосходство, а восстанавливает справедливость. Но закон считает иначе. Понимает героя только его отец. Но мужчина болен раком, и жить ему осталось недолго.</p>',
				genres: [
					{ title: 'Боевик', pseudoname: 'action' },
					{ title: 'Комедия', pseudoname: 'comedy' },
					{ title: 'Боевик', pseudoname: 'action' },
					{ title: 'Комедия', pseudoname: 'comedy' },
					{ title: 'Боевик', pseudoname: 'action' },
					{ title: 'Комедия', pseudoname: 'comedy' },
					{ title: 'Боевик', pseudoname: 'action' },
					{ title: 'Комедия', pseudoname: 'comedy' },
					{ title: 'Боевик', pseudoname: 'action' },
					{ title: 'Комедия', pseudoname: 'comedy' },
				],
				type: 2,
				rating: 2.5,
				release: '2019',
				directors: [{ name: 'Стив Пинк' }, { name: 'Тесса Хофф' }, { name: 'Майкл Патрик Джэнн' }],
				actors: [
					{ name: 'Марк МакКенна' },
					{ name: 'Сиэра Браво' },
					{ name: 'Джон Шампейн' },
					{ name: 'Джэми Шампейн' },
					{ name: 'Джеймс Эрл' },
					{ name: 'Стивен Кеарин' },
					{ name: 'Джошуа Дж. Уильямс' },
					{ name: 'Дин Уинтерс' },
					{ name: 'Франческо Антонио' },
					{ name: 'Майк О’Мэлли' },
				],
				country: 'США',
			},
			{
				title: 'Уэйн',
				pseudoname: 'wayne',
				img: '/posters/wayne.jpg',
				alt: 'Постер к сериалу Уэйн',
				description:
					'<p>Уэйна хорошо знают в полицейском участке. Юноша не считает себя хулиганом. В драках, которые случаются с ним все чаще, парень не доказывает собственное превосходство, а восстанавливает справедливость. Но закон считает иначе. Понимает героя только его отец. Но мужчина болен раком, и жить ему осталось недолго.</p>' +
					'<p>Перед самой смертью отец успевает рассказать Уэйну. О его матери. История печальная, но довольно обыденная: она бросила мужа и ребенка и сбежала с любовником в другой штат. С собой беглецы прихватили автомобиль брошенного мужа. Отец Уэйна смирился и с той, и с другой потерей, но сам парень так не может. Вместе с подругой он отправляется по следам воров и предателей, чтобы наказать их.</p>',
				genres: [
					{ title: 'Боевик', pseudoname: 'action' },
					{ title: 'Комедия', pseudoname: 'comedy' },
				],
				type: 2,
				rating: 4,
				release: '2019',
				directors: [{ name: 'Стив Пинк' }, { name: 'Тесса Хофф' }, { name: 'Майкл Патрик Джэнн' }],
				actors: [
					{ name: 'Марк МакКенна' },
					{ name: 'Сиэра Браво' },
					{ name: 'Джон Шампейн' },
					{ name: 'Джэми Шампейн' },
					{ name: 'Джеймс Эрл' },
					{ name: 'Стивен Кеарин' },
					{ name: 'Джошуа Дж. Уильямс' },
					{ name: 'Дин Уинтерс' },
					{ name: 'Франческо Антонио' },
					{ name: 'Майк О’Мэлли' },
				],
				country: 'США',
			},
			{
				title: 'Джанго освобожденный',
				pseudoname: 'django_unchained',
				img: '/posters/django.jpg',
				alt: 'Постер к фильму Джанго освобожденный',
				description:
					'<p>ксцентричный охотник за головами, также известный как Дантист, промышляет отстрелом самых опасных преступников. Работенка пыльная, и без надежного помощника ему не обойтись. Но как найти такого и желательно не очень дорогого? Освобождённый им раб по имени Джанго – прекрасная кандидатура. Правда, у нового помощника свои мотивы – кое с чем надо сперва разобраться.</p>',
				genres: [
					{ title: 'Вестерн', pseudoname: 'western' },
					{ title: 'Драма', pseudoname: 'action' },
					{ title: 'Комедия', pseudoname: 'comedy' },
					{ title: 'Приключения', pseudoname: 'adventures' },
				],
				type: 1,
				rating: 4.5,
				release: '2012',
				directors: [{ name: 'Квентин Тарантино' }],
				actors: [
					{ name: 'Джейми Фокс' },
					{ name: 'Кристоф Вальц' },
					{ name: 'Леонардо ДиКаприо' },
					{ name: 'Керри Вашингтон' },
					{ name: 'Сэмюэл Л. Джексон' },
					{ name: 'Уолтон Гоггинс' },
					{ name: 'Деннис Кристофер' },
					{ name: 'Джеймс Римар' },
					{ name: 'Дон Джонсон' },
					{ name: 'Лаура Кайот' },
				],
				country: 'США',
			},
			{
				title: 'Люди в черном',
				pseudoname: 'mib',
				img: '/posters/mib.jpg',
				alt: 'Постер к фильму Люди в черном',
				description:
					'<p>Агент Кей работает в супер секретной организации, отслеживающей инопланетную активность на Земле. Оказывается, что пришельцы живут среди людей уже достаточно давно, и большая их часть ведет безобидный быт, стараясь особо не выделяться из толпы двуногих. Но есть и такие, кто строит коварные планы и желает сделать с этой прекрасной планетой нечто ужасное. На Землю прилетает представитель агрессивной расы жуков-захватчиков, разыскивающий могущественный артефакт. Выследить и ликвидировать угрозу поручается агенту Кею, которому потребуется помощь. В качестве своего нового напарника он выбирает Джеймса Эдвардса – отчаянного нью-йоркского полицейского, встретившегося с пришельцем во время выполнения очередного задания.</p>',
				genres: [
					{ title: 'Боевик', pseudoname: 'action' },
					{ title: 'Комедия', pseudoname: 'comedy' },
					{ title: 'Приключения', pseudoname: 'adventures' },
					{ title: 'Фантастика', pseudoname: 'fantasy' },
				],
				type: 1,
				rating: 3.5,
				release: '1997',
				directors: [{ name: 'Барри Зонненфельд' }],
				actors: [
					{ name: 'Шиван Фэллон' },
					{ name: 'Серхио Кальдерон' },
					{ name: 'Тони Шэлуб' },
					{ name: 'Майк Нуссбаум' },
					{ name: 'Томми Ли Джонс' },
					{ name: 'Уилл Смит' },
					{ name: 'Линда Фиорентино' },
					{ name: 'Рип Торн' },
					{ name: 'Винсент Д’Онофрио' },
					{ name: 'Джон Грайз' },
				],
				country: 'США',
			},
			{
				title: 'Чудотворцы',
				pseudoname: 'miracle_workers',
				img: '/posters/miracle_workers.jpg',
				alt: 'Постер к сериалу Чудотворцы',
				description:
					'<p>Небесная канцелярия работает как огромная корпорация со множеством отделов и сотрудников. Здесь трудятся ангел низшего уровня Крейг, отвечающий на все молитвы человечества, и его новая напарница Элайза, которая только перевелась из Департамента Почвы.</p>' +
					'<p>Однажды Элайза, отвечая на молитву об осадках, случайно насылает разрушительный ураган, который уносит жизни множества людей. Это событие становится последней каплей, переполнившей чашу терпения уставшего Творца, и он на внеочередном собрании объявляет о своем желании уничтожить Землю. Понимая, что ответственность за гибель планеты частично лежит на ней, Элайза заключает с богом пари. И теперь у неё и Крейга есть всего две недели, чтобы исполнить невыполнимую молитву и спасти Землю.</p>',
				genres: [
					{ title: 'Комедия', pseudoname: 'comedy' },
					{ title: 'Фантастика', pseudoname: 'fantasy' },
				],
				type: 2,
				rating: 5,
				release: '2019',
				directors: [{ name: 'Дэн Шимпф' }, { name: 'Райан Кейс' }, { name: 'Морис Мэрэбл' }],
				actors: [
					{ name: 'Джейми Фокс' },
					{ name: 'Кристоф Вальц' },
					{ name: 'Леонардо ДиКаприо' },
					{ name: 'Керри Вашингтон' },
					{ name: 'Сэмюэл Л. Джексон' },
					{ name: 'Уолтон Гоггинс' },
					{ name: 'Деннис Кристофер' },
					{ name: 'Джеймс Римар' },
					{ name: 'Дон Джонсон' },
					{ name: 'Лаура Кайот' },
				],
				country: 'США',
			},
			{
				title: 'Название в четыре строки по тому что так надо для тестов по тому что букав мало надо больше бука понимаешь букав надо',
				pseudoname: 'test',
				img: '/posters/wayne.jpg',
				alt: 'Постер к сериалу Уэйн',
				description:
					'<p>Уэйна хорошо знают в полицейском участке. Юноша не считает себя хулиганом. В драках, которые случаются с ним все чаще, парень не доказывает собственное превосходство, а восстанавливает справедливость. Но закон считает иначе. Понимает героя только его отец. Но мужчина болен раком, и жить ему осталось недолго.</p>',
				genres: [
					{ title: 'Боевик', pseudoname: 'action' },
					{ title: 'Комедия', pseudoname: 'comedy' },
					{ title: 'Боевик', pseudoname: 'action' },
					{ title: 'Комедия', pseudoname: 'comedy' },
					{ title: 'Боевик', pseudoname: 'action' },
					{ title: 'Комедия', pseudoname: 'comedy' },
					{ title: 'Боевик', pseudoname: 'action' },
					{ title: 'Комедия', pseudoname: 'comedy' },
					{ title: 'Боевик', pseudoname: 'action' },
					{ title: 'Комедия', pseudoname: 'comedy' },
				],
				type: 2,
				rating: 2.5,
				release: '2019',
				directors: [{ name: 'Стив Пинк' }, { name: 'Тесса Хофф' }, { name: 'Майкл Патрик Джэнн' }],
				actors: [
					{ name: 'Марк МакКенна' },
					{ name: 'Сиэра Браво' },
					{ name: 'Джон Шампейн' },
					{ name: 'Джэми Шампейн' },
					{ name: 'Джеймс Эрл' },
					{ name: 'Стивен Кеарин' },
					{ name: 'Джошуа Дж. Уильямс' },
					{ name: 'Дин Уинтерс' },
					{ name: 'Франческо Антонио' },
					{ name: 'Майк О’Мэлли' },
				],
				country: 'США',
			},
			{
				title: 'Уэйн',
				pseudoname: 'wayne',
				img: '/posters/wayne.jpg',
				alt: 'Постер к сериалу Уэйн',
				description:
					'<p>Уэйна хорошо знают в полицейском участке. Юноша не считает себя хулиганом. В драках, которые случаются с ним все чаще, парень не доказывает собственное превосходство, а восстанавливает справедливость. Но закон считает иначе. Понимает героя только его отец. Но мужчина болен раком, и жить ему осталось недолго.</p>' +
					'<p>Перед самой смертью отец успевает рассказать Уэйну. О его матери. История печальная, но довольно обыденная: она бросила мужа и ребенка и сбежала с любовником в другой штат. С собой беглецы прихватили автомобиль брошенного мужа. Отец Уэйна смирился и с той, и с другой потерей, но сам парень так не может. Вместе с подругой он отправляется по следам воров и предателей, чтобы наказать их.</p>',
				genres: [
					{ title: 'Боевик', pseudoname: 'action' },
					{ title: 'Комедия', pseudoname: 'comedy' },
				],
				type: 2,
				rating: 4,
				release: '2019',
				directors: [{ name: 'Стив Пинк' }, { name: 'Тесса Хофф' }, { name: 'Майкл Патрик Джэнн' }],
				actors: [
					{ name: 'Марк МакКенна' },
					{ name: 'Сиэра Браво' },
					{ name: 'Джон Шампейн' },
					{ name: 'Джэми Шампейн' },
					{ name: 'Джеймс Эрл' },
					{ name: 'Стивен Кеарин' },
					{ name: 'Джошуа Дж. Уильямс' },
					{ name: 'Дин Уинтерс' },
					{ name: 'Франческо Антонио' },
					{ name: 'Майк О’Мэлли' },
				],
				country: 'США',
			},
			{
				title: 'Джанго освобожденный',
				pseudoname: 'django_unchained',
				img: '/posters/django.jpg',
				alt: 'Постер к фильму Джанго освобожденный',
				description:
					'<p>ксцентричный охотник за головами, также известный как Дантист, промышляет отстрелом самых опасных преступников. Работенка пыльная, и без надежного помощника ему не обойтись. Но как найти такого и желательно не очень дорогого? Освобождённый им раб по имени Джанго – прекрасная кандидатура. Правда, у нового помощника свои мотивы – кое с чем надо сперва разобраться.</p>',
				genres: [
					{ title: 'Вестерн', pseudoname: 'western' },
					{ title: 'Драма', pseudoname: 'action' },
					{ title: 'Комедия', pseudoname: 'comedy' },
					{ title: 'Приключения', pseudoname: 'adventures' },
				],
				type: 1,
				rating: 4.5,
				release: '2012',
				directors: [{ name: 'Квентин Тарантино' }],
				actors: [
					{ name: 'Джейми Фокс' },
					{ name: 'Кристоф Вальц' },
					{ name: 'Леонардо ДиКаприо' },
					{ name: 'Керри Вашингтон' },
					{ name: 'Сэмюэл Л. Джексон' },
					{ name: 'Уолтон Гоггинс' },
					{ name: 'Деннис Кристофер' },
					{ name: 'Джеймс Римар' },
					{ name: 'Дон Джонсон' },
					{ name: 'Лаура Кайот' },
				],
				country: 'США',
			},
			{
				title: 'Люди в черном',
				pseudoname: 'mib',
				img: '/posters/mib.jpg',
				alt: 'Постер к фильму Люди в черном',
				description:
					'<p>Агент Кей работает в супер секретной организации, отслеживающей инопланетную активность на Земле. Оказывается, что пришельцы живут среди людей уже достаточно давно, и большая их часть ведет безобидный быт, стараясь особо не выделяться из толпы двуногих. Но есть и такие, кто строит коварные планы и желает сделать с этой прекрасной планетой нечто ужасное. На Землю прилетает представитель агрессивной расы жуков-захватчиков, разыскивающий могущественный артефакт. Выследить и ликвидировать угрозу поручается агенту Кею, которому потребуется помощь. В качестве своего нового напарника он выбирает Джеймса Эдвардса – отчаянного нью-йоркского полицейского, встретившегося с пришельцем во время выполнения очередного задания.</p>',
				genres: [
					{ title: 'Боевик', pseudoname: 'action' },
					{ title: 'Комедия', pseudoname: 'comedy' },
					{ title: 'Приключения', pseudoname: 'adventures' },
					{ title: 'Фантастика', pseudoname: 'fantasy' },
				],
				type: 1,
				rating: 3.5,
				release: '1997',
				directors: [{ name: 'Барри Зонненфельд' }],
				actors: [
					{ name: 'Шиван Фэллон' },
					{ name: 'Серхио Кальдерон' },
					{ name: 'Тони Шэлуб' },
					{ name: 'Майк Нуссбаум' },
					{ name: 'Томми Ли Джонс' },
					{ name: 'Уилл Смит' },
					{ name: 'Линда Фиорентино' },
					{ name: 'Рип Торн' },
					{ name: 'Винсент Д’Онофрио' },
					{ name: 'Джон Грайз' },
				],
				country: 'США',
			},
			{
				title: 'Чудотворцы',
				pseudoname: 'miracle_workers',
				img: '/posters/miracle_workers.jpg',
				alt: 'Постер к сериалу Чудотворцы',
				description:
					'<p>Небесная канцелярия работает как огромная корпорация со множеством отделов и сотрудников. Здесь трудятся ангел низшего уровня Крейг, отвечающий на все молитвы человечества, и его новая напарница Элайза, которая только перевелась из Департамента Почвы.</p>' +
					'<p>Однажды Элайза, отвечая на молитву об осадках, случайно насылает разрушительный ураган, который уносит жизни множества людей. Это событие становится последней каплей, переполнившей чашу терпения уставшего Творца, и он на внеочередном собрании объявляет о своем желании уничтожить Землю. Понимая, что ответственность за гибель планеты частично лежит на ней, Элайза заключает с богом пари. И теперь у неё и Крейга есть всего две недели, чтобы исполнить невыполнимую молитву и спасти Землю.</p>',
				genres: [
					{ title: 'Комедия', pseudoname: 'comedy' },
					{ title: 'Фантастика', pseudoname: 'fantasy' },
				],
				type: 2,
				rating: 5,
				release: '2019',
				directors: [{ name: 'Дэн Шимпф' }, { name: 'Райан Кейс' }, { name: 'Морис Мэрэбл' }],
				actors: [
					{ name: 'Джейми Фокс' },
					{ name: 'Кристоф Вальц' },
					{ name: 'Леонардо ДиКаприо' },
					{ name: 'Керри Вашингтон' },
					{ name: 'Сэмюэл Л. Джексон' },
					{ name: 'Уолтон Гоггинс' },
					{ name: 'Деннис Кристофер' },
					{ name: 'Джеймс Римар' },
					{ name: 'Дон Джонсон' },
					{ name: 'Лаура Кайот' },
				],
				country: 'США',
			},
			{
				title: 'Название в четыре строки по тому что так надо для тестов по тому что букав мало надо больше бука понимаешь букав надо',
				pseudoname: 'test',
				img: '/posters/wayne.jpg',
				alt: 'Постер к сериалу Уэйн',
				description:
					'<p>Уэйна хорошо знают в полицейском участке. Юноша не считает себя хулиганом. В драках, которые случаются с ним все чаще, парень не доказывает собственное превосходство, а восстанавливает справедливость. Но закон считает иначе. Понимает героя только его отец. Но мужчина болен раком, и жить ему осталось недолго.</p>',
				genres: [
					{ title: 'Боевик', pseudoname: 'action' },
					{ title: 'Комедия', pseudoname: 'comedy' },
					{ title: 'Боевик', pseudoname: 'action' },
					{ title: 'Комедия', pseudoname: 'comedy' },
					{ title: 'Боевик', pseudoname: 'action' },
					{ title: 'Комедия', pseudoname: 'comedy' },
					{ title: 'Боевик', pseudoname: 'action' },
					{ title: 'Комедия', pseudoname: 'comedy' },
					{ title: 'Боевик', pseudoname: 'action' },
					{ title: 'Комедия', pseudoname: 'comedy' },
				],
				type: 2,
				rating: 2.5,
				release: '2019',
				directors: [{ name: 'Стив Пинк' }, { name: 'Тесса Хофф' }, { name: 'Майкл Патрик Джэнн' }],
				actors: [
					{ name: 'Марк МакКенна' },
					{ name: 'Сиэра Браво' },
					{ name: 'Джон Шампейн' },
					{ name: 'Джэми Шампейн' },
					{ name: 'Джеймс Эрл' },
					{ name: 'Стивен Кеарин' },
					{ name: 'Джошуа Дж. Уильямс' },
					{ name: 'Дин Уинтерс' },
					{ name: 'Франческо Антонио' },
					{ name: 'Майк О’Мэлли' },
				],
				country: 'США',
			},
			{
				title: 'Уэйн',
				pseudoname: 'wayne',
				img: '/posters/wayne.jpg',
				alt: 'Постер к сериалу Уэйн',
				description:
					'<p>Уэйна хорошо знают в полицейском участке. Юноша не считает себя хулиганом. В драках, которые случаются с ним все чаще, парень не доказывает собственное превосходство, а восстанавливает справедливость. Но закон считает иначе. Понимает героя только его отец. Но мужчина болен раком, и жить ему осталось недолго.</p>' +
					'<p>Перед самой смертью отец успевает рассказать Уэйну. О его матери. История печальная, но довольно обыденная: она бросила мужа и ребенка и сбежала с любовником в другой штат. С собой беглецы прихватили автомобиль брошенного мужа. Отец Уэйна смирился и с той, и с другой потерей, но сам парень так не может. Вместе с подругой он отправляется по следам воров и предателей, чтобы наказать их.</p>',
				genres: [
					{ title: 'Боевик', pseudoname: 'action' },
					{ title: 'Комедия', pseudoname: 'comedy' },
				],
				type: 2,
				rating: 4,
				release: '2019',
				directors: [{ name: 'Стив Пинк' }, { name: 'Тесса Хофф' }, { name: 'Майкл Патрик Джэнн' }],
				actors: [
					{ name: 'Марк МакКенна' },
					{ name: 'Сиэра Браво' },
					{ name: 'Джон Шампейн' },
					{ name: 'Джэми Шампейн' },
					{ name: 'Джеймс Эрл' },
					{ name: 'Стивен Кеарин' },
					{ name: 'Джошуа Дж. Уильямс' },
					{ name: 'Дин Уинтерс' },
					{ name: 'Франческо Антонио' },
					{ name: 'Майк О’Мэлли' },
				],
				country: 'США',
			},
			{
				title: 'Джанго освобожденный',
				pseudoname: 'django_unchained',
				img: '/posters/django.jpg',
				alt: 'Постер к фильму Джанго освобожденный',
				description:
					'<p>ксцентричный охотник за головами, также известный как Дантист, промышляет отстрелом самых опасных преступников. Работенка пыльная, и без надежного помощника ему не обойтись. Но как найти такого и желательно не очень дорогого? Освобождённый им раб по имени Джанго – прекрасная кандидатура. Правда, у нового помощника свои мотивы – кое с чем надо сперва разобраться.</p>',
				genres: [
					{ title: 'Вестерн', pseudoname: 'western' },
					{ title: 'Драма', pseudoname: 'action' },
					{ title: 'Комедия', pseudoname: 'comedy' },
					{ title: 'Приключения', pseudoname: 'adventures' },
				],
				type: 1,
				rating: 4.5,
				release: '2012',
				directors: [{ name: 'Квентин Тарантино' }],
				actors: [
					{ name: 'Джейми Фокс' },
					{ name: 'Кристоф Вальц' },
					{ name: 'Леонардо ДиКаприо' },
					{ name: 'Керри Вашингтон' },
					{ name: 'Сэмюэл Л. Джексон' },
					{ name: 'Уолтон Гоггинс' },
					{ name: 'Деннис Кристофер' },
					{ name: 'Джеймс Римар' },
					{ name: 'Дон Джонсон' },
					{ name: 'Лаура Кайот' },
				],
				country: 'США',
			},
			{
				title: 'Люди в черном',
				pseudoname: 'mib',
				img: '/posters/mib.jpg',
				alt: 'Постер к фильму Люди в черном',
				description:
					'<p>Агент Кей работает в супер секретной организации, отслеживающей инопланетную активность на Земле. Оказывается, что пришельцы живут среди людей уже достаточно давно, и большая их часть ведет безобидный быт, стараясь особо не выделяться из толпы двуногих. Но есть и такие, кто строит коварные планы и желает сделать с этой прекрасной планетой нечто ужасное. На Землю прилетает представитель агрессивной расы жуков-захватчиков, разыскивающий могущественный артефакт. Выследить и ликвидировать угрозу поручается агенту Кею, которому потребуется помощь. В качестве своего нового напарника он выбирает Джеймса Эдвардса – отчаянного нью-йоркского полицейского, встретившегося с пришельцем во время выполнения очередного задания.</p>',
				genres: [
					{ title: 'Боевик', pseudoname: 'action' },
					{ title: 'Комедия', pseudoname: 'comedy' },
					{ title: 'Приключения', pseudoname: 'adventures' },
					{ title: 'Фантастика', pseudoname: 'fantasy' },
				],
				type: 1,
				rating: 3.5,
				release: '1997',
				directors: [{ name: 'Барри Зонненфельд' }],
				actors: [
					{ name: 'Шиван Фэллон' },
					{ name: 'Серхио Кальдерон' },
					{ name: 'Тони Шэлуб' },
					{ name: 'Майк Нуссбаум' },
					{ name: 'Томми Ли Джонс' },
					{ name: 'Уилл Смит' },
					{ name: 'Линда Фиорентино' },
					{ name: 'Рип Торн' },
					{ name: 'Винсент Д’Онофрио' },
					{ name: 'Джон Грайз' },
				],
				country: 'США',
			},
			{
				title: 'Чудотворцы',
				pseudoname: 'miracle_workers',
				img: '/posters/miracle_workers.jpg',
				alt: 'Постер к сериалу Чудотворцы',
				description:
					'<p>Небесная канцелярия работает как огромная корпорация со множеством отделов и сотрудников. Здесь трудятся ангел низшего уровня Крейг, отвечающий на все молитвы человечества, и его новая напарница Элайза, которая только перевелась из Департамента Почвы.</p>' +
					'<p>Однажды Элайза, отвечая на молитву об осадках, случайно насылает разрушительный ураган, который уносит жизни множества людей. Это событие становится последней каплей, переполнившей чашу терпения уставшего Творца, и он на внеочередном собрании объявляет о своем желании уничтожить Землю. Понимая, что ответственность за гибель планеты частично лежит на ней, Элайза заключает с богом пари. И теперь у неё и Крейга есть всего две недели, чтобы исполнить невыполнимую молитву и спасти Землю.</p>',
				genres: [
					{ title: 'Комедия', pseudoname: 'comedy' },
					{ title: 'Фантастика', pseudoname: 'fantasy' },
				],
				type: 2,
				rating: 5,
				release: '2019',
				directors: [{ name: 'Дэн Шимпф' }, { name: 'Райан Кейс' }, { name: 'Морис Мэрэбл' }],
				actors: [
					{ name: 'Джейми Фокс' },
					{ name: 'Кристоф Вальц' },
					{ name: 'Леонардо ДиКаприо' },
					{ name: 'Керри Вашингтон' },
					{ name: 'Сэмюэл Л. Джексон' },
					{ name: 'Уолтон Гоггинс' },
					{ name: 'Деннис Кристофер' },
					{ name: 'Джеймс Римар' },
					{ name: 'Дон Джонсон' },
					{ name: 'Лаура Кайот' },
				],
				country: 'США',
			},
			{
				title: 'Название в четыре строки по тому что так надо для тестов по тому что букав мало надо больше бука понимаешь букав надо',
				pseudoname: 'test',
				img: '/posters/wayne.jpg',
				alt: 'Постер к сериалу Уэйн',
				description:
					'<p>Уэйна хорошо знают в полицейском участке. Юноша не считает себя хулиганом. В драках, которые случаются с ним все чаще, парень не доказывает собственное превосходство, а восстанавливает справедливость. Но закон считает иначе. Понимает героя только его отец. Но мужчина болен раком, и жить ему осталось недолго.</p>',
				genres: [
					{ title: 'Боевик', pseudoname: 'action' },
					{ title: 'Комедия', pseudoname: 'comedy' },
					{ title: 'Боевик', pseudoname: 'action' },
					{ title: 'Комедия', pseudoname: 'comedy' },
					{ title: 'Боевик', pseudoname: 'action' },
					{ title: 'Комедия', pseudoname: 'comedy' },
					{ title: 'Боевик', pseudoname: 'action' },
					{ title: 'Комедия', pseudoname: 'comedy' },
					{ title: 'Боевик', pseudoname: 'action' },
					{ title: 'Комедия', pseudoname: 'comedy' },
				],
				type: 2,
				rating: 2.5,
				release: '2019',
				directors: [{ name: 'Стив Пинк' }, { name: 'Тесса Хофф' }, { name: 'Майкл Патрик Джэнн' }],
				actors: [
					{ name: 'Марк МакКенна' },
					{ name: 'Сиэра Браво' },
					{ name: 'Джон Шампейн' },
					{ name: 'Джэми Шампейн' },
					{ name: 'Джеймс Эрл' },
					{ name: 'Стивен Кеарин' },
					{ name: 'Джошуа Дж. Уильямс' },
					{ name: 'Дин Уинтерс' },
					{ name: 'Франческо Антонио' },
					{ name: 'Майк О’Мэлли' },
				],
				country: 'США',
			},
		]);
	},
};
