/*
	Link: https://www.codewars.com/kata/55c45be3b2079eccff00010f/train/javascript
	Descripción:
	Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

	Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

	If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

	Examples
	"is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
	"4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
	""  -->  ""
*/

order("4of Fo1r pe6ople g3ood th5e the2");
function order(input) {
	var words = input.split(' ');
	var number_patten = /[1-9]/;
	var word = "";
	var data = [];
	for(var x = 0; x < words.length; x++) {
		word = words[x];
		for(var c = 0; c < word.length; c++) {
			if(word.charAt(c).match(number_patten)) {
				data.push([word.charAt(c), words[x]]);
				break;
			}
		}
	}

	//Ordenar arreglo
	var number_temp = 0;
	var word_temp = "";
	for(var x = 0; x < data.length; x++) {
		for(var y = 0; y < data.length; y++) {
			if(data[x][0] < data[y][0]) {
				number_temp = data[y][0];
				word_temp = data[y][1];
				data[y][0] = data[x][0];
				data[y][1] = data[x][1];
				data[x][0] = number_temp;
				data[x][1] = word_temp;
			}
		}
	}

	//Pasar las palabras a un arreglo
	var list_words = [];
	for(var x = 0; x < data.length; x++) {
		list_words.push(data[x][1]);
	}

	return list_words.join(' ');
}