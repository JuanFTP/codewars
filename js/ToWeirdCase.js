/*
	Link: https://www.codewars.com/kata/52b757663a95b11b3d00062d/train/javascript
	Descripción:
	Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased.

	The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').

	Examples:
	toWeirdCase( "String" );//=> returns "StRiNg"
	toWeirdCase( "Weird string case" );//=> returns "WeIrD StRiNg CaSe"
*/
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

toWeirdCase("This is a test   ");
function toWeirdCase(string) {
	var words = string.toLowerCase().trim().split(' ');
	var word_now = "";
	var word_transform = "";

	for(var x = 0; x < words.length; x++) {
		word_now = words[x];

		for(var c = 0; c < word_now.length; c++) {
			if(alphabet.includes(word_now.charAt(c))) {
				if(c%2 == 0) {
					word_transform += word_now.charAt(c).toUpperCase();
				} else {
					word_transform += word_now.charAt(c);
				}
			}
		}
		words[x] = word_transform;
		word_transform = "";
	}

	return words.join(' ');
}