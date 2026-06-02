# Unit 1 - Using Objects and Methods
*AP Exam Weighting: 15–25%*

### AP Computer Science A — Assignment Rubric


---


<details>
<summaryAssignment Header></summary>

All submitted documents and `.java` files must include the header below. This mirrors the block comment required in `Main.java` and follows the standard used by university CS departments.

```
Name:          [Your Full Name]
Partner:       [Partner's Full Name, or "None"]
Course:        AP Computer Science A
Instructor:    [Instructor Name]
Assignment:    [Assignment Number — Assignment Title]
Due Date:      [Month Day, Year]
```

**Example:**
```java
Name:          Jordan Smith
Partner:       Alex Rivera
Course:        AP Computer Science A
Instructor:    [Instructor Name]
Assignment:    1.3.1 — Calculate Your Weight on Jupiter
Due Date:      September 12, 2026
```

> This header must appear at the top of your `Main.java` block comment AND on your Test Cases document. Submissions missing the header will be penalized *one point*.

---

**Submission Requirements**

All assignments require the following unless otherwise stated:

- [ ] All `.java` source file(s)
- [ ] Test Cases document showing inputs, expected output, actual output, and Pass/Fail result

***Projects*** will have their own dedicated rubric and submission instructions.

---

**5-Point Assignment Rubric**

| Points | Grade | Compilation & Output | Documentation & Style | Submission |
|:------:|:-----:|----------------------|-----------------------|------------|
| **5** | Full Credit | Program compiles and runs without errors or warnings. Output matches expected results for **all** test cases. | Block comment header fully completed. Meaningful variable names, camelCase convention, proper indentation. Inline and multi-line comments present throughout. | All required `.java` files and test cases submitted with completed assignment header. |
| **4** | Near Full Credit | Program compiles and runs. Output is correct for most test cases with **one** minor error or omission. | Block comment header complete. Comments mostly present. Minor style or formatting inconsistency. | All required files submitted. Assignment header present. |
| **3** | Partial Credit | Program compiles but produces incorrect output for **some** test cases, or compiles with warnings. | Limited comments. Block comment header partially completed. Variable names or formatting inconsistent. | Most required files submitted. Test cases incomplete or partially documented. |
| **2** | Minimal Credit | Program has syntax or logic errors that cause significant incorrect output, or fails to fully compile. | Little to no commenting. Block comment header missing or blank. Poor variable naming or formatting. | A required `.java` file or test cases document is missing. Assignment header absent. |
| **1** | Attempted | Code submitted shows a clear attempt but does not compile or run. | Minimal or no documentation present. | At least one file submitted, but submission is largely incomplete. |
| **0** | No Credit | Nothing submitted, file is empty, or code is unrelated to the assignment. | N/A | N/A |

---

**Academic Integrity Policy**

> **Any submission that violates academic integrity will receive no credit and will be referred for disciplinary action in accordance with school policy.**

The following are considered academic integrity violations in this course:

- Submitting another student's code as your own
- Copying code from the internet without citation and modification
- Allowing another student to copy your code
- Using AI-generated code and submitting it as your own work without instructor approval
- Sharing your source files with another student outside of an approved partner assignment

**Approved Collaboration:** Discussing concepts, approaches, and debugging strategies with classmates is encouraged. Writing or sharing actual code is not permitted unless the assignment is explicitly designated as a partner assignment.

**Partner Assignments:** Both partners must be listed in the assignment header. Both partners are equally responsible for the integrity of the submitted work.

---

**Late Work Policy**

Late assignments are graded using the same rubric above with no grade penalty. Submit your best work regardless of when it is turned in.

---

**Grading Notes**

- A program that does not compile cannot earn higher than a **2**.
- A missing test cases document cannot earn higher than a **4**.
- A missing block comment header deducts **1 point** from the earned score.
- A missing assignment header deducts **1 point** from the earned score.
- Style and documentation are evaluated holistically — occasional lapses do not automatically lower a grade, but a consistent pattern does.
</details>


---


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
public static void main(String args[]) // `public` is an access specifier.
```


> ### Assignment 1.1.1 — My Timeline
>
> Create a personal timeline of at least seven meaningful events in your life using the `print` and `println` methods. The timeline will proceed vertically — earlier events near the top, later events near the bottom. Make it look professional. HINT: use `\t`
>
> ```
> Year                 Age                    Description
> 1971              0 years old               Born in Long Beach
> 1976              5 years old               Started kindergarten
> 1989             17 years old               Graduated high school
> 1995             24 years old               Graduated college Long Beach State
> 1998             27 years old               Got Married
> 1998             27 years old               Began teaching career
> 2021             50 years old               First year at CAMS
> ```
>
> Include seven meaningful events. No repetitive events such as "started kindergarten, started first grade, etc."
> 

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

>
> ### Assignment 1.2.1 — Allowance
>
> Write a program that will determine who receives an allowance or not. Use the information below as a guide:
> - [ ] Allowance is always $30.00/week
> - [ ] Non-teenagers do not receive an allowance
> - [ ] Jon is 16 years old; Ed is 12 years old; Michael was born four years before Jon
> - [ ] Print out who receives an allowance and who does not using `int`, `double`, and `boolean` variables.
> - [ ] Submit your program as a `.java` file and include test cases that your program worked as intended
>

---

>
> ### Assignment 1.2.2 — Scanner Class
> 
> The Scanner class is a package that provides primitive input within Java programs. It can be found in the [java.util Package](https://docs.oracle.com/javase/8/docs/api/java/util/package-summary.html).
> 
> - [ ] To create an object of the Scanner class, we must pass `System.in` as the defined object.
> - [ ] To read the data type we need to use the function `next<DataType>()`. For example, to read an `int` use `nextInt()`.
> - [ ] To read strings, use `nextLine()`.
> - [ ] Create four questions that will ask the user for a `String`, `int`, `double`, and a `boolean`.
> - [ ] Submit your program as a `.java` file and include test cases that your program worked as intended
> 

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

>
> ### Assignment 1.3.1 — Calculate Your Weight on Jupiter
>
> Using the equation below, calculate what your weight would be on different planets:
>
> `weightOnPlanet = (weightOnEarth / earthGravity) × planetGravity`
> 
> | Planet | Acceleration Due to Gravity (m/sec²) |
> | :---: | :---: |
> | Earth | 9.81 |
> | Mercury | 3.59 |
> | Venus | 8.87 |
> | Mars | 3.711 |
> | Jupiter | 24.79 |
> | Saturn | 11.08 |
> | Uranus | 10.67 |
> | Neptune | 11.15 |
>
> ```java
> 
> // Starter Code.  Add 3 more planets that you will travel to.
> 
> public class GalaxyWeight
> {
> 	public static void main(String[] args) 
> 	{
>     // declare and initialize weightOnEarth, earthGravity, and jupiterGravity 
>     int weightOnEarth = 177;
>     double earthGravity = 9.81;
>     double jupiterGravity = 24.79;
>     
>     // calculate weight
>     double weightOnJupiter = weightOnEarth * jupiterGravity / earthGravity;
>     
>     // show results
>     System.out.print("Your weight on Jupiter is ");
>     System.out.print(weightOnJupiter);
>     System.out.println(" lbs.");
>   }
> }
> ```
>

---

> 
> ### Assignment 1.3.2 — Simple Math
> 
> - [ ] Create a program that will ask the user for two distinct integers
> - [ ] Use the Scanner class to receive input from the user
> - [ ] Store those values and perform addition, subtraction, multiplication, division, and modulo
> 

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

>
> ### Assignment 1.4.1 — Compound Operators
> 
> ```java
> 
> public class CompoundOperators
> {
>   public static void main(String[] args)
> {
>     int numPeople = 0;  
>     double totalYears = 0;
> 
>     double years = 11.5;  // I will soon be halfway through my junior year.
> 
>     totalYears = totalYears + years;
>     numPeople = numPeople + 1;
>   }
> }
> 
> ```
> - [ ] Rewrite the statements of the program above to use the compound assignment and/or the increment/decrement operators.
> - [ ] TODO 1) Add at least three other people to your program, such as siblings, friends, or neighbors.
> - [ ] TODO 2) Use people that are in different grades to validate your program can work for different school grades.
> - [ ] TODO 3) For their years in school, use values that indicate they will soon be halfway through their current school year, as shown in the provided code.
> - [ ] TODO 4)The average years you and your friends, siblings, neighbors have been in school.
> - [ ] TODO 5) The total days you have all been in school, assuming you spend 180 days per year in school.
> - [ ] TODO 6) The average days you have all spent in school.
> 
> ```
> **Sample Output:**
> I have 11.5 years in school and 0.5 years to graduate.
> Total people: 1, total years: 11.5
> My best friend has 10.5 years in school and 1.5 years to graduate.
> Total people: 2, total years: 22.0
> My sister has 8.5 years in school and 3.5 years to graduate.
> Total people: 3, total years: 30.5
> My neighbor has 5.5 years in school and 6.5 years to graduate.
> Total people: 4, total years: 36.0
> 
> Average years in school: 9.0
> Total days in school: 6480.0
> Average days per person: 1620.0 
> ```


---

>
> ### Assignment 1.4.2 — Average Test Score / Cashier Totals
> 
> Directions: Write two programs that will do the following:
> 
> **Average Test Score**
> - [ ] ask the user for four test scores
> - [ ] calculate and show the result
> 
> **Cashier Totals**
> - [ ] ask the user for the number of burgers sold and how much each one costs
> - [ ] ask the user for the number of fries sold and how much each costs
> - [ ] display the total items sold
> - [ ] display the total sales
> 
> **Sample Output:**
> ```
> Enter the first test score:
> 95
> Enter the second test score:
> 87
> Enter the third test score:
> 74
> Enter the forth test score:
> 75
> 
> Average test score: 82.75%
> ---------------------------------
> Enter the number of burgers ordered:
> 10
> Price of a burger:
> 5.65
> Enter the number of fries ordered:
> 4
> Price of fries:
> 1.95
> 
> Total Items Sold: 14
> Total Sales: $64.3
> ```


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



> 
> ### Assignment 1.5.1 — FivePlanetTravel
> 
> You will explore the PlanetTravel program called **FivePlanetTravel**. The program is set up to plan a five-planet tour!
> 
> **Starter Code:**
> 
> ```java
> public class FivePlanetTravel
> {
>   public static void main(String[] args)
>   {
>     // theplanets.org average distance from earth to the planets
>     int mercury = 56974146;
>     int venus = 25724767;
>     int mars = 48678219;
>     int jupiter = 390674710;
>     int saturn = 792248270;
>     // number of planets to visit
>     int numPlanets = 5;
>     // speed of light and our speed
>     int lightSpeed =  670616629;
>     lightSpeed /= 10;
>     // total travel time
>     double total = 0;
> 
>     /* your code here */
> 
>     System.out.println("Travel time to ...");
>     System.out.println("Mars: " + mars / (double) lightSpeed + " hours");
>     total +=  mars / (double) lightSpeed;
> 
> 
>     int average = (int)(total / numPlanets);
>     System.out.println("Total travel time:" + total);
>     System.out.println("Average travel time: " + average);
>   }
> }
> ```
> 
> **Example Output:**
> 
> ```
> Travel time to ...
>  Mercury 0 hours
>  Venus: 0 hours
>  Mars: 0 hours
>  Jupiter: 5 hours
>  Saturn:11 hours
> Total travel time:16.0
> 
> Travel time to ...
>  Mercury: 0.8495784968765016 hours
>  Venus: 0.38359870949813324 hours
>  Mars: 0.7258725410056196 hours
>  Jupiter: 5.825604352006665 hours
>  Saturn: 11.813728535388819 hours
> Total travel time:19.59838263477574
> 
> Average travel time: approximatley 4 hours.
> ```

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


## Assignment 1.7.1 — Magic 8-Ball: Exploring APIs and Libraries

**Overview**

In this activity you will explore the Java API documentation to understand how libraries and packages work, then build a Magic 8-Ball program that imports and uses classes from the Java standard library.

By the end of this activity you will be able to:
- [ ] Explain what an API and a library are in the context of Java
- [ ] Navigate the official Java API documentation at [docs.oracle.com](https://docs.oracle.com/javase/8/docs/api/)
- [ ] Use an `import` statement to include a package in your program
- [ ] Call methods from `java.util.Scanner` and `java.util.Random` meaningfully in a program

---

## Packages & APIs

When you write a Java program, you do not have to build everything from scratch. Java provides thousands of pre-built classes organized into **packages**. A **package** is a folder of related classes. Together, all of these packages make up the Java **standard library**.

An **Application Programming Interface (API)** is the set of rules and definitions that describes how you interact with a library — what classes are available, what methods they have, what parameters they take, and what they return. Think of the API documentation as the instruction manual for the library.

To use a class from a package that is not automatically included, you must **import** it:

```java
import java.util.Scanner;   // imports the Scanner class from the java.util package
import java.util.Random;    // imports the Random class from the java.util package
```

`java.lang` (which contains `String`, `Math`, `Integer`, etc.) is imported **automatically** — you never need to import it manually.

---


## Assignment 1.7.1a — API Investigation


>
> 
> Using the Java 8 API documentation at **https://docs.oracle.com/javase/8/docs/api/**, answer the following questions in a comment block at the top of your `Main.java` file or in a separate text document submitted alongside your code.
> 
> ### Section A — Packages and Classes
> 
> 1. What is the full package path for the `Scanner` class?
> 2. What is the full package path for the `Random` class?
> 3. Name **two other classes** found in the `java.util` package.
> 4. Name **one class** found in the `java.time` package and describe what it does in one sentence.
> 5. In your own words, what is the difference between a **package** and a **class**?
> 
> ### Section B — Scanner Class
> 
> Navigate to the `Scanner` class in the documentation.
> 
> 6. What does the `Scanner` constructor `Scanner(InputStream source)` do?
> 7. What method would you use to read a full line of text entered by the user? What does it return?
> 8. What method would you use to read a single `int` entered by the user?
> 9. Why is it important to call `scanner.close()` when you are done using a Scanner?
> 
> ### Section C — Random Class
> 
> Navigate to the `Random` class in the documentation.
> 
> 10. What does `nextInt(int bound)` return? What is the range of values it can produce?
> 11. How would you use `nextInt()` to generate a random number between **1 and 8 inclusive**? Write the expression.
> 12. What is the difference between `nextInt()` and `nextDouble()`?
> 13. Why might a program produce the same "random" sequence every time if you pass a fixed value to the `Random` constructor (e.g., `new Random(42)`)?
> 
> ---
> 


## Assignment 1.7.2 — Magic 8-Ball Program


>
> 
> ### Program Description
> 
> Build a Magic 8-Ball program that:
> - Asks the user to enter a yes/no question
> - Uses `java.util.Random` to select one of **eight responses** at random
> - Displays the response in a formatted output
> - Asks the user if they want to ask another question and loops until they choose to quit
> 
> ### Requirements Checklist
> 
> - [ ] Include the required block comment header in `Main.java` (all fields completed)
> - [ ] Import `java.util.Scanner` and `java.util.Random`
> - [ ] Use a `String` array to store all eight Magic 8-Ball responses
> - [ ] Use `Random.nextInt()` to select a response index at random
> - [ ] Use `Scanner` to read the user's question and their yes/no to continue
> - [ ] Use `.equalsIgnoreCase()` to check if the user wants to continue
> - [ ] Use `String.toUpperCase()` or formatting to display the response dramatically
> - [ ] Close the Scanner before the program ends
> - [ ] Include meaningful inline comments throughout
> 
> ### The Eight Responses
> 
> Your program must include **all eight** of the following responses:
> 
> | # | Response |
> |:-:|----------|
> | 1 | It is certain. |
> | 2 | Without a doubt. |
> | 3 | Reply hazy, try again. |
> | 4 | Ask again later. |
> | 5 | Don't count on it. |
> | 6 | My sources say no. |
> | 7 | Outlook not so good. |
> | 8 | Very doubtful. |
> 
> ---
> 
> ## Starter Code
> 
> ```java
> // Import the required packages
> import java.util.Scanner;
> import java.util.Random;
> 
> public class Main
> {
>     public static void main(String[] args)
>     {
>         // Create Scanner and Random objects
>         Scanner input = new Scanner(System.in);
>         Random rand = new Random();
> 
>         // Array of Magic 8-Ball responses
>         String[] responses = {
>             // your eight responses here
>         };
> 
>         String continueChoice = "yes";
> 
>         System.out.println("Welcome to the Magic 8-Ball!");
>         System.out.println("============================");
> 
>         // Loop while the user wants to keep asking questions
>         while (continueChoice.equalsIgnoreCase("yes"))
>         {
>             // Prompt the user for a question
> 
>             // Generate a random index using rand.nextInt()
> 
>             // Display the response
> 
>             // Ask if the user wants to continue
> 
>         }
> 
>         System.out.println("The Magic 8-Ball has spoken. Goodbye!");
> 
>         // Close the Scanner
>         input.close();
>     }
> }
> ```
>
> 
> 
> 
> ## Sample Output
> 
> ```
> Welcome to the Magic 8-Ball!
> ============================
> Ask your yes/no question: Will I ace my CS test?
> 
> 🎱 The Magic 8-Ball says...
>    WITHOUT A DOUBT.
> 
> Ask another question? (yes/no): yes
> 
> Ask your yes/no question: Will it rain tomorrow?
> 
> 🎱 The Magic 8-Ball says...
>    REPLY HAZY, TRY AGAIN.
> 
> Ask another question? (yes/no): no
> 
> The Magic 8-Ball has spoken. Goodbye!
> ```
> 
> ---
> 
> ## Extension Challenges
> 
> Completed early? Try one or more of the following:
> 
> - [ ] **Expand the responses** — add at least four more responses of your own for a total of twelve
> - [ ] **Add a response counter** — track and display how many questions the user asked at the end
> - [ ] **Categorize responses** — use a second array to label each response as `"Positive"`, `"Neutral"`, or `"Negative"` and display the category alongside the answer
> - [ ] **Seeded Random** — let the user enter a "lucky number" that seeds the Random object. Investigate what happens when they use the same number twice.
> 
> ---
> 
> ## Submission
> 
> Upload the following to the assignment:
> 
> - [ ] `Main.java` — your completed program with block comment header
> - [ ] Test Cases document — showing at least **three** runs of your program with different questions and the responses generated
> 
> ---
> 
> ## Grading
> 
> This assignment is graded using the **AP CSA Generic Assignment Rubric** (5-point scale). Pay particular attention to:
> - Import statements are present and used (not just written)
> - `Random.nextInt()` is used correctly to stay within the bounds of your array
> - Scanner is closed before the program ends
> - Part 1 investigation questions are answered in your block comment or submitted document
> 

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


>
> # Assignment 1.10.1 — Mission Control: Calling Class Methods
> 
> 
> ## Overview
> 
> In this activity you will investigate how **class methods** (also called **static methods**) work in Java, then build a Mission Control program that calls static methods to calculate rocket launch data.
> 
> By the end of this activity you will be able to:
> - [ ] Explain the difference between a static (class) method and an instance method
> - [ ] Call static methods from existing Java classes without creating an object
> - [ ] Write your own static methods and call them from `main`
> - [ ] Decompose a larger problem into smaller methods, each responsible for one task
> 
> ---
> 
> ## Background
> 
> A **class method** (declared with the keyword `static`) belongs to the **class itself** — not to any specific object. You call it using the class name, not an object reference:
> 
> ```java
> // Calling a static method from the Math class — no object needed
> double result = Math.sqrt(144);     // returns 12.0
> int rolled   = Math.abs(-7);        // returns 7
> double rand  = Math.random();       // returns a value in [0.0, 1.0)
> ```
> 
> You have already used static methods every time you called `Math.pow()`, `Math.round()`, or `System.out.println()`. `main` itself is a static method — that is why Java can run it without creating an object first.
> 
> **Static vs. Instance — Side by Side:**
> 
> | | Static (Class) Method | Instance Method |
> |---|---|---|
> | Keyword | `static` | *(no static)* |
> | Called on | The class name | An object reference |
> | Example call | `Math.sqrt(25)` | `myString.length()` |
> | Requires an object? | No | Yes |
> | Can access instance variables? | No | Yes |
> 
> **Writing Your Own Static Method:**
> 
> ```java
> public static double celsiusToFahrenheit(double celsius)
> {
>     return (celsius * 9.0 / 5.0) + 32;
> }
> ```
>
> - `public` — accessible from anywhere
> - `static` — belongs to the class, not an object
> - `double` — the return type
> - `celsiusToFahrenheit` — the method name
> - `(double celsius)` — one parameter
> 
> Call it from `main` like this:
> 
> ```java
> double temp = celsiusToFahrenheit(100.0);   // returns 212.0
> System.out.println(temp);
> ```
> 
> A method that returns nothing uses `void` as its return type. A `void` method performs an action but does not hand a value back to the caller.
> 
> ---
> 
> ## Part 1 — Investigation
> 
> Answer the following questions in a comment block at the top of your `Main.java` or in a separate document submitted alongside your code.
> 
> ### Section A — Understanding Static Methods
> 
> 1. Why can you call `Math.sqrt()` without first writing `Math m = new Math()`?
> 2. What keyword makes a method a class (static) method?
> 3. What is the return type of `Math.random()`? What range of values can it produce?
> 4. What is the return type of `Math.round(double a)`? Why is the return type different from `double`?
> 5. In your own words, explain why `main` must be declared `static`.
> 
> ### Section B — Reading Method Signatures
> 
> Look at the following method signatures and answer the questions below each one.
> 
> ```java
> public static int max(int a, int b)
> ```
> 6. How many parameters does this method take?
> 7. What data type does it return?
> 8. Write a line of code that calls this method with the values 42 and 17 and stores the result in a variable.
> 
> ```java
> public static void printDivider(int width)
> ```
> 9. What does a `void` return type mean?
> 10. Can you store the result of calling this method in a variable? Why or why not?
> 
> ### Section C — Decomposing a Problem
> 
> A good programmer breaks a large problem into smaller, focused methods — each doing **one job**.
> 
> 11. Look at the following task: *"Calculate the fuel needed for a rocket launch, warn the crew if fuel is low, and print a launch report."* Identify **three** static methods you could write to decompose this problem. For > each, write the method signature only (no body needed).
> 
> ---
> 
> ## Part 2 — Mission Control Program
> 
> ### Program Description
> 
> You are writing the launch software for Mission Control. Your program will:
> - Accept rocket launch parameters from the user via `Scanner`
> - Call static methods to calculate fuel consumption, estimated flight time, and thrust-to-weight ratio
> - Warn the crew if any value falls outside safe limits
> - Print a formatted launch report
> 
> ### Requirements Checklist
> 
> - [ ] Include the required block comment header in `Main.java` (all fields completed)
> - [ ] Write and call **at least four** static methods of your own (see specifications below)
> - [ ] At least one method must be `void` (performs an action, returns nothing)
> - [ ] At least one method must return a `double`
> - [ ] At least one method must return a `boolean`
> - [ ] Call at least **two** `Math` class static methods within your own methods
> - [ ] Use `Scanner` to accept user input for rocket name, fuel amount, and rocket mass
> - [ ] Use the return values of your static methods meaningfully in `main`
> - [ ] Use `String.format()` or `printf()` to produce the formatted launch report
> - [ ] Include meaningful inline comments throughout
> 
> ---
> 
> ### Required Static Methods
> 
> Implement the following four static methods in `Main.java`:
> 
> #### 1. `calculateFuelConsumption`
> ```java
> public static double calculateFuelConsumption(double distanceKm, double fuelEfficiency)
> ```
> - Returns the estimated fuel consumed: `distanceKm / fuelEfficiency`
> - Call `Math.round()` on the result before returning it as a `double`
> 
> #### 2. `calculateFlightTime`
> ```java
> public static double calculateFlightTime(double distanceKm, double speedKph)
> ```
> - Returns estimated flight time in hours: `distanceKm / speedKph`
> - Use `Math.abs()` to ensure the result is always positive
> 
> #### 3. `isSafeLaunch`
> ```java
> public static boolean isSafeLaunch(double thrustKn, double massKg)
> ```
> - Calculates thrust-to-weight ratio: `thrustKn / (massKg * 9.8 / 1000)`
> - Returns `true` if the ratio is greater than **1.5** (minimum safe ratio), `false` otherwise
> 
> #### 4. `printLaunchReport`
> ```java
> public static void printLaunchReport(String rocketName, double fuel, double flightTime, boolean safe)
> ```
> - `void` method — prints the complete formatted launch report to the console
> - Uses `String.format()` or `printf()` for aligned output
> - Prints a safety status message based on the `boolean` parameter
> 
> ---
> 
> ## Starter Code
> 
> ```java
> import java.util.Scanner;
> 
> public class Main
> {
>     // ─── Static Methods ───────────────────────────────────────────────────────
> 
>     public static double calculateFuelConsumption(double distanceKm, double fuelEfficiency)
>     {
>         // your code here
>         return 0;
>     }
> 
>     public static double calculateFlightTime(double distanceKm, double speedKph)
>     {
>         // your code here
>         return 0;
>     }
> 
>     public static boolean isSafeLaunch(double thrustKn, double massKg)
>     {
>         // your code here
>         return false;
>     }
> 
>     public static void printLaunchReport(String rocketName, double fuel,
>                                          double flightTime, boolean safe)
>     {
>         // your code here
>     }
> 
>     // ─── Main ─────────────────────────────────────────────────────────────────
> 
>     public static void main(String[] args)
>     {
>         Scanner input = new Scanner(System.in);
> 
>         System.out.println("=== MISSION CONTROL LAUNCH SYSTEM ===");
> 
>         // Get user inputs
>         System.out.print("Enter rocket name: ");
>         String rocketName = input.nextLine();
> 
>         System.out.print("Enter fuel amount (liters): ");
>         double fuel = input.nextDouble();
> 
>         System.out.print("Enter rocket mass (kg): ");
>         double mass = input.nextDouble();
> 
>         System.out.print("Enter engine thrust (kN): ");
>         double thrust = input.nextDouble();
> 
>        // Mission constants
>         double distanceKm    = 400.0;   // destination distance in km
>         double fuelEfficiency = 12.5;   // km per liter
>         double speedKph      = 28000.0; // cruising speed in km/h
> 
>         // Call your static methods and store the results
> 
>        // Call printLaunchReport
> 
>         input.close();
>     }
> }
> ```
> 
> ---
> 
> ## Sample Output
> 
> ```
> === MISSION CONTROL LAUNCH SYSTEM ===
> Enter rocket name: Falcon Alpha
> Enter fuel amount (liters): 5000
> Enter rocket mass (kg): 120000
> Enter engine thrust (kN): 2500
> 
> ========================================
>         MISSION CONTROL REPORT
> ========================================
> Rocket Name:       Falcon Alpha
> Fuel Consumed:     32.0 liters
> Flight Time:       0.01 hours
> Thrust/Weight:     2.13
> ----------------------------------------
> LAUNCH STATUS:     ✓ SAFE FOR LAUNCH
> ========================================
> ```
> 
> ```
> === MISSION CONTROL LAUNCH SYSTEM ===
> Enter rocket name: Titan IV
> Enter fuel amount (liters): 800
> Enter rocket mass (kg): 300000
> Enter engine thrust (kN): 1200
> 
> ========================================
>         MISSION CONTROL REPORT
> ========================================
> Rocket Name:       Titan IV
> Fuel Consumed:     32.0 liters
> Flight Time:       0.01 hours
> Thrust/Weight:     0.41
> ----------------------------------------
> LAUNCH STATUS:     ✗ UNSAFE — ABORT LAUNCH
> ========================================
> ```
> 
> ---
> 
> ## Extension Challenges
> 
> Completed early? Try one or more of the following:
> 
> - [ ] **Add a fifth method** `calculateMaxAltitude(double thrustKn, double massKg)` that returns an estimated max altitude using `Math.pow()` and `Math.sqrt()` in the formula
> - [ ] **Add a countdown** — write a `void` method called `launchCountdown(int seconds)` that prints a countdown from the given number to zero using a loop
> - [ ] **Multiple rockets** — use a loop in `main` to process three different rockets and report which one has the best thrust-to-weight ratio using `Math.max()`
> - [ ] **Unit conversion** — add a static method that converts `km/h` to `m/s` and display both speeds in the report
> 
> ---
> 
> ## Submission
> 
> Upload the following to the assignment:
> 
> - [ ] `Main.java` — your completed program with block comment header
> - [ ] Test Cases document — showing at least **three** runs with different rocket inputs, including one that triggers the unsafe launch warning
> 
> ---
> 
> ## Grading
> 
> This assignment is graded using the **AP CSA Generic Assignment Rubric** (5-point scale). Pay particular attention to:
> 
> - All four required static methods are present, correctly implemented, and called in `main`
> - Return values from non-void methods are stored and used — not ignored
> - `Math` class static methods are called inside your own methods, not just in `main`
> - Part 1 investigation questions are answered in your block comment or submitted document
> - The launch report is formatted using `String.format()` or `printf()` — not plain `println` concatenation
> 
> ---
>


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


> 
> ### Project 1.11.1 — Roller Coaster Simulator
> 
> **Project Overview:**
> 
> Students will write a program that helps a theme park design safe roller coasters based on physics-related math. Use `Math.random()` and `Math.round()` to simulate the experience of riding a roller coaster, generating random values for speed, height, and rating.  The user (acting as an engineer) inputs the parameters of a coaster hill, and the program will:
> 
> * Calculate speed at the bottom of the hill
> * Estimate time to fall using height
> * Warn if g-forces exceed safety limits
> * Round values for display
> 
> 
> **Concepts Covered:**
> 
> * `Math` class: `Math.pow`, `Math.sqrt`, `Math.abs`, `Math.max`, `Math.min`
> * `Scanner` for input
> * Decision-making and problem-solving
> * Realistic application of physics/math concepts
> 
> 
> **Key Functionalities:**
> 
> <img width="422" height="490" alt="Image" src="https://github.com/user-attachments/assets/5e02c085-c41f-4ab5-a17b-63a53ce3ce0f" />
> 
> 
> ---
> 
> **Example Output**
> 
> ```java
> Welcome to the Roller Coaster Simulator
> Enter hill height (in meters): 50
> Enter slope angle (in degrees): 40
> Enter track length (in meters): 100
> 
> --- Results ---
> Estimated Speed at Bottom: 31.30 m/s
> Time to Fall: 3.19 seconds
> Estimated G-force in curve: 10.0 Gs TOO DANGEROUS!
> 
> Recommendation: Reduce hill height or increase curve radius.
> 
> --- Rounded Data ---
> Speed Rounded Up: 32.0 m/s
> Time Rounded Down: 3.0 sec
> ```
> 
> ---
> 
> 
> ```java
> public class RollerCoasterSimulator {
>     private static final double GRAVITY = 9.8; // m/s^2 // DO NOT CHANGE
> 
> 	// Attributes (height, speen, time, gForce, angle, trackLength)
> 
>   // Constructor
> 
>   // Perform all calculations
> 
>   // Return calculated results to main
> 
>    // Helper method for safety
> 
> }
> 
> 
> import java.util.Scanner;
> 
> public class Main {
>     public static void main(String[] args) {
> 
> 		// Use Scanner to get inputs for Speed, time and GForce
> 
>      // Get user inputs
> 
>      // Create an instance of RollerCoasterSimulator
> 
>         // Get and display results
>         double speed = sim.getSpeed();
>         double time = sim.getTime();
>         double gForce = sim.getGForce();
> 
>         if (!sim.isSafe()) {
>             // if speed Gforce is too excessive print "TOO DANGEROUS!"
> 			// Recommend that the user make changes to height or curve
> 			// else print "Safe for riders!"
> 
> 		System.out.println("\n--- Rounded Data ---");
> 		// Round speed up
> 		// Round time down 
> 
>         input.close();
>     }
> }
> ```
> Submit your java program code and your test cases that demonstrates your program works as intended.
> 


---


>
> ### Activity 1.11.2 — Race Car: Applying the Math Class
> 
> ## Standards
> 
> | Standard | Description |
> | -------- | ----------- |
> | ICT 5.8 | Create and use algorithms |
> | ICT 5.9 | Deconstruct large problems |
> | C4.6 | Use proper programming language syntax |
> | C4.9 | Create programs using control structures, procedures, and functions |
> | CRP 1 | Apply appropriate technical skills and academic knowledge |
> | CRP 5 | Utilize critical thinking to make sense of problems |
> 
> ---
> 
> ## Overview
> 
> In this activity you will apply what you have learned about the `Math` class, static methods, object instantiation, and `java.util.Random` to simulate a drag race between two cars. You will complete a partially written program by implementing the `computeTime` method in `Racecar.java` and filling in the guided comments in `Main.java`.
> 
> By the end of this activity you will be able to:
> - [ ] Use `Math.sqrt()` inside an instance method to solve a physics formula
> - [ ] Use `Math.round()` to format a result to three decimal places
> - [ ] Use `java.util.Random` to generate a bounded random integer
> - [ ] Instantiate objects and call instance methods on them
> - [ ] Connect prior concepts — classes, constructors, `toString()`, and static methods — in a complete program
> 
> ---
> 
> ## Background
> 
> ### Connecting Prior Activities
> 
> You have already used these concepts individually. This activity brings them together:
> 
> | Prior Activity | Concept Used Here |
> | -------------- | ----------------- |
> | 1.7.1 Magic 8-Ball | `import java.util.Random`, `nextInt(bound)` |
> | 1.10.1 Mission Control | Writing and calling static and instance methods |
> | 1.11.1 Roller Coaster Simulator | `Math.sqrt()`, physics formulas, `Math.round()` |
> | 1.13 Object Creation | Constructors, instance variables, `toString()` |
> 
> ---
> 
> ### The Physics Formula
> 
> The time it takes a vehicle to travel a distance from a standing start under constant acceleration is:
> 
> ```
> t = √( 2 × d / a )
> ```
> 
> Where:
> - `t` = time in seconds
> - `d` = distance in meters
> - `a` = acceleration in m/s²
> 
> You implemented a similar formula in **Activity 1.11.1** when calculating speed at the bottom of a roller coaster hill. Here you will apply the same `Math.sqrt()` approach inside an **instance method** instead of directly in `main`.
> 
> ---
> 
> ### Generating a Bounded Random Integer
> 
> In **Activity 1.7.1** you used `Random.nextInt(bound)` to pick a Magic 8-Ball response. Here you will use it to assign each car a random acceleration between **20 and 50 inclusive**:
> 
> ```java
> Random rand = new Random();
> int accel = rand.nextInt(31) + 20;  // produces 0–30, shifted to 20–50
> ```
> 
> > **Why `nextInt(31)`?**
> > `nextInt(bound)` returns a value from `0` up to but **not including** `bound`.
> > To get the range 20–50 (31 possible values), use `nextInt(31)` then add 20.
> 
> ---
> 
> ### Rounding to Three Decimal Places
> 
> `Math.round()` rounds to the nearest whole number. To round to three decimal places, scale up, round, then scale back down:
> 
> ```java
> double time = 10.5963847;
> double rounded = Math.round(time * 1000.0) / 1000.0;  // 10.596
> ```
> 
> You used `Math.round()` in **Activity 1.10.1** to clean up fuel consumption values. Apply the same technique here inside `computeTime`.
> 
> ---
> 
> ## Starter Files
> 
> ### Racecar.java
> 
> ```java
> public class Racecar
> {
>     private double accel; // acceleration in m/s²
>     private String name;  // name of the driver
> 
>     public Racecar(double acceleration, String driver)
>     {
>         accel = acceleration;
>         name  = driver;
>     }
> 
>     // Returns the time it takes the racecar to complete
>     // the track rounded to three decimal places.
>     // Formula: t = √(2 × d / a)
>     // where t = time (seconds), d = distance (meters), a = acceleration (m/s²)
>     public double computeTime(double distance)
>     {
>         // Step 1: Calculate time using the formula above and Math.sqrt()
> 
>         // Step 2: Round to three decimal places using Math.round()
> 
>         // Step 3: Return the rounded time
>         return 0; // replace this
>     }
> 
>     public String toString()
>     {
>         return "Racer " + name;
>     }
> }
> ```
> 
> ---
> 
> ### Main.java
> 
> ```java
> 
> import java.util.Random;
> 
> public class Main
> {
>     public static void main(String[] args)
>     {
>         Random rand = new Random();
> 
>         // Length of the track in meters
>         double distance = 2414; // ~1.5 miles
> 
>         // Generate a random acceleration (integer) for each car
>         // from 20 to 50 (inclusive) using rand.nextInt()
>         // Hint: review Activity 1.7.1 — how did you restrict nextInt() to a range?
> 
> 
>         // Create two Racecar objects — one named "Tom", one named "Jerry"
>         // Pass each car its random acceleration (cast to double) and driver name
>         // Hint: review Activity 1.13 — how did you instantiate objects?
> 
> 
>         // Compute the finishing time for both cars
>         // Call computeTime(distance) on each Racecar object and store the result
>         // Hint: review Activity 1.10.1 — how did you store a method's return value?
> 
> 
>         // Print the finishing time for each car
>         // Use the toString() method of Racecar — it is called automatically when
>         // you concatenate a Racecar object with a String
>         // Expected format:  Racer Tom's car finished in 10.596 seconds.
> 
>     }
> }
> ```
> 
> ---
> 
> ## What You Need to Complete
> 
> ### In Racecar.java
> - [ ] Implement `computeTime(double distance)` using `Math.sqrt()` and the formula `t = √(2 × d / a)`
> - [ ] Round the result to three decimal places using `Math.round()`
> - [ ] Return the rounded value
> 
> ### In Main.java
> - [ ] Generate a random acceleration for each car from **20 to 50 inclusive**
> - [ ] Instantiate two `Racecar` objects with their acceleration and driver name
> - [ ] Call `computeTime(distance)` on each car and store the result
> - [ ] Print the finishing time for each car in the format shown below
> 
> ---
> 
> ## Sample Output
> 
> Because acceleration is random, your times will differ each run. The format must match exactly:
> 
> ```
> Racer Tom's car finished in 10.596 seconds.
> Racer Jerry's car finished in 11.423 seconds.
> ```
> 
> ```
> Racer Tom's car finished in 8.744 seconds.
> Racer Jerry's car finished in 8.744 seconds.
> ```
> 
> > It is possible (but unlikely) for both cars to receive the same random acceleration and finish in the same time. This is expected behavior — your program does not need to handle a tie specially.
> 
> ---
> 
> ## Connecting the Concepts
> 
> Before you begin coding, trace through these questions to make sure you understand what each part of the program does. You may answer these in your block comment or a separate document.
> 
> 1. In `computeTime`, why do you use `accel` directly instead of passing acceleration as a parameter?
> 2. Why must `computeTime` be an **instance method** rather than a **static method**?
> 3. In `Main`, why do you cast the random acceleration to `double` when passing it to the `Racecar` constructor?
> 4. What would happen if you used `rand.nextInt(50)` instead of `rand.nextInt(31) + 20`? What range would that produce?
> 5. `toString()` is already written for you. When `System.out.println(car1 + "'s car finished in " + time + " seconds.")` runs, what triggers the call to `toString()`?
> 
> ---
> 
> ## Extension Challenges
> 
> Completed early? Try one or more of the following:
> 
> - [ ] **User input** — use `Scanner` to let the user enter driver names and/or the track length instead of hardcoding them
> - [ ] **Winner announcement** — after printing both times, use an `if` statement and `Math.min()` to determine and print which racer won
> - [ ] **More cars** — add a third and fourth `Racecar` object and report all four finishing times
> - [ ] **Leaderboard** — sort and print the cars from fastest to slowest finishing time
> 
> ---
> 
> ## Submission
> 
> Upload the following to the assignment:
> 
> - [ ] `Racecar.java` — with `computeTime` fully implemented
> - [ ] `Main.java` — with all comments completed and all code filled in, including the block comment header
> - [ ] Test Cases document — showing at least **three** runs of your program demonstrating different random acceleration values each time
> 
> ---
> 
> ## Grading
> 
> This assignment is graded using the **AP CSA Generic Assignment Rubric** (5-point scale). Pay particular attention to:
> 
> - `computeTime` uses `Math.sqrt()` with the correct formula — not a hardcoded value
> - Rounding is done to **three decimal places** — not zero or two
> - Random acceleration is correctly bounded to **20–50 inclusive** — not a wider or narrower range
> - `toString()` is not rewritten or modified — it is used as provided
> - Output format matches the sample exactly, including the apostrophe-s and the word "seconds"
>

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

### 1.13a toString() Method

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

### Assignment 2.1.1 — Sports Class

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

### Assignment 2.1.2 — Not Another Cake

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

### Assignment 2.1.3 — Dog Pizza

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

### Assignment 2.1.4 — Bicycle Revisited

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

### Assignment 2.1.5 — Constructor Practice

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


### Assignment 2.7.2 — Speaking


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

### Assignment 1.16.1 — Formatted Report
Create a formatted student report card that displays names, scores, and letter grades in aligned columns using `String.format()`.

### Assignment 1.16.2 — StringBuilder Reverse
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

### Assignment 1.17.1 — Wrapper Classes

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

## Unit 1 Final Project

<details>
<summary>📌 Standards — Unit 1 Final Project</summary>

| Standard | Description |
| -------- | ----------- |
| ICT 2.0 | Communications — communicate clearly in written and electronic formats |
| ICT 4.0 | Technology — use electronic tools and reference materials |
| ICT 5.4 | Interpret information and draw conclusions to make informed decisions |
| ICT 5.8 | Create and use algorithms and solve problems |
| ICT 5.9 | Deconstruct large problems into smaller components |
| ICT 5.10 | Use multiple layers of abstraction |
| ICT 7.5 | Apply high-quality techniques to product design and development |
| ICT 10.1 | Interpret and explain ICT-specific terminology |
| C4.4 | Identify and apply data types and encoding |
| C4.5 | Demonstrate awareness of the OOP paradigm |
| C4.6 | Use proper programming language syntax |
| C4.7 | Use various data structures including objects |
| C4.8 | Use OOP concepts: properties, methods, and inheritance |
| C4.9 | Create programs using control structures, procedures, and variables |
| C4.11 | Document development work using comments |
| C5.4 | Design a solution to a problem |
| C5.5 | Implement a solution |
| CRP 1 | Apply appropriate technical skills and academic knowledge |
| CRP 2 | Communicate clearly, effectively, and with reason |
| CRP 4 | Apply technology to enhance productivity |
| CRP 5 | Utilize critical thinking to make sense of problems |
| CRP 7 | Act as a responsible and contributing citizen and employee |

</details>

- [ ] Apply all coding concepts learned throughout Unit 1 in a cohesive program.
- [ ] Apply a programming development process to design, implement, and test a project.
- [ ] Document your program professionally using the required block comment header.
	- [ ] I will demonstrate mastery of Unit 1 by building a complete Java program.

Choose **one** of the two options below. Both options carry the same rubric and point value.

---

### Option A — Theme Park Management System

**Overview:** You are a software engineer hired to build a management system for a theme park. The system will track rides and guests, compute safety metrics, and generate a formatted park report.

**Required Files:** `Main.java`, `Ride.java`, `Guest.java` (minimum)

**Submission:** All `.java` files + Test Cases PDF

---

#### Part 1 — Ride.java

Create a `Ride` class with the following instance variables:
- `name` (String) — name of the ride
- `heightRequirementCm` (int) — minimum height to ride in centimeters
- `topSpeedKph` (double) — top speed of the ride in km/h
- `maxGForce` (double) — maximum G-force generated
- `isOperational` (boolean) — whether the ride is currently running
- `capacity` (int) — number of riders per cycle

Implement the following **constructors**:
1. A no-argument default constructor (sets reasonable defaults)
2. A constructor that takes `name` and `heightRequirementCm` only
3. A constructor that takes all five parameters

Implement the following **methods**:
- `toString()` — returns a formatted summary of the ride
- `isSafe()` — returns `true` if `maxGForce` is 6.0 or below
- `getWaitTimeEstimate(int guestsWaiting)` — returns estimated wait time in minutes using `capacity`

---

#### Part 2 — Guest.java

Create a `Guest` class with the following instance variables:
- `name` (String)
- `heightCm` (int)
- `age` (int)
- `fastPass` (boolean)

Implement the following **constructors**:
1. A no-argument default constructor
2. A constructor that takes `name` and `heightCm`
3. A constructor that takes all four parameters

Implement the following **methods**:
- `canRide(Ride r)` — returns `true` if guest meets the height requirement
- `toString()` — returns a formatted guest summary

---

#### Part 3 — Main.java

Your `main` method must:
1. Include the required block comment header (all fields completed)
2. Use `Scanner` to accept user input for at least one guest's name and height
3. Create at least three `Ride` objects using different constructors (include one `null` reference)
4. Create at least two `Guest` objects
5. Use `Math.sqrt()` and `Math.pow()` to calculate speed at the bottom of a drop: `speed = sqrt(2 × 9.8 × height)`
6. Use `Math.round()` to round the result for display
7. Use `Math.max()` or `Math.min()` when comparing ride values
8. Use casting (widening and narrowing) in at least one calculation
9. Use compound assignment operators (`+=`, `-=`, etc.) at least once
10. Use `++` or `--` at least once
11. Use a `StringBuilder` to build the final park report
12. Print the park report using `String.format()` or `printf()` for aligned columns
13. Use at least one String method (e.g., `toUpperCase()` for the park name header)
14. Use `Integer.parseInt()` or `Double.parseDouble()` to parse at least one Scanner input
15. Use `.equals()` when comparing any two String values
16. Demonstrate a `null` Ride reference and handle it with a printed message

---

#### Sample Output — Option A

```
Welcome to THRILLWORLD THEME PARK
Enter guest name: Alex
Enter guest height (cm): 142

--- Ride Report ---
Ride Name            Speed (kph)   G-Force   Safe?
Dragon Drop          112.5         4.2       YES
Thunder Loop         210.0         8.9       TOO DANGEROUS
Lot 3:               null — record not found

--- Guest: Alex (142 cm) ---
Dragon Drop: ELIGIBLE
Thunder Loop: NOT ELIGIBLE
```

---

### Option B — Car Dealership Inventory

**Overview:** You are a junior developer at AutoEdge Dealership. Build a Java inventory system that tracks cars, simulates depreciation, generates a customer search tool, and prints a formatted inventory report.

**Required Files:** `Main.java`, `Car.java`, `Customer.java` (minimum)

**Submission:** All `.java` files + Test Cases PDF

---

#### Part 1 — Car.java

Create a `Car` class with the following instance variables:
- `make` (String) — manufacturer name
- `model` (String) — model name
- `year` (int) — model year
- `priceDollars` (double) — asking price
- `mileage` (int) — odometer reading
- `isAvailable` (boolean) — whether the car is still on the lot

Implement the following **constructors**:
1. A no-argument default constructor
2. A constructor that takes `make`, `model`, and `year` only
3. A constructor that takes all six parameters

Implement the following **methods**:
- `toString()` — returns a formatted single-line inventory entry
- `getDepreciatedValue(int yearsOwned)` — calculates value after depreciation using: `value = price × Math.pow(0.85, yearsOwned)`. Returns a `double`.
- `isAffordable(double budget)` — returns `true` if `priceDollars` is within budget

---

#### Part 2 — Customer.java

Create a `Customer` class with the following instance variables:
- `name` (String)
- `budget` (double)
- `preferredMake` (String)

Implement the following **constructors**:
1. A no-argument default constructor
2. A constructor that takes `name` and `budget` only
3. A constructor that takes all three parameters

Implement the following **methods**:
- `toString()` — returns a formatted customer summary
- `canAfford(Car c)` — returns `true` if the car is within the customer's budget

---

#### Part 3 — Main.java

Your `main` method must:
1. Include the required block comment header (all fields completed)
2. Use `Scanner` to accept user input for a customer's name and budget
3. Create at least three `Car` objects using different constructors (include one `null` reference)
4. Create at least two `Customer` objects
5. Use `Math.pow()` to compute depreciated value for each car
6. Use `Math.round()` to round the depreciated value for display
7. Use `Math.max()` or `Math.min()` to find the most or least expensive car
8. Use casting (widening and narrowing) in at least one price calculation
9. Use compound assignment operators when accumulating total inventory value
10. Use `++` or `--` when counting available vehicles
11. Use a `StringBuilder` to build the inventory report
12. Print the inventory report using `String.format()` or `printf()` for aligned columns
13. Use at least one String method (e.g., `toUpperCase()` for make/model display)
14. Use `Integer.parseInt()` or `Double.parseDouble()` to parse at least one Scanner input
15. Use `.equals()` when comparing make or model strings
16. Demonstrate a `null` Car reference and handle it with a printed message

---

#### Sample Output — Option B

```
Welcome to AUTOEDGE DEALERSHIP
Enter your name: Jordan
Enter your budget: 22000

--- Inventory Report ---
Make        Model       Year   Price        Depreciated (3yr)
Toyota      Camry       2021   $24,500.00   $15,068.44
Honda       Civic       2022   $19,999.00   $14,499.27
Ford        Mustang     2020   $31,000.00   $19,044.38
Lot 4:      null — record not found

--- Customer: Jordan | Budget: $22,000.00 ---
Toyota Camry: OVER BUDGET
Honda Civic: WITHIN BUDGET
Ford Mustang: OVER BUDGET
Available vehicles: 3
```

---

### Unit 1 - Project Rubric

Each concept below is worth **1 point**. Credit is awarded when the concept is used correctly and meaningfully — not simply present in the code. Partial credit is not awarded per concept.

| # | Category | Concept | What to Demonstrate | Pts |
|:-:|----------|---------|---------------------|:---:|
| 1 | 1.1 Output & Syntax | print / println | Uses both `System.out.print()` and `System.out.println()` meaningfully | 1 |
| 2 | 1.1 Output & Syntax | Escape sequences | Uses `\t`, `\n`, or other escape characters for formatting | 1 |
| 3 | 1.2 Variables & Data Types | Primitive types | Declares and uses `int`, `double`, and `boolean` variables correctly | 1 |
| 4 | 1.2 Variables & Data Types | String (non-primitive) | Declares and uses at least one String variable | 1 |
| 5 | 1.2 Variables & Data Types | `final` constant | Declares at least one `final` (ALL_CAPS) constant | 1 |
| 6 | 1.2 Variables & Data Types | Scanner input | Uses Scanner to accept at least one type of user input | 1 |
| 7 | 1.3 Expressions | Arithmetic operators | Uses `+`, `-`, `*`, `/`, `%` meaningfully in calculations | 1 |
| 8 | 1.3 / 1.8 Comments | Comments | Includes inline single-line and at least one multi-line comment | 1 |
| 9 | 1.4 Assignment | Compound assignment | Uses `+=`, `-=`, `*=`, `/=`, or `%=` at least once | 1 |
| 10 | 1.4 Assignment | Increment / decrement | Uses `++` or `--` operator at least once | 1 |
| 11 | 1.5 Casting | Widening cast | Demonstrates widening (e.g., `int` to `double`) in a calculation | 1 |
| 12 | 1.5 Casting | Narrowing cast | Uses explicit narrowing cast (e.g., `(int)` applied to a `double`) | 1 |
| 13 | 1.7 API | import statement | Imports at least one Java library (e.g., `java.util.Scanner`) | 1 |
| 14 | 1.8 Documentation | Main block comment | Includes the required block comment header in `Main.java` — all fields filled in | 1 |
| 15 | 1.9 / 1.10 Methods | Static method call | Calls at least one static class method (e.g., `Math` class) | 1 |
| 16 | 1.11 Math Class | Math methods | Uses at least two distinct `Math` methods (e.g., `Math.sqrt`, `Math.pow`, `Math.round`, `Math.abs`) | 1 |
| 17 | 1.12 / 1.13 OOP | Class with instance variables | Creates at least one class with two or more instance variables | 1 |
| 18 | 1.12 / 1.13 OOP | Constructor overloading | Implements at least two constructors (default + parameterized), both called in Main | 1 |
| 19 | 1.12 / 1.13 OOP | Object instantiation | Creates at least two distinct object instances using `new` | 1 |
| 20 | 1.12 / 1.13 OOP | null reference | Declares a `null` object AND references it with a printed message (no crash) | 1 |
| 21 | 1.12 / 1.13 OOP | toString() method | Overrides `toString()` to return a meaningful string representation | 1 |
| 22 | 1.14 Instance Methods | Non-void instance method | Calls at least one non-void instance method and uses its return value | 1 |
| 23 | 1.14 Instance Methods | void instance method | Defines and calls at least one void instance method | 1 |
| 24 | 1.15 String Methods | String method | Uses at least one String method (e.g., `length()`, `substring()`, `toUpperCase()`) | 1 |
| 25 | 1.15 String Methods | String concatenation | Concatenates Strings and at least one non-String value using `+` | 1 |
| 26 | 1.15 String Methods | .equals() comparison | Compares two Strings using `.equals()` instead of `==` | 1 |
| 27 | 1.16 Formatting | String.format() / printf() | Uses `String.format()` or `printf()` for at least one formatted output line | 1 |
| 28 | 1.16 Formatting | StringBuilder | Uses `StringBuilder` with at least two method calls (e.g., `append`, `reverse`, `toString`) | 1 |
| 29 | 1.17 Wrapper Classes | Wrapper class method | Uses `Integer.parseInt()`, `Double.parseDouble()`, or similar wrapper method | 1 |
| 30 | Submission | Test Cases PDF | Submits a PDF with at least three test cases (inputs, expected output, actual output, Pass/Fail) | 1 |
| 31 | Submission | .java file(s) | Submits all required `.java` files (`Main.java` + supporting class files) | 1 |
| 32 | Submission | Compiles & runs | Program compiles without errors and produces correct output | 1 |
| | | | **TOTAL** | **32** |

**Grading Notes:**
- Code must compile and run to receive credit for most concept points.
- The block comment header must have all fields completed — not left as placeholders.
- Test Cases PDF must show at least three distinct cases with inputs, expected output, actual output, and Pass/Fail.
- `null` reference point: program must declare a null object AND print a message — a `NullPointerException` crash does not earn the point.
- Constructor overloading point: both constructors must have different signatures AND both must be called in `Main`.

