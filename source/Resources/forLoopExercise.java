import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Prompt the user for the largest whole number n
        System.out.print("Enter the largest whole number (n): ");
        int n = scanner.nextInt();

        // Print column headers
        System.out.println("n\t" + "n^2\t" + "n^3\t" + "n^4");

        // Loop from 1 to n to calculate and print the powers
        for (int i = 1; i <= n; i++) {
            // Calculate powers
            int square = i * i;                 // i^2
            int cube = i * square;              // i^3
            int fourthPower = cube * i;         // i^4
            
            // Print the results in tab-separated format
            System.out.println(i + "\t" + square + "\t" + cube + "\t" + fourthPower);
        }

        // Close the scanner
        scanner.close();
    }
}
