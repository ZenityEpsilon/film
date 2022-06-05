<template>
	<div class="form-group">
		<label :for="name" class="checkbox-label">
			<span class="checkbox-container">
				<i>
					<i
						class="checkbox-item"
						:class="{ 'checkbox-item_active': checked, 'checkbox-item_unactive': !checked }"
					></i>
				</i>
			</span>
			{{ label }}
		</label>
		<input v-model="checked" :id="name" type="checkbox" class="checkbox-hidden" />
	</div>
</template>

<script>
export default {
	props: {
		label: {
			type: String,
			default() {
				return '';
			},
		},
		name: {
			type: String,
			required: true,
		},
	},
	data() {
		return {
			checked: false,
		};
	},
};
</script>

<style lang="scss">
.checkbox {
	&-label {
		@apply relative;
		padding-left: 66px;
		i {
			@apply inline-block relative bg-gray-800;
			width: 50px;
			height: 30px;
			border-radius: 15px;
			.checkbox-item {
				@apply inline-block absolute bg-gray-700;
				width: 20px;
				height: 20px;
				top: 5px;
				left: 5px;
				&_active {
					animation-name: toggle-checkbox;
					animation-duration: 1.5s;
					animation-timing-function: ease;
					animation-iteration-count: 1;
					animation-fill-mode: forwards;
				}
				&_unactive {
					animation-name: toggle-checkbox_reverse;
					animation-duration: 0.7s;
					animation-timing-function: ease;
					animation-iteration-count: 1;
					animation-fill-mode: forwards;
					animation-direction: reverse;
				}
			}
		}
	}
	&-container {
		@apply absolute;
		left: 0;
		top: -6px;
	}
	&-hidden {
		@apply absolute;
		left: 99999px;
	}
}
.form {
	&-group {
		@apply relative;
	}
}

@keyframes toggle-checkbox {
	0% {
		left: 5px;
	}
	40% {
		left: 5px;
		width: 42px;
	}
	100% {
		width: 20px;
		left: 25px;
	}
}
@keyframes toggle-checkbox_reverse {
	0% {
		left: 5px;
	}
	40% {
		left: 5px;
		width: 42px;
	}
	100% {
		width: 20px;
		left: 25px;
	}
}
</style>
