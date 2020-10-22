/*
	Descripción
	Given a string str, reverse it omitting all non-alphabetic characters.

	Example
	For str = "krishan", the output should be "nahsirk".

	For str = "ultr53o?n", the output should be "nortlu".

	Input/Output
	[input] string str

	A string consists of lowercase latin letters, digits and symbols.

	[output] a string
	Link: https://www.codewars.com/kata/58b8c94b7df3f116eb00005b/train/javascript
*/
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

function reverseLetter(str) {
	str = str.toLowerCase();
	var clean_str = "";
	for(var x = 0; x < str.length; x++) { clean_str += (alphabet.includes(str.charAt(x)) ? str.charAt(x) : ""); }
	return clean_str.split("").reverse().join("");
}