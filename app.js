/**
 * DOM elements
 */

const passwordEl = document.querySelector('#password');
const copyBtnEl = document.querySelector('.copyBtn');
const pLengthEl = document.querySelector('#length');
const pUpperEl = document.querySelector('#uppercase');
const pLowerEl = document.querySelector('#lowercase');
const pNumbersEl = document.querySelector('#numbers');
const pSymbolsEl = document.querySelector('#symbols');
const generateBtnEl = document.querySelector('#generate');

/**
 * Functions for generating parameters using ASCII
 */

// Generates lowercase
const getLower = () => {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
};

// Generates uppercase
const getUpper = () => {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
};

// Generates number
const getNumber = () => {
	return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
};

// Generates symbol
const getSymbol = () => {
	const specialChars = [
		'@',
		'$',
		'%',
		'*',
		'^',
		'<',
		'>',
		'?',
		'!',
		'(',
		')',
		'[',
		']',
		'{',
		'}',
		"'",
	];
	return specialChars[Math.floor(Math.random() * specialChars.length)];
};

const generate = {
	lower: getLower,
	upper: getUpper,
	number: getNumber,
	symbol: getSymbol,
};
