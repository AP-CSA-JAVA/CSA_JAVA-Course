/*
Prompt: Write a java program that generates the second, third, and fourth powers of a list 
of whole numbers from 1 to n where n is input by the user. First, ask the user for 
the largest of the whole numbers to use (n). Second, output column headers based on 
the number from the user input. Then, use a for loop to iterate from 1 to n (the 
number the user inputted), computing each of that loop variable to the second power, 
third power and fourth power, et cetera. Assuming your loop variable is called i, you 
can do this either as i*i or Math.pow(i,2). To output the values in nice columns, 
separate each output with a tab (“\t”). This is similar to using \n for a new line.
*/

//Solution
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
