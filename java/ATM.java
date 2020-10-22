public class ATM {
	public static void main(String[] args) {
		System.out.println("Is: "+validatePin("1212344"));
	}

	public static boolean validatePin(String pin) {
		return pin.matches("[0-9]{4}|[0-9]{6}");
	}
}