// define UI variables

var input1 = document.getElementById('Input1');
var input2 = document.getElementById('Input2');
var result = document.getElementById('result');
var calculator = {
	add: (val1, val2) => {
		return val1 + val2;
	},
	subs: (var1, var2) => {
		return var1 - var2;
	},
	mult: (val1, val2) => {
		return val1 * val2;
	},
	div: (var1, var2) => {
		if (var2 == 0) return '∞';

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
	},
	pow: (val1, val2) => {
		return Math.pow(val1, val2);
	}
};

function calc(operand) {
	console.log(operand);
	var var1 = input1.value ? parseInt(input1.value) : 0;
	var var2 = input2.value ? parseInt(input2.value) : 0;

	if (operand == '+') {
		input1.value = result.innerHTML = calculator.add(var1, var2);
		input2.value = '';
	} else if (operand == '*') {
		input1.value = result.innerHTML = calculator.mult(var1, var2);
		input2.value = '';
	} else if (operand == 'Sqrt') {
		cls();
		result.innerHTML = calculator.sqrt(var1);
	} else if (operand == 'Pow') {
		cls();
		result.innerHTML = calculator.pow(var1, var2);
	} else if (operand == '-') {
		cls();
		result.innerHTML = calculator.subs(var1, var2);
	} else if (operand == '/') {
		cls();
		result.innerHTML = calculator.div(var1, var2);
	}
}

function cls() {
	console.log('CLEAR');
	input1.value = '';
	input2.value = '';
	result.innerHTML = '0';
}
