public class Phone {
    public static void main(String...Args) {
        System.out.println("IS: "+validPhoneNumber("(123) 235-4456"));
    }

    public static boolean validPhoneNumber(String phoneNumber) {
        return phoneNumber.matches("\\(([0-9]{3})\\) ([0-9]{3})\\-([0-9]{4})");
    }
}
