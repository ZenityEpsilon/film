class API {
	constructor(axios, swal) {
		this.$axios = axios;
		this.$swal = swal;
		this.$payload = [];
		this.$query = [];
	}

	add(method, params = {}, id = null) {
		return new Promise((resolve, reject) => {
			this.$payload.push({ jsonrpc: '2.0', method, params, id });
			this.$query.push({ resolve, reject });
		}).catch((error) => {
			this.$swal({ icon: 'error', text: error.message });
		});
	}

	serial(array = []) {
		return Promise.all(array.map((item) => this.add(item.method, item.params || {}, item.id || null)));
	}

	get(method, params = {}, id = null) {
		const promise = this.add(method, params, id);
		this.post();
		return promise;
	}

	post() {
		if (!this.$payload.length) return Promise.resolve();
		const query = this.$query.splice(0);

		return this.$axios
			.post('/api/', this.$payload.splice(0))
			.then((response) => {
				query.forEach((promise, key) => {
					if (response.data[key].result) {
						promise.resolve(response.data[key].result);
					}
					if (response.data[key].error) {
						promise.reject(response.data[key].error);
					}
				});
			})
			.catch((error) => {
				this.$swal({ icon: 'error', text: error.message });
			});
	}
}

export default (axios, swal) => new API(axios, swal);
