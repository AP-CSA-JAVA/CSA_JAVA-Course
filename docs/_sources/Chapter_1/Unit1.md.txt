# Unit 1 — Using Objects and Methods
*AP Exam Weighting: 15–25%*

<details>
<summary>📋 Unit 1 Standards Alignment</summary>

| Standard | Description |
| -------- | ----------- |
| ICT 1.0 | Academics — apply academic standards across content areas |
| ICT 2.0 | Communications — communicate clearly in written and electronic formats |
| ICT 4.0 | Technology — use electronic tools and reference materials |
| ICT 5.4 | Interpret information and draw conclusions to make informed decisions |
| ICT 5.8 | Create and use algorithms to solve problems |
| ICT 5.9 | Deconstruct large problems into smaller components |
| ICT 5.10 | Use multiple layers of abstraction |
| ICT 5.11 | Understand base systems including binary and hexadecimal |
| ICT 7.5 | Apply high-quality techniques to product design and development |
| ICT 10.1 | Interpret and explain ICT-specific terminology |
| C4.4 | Identify and apply data types and encoding |
| C4.5 | Demonstrate awareness of the OOP paradigm |
| C4.6 | Use proper programming language syntax |
| C4.7 | Use various data structures including objects |
| C4.8 | Use OOP concepts: properties, methods, and inheritance |
| C4.9 | Create programs using control structures, procedures, and variables |
| C4.11 | Document development work using comments |
| CRP 1 | Apply appropriate technical skills and academic knowledge |
| CRP 2 | Communicate clearly, effectively, and with reason |
| CRP 4 | Apply technology to enhance productivity |
| CRP 5 | Utilize critical thinking to make sense of problems |
| CRP 7 | Act as a responsible and contributing citizen and employee |

</details>

---

## 1.1 Introduction to Algorithms, Programming, and Compilers

<details>
<summary>📌 Standards — 1.1</summary>

| Standard | Description |
| -------- | ----------- |
| ICT 1.0 | Academics — apply academic standards |
| ICT 5.8 | Create and use algorithms and solve problems |
| ICT 10.1 | Interpret and explain ICT-specific terminology |
| C4.6 | Use proper programming language syntax |
| CRP 1 | Apply appropriate technical skills and academic knowledge |

</details>

- [ ] Learn about the Java™ programming language and create your first Java program.
	- [ ] I will be able to write a basic java program
- [ ] Learn some basic rules of Java programming by identifying and correcting errors in code.
	- [ ] I will be able to identify basic syntax of a java program
- [ ] Generate outputs to a console by calling System class methods.
- [ ] Understand the difference between the `print()` method and the `println()` method.

Java is an Object Oriented Program. Within every Java program begins with the creation of a class. Consider a class as a blueprint for your program. In this instance, we created a class called *MyFirstClass*. Within the class there is a main method that is required to execute the program. Below is a simple program that will print "Hello, World".

![first_Java](https://user-images.githubusercontent.com/12989939/162324090-a9292f5d-3c02-46d8-bb05-e69cb0f72845.PNG)

Notice that with every `{` there is a corresponding `}`. You may hear me refer to it as a curly brace. A missing curly brace is one of the most common errors among new programmers. The name `public` allows users to be able to see the specific parts of your program. Notice also that the name of the class starts with a **capital letter**. The main class will always start with a capital letter.

In Java there is a "main method" that is required for all java programs. The code will always be the same:

```java
public static void main(String args[])
```

> [!Note] **`public`** is an access specifier.

### Assignment 1.1.1 — My Timeline

Create a personal timeline of at least seven meaningful events in your life using the `print` and `println` methods. The timeline will proceed vertically — earlier events near the top, later events near the bottom. Make it look professional. HINT: use `\t`

```
Year                 Age                    Description
1971              0 years old               Born in Long Beach
1976              5 years old               Started kindergarten
1989             17 years old               Graduated high school
1995             24 years old               Graduated college Long Beach State
1998             27 years old               Got Married
1998             27 years old               Began teaching career
2021             50 years old               First year at CAMS
```

Include seven meaningful events. No repetitive events such as "started kindergarten, started first grade, etc."

---

## 1.2 Variables and Data Types

<details>
<summary>📌 Standards — 1.2</summary>

| Standard | Description |
| -------- | ----------- |
| ICT 1.0 | Academics — apply academic standards |
| ICT 5.8 | Create and use algorithms and solve problems |
| ICT 5.9 | Deconstruct large problems into components |
| ICT 10.1 | Interpret and explain ICT-specific terminology |
| C4.4 | Identify and apply data types and encoding |
| C4.6 | Use proper programming language syntax |
| C4.9 | Create programs using variables and control structures |
| CRP 1 | Apply appropriate technical skills and academic knowledge |
| CRP 5 | Utilize critical thinking to make sense of problems |

</details>

- [ ] Learn to use variables so that the same algorithm runs using different input values.
- [ ] Determine the appropriate use for specific variables and data types.
	- [ ] I will be able to write a program using primitive and non-primitive types.

There are **eight primitive types** in Java: `int`, `double`, `boolean`, `float`, `char`, `byte`, `long`, and `short`. 
For this course we will primarily use `int`, `double`, and `boolean`.

- [ ] `int` — whole numbers; uses 32 bits of memory
- [ ] `double` — 64-bit decimal numbers
- [ ] `boolean` — true or false values
- [ ] `float` — 32-bit decimal numbers; uses less memory than `double`
- [ ] `char` — 16-bit Unicode character (`\u0000` to `\uffff`)
- [ ] `byte` — 8-bit integer, range −128 to 127
- [ ] `long` — 64-bit integer, range −2^63 to 2^63 − 1
- [ ] `short` — 16-bit integer, range −32,768 to 32,767


Non-primitive data types include String, Arrays, and Classes:
- [ ] **String** — a collection of characters enclosed in quotes
- [ ] **Arrays** — used to store multiple values (think 'list')
- [ ] **Class** — a blueprint/constructor for creating objects

**Variable Naming Convention**
- [ ] Always choose a name that indicates the purpose of the variable
- [ ] A variable cannot begin with a number
- [ ] A variable must not have spaces
- [ ] A variable cannot begin with any special characters
- [ ] A variable cannot have the same name as a Java keyword

When you declare a variable, you must state the variable type along with the variable name followed by the value assignment: `int height = 72;`

Once you have declared the variable type, you **do not need to do it again** to reassign a value to the variable. If you declare a variable as `final` you cannot change the value of it. `final` variables are written as ALL CAPS.

### Assignment 1.2.1 — Allowance

Write a program that will determine who receives an allowance or not. Use the information below as a guide:
- [ ] Allowance is always $30.00/week
- [ ] Non-teenagers do not receive an allowance
- [ ] Jon is 16 years old; Ed is 12 years old; Michael was born four years before Jon
- [ ] Print out who receives an allowance and who does not using `int`, `double`, and `boolean` variables.

---

### Assignment 1.2.2 — Scanner Class

The Scanner class is a package that provides primitive input within Java programs. It can be found in the [java.util Package](https://docs.oracle.com/javase/8/docs/api/java/util/package-summary.html).

- [ ] To create an object of the Scanner class, we must pass `System.in` as the defined object.
- [ ] To read the data type we need to use the function `next<DataType>()`. For example, to read an `int` use `nextInt()`.
- [ ] To read strings, use `nextLine()`.

**Assignment:** Create four questions that will ask the user for a `String`, `int`, `double`, and a `boolean`.

---

## 1.3 Expressions and Output

<details>
<summary>📌 Standards — 1.3</summary>

| Standard | Description |
| -------- | ----------- |
| ICT 1.0 | Academics — apply academic standards |
| ICT 5.8 | Create and use algorithms |
| ICT 5.9 | Deconstruct large problems into components |
| ICT 5.11 | Understand base systems including binary and hexadecimal |
| C4.6 | Use proper programming language syntax |
| C4.9 | Create programs using control structures, variables, functions |
| CRP 1 | Apply appropriate technical skills and academic knowledge |
| CRP 5 | Utilize critical thinking to make sense of problems |

</details>

- [ ] Describe the functionality of a program using a single-line comment.
- [ ] Use operators to construct compound expressions.
- [ ] Evaluate the results of an expression with an assignment statement.
	- [ ] I will understand and practice proper commenting in programming

| Symbol | Name | Usage |
| :---: | :---: | :---: |
| ( ) | Parentheses | Evaluate based on what is within the parentheses |
| * | Multiplication | Multiply two values together |
| / | Division | Divide two values |
| % | Modulo | The remainder after dividing two values |
| + | Addition | Add two values together |
| - | Subtraction | Subtract two values |

**Note:** When you divide an integer by zero your program will return an *ArithmeticException* error.

### Assignment 1.3.1 — Calculate Your Weight on Jupiter

Using the equation below, calculate what your weight would be on different planets:

`weightOnPlanet = (weightOnEarth / earthGravity) × planetGravity`

| Planet | Acceleration Due to Gravity (m/sec²) |
| :---: | :---: |
| Earth | 9.81 |
| Mercury | 3.59 |
| Venus | 8.87 |
| Mars | 3.711 |
| Jupiter | 24.79 |
| Saturn | 11.08 |
| Uranus | 10.67 |
| Neptune | 11.15 |

### Assignment 1.3.2 — Simple Math

- [ ] Create a program that will ask the user for two distinct integers
- [ ] Use the Scanner class to receive input from the user
- [ ] Store those values and perform addition, subtraction, multiplication, division, and modulo

---

## 1.4 Assignment Statements and Input

<details>
<summary>📌 Standards — 1.4</summary>

| Standard | Description |
| -------- | ----------- |
| ICT 1.0 | Academics — apply academic standards |
| ICT 5.8 | Create and use algorithms |
| ICT 5.9 | Deconstruct large problems into components |
| C4.6 | Use proper programming language syntax |
| C4.9 | Create programs using control structures and variables |
| CRP 1 | Apply appropriate technical skills and academic knowledge |
| CRP 5 | Utilize critical thinking to make sense of problems |

</details>

- [ ] Use the compound assignment and increment/decrement operators in a program.
	- [ ] I will be able to increment a variable based on java protocol

Java supports **Compound Assignment Operators** which perform a mathematical calculation and assignment in one step:

```java
+=   assigns the result of the addition.
-=   assigns the result of the subtraction.
*=   assigns the result of the multiplication
/=   assigns the result of the division.
%=   assigns the remainder of the division.
```

**Increment and Decrement Operators**

The increment operator (`++`) increases the value of a variable by 1. The decrement operator (`--`) decreases it by 1.

```java
int a = 5;
System.out.println("a = " + ++a);  // a = 6 (pre-increment)
int b = 5;
System.out.println("b = " + b++);  // b = 5 (post-increment: original returned first)
```

### Assignment 1.4.1 — Compound Operators

```java

public class CompoundOperators
{
  public static void main(String[] args)
  {
    int numPeople = 0;  
    double totalYears = 0;

    double years = 11.5;  // I will soon be halfway through my junior year.

    totalYears = totalYears + years;
    numPeople = numPeople + 1;
  }
}

```
- [ ] Rewrite the statements of the program above to use the compound assignment and/or the increment/decrement operators.
- [ ] TODO 1) Add at least three other people to your program, such as siblings, friends, or neighbors.
- [ ] TODO 2) Use people that are in different grades to validate your program can work for different school grades.
- [ ] TODO 3) For their years in school, use values that indicate they will soon be halfway through their current school year, as shown in the provided code.
- [ ] TODO 4)The average years you and your friends, siblings, neighbors have been in school.
- [ ] TODO 5) The total days you have all been in school, assuming you spend 180 days per year in school.
- [ ] TODO 6) The average days you have all spent in school.

```
Sample Output:
I have 11.5 years in school and 0.5 years to graduate.
Total people: 1, total years: 11.5
My best friend has 10.5 years in school and 1.5 years to graduate.
Total people: 2, total years: 22.0
My sister has 8.5 years in school and 3.5 years to graduate.
Total people: 3, total years: 30.5
My neighbor has 5.5 years in school and 6.5 years to graduate.
Total people: 4, total years: 36.0

Average years in school: 9.0
Total days in school: 6480.0
Average days per person: 1620.0 
```


### Assignment 1.4.2 — Average Test Score / Cashier Totals

Directions: Write two programs that will do the following:

**Average Test Score**
- [ ] ask the user for four test scores
- [ ] calculate and show the result

**Cashier Totals**
- [ ] ask the user for the number of burgers sold and how much each one costs
- [ ] ask the user for the number of fries sold and how much each costs
- [ ] display the total items sold
- [ ] display the total sales

**Sample Output:**
```
Enter the first test score:
95
Enter the second test score:
87
Enter the third test score:
74
Enter the forth test score:
75

Average test score: 82.75%
---------------------------------
Enter the number of burgers ordered:
10
Price of a burger:
5.65
Enter the number of fries ordered:
4
Price of fries:
1.95

Total Items Sold: 14
Total Sales: $64.3
```


---


## 1.5 Casting and Range of Variables

<details>
<summary>📌 Standards — 1.5</summary>

| Standard | Description |
| -------- | ----------- |
| ICT 1.0 | Academics — apply academic standards |
| ICT 5.4 | Interpret information and draw conclusions to make informed decisions |
| ICT 5.8 | Create and use algorithms |
| C4.4 | Identify and apply data types and encoding |
| C4.6 | Use proper programming language syntax |
| CRP 1 | Apply appropriate technical skills and academic knowledge |
| CRP 5 | Utilize critical thinking to make sense of problems |

</details>

- [ ] Evaluate arithmetic expressions that use manual and automatic casting.
- [ ] Perform mathematical rounding.
	- [ ] I will be able to explain why a code segment will not compile or work as intended.

There are some unique features to Java that help programmers create programs that are flexible in how they display data.  We learned earlier that we need to declare a variable by it's type.  It can be an `int` or a `double`.  As you may remember, an `int` is any whole negative or positive number.

A `double` is any number with a decimal.  1.0 is a whole number, but it has a decimal. So, Java considers 1.0 as a `double`.  We can convert the `double` by declaring a new variable that changes the `double` to an `int`.  **Casting** is converting from one data type to another, such as from a *double* to an *int*, potentially losing data.

```java
double temp = 98.6;
int newTemp = (int)temp;  // newTemp = 98 (truncated, NOT rounded)
```

```java
double a = 3.9;
int b = (int) a;
System.out.println(b); // b is 3

double c = -4.8;
int d = (int) c;
System.out.println(d); // d is -4
```
In both cases, the digits to the right of the decimal are is just chopped off:


>
>	To fix this, you can use `Math.round(x)` ***(we will get to this later, as a class)***or you can add .5 to correct the problem.
>
>
>	`double a = 3.9;`
>	`int b = (int) a + .5;`
>   `System.out.println(b); // b is 4`
>	`double c = -4.8;`
>	`int d = (int) c + .5;`
>   `System.out.println(d); // d is -5`
>

You will need to be familiar with some terms:

- [ ] **widening** — converting from a smaller data type to a larger: `byte` → `short` → `char` → `int` → `long` → `float` → `double`
- [ ] **narrowing** — converting from a larger data type to a smaller: `double` → `float` → `long` → `int` → `char` → `short` → `byte`

In this instance, we 'narrowed' the value of temp.  There is another term that you need to be familiar with and it is called **casting**.  Casting is converting from one data type to another, such as from a *double* to an *int*, potentially losing data. 

Take a look at this program:

```java
public class CastingEggs {
  public static void main(String args[]) {
    int eggs = 9;
    int dozen = 12;// the variable dozen will not change

    System.out.println("Total eggs = " + eggs/dozen + " dozen");
    System.out.println("Total eggs = " + eggs/ (double)dozen + " dozen");
    System.out.println("Total eggs = " + (double)eggs/ dozen + " dozen");

// Example output:
// Total eggs = 0 dozen
// Total eggs = 0.75 dozen
// Total eggs = 0.75 dozen

```
We know that we don't have 0 eggs.  We can rewrite our program to show how many eggs we have in decimal form.

### Assignment 1.5.1 — FivePlanetTravel

You will explore the PlanetTravel program called **FivePlanetTravel**. The program is set up to plan a five-planet tour!

**Starter Code:**

```java
/* 
 * Activity 1.1.5
 */
public class FivePlanetTravel
{
  public static void main(String[] args)
  {
    // theplanets.org average distance from earth to the planets
    int mercury = 56974146;
    int venus = 25724767;
    int mars = 48678219;
    int jupiter = 390674710;
    int saturn = 792248270;
    // number of planets to visit
    int numPlanets = 5;
    // speed of light and our speed
    int lightSpeed =  670616629;
    lightSpeed /= 10;
    // total travel time
    double total = 0;

    /* your code here */

    System.out.println("Travel time to ...");
    System.out.println("Mars: " + mars / (double) lightSpeed + " hours");
    total +=  mars / (double) lightSpeed;


    int average = (int)(total / numPlanets);
    System.out.println("Total travel time:" + total);
    System.out.println("Average travel time: " + average);
  }
}
```

**Example Output:**

```
Travel time to ...
 Mercury 0 hours
 Venus: 0 hours
 Mars: 0 hours
 Jupiter: 5 hours
 Saturn:11 hours
Total travel time:16.0

Travel time to ...
 Mercury: 0.8495784968765016 hours
 Venus: 0.38359870949813324 hours
 Mars: 0.7258725410056196 hours
 Jupiter: 5.825604352006665 hours
 Saturn: 11.813728535388819 hours
Total travel time:19.59838263477574

Average travel time: approximatley 4 hours.
```

Your output should look similar to the example above. You will write a **widening algorithm** that shows the travel time to and from all planets using casting. The one rule is that you must use the provided code and **not change any provided data types**.

---

## 1.6 Compound Assignment Operators

*(See section 1.4 — covered in depth with compound assignment operators and prefix/postfix increment/decrement.)*

---

## 1.7 Application Program Interface (API) and Libraries

<details>
<summary>📌 Standards — 1.7</summary>

| Standard | Description |
| -------- | ----------- |
| ICT 4.0 | Technology — use electronic tools and reference materials |
| ICT 4.1 | Use electronic reference materials to gather information |
| ICT 4.5 | Research technological advances in computing |
| ICT 10.9 | Use common industry-standard software applications |
| C4.2 | Describe interaction of programming languages and protocols |
| C4.3 | Identify and use IDEs and authoring tools |
| CRP 4 | Apply technology to enhance productivity |
| CRP 11 | Employ valid and reliable research strategies |

</details>

- [ ] Understand what an API is and how Java libraries provide pre-built functionality.
- [ ] Import and use packages from the Java standard library.

Java's standard library (API) provides pre-built classes and methods organized into packages:

| Package | Purpose |
| ------- | ------- |
| `java.util` | Scanner, ArrayList, Random, etc. |
| `java.lang` | String, Math, Integer, Double (automatically imported) |
| `java.time` | LocalDate, LocalTime, DateTimeFormatter |

You import packages using the `import` statement:

```java
import java.util.Scanner;
import java.util.ArrayList;
```

---

## 1.8 Documentation with Comments

<details>
<summary>📌 Standards — 1.8</summary>

| Standard | Description |
| -------- | ----------- |
| ICT 2.0 | Communications — communicate effectively in written formats |
| ICT 2.4 | Demonstrate elements of written and electronic communication |
| ICT 2.5 | Communicate to multiple audiences using a variety of formats |
| ICT 7.5 | Apply high-quality techniques to product design and development |
| C4.11 | Document development work for various audiences |
| CRP 2 | Communicate clearly, effectively, and with reason |
| CRP 7 | Act as a responsible and contributing citizen and employee |

</details>

- [ ] Understand how to properly comment code.
- [ ] Implement precondition and postcondition commenting to summarize methods.
- [ ] Use single-line comments to make code more readable.
	- [ ] I will practice industry standard commenting standards in my programs.

There are different ways to create a comment in Java:

`// Using these two slashes will create a single-line comment.`

`/* Using the slash and an asterisk will create a multi-line comment. */`

`/** Using the slash and two asterisks and end with asterisk and a slash will create a Javadoc comment. */

`/** Using the slash and two asterisks will create a Java API documentation comment. **/`

With **every** .java project that you submit, include the following block comment at the top of your main file:

```java
/*=============================================================================
 |   Assignment:  Program #[n]:  [Assignment Title]
 |       Author:  [Your Name]
 |      Partner:  [Partner's Name]
 |
 |  Course Name:  [Course Name]
 |   Instructor:  John Smith
 |     Due Date:  [Due Date and Time]
 |
 |  Description:  [Describe the program's goal, IN DETAIL.]
 |
 |     Language:  Java version 8
 |
 | Deficiencies:  [If you know of any problems with the code, provide
 |                details here, otherwise clearly state that you know
 |                of no unsatisfied requirements and no logic errors.]
 *===========================================================================*/
```

---

## 1.9 Method Signatures

<details>
<summary>📌 Standards — 1.9</summary>

| Standard | Description |
| -------- | ----------- |
| ICT 5.8 | Create and use algorithms and solve problems |
| ICT 5.9 | Deconstruct large problems into components |
| C4.8 | Use OOP concepts: properties and methods |
| C4.9 | Create programs using procedures and functions with parameters |
| CRP 1 | Apply appropriate technical skills and academic knowledge |
| CRP 5 | Utilize critical thinking to make sense of problems |

</details>

- [ ] Understand what a method signature consists of.
- [ ] Distinguish between void methods and non-void (return) methods.

A **method signature** in Java includes:
- Access modifier (`public`, `private`, etc.)
- Return type (`void`, `int`, `String`, etc.)
- Method name
- Parameter list (type and name of each parameter)

```java
public int add(int a, int b)    // signature: name=add, params=int,int, returns=int
public void printName(String s) // signature: name=printName, params=String, returns=nothing
```

| | Static method | Non-static method |
| --- | --- | --- |
| Definition | Belongs to the class; can be called without creating an object. | Belongs to an instance of the class. |
| Accessing members | Can only access static data members and static methods. | Can access static and non-static members. |
| Overriding | Cannot be overridden (compile-time binding). | Can be overridden (runtime/dynamic binding). |

---

## 1.10 Calling Class Methods

<details>
<summary>📌 Standards — 1.10</summary>

| Standard | Description |
| -------- | ----------- |
| ICT 5.8 | Create and use algorithms |
| ICT 5.9 | Deconstruct large problems |
| C4.6 | Use proper programming language syntax |
| C4.9 | Create programs using control structures, procedures, and functions |
| CRP 1 | Apply appropriate technical skills and academic knowledge |
| CRP 5 | Utilize critical thinking to make sense of problems |

</details>

- [ ] Call static methods from existing classes (e.g., `Math` class).
- [ ] Distinguish between class (static) methods and instance methods.

```java
// Calling a static class method
int result = Math.abs(-5);     // No object needed
double r = Math.random();      // Returns 0.0 to < 1.0
```

---

## 1.11 Math Class

<details>
<summary>📌 Standards — 1.11</summary>

| Standard | Description |
| -------- | ----------- |
| ICT 1.0 | Academics — apply academic standards |
| ICT 4.1 | Use electronic reference materials |
| ICT 5.8 | Create and use algorithms |
| C4.6 | Use proper programming language syntax |
| C4.9 | Create programs using procedures and functions |
| CRP 1 | Apply appropriate technical skills and academic knowledge |
| CRP 5 | Utilize critical thinking to make sense of problems |

</details>

- [ ] Use the `Math` class to perform common mathematical operations.

| Method | Description | Example |
| ------ | ----------- | ------- |
| `Math.abs(x)` | Absolute value | `Math.abs(-3)` → `3` |
| `Math.pow(a, b)` | a raised to power b | `Math.pow(2, 3)` → `8.0` |
| `Math.sqrt(x)` | Square root | `Math.sqrt(16)` → `4.0` |
| `Math.random()` | Random double [0.0, 1.0) | `Math.random()` |
| `Math.round(x)` | Round to nearest long | `Math.round(3.7)` → `4` |
| `Math.min(a, b)` | Smaller of two values | `Math.min(5, 3)` → `3` |
| `Math.max(a, b)` | Larger of two values | `Math.max(5, 3)` → `5` |

### Activity 1.11.1 — Roller Coaster Simulator

**Project Overview:**

Students will write a program that helps a theme park design safe roller coasters based on physics-related math. Use `Math.random()` and `Math.round()` to simulate the experience of riding a roller coaster, generating random values for speed, height, and rating.  The user (acting as an engineer) inputs the parameters of a coaster hill, and the program will:

* Calculate speed at the bottom of the hill
* Estimate time to fall using height
* Warn if g-forces exceed safety limits
* Round values for display


**Concepts Covered:**

* `Math` class: `Math.pow`, `Math.sqrt`, `Math.abs`, `Math.max`, `Math.min`
* `Scanner` for input
* Decision-making and problem-solving
* Realistic application of physics/math concepts


**Key Functionalities:**

<img width="422" height="490" alt="Image" src="https://github.com/user-attachments/assets/5e02c085-c41f-4ab5-a17b-63a53ce3ce0f" />


---

**Example Output**

```java
Welcome to the Roller Coaster Simulator
Enter hill height (in meters): 50
Enter slope angle (in degrees): 40
Enter track length (in meters): 100

--- Results ---
Estimated Speed at Bottom: 31.30 m/s
Time to Fall: 3.19 seconds
Estimated G-force in curve: 10.0 Gs TOO DANGEROUS!

Recommendation: Reduce hill height or increase curve radius.

--- Rounded Data ---
Speed Rounded Up: 32.0 m/s
Time Rounded Down: 3.0 sec
```

---


```java
public class RollerCoasterSimulator {
    private static final double GRAVITY = 9.8; // m/s^2 // DO NOT CHANGE

	// Attributes (height, speen, time, gForce, angle, trackLength)


    // Constructor


    // Perform all calculations


    // Return calculated results to main


    // Helper method for safety

}


import java.util.Scanner;

public class Main {
    public static void main(String[] args) {


		// Use Scanner to get inputs for Speed, time and GForce


        // Get user inputs


        // Create an instance of RollerCoasterSimulator
        

        // Get and display results
        double speed = sim.getSpeed();
        double time = sim.getTime();
        double gForce = sim.getGForce();


        if (!sim.isSafe()) {
            // if speed Gforce is too excessive print "TOO DANGEROUS!"
			// Recommend that the user make changes to height or curve
			// else print "Safe for riders!"



		System.out.println("\n--- Rounded Data ---");
		// Round speed up
		// Round time down 

        input.close();
    }
}
```
Submit your java program code and your test cases that demonstrates your program works as intended.



### Activity 1.11.2 — Race Car

Apply `Math.abs()` and `Math.pow()` to a race car simulation that computes distance and speed.

---

## 1.12 Objects: Instances of Classes

<details>
<summary>📌 Standards — 1.12</summary>

| Standard | Description |
| -------- | ----------- |
| ICT 5.9 | Deconstruct large problems into components to solve |
| ICT 5.10 | Use multiple layers of abstraction |
| C4.5 | Demonstrate awareness of the OOP paradigm |
| C4.8 | Use OOP concepts: properties, methods, and inheritance |
| CRP 1 | Apply appropriate technical skills and academic knowledge |
| CRP 5 | Utilize critical thinking to make sense of problems |

</details>

- [ ] Explain the relationship between a class and an object
	- [ ] I will be able to create a poster demonstrating classes and objects

A *class* is a blueprint of an object. An *object* is an instance of a class. What we define as a class determines what objects will be associated with the class and how things will operate within it.

We can also create a *method* that will call the attributes within a class. **NOTE:** Method and behavior are interchangeable terms.

**Mr Potato Head Activity:**

    Split into pairs.
    Each pair will create:
        a potato head character.
        a list describing what it is, what characteristics it has, and what it can do (actions).
            write PROPERTIES / characteristics
            write METHODS / actions
    What are the object oriented concepts to your Mr. Potato Head?
        Class:
        Object:
        Properties:
        Methods:
    Visually demonstrate the properties of inheritance by creating a subclass(es) of your Superclass.

**Things to Remember:**
- [ ] Properties are the characteristics of your objects
- [ ] Methods are the actions that your object can take.
- [ ] A class is like a blueprint or a recipe.
- [ ] A class is used to create an instance of a class, called an object.

---

## 1.13 Object Creation and Storage (Instantiation)

<details>
<summary>📌 Standards — 1.13</summary>

| Standard | Description |
| -------- | ----------- |
| ICT 5.9 | Deconstruct large problems into components to solve |
| ICT 5.10 | Use multiple layers of abstraction |
| C4.5 | Demonstrate awareness of the OOP paradigm |
| C4.7 | Use various data structures including objects |
| C4.8 | Use OOP concepts: properties, methods, and inheritance |
| C4.9 | Create programs using control structures and variables |
| CRP 1 | Apply appropriate technical skills and academic knowledge |
| CRP 5 | Utilize critical thinking to make sense of problems |

</details>

- [ ] Explain the relationship between a class and an object
- [ ] Identify different constructor signatures and create objects using them
- [ ] Use variables to represent object references
	- [ ] I will be able to write more complex programs using classes and objects

A **constructor** in Java is a special method that is used to initialize objects. The constructor is called when an object of a class is created.

**Null Objects**

Null is a reserved keyword in Java for literal values. It is a value that shows that the object is referring to nothing. This will create a **NullPointerException** error if called.

```java
Car emptyCar = null;
Car myCar = new Car(5.6);
Car yourCar = new Car();
Car ourCar = new Car(2);

System.out.println("myCar=" + myCar);       // myCar=Car@6d06d69c
System.out.println("emptyCar=" +emptyCar);  // emptyCar=null
```

![Constructors_image](https://user-images.githubusercontent.com/12989939/195926575-c2a49adc-afdb-4ef0-91e1-c5d93fb54539.PNG)

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

## 1.14 Calling Instance Methods

<details>
<summary>📌 Standards — 1.14</summary>

| Standard | Description |
| -------- | ----------- |
| ICT 5.8 | Create and use algorithms and solve problems |
| ICT 5.9 | Deconstruct large problems into components |
| C4.8 | Use OOP concepts: properties and methods |
| C4.9 | Create programs using procedures and functions with parameters |
| CRP 1 | Apply appropriate technical skills and academic knowledge |
| CRP 5 | Utilize critical thinking to make sense of problems |

</details>

- [ ] Understand how to call methods on an object.
- [ ] Distinguish between calling void and non-void instance methods.

```java
// Calling an instance method on an object
String greeting = "Hello, World";
int len = greeting.length();        // non-void: returns a value
System.out.println(greeting);       // void: performs an action
```

---

### Activity 2.1.1 — Sports Class

Write a class related to a professional sport (Football, soccer, basketball, etc.)

- Create a class related to a professional sport of your choice
- Create attributes/instance variables for the class
- Create a constructor for your class
- Create an instance of the class
- Create a `toString()` method to print out the object

**Example Output:**
```
Name: Marcelo Vieira da Silva Jr.
Team: Real Madrid
Position: left-back
Number: 12
Goals: 0
Starting: True
```

---

### Activity 2.1.2 — Not Another Cake

**Directions:** Look at the `Cake.java` program below. Create a 1-tier cake, 2-tier cake, and a 3-tier cake. Print out the reference location of the constructor. A solution is provided if you get stuck.

**Submission Requirements:**
- Create a **unique program of your choice** (not another Cake)
- Create four constructors:
  - default constructor (no parameters)
  - constructor with 1 parameter
  - constructor with 2 parameters
  - constructor with 3 parameters
- Use appropriate comments throughout your program
- Use `toString()` method to display all objects
- Submit all program files as `.java` files (Main.java, YourClass.java, etc.)

**Cake.java — Reference Program:**

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

**Main.java — Starter Code:**

```java
public class Main
{
  public static void main(String[] args)
  {
    // create a double variable named 't' and assign a value of 3.


    // create a variable that can store the object reference myCake created with new Cake(t)


    // Create two more object references using yourCake and ourCake constructors


    // Print out all three Cake object reference variables


    // Initialize the emptyCake variable with a value of null


  }
}
```

**Sample Output:**

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

---

### Activity 2.1.3 — Dog Pizza

- Complete `Dog.java` by filling in the attributes and creating the constructor
- Instantiate 3 pizzas and print them out by:
  - Creating a `Pizza` class
  - Filling out the attributes
  - Creating the constructor
  - Creating 3 pizza objects and printing them out
  - Use the `toString()` method to print the pizza size, type, and toppings:
    - 12 inch Veggie pizza with Tomatoes, onions, olives
    - 15 inch Cheese pizza with Cheese
    - 20 inch Meat pizza with Pepperoni, sausage, bacon

**Main.java — Starter Code:**

```java
class Main 
{
    public static void main(String[] args) 
    {
        Dog golden = new Dog("Golden Retriever", "Sammy");
        System.out.println(golden);
        
        // instantiate 3 pizzas below and print them out


    }
}
```

**Dog.java — Starter Code:**

```java
public class Dog 
{
    // attributes

    // constructor

    // This method should work after you add the
    // new instance variable and update the constructor.
    // DO NOT modify this method.
    public String toString()
    {
        return name + " is a " + breed;
    }
}
```

**Pizza.java — Starter Code:**

```java
// Your code here
```

---

### Activity 2.1.4 — Bicycle Revisited

1. Create a `Bike` class with the following attributes:
   - `kind` (Cruiser, road bike, tricycle, hybrid)
   - `gear` (single, three-speed, 10 speed, 30 speed)
   - `size` (20, 22, 26, 28)
   - `cost` (175.99, 300.00, 1049.00, 1500.00)
2. Create a no-argument constructor. Default values are: Cruiser, 26, and 175.99
3. Create a constructor that takes only `kind` and `size` as parameters
4. Create a constructor that takes all four parameters
5. Create two more objects to match the sample output

**Sample Output:**

```
My bicycle has 1 gear and is painted white!
Pedaling to accelerate!
My cruiser has 10 gears costs $150.
Pedaling to accelerate.
My tricycle has 3 gears costs $300.
Pedaling to accelerate.
```

---

### Activity 2.1.5 — Constructor Practice

1. Create a class called `Student` with the following instance variables:
   - `name` (String)
   - `age` (int)
   - `gpa` (double)

2. Write **at least four constructors**:
   - A no-argument constructor that sets all values to defaults (`"Unknown"`, `0`, `0.0`)
   - A constructor that takes only a name
   - A constructor that takes a name and age
   - A constructor that takes all three values (name, age, gpa)

3. Write a `toString()` method that returns the student information as a single string:
   ```
   Student{name='Alice', age=16, gpa=3.5}
   ```

4. Create a `Main` class with a `main` method. In `main`:
   - Create at least one `Student` object using each constructor
   - Print each object

**Example Output:**

```
Student{name='Unknown', age=0, gpa=0.0}
Student{name='Alice', age=0, gpa=0.0}
Student{name='Bob', age=17, gpa=0.0}
Student{name='Charlie', age=18, gpa=3.7}
```

---

## 1.15 String Manipulation

<details>
<summary>📌 Standards — 1.15</summary>

| Standard | Description |
| -------- | ----------- |
| ICT 2.0 | Communications — communicate effectively in written formats |
| ICT 2.4 | Demonstrate elements of written and electronic communication |
| ICT 2.5 | Communicate to multiple audiences using a variety of formats |
| ICT 5.8 | Create and use algorithms |
| ICT 5.9 | Deconstruct large problems |
| C4.6 | Use proper programming language syntax |
| C4.9 | Create programs using control structures and variables |
| CRP 2 | Communicate clearly, effectively, and with reason |
| CRP 5 | Utilize critical thinking to make sense of problems |

</details>

- [ ] Perform String operations including concatenation and comparisons.
- [ ] Use built-in String methods.

**String Methods**

| Method | Description |
| ------ | ----------- |
| `str.length()` | Returns number of characters |
| `str.substring(i, j)` | Returns substring from index i to j-1 |
| `str.indexOf(str2)` | Returns first index of str2, -1 if not found |
| `str.equals(str2)` | Returns true if strings have equal content |
| `str.compareTo(str2)` | Compares strings lexicographically |
| `str.toLowerCase()` | Returns lowercase version |
| `str.toUpperCase()` | Returns uppercase version |
| `str.trim()` | Removes leading/trailing whitespace |

**String Concatenation:** You can use the `+` operator to combine strings and other values:

```java
String name = "World";
System.out.println("Hello, " + name + "!");  // Hello, World!
```

**Important: Object Equality with Strings**

`==` compares object references (memory locations), while `.equals()` compares the actual content of strings:

```java
String s1 = new String("HELLO");
String s2 = new String("HELLO");
System.out.println(s1 == s2);      // false (different memory locations)
System.out.println(s1.equals(s2)); // true  (same content)
```

**Aliasing:** When `shape3 = shape1`, both point to the same memory address. Any change to one changes the other. In Java, this is known as **aliasing**.

### Activity 2.7.1 — Wordplay

Starter Files: [WordPlay.zip](https://github.com/AP-CSA-JAVA/CSA_JAVA-Course/files/13031419/WordPlay.zip)


You will write a program that asks the user to enter their first name and their last name, 
separated by a space. Then it asks the user to enter a phrase. You will write and call the following:

| Methods |  |
| --------- | --------- |
| getFirstName() | returns the first name from the full name of user |
| getLastName() | returns the last name from the full name of user |
| getInitials() | returns the initials from the full name of user |
| makePassword() | returns a password created by the following: length of first name + first half of first name + last name + last half of last name + length of last name |
| ceeBee() | returns the phrase with all the c's replaced by b's |

**Hint:** You may want to use API documentation to understand: `split()`, `charAt()`, `substring()`, `replace()`

**Sample Output:**

```java
Enter your first name and last name, separated by a space: 
Bernard Heally
Enter a phrase: 
Give papa a proper cup of coffee in a copper coffee cup.

Your first name is Bernard
Your last name is Heally
Your initials are BH

Your new password: 8BernHeallylly5

Give papa a proper bup of boffee in a bopper boffee bup.
```

Submit your program code as a java file and test cases as 1 pdf.


### Activity 2.7.2 — Speaking


Starter files: [Speaking.zip](https://github.com/AP-CSA-JAVA/CSA_JAVA-Course/files/13031428/127-Speaking.zip)

Create a program that will ask the user for their name and their partners name. Create the following:

| Methods |  |
| ------- | ---- |
| yelling() | returns a name in all caps |
| whisper() | returns a name in all lower case |
| pigLatin() | takes a word and take the first letter and put it at the end of the word and add the letters “ay” to the end. For example, “pig” becomes “igpay” |
| nameJoin() | takes two parameters, name1 and name2, and combines them by taking the first half of name1 and second half of name2 and combine them |


**Sample Output**
```java
Enter your first name:
 Samantha
Enter your partner's name:
 Russell

Yelling your name: SAMANTHA
Whispering your partner's name: russell
Your name in Pig Latin: amanthaSay
Your partner's name in Pig Latin: ussellray
Your team name is Samaell
```

Submit your program code as a java file and test cases as 1 pdf.



---

## 1.16 Formatting and StringBuilder — *Oracle Foundations 1Z0-811*

<details>
<summary>📌 Standards — 1.16</summary>

| Standard | Description |
| -------- | ----------- |
| ICT 2.0 | Communications — communicate effectively in written and electronic formats |
| ICT 2.4 | Demonstrate elements of written and electronic communication |
| ICT 2.5 | Communicate to multiple audiences using a variety of media |
| ICT 10.1 | Interpret and explain ICT-specific terminology |
| C4.6 | Use proper programming language syntax |
| C4.9 | Create programs using control structures and variables |
| CRP 2 | Communicate clearly, effectively, and with reason |
| CRP 4 | Apply technology to enhance productivity |

</details>

> **Oracle Exam Note:** `String.format()`, `printf()`, and `StringBuilder` are covered on the Oracle Java Foundations exam (1Z0-811).

### String Formatting

Java provides two main ways to format output:

**`System.out.printf()`** — formatted printing:

```java
double price = 9.99;
String name = "Widget";
System.out.printf("%-15s $%.2f%n", name, price);
// Output: Widget          $9.99
```

**`String.format()`** — returns a formatted String:

```java
String result = String.format("Name: %s, Age: %d, GPA: %.1f", "Alex", 17, 3.85);
System.out.println(result);
// Output: Name: Alex, Age: 17, GPA: 3.9
```

| Format Specifier | Meaning |
| :---: | ------- |
| `%d` | Integer |
| `%f` | Floating-point (default 6 decimal places) |
| `%.2f` | Float with 2 decimal places |
| `%s` | String |
| `%n` | Newline |
| `%-10s` | Left-align in 10-char field |
| `%10s` | Right-align in 10-char field |

### StringBuilder

A **`StringBuilder`** is a mutable sequence of characters. Unlike `String`, it can be modified without creating new objects — making it efficient for building strings in loops.

```java
StringBuilder sb = new StringBuilder();
sb.append("Hello");
sb.append(", ");
sb.append("World");
sb.append("!");
System.out.println(sb.toString());  // Hello, World!
```

**Key `StringBuilder` Methods:**

| Method | Description |
| ------ | ----------- |
| `append(x)` | Appends x to the end |
| `insert(i, x)` | Inserts x at index i |
| `delete(start, end)` | Removes chars from start to end-1 |
| `reverse()` | Reverses the sequence |
| `length()` | Returns current length |
| `toString()` | Converts to a regular String |

```java
// Efficient table builder
StringBuilder table = new StringBuilder();
String[] names = {"Alice", "Bob", "Carol"};
int[] scores = {95, 87, 92};

for (int i = 0; i < names.length; i++) {
    table.append(String.format("%-10s %d%n", names[i], scores[i]));
}
System.out.print(table.toString());
```

### Activity 1.16.1 — Formatted Report
Create a formatted student report card that displays names, scores, and letter grades in aligned columns using `String.format()`.

### Activity 1.16.2 — StringBuilder Reverse
Use `StringBuilder` to write a program that checks whether a given word is a palindrome.

---

## 1.17 Wrapper Classes — Integer and Double

<details>
<summary>📌 Standards — 1.17</summary>

| Standard | Description |
| -------- | ----------- |
| ICT 1.0 | Academics — apply academic standards |
| ICT 5.8 | Create and use algorithms |
| ICT 5.9 | Deconstruct large problems into components |
| C4.4 | Identify and apply data types and encoding |
| C4.7 | Use various data structures and objects |
| C4.6 | Use proper programming language syntax |
| CRP 1 | Apply appropriate technical skills and academic knowledge |
| CRP 5 | Utilize critical thinking to make sense of problems |

</details>

- [ ] Use wrapper classes to convert between primitive and reference types.
- [ ] Understand autoboxing and unboxing.

| Wrapper Class | Primitive | Useful Methods |
| ------------- | --------- | -------------- |
| `Integer` | `int` | `Integer.parseInt(str)`, `Integer.MAX_VALUE` |
| `Double` | `double` | `Double.parseDouble(str)` |
| `Boolean` | `boolean` | `Boolean.parseBoolean(str)` |

```java
// Autoboxing: int → Integer automatically
int x = 5;
Integer boxed = x;

// Unboxing: Integer → int automatically
Integer y = 10;
int unboxed = y;

// Parsing strings to numbers
String numStr = "42";
int num = Integer.parseInt(numStr);
double d = Double.parseDouble("3.14");
```

### Activity 1.17.1 — Wrapper Classes

Directions: Create a class called WrapperExamples that will demonstrate each of the following:

    Integer Constructor: Create an Integer object from a primitive int.

    intValue() Method: Retrieve the primitive int value from the Integer object.

    Double Constructor: Create a Double object from a primitive double.

    doubleValue() Method: Retrieve the primitive double value from the Double object.

    Maximum Double Value: Display the maximum value for a double.

    Minimum Double Value: Display the minimum value for a double.

    Autoboxing: Automatically converting a primitive int to an Integer object.

    Unboxing: Automatically converting an Integer object back to a primitive int.

Answer the following questions as a .txt file.

    What happens if you try to unbox a null Integer? Why?

    How can you handle situations where a wrapper class might be null before performing unboxing?

    Can you think of a situation where autoboxing might cause performance issues? Explain.

    What happens when you try to change the value of MAX_VALUE and MIN_VALUE?

Submit your java & txt files. Add in-line comments to describe each example. Provide a screenshot of your executed program.

---

## Numbers Riddle Project

In this project, you will write a program that incorporates the Java™ concepts you have learned throughout this unit.

<details>
<summary>📌 Standards — Numbers Riddle Project</summary>

| Standard | Description |
| -------- | ----------- |
| ICT 5.8 | Create and use algorithms and solve problems |
| ICT 5.9 | Deconstruct large problems into smaller components |
| ICT 7.5 | Apply high-quality techniques to product design and development |
| C4.4 | Identify and apply data types and encoding |
| C4.6 | Use proper programming language syntax |
| C4.9 | Create programs using control structures and variables |
| C4.11 | Document development work using comments |
| C5.4 | Design a solution to a problem |
| C5.5 | Implement a solution |
| CRP 1 | Apply appropriate technical skills and academic knowledge |
| CRP 5 | Utilize critical thinking to make sense of problems |

</details>

- [ ] Apply coding concepts you have learned up to this point.
- [ ] Apply a programming development process to create your first project.
	- [ ] I will demonstrate my understanding of Unit 1 by writing a program

**The Numbers Riddle**

> Choose any integer, double it, add six, divide it in half, and subtract the number you started with. The answer is always three!

Your program must include:
- [ ] Use of camelCase naming convention
- [ ] Both multiline and inline comments
- [ ] The `print` and `println` methods
- [ ] Variables (appropriately named)
- [ ] Arithmetic expressions
- [ ] The compound assignment operator
- [ ] Conversion between `int` and `double` data types


**Example:** 

```java
x = 3 // choose an integer
x = 3 * 2 // double it
x = 6 + 6 // add six
x = 12 / 2 // divide it in half
x = 6 - 3 // subtract the number you started with
x = 3 // answer is always three!
```


**Important:** No shortcuts! You know the answer to the riddle will always be three, but your program is being used to test and validate the riddle. You should print the result of all calculations, not just “3.”

**Requirements of this project**

Your program should allow any number to be stored in a variable and printed out. Then, the program should output its double, output six added to it, output that number divided in half, and, finally, output that number subtracted by the original number. In this way, the program displays each calculation, and of course, the final result of three.

Looking back at previous programs and the requirements stated above, you know you will need:
- [ ] a class definition header that matches the file name
- [ ] the main method of the program
- [ ] a variable defined as the “starting number you choose”
	- [ ] You may use a `scanner` class
- [ ] an algorithm(s) that processes the chosen number
- [ ] a print statement displaying the number you chose
- [ ] a print statement displaying each calculation and the final result
- [ ] comments in your code
  - [ ] Include Main Block method ~ **See** - [Java Style Guidelines](https://ap-csa-java.github.io/CSA_JAVA-Course/home.html)
- [ ] appropriate use of camelCase

**Test Cases**
Create variables and choose numbers that match the following number types to verify your program works for each.  
- [ ] Positive Integer
- [ ] Negative Integer
- [ ] Zero
- [ ] Positive Double
- [ ] Negative Double

**Document the output and submit your program as a java file.**
