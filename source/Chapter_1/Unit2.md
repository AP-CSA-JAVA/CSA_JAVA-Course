# Unit 2 - Using Objects

## Objects: Instances of Classes

**GOALS**
- [ ] Explain the relationship between a class and an object


As stated earlier, a *class* is a blueprint of an object.  So we can also say that an *object* is an instance of a class.  What we define as a class determines what objects that will be associated with the class and how things will operate within it.  For example, we can define `human` as a class.  We can assign attributes to that class like a nose, ears, eyes, hands, feet, etc.  **NOTE:** Attribute and state are interchangable terms.

We can also create a *method* that will call the attributes within a class.  For example, we can create a method called running or sleeping.  Now each of these methods will use an attribute or attributes of its class to perform something within the `human` class.  If we create an instance of the `human` class, let say Object John , then John will have all the attributes (nose , ears, eyes, hands, legs) unique to it and will also have access to these methods to carry out basic functions. **NOTE:** Method and behavior are interchangable terms.

The value of the attributes define the state of the object. What makes this efficient is that the class does not hold any space in the memory becaue we just create a definition.  The moment we *instantiate* the class the object will require a dedicated space in memory.  Thus we can say that a Class defines how the object should look and object is the actual representation of the same.

### Example:
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
**Things to Remember**
Object-oriented Programming Facts:
- [ ] Properties are the characteristics of your objects
- [ ] Object-Oriented programming focuses on the data represented inthe problem
- [ ] Object-Oriented programs remove details from many programs, making the code rewrite less frequent.
- [ ] Methods are the actions that your object can take.
- [ ] A class is like a blueprint or a recipe.
- [ ] A class is used to create an instance of a class, called an object

## Creating and Storing Objects

The next two concepts will be used in most of your programs moving forward.  Read through **constructor** and **toString()** below.

A **constructor** in Java is a special method that is used to initialize objects. The constructor is called when an object of a class is created. It can be used to set initial values for object attributes.

Take a look at the example below:

```java
// Create a Main class
public class Main {
  int age;  // Create a class attribute

  // Create a class constructor for the Main class
  public Main() {
    age = 5;  // Set the initial value for the class attribute age
  }

  public static void main(String[] args) {
    Main myObj = new Main(); // Create an object of class Main (This will call the constructor)
    System.out.println("My age is " + myObj.age); // Print the value of age
  }
}
```
It is a *best practice* to keep your class definitions in a separate file from the file containing the main method that executes a program. This way, your class definitions can be used in another program without connecting to unnecessary code.

A **toString()** is a prebuilt method in Java that returns the value in a string format. Therefore, any object that this method is applied on, will return as a string object.

The first example below is when it is called as a method of an object instance.
```java
public class Main {
    public static void main( String args[] ) {

        //Creating an integer of value 1
        integer x = 1;
        // Calling the toString method as a function of the Integer variable
        System.out.println( x.toString() );
    }
}
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

### Assignment 1

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

### Assignment 2
- [ ] Complete the cakeRunner program
- [ ] Submit your program code

**Sample Output**
![cakeRunner](https://user-images.githubusercontent.com/12989939/167034699-91f78db4-b728-41cf-9eb3-d151d1c9c9b3.PNG)

### Extra Credit
**Instructions:**

1. Edit the Bike class to have the following attributes:
   - `kind`
   - `size`
   - `cost`
2. Create a no argument constructor. The values are Cruiser, 26, and 175.99
3. Create a constructor that only takes type and size as parameters
4. Create a constructor that takes all the parameters
5. Create two more objects that will match the sample output.

## Scanner Class
Scanner class is a package that provide primitive input within Java programs.  It can be found in the [java.util Package](https://docs.oracle.com/javase/8/docs/api/java/util/package-summary.html) website.

- [ ] First you need to import the class from the online Oracle repository by typing `import java.util.Scanner;`
- [ ] To create an object of the Scanner class, we must pass a defined object in `System.in` which is the standard input.
- [ ] To read the data type we need to use the function next**data type**().  For example, to read an `int` we would type `nextint()`.
- [ ] To read strings, we would use `nextLine()`.
- [ ] To read a single character we would use `next()` or `charAt()`.  The `next()` function returns the next word in the input as a string.  Whereas, `charAt()` function returns the first character in that string.

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

## Calling a Void Method

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

### Assignment 1
#### Instructions DigiPet
You will create a class DigiPet

#### Steps
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
5. Call the methods according to the comments in main

### Calling a Void Method with Parameters

Using parameters allows us the freedom to write a program that is more flexible and specific.  It is similar to providing specific instructions for the program.  When you pass multiple parameters, it is important to make sure that the order is correct.  Incorrect order will return incorrect results.  As we did with constructors, we can overload a method.  Recall that the method name has also an ordered list of parameters.  You can also overload a method by giving the method the same name as another method, and provide a different set of parameters.

For example:
```java
public void school(int grade, double gpa) {}
public void school(int grade, double gpa, String name) {}
```
	
