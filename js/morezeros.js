/*
	Estado: En curso
	Link: https://www.codewars.com/kata/5d41e16d8bad42002208fe1a/train/javascript
	Descripción:
	Create a moreZeros function which will receive a string for input, and return an array containing only the characters from that string whose binary representation of its ASCII value consists of more zeros than ones.

	You should remove any duplicate characters, keeping the first occurence of any such duplicates, so they are in the same order in the final array as they first appeared in the input string.

	Examples

	'abcde' === ["1100001", "1100010", "1100011", "1100100", "1100101"]
				True       True       False      True       False

			--> ['a','b','d']

	'DIGEST'--> ['D','I','E','T']
	All input will be valid strings of length > 0.

	Comentarios:
	Puede mejorarse y simplificarse aún más.
	+ Se optimizó a lo máximo posible, según lógica local
*/

document.addEventListener("DOMContentLoaded", function() {
	function moreZeros(s){
		if(s.length > 0) {
			//Contiene la cadena de salida final
			let final = [];
			for(let i = 0; i < s.length; i++) {
				if((!final.includes(s.charAt(i))) && (s.charAt(i).charCodeAt(0).toString(2).replace(/1/g, '').length > s.charAt(i).charCodeAt(0).toString(2).replace(/0/g, '').length)) {
					final.push(s.charAt(i));
				}
			}

			return final;
		}
	}

	/*Casos de prueba*/
	console.log(moreZeros('abcde'));
	/*['a','b','d']*/
	console.log(moreZeros('Great job!'));
	/*['a', ' ', 'b', '!']*/
	console.log(moreZeros('DIGEST'));
	/*['D','I','E','T']*/
	console.log(moreZeros('abcdeabcde'));
	/*['a','b','d']*/
});