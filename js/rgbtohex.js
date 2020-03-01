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

		Tarea: Optimizar
	*/
	
	function rgb(r, g, b){
		let mat_values = [
			[0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0]
		];
		value_return = "";

		if(r < 0) { r = 0; } else if (r > 255) { r = 255; }
		if(g < 0) { g = 0; } else if (g > 255) { g = 255; }
		if(b < 0) { b = 0; } else if (b > 255) { b = 255; }
		if(r < 10 && g < 10 && b < 10) {
			value_return = ""+r+r+g+g+b+b;
		} else {
			value_return = toHex(r, g, b, mat_values);
		}

		return finalVersion(mat_values);
	}

	function toHex(r, g, b, mat_values) {
		let rb = r.toString(2).toString();
		let gb = g.toString(2).toString();
		let bb = b.toString(2).toString();

		/*Convertir R*/
		for(let im = 7, is = rb.length-1, b = 1; im >= 0 || is == 0; im--, is--, b = b * 2) {
			b = (b > 8 ? b = 1 : b);
			if(rb.charAt(is) == "1") {
				mat_values[0][im] = b;
			}
		}
		
		/*Convertir G*/
		for(let im = 7, is = gb.length-1, b = 1; im >= 0 || is == 0; im--, is--, b = b * 2) {
			b = (b > 8 ? b = 1 : b);
			if(gb.charAt(is) == "1") {
				mat_values[1][im] = b;
			}
		}
		
		/*Convertir B*/
		for(let im = 7, is = bb.length-1, b = 1; im >= 0 || is == 0; im--, is--, b = b * 2) {
			b = (b > 8 ? b = 1 : b);
			if(bb.charAt(is) == "1") {
				mat_values[2][im] = b;
			}
		}
	}

	function finalVersion(mat_values) {
		/*Conversión final*/
		let R1 = (mat_values[0][0]+mat_values[0][1]+mat_values[0][2]+mat_values[0][3]).toString(16).toUpperCase();
		let R2 = (mat_values[0][4]+mat_values[0][5]+mat_values[0][6]+mat_values[0][7]).toString(16).toUpperCase();
		let G1 = (mat_values[1][0]+mat_values[1][1]+mat_values[1][2]+mat_values[1][3]).toString(16).toUpperCase();
		let G2 = (mat_values[1][4]+mat_values[1][5]+mat_values[1][6]+mat_values[1][7]).toString(16).toUpperCase();
		let B1 = (mat_values[2][0]+mat_values[2][1]+mat_values[2][2]+mat_values[2][3]).toString(16).toUpperCase();
		let B2 = (mat_values[2][4]+mat_values[2][5]+mat_values[2][6]+mat_values[2][7]).toString(16).toUpperCase();
		
		return R1+R2+G1+G2+B1+B2+"".toString(16);
	}

	console.log(rgb(156,98,255));
});