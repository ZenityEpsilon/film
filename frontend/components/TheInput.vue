<template>
	<div class="form-group">
		<label :for="name" class="form-label">{{ label }}</label>
		<input
			:type="type"
			:placeholder="placeholder"
			:id="name"
			@input="$emit('input', $event.target.value)"
			class="form-input"
		/>
	</div>
</template>

<script>
export default {
	name: 'theInput',
	props: {
		name: {
			type: String,
			required: true,
		},
		label: {
			type: String,
			default() {
				return '';
			},
		},
		placeholder: {
			type: String,
			required: true,
		},
		type: {
			type: String,
			default() {
				return 'text';
			},
		},
		value: {
			type: String,
			default() {
				return '';
			},
		},
	},
};
</script>

<style lang="scss">
.form {
	&-group {
		@apply flex flex-col mb-5;
	}
	&-label {
		@apply mb-2.5 text-xl;
	}
	&-input {
		@apply bg-gray-800 p-2.5;
	}
}
</style>
