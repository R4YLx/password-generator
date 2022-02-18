/**
 * DOM elements
 */

const generatedPasswordEl = document.querySelector('#password');
const passwordContainerEl = document.querySelector('.passwordContainer');
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

	// const generatedPasswordEl = document.createElement('span');
	// generatedPasswordEl.id = 'password';
	// passwordContainerEl.insertAdjacentElement('afterbegin', generatedPasswordEl);

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
	// if (document.getElementById('password')) {
	// 	document.getElementById('password').remove();
	// }
	generatePassword();
});

// Copy to clipboard
copyBtnEl.addEventListener('click', () => {
	const clipboard = navigator.clipboard;

	if (
		generatedPasswordEl.innerText === 'Please select character type' ||
		generatedPasswordEl.innerText === ''
	) {
		alert(`There's nothing to copy. Please generate password first!`);
	} else {
		clipboard
			.writeText(generatedPasswordEl.innerText)
			.then(() => alert(`Password has been copied to clipboard`));
	}
});
