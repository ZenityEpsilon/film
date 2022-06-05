import Vue from 'vue';
import thePopup from '~/components/ThePopup.vue';
import theInput from '~/components/TheInput.vue';
import CheckBox from '~/components/CheckBox.vue';

Object.entries({
	thePopup,
	theInput,
	CheckBox,
}).forEach(([name, component]) => Vue.component(name, component));
