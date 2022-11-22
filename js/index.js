var lowercase = 'abcdefghijklmnopqrstuvwxyz';
var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var regexLowercase = /[a-z]/;
var regexUppercase = /[A-Z]/;

var rot = function (string, n) {
	if (n == null) {
		// use ROT-13 by default
		n = 13;
	}
	n = Number(n);
	string = String(string);
	if (n == 0) {
		return string;
	}
	if (n < 0) { // decode instead of encode
		n += 26;
	}
	var length = string.length; // note: no need to account for astral symbols
	var index = -1;
	var result = '';
	var character;
	var currentPosition;
	var shiftedPosition;
	while (++index < length) {
		character = string.charAt(index);
		if (regexLowercase.test(character)) {
			currentPosition = lowercase.indexOf(character);
			shiftedPosition = (currentPosition + n) % 26;
			result += lowercase.charAt(shiftedPosition);
		} else if (regexUppercase.test(character)) {
			currentPosition = uppercase.indexOf(character);
			shiftedPosition = (currentPosition + n) % 26;
			result += uppercase.charAt(shiftedPosition);
		} else {
			result += character;
		}
	}
	return result;
};


window.onload = function () {

	var dropdown = document.getElementById('rot_encrypt');
	var textarea = document.getElementById('rot_initial');
	var result = document.getElementById('rot_conversion');
	textarea.value = "";
	dropdown.value = "ROT13";

	dropdown.addEventListener('change', (e) => {
		let conversion_index = dropdown.value.substring(3);
		result.value = rot(textarea.value, conversion_index);
	})

	function updateResult() {
		let conversion_index = dropdown.value.substring(3);
		if(textarea.value == "")
		{
			textarea.selectionStart = 0;
		}

		result.value = rot(textarea.value, conversion_index);
	}


	textarea.addEventListener('keyup', updateResult);

	result.addEventListener('keydown', (e) => {
		e.preventDefault();
		return false;
	})
}

