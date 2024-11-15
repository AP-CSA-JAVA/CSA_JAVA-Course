import java.util.Scanner;

public class PhraseAnalyzer {

    // Method to count vowels in a phrase
    public static int vowelCount(String phrase) {
        int count = 0;
        String vowels = "aeiouAEIOU";
        for (char c : phrase.toCharArray()) {
            if (vowels.indexOf(c) != -1) {
                count++;
            }
        }
        return count;
    }

    // Method to count letters (excluding vowels) in a phrase
    public static int letterCount(String phrase) {
        int count = 0;
        String vowels = "aeiouAEIOU";
        for (char c : phrase.toCharArray()) {
            if (Character.isLetter(c) && vowels.indexOf(c) == -1) {
                count++;
            }
        }
        return count;
    }

    // Method to count words in a phrase
    public static int wordCount(String phrase) {
        String[] words = phrase.trim().split("\\s+");
        return words.length;
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Get user input
        System.out.println("Enter a phrase:");
        String phrase = scanner.nextLine();

        // Calculate counts
        int words = wordCount(phrase);
        int vowels = vowelCount(phrase);
        int letters = letterCount(phrase);

        // Print results
        System.out.println("Words: " + words);
        System.out.println("Letters: " + letters);
        System.out.println("Vowels: " + vowels);

        scanner.close();
    }
}
