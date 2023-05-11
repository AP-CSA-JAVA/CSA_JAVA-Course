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
While the do while loop will not be used for the AP CSA exam, it can be a useful tool when writing programs.

```java
int i = 0;
do {
  System.out.println(i);
  i++;
}
while (i < 10);   // use of a do-while loop to essentially do the same as the loops above.
```
Using .equals within a while loop.
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


	
### Assignment 4.1.1 - Grades

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

	
### Assignment 4.1.2 - Arithmetic

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

### Assigntment 4.3.1

You will write 3 programs that will do the following:
  - Write a program that will remove every other letter within a string.
  - Write a second program that will remove vowels from a String.
  - Write a third program that will replace every instance of d,b,p and q with a random d,b, p or q.
	
Submit your replit file to Canvas.
	

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

**Example: Printing a Triangle**
```java
public static void printPyramid(int n) {
  for (int i = 0; i < n; i++) {
      for (int j = i; j < n; j++) {
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

Explanation of Code
This is a nested iteration with two loops. In the first loop, we go from 0 to n in order to have n rows in the output. In the second loop, we start from the row number and print n-row number of stars for the row.
Once we exit the second loop, we print an empty line, i is incremented by one, and we enter the second loop to print the stars for the next line.

**Example: Printing a Number Triangle**

```java
public static void printPyramid(int n) {
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

Explanation of Code
This is essentially the same code as earlier, except now we print out the sum of the row and column indices. This will allow us to demonstrate the use of break and continue in the next two examples.
	
**Example: Break in Nested Loops**

```java
public static void printPyramid(int n) {
  for (int i = 0; i < n; i++) {
      for (int j = i; j < n; j++) {
          if (i == 3 && j == 3) {
             break;
          }
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
8
```
Explanation of Code
Notice that this time, because we told the program to break when it reaches the fourth row (when i = 3, since Java uses zero-based indexing) and tries to print the first number on that row (since j is always set to the row index when we start a new row), it completely breaks out of the second loop so nothing is printed in the fourth row.
Once the program breaks out of the second loop, the first loop iterates by one and the program prints the fifth row the same way it did in the example above.
	
**Example: Continue in Nested Loops**
	
```java
public static void printPyramid(int n) {
  for (int i = 0; i < n; i++) {
      for (int j = i; j < n; j++) {
          if (i == 3 && j == 3) {
             continue;
          }
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
7
8
```
	
Explanation of Code
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
	
https://pythontutor.com/render.html#mode=display
	
https://cscircles.cemc.uwaterloo.ca/java_visualize/
