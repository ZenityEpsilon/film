/* eslint-disable */
import Swal from 'sweetalert2/dist/sweetalert2.min.js';
var VueSweetalert2 = (function () {
	function VueSweetalert2() {}
	VueSweetalert2.install = function (vue, options) {
		var swalLocalInstance = options ? Swal.mixin(options) : Swal;
		var swalFunction = function () {
			var args = [];
			for (var _i = 0; _i < arguments.length; _i++) {
				args[_i] = arguments[_i];
			}
			return swalLocalInstance.fire.apply(swalLocalInstance, args);
		};
		var methodName;
		for (methodName in swalLocalInstance) {
			if (
				Object.prototype.hasOwnProperty.call(swalLocalInstance, methodName) &&
				typeof swalLocalInstance[methodName] === 'function'
			) {
				swalFunction[methodName] = (function (method) {
					return function () {
						var args = [];
						for (var _i = 0; _i < arguments.length; _i++) {
							args[_i] = arguments[_i];
						}
						return swalLocalInstance[method].apply(swalLocalInstance, args);
					};
				})(methodName);
			}
		}
		vue['swal'] = swalFunction;
		if (!vue.prototype.hasOwnProperty('$swal')) {
			vue.prototype.$swal = swalFunction;
		}
	};
	return VueSweetalert2;
})();
export default VueSweetalert2;
