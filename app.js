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
 * Function for generating parameters using ASCII
 * https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/ASCII-Table.svg/1261px-ASCII-Table.svg.png
 */

// Function for getting ASCII characters
const getCharsForArray = (first, last) => {
	const array = [];
	for (let i = first; i <= last; i++) {
		array.push(i);
	}
	return array;
};

// Generates lowercase
const getLower = getCharsForArray(97, 122);

// Generates uppercase
const getUpper = getCharsForArray(65, 90);

// Generates number
const getNumber = getCharsForArray(48, 57);

// Generates symbol
const getSymbol = getCharsForArray(33, 47).concat(
	getCharsForArray(58, 64)
		.concat(getCharsForArray(91, 96))
		.concat(getCharsForArray(123, 126))
);

/**
 * Generates final password
 */

const generatePassword = (
	length,
	includeUpper,
	includeLower,
	includeNumber,
	includeSymbol
) => {
	let charCodes = getLower;
	let inputs = includeUpper + includeLower + includeNumber + includeSymbol;
	if (includeUpper) charCodes = charCodes.concat(getUpper);
	if (includeSymbol) charCodes = charCodes.concat(getSymbol);
	if (includeNumber) charCodes = charCodes.concat(getNumber);
	if (inputs === 0) {
		return '';
	}

	const passwordCharacters = [];
	for (let i = 0; i < length; i++) {
		const characterCode =
			charCodes[Math.floor(Math.random() * charCodes.length)];
		passwordCharacters.push(String.fromCharCode(characterCode));
	}
	return passwordCharacters.join('');
};

/**
 * Click events
 */

// Generates password
generateBtnEl.addEventListener('click', () => {
	const length = Number(pLengthEl.value);
	const includeUppers = pUpperEl.checked;
	const includeLowers = pLowerEl.checked;
	const includeNumbers = pNumbersEl.checked;
	const includeSymbols = pSymbolsEl.checked;

	const password = generatePassword(
		length,
		includeUppers,
		includeLowers,
		includeNumbers,
		includeSymbols
	);

	passwordEl.innerText = password;
});

// Copy to clipboard
copyBtnEl.addEventListener('click', () => {
	const clipboard = navigator.clipboard;

	clipboard
		.writeText(passwordEl.innerText)
		.then(() => alert('Password has been copied to clipboard'));
});
