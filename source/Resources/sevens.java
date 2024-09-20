import java.util.*;

public class Main {
    public static void main(String[] args) {
        // Initialize variables for player scores
        int player1Score = 0;
        int player2Score = 0;
        // Prompt user to input the number of rounds (not to exceed 10 rounds)
        Scanner input = new Scanner(System.in);
        int rounds = 0;
        while (rounds < 1 || rounds >= 10) {
            System.out.println("How many rounds would you like to play?\nPlease enter a number from 1 to 10 (inclusive): ");
            rounds = input.nextInt();
        }
        // Create an instance of the RollingMechanism class
        RollingMechanism rolling = new RollingMechanism();
        // Iterate through the specified number of rounds
        for (int round = 1; round <= rounds; round++) {
            System.out.println("\nRound " + round + ":");
            // Roll dice for Player 1
            int roundScorePlayer1 = rolling.roll("Player 1");
            player1Score += roundScorePlayer1;
            // Roll dice for Player 2
            int roundScorePlayer2 = rolling.roll("Player 2");
            player2Score += roundScorePlayer2;
            // Display scores after each round
            System.out.println("Player 1 Score: " + player1Score);
            System.out.println("Player 2 Score: " + player2Score);
        }
        // Declare the winner based on total scores after all rounds
        if (player1Score > player2Score) {
            System.out.println("\nPlayer 1 wins!");
        } else if (player1Score < player2Score) {
            System.out.println("\nPlayer 2 wins!");
        } else {
            System.out.println("\nIt's a tie!");
        }
    }
    static class RollingMechanism {
        // Method to simulate rolling and re-rolling dice
        public int roll(String playerName) {
            // Scanner for user input
            Scanner input = new Scanner(System.in);
            // Initialize variables
            int totalScore = 0;
            int rolls = 0;
            int[] dice = new int[6];
            // Allow up to 3 rolls
            while (rolls < 3) {
                System.out.println("\n" + playerName + "'s turn (Roll #" + (rolls + 1) + "):");
                System.out.println("Total Score: " + totalScore);
                // Roll six dice
                for (int i = 0; i < 6; i++) {
                    dice[i] = (int) (Math.random() * 6) + 1;
                }
                // Display rolled dice
                System.out.print("Rolled Dice: \n\t");
                for (int value : dice) {
                    System.out.print(value + ", ");
                }
                System.out.println();
                // Allow the user to remove all but 1 die
                while (true) {
                    System.out.print("Remove a dice by entering its value, or enter 0 to keep all: ");
                    int removeValue = input.nextInt();
                    if (removeValue == 0) {
                        break;
                    }
                    int removedCount = 0;
                    for (int i = 0; i < 6; i++) {
                        if (dice[i] == removeValue) {
                            dice[i] = 0;
                            removedCount++;
                            break;
                        }
                    }
                    if (removedCount == 0) {
                        System.out.println("Invalid input. The entered value does not match any dice. Try again.");
                    } else {
                        // Display remaining dice
                        System.out.print("Remaining Dice: ");
                        for (int value : dice) {
                            if (value != 0) {
                                System.out.print(value + ", ");
                            }
                        }
                        System.out.println();
                    }
                }
                // Calculate total score after each roll
                for (int value : dice) {
                    totalScore += value;
                }
                // Display remaining dice sum
                System.out.println("Remaining Dice Sum: " + totalScore);
                rolls++;
            }
            // Display turn completion and return total score for the round
            System.out.println("\n" + playerName + "'s turn complete. Score for this round: " + totalScore);
            return totalScore;
        }
    }
}
