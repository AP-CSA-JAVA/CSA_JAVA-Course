# Unit 4

## 4.1 While Loops

 **Goals**

- Represent iterative processes using while loops.
- Use Boolean expressions to determine if a loop body is executed and when the iteration should cease.
- Write a program code to satisfy method specifications using expressions, conditional statements, and iterative statements.

In programming, loops are used to repeat a block of code `x` amount of times.  With some loop programs, the expression is evaluated *(Is the condition true or not?)* before each iteration of the loop body. When the expression evaluates to `true`, the loop body is executed. This continues until the expression evaluates to false, where the loop ends.  

**Note:** While Java is flexible with spacing around conditional expressions, between keywords, before and after operators, it is not however flexible with *spacing around the dot operator*. The following statements are not equivalent.

```java
str.substring(i, i+1);
str. substring(i, i+1);  // syntax error
str .substring(i, i+1);  // syntax error
```

One more thing, An **infinite loop** is an instruction sequence that loops endlessly when a terminating condition isn't met. An infinite loop might be a programming error, but may also be intentional.

Within Unit 4, we will explore different keyword loop terms and how they are utilized.

![while_loop](https://github.com/AP-CSA-JAVA/CSA_JAVA-Course/assets/12989939/55ea0a3f-349e-4d05-aa8d-eefa58d0dd4c)

Take a look at the program below:

```java
    public class Main {  
    public static void main(String[] args) {  
        int i=1;  
        while(i<=10){  // use of a Boolean to create a loop
            System.out.println(i);  
        i++;  
        }  
    }  
    }
```

Another example using the `while` loop.

```java
public class Main {
  public static void main(String[] args) {

    int i = 1;
    int n = 10;   // use of a second variable to create a loop

    while(i <= n) {
      System.out.println(i);
      i++;
    }
  }
}
```

Using `.equals` within a `while` loop.
```java
import java.util.Scanner;

public class Main
{
  public static void main(String[] args)
  {
    Scanner sc = new Scanner(System.in);
    System.out.println("Enter your input (q to quit): ");
    String input = sc.nextLine();
    
    while (!input.equals("q")) // use of a while loop using .equals
    {
      System.out.println("Enter your input (q to quit): ");
      input = sc.nextLine();
    } 
    System.out.println("Goodbye.");
  }
}
```

<details><summary>Click Here</summary>

```java
import java.util.*;

public class Main{
	public static void main(String[] args)
	{
		int i=0;
		int n;
			
		Scanner sc=new Scanner(System.in);
		System.out.print("Enter the number of elements you want to store: ");
		
		n=sc.nextInt();  // storing the number of elements that you want to store.
		
		int[] array = new int[n];  // defining the number of inputs for the array
			
		System.out.println("Enter the elements of the array: ");
		while (i<n){
			//reading array elements from the user
			array[i]=sc.nextInt();
			i++;
		}
		System.out.println("Contents of the array are: " + Arrays.toString(array));
		// printing the stored elements within the array.
	}  
}
```

</details>


	
### Activity 4.1.1

- Must use a `while` loop
  - You may use Arrays for this assignment
  - I will offer you extra credit if you complete this assignment without using an Array.
- Use a `scanner` class to recieve `x` amount of `int` inputs
- Organize the inputted numbers into a traditional grade structure:
  -  A = 90 - 100
  -  B = 80 - 90
  -  C = 70 - 79
  -  D = 60 - 69
  -  F = 0 - 59
- `Return` the total number of A's, B's, C's, D's, and F's
- submit your program as a replit

	
### Activity 4.1.2

```java
1. Is a Factor?
Write an algorithm that determines whether divisor is a factor of number. 
Do not use the modulo or division operators. 
Sample Ouput:

Enter the number:
 104
Enter the divisor:
 13
13 is a factor of 104

 

Enter the number:
 52
Enter the divisor:
 3
3 is not a factor of 52


2.  Extract Digits
Using a while loop, create an algorithm extractDigits that prints the 
individual digits of a positive integer.
For instance, extractDigits(54321); would create the output:

1
2
3
4
5

Hint: The % and the / operators are going to be very useful in this program. 
How can you use these to extract the last digit of the given number?

3. SumAverage
Write an algorithm that will ask the user for a number until they enter 'q'. 
Then calculate the sum and everage of those numbers.

Sample Output:

Enter a number, or the letter 'q' to end the sequence: 
 25
Enter a number, or the letter 'q' to end the sequence: 
 78
Enter a number, or the letter 'q' to end the sequence: 
 16
Enter a number, or the letter 'q' to end the sequence: 
 14
Enter a number, or the letter 'q' to end the sequence: 
 q
The sum is: 133
The average is: 33.25
```
	
Submit your replit link to Canvas.

## 4.1.1 Do While Loops

The `do-while` loop will not be assessed for the AP CSA exam, it can be a useful tool when writing programs.

A `do-while` loop in Java is a type of loop where the code block is executed at least once before checking the loop condition. 
This is in contrast to a `while` loop, which checks the condition before entering the loop. Here's a Java program that 
demonstrates and explains a `do-while` loop:

```java
//Do While Example
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner posNum = new Scanner(System.in);
        int number;
        
        // Prompt the user to enter a positive number
        do { //keyword do
            System.out.print("Enter a positive number: ");
            number = posNum.nextInt();
            
            // Check if the number is positive
            if (number <= 0) {
                System.out.println("Please enter a positive number.");
            }
        } while (number <= 0); // Loop continues as long as the number is not positive

        // Now, we have a positive number
        System.out.println("You entered a positive number: " + number);
    }
}
```

Inside the "do" block, we use a do-while loop to repeatedly prompt the user for input until they enter a positive number. The loop will always execute at least once because the condition is checked at the end of the loop.  Within the loop,  a message asks the user to enter a positive number and read their input using the scanner class. The program then checks if the entered number is less than or equal to 0. If it is, a message asks the user to enter a positive number again.  The loop will continue to execute as long as the condition (number <= 0) is true.  Once the user enters a positive number, the loop ends, and a message is printed indicating that they entered a positive number.
    
This program demonstrates a simple "do-while" loop to ensure that the user provides valid input before proceeding with the program.

### Activity 4.1.1.1

**Directions:** Convert Program A and Program B from a `for` loop to a `do-while` loop. 

```java
//Program A
import java.util.Scanner;

public class Main
{
  public static void main(String[] args)
  {
    Scanner sc = new Scanner(System.in);
    System.out.println("Enter a String with at least 3 characters: ");

    String input = sc.nextLine();
    
    String pattern = "aaa";
    int howMany = 0;
    
    for (int i = 0; i < input.length() - pattern.length() + 1; i++)
    {
      String currSeq = input.substring(i, i + pattern.length());
      if (currSeq.equals(pattern))
        howMany++;
    }

    System.out.println("There were " + howMany + 
      " substrings matching " + pattern);

  }
}
```

```java
// Program B
import java.util.Scanner;

public class Main
{
  public static void main(String[] args)
  {
    Scanner sc = new Scanner(System.in);
    System.out.println("Enter a String: ");
    String input = sc.nextLine();
    String output = "";
    
    for (int i = input.length(); i > 0; i--)
      output += input.substring(i - 1, i);
    
    System.out.println(output);
  }
}
```

### Activity 4.1.1.2

**Directions:** Write a program using a `do-while` loop that does the following:
- Write a do-while loop that asks a user for their name, which must be at least four characters long.
- Write another do-while that asks for the user’s age, which must be between 18 and 65, inclusive. Recall the nextIntmethod Scanner class.

Submit your program link

**Sample Output**
```java
What is your first name?
Jon
Your name needs to be at least 4 characters long.
What is your first name?
Jonathan

What is your current age?
50

Jonathan is 50 years old.
```

### Break and Continue Keywords in Java

Break and Continue keywords in Java
The `Break` statement in Java is used most often in one of the two cases below.
- Break quits the loop and jumps out of it (both for and while).
- Break statement exits a case in the switch statement.


Example 1
```java
public class Main {

	public static void main(String[] args) {

		// Testing break statement in while loop
		System.out.println("Test Break statement in While loop");
		int i = 0;
		while (i < 5) {
			if (i == 2) {
				break;
			}
			System.out.println(i++);
		}
	}
}
```

Sample Output
```java
Test Break statement in While loop
0
1
```


The `continue` statement in Java is most often used in one of the two cases below.
- It skips the following statements and moves to the next iteration in the for loop.
- Continue in while loops hop the following statements and jump to the conditional statement.

Example 2

```java
public class Main {

	public static void main(String[] args) {

		// Testing continue statement in while loop
		System.out.println("Test Continue in While loop");
		int i = 0;
		while (i < 5) {
			if (i == 2) {
				i++;
				continue;
			}
			System.out.println(i++);
		}
	}
}
```

**Sample Output**
```java
Test Continue in While loop
0
1
3
4
```

**Differences between continue and break**
The considerable difference between break and continue is that the break exits a loop at once. Once a break statement is executed, the loop will not run again. However, after executing the continue statement, the following lines of code will be skipped for the current iteration only. The loop will begin to execute again. 

**Break and Continue in While Loop**
Both `Break` and `Continue` can be used in a `while` loop.

Example 1

```java
public class Main {

	public static void main(String[] args) {

		// Testing both break and continue statements side by side
		String [] weekdays = { "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" };

		System.out.println("Test Break statement in While loop");
		System.out.println("\nWorking Days:\n");

		int i = 0;
		while (i < weekdays.length ) {
		if (weekdays[i].equals("Saturday") ||  weekdays[i].equals("Sunday")) {

				i++;
				break;
				// Not any working day will be printed
				// because the loop breaks on Sunday
				// once the loop breaks it moves out of the loop
			}
			System.out.println(weekdays[i++]);
		}

		System.out.println("\nTest Continue statement in While loop");
		System.out.println("\nWorking Days:\n");

		int j = 0;
		while (j < weekdays.length ) {
		if (weekdays[i].equals("Saturday") ||  weekdays[i].equals("Sunday")) {

				j++;
				continue;
				// All the working/business days will be printed
				// when the loop encounters Saturday or Sunday
				// it skips that iteration and continues to the next iteration
			}
			System.out.println(weekdays[i++]);
		}

		// A test case for continue statement using for loop
		System.out.println("\nTest Continue in For loop");
		for (int x = 0; x < 5; x++) {
			if (x == 2)
				continue;
			System.out.println(x);
		}
	}
}
```

**Sample Output**
```java
Test Break statement in While loop

Working Days:


Test Continue statement in While loop

Working Days:

Monday
Tuesday
Wednesday
Thursday
Friday

Test Continue in For loop
0
1
3
4
```

The `break` and `continue` keywords can be a valuable tool when writing Java programs.

### Activity Break and Continue

**Directions** Modify the `selection sort` program below by using the break and continue keywords.
- Use a `break` statement to stop the selection sort when it encounters a negative value.
- Show a message that the sort was aborted.
- Use a `continue` statement to continue the sort when the next value is a positive value.

```java
import java.util.ArrayList;

public class Main
{
  public static void main(String[] args)
  {
    ArrayList<Integer> ratings = new ArrayList<Integer>();
    ratings.add(5);
    ratings.add(4);
    ratings.add(8);
    ratings.add(9);
    ratings.add(2);
    ratings.add(-3);
    ratings.add(1);
    ratings.add(4);
    
    // Iterate through all the values in the list.
    for (int i = 0; i < ratings.size() - 1; i++)
    {
      // Keep track of the index of the smallest number.
      int minIndex = i;
      // Iterate from the next index up to the end of the array
      for (int j = i + 1; j < ratings.size(); j++)
      {
        // If the current element is smaller than the minimum, we have a new 
        // smallest element, so set minIndex to the index of the current element.
        if(ratings.get(j) < ratings.get(minIndex))
        {
          minIndex = j;
        }
      }
      // Swap current with minimum element if they're different
      if(ratings.get(i) != ratings.get(minIndex))
      {
      // Swap current with minimum element
      int temp = ratings.get(i);
      ratings.set(i, ratings.get(minIndex));
      ratings.set(minIndex, temp);
      }
    }
    // Print all the elements of the list
    System.out.println(ratings);
  }
}
```


## 4.2 For Loops
	
**Goals**
  - Write for loops.
	

`For` and `while` loops are, for the most part, interchangable.  From my personal experience, I prefer `for` loops because it is easier to read  within your program.  The main difference between `for` and `while` loops is that a `for` loop is *finite*.  If you look at the modifier of a `for` loop, you will know how many loops will be executed.  With a `while` loop, it can be *infinite*.  Another difference between the two loops is that initialization variable of a `for` loop cannot be changed; whereas, a while loop's initialization variable is outside of the `while` loop.  There are four components that are used to create the syntax of a `for` loop:
  - Keyword
  - initialization 
  - Boolean expression
  - modifier
	
Take a look at the program below.

```java
public class Main {
  public static void main(String[] args) {
    for (int i = 0; i <= 10; i++) {
      System.out.println(i);
    }  
  }
}
// The syntax of a for loop:
// keyword (intialization; boolean expression; modifier){ /*Body of the loop*/ }
// for     (int i = 0;     i <=10;             i++     ){ System.out.println(i);}
```

Notice the initialization variable location.  It is located outside of the while loop.   Observe the program below.	

```java
int i = 0;
while (i < 11)
{
  System.out.println(i);

  i++;
}
``` 

-----------------------------------------------------------------------------------------------------

Now, observe an equivalent for loop.
	      
	      
```java
for (int i = 0; i < 11; i++)
{
  System.out.println(i);
}
```
The scope of the intialization variable, i, is within the `for` loop; any attempt to access it outside of the `for` loop results in an error.
	
**Expected Error**: When you remove the last space in str, the value Blue will fail to print. This is an example of an `off-by-one error`. Without the space at the end, the last call to indexOf cannot find the last word in str.  `Off-by-one errors` occur when the iteration loops one time too many or one time too few.
	
### Activity 4.2.1
Task 1: Using a `for` loop, write a program where you ask the user for a `number` and print out the `number` of perfect squares up until that `number`.

```java
Enter the number of squares:
 10
1 squared = 1
2 squared = 4
3 squared = 9
4 squared = 16
5 squared = 25
6 squared = 36
7 squared = 49
8 squared = 64
9 squared = 81
10 squared = 100
```

Task 2: Repeatly ask the for a `number`. When the user is *done*, report back the `number` of odd `numbers`. Decide whether to use a `while` loop or a `for` loop.

```java
Enter a number (type 'done' when complete): 
 4 

Enter a number (type 'done' when complete): 
 9 

Enter a number (type 'done' when complete): 
 12 

Enter a number (type 'done' when complete): 
 11 

Enter a number (type 'done' when complete): 
 15 

Enter a number (type 'done' when complete): 
 3 

Enter a number (type 'done' when complete): 
 done 

You had 4 odd numbers.
```
	
### Activity 4.2.2

Factorial
Implement a program which calculates the factorial of a number given by the user. The factorial of a number is found by multiplying itself by all positive integers less than it (excluding 0). 

```java
For example, 4 factorial, written as 4!, can be computed as follows:
4! == 4 * 3 * 2 * 1 == 24 Additionally, it has been specified that the factorial of 0 is 1, so 0! = 1.
```
	
Multiplication Table
Implement a program which will display a multiplication table. Ask the user for a number and how many mutiples to display. 

Example Output:

```java
Enter an integer:
 4 

Enter the number of mulltiples:
 10

4 * 1 = 4
4 * 2 = 8
4 * 3 = 12
4 * 4 = 16
4 * 5 = 20
4 * 6 = 24
4 * 7 = 28
4 * 8 = 32
4 * 9 = 36
4 * 10 = 40
	
```

### Activity 4.2.3
Given the array below, loop through the array and print out all odd numbers on a separate line.  Order is not important!  **Do not print** any numbers that come after 894 in the sequence.  **Hint:** One wayyou will need to use .length

```java
public class Main {
    public static void main(String[] args) {
        int[] numbers = {
            951, 402, 984, 651, 360, 169, 408, 319, 601, 485, 980, 507, 725, 547, 544, 941,
            615, 83, 165, 141, 501, 263, 617, 865, 575, 219, 390, 984, 592, 236, 105, 942,  
            386, 462, 47, 418, 907, 344, 236, 375, 823, 566, 597, 978, 328, 615, 953, 345, 
            399, 162, 758, 219, 918, 237, 412, 566, 826, 248, 866, 950, 626, 949, 687, 217, 
            815, 67, 104, 58, 512, 24, 892, 894, 767, 553, 81, 379, 843, 831, 445, 742, 717, 
            958, 609, 842, 451, 688, 753, 854, 685, 93, 857, 440, 380, 126, 721, 328, 753, 470, 
            743, 527};
	
	/* your code goes here */
	
	}
}

```
	
Example output for even numbers:
```java

402
984
360
408
980
544
390
984
592
236

```
	

## 4.3 Developing Algorithms Using Strings

**Goals**
  - Manipulate Strings using loops
	
In this activity, you will observe, modify, and implement some standard String algorithms using *traversals*.
	
```java
import java.util.Scanner;

public class Main
{
  public static void main(String[] args)
  {
    Scanner sc = new Scanner(System.in);
    System.out.println("Enter a String: ");

    String input = sc.nextLine();
    
    String pattern = "aaa";
    int howMany = 0;
    
    for (int i = 0; i < input.length() - pattern.length() + 1; i++)
    {
      String currSeq = input.substring(i, i + pattern.length());
      if (currSeq.equals(pattern))
      {
        howMany++;
      }
    }

    System.out.println("There were " + howMany + 
      " substrings matching " + pattern);

  }
}
```
Predict what is going to happen when you type `aaaaa`.

---------------------------------------------------------------------------------------------------
 
Look at the program below.  What do you think is going to happen when you type a `string`?

```java
import java.util.Scanner;

public class Main
{
  public static void main(String[] args)
  {
    Scanner sc = new Scanner(System.in);
    System.out.println("Enter a String: ");
    String input = sc.nextLine();
    
    String output = "";
    
    for (int i = input.length(); i > 0; i--)
    {
      output += input.substring(i - 1, i);
    }
    
    System.out.println(output);
  }
}
```
	
There are standard algorithms that utilize String traversals to:

  - Find if one or more substring has a particular property.
  - Determine the number of substrings that meet specific criteria.
  - Create a new String with the characters reversed.

### Activity 4.3.1

You will write 3 programs that will do the following:
  - Write a program that will remove every other letter within a string.
  - Write a second program that will remove vowels from a String.
  - Write a third program that will replace every instance of d,b,p and q with a random d,b, p or q.


### Activity 4.3.2

1. wordCount and vowelCount
Write an algorithm that will ask the user for a phrase and return the number of words and vowels. HINT: the number of words is the number of spaces + 1.

Sample Output:
```java
Enter a phrase:
This phrase has eight words and twelve vowels.
Words: 8
Vowels: 12
```


2. Hexidecimal
The hexadecimal (hex) number system uses 16 symbols, 0-9 and A-F (or a-f). Write a program to verify a hex string. The program shall prompt user for a hex string; and decide if the input string is a valid hex string.

Sample Output:
	
```java
Enter a hex string: 

 123aBc
"123aBc" is a hex string

Enter a hex string: 

 123aBcx
"123aBcx" is NOT a hex string
```
	


## 4.4 Nested Iteration
	
**Goals**
  - Represent nested iterative processes.
  - Determine code that would be used to complete code segments.
	
A nested iteration occurs when we have a loop inside of another loop, similar to nested conditional statements back in Unit 3. Here is the general structure:
```
//nested iteration with three loops
loopOne {
	do something
  loopTwo {
	do something
    loopThree {
	do something
	}
  }
}
/* The outer loop is a for loop that increments whenever a prime number is 
found until we get to n prime numbers. The middle loop is a while loop that 
increments the number being checked until it becomes a prime number.  Finally,
the inner loop is a for loop that checks all possible divisors to see if the
number is a prime number or not. */
```
When a loop is nested inside another loop, all of the iterations of the inner loop must be completed until the next iteration of the outer loop starts. If there is a break statement inside the inner loop, then it only takes effect in the current iteration of the outer loop. When the next iteration of the outer loop starts, the inner loop starts all over again.
If there are two nested for loops without break statements, and the outer loop runs x times, and the inner loop runs y times for every iteration of the outer loop, then the inner loop will run x*y times. This can be extended to situations where there are more than 2 nested loops. The total number of times the innermost loop is run is the product of the number of times that each loop runs per iteration.

In the while loop, we assume that the number is prime, but once the number is found to be not prime in the for loop, the for loop breaks and the boolean notPrime is set to true. If the number is actually not prime, notPrime remains false and the while loop exits.

**Example: Printing a Triangle using asterisks**
```java
public static void main(String[] args) {
  int n = 5;
  for (int outer = 0; outer < n; outer++) {
      for (int inner = outer; inner < n; inner++) {
         System.out.print("*");
      }
 
      System.out.println();
  }
```
	
**Sample Output:**
```
*****
****
***
**
*
```

**Explanation of Code**
	
This is a nested iteration with two loops. In the first loop, we go from 0 to n in order to have n rows in the output. In the second loop, we start from the row number and print n-row number of stars for the row.
Once we exit the second loop, we print an empty line, i is incremented by one, and we enter the second loop to print the stars for the next line.

**Example: Printing a Number Triangle**

```java
public static void main(String [] args) {
  int n = 5;
  for (int i = 0; i < n; i++) {
      for (int j = i; j < n; j++) {
         System.out.print(i+j);
      }
 
      System.out.println();
  }
```
	
**Sample Output:**
```
01234
2345
456
67
8
```

**Explanation of Code**
	
This is essentially the same code as earlier, except now we print out the sum of the row and column indices. This will allow us to demonstrate the use of break and continue in the next two examples.
	
**Example: Break in Nested Loops**

```java
public static void main(String [] args) {
  int n = 5;
  for (int outer = 0; outer < n; outer++) {
      for (int inner = outer; inner < n; inner++) {
          if (outer == 3 && inner == 3) {
             break;
          }
         System.out.print(outer+inner);
      }
 
      System.out.println();
  }
```

**Sample Output:**
```
01234
2345
456
8
```
**Explanation of Code**
	
Notice that this time, because we told the program to break when it reaches the fourth row (when i = 3, since Java uses zero-based indexing) and tries to print the first number on that row (since j is always set to the row index when we start a new row), it completely breaks out of the second loop so nothing is printed in the fourth row.
Once the program breaks out of the second loop, the first loop iterates by one and the program prints the fifth row the same way it did in the example above.
	
**Example: Continue in Nested Loops**
	
```java
public static void main(String [] args) {
  int n = 5;
  for (int outer = 0; outer < n; outer++) {
      for (int inner = outer; inner < n; inner++) {
          if (outer == 3 && inner == 3) {
             continue;
          }
         System.out.print(outer+inner);
      }
 
      System.out.println();
  }
```
**Sample Output:**
```
01234
2345
456
7
8
```
	
**Explanation of Code**
	
This time, instead of using a break, we used a continue. This means that we didn't completely break out of the second loop. We just skipped the iteration that happens when j is 3. (It doesn't print 6.) The second loop continues, iterating j to 4 and printing the 7. Then j is incremented again to be 5, but since that is not less than n (which is also 5), we exit the second loop normally.
Once we exit the second loop, we move on to the fifth row, which is printed normally.
Pay careful attention to the Break in Nested Loops example and the Continue in Nested Loops example, since they illustrate the important difference between break and continue. Break completely exits the loop it is called in; continue just skips the current iteration of the loop it is called in.

## 4.5 Informal Code Analysis
	
**Goal**
  - Determine the number of times a code segment will execute.
	
**What is Informal Code Analysis?**
	
Informal code analysis is a process where you will manually check your program line by line. You may also know this as code tracing. Successful code tracing requires you to go through the code line by line, notating of how many times the code is executed, all variable values, and what is output produced to the console. *This is a very important skill to learn!*
	
**Debugging**
	
Another part of code tracing is debugging. Debugging are syntax or logic errors that prevents your code from executing as intended.  With debugging, you have a panel (located in Tools in replit and Debug Console in VSCode) that displays the program values running in real-time as the program is being executed. When we use the debugging panel, you can even sometimes change the variable values to see what may happen to the code as well. We can also have breakpoints in debugging as well. These breakpoints are points allow you to stop at given sections of  the program. This is useful when you want to see the values at a certain points in the code. After, you go line-by-line through the code you will see how the variables change or see how the variables change after every iteration of a loop.

**Hand-Tracing Tool**
	
[https://pythontutor.com/render.html#mode=display](https://pythontutor.com/render.html#mode=display)
	
[https://cscircles.cemc.uwaterloo.ca/java_visualize/](https://cscircles.cemc.uwaterloo.ca/java_visualize/)
