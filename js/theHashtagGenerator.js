/*
	name: The Hashtag Generator
	description: 
	The marketing team is spending way too much time typing in hashtags.
	Let's help them with our own Hashtag Generator!

	Here's the deal:

	It must start with a hashtag (#).
	All words must have their first letter capitalized.
	If the final result is longer than 140 chars it must return false.
	If the input or the result is an empty string it must return false.
	Examples
	" Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
	"    Hello     World   "                  =>  "#HelloWorld"
	""                                        =>  false

	link: https://www.codewars.com/kata/52449b062fb80683ec000024/train/javascript
*/

function generateHashtag(str) {
	var hashtag = ((str.trim().toLowerCase().split(" ")).map(word => word.charAt(0).toUpperCase() + word.substr(1))).join("");
	return hashtag.length + 1 > 140 || hashtag === "" ? false : "#" + hashtag;
}