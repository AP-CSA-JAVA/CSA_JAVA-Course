# Unit 10

## 10.1 Recursion

Recursion is the technique of making a function call itself. This technique provides a way to break complicated problems down into simple problems which are easier to solve.

Recursion can be challenging, but the best way to understand the nuances of it, is to experiment with it.  The basics of a recursive method is the recursive call and the base case.  The recursive call, calls itself.  It can start over with the same parameter or a different one.  After x calls, we reach the base case where the recusion is stopped.

The basic structure will look something like this:

```java
public static void Main()
  // base case
  if (baseCaseCondition) { 
    baseCaseSteps
  } 
  else {
    do something
    // recursive call
    recursiveMethod(); 
  }
}
```

```java
//Recursion Example
public class RecursionExample {
    public static void main(String[] args) {
        int number = 5;
        int factorial = calculateFactorial(number);
        System.out.println("Factorial of " + number + " = " + factorial);
    }

    public static int calculateFactorial(int n) {
        if (n == 0) {
            return 1;
        } else {
            return n * calculateFactorial(n - 1);
        }
    }
}
```

In this example, the calculateFactorial method is a recursive function that calculates the factorial of a given number n. If n is equal to 0, it returns 1 (since the factorial of 0 is defined as 1). Otherwise, it calls itself with the argument n - 1 and multiplies the result by n.
When you run this program, it will output the factorial of the number variable, which is set to 5 in this case. The output will be:

```Factorial of 5 = 120```

This demonstrates how recursion can be used to solve problems by breaking them down into smaller, simpler subproblems.

## 10.2 Recursive Searching and Sorting
