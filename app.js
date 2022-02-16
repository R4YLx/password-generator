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

/**
 * Click events
 */

// Click event for 'Generate' button
generateBtnEl.addEventListener('click', () => {
	const length = Number(pLengthEl.value);
	const includeUpper = pUpperEl.checked;
	const includeLower = pLowerEl.checked;
	const includeNumber = pNumbersEl.checked;
	const includeSymbol = pSymbolsEl.checked;

	const password = generatePassword(
		length,
		includeUpper,
		includeLower,
		includeNumber,
		includeSymbol
	);

	passwordEl.innerText = password;

	console.log(includeUpper, includeLower, includeNumber, includeSymbol);
});

// Generates password
const generatePassword = (
	length,
	includeUpper,
	includeNumber,
	includeSymbol
) => {
	// Loops over length
	let characters = getLower;
	if (includeUpper) getLower;

	// Final password
};
console.log(generatePassword());
