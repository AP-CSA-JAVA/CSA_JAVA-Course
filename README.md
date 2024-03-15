<p align="center">*** This course is designed to prepare students to take the <b>AP Computer Science A </b>Exam *** </br>
*** Excerpts from the course overview was taken from AP CollegeBoard ***</p> 

# AP Computer Science A Course Overview 

AP Computer Science A introduces students to computer science through programming. Fundamental topics in this course include the design of solutions to problems, the use of data structures to organize large sets of data, the development and implementation of algorithms to process data and discover new information, the analysis of potential solutions, and the ethical and social implications of computing systems. The course emphasizes object-oriented programming and design using the Java programming language.

The following big ideas serve as the foundation of the course, enabling students to create meaningful connections among concepts:</br>
<b>Modularity</b>: Modularity in object-oriented programming allows us to use abstraction to break complex programs down into individual classes and methods.</br>
<b>Variables</b>: Variables create data abstractions, as they can represent a set of possible values or a group of related values.</br>
<b>Control</b>: Doing things in order, making decisions, and doing thesame process multiple times are represented in code by usingcontrol structures.</br>
<b>Impact of Computing</b>: Computers and computing haverevolutionized our lives. To use computing safely and responsibly,we need to be aware of privacy, security, and ethical issues.</br>

For this course we will be using various Integrated Development Environment (IDE) software to help you manage your programs, data files, & images.  Coding Rooms will be our primary online IDE for this course.  For your personal development and collaboration, you may want to use an online IDE that will allow you to collaborate with peers.  If you are using a personal laptop, a good desktop IDE to install is VS Code. 

## Anatomy of a Java Program
<details><summary>Click Here</summary>
 <p>
  In this section, I will provide the basics of a Java program.  This information will be covered in more detail in Unit 5.  
  
  The topics that will be covered are:
  - Comments
  - Reserved Words
  - Modifiers
  - Statements
  - Blocks
  - Classes
  - Methods
  - The main method
  
  **Comments**
  - One-line comments are denoted with two forward slashes. //
  - Block comments are denoted with a forward slash followed by an asterisk and concludes with an asterisk followed by a forward slash.  It looks like this:  /* your comments here */
  - Comments are ignored during the program execution
  - Include a summary at the beginning of the program to explain what the program does, its features, its supporting data structures, and any unique techniques it uses.
  
  **Reserved Words**
  - Words that have a specific purpose for the compiler
  - These reserved words cannot be used for any other purpose in the program (variable, method, class, etc.)
  - Key words are lower case (Java is a case sensitive language)
  - Examples of key words include:
  
  |      |     |     |     |
  | --- | --- | --- | --- |
  | public | void | boolean | private |
  | class | int | continue | protected |
  | static | double | return | package |
  
  
  **Modifiers**
  - Java uses certain reserved words called modifiers that *specify the properties of the data, methods, and classes and how they can be used.
    - Examples include `public`, `static`, `private`, `final`, `abstract`, and `protected`
  - A `public` datum, method, or claqss can be accessed by other programs.
  - A `private` datum or method cannot be accessed by other programs.
  
  **Statements**
  - A statement is an action or a sequence of actions.
  - The print statement `System.out.println("Hello World!");` in the program is a statement to display the string "Hello World!"
  - Every statement in Java ends with a semicolon(;).
    
  **Blocks**
  - A pair of curly braces {} in a program forms a block that groups contents of a program to be executed.
  
  ```java
  public class Main {
     public static void main(String[] args) {
        System.out.println("Hello World!");
      }
  }
  ```
  
  **Classes**
  - The class is the most important construct in Java!
  - A class is a template or bluepring for objects. To program in Java you must understand classes and be able to write and use them.
  - A program is defined by using one or more classes.

  
  **Method**
  - `System.out.println` is a method.
  - Method is a collection of statements that performs a sequence of oeprations to display a message on the console.
  - It is used by invoking a statement with a string argument.  The string argument is enclosed within parentheses.
    - In this case, the argument is "Hellow World!"  YOu can call the same println method with a different argument to print a different message.
  
  **main() Method**
  - The main method provides the control of program flow.  The Java interpreter executes the application by invoking the main method.
  - The main method looks like this:
  
  ```java
  public static void main(String[] args) {
  
     // Statements;
  }
  ```
  
  
  **Programming Style and Documentation in Java**
  - Appropriate comments and comments style:
    - Include a summary at the beginning of the program to explain what the program does, its key features, its supporting data structures, and any unique techniques it uses.
    - Include your name, class, lecture's name, date, and a brief description of your code at the beginning of the program.
  
  
  **Comment Style**
  - A "block" comment is placed between /* and */ marks:
  - Example:
  
  ```java
  /* Activity 2.5.2 Java Methods
     Author: Your Name
     Date:   5/17/2023
     Notes:  Version 1  */
  ```
  - A single-line comment foes from // to the end of the line:
  ```java
     int x = 0; //variable for user quantity
  ```
  - Javadoc Comments are denoted with a forward slash and two asterisks and ends with one asterisk and a forward slash.  Each line will also have an asterisk.
  
  ```java
  /**
   *     Returns total sales from all vendors:
   *     sets <code>totalSales</code> // Can use HTML tags
   *     to 0.
   *
   *     @return total amount of sales from all vendors
   */
  ```
  
  
  **Naming Conventions**
  - Choose meaningful and descriptive names
  - Variables and method names:
    - User lowercase - if the name consists of several words, concatenate all into one, use lowercase for the first letter of the first word, and capitalize the first letter of each subsequent word in the name.
  - For example, the variables `radius` and `area`, and the method `computeArea`.
  - Class names:
    - Capitalize the first letter of each word in the name.
    - For example, the class name `ComputeArea`.
  - Constants:
    - Capitalize all letters in constants, and use underscores to connect words.
    - For example, the constant `PI` and `MAX_VALUE`.
  
  
  **Proper Indentation and Spacing**
  - Indentation
    - Indent two spaces
  - Spacing
    - Use blank line to separate segments of the code.
  
  
  **Block Styles**
  - Use end-of-line style for braces.
  
  
  ```java
  public class Main
  {  //  <-- Next-line style
    public static void main(String[] args)
    {
       System.out.println("Block Styles");
    }
  }
  ```

             
   ```java
  public class Main  {      //  <-- End-of-line style
    public static void main(String[] args) {
       System.out.println("Block Styles");
    }
  }
  ```
  
  Every Java program will begin like this:
  
  ![Main Class and Method in java](https://github.com/AP-CSA-JAVA/CSA_JAVA-Course/assets/12989939/e7f0bd1f-69b7-42da-b824-0ed8f9d0f460)
  
  
  
   </p></details>
   
   
-------------------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------------------

## Syllabus
<details><summary>Click Here</summary>
 <p>
  
  | Expectations |
  | ----------- |
  | - Be on time and prepared for class. This includes but is not limited to having you log in for your Canvas course, course website, and digital notebook. |
  | - Be on time and prepared for class. This includes, but is not limited to having your notebook, assignments, pen/pencil, and paper. Students should be seated in their desks when the tardy bell rings to avoid confusion. |
  | - Have a good attitude about learning. Be prepared to actively participate in class. Accept feedback with a positive attitude. |
  | -	Students will follow all written and oral directions as well as safety precautions. This is for your own safety as there will be hands-on activities. | 
  | -	Complete all assignments in a timely fashion. |
  | -	Be respectful of others and their property. |
  | -	Take care of the learning environment. Keep your area neat and clean. Always clean your space before you leave for the day. Put materials away in their proper place. |
  
  
  | Policy on Academic Honesty |
  | -------------------------- |
  | Students are allowed to help each other on assignments with general problem-solving strategies, ideas, and algorithms, but all solutions should be your own. In practice, this means that, while students can discuss programs and questions, all lines of code should originate from your own mind. This course uses technology in ways no other course does. If you are unsure about the ethical implications of what you are doing, you should ask. Claiming ignorance is not a reasonable excuse. |
  | If you use other sources for help (websites like stackoverflow, AI tools like ChatGPT, friends, etc.), please cite them in the comments of your code indicating where you got help and whether certain sections of code came from that help.  Please make sure you understand any code that you use from another source. ChatGPT tends to generate compact and complex code, so make sure you read the explanation of the code and ask for simpler code if you don’t understand it. Never copy the text of my assignments into an AI tool to generate a complete solution. You can use AI tools and other sources for idea generation, code debugging, and help with understanding or generating small parts of code to get you started, but you should not have them do all of the work for you. Be in charge of your own learning, and make sure you learn what the assignment is asking you to practice! |
  
  
  | Electronic Devices |
  | ------------------ |
  | Students should be engaged during class, and cell phones and other electronic devices are a distraction that prevent students from fully participating in class. Specifically, students should not be accessing cell phones, smart phones, or any devices during class without permission from the teacher. Phones should be set to silent or turned off in class.  |
  
  
  | Computer Lab Policies |
  | -------------------- |
  | Do not change any of the settings on the computers. |
  | Do not download/ install any programs (including games) to the computer. |
  | Do not access inappropriate content on the internet. |
  | Report any broken equipment immediately to the instructor. |
  
  
  | Academic Support |
  | ---------------- |
  | Peer Tutoring (Monday - Friday/ before and after school) |
  | By appointment only |
  
  
  | Grading | Percentage |
  | ------- | ---------- |
  | Test/ Quizzes | 40% |
  | Projects/ Presentations | 40% |
  | Assignments | 10% |
  | Portfolio/ Final Project | 10% |
  
  
  | Mak-up & Late work policy |
  | ------------------------- |
  | Students are responsible for makeup work when absent. Per district policy, each student will have **one school day** for each day that they are absent. |
  | *To make up a quiz or a test, it is the student’s responsibility to contact the teacher to set an agreed upon date & time.*  Students must contact the teacher within two school days upon their return to make-up the missing quiz or test.  Failure to do so may result in a zero. |
  | Handouts will be placed in a makeup folder with the students name and it is the student’s responsibility to check this folder when absent before consulting the instructor. |
  | Due dates for every assignment are posted in Canvas. Unless otherwise stated, assignments are due on those days. |
  | I recognize that there are issues beyond your control.  In this instance, you may use your allotted two flex-days in a semester.  These days allow you to submit a late assignment (not projects or presentations) up to two school days beyond the due date, without penalty. You can use these days for any assignment and for any reason. You will need to fill out a **google form** and upload the late assignment. |
  | Once you’ve exhausted your flex days, then point deductions will occur for any assignment submitted after the deadline. Each day that an assignment is late the assignment or project will be reduced by 5% up to 59%.  |


 </p></details>
 


## Table of Contents 
<details><summary>Click Here</summary>
 <p>

The course content is organized into ten commonly taught units:</br>
</br>
| Chapter 1: Java Code Fundamentals | Chapter 2: Iteration and Classes | Chapter 3: Arrays | Chapter 4: Inheritance and Recursion |
| :---: | :---: |:---: | :---: |
| **Unit 1 - Primitive Types** | **Unit 4 - Iteration** | **Unit 6 - Arrays** | **Unit 9 - Inheritance** |
| [Why Programming? Why Java?](https://ap-csa-java.github.io/CSA_JAVA-Course/Chapter_1/Unit1.html#why-programming-why-java) | While Loops | Array Creation and Access | Creating Superclasses and Subclasses |
| [Variables and Data Types](https://ap-csa-java.github.io/CSA_JAVA-Course/Chapter_1/Unit1.html#variables-and-data-types) | For Loops | Traversing Arrays | Writing constructors for Subclasses |
| [Expressions and Assignment Statements](hhttps://ap-csa-java.github.io/CSA_JAVA-Course/Chapter_1/Unit1.html#expressions-and-assignment-statements) | Developing Algorithms Using Strings | Enhanced Loops for Arrays | Overriding Methods |
| [Compound Assignment Operators](https://ap-csa-java.github.io/CSA_JAVA-Course/Chapter_1/Unit1.html#compound-assignment-operators) | Nested Iterations | Developing Algorithms Using Arrays | Super Keyword |
| [Casting and Range Variables](https://ap-csa-java.github.io/CSA_JAVA-Course/Chapter_1/Unit1.html#casting-and-range-of-variables) | Informal Code Analysis | Project: Memory Game | Creating References Using Inheritance Hierachies |
| [Project: Numbers Riddle](https://ap-csa-java.github.io/CSA_JAVA-Course/Chapter_1/Unit1.html#numbers-riddle-project) | Project: Consumer Review Lab |  | Polymorphism |
|  |  |  | Object Superclass |
|  |  |  | Project: Celebrity Lab |
| **Unit 2 - Using Objects** | **Unit 5 - Writing Classes** | **Unit 7 - ArrayList** |  |
| Objects: Instances of Classes  | Anatomy of a Class | Introduction to ArrayList |  |
| Creating and Storing Objects | Constructors | ArrayList Methods |  |
| Calling a Void Method | Documentation with Commands | Traversing ArrayLists |  |
| Calling a Void Method with Parameters | Accessor Methods | Developing Algorithms Using ArrayLists |  |
| Calling a Non-Void Method | Mutator Methods | Searching |  |
| String Objects: Concatenation, Literals, and More | Writing Methods | Sorting |  |
| String Methods | Static Variables and Methods | Project: Data Lab |  |
| Wrapper Classes: Integer and Doubles | Scope and Access |  |  |
| Using a Math Class | `this` Keyword |  |  |
| Project: Mad Libs | Ethical and social Implications of Computing |  |  |
|  | Project: Game of Nim |  |  |
|  | Project - Sell my Pet Food |  |  |
| **Unit 3 - Boolean Expressions and if Statements** |  | **Unit 8 - 2D Arrays** | **Unit 10 - Recursion** |
| Boolean Expression |  | 2D Arrays | Recursion |
| If Statements and Control Flow |  | Traversing 2D Arrays | Recursive Searching and Sorting |
| if/ else Statements |  | Project: Stenography Lab | Project: TBD |
| else if Statements |  | **Problem:** Data Lab | **Problem:** Almost Anything! |
| Compound Boolean Expressions |  |  |
| Equivalent Boolean Expressions |  |  |
| Comparing Objects |  |  |
| Project: Choose Your Path |  |  |
| **Problem:** Escape Room |  |  |

 </p></details>
 
## AP Computational Thinking Practices: Skills

<details><summary>Click Here</summary>
 <p>


| Practice 1: Program Design and Algorithm Development |
| ---------------------------------------------------- |
| **1.A** Determin an appropriate program design to solve a problem or accomplish a task (not assessed) |
| **1.B** Determine code that would be used to complete code segments |
| **1.C** Determine colde that would be used to interact with completed program code |


| Practice 2: Code Logic |
| ---------------------------------------------------- |
| **2.A** Apply the meaning of specific operators |
| **2.B** Determine the result or ouput based on statement execution order in a code segment without method calls (other than output) |
| **2.C** Determin the result or output based on the statement execution order in a code segment containing method calls |
| **2.D** Determine the number of times a code segment will execute |


| Practice 3: Code Implementation |
| ---------------------------------------------------- |
| **3.A** Write program code to create objects of a class and call methods |
| **3.B** Write program code to design a new type by creating a class |
| **3.C** Write program code to satisfy method specifications using expressions, conditional statements, and iterative statements |
| **3.D** Write program code to create, traverse, and manipulate elements in 1D or ArrayList objects |
| **3.E** Write program code to create, traverse and manipulate elements in 2D array objects |

| Practice 4: Code Testing |
| ---------------------------------------------------- |
| **4.A** Use test-cases to find errors or validate results |
| **4.B** Identify errors in program code |
| **4.C** Determine if two or more code segments yield equivalent results |


| Practice 5:  Documentation |
| ---------------------------------------------------- |
| **5.A** Describe the behavior of a given segment of program code |
| **5.B** Explain why a code segment will not compile or work as intended |
| **5.C** Explain how the result of program code changes, given a change to the initial code |
| **5.D** Describe the initial conditions that must be met for a program segment to work as intended or described |

| Units | Exam Weighting |
| ----- | -------------- |
| Unit 1: Primitive Types | 2.5 - 5% |
| Unit 2: Using Objects | 5 - 7.5% |
| Unit 3: Boolean Expressions and if Statements | 15 -17.5% |
| Unit 4: Iteration | 17.5 - 22% |
| Unit 5: Writing Classes | 5 - 7.5% |
| Unit 6: Array | 10 - 15% |
| Unit 7: ArrayList | 2.5 - 7.5% |
| Unit 8: 2D Array | 7.5 - 10% |
| Unit 9: Inheritance | 5 - 10% |
| Unit 10: Recursion | 5 - 7.5% |
  
  
 </p></details>

## AP Computer Science A Vocabulary

<details><summary>Click Here</summary>
 <p></br>
 
 **Below is a comprehensive list of vocabulary words every AP Computer Science A student should be familiar with.**
 
 *Did I miss a word? Please let me know...*

| Term  | Definition |
| :---: | :--- |
| !	| A logical operator that reverses the state of a boolean value |
| &&	| A logical operator that evaluates to true only if both sides are true| 
| ==	| An operator to compare two pieces of primitive data or two addresses| 
| ![2bars](https://user-images.githubusercontent.com/12989939/164557376-cd1f0068-ad3d-4115-81e9-75726b8c64e9.PNG)	| A logical operator that evaluates to true if either side is true | 
|abstract	 | A class that is never meant to be instantiated except through a concrete subclass | 
|accessor	 | A method that returns the value of a private instance variable (aka getter) | 
|add	 | The method for putting a new item in a list | 
|addresses	 | The location in memory at which an object is stored | 
|Aggregation	 | Has - A Object relation | 
|algorithm	 | A step by step process for solving a problem | 
|AND	 | Only true if both inputs are true
| arithmetic operators	 | +, -, *, /, % | 
 | array	 | A collection of pieces of data stored as indexed items under one name | 
 | ArrayIndexOutOfBoundsException	 | An error that happens when you refer to an element number larger than your array | 
 | ArrayList	 | A template class for keeping track of collections of data with a changing size | 
 | assembler	 | The part of the IDE that turns your code into assembly code | 
 | assembly language	 | The instruction set used by the CPU (aka machine code) | 
 | assign	 | Set a variable to a value | 
 | attribute	 | A variable property of an object (aka field) | 
 | autoboxing	 | A feature of Java that converts primitive types to their class counterpart | 
 | base 2 logarithm	 | A mathematical operation that returns what power of 2 a number is | 
 | base case	 | A condition that triggers a recursive process to end | 
 | base class	 | A class that another class inherits from (aka superclass) | 
 | behavior	 | An ability of an object (aka method) | 
 | Binary Search	 | A search technique on ordered data that cuts the list in half on each check | 
 | bit	 | A binary digit | 
 | block	 | A piece of code that is separated from the code around it | 
 | body	 | The code inside of a method | 
 | boolean	 | A type of variable or operation that evaluates to true or false | 
 | braces	 | Symbols that define the start and end of a block of code | 
 | break	 | A statement to jump outside of a loop or conditional branch | 
 | bugs	 | Problems that prevent code from working properly | 
 | byte	 | Eight bits | 
 | bytecode	 | The Java code that is ready to be processed by an interpreter | 
 | capacity	 | The amount of space allocated for a List | 
 | case	 | Identifies a code choice of a switch statement | 
 | cast	 | Forcing an expression of one data type to fit into a variable with a different type | 
 | catch	 | A keyword used to collect and handle specific types of exceptions | 
 | change	 | Setting a part of the condition to a different value so the code doesn't loop infinitely | 
 | char	 | A data type for holding a single letter, digit or symbol | 
 | class	 | Code that defines the attributes and behaviors of an object | 
 | class  | definition	All of the method headers and instance variables that make up a class | 
 | class  | declaration	The header line of a class | 
 | class  | variable	A variable that is shared among all instances of a class (aka static field) | 
 | client	 | A class that uses another class | 
 | column	 | A vertical organization of items in a 2D array, the second set of brackets | 
 | comments	 | A written description of what code does for human readers | 
 | Comparable	 | An interface requiring compareTo that allows built-in sort and searches to be used on a class | 
 | comparator	 | A class implementing compare that creates a tool for sorting and searching | 
 | compare	 | A tool that is used to check the order between two objects passed as parameters | 
 | compareTo	 | A method that is used to check the order between an object and a single parameter | 
 | comparisons	 | When an expression or constant is checked for a relationship with another | 
 | compatible	 | Data types that contain similar enough values that they can be cast to each other | 
 | compiler	 | The part of an IDE used to change turn code into software | 
 | compound	 | A complex line of code with made of multiple expressions | 
 | compound assignment operator  | 	+=, -=, *=, /=, %= | 
 | concatenation	 | An operation that creates a new string out of other strings by sticking them together | 
 | concrete	 | A class that can be instantiated, a non abstract class | 
 | condition	 | A statement that can be evaluated to determine if a piece of code will be run | 
 | conditional	 | A statement that is dependent on an expression that evaluates to true or false | 
 | console application	 | A piece of software that runs without a GUI | 
 | conspicuous | 	Variable names that clearly describe the value they represent | 
 | constant	 | A variable that cannot change once its initial value is assigned | 
 | constructor	 | A piece of code that is run when an object is instantiated/created | 
 | contents	 | What is inside of a data set or element | 
 | convention	 | An agreed upon way of coding that is not required by the computer | 
 | convert	 | Changing values of one type into another | 
 | copy constructor	 | A special constructor that takes a parameter of the same type as the class being created | 
 | CPU	 | The "brain" of your computer | 
 | data type | The kind of information that can be held in a variable | 
 | debugger	 | The part of an IDE that helps you find errors in your code | 
 | declaration	 | The line where a class, method or variable is first created | 
 | decrement	 | Decreasing a value by 1 | 
 | default constructor	 | A constructor provided by the compiler when no constructor is coded | 
 | DeMorgan's Laws	 | Rules that describe how logical operations relate and transform into each other | 
 | derived class	 | A class that inherits from another class (aka subclass) | 
 | digital	 | Using whole numbers | 
 | direct manipulation interface	 | An interface that allows the user to interact with program constructs manually | 
 | do-while	 | A type of loop with the condition at the end that always executes at least once | 
 | document	 | To create help files and comments to make notes for future users and editors | 
 | dot notation	 | A way of referencing a method or variable that is part of a class | 
 | double	| The most common data type for decimal numbers | 
 | editor	 | The part of an IDE used to type code | 
 | element	 | A individual item in an array or list | 
 | empty string	 | A string variable that has memory allocated but no text ("") | 
 | encapsulation	 | The practice of using setters and getters to control access to private variables | 
 | equals	 | A method that compares objects to see if they are the same | 
 | equation	 | A mathematical statement that two expressions have the same value | 
 | evaluate	 | Determine the current value of an expression | 
 | exception	 | An problem that occurs while a program is running that causes it to crash | 
 | exception handling	 | Code intended to catch runtime errors and handle them to prevent a crash | 
 | executable	 | A file ready to be run as a program by an operating system | 
 | expression	 | A piece of code that will be evaluated when it is run | 
 | extends	 | A keyword that is used to cause a class to inherit from another class | 
 | false	 | The opposite of true | 
 | field	 | A variable created and stored at the object level (aka instance variable) | 
 | final	 | A keyword used for creating a constant | 
 | finally	 | A keyword that attempts to run code after an exception has happened | 
 | flowchart	 | A graphic showing the paths that execution of a program may follow | 
 | for	 | A type of loop with the initialization, condtion and chage built into the header. A fixed number of times loop. | 
 | for-each loop	 | A special code block for traversing an array or list | 
 | formatting	 | Making numbers appear in as text in a particular way | 
 | gate	 | A component that does simple binary calculations | 
 | generic type	 | A superclass type shared by multiple subclass types | 
 | getter	 | A method that returns the value of a private instance variable (aka accessor) | 
 | GUI	 | The graphical user interface for interacting with a user | 
 | hardware	 | Physical component of a device | 
 | HAS-A	 | A relationship between classes where one class is used by another | 
 | hierarchy	 | A system for organizing in which each item is a superclass and/or subclass of another item | 
 | high level language	 | A language like Java that is converted to machine code before it is executated | 
 | IDE	 | An integrated development environment that contains the tools you need to write a program | 
 | if-else	 | The keywords used for conditional branching | 
 | immutable	 | A value that cannot be changed once created | 
 | implementation	 | The final code used to solve a programming problem | 
 | implements	 | A keyword that indicates a class will perform the job of an interface | 
 | implicit	 | Something that is assumed to be the case if not stated otherwise | 
 | import	 | A keyword that allows you to use code from another package in your code | 
 | increment	 | To increase a value by a set amount | 
 | indentation	 | Shifting code to the right to indicated that it is inside a block | 
 | index	 | The number that represents each letter or element in a String, array or a List | 
 | IndexOutOfBoundsException	 | An error that happens when code accesses an element in an array that doesn't exist | 
 | infinite loop	 | A piece of code that repeats itself forever | 
 | information hiding	 | The practice of making instance variables private to protect the internals operations of the code | 
 | inheritance	 | When a subclass gets code and variables originally created in the parent class | 
 | initialize	 | Allocate the memory for an array and set up beginning values | 
 | Insertion Sort	 | A sort with O(n^2) speed that finds the correct position of each element swapping as needed | 
 | instance	 | An object based on a class that exists when a program is running | 
 | instance variable	 | A variable stored at the class level (aka field) | 
 | instantiate	 | Creating and setting up and actual instance of a class to link to its variable, uses "new" keyword | 
 | int	 | The most common data type for non decimal numbers | 
 | integer division	 | The answer for why 7/2 is 3 and not 3.5 | 
 | interface	 | A programming construct that provides headers of required methods, but no code or variables | 
 | interpret	 | Preparing a Java application to be run for a specific operating system | 
 | invoke	 | A word meaning to call a method and run its code | 
 | IS-A	 | A subclass/superclass relationship between classes | 
 | iteration	 | One of many times executing the same piece of code | 
 | iterative statements	 | Sections of code that repeat in a predictable order | 
 | JavaDoc	 | A tool that creates documentation for code using comments with special syntax and keywords | 
 | JDK	 | The Java Development Kit needed for writing Java code | 
 | key	 | A piece of data in an object used to sort on | 
 | length	 | The number of items in an array | 
 | length() method	 | Used to find the number of characters in a string | 
 | literal strings	 | Text that is written in code between quotation marks | 
 | local variable	 | A variable created inside a method or other block of code | 
 | logic error	 | A coding mistake that causes code to act differently than planned | 
 | logical operators	 | Operators that combine or compare boolean expressions (eg. &&, ||, !) | 
 | loop invariant	 | A relationship between variables that is checked to determine whether to loop again | 
 | loops	A | ny piece of code that repeats when it reaches the end | 
 | machine code	 | A CPU specific binary language (aka assembly code) | 
 | Mergesort	 | A sort with O(n log n) speed that breaks the data set in half calling itself recursively | 
 | method	 | Code that defines an ability or behavior of an object | 
 | minimized	 | Code that takes the least space possible | 
 | modifier	 | A method used to change the value of a private variable (aka setter, mutator) | 
 | modulus	(%) | An operator for finding the remainder from integer division | 
 | motherboard	 | Computer component all other parts connect to | 
 | mutator	 | A method used to change the value of a private variable (aka setter, modifer) | 
 | nested	 | Code that is inside another block of code | 
 | nested loop	 | A piece of repeating code inside another piece of repeating code | 
 | new operator	 | A keyword used when calling the constructor for an object being instantiated | 
 | newline	 | A character that tells the console to move the cursor to the next line | 
 | no-args constructor	 | An empty constructor, one that takes no parameters | 
 | NOT | Reverses value of the input | 
 | null	 | A keyword meaning "has no value" | 
 | O notation	 | A way of showing the relative theoretical speed of a search or sort algorithm | 
 | object	 | An instance of a class that exists when a program is running | 
 | object model	 | A planning tool used to design a class before coding it | 
 | object oriented programming	 | A programming philosophy in which code is written to represent real world things or ideas | 
 | OR	 | True if any input is true | 
 | order of operators	 | The rules that determine how the computer chooses which operations are evaluated first | 
 | overloaded	 | When a method is written in different ways with two or more possible parameter sets | 
 | package	 | A collection of java classes | 
 | parameter	 | A variable whose value or reference is passed into a method | 
 | parse	 | Move through a string one letter or word at a time | 
 | partitioning	 | The process of breaking a set into two or more pieces | 
 | pass by reference	 | When a parameter is sent as a memory location | 
 | pass by value	 | When a parameter is sent as data | 
 | pattern recognition	 | The ability to recognize a form of organization in a data set | 
 | peripheral	 | Computer part not inside the chassis | 
 | pivot	 | A value in a set used to split the set into two parts on which the data will be sorted | 
 | polymorphism	 | The concept that a single named behavior can be performed differently by various subclasses | 
 | primitive type | One of the built-in non-object data types that is stored by value | 
 | printf	 | A special method for Strings that includes formatting characters in the string literal | 
 | private	 | A keyword that makes a variable or method accessible from only inside the class | 
 | procedural language	 | A language where programs are expected to operate in a predictable order | 
 | pseudocode	 | A way of designing a program using written descriptions of what the code will be | 
 | public	| A keyword that makes a variable or method accessible from outside the class | 
 | Quicksort	 | A sort with O(n log n) speed that splits the data using a randomly chosen pivot | 
 | RAM	 | Computer component that stores currently in-use data | 
 | readability	 | A measure of how easily something is understood by others | 
 | recursive	 | A piece of code that uses itself to solve the problem | 
 | redundancy	 | Allows a something to be understood even if some of it is missing or wrong | 
 | reference	 | An address that holds the memory location of the variable's data | 
 | regular expression	 | A predefined set of codes for limiting parse and search type String operations | 
 | relational operators	 | Operators that compare two expressions (eg. <>, !=, ==) | 
 | remove	 | A method for taking an item out of a list and filling any gap | 
 | reserved word	 | Special words used by the Java language that cannot be used for naming | 
 | return	 | A statement that causes a method to end and may send back a value to the calling code | 
 | return type	 | The kind of data that will be sent back by a method | 
 | row	 | A horizontal section of a 2D array, the first set of square brackets | 
 | scope	 | The part of code in which a variable exists or is accessible | 
 | search	 | Finding a particular item in a list, array or other collection | 
 | Selection Sort	 | A sort with O(n^2) speed that checks each element against every other element | 
 | Sequential Search	 | A search that checks each element from beginning to end | 
 | set	 | A method for changing the value of an item in a list | 
 | setter	 | A method that is used to change the value of a private variable (aka modifier) | 
 | short-circuit evaluation	 | A chain of relational or conditional expressions that stops evaluating as soon as the result is known | 
 | signature	 | The header line of a method that defines its return type, name and parameter list | 
 | size	 | The number of items in an ArrayList | 
 | software engineering | Planning, designing, building and testing computer programs | 
 | sorting	 | Putting a collection of data in order | 
 | source code	 | The original code created by the programmer | 
 | square brackets	 | Used to create arrays and refer to a specific element | 
 | stack	T | he part of the computer that keeps track currently running layers of code | 
 | statement	 | A complete and syntactically correct line of code | 
 | static field	 | A variable that is shared among all instances of a class (aka class variable) | 
 | static method	 | A method that uses no (non-static) instance variables and can be called without an instance of the class | 
 | String	 | A built-in class for holding words, sentences, parahraphes, etc. | 
 | style	 | The conventions agreed upon by programmers for how to write code to be understood by others | 
 | subclass	 | A class that inherits from another class | 
 | subinterface	 | An interface that inherits from another interface | 
 | subscript	 | A way of writing an index to an array in pseudocode | 
 | substring	 | There are 2 ways to use the substring method. The first returns a substring of the original string. The second method returns a new string from a specified index and extends to a defined end or up to `endIndex - 1`. | 
 | super	 | A keyword that is used to access methods and fields from a base class | 
 | superclass	 | A class that another class inherits from (aka base class) | 
 | superinterface	 | An interface that another interface inherits from | 
 | switch	 | A keyword that chooses what code to run based on a single value | 
 | symbolic	 | A name that represents another value | 
 | syntax	 | The rules for how code must be entered to compile and work | 
 | syntax error	 | A coding mistake that prevents code from compiling | 
 | testing	 | Checking the condition on a piece of code | 
 | this	 | A keyword that refers to the current instance of the class | 
 | transistor	 | A tiny on-off switch | 
 | transmission	 | Moving something from one place to another | 
 | traversal	 | The process of interacting with each element in an array or list in order | 
 | true	 | The opposite of false | 
 | try	 | A keyword that begins a block code that could cause an exception | 
 | Two-Dimensional Array	 | An array of arrays | 
 | uninitialized string	 | A string variable that is named but has nowhere to store its data | 
 | value	 | Data represented by a variable or expression | 
 | variable	 | A named value in a program that can contain a specific type of data | 
 | visual prototyping and design tools	 | Tools that allow an engineer to plan their software through drawings and flow models | 
 | while	 | A type of loop that runs as long as its condition is true | 
 | whitespace	 | Any space, tab or new line charcter in the code | 
 | wrapper class	 | A class designed to add behaviors to a primitive type | 

</p></details>

## Academic Integrity
<details><summary>Click to Open</summary>
<p>
This is a reminder that each student is responsible for their own work.  Assignments that are designated as team/ group assignments must have each students name within the block header.  Other assignments students may collaborate with another student, but each student must submit their own work and the assignment cannot be a facsimile of their peers work.  Submitted assignments that has another student's name on it and not your name will be considered as cheating and subject to the schools policy regarding plagiarism/ cheating.  Furthermore, assignments that have been deemed as plagirised will receive a '0' on the assignment.
 
If you have any questions, please contact me.
 </p>
 </details>

## Java Style Guidelines
<details><summary>Click Here</summary>
 <p></br>
 Please review the Java Style Guidelines
 
**Java Style Guidelines**

Here are guidelines for writing Java programs in this course.
#### Spaces

Put spaces on both sides of arithmetic operators.
```java
// Incorrect
a=(b*4+7.5/c);

// Correct
a = (b * 4 + 7.5 / c);
```
The keywords if, else, for, do, and while are always followed by a space. Put a space between a closing parenthesis and an opening brace. When a closing brace is on the same line as an else, follow it with a space.

```java
// Incorrect
if(a < b){
    for(int i = 0; i < 10; i++){
       j += i * a;
    }
}else{
    j = b * 9;
}
// Correct
if (a < b) {
    for (int i = 0; i < 10; i++) {
       j += i * a;
    }
} else {
    j = b * 9;
}
```
Do not put spaces after an opening parenthesis or before a closing parenthesis:

```java
// Incorrect
for ( int i = 0; i < 5; i++ ) {
    sum = ( sum + i ) * Math.sqrt( 2 );
}
// Correct
for (int i = 0; i < 5; i++) {
    sum = (sum + i) * Math.sqrt(2);
}
```
#### Braces and Indenting
There are several ways of placing braces in your Java source code. One thing they all have in common: closing braces are always the first non-whitespace character on a line. They are never placed at the end of a line:

```java
// Incorrect
if (a < b) {
    result = 22; }
else
    result = 99; }
```
Any of these are correct; the book we are currently using uses the third style:

```java
// Correct
if (a < b) {
    result = 22;
} else {
    result = 99;
}
// Correct
if (a < b)
{
    result = 22;
}
else
{
    result = 99;
}
// Correct
if (a < b) {
    result = 22;
}
else {
    result = 99;
}
```

Always enclose the body of an if clause, else clause, or loop in braces, even when there is only one statement in the body:

```java
// Incorrect
if (a < b)
    result = 22;
else
    result = 99;

for (int i = 0; i < 7; i++)
    result += i * i;
// Correct
if (a < b) {
    result = 22;
} else {
    result = 99;
}

for (int i = 0; i < 7; i++) {
    result += i * i;
}
```

You may indent either two or four spaces, and you may use the TAB character instead of spaces. You have to be correct and consistent in your indenting and placement of braces. Note how the if-else-if chain is aligned in the correct example:

```java
//Incorrect
if (a < b) {
    if (c >= d) {
      result = 2;
  } else if (e == f) 
{
        result = 99;
    }
  }
//Correct
if (a < b) {
    if (c >= d) {
        result = 2;
    } else if (e == f) {
        result = 99;
    }
}
```

#### Names and Declarations

Variable names begin with lower case letters. If you have a multi-word variable name, prefer camelCase to snake_case. If you have a final (constant), use all upper case for its name, and, if it is a multi-word name, use SNAKE_CASE. Names of Java classes begin with a upper case letter:

```java
// Incorrect
class example {
    int Counter;
    double unitprice;
    final double salestaxrate = 0.075;
    // ...
}
// Correct
class Example {
    int counter;
    double unit_price; // acceptable
    double unitPrice;  // preferred
    final double SALES_TAX_RATE = 0.075;
    // ..
}
````

Put only one declaration per line:

```java
// Incorrect
double cut, clarity, caratWeight, color;
// Correct
double cut;
double clarity;
double caratWeight;
double color;
```

#### Long Lines

Limit line length to 75, no more than 79, characters. Many IDEs will let you display a “line length marker” and set its limit. They might also show the current column number in the status bar at the bottom of the editor window.

Prefer multiple println() calls to one print() or println() with multiple \n:

```java
// difficult to read and edit
System.out.print("Weight: " + weight + "\nVolume: " + volume + "\nSurface Area: " + area + "\n");
// better
System.out.println("Weight: " + weight);
System.out.println("Volume: " + volume);
System.out.println("Surface Area: " + area);
```

If you break a formula across lines, you can break with the operator at the end of a line or beginning of the next line. Just be consistent.

```java
// Either of these is correct
double first = (weight * volume) / (length + width / 2 *
    height * height);
double second = (weight * volume) / (length + width / 2 
    * height * height);
```

#### Comments
The code tells you what the program does. Comments should tell you why or how. (The book will often have “what” comments because the book has to explain what a concept is.)

```java
// "what" comment
month += 1; // add one to month
// "why" comment
/* System returns 0-11 for January-December,
 * but people expect months to be 1-12.
 */
month += 1;
```

The exception to this guideline is the comments at the start of your program. These must have your name, the date, and a description of the purpose of the program. The description must be clear enough that someone who has not read the assignment will understand what the program does. These comments are incorrect:

```java
/*
 * Assignment 3
 * J. Fulano - Oct 4, 2525
 */
/*
 * Program uses if statements
 * and while loops.
 * J. Doe - Oct 4, 2525
 */
```

This one is correct:

```java
/*
* Ask user to enter a positive integer, and print out whether
* that integer is prime or not.
* Program does this repeatedly until user enters zero as input; 
* negative integers give an error message.
* J. Doe - Oct 4, 2525
*/
```

#### Loops

Avoid break and continue whenever possible; instead, carefully think through the loop condition. Do not use while (true) with break to substitute for thinking through the correct condition!
Consider the following code to read into an array until it is full or the user enters zero:

```java
// Very bad style
final int MAX = 4;
int [] ages = new int[MAX];
int value = -1;
int count = 0;

while (true) {
    System.out.print("Enter age or 0 to quit: ");
    value = input.nextInt();
    if (value == 0) {
        break;
    }
    ages[count] = value;
    count++;
    if (count == MAX) {
        break;
    }
}

// better
final int MAX = 4;
int [] ages = new int[MAX];
int value = -1;
int count = 0;

while (value != 0) {
    System.out.print("Enter age or 0 to quit: ");
    value = input.nextInt();
    if (value != 0) {
        ages[count] = value;
        count++;
        if (count == MAX) {
            break;
        }
    }
}
// best
final int MAX = 4;
int [] ages = new int[MAX];
int value = -1;
int count = 0;

while (count < MAX && value != 0) {
    System.out.print("Enter age or 0 to quit: ");
    value = input.nextInt();
    if (value != 0) {
        ages[count] = value;
        count++;
    }
}
```

#### Methods

Do not put a space between the method name and the parameter list.

```java
// Incorrect
static double cube ( double value ) {
    return value * value * value;
}
// ...
double result = cube ( 12.0 );
// Correct
static double cube(double value) {
    return value * value * value;
}
// ...
double result = cube(12.0);
```

It is a good idea to put comments before a method that describes the method’s purpose, inputs, and return value (if any):

```java
/*
 * Calculate monthly payment on a loan, given:
 * principal: amount of the loan
 * interestRate: annual percentage rate as a decimal (0.075 for 7.5%)
 * years: number of years of the loan
 * returns the monthly payment amount of the loan
 */
static double payment(double principal, double interestRate, int years) {
    //...
}
```

#### Output

When lining up output, prefer spaces and specific formatting over tabs:

```java
// OK
System.out.printf("Height (cm):\t\t%.2f\n", height);
System.out.printf("Weight (kg):\t\t%.2f\n", weight);
System.out.printf("Blood alcohol:\t%.3f%%\n", bac);
Height (cm):            160.30
Weight (kg):            50.40
Blood alcohol:  0.032% 

// Better
System.out.printf("Height (cm):   %6.2f\n", height);
System.out.printf("Weight (kg):   %6.2f\n", weight);
System.out.printf("Blood alcohol: %7.3f%%\n", bac);

Height (cm):   160.30
Weight (kg):    50.40
Blood alcohol:   0.032%
```


 
 </p>
 </details>
  
## Links 
<details><summary>Click Here</summary>
 <p></br>
 
 **Important Links** that you may find useful:
 
 [Java Basics](https://www3.ntu.edu.sg/home/ehchua/programming/java/J2_Basics.html)

 [Java Video Tutorial](https://www.newthinktank.com/videos/java-video-tutorial/)
 
 [Java Visualizer](https://cscircles.cemc.uwaterloo.ca/java_visualize/)

 [Oracle: Class & Methods](https://docs.oracle.com/javase/8/docs/api/overview-summary.html)
 
 [Oracle: Formatting Numeric Print](https://docs.oracle.com/javase/tutorial/java/data/numberformat.html)
 
 [Practice-It -- Java](https://practiceit.cs.washington.edu/)

 </p> </details>
