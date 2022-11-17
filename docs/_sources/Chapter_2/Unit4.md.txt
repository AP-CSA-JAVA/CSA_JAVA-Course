# Unit 4

## While Loops

 **Goals**

- Represent iterative processes using while loops.
- Use Boolean expressions to determine if a loop body is executed and when the iteration should cease.
- Write a program code to satisfy method specifications using expressions, conditional statements, and iterative statements.

In programming, loops are used to repeat a block of code `x` amount of times.  With some loop programs, the Boolean expression is evaluated before each iteration of the loop body. When the expression evaluates to true, the loop body is executed. This continues until the expression evaluates to false, where the loop ends.  

Take a look at the program below:

```java
    public class Main {  
    public static void main(String[] args) {  
        int i=1;  
        while(i<=10){  
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
    int n = 10;

    while(i <= n) {
      System.out.println(i);
      i++;
    }
  }
}
```

```java
int i = 0;
do {
  System.out.println(i);
  i++;
}
while (i < 10);
```

```java
import java.util.Scanner;

public class Main
{
  public static void main(String[] args)
  {
    Scanner sc = new Scanner(System.in);
    System.out.println("Enter your input (q to quit): ");
    String input = sc.nextLine();
    
    while (!input.equals("q"))
    {
      System.out.println("Enter your input (q to quit): ");
      input = sc.nextLine();
    } 
    System.out.println("Goodbye.");
  }
}
```

### Assignment 1 - Grades

- Must use a `while` loop
  - You may not use Arrays for this assignment
- Use a `scanner` class to recieve `x` amount of `int` inputs
- Organize the inputted numbers into a traditional grade structure:
  -  A = 90 - 100
  -  B = 80 - 90
  -  C = 70 - 79
  -  D = 60 - 69
  -  F = 0 - 59
- Use a `Void` Method to `Return` the total number of A's, B's, C's, D's, and F's
- submit your program as a replit
