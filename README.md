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



## Why Programming? Why Java?

Every Java program begins with the creation of a class.  Consider a class as a blueprint for your program.  In this instance, we created a class called MyFirstClass.  Within the class there is a main method that is required to execute the program.  Below is a simple program that will print "Hello, World".</br>Notice that with every ' { ' there is a corresponding ' } '.  In class, you may hear me refer to it as a curly brace.  A missing a curly brace is one of the most common errors among new programmers.  The name 'public' allows users to be able to see the specific parts of your program.  Notice also that the name of the class starts with a capital letter.  The main class with always start with a capital letter.
![first_Java](https://user-images.githubusercontent.com/12989939/162324090-a9292f5d-3c02-46d8-bb05-e69cb0f72845.PNG)

Notice that within the main method there is a print statement.  Let's break down this print statement. 
<p align="center"><b> System.out.println("Hello, World");</b></p>

- [ ] <b>System</b> is a class defined in the java lang package.</br>
- [ ] <b>out</b> is a public static field of the PrintStream type.</br>
- [ ] <b>println()</b> is invoked by the PrintStream class.</br>
- [ ] <b>NOTE</b> <i>println()</i> when executed will return to the next line. Whereas <i>print()</i> will execute the string literal but not return to the next line. You can also create a new line inside a print statement by adding   <b>\n</b>  anywhere inside the quotation marks of a print statement.

With every program that you will submit, I want you to follow the convention below.
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
- [ ] **int** short for integer deals with whole numbers
- [ ] **double** is a data type that stores decimal numbers
- [ ] **boolean** is used to represent true or false values
- [ ] **float** 
- [ ] **char**
- [ ] **byte**
- [ ] **long**
- [ ] **short**

### Variable Naming Convention
- [ ] Always choose a name that indicates the purpose of the variable
- [ ] A variable cannot begin with a number
- [ ] A variable must not have spaces
- [ ] A variable cannot begin with any special characters
- [ ] A variable cannot have the same name as a Java keyword

When you declare a variable, you must state the variable type along with the variable name followed by the value assignment to the variable.</br>  For example:  *int age = 12;*</br></br>
Once you have declared the variable type, you do not need to do it again to reassign a value to the variable.</br> Example:  </br>*int age = 12;</br>age = 13*</br></br>
If you declare a variable as *final* you cannot change the value of it.  We can refer to the *final* variable as immutable (unchanging).  Anotehr variable rule is that *final* variables are written as ALL CAPS to remind you that they cannot change.</br> Example:</br> final double ALLOWANCE = 8.75;</br></br>
