/**
 * DOM elements
 */

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

// Generates numbers
const getNumbers = () => {
	return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
};

// Generates symbols
const getSymbols = () => {
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

console.log(getSymbols());
