public class ArrayIP {
	public static void main(String[] args) {
		int [] array = {1, 2, 6, 5, 3, 5, 6, 8, 9};
		System.out.println(oddOrEven(array));
	}

	public static String oddOrEven(int [] array) {
		int suma = 0;
		for(int i = 0; i < array.length; i++) { suma += array[i]; }
		return (suma % 2 == 0 ? "even" : "odd");
	}
}