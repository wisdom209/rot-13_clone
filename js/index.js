function convert_to_13(str) {
	let a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
	let b = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM";

	let newstring = str;

	return newstring.replace(/[a-z]/gi, letter => a[b.indexOf(letter)]);

}

window.onload = function () {

	var textarea = document.getElementById('rot_initial');
	var result = document.getElementById('rot_conversion');

	function updateResult() {
		result.textContent = convert_to_13(textarea.value);
	}

	textarea.addEventListener('keyup', updateResult);

}

