/*
	Form The Largest
	https://www.codewars.com/kata/5a4ea304b3bfa89a9900008e/train/java
*/

public class MaxNumber {
	public static void main(String[] args) {
		System.out.println("Max Number: "+maxNumber(12563));
	}

	public static long maxNumber(long n) {
		char [] sort_data = String.valueOf(n).toCharArray();
		char temp_char = ' ';

		for(int x = 0; x < sort_data.length; x++) {
			for(int y = 0; y < sort_data.length; y++) {
				if(sort_data[y] < sort_data[x]) {
					temp_char = sort_data[y];
					sort_data[y] = sort_data[x];
					sort_data[x] = temp_char;
				}
			}
		}

        return Long.parseLong(String.copyValueOf(sort_data).toString());
    }
}