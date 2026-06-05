# Unit 3 — Class Creation
*AP Exam Weighting: 10–18%*

<details>
<summary>📌 Standards — Unit 3</summary>

| Standard | Description |
|----------|-------------|
| **AP CSA MOD-2.A** | Describe the purpose of a class and its relationship to objects |
| **AP CSA MOD-2.B** | Constructors initialize the attributes of an object |
| **AP CSA MOD-2.C** | Objects are created using `new` with a constructor call |
| **AP CSA MOD-2.D** | Instance variables store object state |
| **AP CSA MOD-1.F** | Methods use `return` to pass values back to the calling code |
| **AP CSA VAR-1.E** | Declare variables of the correct type |
| **Oracle 1Z0-811 — Domain 4** | Working with Java Data Types: primitive and reference types |
| **Oracle 1Z0-811 — Domain 6** | Working with Methods and Encapsulation: constructors, method overloading |
| **CTE ICT 5.8** | Create and use algorithms |
| **CTE CRP 2** | Communicate clearly, effectively, and with reason |
| **CTE CRP 5** | Utilize critical thinking to make sense of problems |

</details>

---

## 3.1 Abstraction and Program Design

**Goals**
- Understand the design principles of a class.
- Use a non-programming methodology to design code.
- Create a roadmap for the next activities.

A class is a blueprint for the objects of that class. A class contains variables and methods to store and manipulate information. To create a class, you first state whether you want it to be public or private, use the `class` keyword, and name the class.

**Design Principles of a Class:**

- <mark>Encapsulation</mark>: Use access modifiers (`private`, `public`, `protected`) to encapsulate attributes, allowing controlled access through getter and setter methods.
- <mark>Abstraction</mark>: The class hides implementation details and exposes only essential features.
- <mark>Modularity</mark>: A class is a modular unit that represents a single entity or concept and can be reused as needed.
- <mark>Single Responsibility Principle (SRP)</mark>: A class should only deal with managing one responsibility.
- <mark>Information Hiding</mark>: Making attributes `private` so external code can only interact through well-defined methods.

---

### Activity 3.1.1 — Sports Class

**AP CSA Topics:** 3.1 (Classes), 3.2 (Constructors), 3.3 (Instance Variables and toString())

**Oracle Domain:** 4, 6


**Objective**

Write a complete Java class representing a professional athlete. This is your first independently-designed class — you choose the sport, the player, and the data you want to track.

**Requirements**

- [ ] Create a class related to a professional sport of your choice (Football, Soccer, Basketball, Baseball, etc.)
- [ ] Declare at least **five instance variables** appropriate to your sport (e.g., name, team, position, number, stats)
- [ ] Create a **constructor** that accepts parameters for all instance variables
- [ ] Create an **instance** of the class in `Main.java`
- [ ] Create a `toString()` method that returns a formatted, multi-line string describing the object
- [ ] Take a screenshot of your `Main` class, your player class, and your output

**Example Output**

```
Name: Marcelo Vieira da Silva Jr.
Team: Real Madrid
Position: left-back
Number: 12
Goals: 0
Starting: true
```

**Starter Code — Main.java**

```java
public class Main
{
    public static void main(String[] args)
    {
        // Create an instance of your athlete class here
        // Print it using System.out.println()
    }
}
```

> **Oracle Exam Note:** The Oracle 1Z0-811 exam tests your understanding of reference types, constructors, and how `new` allocates an object on the heap. When you write `new Athlete(...)`, Java allocates memory and calls the constructor. The variable holds a *reference* (memory address), not the object itself.

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
- Understand the structure and components of a Java class.

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

A **constructor** in Java is a special method used to initialize objects. The constructor is called when an object of a class is created. It can be used to set the initial values for object attributes.

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

---

### Activity 3.4.1 — Not Another Cake

**AP CSA Topics:** 3.2 (Constructors), 3.3 (Writing Methods), 3.4 (Constructor Overloading)
**Oracle Domain:** 6 (Constructor overloading)

**Objective**

Study the `Cake.java` reference program to understand **constructor overloading** — writing multiple constructors for the same class, each accepting different parameter types. Then create your own class (not a Cake) that demonstrates the same concept.

**Part A — Explore the Reference Program**

Read `Cake.java` and `Main.java` carefully. Then in `Main.java`:

- [ ] Declare a `double` variable named `t` and assign it the value `3.0`
- [ ] Create a `Cake` object reference named `myCake` using `new Cake(t)`
- [ ] Create two more `Cake` object references named `yourCake` and `ourCake` using the other constructors
- [ ] Print out all three `Cake` object reference variables
- [ ] Declare a variable `emptyCake` and initialize it to `null`
- [ ] Print `emptyCake`

**Cake.java — Reference Program**

```java
public class Cake
{
    int tiers;

    public Cake()
    {
        tiers = 1;
        System.out.println("   ,,,\n   |||\n(~~~~~~~)\n(       )\n(~~~~~~~)\n");
    }

    public Cake(int t)
    {
        tiers = t;
        System.out.println("      ,,,\n      |||\n  (**********)\n  (*        *)\n  (*        *)");
        System.out.println("(**************)\n(*            *)\n(*            *)\n(**************)\n");
    }

    public Cake(double t)
    {
        tiers = (int) t;
        System.out.println("        ,,,\n        |||\n    (**********)\n    (*        *)\n    (*        *)");
        System.out.println("  (**************)\n  (*            *)\n  (*            *)");
        System.out.println("(******************)\n(*                *)\n(*                *)\n(******************)\n");
    }
}
```

**Main.java — Starter Code**

```java
public class Main
{
    public static void main(String[] args)
    {
        // Declare a double variable named 't' and assign 3.0


        // Create myCake using new Cake(t)


        // Create yourCake and ourCake using the other two constructors


        // Print all three Cake reference variables


        // Declare emptyCake and set it to null


        // Print emptyCake

    }
}
```

**Sample Output**

```
        ,,,
        |||
    (**********)
    (*        *)
    (*        *)
  (**************)
  (*            *)
  (*            *)
(******************)
(*                *)
(*                *)
(******************)


   ,,,
   |||
(~~~~~~~)
(       )
(~~~~~~~)

      ,,,
      |||
  (**********)
  (*        *)
  (*        *)
(**************)
(*            *)
(*            *)
(**************)

myCake=Cake@15db9742
yourCake=Cake@6d06d69c
ourCake=Cake@7852e922
emptyCake=null
```
**Part B — Your Own Class (Submission)**

Create a **unique class of your choice** (not a Cake). Requirements:

- [ ] Four constructors: no-arg, 1-parameter, 2-parameter, 3-parameter
- [ ] A `toString()` method that returns a formatted string
- [ ] Appropriate comments throughout
- [ ] A `Main.java` that creates one object per constructor and prints each
- [ ] Submit all `.java` files

> **Oracle Exam Note:** Constructor overloading is a key topic on the Oracle 1Z0-811 exam. Java selects the correct constructor based on the **number and type** of arguments passed — this is called *method signature matching*.

---

### Activity 3.4.2 — Dog Pizza

**AP CSA Topics:** 3.1 (Class Design), 3.2 (Constructors), 3.3 (toString())
**Oracle Domain:** 4, 6


**Objective**

Practice working with **two classes in the same program**. You will complete a provided `Dog` class, then design a `Pizza` class entirely from scratch.

**Part A — Complete Dog.java**

Fill in the missing instance variables and constructor so the provided `toString()` method works correctly without modification.

```java
public class Dog
{
    // Add instance variables: breed (String) and name (String)


    // Add a constructor that takes breed and name as parameters


    // DO NOT modify this method
    public String toString()
    {
        return name + " is a " + breed;
    }
}
```

**Part B — Create Pizza.java from Scratch**

Design a `Pizza` class with the following instance variables:
- `size` (int) — diameter in inches
- `type` (String) — pizza style (Veggie, Cheese, Meat, etc.)
- `toppings` (String) — comma-separated list of toppings

Requirements:
- [ ] Declare all three instance variables
- [ ] Write a constructor that takes all three as parameters
- [ ] Write a `toString()` that returns a formatted description


**Main.java — Starter Code**

```java
class Main
{
    public static void main(String[] args)
    {
        Dog golden = new Dog("Golden Retriever", "Sammy");
        System.out.println(golden);

        // Instantiate 3 pizzas and print them out:
        // 12 inch Veggie pizza with Tomatoes, onions, olives
        // 15 inch Cheese pizza with Cheese
        // 20 inch Meat pizza with Pepperoni, sausage, bacon

    }
}
```

**Expected Output**

```
Sammy is a Golden Retriever
12 inch Veggie pizza with Tomatoes, onions, olives
15 inch Cheese pizza with Cheese
20 inch Meat pizza with Pepperoni, sausage, bacon
```

> **Oracle Exam Note:** Each class you write should be stored in its own `.java` file with a matching filename (`Dog.java`, `Pizza.java`). The Oracle exam tests whether you understand that a public class name must match its filename — a compile-time rule enforced by the Java compiler.

---

**Activity 3.4.3 — Bicycle Revisited**

**AP CSA Topics:** 3.2 (Constructor overloading), 3.4 (Constructors)
**Oracle Domain:** 6 (Method overloading, constructors)

**Objective**

Practice writing **multiple constructors** for a single class. Each constructor should handle a different set of parameters, with reasonable default values for anything not provided.

**Requirements**

Create a `Bike` class with the following instance variables:

| Variable | Type | Sample Values |
|----------|------|---------------|
| `kind` | String | Cruiser, road bike, tricycle, hybrid |
| `gear` | int | 1, 3, 10, 30 |
| `size` | int | 20, 22, 26, 28 |
| `cost` | double | 175.99, 300.00, 1049.00, 1500.00 |

Write the following constructors:

- [ ] **No-argument constructor** — defaults: `"Cruiser"`, `1`, `26`, `175.99`
- [ ] **Two-parameter constructor** — takes `kind` and `size` only
- [ ] **Four-parameter constructor** — takes all four values

Also include a method:
```java
public void pedal()
{
    System.out.println("Pedaling to accelerate.");
}
```

And a `toString()` that produces output matching the sample below.

**Sample Output**

```
My bicycle has 1 gear and is painted white!
Pedaling to accelerate!
My cruiser has 10 gears costs $150.
Pedaling to accelerate.
My tricycle has 3 gears costs $300.
Pedaling to accelerate.
```

> **Oracle Exam Note:** Constructor overloading and default values are tested directly on the Oracle 1Z0-811 exam. Pay attention to how Java uses **method signatures** (parameter count and type) to decide which constructor to call when `new Bike()`, `new Bike("Cruiser", 26)`, and `new Bike("Cruiser", 1, 26, 175.99)` are each written.

---

### Activity 3.4.4 — Constructor Practice

**AP CSA Topics:** 3.2 (Constructor overloading), 3.1 (Class design), 3.3 (toString())
**Oracle Domain:** 6 (Constructors and encapsulation)

**Objective**

Design a `Student` class from scratch using all the constructor techniques from Activities 3.1.1–3.4.3. This is a synthesis activity.

**Student.java**

Create a class called `Student` with the following instance variables:

| Variable | Type | Default |
|----------|------|---------|
| `name` | String | `"Unknown"` |
| `age` | int | `0` |
| `gpa` | double | `0.0` |

Write **at least four constructors**:

- [ ] No-argument constructor — sets all fields to defaults
- [ ] Constructor that takes only `name`
- [ ] Constructor that takes `name` and `age`
- [ ] Constructor that takes all three: `name`, `age`, `gpa`

Write a `toString()` method that returns:
```
Student{name='Alice', age=16, gpa=3.5}
```

**Main.java**

- [ ] Create at least one `Student` object using each constructor
- [ ] Print each object using `System.out.println()`

**Expected Output**

```
Student{name='Unknown', age=0, gpa=0.0}
Student{name='Alice', age=0, gpa=0.0}
Student{name='Bob', age=17, gpa=0.0}
Student{name='Charlie', age=18, gpa=3.7}
```

> **Oracle Exam Note:** The Oracle 1Z0-811 exam includes questions on constructor chaining using `this()`. As an extension challenge, refactor your constructors so each shorter one calls the next using `this(...)` — for example, the no-arg constructor calls `this("Unknown")`, which calls `this("Unknown", 0)`, and so on.

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
|---------------|-------------|-----------------|
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
|----------|------------|--------------|----------|---------------|
| `public` | ✅ | ✅ | ✅ | ✅ |
| `protected` | ✅ | ✅ | ✅ | ❌ |
| (default) | ✅ | ✅ | ❌ | ❌ |
| `private` | ✅ | ❌ | ❌ | ❌ |

---

## 3.9 this Keyword

**Goals**
- Evaluate object reference expressions that use the keyword `this`.

`this` refers to the current object in a method. It is useful when attribute and parameter names are the same:

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

## Oracle Exception Handling

> **Oracle Exam Note:** Exception handling is tested on the Oracle Java Foundations exam (1Z0-811) but is **not** on the AP CSA exam.

An **exception** is an event that disrupts the normal flow of a program at runtime. Java uses exception handling to manage errors gracefully.

**Common Java Exceptions:**

| Exception | Cause |
|-----------|-------|
| `ArithmeticException` | Dividing an integer by zero |
| `NullPointerException` | Calling a method on a `null` reference |
| `ArrayIndexOutOfBoundsException` | Accessing an invalid array index |
| `NumberFormatException` | Parsing a non-numeric string as a number |
| `IllegalArgumentException` | Illegal argument passed to a constructor or method |

**try-catch-finally:**

# Try / Catch / Finally
**AP CSA + Oracle 1Z0-811 Exception Handling Reference**

---



---

## Keyword Definitions

### `try`
Defines a **guarded block** — code that might throw an exception. If any statement inside throws, control immediately jumps out of the block (remaining lines are skipped) and Java searches for a matching `catch` clause.

**Rules:**
- Must be followed by at least one `catch`, one `finally`, or both.
- Remaining lines are skipped the moment an exception is thrown.
- Can be nested inside other `try` blocks.

---

### `catch (ExceptionType e)`
Handles a specific exception type. The parameter `e` is the actual exception object — you can call `e.getMessage()`, `e.printStackTrace()`, or rethrow with `throw e`. Multiple `catch` blocks are allowed; Java checks them **top-down and runs the first match only**.

**Rules:**
- Order matters: more specific types must come **before** broader ones (e.g., `IOException` before `Exception`).
- Placing `Exception` before a subclass is an **unreachable catch block — compile error**.
- The exception variable (`e`) is only in scope inside that `catch` block.

---

### `finally`
The **cleanup block**. Runs *regardless* of whether an exception was thrown or caught. Classic uses: closing file/DB connections, releasing locks, logging.

**Rules:**
- Runs even if there is a `return` statement in `try` or `catch`.
- If `finally` itself contains a `return`, it **overrides** the return value from `try`/`catch`.
- **Does NOT run** if `System.exit()` is called or the JVM crashes.

---

### `throw`
A **statement** that manually launches an exception object. Must be followed by a `Throwable` instance:

```java
throw new IllegalArgumentException("Invalid input");
```

Control immediately leaves the current method and unwinds the call stack looking for a handler.

**Rules:**
- Requires a `Throwable` (or subclass) object.
- No lines after `throw` in that method execute.
- Unchecked exceptions (`RuntimeException` subtypes) can be thrown without declaring them.

---

### `throws` *(method signature)*
Declares that a method might throw a checked exception and is **not** handling it internally — callers must handle it.

```java
public void readFile(String path) throws IOException {
    // ...
}
```

**Rules:**
- Only required for **checked exceptions** (not `RuntimeException` subtypes).
- Multiple exceptions: `throws IOException, SQLException`
- Does *not* mean the exception will be thrown — only that it might be.

> **Oracle Exam Note:** `throw` vs `throws` — one is a statement inside a method body, the other is a keyword in the method signature. Mixing them up is a common exam trap.

---

## Full Syntax Template

```java
try {
    // risky code — may throw an exception
    doSomethingRisky();

} catch (SpecificException e) {
    // handle the specific type first (most specific → least specific)
    System.out.println(e.getMessage());

} catch (Exception e) {
    // broader catch — catches anything Exception and below

} finally {
    // ALWAYS runs — cleanup code goes here
    closeFile();
}
```

---

## Execution Order by Scenario

### Scenario 1 — No exception thrown ✅
```
try     │ int x = 10 / 2;          → executes normally
try     │ System.out.println(x);   → prints 5
skip    │ catch block              → skipped, no exception
finally │ finally block            → always runs
```

---

### Scenario 2 — Exception thrown and caught ✅
```
try     │ int x = 10 / 0;                        → throws ArithmeticException
skip    │ System.out.println(x);                 → skipped
catch   │ catch (ArithmeticException e)           → matches!
catch   │ System.out.println("caught: " + e...); → runs
finally │ finally block                           → always runs
```

---

### Scenario 3 — Exception not caught ⚠️
```
try       │ int x = 10 / 0;                 → throws ArithmeticException
check     │ catch (NullPointerException e)  → no match
finally   │ finally block                   → still runs first
↑ propagate │ ArithmeticException           → propagates to caller
```

---

### Scenario 4 — Multiple catch blocks (order matters) ✅
```
try     │ throw new FileNotFoundException("bad path");
check   │ catch (IOException e)    → FileNotFoundException IS-A IOException → matches
skip    │ catch (Exception e)      → never reached
finally │ finally block            → always runs
⚠ exam  │ If IOException came AFTER FileNotFoundException — OK.
         │ If IOException came BEFORE FileNotFoundException — ALSO OK.
         │ If Exception came BEFORE IOException — COMPILE ERROR.
```

---

### Scenario 5 — `return` inside `try` ⚠️
```
try     │ return 42;     → Java queues this return value
finally │ finally block  → runs BEFORE method actually returns
return  │ method returns 42  (unless finally has its own return)
⚠ trap  │ A return inside finally overrides the try return value.
```

---

### Scenario 6 — `throw` inside `finally` 🚫
```
try       │ throw new RuntimeException("original");
finally   │ throw new IllegalStateException("new!");
⚠ lost    │ "original" exception is silently discarded
caller    │ only sees IllegalStateException
```

---

## Oracle 1Z0-811 Rules Checklist

| # | Rule | Verdict |
|---|------|---------|
| 1 | A `try` block must be followed by at least one `catch` or `finally` | compile error if missing |
| 2 | Catch order: specific subclass **before** parent class | `Exception` before `IOException` = compile error |
| 3 | `finally` always runs — even with `return` or uncaught `throw` | ✅ |
| 4 | `return` in `finally` overrides `return` in `try`/`catch` | ⚠️ tricky |
| 5 | `throw` in `finally` discards the original exception | 🚫 silent bug |
| 6 | `System.exit()` is the only way to bypass `finally` | ✅ |
| 7 | Checked exceptions must use `throws` in signature or be caught | compile error if missing |
| 8 | Unchecked (`RuntimeException`) need no declaration | ✅ |
| 9 | Multi-catch: `catch (IOException \| SQLException e)` — types must not be in parent-child relationship | Java 7+ |
| 10 | Try-with-resources: `try (Scanner sc = new Scanner(f))` — auto-closes `AutoCloseable` | Java 7+ |

---

## Exception Hierarchy Quick Reference

```
Throwable
├── Error                  (JVM-level, do NOT catch)
│   ├── OutOfMemoryError
│   └── StackOverflowError
└── Exception              ← checked (must handle)
    ├── IOException
    │   └── FileNotFoundException
    ├── SQLException
    └── RuntimeException   ← unchecked (optional to handle)
        ├── ArithmeticException
        ├── NullPointerException
        ├── ArrayIndexOutOfBoundsException
        ├── ClassCastException
        └── IllegalArgumentException
```

> **Oracle Exam Note:** Know which exceptions are **checked** (must be caught or declared) vs **unchecked** (optional). `RuntimeException` and its subclasses are unchecked. Everything else that extends `Exception` is checked. `Error` classes are never caught in normal code.

---

## Common Student Mistakes

1. **Assuming `catch` runs when there's no exception** — it doesn't. `catch` is skipped if `try` completes normally.
2. **Assuming `finally` is optional** — it runs even without an explicit `finally` block... wait, no: you have to write it. But once written, it *always* runs.
3. **Putting broad `catch` first** — `catch (Exception e)` before `catch (IOException e)` is a compile error.
4. **Confusing `throw` and `throws`** — `throw` launches an exception; `throws` declares that a method might produce one.
5. **Thinking `return` exits immediately** — `finally` still runs after a `return` in `try`.
6. **Throwing from `finally`** — silently swallows the original exception. Avoid in production code.


```java
try {
    int result = 10 / 0;
} catch (ArithmeticException e) {
    System.out.println("Error: " + e.getMessage());
} finally {
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

### Activity 3.E.1 — Exception Handling Practice

Write a program that prompts the user for an integer. Use a `try-catch` block to handle `NumberFormatException` if the user enters non-numeric input, and `ArithmeticException` if the user enters `0` for a division operation.

---

## Lambda Expressions — *Oracle Foundations 1Z0-811*

> **Oracle Exam Note:** Lambda expressions are tested on the Oracle Java Foundations exam (1Z0-811) but are **not** on the AP CSA exam.

A **lambda expression** is a short block of code that takes in parameters and returns a value. Lambda expressions are similar to anonymous methods (methods without a name).

```java
// Traditional sort using Comparator
Collections.sort(names, new java.util.Comparator<String>() {
    public int compare(String a, String b) {
        return a.compareTo(b);
    }
});

// Lambda expression (much more concise)
Collections.sort(names, (a, b) -> a.compareTo(b));

// Lambda with forEach
names.forEach(name -> System.out.println(name));

// Lambda with filtering (streams)
List<String> longNames = names.stream()
    .filter(name -> name.length() > 4)
    .collect(Collectors.toList());
```

### Activity 3.L.1 — Lambda Sorting

Create an `ArrayList` of `Student` objects. Use a lambda expression to sort them by GPA in descending order, then print the sorted list.

---

## Unit 3 Project — Card Draw Sequences

**AP CSA Topics:** 3.1–3.4 (Class design, constructors, methods)
**Oracle Domain:** 4, 6

### Scenario

A data scientist is studying sequences of values produced by repeatedly drawing a card from a standard shuffled deck. After each draw, the card is returned and the deck is reshuffled. Each draw produces a value in the range of 1 through 13, inclusive — representing Ace (1) through King (13). The data scientist is particularly interested in **streaks** of values. A streak occurs when two or more consecutive draws produce the same value.

| Index  | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 |
|--------|---|---|---|---|---|---|---|---|---|---|----|----|----|----|----|----|----|-----|
| Result | 1 | 5 | 5 | 4 | 3 | 1 | 2 | 2 | 2 | 2 |  6 |  1 |  3 |  3 |  5 |  5 |  5 |  5 |

In the table above, streaks start at positions 1, 6, 12, and 14.

---

### Part 1 — The `CardDeck` Class

> ***For testing purposes, use the identifier names given***

**Class: `CardDeck`**

| Member | Points | Description |
|--------|--------|-------------|
| Instance variable: `currentDraw` | (1 pt) | `/** the value of the most recent card draw (1–13) */` |
| Constructor *(default only)* | (2 pts) | `/** gives an initial value to the current draw */` |
| `drawCard()` | (2 pts) | `/** simulates drawing a card, updates the instance variable, @return the value of the draw */` |

---

### Part 2 — Static Methods in the Driver Class

**`collectDraws()`**

Takes a `CardDeck` and a number of draws as parameters. Returns an array of the values produced by drawing from the deck the given number of times.

**`findLongestStreak()`**

Takes an array of integer values. Returns the starting index of a streak of maximum length. Returns `-1` if no streak exists.

| Method | Points | Javadoc |
|--------|--------|---------|
| `collectDraws()` | (5 pts) | `/** @param deck a CardDeck` <br> `* @param numDraws the number of draws` <br> `* Precondition: numDraws > 0` <br> `* @return an array of numDraws values */` |
| `findLongestStreak()` | (8 pts) | `/** @param values an array of integer values` <br> `* Precondition: values.length > 0` <br> `* @return starting index of longest streak; -1 if none */` |

---

### Part 3 — Algorithm Design and main() Integration

**Algorithm Design — (4 pts)**

> *"We don't plan to fail. We fail to plan."*

Before writing any code, write pseudocode or a flowchart for both methods.

**main() Integration — (5 pts)**

| Step | Points | Task |
|------|--------|------|
| A | (1 pt) | Instantiate a `CardDeck` object named `deck` |
| B | (1 pt) | Call `collectDraws()` with 50 draws; store result in `myDraws` |
| C | (2 pts) | Print `myDraws` showing both index and element on each line |
| D | (1 pt) | Call `findLongestStreak()` and print the result with a label |

---

### Rubric — Card Draw Sequences (25 pts)

| Criterion | Points | AP CSA Standard |
|-----------|--------|-----------------|
| `currentDraw` declared correctly | 1 | MOD-1.A |
| Default constructor initializes `currentDraw` | 2 | MOD-2.B |
| `drawCard()` updates `currentDraw` using `Random` and returns value | 2 | MOD-1.F, CON-1.B |
| Algorithm pseudocode/flowchart present and logical | 4 | MOD-1.E, AAP-2.A |
| `collectDraws()` creates and fills int array correctly | 5 | VAR-2.C, AAP-2.O |
| `main` A — `CardDeck` object instantiated correctly | 1 | MOD-2.C |
| `main` B — `collectDraws()` called with 50; stored in `myDraws` | 1 | MOD-1.D |
| `main` C — `myDraws` printed with index and element | 2 | VAR-2.C |
| `findLongestStreak()` traverses and tracks longest streak | 8 | AAP-2.O, AAP-2.P |
| `main` D — `findLongestStreak()` called and result printed | 1 | MOD-1.D |

---

### Extension: Data Science Connection

The data scientist's real question is: *does a reshuffled deck produce truly random sequences, or do streaks appear more or less often than probability predicts?*

- Run `collectDraws()` with 1000 draws
- Count how many streaks exist and their average length
- A truly random sequence of values 1–13 has a **1-in-13 chance** of any two consecutive draws matching
- Does your data match that expectation?

This extension deepens Unit 3 method writing and naturally connects to Unit 4 array traversal algorithms.

---

## Unit 3 Class Design Project — Clue

```java
/*=============================================================================
 |   Assignment:  Project 3.7.1 - Clue
 |       Author:  [Your First and Last Name (Your E-mail Address)]
 |
 |  Course Name:  AP Computer Science A
 |   Instructor:  [Instructor Name]
 |     Due Date:  [Due Date and Time]
 |
 |  Description:  [Describe the program's goal, IN DETAIL.]
 |
 |     Language:  Java
 |
 | Deficiencies:  [Known problems, or state none.]
 *===========================================================================*/
```

**[137Clue.zip](https://github.com/AP-CSA-JAVA/CSA_JAVA-Course/files/10015355/137Clue.zip)**

**Directions:** Review the current program. Look at "what works" and "what needs work." Make the necessary changes so it produces the intended outcome.

**What works:**
- The program randomly generates a final murderer, weapon, and room
- Prints out choices for the user
- Asks user for final guess

**What needs to work:**
- `equals()` comparison is incorrect
- `check()` should only get called if the guess isn't 100% correct
- The table of Suspect, Weapon, and Room should be aligned using `\t`
- Should print `"You have the correct murderer."` if correct
- Should print `"You have the correct weapon."` if correct
- Should print `"You have the correct room."` if correct

**Extra Credit:**
- Ignore case using `.equalsIgnoreCase()`
- Allow the user to iterate through the program to pick the correct Suspect, Weapon, and Room

---
