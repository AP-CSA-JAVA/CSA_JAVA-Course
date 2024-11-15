/* <--- Each Comment separates a different file for this program ---> */
public class RemoveEveryOtherLetter {
    private String input;

    public RemoveEveryOtherLetter(String input) {
        this.input = input;
    }

    public String remove() {
        StringBuilder result = new StringBuilder();
        for (int i = 0; i < input.length(); i++) {
            if (i % 2 == 0) {
                result.append(input.charAt(i));
            }
        }
        return result.toString();
    }
}

/* <--- Each Comment separates a different file for this program ---> */

public class RemoveVowels {
    private String input;

    public RemoveVowels(String input) {
        this.input = input;
    }

    public String remove() {
        return input.replaceAll("[aeiouAEIOU]", "");
    }
}

/* <--- Each Comment separates a different file for this program ---> */

import java.util.Random;

public class ReplaceWithRandomLetters {
    private String input;
    private static final char[] REPLACEABLE = {'d', 'b', 'p', 'q'};

    public ReplaceWithRandomLetters(String input) {
        this.input = input;
    }

    public String replace() {
        Random random = new Random();
        StringBuilder result = new StringBuilder();

        for (char c : input.toCharArray()) {
            if (c == 'd' || c == 'b' || c == 'p' || c == 'q') {
                result.append(REPLACEABLE[random.nextInt(REPLACEABLE.length)]);
            } else {
                result.append(c);
            }
        }
        return result.toString();
    }
}

/* <--- Each Comment separates a different file for this program ---> */

// Main class
public class Main {
    public static void main(String[] args) {
        // Remove every other letter
        String string1 = "Hello World";
        RemoveEveryOtherLetter everyOtherLetter = new RemoveEveryOtherLetter(string1);
        System.out.println("Original String1: " + string1);
        System.out.println("After removing every other letter: " + everyOtherLetter.remove());

        // Remove vowels
        RemoveVowels removeVowels = new RemoveVowels(string1);
        System.out.println("After removing vowels: " + removeVowels.remove());

        // Replace d, b, p, q with random letters
        String string2 = "Do not pay with bad quarters";
        ReplaceWithRandomLetters randomLetters = new ReplaceWithRandomLetters(string2);
        System.out.println("Original String: " + string2);
        System.out.println("After replacing d, b, p, q: " + randomLetters.replace());
    }
}
