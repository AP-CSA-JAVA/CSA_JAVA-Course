# Unit 5

 
### 5.1 Anatomy of a Class

**Goals**
  - Understand the design principals of a class.
  - Use a nonprogramming methodology to design code.
  - Create a roadmap for the next activities.


A class is a blueprint for the objects of that class. A class contains variables and methods to store and manipulate information. To create a class, you first state whether you want it to be public or private, use the class keyword, and name the class. Then, you add a set of curly braces {} that will contain the contents of the class. To understand the key components of classes, we will create an NewClass class. This is the class header:

public class NewClass {}

Inside the curly braces, you can define the variables and methods of the class. Variables are used to store data, and methods are used to perform actions. In the NewClass class, we can create an instance variable to store the number of students in a classroom:

public class NewClass {

      private int numStudents;
}


### 5.2 Constructors
**Goals**
- Understand the concept of class constructors.
- Write your own class constructors program.
- Examine call by value and reference with regard to class constructors.

This information can be found in: [Unit 2: Using Objects](https://github.com/AP-CSA-JAVA/CSA_JAVA-Course/blob/main/source/Chapter_1/Unit2.md#unit-52---constructors)

### 5.3 Documentation with Comments
**Goals**
- Understand how to properly comment code.
- Implement precondition and postcondition commenting to summarize methods.
- Use single-line comments to make code more readable and understand what tasks it performs.
    
This information can be found in: 
[Unit 1: Primitive Types](https://ap-csa-java.github.io/CSA_JAVA-Course/Chapter_1/Unit1.html#unit-5-3-documentation-with-comments)

### 5.4 Accessor Methods
**Goals**
- Understand how to properly encapsulate the attributes of a class.
- Write methods to display encapsulated attributes of a class. 

```java
public class Main {
    public static void main(String[] args) {
        // Create a Car object
        Car car = new Car("Toyota", 200);

        // Access and print the brand using the accessor method
        System.out.println("Brand: " + car.getBrand());

        // Access and print the max speed using the accessor method
        System.out.println("Max Speed: " + car.getMaxSpeed());

        // Update the brand using the mutator method
        car.setBrand("Honda");

        // Update the max speed using the mutator method
        car.setMaxSpeed(250);

        /* Access and print the updated brand and max speed using the 
	accessor methods*/
        System.out.println("Updated Brand: " + car.getBrand());
        System.out.println("Updated Max Speed: " + car.getMaxSpeed());
    }
}

/* New Class file */

// Parent class
class Vehicle {
    private String brand;

    // Constructor
    public Vehicle(String brand) {
        this.brand = brand;
    }

    // Accessor method
    public String getBrand() {
        return brand;
    }

    // Mutator method
    public void setBrand(String brand) {
        this.brand = brand;
    }
}

/* New Class File */

// Child class inheriting from the parent class
class Car extends Vehicle {
    private int maxSpeed;

    // Constructor
    public Car(String brand, int maxSpeed) {
        super(brand);
        this.maxSpeed = maxSpeed;
    }

    // Accessor method
    public int getMaxSpeed() {
        return maxSpeed;
    }

    // Mutator method
    public void setMaxSpeed(int maxSpeed) {
        this.maxSpeed = maxSpeed;
    }
}
```
**Sample Output**
```java
Brand: Toyota
Max Speed: 200
Updated Brand: Honda
Updated Max Speed: 250
```


### 5.5 Mutator Methods
**Goals**
- Understand how to properly encapsulate the attributes of a class.
- Write methods to change the encapsulated attributes of a class. 


### 5.6 Writing Methods
**Goals**
- Define behaviors of an object using non-void class methods with parameters.
- Create new types using classes.
- Write code to complete code segments.
    
    
### 5.7 Static Variables and Methods
**Goals**
- Define behaviors of a class through static methods.
- Define the static variables that belong to the class.


### 5.8 Scope and Access
**Goals**
- Explain where variables can be used in a program


### 5.9 this Keyword
**Goals**
- Evaluate object reference expressions that use the keyword this.

`this` keyword refers to the current object in a method.  It is plausible that attribute and parameters can have the same name.  The use of `this` allows you to refer to a *specific* instance of an object.  `this` can be used to:
- invoke current method
- invoke current constructor
- return the current object
- pass an argument to the call method
- pass an argument to the call of a constructor

```java
public class Main {
  // declaration of an int
  int x = 2; 
 
  // Constructor with a parameter
  public Main(int x) { 
    this.x = x; 
  } 

  // Calling the constructor
  public static void main(String[] args)  { 
    Main numObj = new Main(5); 
    System.out.println("The instantiated value of x is " + numObj.x);
  } 
} 
```
**Output**
`The instantiated value of x is 5`

```java
import java.util.Scanner;

public class Main {
   public static void main(String[] args) {
		 
      Scanner sc =new Scanner(System.in);
      System.out.println("Enter your name ");
      String name = sc.next();
      System.out.println("Enter your grade ");
      int grade = sc.nextInt();

		    Student std = new Student(name, grade);
		    Student copyOfStd = new Student().copyArgument(std);
      
      System.out.println("Original object");
      std.showInfo();
      System.out.println("Copied object");
      copyOfStd.showInfo();
   }
}
/* ------------------- Student Class File ------------------- */

public class Student {
   private String name;
   private int grade;
   public Student(){
   }
   public Student(String name, int grade){
      this.name = name;
      this.grade = grade;
   }
   public Student copyArgument(Student std){
      this.name = std.name;
      this.grade = std.grade;
      return std;
   }
   public void showInfo(){
      System.out.println("Name : "+this.name);
      System.out.println("Grade : "+this.grade);
   }
}
```
**Output**
```java
Enter your name 
Samuel
Enter your grade 
12
Original object
Name : Samuel
Grade : 12
Copied object
Name : Samuel
Grade : 12
```


### 5.10 Ethical and Social Implications of Computing Systems
**Goals**
- Understand the ethical and social implications of computing systems.
- Understand beneficial and/or harmful effects of programs.
- Develop awareness around the ethical issues applying to internet service providers.

Computing systems and it's affect on society: 
- Privacy: 
- Security: 
- Accessibility: 
- Censorship: 
- Dependence: 

### Assignment 5.10.1
Research one of the topics above.  Write a reflection that discusses the pros and cons of the topic you chose.  Is it possible to achieve a balance that will benefit society?  If not, what led you to your conclusions?
