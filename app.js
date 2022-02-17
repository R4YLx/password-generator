/**
 * DOM elements
 */

const generatedPasswordEl = document.querySelector('#password');
const copyBtnEl = document.querySelector('.copyBtn');
const pwLengthEl = document.querySelector('#length');
const generateBtnEl = document.querySelector('#generate');
const inputsEl = document.querySelectorAll("input[type='checkbox']");

/**
 * Characters for password
 *
 */

const characters = {
	uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
	lowercase: 'abcdefghijklmnopqrstuvwxyz',
	numbers: '0123456789',
	symbols: '!;,.%/(){}#+-:_"@|`$=*^[]?&~',
};

/**
 * Generates password
 */

const generatePassword = () => {
	let password = '';
	let pwLength = pwLengthEl.value;
	let selectedInputChars = '';

	inputsEl.forEach(inputCheckbox => {
		if (inputCheckbox.checked) {
			selectedInputChars += characters[inputCheckbox.name];
		}
	});

	if (!selectedInputChars) {
		generatedPasswordEl.innerText = 'Please select character type';
	} else {
		for (let i = 0; i < pwLength; i++) {
			password +=
				selectedInputChars[
					Math.floor(Math.random() * selectedInputChars.length)
				];
		}

		generatedPasswordEl.innerText = password;
	}
};

/**
 * Click events
 */

// Generates password on click
generateBtnEl.addEventListener('click', () => {
	generatePassword();
});

// Copy to clipboard
copyBtnEl.addEventListener('click', () => {
	const clipboard = navigator.clipboard;

	clipboard
		.writeText(generatedPasswordEl.innerText)
		.then(() => alert('Password has been copied to clipboard'));
});
