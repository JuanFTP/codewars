package com.jftp.home;

import org.jftp.code.AddingBigNumbers;

public class Home {
	public static void main(String[] args) {
		AddingBigNumbers aBN = new AddingBigNumbers();
		String out = aBN.add("12121212", "2876378388");
		System.out.println("Response: " + out);
	}
}
