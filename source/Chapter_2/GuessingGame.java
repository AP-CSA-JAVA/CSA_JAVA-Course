/*  -------------------------------------------------------------------------
-   Write a java program that will ask the user to pick a number between 1 - 100. 
-   Use a do while loop that will compare the random number generated with Math.random() 
-   method with the choice of the user. If the user inputs the correct number, end the 
-   game with a congratulatory message. If the user inputs the number wrong, tell the 
-   user how close they are to the actual number and give them another chance to pick 
-   the number. Program ends when the number is selected.
    ------------------------------------------------------------------------- */
import java.util.Scanner;

public class GuessingGame {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        // Generate random number from 1 to 100
        int randomNumber = (int)(Math.random() * 100) + 1;

        int userGuess;
        System.out.println("Pick a number between 1 and 100!");

        do {
            System.out.print("Enter your guess: ");
            userGuess = input.nextInt();

            if (userGuess == randomNumber) {
                System.out.println("🎉 Congratulations! You guessed the correct number: " + randomNumber);
            } else {
                int difference = Math.abs(randomNumber - userGuess);

                System.out.println("Incorrect! You were off by " + difference + ".");
                System.out.println("Try again!\n");
            }

        } while (userGuess != randomNumber);

        input.close();
    }
}
