import java.util.ArrayList;

public class FindOdd {
    public static void main(String...Args) {
        /*
        20{2}
         1{2}
        -1{2}
         2{2}
        -2{2}
         3{2}
         5{3}
         4{2}
        */
        int[] data = {20, 1, -1, 2, -2, 3, 3,  5, 5, 1, 2, 4, 20, 4, -1, -2, 5};

        System.out.println("El numero con aparición impar: "+findIt(data));
    }

    public static int findIt(int[] a) {
        int n = 0;
        for(int i = 0, c = 0; i < a.length; i++) {
            c = 0;
            for(int j = 0; j < a.length; j++) { if(a[j] == a[i]) { c++; } }
            if(c%2 == 1) { n = a[i]; break; }
        }
        return n;
    }
}
