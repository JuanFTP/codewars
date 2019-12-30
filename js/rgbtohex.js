document.addEventListener("DOMContentLoaded", function () {
	/*
		Link: https://www.codewars.com/kata/rgb-to-hex-conversion/train/javascript
		Descripción:
		The rgb() method is incomplete. Complete the method so that passing in RGB decimal values will result in a hexadecimal representation being returned. The valid decimal values for RGB are 0 - 255. Any (r,g,b) argument values that fall out of that range should be rounded to the closest valid value.

		The following are examples of expected output values:

		rgb(255, 255, 255) // returns FFFFFF
		rgb(255, 255, 300) // returns FFFFFF
		rgb(0,0,0) // returns 000000
		rgb(148, 0, 211) // returns 9400D3
	*/
	let mat_values = [
		[0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0]
	];
	let value_return = "";

	function rgb(r, g, b){
		value_return = "";
		if(r < 0) { r = 0; } else if (r > 255) { r = 255; }
		if(g < 0) { g = 0; } else if (g > 255) { g = 255; }
		if(b < 0) { b = 0; } else if (b > 255) { b = 255; }
		if(r < 10 && g < 10 && b < 10) {
			value_return = ""+r+r+g+g+b+b;
		} else {
			value_return = toHex(r, g, b);
		}

		return value_return;
	}

	function toHex(r, g, b) {
		let rb = r.toString(2).toString();
		let gb = g.toString(2).toString();
		let bb = b.toString(2).toString();

		console.log(rb, r);
		console.log(gb, g);
		console.log(bb, b);

		for(let s = rb.length, x = 7, b = 1; s >= 0; s--, x--, b = b * 2) {
			b = (b > 8 ? 1 : b);
			if(rb.charAt(s) == 1) {
				mat_values[0][x] = b; 
			}
		}

		console.log(mat_values);
		return "Convirtiendo...";
	}

	console.log(rgb(181, 11, 27));
});