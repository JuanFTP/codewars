public class RowSumOddNumbers {

    public static void main(String...Args) {
        System.out.println("Num: "+rowSumOddNumbers(42));
    }

    public static int rowSumOddNumbers(int n) {
        int base = ((n - 1) * n) + 1, top = (n * n) + ( n - 1), acum = 0;

        while(base <= top) {
            acum += base;
            base = base + 2;
        }

        return acum;
    }
}
