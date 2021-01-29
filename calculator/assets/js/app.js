var calculator = {
	add: (values) => {
		return values.reduce((x, y) => x + y);
	},
	subs: (var1, var2) => {
		return var1 - var2;
	},
	mult: (values) => {
		return values.reduce((x, y) => x * y);
	},
	div: (var1, var2) => {
		return var1 / var2;
	},
	max: (values) => {
		return Math.max(...values);
	},
	min: (values) => {
		return Math.min(...values);
	},
	avg: (values) => {
		let total = 0;
		for (let n of values) {
			total += n;
		}

		return values.length === 0 ? 'Array Empty' : total / values.length;
	},
	sqrt: (value) => {
		return Math.sqrt(value);
	}
};

function calc(operand) {}
