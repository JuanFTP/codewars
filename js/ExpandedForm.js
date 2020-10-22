/*
	Link: https://www.codewars.com/kata/5842df8ccbd22792a4000245/train/javascript

	Descripción:
	Write Number in Expanded Form
	You will be given a number and you will need to return it as a string in Expanded Form. For example:

	expandedForm(12); // Should return '10 + 2'
	expandedForm(42); // Should return '40 + 2'
	expandedForm(70304); // Should return '70000 + 300 + 4'
*/

function expandedForm(num) {
	num = num+"";
	var cifras = [];
	for(var x = num.length; x >= 0; x--) {
		if(num.charAt(x) > 0) {
			cifras.push(num.charAt(x)+getSerialZero(num.substr(x + 1, num.length)));
		}
	}
	return cifras.reverse().join(' + ');
}

function getSerialZero(cadena) {
	var serial = "";
	for(var x = 0; x < cadena.length; x++) { serial += '0'; }
	return serial;
}