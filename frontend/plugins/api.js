import APIFactory from '../lib/api.js';

export default ({ $axios, $swal }, inject) => inject('api', APIFactory($axios, $swal));
