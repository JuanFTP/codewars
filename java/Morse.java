import java.util.StringTokenizer;

public class Morse {
	static String final_str = "";
	static String temp_str = "";
	static String temp = "";
	static String clean_str = "";
	static boolean hasText = true;
	public static void main(String...Args) {
		String text_morse = " ... --- ... -.-.-- - .... . --.- ..- .. -.-. -.- -... .-. --- .-- -. ..-. --- -..- .--- ..- - .--. ... --- ...- . .-. - .... . .- .. .- - .. -.-- - .. --- -. .-.-.-";
		print("Dato de entrada: "+text_morse);
		print("Resultado: "+decode(text_morse));
	}

	public static String decode(String morse_code) {
		//Si el String no está vacío
		if(!morse_code.isEmpty()) {
			//Limpiar el String
			clean_str = cleanString(morse_code);
			if(clean_str.contains(" ")) {
				//Separación de palabras si las hay
				if(clean_str.indexOf("  ") > -1) {
					//Hay palabras y códigos
					while (hasText) {
						if(clean_str.indexOf("  ") > -1) {
							temp = clean_str.substring(0, clean_str.indexOf("  "));
							clean_str = clean_str.substring(clean_str.indexOf("  ")+2, clean_str.length());
							final_str += decodeLine(temp)+" ";
						} else if((clean_str.indexOf("  ") == -1) && (clean_str.length() > 0)) {
							temp = clean_str;
							clean_str = "";
							final_str += decodeLine(temp);
							hasText = false;
						} else {
							hasText = false;
						}
					}
					final_str = final_str.trim();
				} else {
					//No hay palabras, solo códigos
					final_str = decodeLine(clean_str);
				}
			} else {
				final_str = alphabet(clean_str);
			}
			return final_str;
		} else {
			return final_str;
		}
	}

	public static String decodeLine(String str_line) {
		StringTokenizer lines = new StringTokenizer(str_line);
		temp_str = ""; temp = "";
		while(lines.hasMoreTokens()) {
			temp = lines.nextToken();
			temp_str += (alphabet(temp) != null ? alphabet(temp) : null);
		}
		return temp_str;
	}

	public static void print(Object data) {
		System.out.println(data);
	}

	public static String cleanString(String str_input) {
		return str_input.trim().replaceAll("\\s{2,}", "  ");
	}
	
	public static String alphabet(String morseText) {
		if(morseText.equals("...---...")) {
			return "SOS";
		} else if(morseText.equals(".-")){
			return "A";
		} else if(morseText.equals("-...")){
			return "B";
		} else if(morseText.equals("-.-.")) {
			return "C";
		} else if(morseText.equals("-..")){
			return "D";
		} else if(morseText.equals(".")) {
			return "E";
		} else if(morseText.equals("..-.")) {
			return "F";
		} else if(morseText.equals("--.")) {
			return "G";
		} else if(morseText.equals("....")) {
			return "H";
		} else if(morseText.equals("..")) {
			return "I";
		} else if(morseText.equals(".---")) {
			return "J";
		} else if(morseText.equals("-.-")) {
			return "K";
		} else if(morseText.equals(".-..")) {
			return "L";
		} else if(morseText.equals("--")) {
			return "M";
		} else if(morseText.equals("-.")) {
			return "N";
		} else if(morseText.equals("---")) {
			return "O";
		} else if(morseText.equals(".--.")) {
			return "P";
		} else if(morseText.equals("--.-")) {
			return "Q";
		} else if(morseText.equals(".-.")) {
			return "R";
		} else if(morseText.equals("...")) {
			return "S";
		} else if(morseText.equals("-")) {
			return "T";
		} else if(morseText.equals("..-")) {
			return "U";
		} else if(morseText.equals("...-")) {
			return "V";
		} else if(morseText.equals(".--")) {
			return "W";
		} else if(morseText.equals("-..-")) {
			return "X";
		} else if(morseText.equals("-.--")) {
			return "Y";
		} else if(morseText.equals("--..")) {
			return "Z";
		} else if(morseText.equals("-----")) {
			return "0";
		} else if(morseText.equals(".----")) {
			return "1";
		} else if(morseText.equals("..---")) {
			return "2";
		} else if(morseText.equals("...--")) {
			return "3";
		} else if(morseText.equals("....-")) {
			return "4";
		} else if(morseText.equals(".....")) {
			return "5";
		} else if(morseText.equals("-....")) {
			return "6";
		} else if(morseText.equals("--...")) {
			return "7";
		} else if(morseText.equals("---..")) {
			return "8";
		} else if(morseText.equals("----.")) {
			return "9";
		} else if(morseText.equals(".-.-.-")) {
			return ".";
		} else if(morseText.equals("-.-.--")) {
			return ",";
		} else if(morseText.equals("..--..")) {
			return "?";
		} else if(morseText.equals(".-..-.")) {
			return "\"";
		} else if(morseText.equals("--..--")) {
			return "!";
		} else {
			return null;
		}
	}
}