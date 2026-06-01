# Unit 5

 
### 5.1 Anatomy of a Class

**Goals**
  - Understand the design principals of a class.
  - Use a nonprogramming methodology to design code.
  - Create a roadmap for the next activities.


A class is a blueprint for the objects of that class. A class contains variables and methods to store and manipulate information. To create a class, you first state whether you want it to be public or private, use the class keyword, and name the class. Then, you add a set of curly braces {} that will contain the contents of the class. 

Let's create a Java program that explains the anatomy and design principles of a class. We'll define a class called Student to demonstrate the concepts. Here's the code:

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

    // Method to get the name of the student
    public String getName() {
        return name;
    }

    // Method to set the name of the student
    public void setName(String name) {
        this.name = name;
    }

    // Method to get the age of the student
    public int getAge() {
        return age;
    }

    // Method to set the age of the student
    public void setAge(int age) {
        this.age = age;
    }

    // Method to get the student ID
    public String getStudentId() {
        return studentId;
    }

    // Method to set the student ID
    public void setStudentId(String studentId) {
        this.studentId = studentId;
    }

    // Method to display student information
    public void displayInfo() {
        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
        System.out.println("Student ID: " + studentId);
    }

    // Main method to test the Student class
    public static void main(String[] args) {
        // Creating a Student object using the constructor
        Student student1 = new Student("Ted Lasso", 45, "12345");

        // Displaying the initial information
        System.out.println("Initial Information:");
        student1.displayInfo();

        // Modifying student attributes using setter methods
        student1.setName("Roy Kent");
        student1.setAge(35);

        // Displaying the updated information
        System.out.println("\nUpdated Information:");
        student1.displayInfo();
    }
}

```

- We define the Student class, which represents a student with attributes such as name, age, and studentId.
- We use the access modifier private to encapsulate the attributes, ensuring that they can only be accessed or modified through public methods (getters and setters).
- The constructor public Student(String name, int age, String studentId) is used to initialize the Student object when it's created.
- We provide public getter and setter methods for each attribute to control access to the class's data. For example, getName() returns the name of the student, and setName(String name) sets the name of the student.
- The displayInfo() method is used to display the student's information in a formatted manner.
- In the main method, we create a Student object and demonstrate the usage of getter and setter methods to access and modify the attributes of the object.

**Design Principles of a Class**:

- <mark>Encapsulation</mark>: We use access modifiers (private, public, protected) to encapsulate the attributes, allowing controlled access to them. Getter and setter methods help in accessing and modifying the attributes while maintaining data integrity.

- <mark>Abstraction</mark>: The Student class abstracts the concept of a student by defining its attributes and behaviors. It hides the implementation details and exposes only essential features.

- <mark>Modularity</mark>: The class is a modular unit that can be used in various parts of the program. It represents a single entity or concept (a student in this case) and can be reused as needed.

- <mark>Cohesion</mark>: The Student class is designed to have high cohesion, meaning it focuses on a single responsibility, managing student information.

- <mark>Single Responsibility Principle (SRP)</mark>: The Student class adheres to SRP, as it only deals with managing student-related attributes and behaviors.

- <mark>Information Hiding</mark>: We hide the internal details of the class by making attributes private. External code interacts with the class only through well-defined methods.

- Constructor</mark>: The class has a constructor to ensure proper initialization of objects during creation.

- <mark>Code Reusability</mark>: We can create multiple Student objects using the same class blueprint, promoting code reusability.

- <mark>Getter and Setter Methods</mark>: The use of getter and setter methods ensures controlled access to attributes and adheres to the principle of encapsulation.

When you run this program, it will output:

```java
Initial Information:
Name: Ted Lasso
Age: 45
Student ID: 12345

Updated Information:
Name: Roy Kent
Age: 35
Student ID: 12345
```

This program demonstrates the anatomy and design principles of a class by creating the Student class, encapsulating its attributes, providing getter and setter methods for controlled access, and demonstrating the concept of information hiding and abstraction.

### 5.2 Constructors
**Goals**
- Understand the concept of class constructors.
- Write your own class constructors program.
- Examine call by value and reference with regard to class constructors.

This information can be found in: [Unit 2: Using Objects](https://ap-csa-java.github.io/CSA_JAVA-Course/Chapter_1/Unit2.html#unit-2-using-objects)

Java constructors are special methods that are used to initialize objects of a class. They are called automatically when an object is created and are used to set initial values or perform setup tasks. Constructors have the same name as the class and do not have a return type.

Let's create a simple Java program that explains the use of constructors. In this example, we'll create a class called Car with a constructor to initialize its properties.

```java
public class Car {
    // Instance variables
    private String make;
    private String model;
    private int year;
    
    // Constructor
    public Car(String make, String model, int year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    
    // Method to display car information
    public void displayInfo() {
        System.out.println("Car: " + make + " " + model + " (" + year + ")");
    }
    
    // Main method to test the Car class
    public static void main(String[] args) {
        // Creating objects using the constructor
        Car car1 = new Car("Toyota", "Camry", 2022);
        Car car2 = new Car("Honda", "Civic", 2021);
        
        // Calling the displayInfo method to see the car information
        car1.displayInfo();
        car2.displayInfo();
    }
}
```

- In this program we created a class `Car` with three instance variables: `make`, `model`, and `year`.
- The class has a constructor `Car(String make, String model, int year)` that takes three parameters representing the `make`, `model`, and `year` of the car. Inside the constructor, we initialize the instance variables using the this keyword.
- There is a method displayInfo() that prints the car information.
- In the main method, we create two Car objects (car1 and car2) using the constructor. We pass the make, model, and year of the cars as arguments to the constructor.
- Finally, we call the displayInfo() method on each Car object to display their information.

When you run this program, it will output:

```java
Car: Toyota Camry (2022)
Car: Honda Civic (2021)
```

### 5.3 Documentation with Comments
**Goals**
- Understand how to properly comment code.
- Implement precondition and postcondition commenting to summarize methods.
- Use single-line comments to make code more readable and understand what tasks it performs.
    
This information can be found in: 
[Unit 1: Primitive Types](https://ap-csa-java.github.io/CSA_JAVA-Course/Chapter_1/Unit1.html#unit-5-3-documentation-with-comments)

Commenting Java code is essential to improve its readability, explain functionality, and provide information about preconditions and postconditions of methods. Let's create a Java program with proper comments that demonstrate how to use single-line comments for readability and provide preconditions and postconditions for methods.

```java

public class MathUtils {
    /**
     * Adds two integers and returns the result.
     *
     * @param a The first integer to be added.
     * @param b The second integer to be added.
     * @return The sum of the two integers.
     */
    public static int add(int a, int b) {
        // Performing addition and returning the result
        return a + b;
    }

    /**
     * Divides two integers and returns the result.
     *
     * @param dividend The number to be divided (numerator).
     * @param divisor  The number to divide by (denominator).
     * @return The result of the division.
     * @throws ArithmeticException If the divisor is zero.
     */
    public static double divide(int dividend, int divisor) {
        if (divisor == 0) {
            throw new ArithmeticException("Cannot divide by zero.");
        }
        // Performing division and returning the result
        return (double) dividend / divisor;
    }

    /**
     * Checks if a number is even.
     *
     * @param number The number to be checked.
     * @return True if the number is even, false otherwise.
     */
    public static boolean isEven(int number) {
        // A number is even if it is divisible by 2 without remainder
        return number % 2 == 0;
    }

    /**
     * Calculates the factorial of a positive integer.
     *
     * @param n The positive integer for which to calculate the factorial.
     * @return The factorial of the given integer.
     * @throws IllegalArgumentException If the input is negative.
     */
    public static int factorial(int n) {
        if (n < 0) {
            throw new IllegalArgumentException("Input must be a non-negative integer.");
        }
        // Calculating the factorial using recursion
        if (n == 0 || n == 1) {
            return 1;
        } else {
            return n * factorial(n - 1);
        }
    }

    // Main method to test the MathUtils class
    public static void main(String[] args) {
        int sum = add(5, 10);
        System.out.println("Sum: " + sum);

        double result = divide(20, 4);
        System.out.println("Division Result: " + result);

        boolean isFiveEven = isEven(5);
        System.out.println("Is 5 even? " + isFiveEven);

        try {
            int factorialResult = factorial(5);
            System.out.println("Factorial of 5: " + factorialResult);
        } catch (IllegalArgumentException ex) {
            System.out.println("Error: " + ex.getMessage());
        }
    }
}
```

In the above code:

- We use block comments (/** ... */) for documenting the class and each method.
- For each method, we use single-line comments (//) to explain what the method does concisely.
- The comments for the methods add, divide, isEven, and factorial serve as preconditions, postconditions, and explanations of their functionalities.
- In the divide and factorial methods, we also throw exceptions with meaningful messages to indicate any violations of preconditions (divisor is zero or input is negative).
- The main method is used to test the MathUtils class and its methods.

By providing appropriate comments, we make the code more readable, understandable, and maintainable for ourselves and other developers who might work with the code in the future.

In this Java program, we'll implement comments to demonstrate how to properly comment code, use single-line comments to make code more readable, and include precondition and postcondition comments to summarize methods.

```java
public class CommentingExample {
    /**
     * This method calculates the sum of two integers.
     * 
     * Precondition: Both `num1` and `num2` must be valid integers.
     * 
     * Postcondition: The result will be the sum of `num1` and `num2`.
     * 
     * @param num1 The first integer.
     * @param num2 The second integer.
     * @return The sum of `num1` and `num2`.
     */
    public static int calculateSum(int num1, int num2) {
        // Perform the addition of num1 and num2
        int sum = num1 + num2;
        return sum;
    }

    /**
     * This method calculates the factorial of a given number.
     * 
     * Precondition: The input number `n` must be a non-negative integer.
     * 
     * Postcondition: The result will be the factorial of `n`.
     * 
     * @param n The number for which to calculate the factorial.
     * @return The factorial of `n`.
     */
    public static int calculateFactorial(int n) {
        // Check if n is non-negative
        if (n < 0) {
            throw new IllegalArgumentException("Input must be a non-negative integer.");
        }

        // Calculate the factorial of n
        int factorial = 1;
        for (int i = 1; i <= n; i++) {
            factorial *= i;
        }
        return factorial;
    }

    // Main method to test the functions
    public static void main(String[] args) {
        // Test calculateSum method
        int resultSum = calculateSum(5, 7);
        System.out.println("Sum: " + resultSum);

        // Test calculateFactorial method
        int resultFactorial = calculateFactorial(5);
        System.out.println("Factorial: " + resultFactorial);
    }
}
```

Explanation:

- We have created a class CommentingExample that contains two methods: calculateSum and calculateFactorial.
- For each method, we have added Javadoc comments (enclosed in /** ... */) to describe what the method does, its parameters, and its return value.
- We have used single-line comments (with //) to provide additional explanations of the code steps within the methods.
- We have implemented preconditions and postconditions comments for each method, stating the requirements before calling the method and the expected result after its execution.
- In the main method, we test both the calculateSum and calculateFactorial methods to demonstrate their functionality.

When you run this program, it will output:

```java
Sum: 12
Factorial: 120
```

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

In this Java program, we'll demonstrate how to properly encapsulate the attributes of a class and how to write methods to change those encapsulated attributes.

Encapsulation is one of the four fundamental concepts of object-oriented programming (OOP), and it helps in hiding the implementation details of a class while providing access to its data through methods. This promotes data integrity and security by controlling access to the class's attributes.

Let's create a simple class called Person, which will have attributes such as name, age, and address, and we'll provide public methods to change these attributes in a controlled manner.

```java

public class Person {
    // Private encapsulated attributes
    private String name;
    private int age;
    private String address;
    
    // Constructor
    public Person(String name, int age, String address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    
    // Public methods to access the attributes (getters)
    public String getName() {
        return name;
    }
    
    public int getAge() {
        return age;
    }
    
    public String getAddress() {
        return address;
    }
    
    // Public methods to change the attributes (setters)
    public void setName(String name) {
        this.name = name;
    }
    
    public void setAge(int age) {
        this.age = age;
    }
    
    public void setAddress(String address) {
        this.address = address;
    }
    
    // Method to display person information
    public void displayInfo() {
        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
        System.out.println("Address: " + address);
    }
    
    // Main method to test the Person class
    public static void main(String[] args) {
        // Creating a person object using the constructor
        Person person = new Person("John Doe", 30, "123 Main St");

        // Displaying the initial information
        System.out.println("Initial Information:");
        person.displayInfo();

        // Changing attributes using setters
        person.setName("Jane Smith");
        person.setAge(28);
        person.setAddress("456 Elm St");

        // Displaying the updated information
        System.out.println("\nUpdated Information:");
        person.displayInfo();
    }
}

```

- We have created a class Person with private encapsulated attributes: name, age, and address.
- The class provides public getter methods (getName(), getAge(), and getAddress()) to access the attribute values.
- It also provides public setter methods (setName(), setAge(), and setAddress()) to change the attribute values.
- The displayInfo() method is used to display the person's information.
- In the main method, we create a Person object and use the setter methods to change the attributes. We then display the initial and updated information.

When you run this program, it will output:

```java
Initial Information:
Name: John Doe
Age: 30
Address: 123 Main St

Updated Information:
Name: Jane Smith
Age: 28
Address: 456 Elm St
```

This program demonstrates proper encapsulation by making the attributes private and providing controlled access to them using public getter and setter methods. It allows you to modify the attributes while maintaining data integrity and encapsulation principles.


### 5.6 Writing Methods
**Goals**
- Define behaviors of an object using non-void class methods with parameters.
- Create new types using classes.
- Write code to complete code segments.

In this Java program, we'll demonstrate how to define behaviors of an object using non-void class methods with parameters, create new types using classes, and write code to complete code segments. For this example, we'll create a simple program to model a bank account.

```java
public class BankAccount {
    // Instance variables
    private String accountNumber;
    private double balance;
    
    // Constructor
    public BankAccount(String accountNumber, double initialBalance) {
        this.accountNumber = accountNumber;
        this.balance = initialBalance;
    }
    
    // Method to deposit money into the account
    public void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
            System.out.println("Deposit successful. New balance: " + balance);
        } else {
            System.out.println("Invalid deposit amount. Please enter a positive value.");
        }
    }
    
    // Method to withdraw money from the account
    public void withdraw(double amount) {
        if (amount > 0 && amount <= balance) {
            balance -= amount;
            System.out.println("Withdrawal successful. New balance: " + balance);
        } else {
            System.out.println("Invalid withdrawal amount. Please check your balance and try again.");
        }
    }
    
    // Method to display account information
    public void displayInfo() {
        System.out.println("Account Number: " + accountNumber);
        System.out.println("Balance: " + balance);
    }
    
    // Main method to test the BankAccount class
    public static void main(String[] args) {
        // Creating a new bank account
        BankAccount account = new BankAccount("12345", 1000.0);
        
        // Displaying account information
        System.out.println("Account Information:");
        account.displayInfo();
        
        // Making some transactions
        account.deposit(500.0);
        account.withdraw(200.0);
        account.withdraw(1500.0);
        
        // Displaying updated account information
        System.out.println("\nUpdated Account Information:");
        account.displayInfo();
    }
}
```

- We have created a class BankAccount that represents a bank account with attributes accountNumber and balance.
- The class constructor takes two parameters, accountNumber and initialBalance, to initialize the account.
- We have defined two non-void methods, deposit(double amount) and withdraw(double amount), to deposit and withdraw money from the account, respectively. These methods take a double parameter, amount, representing the money to be deposited or withdrawn.
- The displayInfo() method is used to display the account information.
- In the main method, we create a BankAccount object and test its functionalities by making deposits and withdrawals, and then displaying the updated account information.

When you run this program, it will output:

```java
Account Information:
Account Number: 12345
Balance: 1000.0
Deposit successful. New balance: 1500.0
Withdrawal successful. New balance: 1300.0
Invalid withdrawal amount. Please check your balance and try again.

Updated Account Information:
Account Number: 12345
Balance: 1300.0
```

This program demonstrates how to define behaviors of an object using non-void class methods with parameters (deposit and withdraw methods), create a new type using a class (BankAccount class), and write code to complete code segments for managing bank account transactions.
    
### 5.7 Static Variables and Methods
**Goals**
- Define behaviors of a class through static methods.
- Define the static variables that belong to the class.

In this Java program, we'll define behaviors of a class through static methods and define static variables that belong to the class. We'll create a simple MathUtility class to demonstrate this.

```java
public class MathUtility {
    // Static variables (belong to the class)
    private static final double PI = 3.14159;
    private static int count = 0;

    // Static method to calculate the area of a circle
    public static double calculateCircleArea(double radius) {
        return PI * radius * radius;
    }

    // Static method to calculate the factorial of a number
    public static int calculateFactorial(int n) {
        if (n == 0 || n == 1) {
            return 1;
        } else {
            return n * calculateFactorial(n - 1);
        }
    }

    // Static method to increment the count variable
    public static void incrementCount() {
        count++;
    }

    // Static method to get the current count value
    public static int getCount() {
        return count;
    }

    // Main method to test the MathUtility class
    public static void main(String[] args) {
        // Calculate the area of a circle
        double radius = 5.0;
        double area = calculateCircleArea(radius);
        System.out.println("Area of the circle with radius " + radius + " is: " + area);

        // Calculate factorial
        int number = 5;
        int factorial = calculateFactorial(number);
        System.out.println("Factorial of " + number + " is: " + factorial);

        // Increment the count and display the current value
        incrementCount();
        incrementCount();
        System.out.println("Current count value: " + getCount());
    }
}
```

Explanation:

- We create a class called MathUtility.
- Inside the class, we define two static variables: PI (representing the mathematical constant π) and count (to keep track of the number of times we call the incrementCount() method).
- We define three static methods: calculateCircleArea(), calculateFactorial(), and incrementCount().
- The calculateCircleArea() method calculates the area of a circle given its radius using the PI static variable.
- The calculateFactorial() method calculates the factorial of a number using recursion.
- The incrementCount() method increments the count static variable by 1.
- The getCount() method returns the current value of the count static variable.
- In the main method, we test the static methods by calling them with sample values and display the results.

When you run this program, it will output:

```java
Area of the circle with radius 5.0 is: 78.53975
Factorial of 5 is: 120
Current count value: 2
```

This program demonstrates how to define behaviors of a class through static methods (`calculateCircleArea()`, `calculateFactorial()`, `incrementCount()`) and how to define static variables (PI, count) that belong to the class `MathUtility`. Static methods and variables are associated with the class itself rather than specific instances (objects) of the class.


### 5.8 Scope and Access
**Goals**
- Explain where variables can be used in a program

In this Java program, we'll demonstrate the scope and access levels of variables in a program. We'll use different types of variables, including instance variables, local variables, and static variables, and show where they can be accessed.

```java
public class ScopeAndAccessExample {
    // Instance variable (accessible throughout the class)
    private String instanceVariable = "I am an instance variable";

    // Static variable (accessible throughout the class and shared among all instances)
    private static int staticVariable = 10;

    // Method with local variable
    public void exampleMethod() {
        // Local variable (accessible only within this method)
        int localVariable = 5;

        // Accessing instance and static variables from this method
        System.out.println("Inside exampleMethod:");
        System.out.println(instanceVariable); // Accessing instance variable
        System.out.println("Static variable: " + staticVariable); // Accessing static variable
        System.out.println("Local variable: " + localVariable); // Accessing local variable
    }

    // Another method accessing instance and static variables
    public void anotherMethod() {
        // Accessing instance and static variables from this method
        System.out.println("Inside anotherMethod:");
        System.out.println(instanceVariable); // Accessing instance variable
        System.out.println("Static variable: " + staticVariable); // Accessing static variable

        // The following line will give a compilation error because localVariable is not accessible here.
        // System.out.println("Local variable: " + localVariable);
    }

    // Static method accessing static variable
    public static void staticMethod() {
        // Accessing static variable from a static method
        System.out.println("Inside staticMethod:");
        System.out.println("Static variable: " + staticVariable);
        
        // The following line will give a compilation error because instanceVariable is not accessible here.
        // System.out.println(instanceVariable);
        
        // We can create local variables inside static methods
        int localVariable = 20;
        System.out.println("Local variable inside staticMethod: " + localVariable);
    }

    // Main method to test the ScopeAndAccessExample class
    public static void main(String[] args) {
        // Creating an object of the class
        ScopeAndAccessExample example = new ScopeAndAccessExample();

        // Accessing instance variable
        System.out.println("Accessing instance variable from the main method:");
        System.out.println(example.instanceVariable);

        // Accessing static variable
        System.out.println("Accessing static variable from the main method: " + staticVariable);

        // Accessing local variable from a non-static method
        example.exampleMethod();

        // Accessing instance and static variables from another non-static method
        example.anotherMethod();

        // Accessing static variable from a static method
        staticMethod();

        // The following line will give a compilation error because localVariable is not accessible here.
        // System.out.println("Local variable from the main method: " + localVariable);
    }
}
```

Explanation:

- We have a class `ScopeAndAccessExample` that contains instance variables, `instanceVariable`, and a static variable, `staticVariable`.
- We have three methods: `exampleMethod()`, `anotherMethod()`, and `staticMethod()`, each demonstrating different types of variables and their scope and access.
- Inside `exampleMethod()`, we can access instance and static variables along with the local variable localVariable.
- Inside `anotherMethod()`, we can access instance and static variables, but we cannot access the localVariable from exampleMethod() because it's a local variable and has a limited scope within that method.
- In `staticMethod()`, which is a static method, we can only access static variables, not instance variables. However, we can create and access local variables inside static methods.
- In the `main` method, we demonstrate accessing instance and static variables from the object of the class, and we call the methods to showcase their behavior.

When you run this program, it will output:

```java
Accessing instance variable from the main method:
I am an instance variable
Accessing static variable from the main method: 10
Inside exampleMethod:
I am an instance variable
Static variable: 10
Local variable: 5
Inside anotherMethod:
I am an instance variable
Static variable: 10
Inside staticMethod:
Static variable: 10
Local variable inside staticMethod: 20
```

This program demonstrates the scope and access levels of variables in a Java program. It showcases how instance variables are accessible throughout the class, static variables are shared among all instances of the class, and local variables are limited to the method where they are declared. Static methods can only access static variables, whereas non-static methods can access both instance and static variables.


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


Ethical and social implications of computing systems are becoming increasingly important as technology plays an ever-expanding role in our lives. Here, we'll discuss some of the ethical and social considerations, the beneficial and harmful effects of programs, and how to develop awareness around ethical issues for internet service providers (ISPs).

**Ethical and Social Implications of Computing Systems:**

- <mark>Privacy Concerns</mark>: Computing systems often collect and store vast amounts of personal data, raising concerns about privacy and data security. Users' personal information must be handled responsibly and ethically to protect their rights.

- <mark>Bias and Discrimination</mark>: Algorithms and AI systems can inherit biases from the data they are trained on, leading to discriminatory outcomes in decision-making processes. It is essential to ensure fairness and avoid perpetuating existing biases.

- <mark>Autonomy and Control</mark>: As technology advances, concerns about the increasing automation and decision-making powers of machines arise. Balancing autonomy with human control is crucial to prevent potential harm.

- <mark>Cybersecurity</mark>: Computing systems' vulnerabilities pose significant risks, as cyberattacks and data breaches can have severe consequences for individuals, organizations, and societies. Developing robust security measures is vital to safeguard against such threats.

- <mark>Employment Disruption</mark>: Automation and AI can lead to job displacement, affecting people's livelihoods and socio-economic stability. Preparing for reskilling and upskilling workers becomes crucial.

- <mark>Digital Divide</mark>: Unequal access to technology and the internet can exacerbate existing social inequalities, leaving disadvantaged communities behind. Bridging the digital divide is essential for inclusive and equitable technological development.

**Beneficial and Harmful Effects of Programs:**

- <mark>Beneficial Effects</mark>: Programs can greatly enhance productivity, efficiency, and communication in various fields, such as healthcare, education, research, and entertainment. They enable advancements in scientific discoveries, medical treatments, and data analysis.

- <mark>Harmful Effects</mark>: Malicious programs, such as viruses and ransomware, can cause significant harm to individuals, businesses, and critical infrastructure. Additionally, poorly designed or implemented programs may lead to system failures, data loss, and security breaches.

**Developing Awareness Around Ethical Issues for ISPs:**

- <mark>Transparency</mark>: ISPs should be transparent about their data collection practices, policies, and how they use consumers' data. Providing clear privacy policies and user agreements helps build trust with customers.

- <mark>Data Protection</mark>: ISPs must implement robust data protection measures to safeguard user data from unauthorized access or data breaches. Compliance with data protection regulations is essential.

- <mark>Net Neutrality</mark>: ISPs should adhere to net neutrality principles, treating all internet traffic equally and not discriminating against specific websites or services.

- <mark>Ethical Use of User Data</mark>: ISPs should obtain explicit consent before collecting and using users' personal data. Additionally, they should ensure data is anonymized and used for legitimate purposes only.

- <mark>Addressing Bias</mark>: ISPs should ensure that their algorithms and AI systems are fair and unbiased to avoid discriminatory practices.

- <mark>Customer Education</mark>: ISPs can play a role in educating their customers about privacy risks, cybersecurity best practices, and how to protect themselves online.

- <mark>Collaboration and Accountability</mark>: ISPs should collaborate with regulators, industry peers, and stakeholders to address ethical challenges collectively. They should also be accountable for any breaches or violations.

Computing systems have far-reaching ethical and social implications. Emphasizing responsible development, transparency, and user privacy is essential for building trust and ensuring technology benefits society. Awareness around ethical issues for ISPs can lead to better data protection, fair practices, and an inclusive digital future.
