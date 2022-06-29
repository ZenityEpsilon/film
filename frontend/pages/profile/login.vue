<template>
	<div class="profile-login">
		<div class="profile-loginContainer">
			<h1 class="profile-loginTitle">{{ $t('login') }}</h1>
			<form action="" class="profile-loginForm">
				<the-input
					name="login"
					:icon="{ name: 'profile', class: 'profile profile-loginIcon' }"
					:label="$t('loginUsername')"
					:placeholder="$t('loginUsername')"
					v-model="username"
				></the-input>
				<the-input
					name="password"
					type="password"
					:label="$t('loginPassword')"
					:placeholder="$t('loginPassword')"
					:icon="{ name: 'key', class: 'key profile-loginIcon' }"
					v-model="password"
				></the-input>
				<button class="profile-loginButton">{{ $t('loginEnter') }}</button>
				<a href="#" class="profile-loginLink">{{ $t('loginForgot') }}</a>
				<a href="#" class="profile-loginLink">{{ $t('loginCreate') }}</a>
			</form>
		</div>
	</div>
</template>

<script>
export default {
	name: 'profileLogin',
	middleware: ['init', 'guest'],
	data() {
		return {
			username: '',
			password: '',
		};
	},
};
</script>

<style lang="scss">
.profile {
	&-login {
		@apply flex justify-center items-center w-full;
		&Container {
			width: 300px;
		}
		&Title {
			@apply text-center mb-10 text-3xl;
		}
		&Icon {
			width: 20px !important;
			height: 20px !important;
		}
		&Button {
			@apply p-5 bg-gray-900 w-full mb-5;
			transition: all 0.5s;
			&:hover {
				@apply bg-gray-700;
			}
		}
		&Link {
			@apply block mb-2.5;
			transition: all 0.25s;
			&:hover {
				@apply text-gray-400;
			}
		}
	}
}
</style>
