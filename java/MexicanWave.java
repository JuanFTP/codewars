public class MexicanWave {

    public static void main(String...Args) {
        String str = " gap ";
        String [] wave = wave(str);

        for (int i = 0; i < wave.length; i++) {
            System.out.println(wave[i]);
        }
    }

    public static String[] wave(String str) {
        str = str.toLowerCase();
        //Contar espacios
        int spaces = 0;

        for(int sn = 0 ; sn < str.length(); sn++) {
            if(str.charAt(sn) == ' ') {
                spaces++;
            }
        }

        String [] variants = new String [(str.length() - spaces)];

        for (int x = 0, y = 0; x < str.length(); x++) {
            if(str.charAt(x) != ' ') {
                variants[y] = str.substring(0, x) + String.valueOf(str.charAt(x)).toUpperCase() + str.substring(x+1, str.length());
                y++;
            }
        }

        return variants;
    }

}
