<template>
	<div class="form-group">
		<label :for="name" class="form-label">
			<svg v-if="icon.name" class="form-svg icons" :class="'icons_' + icon.class">
				<use v-bind="{ 'xlink:href': '/images/icons.svg#' + icon.name }"></use>
			</svg>
			{{ label }}
		</label>
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
		icon: {
			type: Object,
			default() {
				return {
					name: '',
					class: '',
				};
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
		@apply flex flex-col mb-8;
	}
	&-label {
		@apply flex items-center mb-2.5 text-xl;
	}
	&-input {
		@apply bg-transparent p-2.5 text-lg;
		border-bottom: 1px solid white;
		outline: none;
	}
	&-svg {
		display: inline-block;
		margin-right: 10px;
	}
}
</style>
