import java.util.StringTokenizer;

public class MinWord {

    public static void main(String...Args) {
        System.out.println("The word most small length is: "+getSize("Palabra mas pequeña"));
    }

    public static int getSize(String str) {
        int s = 0, t = 0;
        StringTokenizer token = new StringTokenizer(str);
        s = token.nextToken().length();

        while(token.hasMoreTokens()) {
            t = token.nextToken().length();
            if(t<s) {
                s = t;
            }
        }
        return s;
    }
}