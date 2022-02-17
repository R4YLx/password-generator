/**
 * DOM elements
 */

const passwordEl = document.querySelector('#password');
const copyBtnEl = document.querySelector('.copyBtn');
const pLengthEl = document.querySelector('#length');
const generateBtnEl = document.querySelector('#generate');
const inputEl = document.querySelectorAll("input[type='checkbox']");

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
	let pLength = pLengthEl.value;
	let selectedInputs = '';

	inputEl.forEach(inputCheckbox => {
		if (inputCheckbox.checked) {
			selectedInputs += characters[inputCheckbox.name];
		}
	});

	if (!selectedInputs) {
		passwordEl.innerText = 'Please select character type';
	} else {
		for (let i = 0; i < pLength; i++) {
			password +=
				selectedInputs[Math.floor(Math.random() * selectedInputs.length)];
		}

		passwordEl.innerText = password;
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
		.writeText(passwordEl.innerText)
		.then(() => alert('Password has been copied to clipboard'));
});
