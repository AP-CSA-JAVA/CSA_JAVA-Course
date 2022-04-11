<p align="center">*** This course is designed to prepare students to take the <b>AP Computer Science A </b>Exam *** </br>
*** Excerpts from the course overview was taken from AP CollegeBoard ***</p>

# AP Computer Science A Course Overview 

AP Computer Science A introduces students to computer science through programming. Fundamental topics in this course include the design of solutions to problems, the use of data structures to organize large sets of data, the development and implementation of algorithms to process data and discover new information, the analysis of potential solutions, and the ethical and social implications of computing systems. The course emphasizes object-oriented programming and design using the Java programming language.

The following big ideas serve as the foundation of the course, enabling students to create meaningful connections among concepts:</br>
<b>Modularity</b>: Modularity in object-oriented programming allows usto use abstraction to break complex programs down intoindividual classes and methods.</br>
<b>Variables</b>: Variables create data abstractions, as they canrepresent a set of possible values or a group of related values.</br>
<b>Control</b>: Doing things in order, making decisions, and doing thesame process multiple times are represented in code by usingcontrol structures.</br>
<b>Impact of Computing</b>: Computers and computing haverevolutionized our lives. To use computing safely and responsibly,we need to be aware of privacy, security, and ethical issues.</br>

The following computational thinking practices describe what skills students should develop during the course:</br></br>
<b>Program Design and Algorithm Development</b>: Determinerequired code segments to produce a given output.</br>
<b>Code Logic</b>: Determine the output, value, or result of givenprogram code given initial values.</br>
<b>Code Implementation</b>: Write and implement program code.</br>
<b>Code Testing</b>: Analyze program code for correctness, equivalence,and errors.</br>
<b>Documentation</b>: Describe the behavior and conditions thatproduce identified results in a program.</br>

## TABLE OF CONTENTS
The course content is organized into ten commonly taught units:</br>
[Unit 1: Primitive Types](#unit-1---primitive-types)</br>
Unit 2: Using Objects</br>
Unit 3: Boolean Expressions and if Statements</br>
Unit 4: Iteration</br>
Unit 5: Writing Classes</br>
Unit 6: Array</br>
Unit 7: ArrayList</br>
Unit 8: 2D Array</br>
Unit 9: Inheritance</br>
Unit 10: Recursion</br>

# Unit 1 - Primitive Types 
<details><summary>Click to Open</summary>
<p>



## Why Programming? Why Java?

Every Java program begins with the creation of a class.  Consider a class as a blueprint for your program.  In this instance, we created a class called MyFirstClass.  Within the class there is a main method that is required to execute the program.  Below is a simple program that will print "Hello, World".</br>Notice that with every ' { ' there is a corresponding ' } '.  In class, you may hear me refer to it as a curly brace.  A missing a curly brace is one of the most common errors among new programmers.  The name 'public' allows users to be able to see the specific parts of your program.  Notice also that the name of the class starts with a capital letter.  The main class with always start with a capital letter.
![first_Java](https://user-images.githubusercontent.com/12989939/162324090-a9292f5d-3c02-46d8-bb05-e69cb0f72845.PNG)

Notice that within the main method there is a print statement.  Let's break down this print statement. 
<p align="center"><b> System.out.println("Hello, World");</b></p>

- [ ] <b>System</b> is a class defined in the java lang package.</br>
- [ ] <b>out</b> is a public static field of the PrintStream type.</br>
- [ ] <b>println()</b> is invoked by the PrintStream class.</br>
- [ ] <b>NOTE</b> <i>println()</i> when executed will return to the next line. Whereas <i>print()</i> will execute the string literal but not return to the next line. You can also create a new line inside a print statement by adding   <b>\n</b>  anywhere inside the quotation marks of a print statement.

## Comments in Code
Typing comments within your program is considered a professional practice, and I expect you to comment your code as appropriate throughtout the year.  There are two ways to comment in Java.  The first is a single line comment and you would use two foward slashes( // ) to indicate a comment.  The second is a multiline comment that uses a forward slash followed by an asterisks and closed with an asterisk followed by a forward slash ( /* */ )</br></br>
With **every** program that you submit, I want you to list the following: 
- your name/ partners name (if applicable) 
- the date of submission 
- Course 
- Period 
- and the assignment  
 
Please follow the convention shown below.</br>
![naming_Convention](https://user-images.githubusercontent.com/12989939/162331128-d1b0a742-298a-4e2e-b6de-97afe928bee3.PNG)


## Assignment 1
![76b4e00f998549e6a8717c6e5d5f0f1a](https://user-images.githubusercontent.com/12989939/162492248-21683f86-fc3f-4756-b78f-ddfe9373ab60.png)</br>
Create the happy face image above using the following criteria:

- [ ] Create a class
- [ ] Create a main method
- [ ] Use System.out.print at least two lines
- [ ] Use System.out.println at least three times

## Assignment 2
### Personal Timeline
For this assignment, you will create a program that outputs a personal timeline of events in your life. The timeline will proceed vertically. Earlier events will be displayed nearer the top of the timeline while later events are displayed near the bottom.

Include seven meaningful events in your life. No repetitive events such as "started kindergarten, started first grade, etc".

Make it look professional. HINT: use \t
![timeline](https://user-images.githubusercontent.com/12989939/162494607-3d0fe461-5139-4116-b049-bebc9103c9c4.PNG)

There is no test to run when you are complete. Please screenshot your code with result and include it in your Canvas assignment.



## Variables and Data Types
There are eight primitive types in Java. In no particular order, they are int, double, boolean, float, char, byte, long and short.  For this course we will be using only int, double, and boolean.
- [ ] **int** is short for integer deals with whole numbers
- [ ] **double** is a 64 bit data type that stores decimal numbers
- [ ] **boolean** is used to represent true or false values
- [ ] **float** is very similar to a double but uses less memory
- [ ] **char** is a 16 bit unicode with a minimum value of \u0000 (0) to uffff (65,535)
- [ ] **byte** is an 8 bit integer with a range from -128 to 127
- [ ] **long** is a 64 bit datatype with a minimum value of -2^63 to 2^63
- [ ] **short** is a 16 bit datatype with a minimum value of -32,768 to 32,767

Non-primitive data types include a String, Arrays and Classes.
- [ ] **String** is a data type that is a collection of characters encompassed by quotes
- [ ] **Arrays** are used to store multiple values (think 'list')
- [ ] **Class** is an object constructor, blueprint, for creating objects.

### Variable Naming Convention
- [ ] Always choose a name that indicates the purpose of the variable
- [ ] A variable cannot begin with a number
- [ ] A variable must not have spaces
- [ ] A variable cannot begin with any special characters
- [ ] A variable cannot have the same name as a Java keyword

When you declare a variable, you must state the variable type along with the variable name followed by the value assignment to the variable.</br>  For example:  *int height = 72;*</br></br>
Once you have declared the variable type, you <b> do not need to do it again </b> to reassign a value to the variable.</br> Example:  </br>*int height = 72;</br>height = 70*</br></br>
If you declare a variable as *final* you cannot change the value of it.  We can refer to the *final* variable as immutable (unchanging).  Anotehr variable rule is that *final* variables are written as ALL CAPS to remind you that they cannot change.</br> Example:</br> final double PI = 3.14159;</br></br>

## Assignment 1
### Allowance
Write a program that will determine who receives an allowance or not.  Use the information below as a guide:
- [ ] Allowance is always $30.00/ week
- [ ] Non-teenagers do not receive an allowance
- [ ] Jon is 16 years old
- [ ] Ed is 12 years old
- [ ] Michael was born fours years before Jon
- [ ] Print out who receives an allowance and who does not by using an int, double and boolean variables.

**Example Output:**<br>
Jon's age is 16<br>
Eligible for allowance? True<br>
Jon's weekly allowance is $30.00<br>
<br>
Ed's age is 12<br>
Eligible for allowance? False<br>
Ed's weekly allowance is $0.00<br>
<br>
Michael's age is 20<br>
Eligible for allowance? False<br>
Michael's weekly allowance is $0.00<br>

## Assignment 2
Use a Scanner object to create an input feature in your program.  Click on [Scanner_Input](https://github.com/AP-CSA-JAVA/CSA_JAVA-Course/files/8455326/Scanner_Input.pptx) to learn more.  Create four questions that will ask the user for a string, int, double, and a boolean.  From the user's response, you will return (print statement) a sentence that includes the data types listed above.  
- [ ] string
- [ ] int
- [ ] double
- [ ] boolean
- [ ] print statement that includes all for data types

There is no test to run when you are complete. Please screenshot your code with result and include it in your assignment.


## Expressions and Assignment Statements
Math Operators are a very important part of computing. Below are the most common operators that we will be using in this course.
| Symbol | Name  | Usage |
| :---:  | :---: | :---: |
| * | Multiplication | multiply two values together |
| / | Division | divide two values |
| % | Modulo | the remainder after dividing two values |
| + | Addition | add two values together |
| - | Subtraction | subtract two values |

**Note** When you divide an integer by zero your program will return an <i>ArthmeticException</i> error.

### Please Excuse My Dear Aunt Sally
In Java, the order of operation works pretty much the same with the exception of the modulo.</br>Take for example the following math equation: **5 + 12 * 18 - 10 / 2 % 2**

| Step  | Operation        | Result |
| :---: | :---:            | :---:  |
|  1    | Multiply 12 * 18 | = 216  |
|  2    | Divide 10 / 2    | = 5    |
|  3    | Modulo 5 % 2     | = 1    |
|  4    | Add 5 + 216      | = 221  |
|  5    | Subtract 221 - 1 | = 220  |

## Assignment 1
### Calculate your weight on Jupiter

```
The expression F=ma allows you to calculate your weight (in newtons) based on your mass (in kilograms)
the acceleration due to gravity on Earth (9.81 m/sec2). A typical mass of a human might be 58.9 kg.

F = ma
F = (58.9 kg)(9.81 m/s^2)
F = 578 Newtons
One newton is equal to 0.225 lbs. So on Earth, this human weighs 130 lbs.

F = (578 N)(0.225 lbs/ 1 N) = 130 lbs

But Jupiter is more massive than the Earth. The force of gravity is stronger, making the acceleration 
due to gravity much larger (24.79 m/sec^2). Below is a list of variables that will be used in the program.

Using the equation below, you can determine what your weight on Jupiter would be in pounds and not have 
to worry about converting units.

(weightOnJupiter) = (weightOnEarth)/1 x (jupiterGravity)/(earthGravity)

weightOnJupiter = 130
earthGravity = 9.81 
jupiterGravity = 24.79
weightOnJupiter = weightOnJupiter / earthGravity * jupiterGravity

```
**Using the chart below, create a program called GalaxyWeight that outputs information of the users weight
on three different planets and takes the average of those weights.  You will use the <i>scanner class</i> for 
this assignment.**

| Planet | Acceleration Due to Gravity (m/sec^2) |
| :---: | :---: |
| Mercury | 3.59 |
| Venus | 8.87 |
| Mars | 3.711 |
| Jupiter | 24.79 | 
| Saturn | 11.08 |
| Uranus | 10.67 |
| Neptune | 11.15 |

## Assignment 2
### Simple Math
- [ ] Create a program that will ask the user for two distinct numbers (integers)
- [ ] Use the scanner class to receive input from the user  
- [ ] Store those values and perform some basic operations with those numbers
- [ ] Make sure to use the exact same wording and spacing to pass the test

**Example Output**
```
Enter first number:
20
Enter second number:
5

Sum: 25
Difference: 15
Product: 100
Dividing: 4 with remainder 0

```



## Compound Assignment Operators

In Java, you can modify a variable by referencing it, performing an operation on it, and assigning the result back to the variable. Thus, you can reference a variable to change its own value. For example, if x equals 0 , the following statement modifies x.</br>

```
public class Main
{
  public static void main(String[] args)
  {
    x = 0;
    x = x + 1; //common programming convention
    System.out.println("x = " + x);
  }
}
Output:
x = 1
```

In algebra, this is an impossible statement, but in programming, the assignment operator makes this a simple and logical statement. 
To interpret assignment statements such as this, begin with the first instruction to the right of the assignment operator.

In Java, a strong convention is to declare variables close to where they are first used, at the beginning of a code block. 
A code block is denoted by curly braces, { }.  Notice that the print statement uses quotes around 'x = ' followed by plus(+) sign.
This is referred to as a **concatenation operator** where you can add a string literal to a variable.

Java like other programs has simplified the compound operators.  **Compound Assignment Operators** performs two tasks in one step.  It performs a mathematical calculation by and assignment.  It is written as:  
```
x +=1

// notice the simplicity of the code versus the code below.
x = x + 1

// What would happen if you accidently type the plus sign in after the equal sign?
// How would that affect your program?
```
</p>
</details>


```ruby
require 'redcarpet'
markdown = Redcarpet.new("Hello World!")
puts markdown.to_html
```
