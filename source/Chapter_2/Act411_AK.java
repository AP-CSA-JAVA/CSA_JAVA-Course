import java.util.Scanner;

public class GradeOrganizer {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Initialize counters for each grade category
        int countA = 0, countB = 0, countC = 0, countD = 0, countF = 0;

        // Get the number of inputs
        System.out.println("Enter the number of grades to record: ");
        int numberOfGrades = scanner.nextInt();
        int count = 0;

        System.out.println("Enter " + numberOfGrades + " grades (integers):");

        // Use a while loop to process the inputs
        while (count < numberOfGrades) {
            int grade = scanner.nextInt();

            // Categorize the grade
            if (grade >= 90 && grade <= 100) {
                countA++;
            } else if (grade >= 80 && grade < 90) {
                countB++;
            } else if (grade >= 70 && grade < 80) {
                countC++;
            } else if (grade >= 60 && grade < 70) {
                countD++;
            } else if (grade >= 0 && grade < 60) {
                countF++;
            } else {
                System.out.println("Invalid grade! Please enter a number between 0 and 100.");
                // Skip incrementing the counter for invalid input
                continue;
            }

            count++; // Increment the count for valid input
        }

        // Print the results
        System.out.println("\nGrade Distribution:");
        System.out.println("A (90-100): " + countA);
        System.out.println("B (80-89): " + countB);
        System.out.println("C (70-79): " + countC);
        System.out.println("D (60-69): " + countD);
        System.out.println("F (0-59): " + countF);

        scanner.close();
    }
}
