package org.jftp.code;

public class ArrayIP {
	public String oddOrEven(int [] array) {
		int suma = 0;
		for(int i = 0; i < array.length; i++) { suma += array[i]; }
		return (suma % 2 == 0 ? "even" : "odd");
	}
}