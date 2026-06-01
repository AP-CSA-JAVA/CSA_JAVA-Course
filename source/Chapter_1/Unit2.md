# Unit 2 - Selection and Iteration
*AP Exam Weighting: 25–35% | Suggested Pacing: ~29–31 Class Periods*

---

## 2.1 Algorithms with Selection and Repetition

**Goals**
- Understand how algorithms can use selection (if/else) and repetition (loops) to solve problems.
- Trace through algorithms to predict their output.

An **algorithm** is a step-by-step set of instructions to solve a problem. In Java, algorithms use:
- **Selection**: Choosing different paths based on conditions (`if`, `if/else`, `switch`)
- **Repetition**: Repeating steps until a condition is met (`while`, `for`, `do-while`)

---

## 2.2 Boolean Expressions

**Goals**
-   Understand Boolean expressions.
-   Use relational operators to compute the value of a Boolean expression.
	-  I will be able to write a program that utilizes a Boolean expression

George Boole formulated the basic rules of Boolean algebra back in 1847. Below are the relational operators that you will need to know for the AP exam.

| Relational Operator | Description | Boolean Value |
| :-----------------: | ----------- | ------------- |
| a < b | a less than b | Equates to 'true' if a is less than b,'false' otherwise |
| a <= b | a less than or equal to b | Equates to 'true' if a is less than or equal to b, 'false' otherwise. |
| a > b | a greater than b | Equates to 'true' if a is greater than b, 'false' otherwise. |
| a >= b | a greater than or equal to b | Equates to 'true' if a is greater than or equal to b, 'false' otherwise. |
| a == b | a equals b\* | Equates to 'true' if a has the same value as b. |
| a != b | a does not equal b | Equates to 'true' if a does not have the same value as b, 'false' otherwise. |

**Logical Operators**

Logical operators are used to combine Boolean expressions:

    AND Operator ( && ) – if( a && b ) [if true execute else don't]
    OR Operator ( || ) – if( a || b) [if one of them is true execute else don't]
    NOT Operator ( ! ) – !(a<b) [returns false if a is smaller than b]

**Short-Circuit Evaluation:** When using `&&`, if the first expression is `false`, the second is never evaluated. When using `||`, if the first expression is `true`, the second is never evaluated.

| A | !A |
| ------ | ------ |
| false | true |
| true | false |

### Activity 2.2.1
Fill in the truth table for `a && (b || c)`:

| a | b | c | b \|\| c | a && (b \|\| c) |
| -----  |  ----- | -----  | ------ | ------ |
| T | T | T |  |  |
| T | T | F |  |  |
| T | F | T |  |  |
| T | F | F |  |  |
| F | T | T |  |  |
| F | T | F |  |  |
| F | F | T |  |  |
| F | F | F |  |  |

<details><summary>Solution</summary>

| a | b | c | b \|\| c | a && (b \|\| c) |
| -----  |  ----- | -----  | ------ | ------ |
| T | T | T | T | T |
| T | T | F | T | T |
| T | F | T | T | T |
| T | F | F | F | F |
| F | T | T | T | F |
| F | T | F | T | F |
| F | F | T | T | F |
| F | F | F | F | F |

</details>

### Activity 2.2.2 - Boolean Expression

### Activity 2.2.3 - Comparing Objects with .equals()

**IMPORTANT: Object Equality**

`==` compares object references (memory locations). To compare the values of two objects, use `.equals()`:

```java
String s1 = new String("HELLO");
String s2 = new String("HELLO");

System.out.println(s1 == s2);      // false – different memory locations
System.out.println(s1.equals(s2)); // true  – same content
```

---

## 2.3 if Statements

**Goals**
- Write `if` statements to control the flow of a program.
- I will be able to write a program that uses if/else statements.

```java
if (condition) {
    // code executed when condition is true
}
```

### Activity 2.3.1 - guessChecker Pt 1
### Activity 2.3.2 - Sevens Game

---

## 2.4 Nested if Statements

**Goals**
- Write nested `if/else if/else` statements for multi-branch logic.

```java
if (score >= 90) {
    grade = "A";
} else if (score >= 80) {
    grade = "B";
} else if (score >= 70) {
    grade = "C";
} else {
    grade = "F";
}
```

### Activity 2.4.1 - guessChecker Pt 2
### Activity 2.4.2 - Activity Director
### Activity 2.4.3 - Smallest Divisible Number

---

## 2.4.1 Switch Statements — *Oracle Foundations 1Z0-811*

> **Oracle Exam Note:** `switch` statements and the ternary operator are tested on the Oracle Java Foundations exam (1Z0-811).

A `switch` statement is an alternative to long `if/else if` chains when testing a single variable against multiple constant values.

```java
int day = 3;
switch (day) {
    case 1:
        System.out.println("Monday");
        break;
    case 2:
        System.out.println("Tuesday");
        break;
    case 3:
        System.out.println("Wednesday");
        break;
    default:
        System.out.println("Other day");
}
```

**Important rules:**
- Each `case` ends with `break` to prevent **fall-through** (executing subsequent cases).
- `default` is optional and runs if no case matches — similar to a final `else`.
- `switch` works with `int`, `char`, `String`, and enum types.

**Fall-Through Example:**
```java
int month = 4;
switch (month) {
    case 4:
    case 6:
    case 9:
    case 11:
        System.out.println("30 days");
        break;
    case 2:
        System.out.println("28 or 29 days");
        break;
    default:
        System.out.println("31 days");
}
```

### Ternary Operator — *Oracle Foundations 1Z0-811*

The **ternary operator** `? :` is a compact one-line `if/else`:

```java
// Syntax: condition ? valueIfTrue : valueIfFalse
int age = 17;
String status = (age >= 18) ? "adult" : "minor";
System.out.println(status);  // minor

int a = 10, b = 20;
int max = (a > b) ? a : b;   // max = 20
```

Use the ternary operator for simple conditional assignments; prefer `if/else` for more complex logic.

### Activity 2.4.1.1 - Text-Based Calculator with Mode Selection

Write a Java program that:
1. Asks the user to choose a mode: `basic`, `scientific`, or `stats`
2. Uses a `switch` statement to route to the correct mode
3. Within each mode, uses ternary operators for simple comparisons (e.g., "result is positive/negative")
4. Includes a `default` case for invalid input

---

## 2.5 Compound Boolean Expressions

**Goals**
- Combine multiple conditions using `&&`, `||`, and `!`.

```java
// Compound condition: between 18 and 65
if (age >= 18 && age <= 65) {
    System.out.println("Working age");
}

// Compound condition: invalid input
if (score < 0 || score > 100) {
    System.out.println("Invalid score");
}
```

### Activity 2.5.1
### Activity 2.5.2
### Activity 2.5.3 - guessChecker Pt 3

---

## 2.6 Comparing Boolean Expressions

**Goals**
- Understand equivalent Boolean expressions.
- Apply De Morgan's Laws.

**De Morgan's Laws:**
```java
!(a && b)  ==  (!a || !b)    // NOT (A AND B) equals (NOT A) OR (NOT B)
!(a || b)  ==  (!a && !b)    // NOT (A OR B) equals (NOT A) AND (NOT B)
```

### Activity 2.6.1
### Activity 2.6.2

---

## 2.7 while Loops

**Goals**
- Write `while` loops to repeat code while a condition is true.
- I will be able to write a program that uses while loops.

```java
int i = 1;
while (i <= 5) {
    System.out.println(i);
    i++;
}
// Prints 1 through 5
```

**Important:** Make sure the loop condition eventually becomes `false`; otherwise you create an infinite loop.

### Activity 2.7.1
### Activity 2.7.2

---

## 2.7a do-while Loops — *Oracle Foundations 1Z0-811*

> **Oracle Exam Note:** `do-while` loops are tested on the Oracle Java Foundations exam (1Z0-811) but are **not** assessed on the AP CSA exam.

A `do-while` loop executes the code block **at least once** before checking the condition — the opposite of a `while` loop.

```java
//Do While Example
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner posNum = new Scanner(System.in);
        int number;

        do {
            System.out.print("Enter a positive number: ");
            number = posNum.nextInt();
            if (number <= 0) {
                System.out.println("Please enter a positive number.");
            }
        } while (number <= 0);  // checks AFTER the block executes

        System.out.println("You entered a positive number: " + number);
    }
}
```

**When to use `do-while`:** Use it when you need to guarantee the loop body runs at least once, such as menu-driven programs or input validation.

### Activity 2.7a.1 - Guessing Game
Write a java program that asks the user to pick a number between 1 - 100. Use a `do-while` loop to compare a randomly generated number with the user's guess. Tell the user how close they are if incorrect. End with a congratulatory message when correct. Include the Java Time API and test cases.

### Activity 2.7a.2 - Convert program
### Activity 2.7a.3 - Age/Name
### Activity 2.7a.4 - `char` — Oracle

### Break and Continue Keywords — *Oracle Foundations 1Z0-811*

`break` immediately exits a loop. `continue` skips the rest of the current iteration and moves to the next.

```java
// break example: stop at first even number
for (int i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
        System.out.println("First even: " + i);
        break;
    }
}

// continue example: skip odd numbers
for (int i = 1; i <= 10; i++) {
    if (i % 2 != 0) continue;
    System.out.println(i);  // prints 2 4 6 8 10
}
```

### Activity 2.7a.5 - Break & Continue

---

## 2.8 for Loops

**Goals**
- Write `for` loops for counter-controlled repetition.

```java
// Standard for loop
for (int i = 0; i < 5; i++) {
    System.out.println(i);   // 0, 1, 2, 3, 4
}
```

### <mark>IMPORTANT: off-by-one error</mark>
The most common loop mistake is iterating one too many or too few times:
```java
// WRONG: runs 6 times (0-5) when you want 5 iterations (0-4)
for (int i = 0; i <= 5; i++) { ... }

// CORRECT: runs 5 times (0-4)
for (int i = 0; i < 5; i++) { ... }
```

### Activity 2.8.1
### Activity 2.8.2 - Factorial X
### Activity 2.8.3

---

## 2.9 Implementing Selection and Iteration Algorithms

**Goals**
- Combine `if/else` and loops to implement common algorithms.

### Project Mad Libs

Apply all you've learned about conditionals and loops to create an interactive Mad Libs program.

---

## 2.10 Implementing String Algorithms

**Goals**
- Use String methods combined with loops to process text.

```java
// Count vowels in a string
String word = "programming";
int vowelCount = 0;
for (int i = 0; i < word.length(); i++) {
    char c = word.charAt(i);
    if ("aeiouAEIOU".indexOf(c) >= 0) {
        vowelCount++;
    }
}
System.out.println("Vowels: " + vowelCount);
```

### Activity 2.10.1 - EveryOther, vowels, dbpq
### Activity 2.10.2 - wordCount/vowelCount/Hexadecimal

---

## 2.11 Nested Iteration

**Goals**
- Write nested loops (a loop inside another loop).
- Determine how many times nested loops execute.

```java
// Nested loop: print multiplication table
for (int i = 1; i <= 3; i++) {
    for (int j = 1; j <= 3; j++) {
        System.out.printf("%4d", i * j);
    }
    System.out.println();
}
```

### Activity 2.11.1 - Java Patterns

---

## 2.12 Informal Run-Time Analysis

**Goal**
- Determine the number of times a code segment will execute.

**What is Informal Code Analysis?**

Informal code analysis involves reviewing and reasoning about code without executing it — also known as **code tracing**. Successful code tracing requires you to pay attention to the logic, notating how many times code executes, all variable values, and what output is produced.

**Key Concepts:**
1. **Tracing Code**: Follow the flow of logic and variable values.
2. **Identifying Errors**: Spot compile-time errors (syntax) and runtime errors (`NullPointerException`, array bounds violations).
3. **Understanding Behavior**: Predict what a program will output for given inputs.
4. **Checking for Logic Errors**: Find faults in logic that produce incorrect results.

**Hand-Tracing Tools:**

[https://pythontutor.com/render.html#mode=display](https://pythontutor.com/render.html#mode=display)

[https://cscircles.cemc.uwaterloo.ca/java_visualize/](https://cscircles.cemc.uwaterloo.ca/java_visualize/)

**Summary of Informal Analysis Process:**
1. **Understand the Problem**: Read the prompt carefully.
2. **Simulate Execution**: Walk through the code logically.
3. **Check for Errors**: Syntax, runtime, logic.
4. **Test Edge Cases**: null, empty arrays, extreme values.

---

## Project 2 — Choose Your Own Adventure

**Goals**
-  Apply all you've learned about conditionals to create a "Choose Your Own Adventure" game.
-  Apply the development process to create a project.
-  Each student will create their own project

**Requirements:**
- At least three Boolean expressions that change the path in the program
- At least **three** nested ***if/else-if/else*** clauses
- Print statements depending on current and previous choices

**You Must Include:**
- Digital flowchart (appropriate shapes and lines)
- Digital timeline chart
- Main Block Method comment header

**Deliverables:** Flowchart, timeline, quality screenshots of output, and completed `.java` file submitted as one PDF.

---

## Java Time API — *Oracle Foundations 1Z0-811*

> **Oracle Exam Note:** The `java.time` package (Calendar data) is tested on the Oracle Java Foundations exam (1Z0-811).

Java 8 introduced the **`java.time`** package to fix issues with the older `Date` and `Calendar` classes.

| Concept | Class | Example | Description |
| ------- | ----- | ------- | ----------- |
| Representing a date | `LocalDate` | `LocalDate.of(2024, 8, 26)` | Date (no time zone) |
| Representing a time | `LocalTime` | `LocalTime.now()` | Time (no date) |
| Representing both | `LocalDateTime` | `LocalDateTime.now()` | Date and time combined |
| Formatting | `DateTimeFormatter` | `DateTimeFormatter.ofPattern("MM-dd-yyyy")` | Format into readable string |
| Date differences | `Period` | `Period.between(d1, d2)` | Years, months, days between dates |

```java
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class DateExample {
    public static void main(String[] args) {
        LocalDate today = LocalDate.now();
        System.out.println("Today's date: " + today);

        LocalDate firstDay = LocalDate.of(2024, 8, 26);
        System.out.println("First day of school: " + firstDay);

        // Format a date
        DateTimeFormatter fmt = DateTimeFormatter.ofPattern("MMMM d, yyyy");
        System.out.println(today.format(fmt));

        // Measure elapsed time
        LocalDateTime start = LocalDateTime.now();
        // ... do something ...
        LocalDateTime end = LocalDateTime.now();
        System.out.println("Elapsed: " + start.until(end, java.time.temporal.ChronoUnit.MILLIS) + " ms");
    }
}
```

### Activity — Birthday Countdown
### Activity — Date Formatting Challenge
### Activity — Event Timer
