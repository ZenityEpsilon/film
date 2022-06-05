import Vue from 'vue';
import thePopup from '~/components/ThePopup.vue';
import theInput from '~/components/TheInput.vue';

Object.entries({
	thePopup,
	theInput,
}).forEach(([name, component]) => Vue.component(name, component));
