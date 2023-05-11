# Unit 2 - Using Objects

## 2.1 Instances of Classes

- [ ] Explain the relationship between a class and an object


As stated earlier, a *class* is a blueprint of an object.  So we can also say that an *object* is an instance of a class.  What we define as a class determines what objects that will be associated with the class and how things will operate within it.  For example, we can define `human` as a class.  We can assign attributes to that class like a nose, ears, eyes, hands, feet, etc.  **NOTE:** Attribute and state are interchangable terms.

We can also create a *method* that will call the attributes within a class.  For example, we can create a method called running or sleeping.  Now each of these methods will use an attribute or attributes of its class to perform something within the `human` class.  If we create an instance of the `human` class, let say Object John , then John will have all the attributes (nose , ears, eyes, hands, legs) unique to it and will also have access to these methods to carry out basic functions. **NOTE:** Method and behavior are interchangable terms.

The value of the attributes define the state of the object. What makes this efficient is that the class does not hold any space in the memory because we just create a definition.  The moment we *instantiate* the class the object will require a dedicated space in memory.  Thus we can say that a Class defines how the object should look and object is the actual representation of the same.  

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

## 2.2 Creating and Storing Objects

- [ ] Explain the relationship between a class and an object
- [ ] Identify different constructor signatures and create objects using them
- [ ] Use variables to represent object references

The next two concepts will be used in most of your programs moving forward.  Read through **constructor** and **toString()** below.

## Unit 5.2 - Constructors 

A **constructor** in Java is a special method that is used to initialize objects. The constructor is called when an object of a class is created. It can be used to set the initial values for object attributes/variable names<sup>1</sup>.  It is possible to write two or more constructors within a program.  The difference between the constructors are the *parameters* that are defined within the constructor itself.  This is known as constructor **overloading**. 

Java is a *pass-by-value* language.  If we pass a primitive value, we are passing a copy of that value. So, if we change the value inside a constructor, the value outside the constructor doesn't change.  However, if we are passing a reference type, we are passing a reference to the data location.  If we modify the parameter values inside a constructor, then the object changes outside the constructor too!

The Box class is located in the file Box.java where you can find the constructor(s).  The signature of the constructor is the class name along with the parameter list, if any.  If you recall from your prior CS courses the word 'abstraction'.  We are taking the complexity out of the action for the user.  The user does not need to know how constructors work, they just need to know that it does what it is supposed to do within the program.

If you use the constructor signature incorrectly, you may get an **IllegalArgumentException**.  Take for example you create a constructor called *Student*.  The *Student* class has parameters *int age, String name, and double gpa*.  If you alter the order of the variables within the parameter, it will return an error.

The **default constructor** is the constructor with no parameters in the parameter list. So, if an overloaded constructor is missing a parameter, then the predetermined value will default to the default constructor.

#### Null Objects
Null is a reserved keyword in Java for literal values. It is a value that shows that the object is referring to nothing.  You cannot call an object that has been declared as *null* since there is not characteristics of that object.  This will create a **NullPointerException** error.  Java, variables of reference types (such as classes and arrays) hold a reference to an object in memory, rather than the actual object itself. This reference is a memory address that points to the location in memory where the object is stored.  If there is no object associated with a reference type, the value of said type is null, which indicates that the variable does not currently reference any object.

Example:
```java
    /* missing code */
    
    Car emptyCar = null;
    
    Car myCar = new Car(5.6);
    Car yourCar = new Car();
    Car ourCar = new Car(2);
    
    System.out.println("myCar=" + myCar);
    System.out.println("yourCar=" + yourCar);
    System.out.println("ourCar=" + ourCar);
    System.out.println("emptyCar=" +emptyCar);
```
Sample Output:
```java
    myCar=Car@6d06d69c
    yourCar=Car@7852e922
    ourCar=Car@4e25154f
    emptyCar=null
``` 


<sup>1 *Object names follow the same rules as variable names (because they can also be used as variables), and also follow camel-case naming conventions, where the first letter is lowercase while the first letter of any other words are uppercase.* </sup>



![Constructors_image](https://user-images.githubusercontent.com/12989939/195926575-c2a49adc-afdb-4ef0-91e1-c5d93fb54539.PNG)

Take a look at the example below:

```java
// Example of Overloading Constructors 
class Box
{
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

 // constructor for a cube using a single parameter
 Box(double len) {
  width = height = depth = len;
 }

 // compute and return volume
 double volume() {
  return width * height * depth;
 }
}

// Main Class 
public class Main
{
 public static void main(String args[])
 {
  // create boxes using various constructors
  Box mybox1 = new Box(10, 20, 15);
  Box mybox2 = new Box();
  Box mycube = new Box(7);

  double vol;

  // get volume of first box
  vol = mybox1.volume();
  System.out.println(" Volume of mybox1 is " + vol);

  // get volume of second box
  vol = mybox2.volume();
  System.out.println(" Volume of mybox2 is " + vol);

  // get volume of cube
  vol = mycube.volume();
  System.out.println(" Volume of mycube is " + vol);
 }
}

```
It is a *best practice* to keep your class definitions in a separate file from the file containing the main method that executes a program. This way, your class definitions can be used in another program without connecting to unnecessary code.

***Object Reference*** variables holds a memory address that refers to a specific object.

Take a look at the program below:

**Program 1**
```java
import java.io.*;

class Demo {
 int x = 10;
 int display()
 {
  System.out.println("x = " + x);
  return 0;
 }
}

class Main {
 public static void main(String[] args)
 {
  Demo D1 = new Demo(); // point 1

  System.out.println(D1); // point 2

  System.out.println(D1.display()); // point 3
 }
}
```
***Output***
```java
Demo@214c265e
x = 10
0
```

---------------------------------------------------------------
Take a look a Program 2 and notice the changes in the Main class:

**Program 2**
```java
import java.io.*;
class Demo {
 int x = 10;

 int display()
 {
  System.out.println("x = " + x);
  return 0;
 }
}

class Main {
 public static void main(String[] args)
 {
  // create instance
  Demo D1 = new Demo();

  // accessing instance(object) variable
  System.out.println(D1.x);

  // point 3
  // accessing instance(object) method
  D1.display();
 }
}
```
***Output***
```java
10
x = 10
```


---------------------------------------------------------------

A **toString()** is a prebuilt method in Java that returns the value in a string format. Therefore, any object that this method is applied on, will return as a string object.

The first example below is when it is called as a method of an object instance.
```java
public class Main {
    public static void main( String args[] ) {

        //Creating an integer of value 1
        Integer x = 1;
        // Calling the toString method as a function of the Integer variable
        System.out.println(x.toString());
	System.out.println(Integer.toString(7));
    }
}
```
**Sample Output**
```java
1
7
```

The second example is when you call the method of a class by passing the value as an argument.
```java
class Child{

  String name;
  Integer age; //Integer is a wrapper class for the int data type

  Child(String n, Integer a){
    this.name=n;
    this.age=a; //'this' is an instance of the variable
  }
//Over-riding the toString function as a class function
  public String toString(){
    return "The name of the child is " + this.name + ". The age of the child is " + this.age + ".";
  }
}

class Main {
    public static void main( String args[] ) {
      Child a = new Child(); //constructor - no defined parameter
      Child p = new Child("Francis",10); // constructor - overloading
      
      //Calling the class version of toString()
        System.out.println(p.toString());
        
      //Calling the original toString()
      System.out.println(Integer.toString(12));
    }
}
```
**Sample Output**
```java
The name of the child is Francis. The age of the child is 10.
12
```

### Assignment 2.1.1

Write a class related to a professional sport (i.e. Football, soccer, basketball, etc)

- [ ] Create class related to a professional sport of our choice
- [ ] Create attributes/instance variables for the class
- [ ] Create a constructor for your class
- [ ] Create an instance of the class
- [ ] Create a toString() method to printout the object

**Example**
```java
Name: Marcelo Vieira da Silva Jr.
Team: Real Madrid 
Position: left-back
Number: 12
Goals: 0
Starting: True
```

### Assignment 2.1.2
- [ ] Complete the cakeRunner program
- [ ] Submit your program code

**Sample Output**
```java
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

In Cake, formal param t started as 3.0 and changed to 0.0
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

**Extra Credit**

**Instructions:**

1. Edit the Bike class to have the following attributes:
   - `kind`  (Cruiser, 10 Speed, Hybrid)
   - `size`
   - `cost`
2. Create a no argument constructor. The values are Cruiser, 26, and 175.99
3. Create a constructor that only takes type and size as parameters
4. Create a constructor that takes all the parameters
5. Create two more objects that will match the sample output.

#### Scanner Class Revisited
As you recall, the scanner class is a package that provides primitive input within Java programs.  It can be found in the [java.util Package](https://docs.oracle.com/javase/8/docs/api/java/util/package-summary.html) website.

- [ ] First you need to import the class from the online Oracle repository by typing `import java.util.Scanner;`
- [ ] To create an object of the Scanner class, we must pass a defined object in `System.in` which is the standard input.
- [ ] To read the data type we need to use the function next**data type**().  For example, to read an `int` we would type `nextint()`.
- [ ] To read strings, we would use `nextLine()`.
- [ ] To read a single character we would use `next()` or `charAt()`.  The `next()` function returns the next word in the input as a string.  Whereas, `charAt()` function returns the first character in that string.
- [ ] [Scanner problems using next()](https://www.geeksforgeeks.org/why-is-scanner-skipping-nextline-after-use-of-other-next-functions/)

```java
import java.util.Scanner; // import scanner class
public class Main
{
	public static void main(String[] args)
	{
		// Declare the object and initialize with
		// predefined standard input object
		Scanner test = new Scanner(System.in);

		// String input
		String name = test.nextLine();

		// Character input
		char gender = test.next().charAt(0);

		// Numerical data input
		int age = test.nextInt();
		long mobileNum = test.nextLong();
		double gpa = test.nextDouble();

		// Print the values to check if the input was correctly obtained.
		System.out.println("Name: "+name);
		System.out.println("Gender: "+gender);
		System.out.println("Age: "+age);
		System.out.println("Mobile Number: "+mobileNum);
		System.out.println("GPA: "+gpa);
	}
}
```
**Sample input**

```java
Jon
Male
50
1236549898
3.0
```
**Sample Output**
```java
Name: Jon
Gender: M
Age: 50
Mobile Number: 1236549898
GPA: 3.0
```

## 2.3 Calling a Void Method

- [ ] Call non-static void methods without parameters

Class methods represent an object's behavior, defining what an object can do within a program.

Recall the Child program created above.  We will use the one constructor that has no defined parameters to create behaviors of our object.

```java
class Child{

  String name;
  Integer age; //Integer is a wrapper class for the int data type

  Child(){
    System.out.println("I am a child."); // constructor without parameters
    }
  Child(String n, Integer a){ //constructor with parameters
    this.name=n;
    this.age=a; //'this' is a Java keyword and refers to a specific instance of the variable
  }
   public void running(){
     System.out.println("I am running!");
  }
     public void sleeping(){
     System.out.println("Zzzzzzz!");
  }
     public void singing(){
     System.out.println("Lah-la-la-LAH-la-la!");
  }
  
  
//Over-riding the toString function as a class function
  public String toString(){
    return "The name of the child is " + this.name + ". The age of the child is " + this.age + ".";
  }
}

class Main {
    public static void main( String args[] ) {
      Child a = new Child(); //constructor - no defined parameter
      Child p = new Child("Francis",10); // overloaded constructor - adding one or more parameter to the constructor 
      
      //Calling the class version of toString()
        System.out.println(p.toString());
        
      //Calling the original toString()
      System.out.println(Integer.toString(12));
      a.running(); // running method
      a.sleeping(); // sleeping method
      a.singing(); //singing method
    }
}

      
```

**Sample output**
```java
I am a child
The name of the child is Francis. The age of the child is 10.
12
I am running!
Zzzzzzz!
Lah-la-la-LAH-la-la!
```

The `void` keyword will not return *anything* from the method declaration.  While the void method of the class does not return any value, the constructors return an object reference.  Thus, they can be called as a part of an expression.  Explained another way, void means that nothing is returned from a method, nor will anything ever be returned. It is an absence of any value.

**NOTE:** 'Null' is a place holder for a reference that does not have an object.  If defines a memory address that may eventually hold a value.

### 2.4 Calling a Void Method with Parameters

- [ ] Call non-static void methods with parameters
- [ ] Use overloaded methods

Using parameters allows us the freedom to write a program that is more flexible and specific.  It is similar to providing specific instructions for the program.  When you pass multiple parameters, it is important to make sure that the order is correct.  Incorrect order will return incorrect results.  As we did with constructors, we can overload a method.  Recall that the method name has also an ordered list of parameters.  You can also overload a method by giving the method the same name as another method, and provide a different set of parameters.

For example:
```java
public void school(int grade, double gpa) {}
public void school(int grade, double gpa, String name) {}
```



### Assignment 1
**Instructions DigiPet**
You will create a class DigiPet

1. Create a DigiPet class with the following attributes:  
	- `animal`
	- `name`
	- `food`
	- `energy`
	- `happy`
	- 
2. Create a constructor with variables for `animal` and `name`. `food`, `energy`, and `happy` should be set to 20.
3. In the main class, create two pets with their name and print them out.
4. Create the following void methods according to these rules:
  - `speak()` - If your pet is a dog, print out "woof! woof!". If you choose another animal follow the format of the dog. 
  - `play()` - print out "Do you wanna play?", increase `happy` by 10, decrease `food` and `energy` by 10.
  - `feed()` - If food is greater than 15, print out the pet is not hungry and decrease `happy` by 10. Otherwise, print "Yay! Food!", increase `food` and `energy` by 10.
  - `sleep()` - if energy is 20 or more, print out the pet is not sleepy and decrease `happy` by 10. Otherwise, print "zzzzzzzzzzzzzzz!", increase `happy` by 15 and set energy to 50.
5. Call each method according to the sample output below.

**Sample Output:**
```java
Hangry the cat
Hunger: 20
Energy: 20
Happy: 20

Fido the dog
Hunger: 20
Energy: 20
Happy: 20

Purr! Purr!
Bark! Bark!
Yay! Let's play!
Hangry's not sleepy!
zzzzzzzzzzzzzzz!
Hangry's not hungry!
Yay! Food!

Hangry the cat
Hunger: 20
Energy: 20
Happy: 0

Fido the dog
Hunger: 20
Energy: 60
Happy: 45
```

## 2.5 Non-Void Methods

If you've programmed in Python, you may remember that we used functions to execute a small chunk of code in other areas of the program.  Non-Void methods are very similar to functions in that they return a value of some type.  You have used non-void methods already, you just may not have recognized it. For example, the Scanner Class has non-voiid methods like nextInt(), nextDouble(), nextLine(), and next().  There are a number of methods that can be found in the Java standard library methods that are non-void methods.  Take a look at the example below.

```java
public int sum(){
   return num1 + num2;
}
```

 The keyword **return** is *required* in all non-void methods. Since the method sum has a **return** type of `int` the return line is required to return a value of this type.
 
 ## 2.5 Calling a non-void method
 
 - [ ]  Call a non-void method
 - [ ]  Use a return value from a non-void method in a variable or as part of an expression
 
The way that a non-void method is called differs from the way that a void method is called in that the call is made from within other Java statements. Since a non-void method always returns a value, this value has to be stored in a variable, printed, or returned to a Java control structure or another method. Here are some examples.

The method call can be in an **assignment statement**.

```java
int num = sum();
double avg = calculateAverage();
String name = getName();
```

The method call can be in a **print** or **println statement**.

```java
System.out.println("The sum is " + sum());
System.out.println("Avg = " + calculateAverage();
System.out.println(getName() + " is my name");
```

The method call can be inside a Java structure such as a **conditional statement** or a **looping structure**.

```java
if(sum() > 500)
if(calculateAverage() == 100)
if(getName().equals("John Wang"))
while(!getName().equals("stop")
```

The method call can be on the **return line** of another method.

```java
return sum() / numItems;
return calculateAverage() > 70;
```

### Assignment 1
**Instructions Shape using Non-Void Methods**

1. In the Shape class, the attributes and constructor is complete. Look them over.
2. In the Main class, instantiate the three objects described in the comments
3. In the Shape class, write the following methods:
     - `getPerimeter()` - calculates and returns perimeter depending on the shape. The perimeter of a circle is `2*3.14*length`
     - `getArea()` - calculates and returns area depending on the shape. The area of an equilateral triangle is `0.25*1.732*length*length`. 
        The area of a circle is `3.14*length*length`	

4. In the Main class, follow the comments and call the appropriate methods. 

[Assignment1_Shape.zip](https://github.com/AP-CSA-JAVA/CSA_JAVA-Course/files/9708290/Assignment1_Shape.zip)

**Sample Output**
```java
Perimeter of Triangle: 18.0
Area of Triangle: 15.588

Perimeter of Square: 20.0
Area of Square: 25.0

Perimeter of Circle: 50.24
Area of Circle: 200.96
```
Submit your link to the finished program

__________________________________________________________________________________________________________________

### Assignment 2

**Instructions RoadTrip using Non-Void Methods**

Starter file: [125-RoadTrip.zip](https://github.com/AP-CSA-JAVA/CSA_JAVA-Course/files/9717372/125-RoadTrip.zip)

1. In the Car class, the attributes and constructor are complete. Look them over.
2. In the Main class, create car object that has 20 mpg and a 15 gallon tank
3. In the Car class, create the following methods:	
- `odometer()` - prints out how many miles driven like this: `Miles Driven: 300.0`
- `milesAvailable()` - prints out how many miles the car can drive on that much gas. For example: `Miles Available: 240.0`
- `addGas()` - This should add amount to the tank. If the amount is greater than the capacity, set the gas to the tank capacity. The method should print `Adding gas ...`
- `drive()` - checks if car can drive that number of miles, and then adds miles to totalMilesDriven and subtracts the amount of gas needed to go those miles. The method should print Driving [distance] or, if the distance is too far, it should print Can't drive [distance]. That's too far!

4. In the Main class, follow the comments and call the appropriate methods.


**Sample Output:**
```java
Miles Driven: 0.0
Miles Available: 0.0
Adding gas ...
Miles Available: 300.0
Driving 100.0
Miles Available: 200.0
Adding gas ...
Miles Available: 240.0
Can't drive 365.0. That's too far!
Driving 200.0
Miles Driven: 300.0
```

Submit your link to the finished program
_____________________________________________________________________________________________________

## 2.6 String Objects: Concatenation, Literals, and Other Things

- [ ] Create String objects
- [ ] Reference String objects

String objects can be instantiated in **two different** ways, either by assigning a **String literal** directly to a String variable or by calling the **String class constructor**. In the example below, the code on the left uses a String literal assignment, and the code on the right uses the String class constructor.

| String literal assignment | String class constructor |
| ----------- | ---------- |
| String state = "Maine"; | String state = new String("Maine"); |

String objects have the benefit of many methods, one such method is *concat*. Concatenation means appending one string to the end of another and is the function performed by the concat method.
String objects are *immutable*. This means that you cannot change the String object, rather a new spot within the same memory location with the necessary changes. In this case, the program created a String object with a specific value. When the concat method is called, it creates a *new String object* in memory with the new value. This does not replace the original reference.

***Example***
```java
public class Main 
{
  public static void main(String[] args) 
  {
    String stateHerb = "Winter"; //initial reference
    stateHerb = stateHerb.concat("green"); //new reference
    
    System.out.println(stateHerb);
  }
}
```
**Output**
```java
Wintergreen
```
**Recall:**
- [ ] A String is not a primitive type.
- [ ] A String object references a location in memory.
- [ ] String objects cannot be changed.
- [ ] The word immutable means "cannot be changed"

Take a look at the following programs:
```java
String stateCat = "Maine";
stateCat.concat("Coon");
System.out.println(stateCat);
// What will be the output?

System.out.println("Maine ".concat("Coon"));
// What will be the output?

String stateFish = "Landlocked";
String otherFish = "River";
stateFish = stateFish.concat("Salmon");
otherFish = stateFish.concat("Trout");
System.out.println(otherFish);
// What is the output of this last program?
```
Using Notepad: Copy and complete the code below using each of the concatenation operators where noted in the comments. When the program runs, it should display Whoopie Pie and Wild Blueberry.

```java
public class Main
{
  public static void main(String[] args) 
  {
    String stateTreat = "Whoopie";
    String stateBerry = "Wild ";
    
    /* Use the + operator on stateTreat to append " Pie" */
    
    
    
    /* Use the += operator on stateBerry to append "Blueberry" */
    
    
    
    System.out.println(stateTreat);
    System.out.println(stateBerry);
  }
}
```
**NOTE** Java allows for *implicit type conversion* during concatenation. This means that even if a primitive is stored as a primitive type (be it *int* or *double*), it can still be concatenated to a String. The *int* is converted to a String before the + operator is applied.

**NOTE** Certain characters need special treatment to be included in strings in Java. Either they are “non-printable,” such as the character that indicates a new line of output (called the newline character), or they already have other meanings in the Java language.

Escape sequences begin with the \ character (back slash as opposed to a forward slash) and allow a programmer to type these characters in String literals. Take a look at the three examples below.

### Escape Sequence

| Newline | The \ character | the " character |
| ---------------- | ---------------- | ---------------- |
| `\n` | `\\` | `\"` |

```java
public class Main
{
  public static void main(String[] args) 
  {
    // Notice a new line in your code does not mean
    // a newline in your output, line breaks after
    // operators are allowed
    String stateSong = 
      "\"Oh, Pine Tree State,\n Your woods\\ fields\\ and hills\\\"";
    System.out.println(stateSong);
  }
}
```
**Output**
"Oh, Pine Tree State,
 Your woods\ fields\ and hills\"
 
 
### Extra Credit

1. Create a new java file.
     - Research a College Fight Song to use for this assignment.

2. Implement the following features (in any order) and comment where they occur.
- [ ] A `String` created using a literal
- [ ] A `String` created using the `String` class constructor
- [ ] An immutable `String`
- [ ] An implicit conversion via concatenation
- [ ] The += operator for concatenation
- [ ] The + operator for concatenation
- [ ] Three escape sequences

Submit your program link.  Do not send me a screen shot of your program.  
Comment your code showing that you completed each of the bullet points above.
_____________________________________________________________________________________________________
## 2.7 String Methods

- [ ] Compare `String` Objects
- [ ] Use `String` Methods

Navigate to and review the information that can be found at [Java API Specification](https://docs.oracle.com/en/java/javase/14/docs/api/index.html).

| Navigation |
| ---------- |
| Select java.base > java.lang |
| Scroll through Class Summary until you find `String` |
| Review String class description |
| Click on `String` class link to explore the class |
|  |
| Click on 'Constructor Summary' to explore how you can call the String Constructor |
| Click on 'Method' to view the Method Summary |

**Note** 
- [ ] Application programming interfaces (APIs) simplify complex programming tasks.
- [ ] In APIs, classes are grouped into packages, also called modules.
- [ ] The `String` class is part of the `java.lang` package. Classes in the `java.lang` package are available by default.
- [ ] Documentation for APIs and libraries is essential to understanding the attributes and behaviors of a class and its methods.

| String Class Constructors and Methods | Explanation |
| --------------- | --------------- |
| `String(String str)` | Constructs a new String object that represents the same sequence of characters as str. |
| `int length()` | Returns the number of characters in a String object. |
| `String substring(int from, int to)` | Returns the substring beginning at index from and ending at index to – 1. |
| `String substring(int from)` | Returns substring(from, length()). |
| `int indexOf(String str)` | Returns the index of the first occurrence of str; returns –1 if not found. |
| `boolean equals(String other)` | Returns true if this is equal to other; returns false otherwise. |
| `int compareTo(String other)` | Returns a value < 0 if this is less than other; returns zero if this is equal to other; returns a value > 0 if this is greater than other. |

Take a look at the code below:
```java
     String horse = "percheron";
     System.out.print("Percheron is ");
     //
     System.out.print(horse.length());
     //
     System.out.println(" letters long.");
```

**Output**
```
Percheron is 9 letters long.
```

Use the program as a reference, create a program that:
- [ ] Creates a `String` of length three that references the `String` literal "cat"
- [ ] Calls the `length` method of that object, storing the result in a variable of type `int`
- [ ] Displays the value store in that variable
- [ ] Concatenates a `String` of your choice to the end of "cat"
- [ ] Displays the new length of the `String`

**String** 
`substring(int from, int to)` - ***Returns the substring beginning at index `from` and ending at index `to` -1.***

![5973746a769a40f78540dfbd24529a0c](https://user-images.githubusercontent.com/12989939/194594983-728dab7d-02bb-406c-896e-6e081001fbd5.png)

**Example 1** 
```java
public class Main
{
  public static void main (String[] args)
  {
    String pangram = "The quick brown fox jumps over the lazy dog";
    System.out.println(pangram.substring(4, 19));
  }
}
```

**Sample Output**
`quick brown fox`

```java
public class Main
{
  public static void main (String[] args)
  {
    String pangram = "The quick brown fox jumps over the lazy dog";
    System.out.println(pangram.substring(41, 44));
  }
}
```

**Note** A String object has index values from 0 to length – 1. Attempting to access indices outside this range will result in an IndexOutOfBoundsException.

**Sample Output**
```
Exception in thread "main" java.lang.StringIndexOutOfBoundsException: String index out of range: 44
	at java.lang.String.substring(String.java:1963)
	at IndexTester.main(IndexTester.java:9)
```
How would you fix this error?

```java
class Main {
  public static void main(String[] args) {
	String pangram = "The quick brown fox jumps over the lazy dog";
    System.out.println(pangram.indexOf("b")); 

  }
}
```
**Output**
`10`

```java
class Main {
  public static void main(String[] args) {
	String pangram = "The quick brown fox jumps over the lazy dog";
    System.out.println(pangram.indexOf(44)); 

  }
}
```
**Output**
`-1`

```java
public class Main
{
  public static void main(String[] args)
  {
    String placeName = "New Brunswick";
    /* Add your code within the parentheses below. */
    System.out.println();
  }
}
```

What would go within the println statement?

```java
public class Main
{
  public static void main(String[] args){
    String word1 = "motorcycle";
    String word2 = "recycle";
    
    String word1part2 = word1.substring(5);
    String word2part2 = word2.substring(5);
    System.out.println(word1part2.equals(word2part2));
  }
}
```
How would you modify the calls to substring so that the program below will print true. 

String Objects Practice: 
[Activity 126 String Objects_Vers1.docx](https://github.com/AP-CSA-JAVA/CSA_JAVA-Course/files/9735560/Activity.126.String.Objects_Vers1.docx)

| compareTo | |
| --------- | --------- |
| int compareTo(String other) | Returns a value < 0 if this is less than other; returns zero if this is equal to other; returns a value > 0 if this is greater than other. |

```java
public class Main
{
  public static void main(String[] args)
  {
    String string1 = "park";
    String string2 = "parkway";
    
    System.out.println(string1.compareTo(string2));
  }
}
```

What is the output of this program?
<details><summary>Answer</summary>
<p>

`-3`
</p>
</details>

What is the output if String1 was `parkway` and string2 was `park`?
<details><summary>Answer</summary>
<p>

`3`
</p>
</details>

What is the output of String1 and String2 if they are both 'parkway'?
<details><summary>Answer</summary>
<p>

`0`
</p>
</details>

| boolean equals | |
| -------------------------------  | ------- |
| boolean equals(String other) | Compares the current string to the specified other string and returns **true** if they are equal, **false** otherwise.  Given the following code segment, predict whether the output will be **true** or **false**. |

```java
String word1 = "tricycle";
String word2 = "recycle";
System.out.println(word1.equals(word2));
```

| String Substring | |
| ------------------------------------ | -------- |
| String substring(int beginIndex) | Returns a string that is a substring of the current string. The substring begins with the character at the specified **beginIndex** and extends to the end of the current string. |

Given the following code segment, predict whether the output will be **true** or **false**.

```java
String word1 = "tricycle";
String word2 = "bicycle";

String word1part2 = word1.substring(5);
String word2part2 = word2.substring(5);
System.out.println(word1part2.equals(word2part2));
```
    
Take a look at this ASCII table: [ascii-table-characters.pdf](https://github.com/AP-CSA-JAVA/CSA_JAVA-Course/files/9737398/ascii-table-characters.pdf)

Experiment with the program above by changing the values of the two Strings until you can answer the questions that follow definitively. Use the ASCII table resource to help guide your exploration.

1. Which is greater, a capital letter or a lowercase letter? 
2. Which is greater given two Strings that vary only in their last character? 
3. Which is greater, a String beginning with a number, or one that begins with a letter? 
4. When two Strings begin with the same substring and one is longer, which is greater? 

String Object Practice Part II: [Activity 126 String Objects_Vers2.docx](https://github.com/AP-CSA-JAVA/CSA_JAVA-Course/files/9737627/Activity.126.String.Objects_Vers2.docx)

### Activity 1 - Wordplay

Starter Files: [127-wordPlay.zip](https://github.com/AP-CSA-JAVA/CSA_JAVA-Course/files/9747405/127-wordPlay.zip)


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
Jonathan Virak
Enter a phrase: 
Give papa a proper cup of coffee in a copper coffee cup.

Your first name is Jonathan
Your last name is Virak
Your initials are JV

Your new password: 8JonaVirakrak5

Give papa a proper bup of boffee in a bopper boffee bup.
```

Submit your repl.it file on Canvas.

### Activity 2 - Speaking

Starter files: [127-Speaking.zip](https://github.com/AP-CSA-JAVA/CSA_JAVA-Course/files/9757536/127-Speaking.zip)

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
 Jonathan
Enter your partner's name:
 Julia

Yelling your name: Samantha
Whispering your partner's name: Russell
Your name in Pig Latin: amanthaSay
Your partner's name in Pig Latin: ussellray
Your team name is Samaell
```
_______________________________________________________________________________________________________________

## 2.8 Wrapper Classes - Integer and Double

- [ ] Convert between primitive data types and objects.
	- [ ] I will be able to identify a wrapper class
	- [ ] I will be able to convert primitives to an object of a wrapper class
	- [ ] I will be able to identify autoboxing/ unboxing of primitive and reference types
- [ ] I will be able to write programs my understanding of wrapper classes

___________________________________________________________________________________________________________________

Recall that primitive data types are int, double, boolean & String.  A wrapper class is a class that allows you to extend a primitive type into an object.  A wrapper class contains a single attribute that is its primitive type.  For example, `Integer` is a wrapper class for primitive type `int`.  For every Wrapper Class there is a corresponding primitive type <see below>.  Integer belongs to the Java.lang package that can be found in the [API documentation](https://docs.oracle.com/en/java/javase/14/docs/api/index.html) that we reviewed in a prior lesson.
	
<details><summary>Wrapper Classes</summary>
<p>

| Primitive Data Type |	Wrapper Class |
| ----------- | ------------ |
| byte | Byte |
| short | Short |
| int | Integer |
| long | Long |
| float | Float |
| double | Double |
| boolean | Boolean |
| char | Character |

</p>
</details>


| Integer Class Constructors and Methods | Explanation |
| --------------------- | --------- |
| Integer(int value) | Constructs a new Integer object that represents the specified int value. |
| Integer.MIN_VALUE | The minimum value represented by int or Integer. |
| Integer.MAX_VALUE | The maximum value represented by int or Integer. |
| int intValue() | Returns the value of this Integer as an int. |


The program below retrieves the value wrapped by an Integer and stores it in a primitive int before using that value. 
Modify the program so that it stores the value of int1 in int2.

```java
public class Main
{
  public static void main(String[] args)
  {
    Integer int1;
    Integer int2;
    int primitiveInt;
    
    int1 = new Integer(20);
    int2 = new Integer(int1.intValue()); // solution 1
    int2 = int1.intValue(); // solution 2
    
    System.out.println("int2 value is: " + int2.intValue());
  }
  
}
```

**Sample Output**
`int2 value is: 20`


| Double Class Constructors and Methods | Explanation |
| ----------------- | ------------ |
| Double(double value) | Constructs a new Double object that represents the specified double value. |
| double doubleValue() | Returns the value of this Double as a double. |

```java 
public class Main
{
  public static void main(String[] args)
  {
    Double d = new Double(1.5); // instantiates a Double
    // Uses the doubleValue method in a print statement
    System.out.println("d value is: " + d.doubleValue()); 
    
  } 
}
```

**Sample Output**
`d value is: 1.5`


### Autoboxing/ Unboxing
In the program below the JVM did some extra work at lines 5 and 6. Java automatically converted from the int and double primitive types to their corresponding object reference types. This is called autoboxing, an automatic conversion that the Java compiler makes between primitive types and their corresponding object wrapper classes.

```java
1 public class Main
2 {
3   public static void main(String[] args)
4   {
5     Integer integerInstance = 5;
6     Double doubleInstance = 2.0;
7     // recall newlines are allowed around operators
8     System.out.println("integerInstance: " + integerInstance.intValue() +
9                        " doubleInstance: " + doubleInstance.doubleValue());
10  }
11 }
```
**Note:** Autoboxing is the automatic conversion that the Java compiler makes between primitive types and their corresponding object wrapper classes, including int to Integer, double to Double, and boolean to Boolean.

The program below demonstrates the opposite of autoboxing called **unboxing**. Java automatically converted the Integer reference types to its corresponding int primitive types.

```java
public class Main
{
  public static void main(String[] args)
  {
    unboxInt(new Integer(42));
    unboxDouble(new Double(3.14159));
    unboxBoolean(new Boolean(true));
  }
  
  public static void unboxInt(int i)
  {
    System.out.println(i);
  }
  
  public static void unboxDouble(double d)
  {
    System.out.println(d);
  }
  
  public static void unboxBoolean(boolean b)
  {
    System.out.println(b);
  }
}
```
**Note:** Unboxing is the automatic conversion that the Java compiler makes from the wrapper class to the primitive type. 
This includes converting an Integer to an int and a Double to a double.

The Java compiler applies unboxing when a wrapper class object is:
i. Passed as a parameter to a method that expects a value of the corresponding primitive type.
ii. Assigned to a variable of the corresponding primitive type.

In the program below, which line of code contains an example of *autoboxing*?
In the program below, which line of code contains an example of *unboxing*?

```java
1 public class Main
2 {
3   public static void main(String[] args){
4    Integer cardboardWidth = new Integer(4);
5    Integer cardboardHeight = new Integer(5);
6    
7    Box cardboardBox = new Box(cardboardWidth, cardboardHeight);
8    cardboardBox.changeDimensions(2,3);
9    System.out.println("Ending box dimensions: " + cardboardBox.getWidth() 
10                       + " x " + cardboardBox.getHeight());
11  }
12
13  private static class Box
14  {
15    private int width, height;
16    
17    public Box(int w, int h){
18      width = w;
19      height = h;
20    }
21    
22    public void changeDimensions(Integer w, Integer h){
23      width = w.intValue();
24      height = h.intValue();
25    }
26    
27    public int getWidth(){
28      return width;
29    }
30    public int getHeight(){
31      return height;
32    }
33  }
34 }
```
<details><summary>Answer</summary>
<p>



```java
 Unboxing occurs on line 7 when Integer parameters are automatically converted to ints in the 
 constructor.
   
 Autoboxing occurs on line 8 when int parameters are automatically converted to Integers 
 in the method.
```

</p>
</details>


### Assignment 1 Wrapper Classes

Create a program that contains an example of each of the following. Add in-line comments to describe each example.
- [ ] An Integer constructor
- [ ] The intValue method
- [ ] A Double constructor
- [ ] The doubleValue method
- [ ] The maximum double value
- [ ] The minimum double value
- [ ] Autoboxing
- [ ] Unboxing


## 2.9 Using the Math Class

- [ ]  Use methods from the Math package
	- [ ] I will be able to write a program using math methods	
- [ ]  Incorporate randomness into a program
	- [ ] I will be able to write a program using random method
	
The Math class can be found in the java.lang package.  The Math class contains only static methods.  Some of the more commonly use Math methods are listed below.

| Math Class Methods | Explanations |
| ----------- | --------- |
| int abs(int x) | Returns the absolute value of an int value |
| double abs(double x) | Returns the absolute value of a double value |
| double pow(double base, double exponent) | Returns the value of the first parameter raised to the power of the second parameter |
| double sqrt(double x) | Returns the positive square root of a double value |
| double random() | Returns a double value greater than or equal to 0.0 and less than 1.0 |
| round() | Returns the round of the decimal number to the nearest value |

Having seen the Math method abs method in use, refer to the Java Quick Reference to predict 
how you could use the `pow` method to raise a base of 2 to the exponent 10 (2<sup>10</sup> ).

<details><Answer</summary>
<p>

```java
Math.pow(2, 10)
```
</p>
</details>

How would you write the `sqrt` method to get the square root of 9.

<details><Answer</summary>
<p>

```java
Math.sqrt(9)
```
</p>
</details>
	
How would you write the `round` method to get the round of 79.52.

<details><Answer</summary>
<p>

```java
Math.round(79.52) 
```
</p>
</details>

### The random Method

For programs that require some amount of randomness, such as games, security, simulations, and statistics, Java’s Math class provides a random method. This method returns a double value that falls in the range from 0.0 to 1.0 non-inclusive, expressed mathematically as (0.0, 1.0\] to indicate that it includes 0.0 but that its highest value is .999999999999999. With random values from 0 to .99..., you can mathematically generate any random number you may need. As you will see, you can manipulate the results in a variety of ways to fit your needs.

```java
public class Main
{
  public static void main(String[] args)
  {
    int rnum = (int) (Math.random() * 24 );
    // This program produces a random integer between 0 and 23 inclusive.
    System.out.println(rnum);
  }
}
```
You can also create a range using the random method in the formula below.

Math.random() * n<sup>1</sup> + m<sup>2</sup>

<sup>1</sup> = Number of integers included in range

<sup>2</sup> = Lowest integer in range

Use the `Math.random` method to generate a double value greater than or equal to 10.0 (inclusive) and less than 15.0 (exclusive).

```java
public class Main
{
  public static void main(String[] args)
  {
    System.out.println(Math.random() * 5 + 10);
  }
}
```
How would you modify a program to produce `int` values between **70** inclusive and **100** exclusive?

<details><Answer</summary>
<p>

```java
System.out.println(Math.random() * 30 + 70);
```
</p>
</details>


As stated above, Math methods are static.  This means that you do not use an object reference like you did with non-static methods (cat.length()).  Instead, you reference the class name itself followed by the static method. Some examples are listed below.

| Math Method Examples |
| --------- |
| Math.abs(-5) |
| Math.abs(2.3) |
| Math.sqrt(4) |
| Math.random() |

If you were to write your program using a constructor and reference the object your program will return an error.

```
Math m = new Math();
m.random();
```

Take a look at the program below.

```java
public class Main
{
  public static void main(String[] args)
  {
    int path1 = -1; // The car drives West 1 block
    int path2 = -1; // The car drives West 1 block
    int path3 = -1; // The car drives West 1 block
    int path4 = 3; // The car drives East 3 blocks
    // Added calls to Math.abs in the print statement below.
    System.out.println(Math.abs(path1) + Math.abs(path2) + Math.abs(path3) + Math.abs(path4)); 
  }
}
```

Review the Math Class Methods in the table above and determine the correct syntax to execute each print statement.

```java
1 public class MathPractice
2 {
3  public static void main(String[] args)
4  {
5    // Find 8x8x8x8
6    System.out.println(     );
7    // Find the square root of 64
8    System.out.println(     );
9    // Find the square root of 65
10    System.out.println(     );
11    // Find the square root of the absolute value of the difference
12    // between 12 squared and 5 squared.
13    System.out.println(     );
14  }
15 }
```

<details><summary>8x8x8x8 answer</summary>
<p>

```java
System.out.println(Math.pow(8, 4));
```
</p>
</details>


<details><summary>square root of 64 answer</summary>
<p>

```java
System.out.println(Math.sqrt(64));
```
</p>
</details>


<details><summary>square root of 65 answer</summary>
<p>

```java
System.out.println(Math.sqrt(65));
```
</p>
</details>


<details><summary>difference between 12 squared and 5 squared answer</summary>
<p>

```java
System.out.println(Math.sqrt(Math.abs(Math.pow(12, 2) - Math.pow(5, 2))));
```
</p>
</details>

### Assignment 1 - Math Class Worksheet 1 & 2	

In pairs, work on worksheet 1 in class.  We will review your work in class.

**Download:** [mathclassworksheet1.docx](https://github.com/AP-CSA-JAVA/CSA_JAVA-Course/files/9778281/mathclassworksheet1.docx)
	
**ascii Table:** [ascii-table-characters.pdf](https://github.com/AP-CSA-JAVA/CSA_JAVA-Course/files/9737398/ascii-table-characters.pdf)

Complete worksheet 2 for homework.  We will review your work next class.

**Download:** [mathClassWorksheet2.docx](https://github.com/AP-CSA-JAVA/CSA_JAVA-Course/files/9778287/mathClassWorksheet2.docx)

#### An example of single vs double quotes

<details><summary>Click Here</summary>
<p>

```java
	
class Main {
  public static void main(String[] args) {
    System.out.println( "a" + (char)1 ); // output is a
	System.out.println( "a" ); // out is a
	System.out.println( 'a' + (char)1 ); // output is 98
	System.out.println( "a" + 1 ); //output a1
	System.out.println( 'a' + 1 ); //output 98
  }
}
```

        
</p>
</details>

#### Prefix & Postfix Operators

<details><summary>Click Here</summary>
<p>

** ++ and -- used as a prefix or as a postfix **

Assume for what is being discussed that what works for increment operators(`++`) will also work with decrement operators(`--`).  I will only use increment operators for the sake of brevity.
	
If you use the `++` operator as a prefix like: `++var`, the value of `var` is incremented by 1; then it returns the value.
If you use the `++` operator as a postfix like: `var++`, the original value of `var` is returned first; then `var` is incremented by 1.

```java
class Main {
    public static void main(String[] args) {
        int var1 = 5, var2 = 5;

        // 5 is displayed
        // Then, var1 is increased to 6.
        System.out.println(var1++); //output is 5

        // var2 is increased to 6
        // Then, var2 is displayed
        System.out.println(++var2); //output is 6
		System.out.println(var1); // output is now 6
		System.out.println(var2); // output is still 6
    }
}
```
As a wrap-up, consider the ++ operator as: 
		x = x++; //Post-increment
		x = ++x; //Pre-increment
	
</p>
</details>




### Assignment 2 - Race Car

Starter Files: [Activity129RaceCar.zip](https://github.com/AP-CSA-JAVA/CSA_JAVA-Course/files/9757289/Activity129RaceCar.zip)

Complete the computeTime method and the comments in main.java

```java
	//Length of the track in meters
        double distance = 2414; // ~ 1.5 miles
        
        // Generate a random acceleration (integer) 
        // for each car from 20 - 50 (inclusive)

        // Create two Racecar objects

        // Compute the finishing times for both cars
        // Print times of each car
```

You will need to complete the methods and toString within Racecar.java
	
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
	
<details><summary>Free Response Question (FRQ)</summary>
<p>

**Free Response Question**
	
Students will work in pairs during this activity.

In this part of the activity, you and a partner will answer your first Free Response Question (FRQ). FRQs define a set of requirements that an algorithm must meet. You provide answers to the FRQ in the form of handwritten Java code.

FRQs are also great ways to apply the knowledge and skills you have learned. They are also on the College Board’s AP exam, representing approximately 45 percent of the Exam. You should practice hand writing your answers to FRQs since this is the format you will use on the exam.

As to the structure of FRQs, the one you will complete now is a shortened version of an FRQ you might see on an exam. Other FRQs in this course will be longer and more like the FRQs you will see in an exam. In general, FRQs describe a scenario and specific requirements that your code must meet. Sometimes FRQs provide code to enhance. They can also omit irrelevant code, using comments similar to `/* implementation not shown */`. 

Your first FRQ is titled Annuity. It requires you to write expressions using a Math method you learned in this activity and to use a return statement to return a value from a method.

Your teacher will distribute the Annuity FRQ. Work together with a partner to write your solution.

Once you complete the FRQ, ask your teacher for the scoring guidelines and with the guidelines in hand, join another team of two. Exchange solutions and grade each other’s FRQs according to the canonical (most well-established or ideal) solution.
	

</p>
</details>


	
________________________________________________________________________________________________________
	

## Project Mad Libs

- [ ] Apply coding concepts you have learned up to this point.
- [ ] Apply the programming development process to create a project.
- [ ] Capture your project and communicate how each part of your program works.

**Requirements of this project**

Give a Mad Lib with three user inputs, create a user-generated story with the correct parts of speech. 
Your program should allow a user to enter values that change the output of a story. Specifically, it should include:
- [ ] a class definition header that matches the file name
- [ ] a main method for the program
- [ ] the use of camelCase when appropriate
- [ ] comments describing the algorithms 
- [ ] a variable containing the incomplete Mad Lib
- [ ] methods from String class
- [ ] algorithm(s) that process user input
- [ ] algorithm(s) to parse for the parts of speech to replace
- [ ] algorithm(s) to parse for sections to include
	- [ ] various prompts to keep the user on track
	- [ ] a final print statement to display the completed story
	
**Penalty:**
- [ ] Appropriate sentence structure & syntax
- [ ] Code that causes errors
	
Share your link for your project.  No Screenshots needed for this project.
