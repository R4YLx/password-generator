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
 * Click events
 */

// Click event for 'Generate' button
generateBtnEl.addEventListener('click', () => {
	let length = Number(pLengthEl.value);
	let includeUpper = pUpperEl.checked;
	let includeLower = pLowerEl.checked;
	let includeNumber = pNumbersEl.checked;
	let includeSymbol = pSymbolsEl.checked;

	passwordEl.innerText = generatePassword(
		length,
		includeUpper,
		includeLower,
		includeNumber,
		includeSymbol
	);
});

// Generates password
const generatePassword = (length, getUpper, getLower, getNumber, getSymbol) => {
	let generatedPassword = '';
	// Filters inputs
	const inputChecked = getUpper + getLower + getNumber + getSymbol;

	// Filters which input is checked or unchecked
	const inputArray = [
		{ getUpper },
		{ getLower },
		{ getNumber },
		{ getSymbol },
	].filter(input => Object.values(input)[0]);

	// if no input is checked, don't generate pw
	if (inputChecked === 0) {
		return '';
	}

	// Loops over length

	// Final password
};

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
