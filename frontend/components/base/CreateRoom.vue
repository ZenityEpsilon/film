<template>
	<form>
		<the-input name="roomTitle" :label="$t('roomTitle')" :placeholder="$t('roomTitlePlaceholder')"></the-input>
		<check-box name="privateRoom" :label="$t('roomPrivateMode')" v-model="privateRoom"></check-box>
	</form>
</template>

<script>
export default {
	data() {
		return {
			privateRoom: false,
		};
	},
};
</script>

<style lang="scss"></style>
