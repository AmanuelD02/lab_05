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
		console.log(`value ${var2}`);
		if (var2 == 0) return 'Error';

		return var1 / var2;
	},

	sqrt: (value) => {
		return Math.sqrt(value);
	},
	pow: (val1, val2) => {
		return Math.pow(val1, val2);
	},
	sin: (val) => {
		return Math.sin(val);
	},
	cos: (val) => {
		return Math.cos(val);
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
		input1.value = result.innerHTML = calculator.mult(var1, var2).toFixed(2);
		input2.value = '';
	} else if (operand == 'Sqrt') {
		cls();
		result.innerHTML = calculator.sqrt(var1).toFixed(2);
	} else if (operand == 'Pow') {
		cls();
		result.innerHTML = calculator.pow(var1, var2);
	} else if (operand == '-') {
		cls();
		result.innerHTML = calculator.subs(var1, var2);
	} else if (operand == '/') {
		cls();
		if (typeof calculator.div(var1, var2) === 'number') {
			result.innerHTML = calculator.div(var1, var2).toFixed(2);
		} else {
			result.innerHTML = calculator.div(var1, var2);
		}
	} else if (operand == 'sin') {
		cls();
		result.innerHTML = calculator.sin(var1).toFixed(2);
	} else if (operand == 'cos') {
		cls();
		result.innerHTML = calculator.cos(var1).toFixed(2);
	}
}

function cls() {
	console.log('CLEAR');
	input1.value = '';
	input2.value = '';
	result.innerHTML = '0';
}
