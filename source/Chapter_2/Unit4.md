# Unit 4

## While Loops

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


	
### Assignment 1 - Grades

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
- Use a `Void` Method to `Return` the total number of A's, B's, C's, D's, and F's
- submit your program as a replit

	
### Assignment 2 - Arithmetic

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


## For Loops
	
**Goals**
  - Write for loops.
	

`For` and `while` loops can do about the same thing.  From my personal experience, I prefer `for` loops because it seems to provide a more solid foundation when using a loop within your program.  The main difference between `for` and `while` loops is that a `for` loop is *finite*.  If you look at the modifier of a `for` loop, you will know how many loops will be executed.  With a `while` loop, it can be *infinite*.  There are four components that make up a `for` loop:
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
// Keyword => for
// initialization => int i = 0;
// Boolean expression => i <= 10;
// modifier => i++
```

A major difference between while and for loops is the scope of the loop variable. Observe a while loop.
```java
int i = 0;
while (i < 11)
{
  System.out.println(i);

  i++;
}
```
	      
-----------------------------------------------------------------------------------------------------

The variable i can be accessed outside of the the while loop. Now, observe an equivalent for loop.
	      
	      
```java
for (int i = 0; i < 11; i++)
{
  System.out.println(i);
}
```
The scope of the loop control variable, i, is within the for loop only; any attempt to access it outside of the for loop results in an error.
	
**Expected Error**: When you remove the last space in str, the value Blue will fail to print. This is an example of an off-by-one error. Without the space at the end, the last call to indexOf cannot find the last word in str.  “Off-by-one” errors occur when the iteration loops one time too many or one time too few.
	
## Developing Algorithms Using Strings

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

### Assigntment 1

You will write 3 programs that will do the following:
  - Write a program that will remove every other letter within a string.
  - Write a second program that will remove vowels from a String.
  - Write a third program that will replace every instance of d,b,p and q with a random d,b, p or q.
