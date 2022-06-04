import Vue from 'vue';
import thePopup from '~/components/ThePopup.vue';

Object.entries({
	thePopup,
}).forEach(([name, component]) => Vue.component(name, component));
