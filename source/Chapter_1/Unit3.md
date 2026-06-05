# Unit 3 - Class Creation
*AP Exam Weighting: 10–18%*

---

## 3.1 Abstraction and Program Design

**Goals**
- Understand the design principles of a class.
- Use a non-programming methodology to design code.
- Create a roadmap for the next activities.

A class is a blueprint for the objects of that class. A class contains variables and methods to store and manipulate information. To create a class, you first state whether you want it to be public or private, use the class keyword, and name the class.

**Design Principles of a Class:**

- <mark>Encapsulation</mark>: Use access modifiers (`private`, `public`, `protected`) to encapsulate attributes, allowing controlled access through getter and setter methods.

- <mark>Abstraction</mark>: The class hides implementation details and exposes only essential features.

- <mark>Modularity</mark>: A class is a modular unit that represents a single entity or concept and can be reused as needed.

- <mark>Single Responsibility Principle (SRP)</mark>: A class should only deal with managing one responsibility.

- <mark>Information Hiding</mark>: Making attributes `private` so external code can only interact through well-defined methods.

---

## 3.2 Impact of Program Design

**Goals**
- Understand the ethical and social implications of computing systems.
- Understand beneficial and/or harmful effects of programs.
- Develop awareness around ethical issues applying to internet service providers.

**Ethical and Social Implications of Computing Systems:**

- <mark>Privacy Concerns</mark>: Computing systems often collect and store vast amounts of personal data, raising concerns about privacy and data security.

- <mark>Bias and Discrimination</mark>: Algorithms and AI systems can inherit biases from training data, leading to discriminatory outcomes.

- <mark>Cybersecurity</mark>: Computing systems' vulnerabilities pose significant risks through cyberattacks and data breaches.

- <mark>Digital Divide</mark>: Unequal access to technology can exacerbate existing social inequalities.

- <mark>Employment Disruption</mark>: Automation and AI can lead to job displacement.

**Developing Awareness Around Ethical Issues for ISPs:**

- <mark>Transparency</mark>: ISPs should be transparent about data collection practices and policies.
- <mark>Net Neutrality</mark>: ISPs should treat all internet traffic equally.
- <mark>Ethical Use of User Data</mark>: Obtain explicit consent before collecting and using personal data.

---

## 3.3 Anatomy of a Class

**Goals**
- Understand the design principles of a class.

```java
// Class definition
public class Student {
    // Instance variables (attributes)
    private String name;
    private int age;
    private String studentId;

    // Constructor
    public Student(String name, int age, String studentId) {
        this.name = name;
        this.age = age;
        this.studentId = studentId;
    }

    // Accessor (getter) method
    public String getName() {
        return name;
    }

    // Mutator (setter) method
    public void setName(String name) {
        this.name = name;
    }

    // Method to display student information
    public void displayInfo() {
        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
        System.out.println("Student ID: " + studentId);
    }

    // Main method to test the Student class
    public static void main(String[] args) {
        Student student1 = new Student("Ted Lasso", 45, "12345");
        System.out.println("Initial Information:");
        student1.displayInfo();

        student1.setName("Roy Kent");
        student1.setAge(35);
        System.out.println("\nUpdated Information:");
        student1.displayInfo();
    }
}
```

---

## 3.4 Constructors

**Goals**
- Understand the concept of class constructors.
- Write your own class constructors.
- Examine call by value and reference with regard to class constructors.
	- I will be able to write a program that utilizes constructors

A **constructor** in Java is a special method that is used to initialize objects. The constructor is called when an object of a class is created. It can be used to set the initial values for object attributes.

Java is a *pass-by-value* language. If we pass a primitive value, we are passing a copy of that value. However, if we are passing a reference type, we are passing a reference to the data location.

**Constructor Overloading:** It is possible to write two or more constructors within a program. The difference between the constructors are the *parameters* defined within each constructor.

The **default constructor** is the constructor with no parameters. If an overloaded constructor is missing a parameter, the value will default to the default constructor.

```java
// Example of Overloading Constructors
class Box {
    double width, height, depth;

    // constructor with no parameters specified
    Box() {
        width = 0;
        height = 0;
        depth = 0;
    }

    // constructor with three parameters specified
    Box(double w, double h, double d) {
        width = w;
        height = h;
        depth = d;
    }
}
```

### toString() Method

The `toString()` method provides a meaningful String representation of an object. It is called automatically when you print an object.

```java
public class Car {
    private String make;
    private String model;
    private int year;

    public Car(String make, String model, int year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    @Override
    public String toString() {
        return "Car: " + make + " " + model + " (" + year + ")";
    }

    public static void main(String[] args) {
        Car car1 = new Car("Toyota", "Camry", 2022);
        System.out.println(car1);  // Calls toString() automatically
        // Output: Car: Toyota Camry (2022)
    }
}
```

### PROJECT - CARD DRAW SEQUENCES

---

#### Scenario

A data scientist is studying sequences of values produced by repeatedly drawing a card from a standard shuffled deck. After each draw, the card is returned and the deck is reshuffled. Each draw produces a value in the range of 1 through 13, inclusive — representing Ace (1) through King (13). The data scientist is particularly interested in **streaks** of values. A streak occurs when two or more consecutive draws produce the same value. For example, in the following sequence of card draws, there are streaks starting at positions 1, 6, 12, and 14.

| Index  | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 |
|--------|---|---|---|---|---|---|---|---|---|---|----|----|----|----|----|----|----|-----|
| Result | 1 | 5 | 5 | 4 | 3 | 1 | 2 | 2 | 2 | 2 |  6 |  1 |  3 |  3 |  5 |  5 |  5 |  5 |

Out of the goodness of your heart, you have decided to write a program to help the data scientist examine these streaks. The thought of shuffling and drawing from a deck thousands of times by hand seems like a poor use of everyone's time.

---

#### Part 1 — The `CardDeck` Class

While thinking about how convenient a class would be to simulate a card deck draw, you have decided to write a class as follows:

> ***For testing purposes, use the identifier names given***

**Class: `CardDeck`**

| Member | Points | Description |
|--------|--------|-------------|
| Instance variable: `currentDraw` | (1 pt) | `/** the value of the most recent card draw (1–13) */` |
| Constructor *(only a default constructor is required)* | (2 pts) | `/** gives an initial value to the current draw */` |
| `drawCard()` | (2 pts) | `/** simulates drawing a card from a reshuffled deck, updates the instance variable, @return the value of the draw */` |

---

#### Part 2 — Static Methods in the Driver Class

You now need a method that collects the results of several draws in a row, and a method that finds the longest streak in a sequence of draws. This collection and analysis logic does not belong in the `CardDeck` class. Therefore, you decide to create two static methods in the class that contains your `main` method.

##### `collectDraws()`

Takes a `CardDeck` and a number of draws as parameters. The method will return an array of the values produced by drawing from the deck the given number of times.

##### `findLongestStreak()`

Takes as its parameter an array of integer values representing a series of card draws. The method returns the starting index in the array of a streak of maximum length. A streak is defined as the repeated occurrence of the same value in two or more consecutive positions in the array.

For example, in the following array there are two streaks of length 4, one starting at index 6 and another starting at index 14. The method may return either of these starting indices.

| Index  | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 |
|--------|---|---|---|---|---|---|---|---|---|---|----|----|----|----|----|----|----|-----|
| Result | 1 | 5 | 5 | 4 | 3 | 1 | 2 | 2 | 2 | 2 |  6 |  1 |  3 |  3 |  5 |  5 |  5 |  5 |

If there are no streaks of any value, the method returns `-1`.

**In computer science speak, we have:**

| Method | Points | Javadoc |
|--------|--------|---------|
| `collectDraws()` | (5 pts) | `/** Returns an array of the values obtained by drawing from a card deck numDraws times.` <br> `* @param deck a CardDeck` <br> `* @param numDraws the number of draws to be recorded` <br> `* Precondition: numDraws > 0` <br> `* @return an array of numDraws values */` |
| `findLongestStreak()` | (8 pts) | `/** Returns the starting index of a longest streak of two or more consecutive repeated values in the array values.` <br> `* @param values an array of integer values representing a series of card draws` <br> `* Precondition: values.length > 0` <br> `* @return the starting index of a streak of maximum length; -1 if there is no streak */` |

---

#### Part 3 — Additional Scoring Guidelines

##### 1. Algorithm Design for `collectDraws()` and `findLongestStreak()` — (4 pts)

> *"We don't plan to fail. We fail to plan."*

Before writing any code, write out a pseudocode or flowchart algorithm for both methods.

##### 2. `main` Method Integration — (5 pts)

After you have **tested** (yes, tested) all of the above from your `main` method, put your `main` method together as follows:

| Step | Points | Task |
|------|--------|------|
| A | (1 pt) | Instantiate (create) a `CardDeck` object named `deck`. |
| B | (1 pt) | Call (invoke) the `collectDraws()` method with 50 draws. Store the array that is returned into the array `myDraws`. |
| C | (2 pts) | Output the contents of `myDraws`. Output both the **index** and the **element** to make it easier to verify the next method. |
| D | (1 pt) | Call the `findLongestStreak()` method. Output the return value in a clearly labeled manner. |

---

#### Some Tips / Suggestions

#### Testing `collectDraws()`
- Store the returned array into another array and output the values.
- Outputting the index of each element will be helpful for checking the next method.
- A small number of draws is fine for initial testing.

#### Testing `findLongestStreak()`
- Create a small array where **no two values are the same** and call the method
- Create an array where **all values are the same** and call the method
- Create an array where there is **only one longest streak** and call the method
- Create an array where there are **multiple streaks but only one longest** and call the method
- Create an array where there are **multiple longest streaks** and call the method
- Create an array where there are **multiple streaks of the same value** and call the method

---

### Rubric

**Total Points: 25**

| Criterion | Points | AP CSA Standard |
|-----------|--------|-----------------|
| **`CardDeck` — Instance variable `currentDraw` declared correctly** | 1 | MOD-1.A — Represents data using instance variables |
| **`CardDeck` — Default constructor initializes `currentDraw`** | 2 | MOD-2.B — Constructors initialize the attributes of an object |
| **`CardDeck` — `drawCard()` updates `currentDraw` using `Random` and returns the value** | 2 | MOD-1.F — Methods use `return` to pass values back; CON-1.B — `Random` used for simulation |
| **Algorithm pseudocode/flowchart for both static methods is present and logical** | 4 | MOD-1.E — Program design precedes implementation; AAP-2.A — Algorithm design |
| **`collectDraws()` — Correctly creates and fills an int array of `numDraws` values** | 5 | VAR-2.C — Traverse and modify arrays; AAP-2.O — Array creation and population |
| **`main` A — `CardDeck` object `deck` instantiated correctly** | 1 | MOD-2.C — Objects are created using `new` with a constructor |
| **`main` B — `collectDraws()` called with 50; result stored in `myDraws`** | 1 | MOD-1.D — Calling methods with parameters and capturing return values |
| **`main` C — `myDraws` printed with index and element on each line** | 2 | VAR-2.C — Array traversal using index; I/O formatting |
| **`findLongestStreak()` — Correctly traverses array and tracks longest streak start index** | 8 | AAP-2.O — Array traversal algorithms; AAP-2.P — Identifying repeated patterns |
| **`main` D — `findLongestStreak()` called and result printed with a label** | 1 | MOD-1.D — Calling methods and interpreting return values |

> **AP CSA Standard Codes used above:**
> - **MOD-1** — Using Objects and Methods
> - **MOD-2** — Writing Classes
> - **VAR-2** — Using Arrays
> - **AAP-2** — Algorithms and Programming
> - **CON-1** — Control and Simulation

---

## Recommended Placement in the AP CSA Curriculum

This activity is best placed **mid-Unit 3 (Class Creation)**, immediately after students have:

1. Written their first full class with instance variables, a constructor, and methods
2. Been introduced to `Random` for the first time
3. Completed basic array traversal in early Unit 4 preview or as an introduction


**Oracle 1Z0-811 connection:** This activity also touches `Random`, array declaration/population, method return types, and static vs. instance context — all of which appear on the Oracle Java Foundations exam.

---

### Extension: Data Science

The data scientist's real question is: *does a reshuffled deck produce truly random sequences, or do streaks appear more (or less) often than probability predicts?*

Once your program is working, consider this challenge:

- Run `collectDraws()` with 1000 draws
- Count how many streaks exist and how long they are on average
- A truly random sequence of values 1–13 has a **1-in-13 chance** of any two consecutive draws matching
- Does your data match that expectation?

### Activity 2.1.1
### Activity 2.1.2 Not another Cake
### Activity 2.1.3 Dog Pizza java
### Activity 2.1.4 - Bicycle Revisited
### Activity 2.1.5 Constructor Practice

---

## 3.5 Methods: How to Write Them

**Goals**
- Define behaviors of an object using non-void class methods with parameters.
- Create new types using classes.

```java
public class BankAccount {
    private String accountNumber;
    private double balance;

    public BankAccount(String accountNumber, double initialBalance) {
        this.accountNumber = accountNumber;
        this.balance = initialBalance;
    }

    // Non-void method: deposits money and returns new balance
    public double deposit(double amount) {
        if (amount > 0) {
            balance += amount;
            System.out.println("Deposit successful. New balance: " + balance);
        } else {
            System.out.println("Invalid deposit amount.");
        }
        return balance;
    }

    // Void method: displays account info
    public void displayInfo() {
        System.out.println("Account Number: " + accountNumber);
        System.out.println("Balance: " + balance);
    }
}
```

### 3.5.1 Accessor (Getter) Methods

**Goals**
- Understand how to properly encapsulate the attributes of a class.
- Write methods to display encapsulated attributes.

Accessor methods (getters) are `public` methods that return the value of `private` instance variables:
```java
public String getBrand() {
    return brand;
}

public int getMaxSpeed() {
    return maxSpeed;
}
```

### 3.5.2 Mutator (Setter) Methods

**Goals**
- Write methods to change the encapsulated attributes of a class.

Mutator methods (setters) are `public` methods that modify `private` instance variables:
```java
public void setBrand(String brand) {
    this.brand = brand;
}

public void setMaxSpeed(int maxSpeed) {
    this.maxSpeed = maxSpeed;
}
```

---

## 3.6 Methods: Passing and Returning References of an Object

**Goals**
- Pass objects as parameters to methods.
- Return objects from methods.

```java
public class Student {
    public Student copyArgument(Student std) {
        this.name = std.name;
        this.grade = std.grade;
        return std;  // returning a reference to an object
    }
}
```

---

## 3.7 Class Variables and Methods

**Goals**
- Define behaviors of a class through static methods.
- Define static variables that belong to the class.

```java
public class MathUtility {
    // Static variable (belongs to the class, shared by all instances)
    private static final double PI = 3.14159;
    private static int count = 0;

    // Static method (called on the class, not an instance)
    public static double calculateCircleArea(double radius) {
        return PI * radius * radius;
    }

    public static void incrementCount() {
        count++;
    }

    public static int getCount() {
        return count;
    }
}
```

Static methods and variables are associated with the class itself rather than specific instances. Call them using the class name: `MathUtility.calculateCircleArea(5.0)`.

---

## 3.8 Scope and Access

**Goals**
- Explain where variables can be used in a program.

| Variable Type | Declared In | Accessible From |
| ------------- | ----------- | --------------- |
| **Local variable** | Inside a method | Only within that method |
| **Instance variable** | Class body (outside methods) | Any non-static method in the class |
| **Static variable** | Class body with `static` keyword | Any method in the class (including static methods) |

```java
public class ScopeExample {
    private String instanceVar = "instance";      // instance variable
    private static int staticVar = 10;            // static variable

    public void exampleMethod() {
        int localVar = 5;                          // local variable
        System.out.println(instanceVar);           // ✅ accessible
        System.out.println(staticVar);             // ✅ accessible
        System.out.println(localVar);              // ✅ accessible
    }

    public static void staticMethod() {
        System.out.println(staticVar);             // ✅ accessible
        // System.out.println(instanceVar);        // ❌ NOT accessible in static method
    }
}
```

**Access Modifiers:**

| Modifier | Same Class | Same Package | Subclass | Other Classes |
| -------- | ---------- | ------------ | -------- | ------------- |
| `public` | ✅ | ✅ | ✅ | ✅ |
| `protected` | ✅ | ✅ | ✅ | ❌ |
| (default) | ✅ | ✅ | ❌ | ❌ |
| `private` | ✅ | ❌ | ❌ | ❌ |

---

## 3.9 this Keyword

**Goals**
- Evaluate object reference expressions that use the keyword `this`.

`this` keyword refers to the current object in a method. It is useful when attribute and parameter names are the same:

```java
public class Main {
    int x = 2;

    public Main(int x) {
        this.x = x;  // "this.x" is the instance variable; "x" is the parameter
    }

    public static void main(String[] args) {
        Main numObj = new Main(5);
        System.out.println("The instantiated value of x is " + numObj.x);
        // Output: The instantiated value of x is 5
    }
}
```

`this` can be used to:
- Distinguish instance variables from parameters with the same name
- Invoke current constructor (`this()`)
- Pass the current object as an argument
- Return the current object from a method

---

## Exceptions — *Oracle Foundations 1Z0-811*

> **Oracle Exam Note:** Exception handling is tested on the Oracle Java Foundations exam (1Z0-811).

An **exception** is an event that disrupts the normal flow of a program at runtime. Java uses exception handling to manage errors gracefully.

**Common Java Exceptions:**

| Exception | Cause |
| --------- | ----- |
| `ArithmeticException` | Dividing an integer by zero |
| `NullPointerException` | Calling a method on a `null` reference |
| `ArrayIndexOutOfBoundsException` | Accessing an invalid array index |
| `NumberFormatException` | Parsing a non-numeric string as a number |
| `IllegalArgumentException` | Illegal argument passed to a constructor or method |

**try-catch-finally:**

```java
try {
    // Code that might throw an exception
    int result = 10 / 0;
} catch (ArithmeticException e) {
    // Handle the specific exception
    System.out.println("Error: " + e.getMessage());
} finally {
    // Always executes, whether or not an exception occurred
    System.out.println("This always runs.");
}
```

**Multiple catch blocks:**
```java
try {
    String s = null;
    System.out.println(s.length());
} catch (NullPointerException e) {
    System.out.println("Null pointer: " + e.getMessage());
} catch (Exception e) {
    System.out.println("General error: " + e.getMessage());
}
```

**Throwing exceptions:**
```java
public void setAge(int age) {
    if (age < 0 || age > 150) {
        throw new IllegalArgumentException("Invalid age: " + age);
    }
    this.age = age;
}
```

### Activity 3.E.1 - Exception Handling Practice
Write a program that prompts the user for an integer. Use a `try-catch` block to handle `NumberFormatException` if the user enters non-numeric input, and `ArithmeticException` if the user enters 0 for a division operation.

---

## Lambda Expressions — *Oracle Foundations 1Z0-811*

> **Oracle Exam Note:** Lambda expressions are tested on the Oracle Java Foundations exam (1Z0-811) but are **not** on the AP CSA exam.

A **lambda expression** is a short block of code that takes in parameters and returns a value. Lambda expressions are similar to anonymous methods (methods without a name).

```java
// Syntax: (parameters) -> expression
// OR:     (parameters) -> { statements; }

// Traditional approach
import java.util.ArrayList;
import java.util.Collections;

ArrayList<String> names = new ArrayList<>();
names.add("Charlie");
names.add("Alice");
names.add("Bob");

// Traditional sort using Comparator
Collections.sort(names, new java.util.Comparator<String>() {
    public int compare(String a, String b) {
        return a.compareTo(b);
    }
});

// Lambda expression (much more concise)
Collections.sort(names, (a, b) -> a.compareTo(b));
```

**Lambda with forEach:**
```java
// Print each name
names.forEach(name -> System.out.println(name));

// Or even shorter using method reference
names.forEach(System.out::println);
```

**Lambda with filtering (streams):**
```java
import java.util.List;
import java.util.stream.Collectors;

List<String> longNames = names.stream()
    .filter(name -> name.length() > 4)
    .collect(Collectors.toList());
System.out.println(longNames);
```

### Activity 3.L.1 - Lambda Sorting
Create an ArrayList of student objects. Use a lambda expression to sort them by GPA in descending order, then print the sorted list.

---

## Class Design Project

```java
/*=============================================================================
 |   Assignment:  Project 3.7.1 - Clue
 |       Author:  [Your First and Last Name (Your E-mail Address)]
 |
 |  Course Name:  AP Computer Science A
 |   Instructor:  John Smith
 |     Due Date:  [Due Date and Time]
 |
 |  Description:  [Describe the program's goal, IN DETAIL.]
 |
 |     Language:  [java]
 |
 | Deficiencies:  [If you know of any problems with the code, provide
 |                details here, otherwise clearly state that you know
 |                of no unsatisfied requirements and no logic errors.]
 *===========================================================================*/
```

**Project 3.7.1 - Clue**

[137Clue.zip](https://github.com/AP-CSA-JAVA/CSA_JAVA-Course/files/10015355/137Clue.zip)

**Directions** Review the current program. Look at "what works" and "what needs work". Make the necessary changes so it produces the intended outcome.

This program simulates Clue.

Here is what works:
- the program randomly generates a final murderer, weapon, and room
- prints out choices for the user
- asks user for final guess

Here is what needs to work:
- `equals()` comparison is incorrect
- `check()` should only get called if our guess isn't 100% correct
- The table of Suspect, Weapon and Room should be aligned — use `\t`
- Should print "You have the correct murderer." if correct.
- Should print "You have the correct weapon." if correct.
- Should print "You have the correct room." if correct.

Extra:
- Ignore case, use `.equalsIgnoreCase()`
- Allow the user to iterate through the program to pick the correct Suspect, Weapon and Room

This extension is a part of Unit 3 method writing and leads into Unit 4 array traversal algorithms.
