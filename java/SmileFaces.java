/*
    Caras felices
    https://www.codewars.com/kata/583203e6eb35d7980400002a/train/java
*/
import java.util.*;

public class SmileFaces {
    public static void main(String[] args) {
        List<String> a = new ArrayList<String>();
        a.add("ooD");
        a.add(";D");
        a.add(":8)");
        a.add(":-)");
        System.out.println(countSmileys(a));
    }

    public static int countSmileys(List<String> arr) {
        int acum = 0;
        String regex = "[:;][-~]?[)D]";
        for (int x = 0; x < arr.size(); x++) { if(arr.get(x).matches(regex)) { acum++; } }
        return acum;
    }
}