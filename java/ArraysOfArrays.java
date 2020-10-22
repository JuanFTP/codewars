import java.util.ArrayList;

public class ArraysOfArrays {

    public static void main(String[] args) {
        Object [][] data = {
            {},
            {2},
            {0, 3},
            {3, 1, 1},
            {3, 4, 3, 3},
            {0, 2, 1, 4, 3},
            {4, 0, 3, 0, 4, 0},
            {1, 4, 3, 0, 3, 4, 1},
            {2, 1, 1, 3, 3, 1, 0, 4},
            {4, 1, 3, 0, 1, 1, 3, 1, 2},
            {3, 4, 3, 3, 4, 2, 1, 0, 1, 1, 0}
        };
        System.out.println("TF: "+getLengthOfMissingArray(data));
    }

    public static int getLengthOfMissingArray(Object[][] arrayOfArrays) {
        int lf = 0, aux = 0, dif = 0;
        int [] sizes = new int[arrayOfArrays.length];
        for (int x = 0; x < arrayOfArrays.length; x++) {
            sizes[x] = arrayOfArrays[x].length;
        }
        //Ordenar
        for (int x = 0; x < sizes.length; x++) {
            for (int y = 0; y < sizes.length; y++) {
                if(sizes[x] < sizes[y]) {
                    aux = sizes[y];
                    sizes[y] = sizes[x];
                    sizes[x] = aux;
                }
            }
        }
        //Obtener el faltante
        for (int d = 0; d < sizes.length-1; d++) {
            dif = sizes[d+1] - sizes[d];

            if(dif == 2) {
                lf = sizes[d]+1;
                break;
            }
        }
        return lf;
    }

    public static void printVect(int [] vect) {
        System.out.println("");
        for (int x = 0; x < vect.length; x++) {
            System.out.println(vect[x]);
        }
        System.out.println("");
    }
}
