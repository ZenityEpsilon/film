<template>
	<div class="popup" v-if="value">
		<div class="popup-fader" @click="$emit('input', false)"></div>
		<div class="popup-container">name</div>
	</div>
</template>

<script>
export default {
	name: 'thePopup',
	props: {
		value: {
			type: Boolean,
			default() {
				return false;
			},
		},
	},
};
</script>

<style lang="scss">
.popup {
	@apply flex justify-center items-center fixed w-full h-full;
	top: 0;
	left: 0;
	padding: 10px;
	z-index: 3;
	&-fader {
		@apply absolute cursor-pointer;
		background-color: rgba(0, 0, 0, 0.6);
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
	}
	&-container {
		@apply relative bg-gray-900 p-10 border-black;
		z-index: 1;
	}
}
</style>
