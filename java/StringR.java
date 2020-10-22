import java.util.Stack;

public class StringR {
    public static void main(String[] args) {
        System.out.println("R: "+validate("hi(())("));
    }

    public static boolean validate(String str) {
        String cadena = str.replace(" ", "");
        if(cadena.length()%2 != 0) {
            return false;
        } else {
            if(cadena.isEmpty()) {
                return true;
            } else {
                Stack<String> caracteres = new Stack<String>();
                boolean val = true;
                for (int x = 0; x < cadena.length(); x++) {
                    switch (cadena.charAt(x)) {
                        case '(': {
                          caracteres.push(")"); break;
                        } case '[': {
                            caracteres.push("]"); break;
                        } case '{': {
                            caracteres.push("}"); break;
                        } case '<': {
                            caracteres.push(">"); break;
                        } case ')': {
                            val = caracteres.pop().charAt(0) != ')' ? false : true;
                            break;
                        } case ']': {
                            val = caracteres.pop().charAt(0) != ']' ? false : true;
                            break;
                        } case '}': {
                            val = caracteres.pop().charAt(0) != '}' ? false : true;
                            break;
                        } case '>': {
                            val = caracteres.pop().charAt(0) != '>' ? false : true;
                            break;
                        }
                    }

                    if(!val) { break; }
                }

                if(caracteres.empty()) {
                    return true;
                } else {
                    return false;
                }
            }
        }
    }
}
