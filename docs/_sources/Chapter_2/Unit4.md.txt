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
