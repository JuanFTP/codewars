document.addEventListener("DOMContentLoaded", function() {
	/*
		Link: https://www.codewars.com/kata/55c04b4cc56a697bb0000048/train/javascript
		Descripcion:
		Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

		Notes:

		Only lower case letters will be used (a-z). No punctuation or digits will be included.
		Performance needs to be considered
		Input strings s1 and s2 are null terminated.
		Examples
		scramble('rkqodlw', 'world') ==> True
		scramble('cedewaraaossoqqyt', 'codewars') ==> True
		scramble('katas', 'steak') ==> False

		Comentarios:
	*/
	//str2 cabe en str1
	function scramble(str1, str2) {
		/*const pat = RegExp("["+str2+"]");
		console.log(pat.test(str1));*/

		let arr1 = toCharArray(str1);
		let arr2 = toCharArray(str2);

		if(str1.length >= str2.length) {
			for(let x = 0; x < arr2.length; x++) {
				if(arr1.includes(arr2[x])) {
					//Eliminar la letra en curso del arreglo 1
					arr1 = borrarLetra(arr2[x], arr1);
					//Elimnar la letra en curso del arreglo 2
					arr2 = borrarLetra(arr2[x], arr2);
				}
			}

			return (arr2.join('') == "" ? true : false);
		} else {
			return false;
		}
	}

	function toCharArray(input) {
		let array = [];
		for(let x = 0; x < input.length; x++) {
			array.push(input.charAt(x));
		}

		return array;
	}

	function borrarLetra(letra, arreglo) {
		for(let x = 0; x < arreglo.length; x++) {
			if(arreglo[x] == letra) {
				arreglo[x] = '';
				break;
			}
		}

		return arreglo;
	}

	console.log("P01 "+scramble('rkqodlw','world'));
	console.log("P02 "+scramble('cedewaraaossoqqyt','codewars'));
	console.log("P03 "+scramble('katas','steak'));
	console.log("P04 "+scramble('scriptjava','javascript'));
	console.log("P05 "+scramble('scriptingjava','javascript'));
	console.log("P06 "+scramble('scriptsjava','javascripts'));
	console.log("P07 "+scramble('jscripts','javascript'));
	console.log("P08 "+scramble('aabbcamaomsccdd','commas'));
});