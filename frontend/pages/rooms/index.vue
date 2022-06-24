<template>
	<div class="layouts">
		<table class="rooms-table">
			<tr class="rooms-tableRows">
				<th class="rooms-tableHeaders"></th>
				<th class="rooms-tableHeaders">{{ $t('roomFilling') }}</th>
				<th class="rooms-tableHeaders">{{ $t('roomTitle') }}</th>
				<th class="rooms-tableHeaders">{{ $t('roomDescription') }}</th>
				<th class="rooms-tableHeaders">Модератор</th>
				<th class="rooms-tableHeaders">{{ $t('roomFilmTitle') }}</th>
			</tr>
			<tr v-for="room in rooms" :key="room.id" class="rooms-tableRows">
				<td class="rooms-tableItem">
					<svg class="card-svg icons icons_tv" v-if="room.private">
						<use xlink:href="/images/icons.svg#roomLock"></use>
					</svg>
					<svg class="card-svg icons icons_tv" v-else>
						<use xlink:href="/images/icons.svg#roomUnlock"></use>
					</svg>
				</td>
				<td class="rooms-tableItem rooms-tableItem_center">{{ room.users }}/{{ room.usersMax }}</td>
				<td class="rooms-tableItem rooms-tableItem_title">{{ room.title }}</td>
				<td class="rooms-tableItem">{{ room.description }}</td>
				<td class="rooms-tableItem">{{ room.userName }}</td>
				<td class="rooms-tableItem rooms-tableItem_title">{{ film(room.filmId).title }}</td>
				<td class="rooms-tableItem">
					<svg class="card-svg icons icons_tv">
						<use xlink:href="/images/icons.svg#roomJoin"></use>
					</svg>
				</td>
			</tr>
		</table>
	</div>
</template>

<script>
export default {
	name: 'PageRooms',
	data() {
		return {
			rooms: [
				{
					id: 0,
					users: 3,
					usersMax: 10,
					title: 'Title',
					userName: 'Admin',
					description: 'It`s testing description for testing this fucking page',
					filmId: 'wayne',
					private: false,
				},
				{
					id: 3,
					users: 100,
					usersMax: 100,
					title: 'Хуятл',
					userName: 'Пользователь',
					description: 'Это описание для тестирования этой параши ебаной, а не для того что вы подумали',
					filmId: 'test',
					private: true,
				},
				{
					id: 5,
					users: 1,
					usersMax: 3,
					title: 'Тестова кімната',
					userName: 'Тестовый питух для большого текста ок да',
					description:
						'Тут должно быть очень много букв иначе я не смогу нормально проверить корретность работы этого сегмента в контексте данной вёрстки',
					filmId: 'django_unchained',
					private: true,
				},
			],
		};
	},
	methods: {
		film(value) {
			return this.$store.state.films.items.find((item) => item.pseudoname === value);
		},
	},
};
</script>

<style lang="scss">
.rooms {
	&-table {
		@apply w-full;
		&Rows {
		}
		&Headers {
			@apply p-2.5;
			text-align: left;
		}
		&Item {
			@apply p-2.5;
			&_center {
				text-align: center;
			}
			&_title {
				max-width: 300px;
				white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;
			}
		}
	}
}
</style>
