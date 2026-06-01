# Unit 3 - Class Creation
*AP Exam Weighting: 10–18% | Suggested Pacing: ~20–22 Class Periods*

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
