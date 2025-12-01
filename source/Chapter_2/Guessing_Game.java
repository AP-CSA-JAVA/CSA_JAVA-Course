import java.util.Scanner;

public class Name {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int randomNumber = (int) (Math.random() * 100) + 1;
        int userGuess;
        
        System.out.println("Welcome to the Number Guessing Game!");
        System.out.println("I've picked a number between 1 and 100. Try to guess it!");

        do {
            System.out.print("Enter your guess: ");
            userGuess = scanner.nextInt();

            if (userGuess == randomNumber) {
                System.out.println("Congratulations! You guessed the correct number: " + randomNumber);
                break;
            } else {
                int difference = Math.abs(randomNumber - userGuess);
                if (difference <= 10) {
                    System.out.println("You're very close! Try again.");
                } else if (difference <= 20) {
                    System.out.println("You're close! Try again.");
                } else if (difference <= 30) {
                    System.out.println("You're getting warmer! Try again.");
                } else {
                    System.out.println("You're far away! Try again.");
                }
            }
        } while (true);

        scanner.close();
    }
}
