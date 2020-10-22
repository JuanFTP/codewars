public class FindTheCharacter {

    public static void main(String[] args) {
        System.out.println("REST: "+encode("Succe"));
    }

    static String encode(String word){
        word = word.toLowerCase();
        String res = "", word_izq = "", word_der = "";
        boolean [] indices = {false, false};
        char character = ' ';

        for (int x = 0; x < word.length(); x++) {
            character = word.charAt(x); //Obtiene el caracter en cuestion
            word_izq = word.substring(0, x); //Sustrae la cadena de la posición inicial al final
            word_der = word.substring(x+1); //Sustrae la cadena de la posición al final

            indices[0] = word_izq.contains(""+character); //Verifica si el caracter existe en la cadena izq
            indices[1] = word_der.contains(""+character); //Verifica si el caracter existe en la cadena der

            // System.out.println(character+" > "+indices[0]+" > "+indices[1]);

            if(indices[0] || indices[1]) {
                // Existe en algun lado de la cadena
                res += ")";
            } else if(!indices[0] && !indices[1]) {
                // No existe en ningun lado por lo cual es unico en la cadena
                res += "(";
            }
        }

        return res;
    }
}
