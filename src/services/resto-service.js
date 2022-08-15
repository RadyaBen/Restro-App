class RestoService {
	_apiBase = 'https://react-restro-app.herokuapp.com/api';

	async getResource(url) {
		const res = await fetch(`${this._apiBase}${url}`);
		if (!res.ok) {
			throw new Error(`Could not fetch ${url}` +
				`, received ${res.status}`);
		}
		return await res.json();
	}

	async getMenuItems() {
		return await this.getResource('/menu/');
	}

	async getItem(id) {
		const res = await this.getResource('/menu/');
		
		const item = res.find((el) => {
			return el.id === +id;
		});
		
		return item;
	}

	async setOrder(order) {
		const number = await this.getOrderNumber();
		const newOrder = {
			id: number,
			order: order,
		};
		const response = await fetch(`${this._apiBase}/orders`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json;charset=utf-8',
			},
			body: JSON.stringify(newOrder),
		});
		if (!response.ok) {
			throw new Error('json error');
		}
	}

	async getOrderNumber() {
		const res = await this.getResource('/orders/');
		const orderNumber = res.length + 1;

		return orderNumber;
	}
}

export default RestoService;