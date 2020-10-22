/*
	Name: Inspiring Strings
	Link: https://www.codewars.com/kata/5939ab6eed348a945f0007b2/train/java
*/

import java.util.ArrayList;
import java.util.StringTokenizer;

public class WordMost {
	public static void main(String...Args) {
		System.out.println("Word: "+longestWord("i cinco cuatro dos tres uno"));
	}

	public static String longestWord(String wordString) {
		StringTokenizer it = new StringTokenizer(wordString);
		ArrayList<String> data = new ArrayList<String>();
		String word = "";
		while(it.hasMoreTokens()) {
			word = it.nextToken();
			data.add(word);
		}
		//Ordenar palabras
		for(int a = 0; a < data.size(); a++) {
			for(int b = 0; b < data.size(); b++) {
				if(data.get(a).length() < data.get(b).length()) {
					word = data.get(a);
					data.set(a, data.get(b)); 
					data.set(b, word);
				}
			}
		}
		return (data.size() > 0 ? data.get(data.size()-1) : "");
	}
}