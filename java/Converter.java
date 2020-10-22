import java.util.Scanner;

public class Converter {
	public static void main(String...Args) {
		Scanner lect = new Scanner(System.in);
		long amount  = 0;

		System.out.println("Entrada: ");
		amount = lect.nextLong();

		String str_amount = (amount != 0 ? String.valueOf(amount).toString() : "0");

		if(str_amount.length() >= 2) {
			//Verificación de unidades
			if(Integer.parseInt(str_amount.substring(str_amount.length()-1)) == 0) {
				//Verificación de decenas en 20 y 50
				int value = Integer.parseInt(str_amount.substring(str_amount.length()-2, str_amount.length()-1));
				boolean amount_val = false;

				if(value == 0) {
					amount_val = true;
				} else if(value == 1 || value == 3) {
					amount_val = false;
				} else {
					if(value % 2 == 0) {
						amount_val = true;
					} else if(value % 2 == 1) {
						if(value == 5 || value == 7 || value == 9) {
							amount_val = true;
						}
					}
				}

				System.out.println(amount_val ? "Se puede pagar con billetes..." : "No se puede pagar con billetes...");
			} else {
				System.out.println("No se puede pagar con billetes...");
			}
		} else {
			System.out.println("No se puede pagar con billetes...");
		}
	}
}