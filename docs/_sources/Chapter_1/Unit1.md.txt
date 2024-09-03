# Unit 1 - Primitive Types
 
## 1.1 Why Programming Why Java

Java is an Object Oriented Program.  Within every Java program begins with the creation of a class.  Consider a class as a blueprint for your program.  In this instance, we created a class called *MyFirstClass*.  Within the class there is a main method that is required to execute the program.  Below is a simple program that will print "Hello, World".

![first_Java](https://user-images.githubusercontent.com/12989939/162324090-a9292f5d-3c02-46d8-bb05-e69cb0f72845.PNG)

Notice that with every  { ,  there is a corresponding  } .  You may hear me refer to it as a curly brace.  A missing a curly brace is one of the most common errors among new programmers.  The name 'public' allows users to be able to see the specific parts of your program.  Notice also that the name of the class starts with a **capital letter**.  The main class will always start with a capital letter.

In Java there is a "main method" that is required for all java programs.  The code will always be the same.  It looks like:

```java
public static void main(String args[])
```

**`public`** is an access specifier.  As you may infer, public is public and everyone will have access to it.

**`static`** is a keyword in java.  A `static` method belongs to the class and not to the object (We will learn more about this later!). A `static` method can **only** access static data. It is a method which belongs to the class and not to the instaniation of the object.  There are differences between `static` nested class and `non-static` nested class.

|   | Static method | Non-static method |
| ----- | ----- | ----- |
| Definition | A static method is a method that belongs to a class, but it does not belong to an instance of that class and this method can be called without the instance or object of that class. | Every method in Java defaults to a non-static method without a static keyword preceding it. non-static methods can access any static method and static variable also, without using the object of the class. |
| Accessing members and methods | In the static method, the method can only access only static data members and static methods of another class or the same class but cannot access non-static methods and variables. | In the non-static method, the method can access static data members and static methods as well as non-static members and methods of another class or the same class. | 
| Binding process | The static method uses compile-time or early binding. | The non-static method uses runtime or dynamic binding. |
| Overriding | The static method cannot be overridden because of early binding.	| The non-static method can be overridden because of runtime binding. |
| Memory allocation| In the static method, less memory is used for execution because memory allocation happens only once because the static keyword fixed a particular memory for that method in ram. | In the non-static method, much memory is used for execution because here memory allocation happens when the method is invoked and the memory is allocated every time when the method is called. |




**`void`** is also a keyword.  It is a 'return type'.  What does `void` return? Nothing!  It is used to specify that a method **does not** return anything. If the main method is not void, it will return an error.

**`main`** is the name of the Java main method.  It identifies the starting point of a Java program.  If we change the name while initiating the main method, it will return an error.

**`String[] args`** It is an array of string type.  It stores Java command-line arguments and is an array of type `java.lang.String` class.  The name of the String array is `args`.  It is not fixed and the user can use any name in place of it (It is not recommended as some IDEs will require args in the main method.).


Notice that within the main method there is a print statement.  Let's break down this print statement. 
<p align="center"><b> System.out.println("Hello, World");</b></p>

- [ ] <b>System</b> is a class defined in the java lang package.</br>
- [ ] <b>out</b> is a public static field of the PrintStream type.</br>
- [ ] <b>println()</b> is invoked by the PrintStream class.</br>
- [ ] <b>NOTE</b> <i>println()</i> when executed will return to the next line. Whereas <i>print()</i> will execute the string literal but not return to the next line. You can also create a new line inside a print statement by adding   <b>\n</b>  anywhere inside the quotation marks of a print statement.


-------------------------------------------------------------------------------------------------------------------


Take a look at the diagram below:

![ClassSuperSub](https://github.com/AP-CSA-JAVA/CSA_JAVA-Course/assets/12989939/5b1567d7-c25b-44cd-95b7-f6d02d61c277)


What observations can you make about the diagram?

A powerful tool that you can use in OOP is the concept of `inheritance`.  `Inheritance` is the concept where a Java Class can inherit properties from another class.  You can think of this as a child inheritiing characteristics of a parent.  Java refers to this as **extending** a class.  The Class that is being extended or "inherited" is called a **superclass**.  The class that extends or "inherits" is referred to as a **subclass**.  We will explore this in more detail in Chapter 4.


<p align="center">---------------------------------------------------------------------------- </p>

## 2.1 Instances of Classes

- [ ] Explain the relationship between a class and an object


As stated earlier, a *class* is a blueprint of an object.  So we can also say that an *object* is an instance of a class.  What we define as a class determines what objects that will be associated with the class and how things will operate within it.  For example, we can define `human` as a class.  We can assign attributes to that class like a nose, ears, eyes, hands, feet, etc.  **NOTE:** Attribute and state are interchangable terms.

We can also create a *method* that will call the attributes within a class.  For example, we can create a method called running or sleeping.  Now each of these methods will use an attribute or attributes of its class to perform something within the `human` class.  If we create an instance of the `human` class, let say Object John , then John will have all the attributes (nose , ears, eyes, hands, legs) unique to it and will also have access to these methods to carry out basic functions. **NOTE:** Method and behavior are interchangable terms.

The value of the attributes define the state of the object. What makes this efficient is that the class does not hold any space in the memory because we just create a definition.  The moment we *instantiate* the class the object will require a dedicated space in memory.  Thus we can say that a Class defines how the object should look and object is the actual representation of the same.

 -------------------------------------------------------------------------------------------
**Mr Potato Head Activity:**

Supplies will be provide for you to complete this activity.

    Split into pairs.
    Each pair will create:
        a potato head character.
        a list describing what it is, what characteristics it has, and what it can do(actions).
			write PROPERTIES/ characteristics 
			write METHODS/ actions
    What are the object oriented concepts to your Mr. Potato Head?
        Class:
        Object:
        Properties:
        Methods:
    Visually demonstrate the properties of inheritance by creating a subclass(es) of your Superclass.  
    Include the Characteristics and actions of the subclass(es).

 -------------------------------------------------------------------------------------------



**Example:**
```java
class Bicycle {

    // attribute or state
    int gear = 1;
    String color = white;
    
    // behavior or method
    public void pedaling() {
        System.out.println("Pedaling to accelerate!");
    }
} 
```
**Sample Output**
```java
My bicycle has 1 gear and is painted white!
Pedaling to accelerate!
```

**Things to Remember**
Object-oriented Programming Facts:
- [ ] Properties are the characteristics of your objects
- [ ] Object-Oriented programming focuses on the data represented in the problem
- [ ] Object-Oriented programs remove details from many programs, making the code rewrite less frequent.
- [ ] Methods are the actions that your object can take.
- [ ] A class is like a blueprint or a recipe.
- [ ] A class is used to create an instance of a class, called an object

<p align="center">---------------------------------------------------------------------------- </p>

### 5.3 Documentation with Comments

Typing comments within your program is considered a professional practice, and I expect you to comment your code as appropriate throughtout the year.  When other people read your program, they may not understand the purpose of the variables and/ or methods in
your program.  That's why it's important to document your code with comments. A comment is a piece of text that the
computer will not recognize as code and will not execute. It's only there for the other programmers to read. While you can write whatever
you want inside a comment, you should stick to explaining what your code does to document it properly.

There are three ways in Java to create a comment:

// Using these two slashes will create a single-line comment.

/* Using the slash and an asterisk will create a multi-line comment for longer explanations.</br> Be sure to close it with an asterisk, then a slash. */

/** Using the slash and two asterisks will create a Java API documentation comment. </br>In these comments, you can use tags to specify the parameters of a method and </br>the return values of the method. These comments aren't as important for the AP CSA curriculum. **/

@param -- explanation of parameter</br>
@return -- explanation of what the method returns

Example of appropriate comments with a program:

With **every** program that you submit, I want you to list the following: 
- your name/ partners name (if applicable) 
- the date of submission 
- Period 
- and the assignment  
 
Please follow the convention shown below.</br>

```
/*
* Programmer(s):
* Date:
* Section: Period #
* Assignment:
*/
```

### Assignment 1.1.1

 ![76b4e00f998549e6a8717c6e5d5f0f1a](https://user-images.githubusercontent.com/12989939/162492248-21683f86-fc3f-4756-b78f-ddfe9373ab60.png)</br>
Create the happy face image above using the following criteria:

- [ ] Create a class
- [ ] Create a main method
- [ ] Use System.out.print at least two lines
- [ ] Use System.out.println at least three times



### Assignment 1.1.2

**Personal Timeline**
For this assignment, you will create a program that outputs a personal timeline of events in your life. The timeline will proceed vertically. Earlier events will be displayed nearer the top of the timeline while later events are displayed near the bottom.

Include seven meaningful events in your life. No repetitive events such as "started kindergarten, started first grade, etc".

Make it look professional. HINT: use \t</br>
More examples of Escape Sequences can be found [here](https://ap-csa-java.github.io/CSA_JAVA-Course/Chapter_1/Unit2.html#string-objects-concatenation-literals-and-other-things).
```
Year                 Age                    Description
1971             0 years old                Born in Long Beach
1976             5 years old                Started kindergarten
1989             17 years old               Graduated high school
1995             24 years old               Graduated college Long Beach State
1998             27 years old               Got Married
1998             27 years old               Began teaching career
2021             50 years old               First year at CAMS
```






## 1.2 Variables and Data Types
There are eight primitive types in Java. In no particular order, they are int, double, boolean, float, char, byte, long and short.  For this course we will be using only int, double, and boolean.
- [ ] **int** is short for integer deals with whole numbers and uses 32 bits of memory
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

**Variable Naming Convention**
- [ ] Always choose a name that indicates the purpose of the variable
- [ ] A variable cannot begin with a number
- [ ] A variable must not have spaces
- [ ] A variable cannot begin with any special characters
- [ ] A variable cannot have the same name as a Java keyword

When you declare a variable, you must state the variable type along with the variable name followed by the value assignment to the variable.</br>  For example:  *int height = 72;*</br></br>
Once you have declared the variable type, you <b> do not need to do it again </b> to reassign a value to the variable.</br> Example:  </br>*int height = 72;</br>height = 70;*</br></br>
If you declare a variable as *final* you cannot change the value of it.  We can refer to the *final* variable as immutable (unchanging).  Another variable norm is that *final* variables are written as ALL CAPS to remind you that they cannot change.</br> Example:</br> final double PI = 3.14159;</br></br>

### Assignment 1.2.1
**Allowance**
Write a program that will determine who receives an allowance or not.  Use the information below as a guide:
- [ ] Allowance is always $30.00/ week
- [ ] Non-teenagers do not receive an allowance
- [ ] Jon is 16 years old
- [ ] Ed is 12 years old
- [ ] Michael was born fours years before Jon
- [ ] Print out who receives an allowance and who does not by using an int, double and boolean variables.

```java
int JonsAge = 16;
boolean Teenager = true;
double allowance = 30.00;

System.out.println("Jon's age is " + JonsAge);
System.out.println("Eligible for allowance? " + Teenager);
System.out.println("Jon's weekly allownace is " + allowance);
```


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

### Assignment 1.2.2
Use a Scanner object to create an input feature in your program.  Click on [Scanner_Input](https://github.com/AP-CSA-JAVA/CSA_JAVA-Course/files/8455326/Scanner_Input.pptx) to learn more.  An example of a Scanner Input can be found [here](https://replit.com/@jonvirak/JavaScannerBasics#Main.java).  Create four questions that will ask the user for a string, int, double, and a boolean.  From the user's response, you will return (print statement) a sentence that includes the data types listed above.  
- [ ] string
- [ ] int
- [ ] double
- [ ] boolean
- [ ] print statement that includes all for data types




## 1.3 Expressions and Assignment Statements
Math Operators are a very important part of computing. Below are the most common operators that we will be using in this course.
| Symbol | Name  | Usage |
| :---:  | :---: | :---: |
| * | Multiplication | multiply two values together |
| / | Division | divide two values |
| % | Modulo | the remainder after dividing two values |
| + | Addition | add two values together |
| - | Subtraction | subtract two values |

**Note** When you divide an integer by zero your program will return an <i>ArthmeticException</i> error.

**Please Excuse My Dear Aunt Sally**
In Java, the order of operation works pretty much the same with the exception of the modulo.</br>Take for example the following math equation: **5 + 12 * 18 - 10 / 2 % 2**

| Step  | Operation        | Result |
| :---: | :---:            | :---:  |
|  1    | Multiply 12 * 18 | = 216  |
|  2    | Divide 10 / 2    | = 5    |
|  3    | Modulo 5 % 2     | = 1    |
|  4    | Add 5 + 216      | = 221  |
|  5    | Subtract 221 - 1 | = 220  |

<details><summary>JAVA Order of Operations</summary>

| Operator Type |
| ------------- |
| **P**arentheses |  
| **A**rray access |  
| **M**ember access | 
| **U**nary | 
| **C**ast | 
| **O**bject creation ||
| **M**ultiplication |
| **D**ivision |
| **R**emainder |
| **A**ddition |
| **C**oncatentation |
| **S**ubtraction |
| **S**hift |
| **R**elational |
| **E**quality |

</details>


### Assignment 1.3.1
**Calculate your weight on Jupiter**

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
**weightOnJupiter = weightOnJupiter / earthGravity * jupiterGravity**

```
**Using the chart below, create a program called GalaxyWeight that outputs information of the user's weight
on four different planets and takes the average of those weights.  You will use the <i>scanner class</i> for 
this assignment.**

| Planet | Acceleration Due to Gravity (m/sec^2) |
| :---: | :---: |
| Earth | 9.81 |
| Mercury | 3.59 |
| Venus | 8.87 |
| Mars | 3.711 |
| Jupiter | 24.79 | 
| Saturn | 11.08 |
| Uranus | 10.67 |
| Neptune | 11.15 |


<details><summary>Solution</summary>

```java
import java.util.Scanner;

class Main 
{
  public static void main(String[] args) 
  {
    int weightOnEarth;

    double earthGravity = 9.81;
    double mercuryGravity = 3.59;
    double venusGravity = 8.87;
    double marsGravity = 3.711;

    System.out.println("Enter your weight:");
    Scanner sc = new Scanner(System.in);
    weightOnEarth = Integer.parseInt(sc.nextLine());

      double weightOnMercury = weightOnEarth * mercuryGravity / earthGravity;
      double weightOnVenus = weightOnEarth * venusGravity / earthGravity;
      double weightOnMars = weightOnEarth * marsGravity / earthGravity;
      double weightOnInnerPlanets = (weightOnEarth + weightOnVenus + weightOnMars + weightOnMercury) / 4;

      System.out.print("Your weight on Mercury is ");
      System.out.println(weightOnMercury + " lbs.");
      System.out.print("Your weight on Venus is ");
      System.out.println(weightOnVenus + " lbs.");
      System.out.print("Your weight on Mars is ");
      System.out.println(weightOnMars + " lbs.");
      System.out.println("Your average weight for the Inner Planets is " + weightOnInnerPlanets + "lbs.");

  }
}
```

</details>



### Assignment 1.3.2
**Simple Math**
- [ ] Create a program that will ask the user for two distinct numbers (integers)
- [ ] Use the scanner class to receive input from the user  
- [ ] Store those values and perform some basic operations with those numbers



**Example Output**
```java
Enter first number:
20
Enter second number:
5

Sum: 25
Difference: 15
Product: 100
Dividing: 4 with remainder 0

```



## 1.4 Compound Assignment Operators

In Java, you can modify a variable by referencing it, performing an operation on it, and assigning the result back to the variable. Thus, you can reference a variable to change its own value. For example, if x equals 0 , the following statement modifies x.</br>

```java

// Will this program run as written?  Why or why not?

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
```java
// Compound assignment operators
class Main {
public static void main(String args[])
	{
		int b = 120; //initial value
		b += 10;
		int b1 = 120; //initial value
		b1 *= 10;
		int b2 = 330; //initial value
		b2 -= 30;
		int b3 = 127; //initial value
		b3 %= 7;

		System.out.println(b);
		System.out.println(b1);
		System.out.println(b2);
		System.out.println(b3);
	}
}
```

**Sample Output**
```java
130
1200
300
1
```

In algebra, this is an impossible statement, but in programming, the assignment operator makes this a simple and logical statement. 
To interpret assignment statements such as this, begin with the first instruction to the right of the assignment operator.

In Java, a strong convention is to declare variables close to where they are first used, at the beginning of a code block. 
A code block is denoted by curly braces, { }.  Notice that the print statement uses quotes around 'x = ' followed by plus(+) sign.
This is referred to as a **concatenation operator** where you can add a string literal to a variable.

Java like other programs has simplified the compound operators.  **Compound Assignment Operators** performs two tasks in one step.  It performs a mathematical calculation by and assignment.  It is written as:  

Java supports 11 compound-assignment operators, but for this course we will use just five.
```java
 +=   assigns the result of the addition.
 -=   assigns the result of the subtraction.
 *=   assigns the result of the multiplication
 /=   assigns the result of the division.
 %=   assigns the remainder of the division.
 ```

### Assignment 1.4.1
  
**Compound Operators**
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

<p align="center">---------------------------------------------------------------------------- </p>

### Assignment 1.4.2
**Average Test Score**
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


## 1.5 Casting and Range of Variables
There are some unique features to Java that help programmers create programs that are flexible in how they display data.  We learned earlier 
that we need to declare a variable by it's type.  It can be an int or a double.  As you may remember, an int is any whole negative or positive number.
A double is any number with a decimal.  1.0 is a whole number, but it has a decimal. So, Java considers 1.0 as a double.  
We can convert the double by declaring a new variable that changes the double to an int.

```java 
double temp = 98.6;
int newTemp = (int)temp;
```
What is the value of newTemp?  Did you guess 99?  The actual value of newTemp is 98.  The variable is not **rounded** it is *truncated*.  Java does not round unless you tell it to round.

You will need to be familiar with some terms:

- [ ] **widening** - converting from a smaller data type (int) to a larger data type (double).
	- [ ] `byte` -> `short` -> `char` -> `int` -> `long` -> `float` -> `double`
- [ ] **narrowing** - converting a larger data type (double) to a smaller data type (int).
	- [ ] `double` -> `float` -> `long` -> `int` -> `char` -> `short` -> `byte`
 	     
In this instance, we 'narrowed' the value of temp.  There is another term that you need to be familiar with and it is called **casting**.  Casting is converting from one data type to another, such as from a *double* to an *int*, potentially losing information. 

Take a look at this program:
```java
int eggs = 9;
int dozen = 12;// the variable dozen will not change

System.out.println("Total eggs = " + eggs/ dozen);

Example output:
Total eggs = 0
```
We know that we don't have 0 eggs.  We can rewrite our program to show how many eggs we have in decimal form.
```java
int eggs = 9;
int dozen = 12;// the variable dozen will not change

System.out.println("Total eggs = " + eggs/ (double) dozen);

Sample output:
Total eggs = 0.75
```
If you were to print the variables `eggs` and `dozen`, you would see that the values are 9 & 12 respectively.
</p>
</details>
    

### Assignment 1.5.1
You will explore the PlanetTravel program called FivePlanetTravel. The program is set up to plan a five-planet tour!:
```
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
  }
}
```
**Example Output:**
```java
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
```

*Your ouput should look like the example above.  I am not asking you to find the **average** for this assignment.*

You will write a widening algorithm with new variables to show the travel time to and from all planets.  You will write a casting version without new variables to show the travel times. The one rule is that you must use the provided code and not change any provided data types.



### Numbers Riddle Project 

In this project, you will write a program that incorporates the Java™ concepts you have learned throughout this unit.

Your program will include:

- [ ] Use of the [camelCase](https://betterprogramming.pub/string-case-styles-camel-pascal-snake-and-kebab-case-981407998841) naming convention
- [ ] Both multiline and inline comments
- [ ] The print and printtln methods
- [ ] Variables (appropriately named)
- [ ] Arithmetic expressions
- [ ] The compound assignment operator
- [ ] Conversion between int and double data types

**The Numbers Riddle**

<p align="center">Choose any integer, double it, add six, divide it in half, and subtract the number you started with. The answer is always three! </p>

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
- [ ] six variables representing integer and double data types and positive, negative, and zero values
- [ ] an algorithm(s) that processes the chosen number
- [ ] a print statement displaying the number you chose
- [ ] a print statement displaying each calculation and the final result
- [ ] comments in your code
- [ ] use of camelCase when appropriate

**Test Cases**
Create variables and choose numbers that match the following six number types to verify your program works for each.  
- [ ] Positive Integer
- [ ] Negative Integer
- [ ] Zero
- [ ] One
- [ ] Positive Double
- [ ] Negative Double

**Document and Present**

**TBD**
