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

## 10.2 Recursive Searching and Sorting
