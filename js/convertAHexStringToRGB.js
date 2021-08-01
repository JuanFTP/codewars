//@ts-check
/*
	Name: Convert A Hex String To RGB
	Description:
	When working with color values it can sometimes be useful to extract the individual red, green, and blue (RGB) component values for a color. Implement a function that meets these requirements:

	Accepts a case-insensitive hexadecimal color string as its parameter (ex. "#FF9933" or "#ff9933")
	Returns an object with the structure {r: 255, g: 153, b: 51} where r, g, and b range from 0 through 255
	Note: your implementation does not need to support the shorthand form of hexadecimal notation (ie "#FFF")

	Example
	"#FF9933" --> {r: 255, g: 153, b: 51}

	Link: https://www.codewars.com/kata/5282b48bb70058e4c4000fa7/train/javascript
*/

const getDecimalValue = (value) => {
	value = value.toUpperCase();
	switch (value) {
		case 'A':
			return 10;
		case 'B':
			return 11;
		case 'C':
			return 12;
		case 'D':
			return 13;
		case 'E':
			return 14;
		case 'F':
			return 15;
		default:
			return value;
	}
}

function hexStringToRGB(hexString) {
	let decimalItems = hexString.replace('#', '').split('').map((value, index) => {
		return (index % 2 == 0) ? (getDecimalValue(value) * 16) : (getDecimalValue(value) * 1);
	});
	let rgbValues = { r: decimalItems[0] + decimalItems[1], g: decimalItems[2] + decimalItems[3], b: decimalItems[4] + decimalItems[5] };
	return rgbValues;
}

console.log(hexStringToRGB("#000000"));
console.log(hexStringToRGB("#FFFFFF"));
console.log(hexStringToRGB("#FAFAFA"));
console.log(hexStringToRGB("#FEFEFE"));
console.log(hexStringToRGB("#672514"));
console.log(hexStringToRGB("#FF9933"));