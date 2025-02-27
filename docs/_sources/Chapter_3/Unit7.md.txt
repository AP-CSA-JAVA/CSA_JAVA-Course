# Unit 7 ArrayList

## 7.1 Introduction to ArrayList

An `ArrayList` in Java is a dynamic array-like structure that can store elements of any generic type. Unlike arrays, which have a fixed size, ArrayList can grow or shrink in size as elements are added or removed. It is commonly used when you need a list that allows for dynamic resizing.  It is part of the java.util package and is based on the concept of an array, but with additional functionality and flexibility.

**Syntax to Create an ArrayList**:
```java
ArrayList<Type> list = new ArrayList<>();
// `Type` is the type of objects the list will hold.
// Example, `Integer`, `String`, `Boolean`, `Double`, `Float`
```


**Example**:
```java
ArrayList<String> list = new ArrayList<>();
list.add("one");
list.add("two");
list.add("three");
```

**Accessing Elements in an ArrayList**:
You can access elements of an `ArrayList` using the `get()` method, which takes the index of the element you want to retrieve.

```java
String number = list.get(1);  // Accesses the element at index 1 (i.e., "two")
System.out.println(number);   // Output: two
```

**Example of Accessing, Modifying, and Removing**:

```java
ArrayList<String> list = new ArrayList<>();
list.add("one");
list.add("two");
list.add("three");

// Access an element
String number = list.get(0);  // one
System.out.println(number);

// Modify an element
list.set(1, "four");  // Replaces "two" with "four"

// Remove an element
list.remove(2);  // Removes "three"
```

Key Features of an ArrayList:

- **Dynamic Sizing**: The size of an ArrayList can change during runtime.
- **Indexed Access**: Elements can be accessed by their index.
- **Allows Duplicates**: An ArrayList can store duplicate elements unlike sets.
- **Ordering**: Elements in an ArrayList are ordered, meaning they maintain the order in which they were added.
- **Null Elements**: An ArrayList can store `null` values.

---

**NOTE:** Both `arrays` and `ArrayList` are used to store multiple values. However, they differ in their structure, flexibility, and usage. Below is a comparison highlighting their similarities and differences.

***Similarities***

- **Store Multiple Elements:** Both arrays and `ArrayList` can hold multiple values of the same type.
- **Indexed Access:** Both allow access to elements via indices, starting from 0.
- **Ordered Collections:** Both maintain the order of insertion for the elements.

***Differences***

| Feature              | Array                             | ArrayList                         |
|----------------------|-----------------------------------|-----------------------------------|
| **Size**             | Fixed size after initialization.   | Dynamic size; can grow/shrink.     |
| **Type**             | Can store elements of any type (primitive or object). | Can only store objects (not primitives). Requires autoboxing for primitive types. |
| **Memory Allocation**| Memory is allocated at the time of initialization and cannot be resized. | Memory is dynamically allocated as elements are added. |
| **Performance**      | Faster due to fixed size and direct memory access. | Slower due to resizing and additional overhead. |
| **Resizing**         | Cannot be resized. If the array is full, a new one must be created. | Automatically resizes when elements are added beyond its capacity. |
| **Methods**          | Does not have built-in methods for manipulation, only basic operations like length. | Provides methods like `add()`, `remove()`, `contains()`, `size()`, etc. |
| **Type Safety**      | Strong type checking, especially with primitive types. | Type safety is provided through <ins>generics</ins>. |
| **Null Elements**    | Can hold `null` (only for object arrays). | Can hold `null` elements. |
| **Memory Efficiency**| More memory efficient for large datasets (due to no overhead of resizing). | Has additional overhead for resizing and managing the collection. |
| **Performance in Insertions/Removals** | Slow insertions/removals as elements need to be shifted. | Efficient insertions/removals, especially at the end of the list. |
| **Thread Safety**    | Arrays are not thread-safe by default. | `ArrayList` is not thread-safe, but `Collections.synchronizedList` can make it so. |

**Key Points**

- **Array:** Ideal for a fixed number of elements, especially when performance and memory efficiency are crucial.
- **ArrayList:** Useful when the number of elements may change over time or when you need to frequently perform operations like adding, removing, or checking for the presence of an element.

***When to Use Each***

- **Use an Array:**
  - When the size of the collection is known and does not change.
  - When performance and memory usage are critical.
  - When working with primitive data types (int, float, etc.).

- **Use an ArrayList:**
  - When the collection size may vary.
  - When you need dynamic resizing or additional methods for list manipulation.
  - When you need a more flexible and easy-to-use collection.

---


In this example, we import the ArrayList class from the java.util package. 

```java
import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        // Create an ArrayList to store integers
        ArrayList<Integer> numbers = new ArrayList<>(); 

        // Add elements to the ArrayList
        numbers.add(10);
        numbers.add(20);
        numbers.add(30);

        // Get the size of the ArrayList
        int size = numbers.size();
        System.out.println("Size of the ArrayList: " + size);

        // Access elements from the ArrayList
        int firstElement = numbers.get(0);
        System.out.println("First element: " + firstElement);

        // Modify an element in the ArrayList
        numbers.set(1, 50);
        System.out.println("Modified ArrayList: " + numbers);

        // Remove an element from the ArrayList
        numbers.remove(0);
        System.out.println("Updated ArrayList: " + numbers);

        // Iterate over the ArrayList using a for-each loop
        System.out.print("ArrayList elements: ");
        for (int num : numbers) {
            System.out.print(num + " ");
        }
        System.out.println();

        // Check if the ArrayList contains an element
        boolean containsElement = numbers.contains(30);
        System.out.println("ArrayList contains 30: " + containsElement);

        // Clear all elements from the ArrayList
        numbers.clear();
        System.out.println("Cleared ArrayList: " + numbers);

        // Check if the ArrayList is empty
        boolean isEmpty = numbers.isEmpty();
        System.out.println("ArrayList is empty: " + isEmpty);
    }
}
```

## 7.2 ArrayList Methods

The definition of an ArrayList method refers to the signature, parameters, and behavior of a specific method provided by the ArrayList class in Java. It describes how the method can be used, what arguments it accepts (if any), and what it returns (if anything).

Below is an example of how the components of an ArrayList method could be structured in Java. We will use an ArrayList of `Student` objects for this example.



```java
import java.util.ArrayList;

// Defining the Student class
class Student {
    String name;
    int studentID;
    double grade;

    // Creating the constructor 
    public Student(String name, int studentID, double grade) {
        this.name = name;
        this.studentID = studentID;
        this.grade = grade;
    }

    // Method to display student info
    public void displayInfo() {
        System.out.println("ID: " + studentID + ", Name: " + name + ", Grade: " + grade);
    }
}

public class Main {
    public static void main(String[] args) {
        // Creating an ArrayList to store Student info
        ArrayList<Student> students = new ArrayList<>(); //

        // Adding new students to the ArrayList
        students.add(new Student("John Doe", 101, 85.5));
        students.add(new Student("Jane Smith", 102, 92.3));

        // Accessing the first student in the ArrayList and display their info
        students.get(0).displayInfo();
    }
}
```

**Explanation of ArrayList Components**:

1. **accessModifier**: `public`
   - The `accessModifier` defines the visibility of the class or method. In this example:
     - The `Student` class is declared as `public`, meaning it can be accessed by any other class.
     - The `displayInfo()` method inside the `Student` class is also `public`, meaning it can be accessed by other classes (such as `Main`).

2. **returnType**: `void` (for the `displayInfo()` method)
   - The `returnType` specifies what type of value the method will return.
   - In this example, the `displayInfo()` method has a `returnType` of `void`, meaning it does not return anything. It simply prints information to the console.

3. **methodName**: `displayInfo`
   - The `methodName` is the name of the method that performs some task.
   - In this example, the method `displayInfo` prints the student’s ID, name, and grade.

4. **parameterList**: `()` (empty for `displayInfo()`)
   - The `parameterList` defines the parameters that the method takes as input. It is defined in the parentheses after the method name.
   - In this example, the `displayInfo()` method does not take any parameters, so the `parameterList` is empty (`()`).

**Adding Elements to an ArrayList**:

```java
students.add(new Student("John Doe", 101, 85.5));
```

- **accessModifier**: `public` (for the method `add()`)
  - The `add()` method is public, which means it can be called from other classes (like `Main` in this case).

- **returnType**: `boolean` (for the `add()` method)
  - The `add()` method in `ArrayList` returns a boolean value, indicating whether the student was successfully added to the list.

- **methodName**: `add`
  - The method name is `add`, which adds an eelment (in this case, a new `Student` object) to the ArrayList.

- **parameterList**: `(Student)` (the `add()` method accepts a `Student` object as a parameter)
  - The method takes one parameter, which is an instance of the `Student` class.


**Note** Different methods in the ArrayList class have different definitions, with variations in the return type, method name, parameter types, and behaviors based on the specific functionality they provide.

Here are some commonly used methods of the ArrayList class in Java:

1.	**add(element)**: Adds the specified element to the end of the ArrayList.

```java
ArrayList<String> fruits = new ArrayList<>();
fruits.add("Apple");
fruits.add("Banana");

//You can also add an element to a specific location in an ArrayList
fruit.add(2, "blueberry");
fruit.add(3, "strawberry");
fruit.add(4, null); // you can assign null to an arrayList 
fruit.add(5, null);
```

2.	**get(index)**: Retrieves the element at the specified index in the ArrayList.  The **get(index)** method does not return `false` if an index is not found; instead it throws an `IndexOutOfBoundsException` because the index is out of range.

```java
String fruit = fruits.get(0);  
// Retrieves the element at index 0 (Apple)
```

3.	**set(index, element)**: Replaces the element at the specified index with the specified element.

```java
fruits.set(1, "Orange");  
// Replaces the element at index 1 with "Orange"
```

4.	**remove(index)**: Removes the element at the specified index from the ArrayList.

```java
fruits.remove(0);  
// Removes the element at index 0 (Apple)
```

5.	**size()**: Returns the number of elements in the ArrayList.

```java
int size = fruits.size();  
// Returns the number of elements in the ArrayList
```

6.	**contains(element)**: Checks whether the ArrayList contains the specified element.

```java
boolean containsOrange = fruits.contains("Orange");  
// Checks if "Orange" is present in the ArrayList
```

7.	**indexOf(element)**: Returns the index of the first occurrence of the specified element in the ArrayList.

```java
int indexOfBanana = fruits.indexOf("Banana");  
// Returns the index of "Banana" in the ArrayList
```

8.	**isEmpty()**: Checks whether the ArrayList is empty.

```java
boolean isEmpty = fruits.isEmpty();  
// Checks if the ArrayList is empty
```

9.	**clear()**: Removes all elements from the ArrayList.

```java
fruits.clear();  
// Removes all elements from the ArrayList
```

These are just a few examples of the methods available in the ArrayList class. The class provides many more methods for various operations like sorting, sublist extraction, iteration, and more. You can refer to the official Java documentation for a complete list of ArrayList methods and their descriptions.


### Activity 3.7.1 - List Algorithms

<details><summary> Click Here </summary>

**This assignment was intentionally placed in 3.7.2**


```java
import java.util.ArrayList;

class Main 
{
  	public static void main(String[] args) 
	{
    	ArrayList<String> words = new ArrayList<String>();
		words.add("why");
		words.add("isn't");
		words.add("a");
		words.add("koala");
		words.add("considered");
		words.add("a");
		words.add("bear");
		words.add("?");
		System.out.println("Words: " + words);

		//call methods
		
  	}
	//write methods

}
```

Code the following static Methods
- `printPairs(ArrayList<String> arrayList)` - print the items of an ArrayList in pairs

```java
//Code to Call Method
printPairs(words);

//Output of Method Call
Why -- isn't
a -- koala
considered -- a
bear -- ?
```
- `socal(ArrayList<String> arrayList)` - insert "like" after every two items in the ArrayList
```java
//Code to Call Method:
socal(words);
System.out.println("Socal: " + words);

//Output of Method Call:
Socal: [why, isn't, like, a, koala, like, considered, a, like, bear, ?, like]
```
- `moveRight(ArrayList<String> arrayList)` - move the items in the list one position to the right. The item at the end of the list is moved to the beginning.
```java
//Code to Call Method:
moveRight(words);
System.out.println("MoveRight: " + words);

//Output of Method Call:
MoveRight: [like, why, isn't, like, a, koala, like, considered, a, like, bear, ?]
```

</details>

---


### Activity 3.7.2 - Auto List

<details><summary>Click Here </summary>
	
**Coding Exercise: Classric Car Showroom List**
A dealer wants to create a list of classic cars in the showroom. Using the existing `Car` class in this exercise. 
- Create a __*static*__ ArrayList called `showroom` that adds a `Car` to the showroom whenever a new Car is created.
  - In the constructor, you will have to add that Car to the ArrayList.

**Now that the `showroom` ArrayList has been implemented, we need to create methods to access the list items.**
Create the following static methods for the Student class:

- `getBestInShow()` - returns the name of the car in the first position of the showroom. You always show your best car first.

- `gotBought(int index)` - void method that removes the car from the showroom from that position 

- `oldestCar()` - returns the name to the older car in the showroom

**Sample Output:**
```java
The oldest car in the showroom is the Pontiac Torpedo

The best car in the showroom is the Chevrolet Bel Air
I'll buy it!

Here's the new showroom: 
Chevrolet Impala SS Coupe
Pontiac Torpedo
Cadillac Coupe De Ville
Chevrolet Delray Delivery
Lincoln Continental Convertible
```
**Starter Files (2)**

```java
class Main 
{
	public static void main(String[] args) 
	{
		Car belAir = new Car("Chevrolet Bel Air", 1957, 60000);
        	Car impala = new Car("Chevrolet Impala SS Coupe", 1964, 58000);
		Car torpedo = new Car("Pontiac Torpedo", 1941, 27000);
		Car coupe = new Car("Cadillac Coupe De Ville", 1984, 40000);
		Car delray = new Car("Chevrolet Delray Delivery", 1958, 35000);
		Car continental = new Car("Lincoln Continental", 1962, 54995);

		System.out.println("The oldest car in the showroom is the " + Car.oldestCar());
		System.out.println("\nThe best car in the showroom is the " + Car.getBestInShow());
		System.out.println("I'll buy it!");
		Car.gotBought(0);
		System.out.println("\nHere's the new showroom: " + Car.printShowroom());
	}
}
```
```java
import java.util.ArrayList;

public class Car
{
	private String model;
	private int year;
	private double value;
	//make static array showroom


	public Car(String model, int year, double value)
	{
		this.model = model;
		this.year = year;
		this.value = value;
		//add this car to showroom

	}

	//getter methods for each specific object so therefore not static
	public String getModel()
	{
		return this.model;
	}
	public int getYear()
	{
		return this.year;
	}
	public double getValue()
	{
		return this.value;
	}

	//static methods


	public static String printShowroom()
    {
        String names = "";
        for(Car name: showroom)
        {
            names+= name.getModel() + "\n";
        }
        return "\n" + names;
    }
}
```
</details>

---


### Project 3.7.2 Student Management System

<details><summary> Click Here </summary>

**Project**: Student Management System

**Objective**:
Create a console-based program to manage student data, such as names, grades, and student IDs. The program will store this data in an ArrayList of custom `Student` objects.  
Appropriately comment throughout your program and provide test cases to verify that your program works as intended.

**Tasks**:
1. **Create a Student class** with attributes:
   - `String name`
   - `int studentID`
   - `double grade`

   Include methods to:
   - Get and set values for each attribute.
   - Display the student's details.

2. **Create a StudentManager class** with an ArrayList to store the `Student` objects.
   - Allow the user to:
     - Add a new student to the ArrayList.
     - View all students in the list.
     - Find a student by their ID.
     - Remove a student by their ID.
     - Update a student’s grade.

3. **Additional features**:
   - Sort students by grade or name.
   - Search for students based on different criteria (e.g., by grade, name, or ID).
   - Implement input validation and handle exceptions for edge cases (e.g., entering invalid data).

**Example Features**:
- **Add Student**: Input name, ID, and grade, and add the student to the list.
- **Display All Students**: Print out all students’ information.
- **Update Grade**: Update the grade of an existing student by their ID.
- **Remove Student**: Remove a student based on their ID.


**Example**:
```
Student Management System
Choose one of the following: 
The user can choose 1. **Add a Student**.
The user can choose 2. **Display All Students**.
The user can choose 3. **Find a Student by ID**.
The user can choose 4. **Remove a Student by ID**.
The user can choose 5. **Update Student Grade**.
The user can choose 6. **Exit**.
```


**Example User Input & Output**:
```java
// 1. Add Student

Student Management System
Choose one of the following: 
1. Add Student
2. Display All Students
3. Find Student by ID
4. Remove Student by ID
5. Update Student Grade
6. Exit

Choose an option: 1
Enter student name: John Doe
Enter student ID: 101
Enter student grade: 85.5


//2. Display All Students/

Student Management System
Choose one of the following: 
1. Add Student
2. Display All Students
3. Find Student by ID
4. Remove Student by ID
5. Update Student Grade
6. Exit

Choose an option: 2
ID: 101, Name: John Doe, Grade: 85.5


//3. Find Student by ID

Student Management System
Choose one of the following: 
1. Add Student
2. Display All Students
3. Find Student by ID
4. Remove Student by ID
5. Update Student Grade
6. Exit

Choose an option: 3
Enter student ID to find: 101
ID: 101, Name: John Doe, Grade: 85.5


//4. Remove Student by ID

Student Management System
Choose one of the following: 
1. Add Student
2. Display All Students
3. Find Student by ID
4. Remove Student by ID
5. Update Student Grade
6. Exit

Choose an option: 4
Enter student ID to remove: 101


//5. Update Student Grade

Student Management System
Choose one of the following: 
1. Add Student
2. Display All Students
3. Find Student by ID
4. Remove Student by ID
5. Update Student Grade
6. Exit

Choose an option: 5
Enter student ID to update grade: 101
Student not found.


//6. Exit

Student Management System
Choose one of the following: 
1. Add Student
2. Display All Students
3. Find Student by ID
4. Remove Student by ID
5. Update Student Grade
6. Exit

Choose an option: 6
```

</details>

---


## 7.3 Traversing ArrayLists

In this example, we create an ArrayList called myList and add three elements to it. We then traverse the ArrayList using both a enhanced for loop and a for loop.

The enhanced for loop iterates over each element in the ArrayList and assigns it to the variable element, which we can then print or perform any desired operations with.

The for loop uses an index variable i to access each element in the ArrayList using the `get()` method. We use the `size()` method to determine the size of the ArrayList, and the loop continues until `i` reaches the size of the ArrayList.

```java
import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        // Create an ArrayList
        ArrayList<String> myList = new ArrayList<>();

        // Add elements to the ArrayList
        myList.add("Apple");
        myList.add("Banana");
        myList.add("Orange");

        // Traverse the ArrayList using a for-each loop
        System.out.println("Traversing the ArrayList using a for-each loop:");
        for (String element : myList) {
            System.out.println(element);
        }

        // Traverse the ArrayList using a for loop
        System.out.println("\nTraversing the ArrayList using a for loop:");
        for (int i = 0; i < myList.size(); i++) {
            String element = myList.get(i);
            System.out.println(element);
        }
    }
}
```

When you run the program, it will output:

```java
Traversing the ArrayList using a enhanced for loop:
Apple
Banana
Orange

Traversing the ArrayList using a for loop:
Apple
Banana
Orange
```

### Activity 3.7.3 Traversing Arrays

<details><summary> Click Here </summary>

**Instructions**:  Complete the following programs by using a `for` loop and an `Enhanced for` loop.

**Program 1**

```java
import java.util.ArrayList;

public class TraversingArrayList {
    public static void main(String[] args) {
        // Creating an ArrayList of Integers
        ArrayList<Integer> numbers = new ArrayList<>();
        numbers.add(10);
        numbers.add(20);
        numbers.add(30);
        numbers.add(40);
        numbers.add(50);

        // Standard for loop to print each number


        // Enhanced for loop to print each number


    }
}
```
**Program 2**

```java
import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        // Creating an ArrayList of Integers
        ArrayList<Integer> numbers = new ArrayList<>();
        numbers.add(10);
        numbers.add(20);
        numbers.add(30);
        numbers.add(40);
        numbers.add(50);

        // Calculating the sum using the standard for loop
        

        // Calculating the sum using the enhanced for loop


    }
}
```

</details>

---


## 7.4 Developing Algorithms Using ArrayLists
**Goals**
- Identify, modify, and develop standard array traversal algorithms using ArrayLists.
- Use standard traversal algorithms to insert and delete ArrayList elements.
- Use multiple ArrayLists to accomplish a traversing algorithm.

In this Java program, we'll identify, modify, and develop standard array traversal algorithms using `ArrayLists`. We'll use standard traversal algorithms to insert and delete elements in `ArrayLists`, and we'll also demonstrate how to use multiple `ArrayLists` to accomplish a traversing algorithm.

```java
import java.util.ArrayList;
import java.util.Iterator;

public class ArrayListTraversalExample {
    public static void main(String[] args) {
        // Create an ArrayList of integers
        ArrayList<Integer> numbersList = new ArrayList<>();

        // Insert elements into the ArrayList using add() method
        numbersList.add(10);
        numbersList.add(20);
        numbersList.add(30);
        numbersList.add(40);
        numbersList.add(50);

        // Display the ArrayList using enhanced for loop
        System.out.println("ArrayList using for-each loop:");
        for (int number : numbersList) {
            System.out.print(number + " ");
        }
        System.out.println();

        // Delete elements from the ArrayList using remove() method
        numbersList.remove(2); // Removes the element at index 2 (30)
        numbersList.remove(Integer.valueOf(40)); // Removes the value 40 from the list

        // Display the modified ArrayList using standard traversal (using iterator)
        System.out.println("Modified ArrayList using iterator:");
        Iterator<Integer> iterator = numbersList.iterator();
        while (iterator.hasNext()) {
            System.out.print(iterator.next() + " ");
        }
        System.out.println();

        // Create another ArrayList to accomplish a traversing algorithm
        ArrayList<String> fruitsList = new ArrayList<>();
        fruitsList.add("Apple");
        fruitsList.add("Banana");
        fruitsList.add("Orange");
        fruitsList.add("Mango");
        fruitsList.add("Grapes");

        // Use multiple ArrayLists to perform a traversing algorithm (combining the lists)
        ArrayList<Object> combinedList = new ArrayList<>();
        combinedList.addAll(numbersList);
        combinedList.addAll(fruitsList);

        // Display the combined ArrayList
        System.out.println("Combined ArrayList:");
        for (Object item : combinedList) {
            System.out.print(item + " ");
        }
    }
}
```

Explanation:

- We create an ArrayList named `numbersList` and insert integers into it using the `add()` method.
- We demonstrate standard array traversal using an enhanced for loop to display the elements of `numbersList`.
- We then remove elements from the `numbersList` using the `remove()` method.
- We display the modified `numbersList` using an iterator to traverse the list.
- We create another ArrayList named `fruitsList` and insert strings (fruits) into it.
- We use the `addAll()` method to combine the `numbersList` and `fruitsList` into a new ArrayList named `combinedList`.
- We traverse the `combinedList` using an enhanced for loop and display the elements.

**Example output**:

```java
ArrayList using for-each loop:
10 20 30 40 50 
Modified ArrayList using iterator:
10 20 40 50 
Combined ArrayList:
10 20 40 50 Apple Banana Orange Mango Grapes
```

### 3.7.4 Traversing ArrayList

<details><summary> Click Here </summary>

**Instructions**:
1. **Create a `Person` Class:**
   - The `Person` class has two attributes: `name` (String) and `age` (int).
   - It has a constructor to initialize these attributes, *getter methods* to access the values, and an overridden `toString()` method to print the object in a user-friendly format.

2. **Using the `ArrayList`:**
   - The program creates an `ArrayList` named `people`, which contains instances of the `Person` class.
   - Each `Person` is added to the list using `people.add(new Person(...))`.

3. **Standard `for` Loop:**
   - The first loop uses a standard `for` loop to traverse the `ArrayList`. It accesses each `Person` object by index (`people.get(i)`).
   - For each `Person`, it prints their details and adds their age to `sumAge` to calculate the total age.

4. **Enhanced `for` Loop:**
   - The second loop uses an enhanced `for` loop to iterate over each `Person` object in the `ArrayList`.
   - It performs the same task as the standard `for` loop (calculating the sum of ages) but also finds the oldest and youngest `Person` objects by comparing their ages.
   - It also prints each person's details during the traversal.

5. **Calculating the Average Age:**
   - After traversing the list, the program calculates the average age by dividing the sum of ages by the total number of people in the list (`people.size()`).

6. **Finding the Oldest and Youngest:**
   - The program finds the `oldestPerson` and `youngestPerson` by comparing the `age` of each person during the traversal.

```java
// Starter File
import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        // Create an ArrayList of Person objects
        ArrayList<Person> people = new ArrayList<>();
        people.add(new Person("Avri", 25));
        people.add(new Person("Alan", 30));
        people.add(new Person("Bob", 22));
        people.add(new Person("Evan", 40));
        people.add(new Person("Charlie", 35));

        // Traverse using a standard for loop and print details

        // Traverse using an enhanced for loop and calculate the average age
	// Traverse and calculate the sum of ages and find the oldest/youngest
        // Calculate the average age
        
        // Display the oldest and youngest person

    }
}
```


**Sample Output**

```
Using standard for loop:
Name: Avri, Age: 25
Name: Alan, Age: 30
Name: Bob, Age: 22
Name: Evan, Age: 40
Name: Charlie, Age: 35

Using enhanced for loop:
Name: Avri, Age: 25
Name: Alan, Age: 30
Name: Bob, Age: 22
Name: Evan, Age: 40
Name: Charlie, Age: 35

Average Age: 30.4

Oldest Person: Evan (40 years old)
Youngest Person: Bob (22 years old)
```

</details>


## 7.5 Searching

To search for an element in an ArrayList in Java, you can use the `contains()` method or iterate through the ArrayList and compare each element with the target value. 

In this example, we create an ArrayList called `myList` and add three elements to it. We then search for an element, "Banana", in the ArrayList using two different approaches.

First, we use the `contains()` method to check if the ArrayList contains the target element. The `contains()` method returns a boolean value indicating whether the element is present in the ArrayList.

Next, we perform a manual search by iterating through each element of the ArrayList using a enhanced for loop. We compare each element with the target element using the `equals()` method. If a match is found, we set the found variable to `true` and `break` out of the loop.

Finally, we print the search results to the console.


```java
import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        // Create an ArrayList
        ArrayList<String> myList = new ArrayList<>();

        // Add elements to the ArrayList
        myList.add("Apple");
        myList.add("Banana");
        myList.add("Orange");

        // Search for an element using contains() method
        String targetElement = "Banana";
        boolean found = myList.contains(targetElement);
        System.out.println("Using contains(): " + targetElement + " found? " + found);

        // Search for an element using iteration
        found = false;
        for (String element : myList) {
            if (element.equals(targetElement)) {
                found = true;
                break;
            }
        }
        System.out.println("Using iteration: " + targetElement + " found? " + found);
    }
}
```

When you run the program, it will output:

```java
Using contains(): Banana found? true
Using iteration: Banana found? true
```


## 7.6 Sorting

In Java, there are various methods available to sort an ArrayList. The most common approaches include using the Collections.sort() method, implementing the Comparable interface, or providing a custom Comparator. Let's explore each of these methods with examples:

- Sorting using `Collections.sort()` method:
    This method sorts an ArrayList in ascending order using the natural ordering of its elements. The elements must implement the Comparable interface to define their natural ordering.

```java
import java.util.ArrayList;
import java.util.Collections;

public class ArrayListSorting {
    public static void main(String[] args) {
        // Create an ArrayList
        ArrayList<Integer> numbers = new ArrayList<>();

        // Add elements to the ArrayList
        numbers.add(5);
        numbers.add(2);
        numbers.add(8);
        numbers.add(1);
        numbers.add(3);

        // Sort the ArrayList in ascending order
        Collections.sort(numbers);

        // Print the sorted ArrayList
        System.out.println(numbers);
    }
}
```
**Sample Output:**
```java
[1, 2, 3, 5, 8]
```

Sorting by implementing the Comparable interface:
By implementing the Comparable interface, you can define the natural ordering of your custom objects. The `compareTo()` method is used to compare two objects and return a negative, zero, or positive value based on their order.

```java
import java.util.ArrayList;
import java.util.Collections;

public class Student implements Comparable<Student> {
    private int id;
    private String name;

    public Student(int id, String name) {
        this.id = id;
        this.name = name;
    }

    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    @Override
    public int compareTo(Student other) {
        // Compare students based on their IDs
        return Integer.compare(this.id, other.id);
    }

    @Override
    public String toString() {
        return "Student [id=" + id + ", name=" + name + "]";
    }
}

public class Main {
    public static void main(String[] args) {
        // Create an ArrayList of Student objects
        ArrayList<Student> students = new ArrayList<>();

        // Add students to the ArrayList
        students.add(new Student(3, "Alice"));
        students.add(new Student(1, "Bob"));
        students.add(new Student(2, "Charlie"));

        // Sort the ArrayList using natural ordering (by ID)
        Collections.sort(students);

        // Print the sorted ArrayList
        System.out.println(students);
    }
}
```

**Sample Output:**
```java
[Student [id=1, name=Bob], Student [id=2, name=Charlie], Student [id=3, name=Alice]]
```

Sorting using a custom Comparator:
A Comparator allows you to define a custom comparison logic for sorting elements. It is useful when you want to sort objects based on different criteria or when the objects do not implement the Comparable interface.

```java
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;

public class Student {
    private int id;
    private String name;

    public Student(int id, String name) {
        this.id = id;
        this.name = name;
    }

    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    @Override
    public String toString() {
        return "Student [id=" + id + ", name=" + name + "]";
    }
}

public class SortByName
```


## 7.7 Ethical Issues Around Data Collection

[The original content can be found here:](https://apcentral.collegeboard.org/courses/ap-computer-science-a/classroom-resources/ethical-issues-internet-content-providers-and-internet-service-providers)


Ethical Issues: Internet Content Providers and Internet Service Providers
Background on ethical issues, and activities that illustrate these issues.
Objectives

At the conclusion of this lesson, students will have an understanding of:

    Ethical issues of copyright
    Ethical issues of "do no harm"
    Ethical issues for ISPs (Internet service providers)
    How to analyze an ethical issue

Student prerequisites

Some understanding of basic ethical theory—for a summary, see "A Proposed Methodology..." below.
Resource Materials
Online
**A Proposed Methodology for the Teaching of Information Technology Ethics in Schools**

I wrote this article, which appears in John Weckert, ed., Computer Ethics 2000: Selected Papers from the Second Australian Institute of Computer Ethics Conference, vol. 1 (Sydney: Australian Computer Society Inc., 2001).
[A Proposed Methodology for the Teaching of Information Technology Ethics in Schools](https://dl.acm.org/doi/10.5555/563715.563727)

**Stanford Encyclopedia of Philosophy—Computer Ethics: Basic Concepts and Historical Overview**

Terrell Bynum's entry for information technology ethics is an excellent synopsis.
[Stanford Encyclopedia of PhilosophyComputer Ethics: Basic Concepts and Historical Overview](https://plato.stanford.edu/archives/sum2020/entries/ethics-computer/)

**Books**

Baase, Sara. A Gift of Fire: Social, Legal, and Ethical Issues for Computers and the Internet.
2nd ed. Upper Saddle River, New Jersey: Prentice Hall, 2003.

Bynum, Terrell Ward, and Simon Rogerson. Computer Ethics and Professional Responsibility. 
Malden, Massachusetts: Blackwell Publishing, 2004.

Tavanni, Herman T. Ethics and Technology: Ethical Issues in an Age of Information and Communication Technology. 
Hoboken, New Jersey: Wiley, 2003.

**Ethics for Content Providers and ISPs: Specific Issues for the Activities**

The activities below deal with Internet content providers (ICPs) and ISPs.

Make it clear to students what the two terms mean and who belongs to each group:

- ICPs include anyone who provides material available on the Internet, typically from the World Wide Web.
- ISPs include all the organizations that provide the infrastructure and gateways that facilitate access to the Internet and hence to content.

One does not exist without the other; to read content, you need an ISP.

Laws exist that apply to both groups. In general, ISPs can be held legally liable in relation to the degree to which the ISP was aware of illegal activity and did nothing to prevent the activity from taking place or did nothing to prevent potential illegal activity from occurring.

Encourage the students to think about how they behave and make decisions. Draw a distinction between:

- Behavior controlled by law (detection, apprehension, prosecution, enforced consequences)
- The role of personal ethics

A law works if transgressions can be detected and then effectively prosecuted.

- What is it about the law that actually acts as the deterrent? Is it that you accept the law as right and just? Or is it that you think you will be caught and hence be punished?

Ask students these questions:

- Are you more likely to do something questionable if you think you will not be caught?
- Are you more likely to do something questionable if you believe that not only will you not be caught, but also nobody else will be impacted by your actions?

Students will probably be confused at this point, which indeed is the point—deciding how to behave is confusing.

**Ethics for Content Providers**

Concentrate on two key areas: copyright and not doing harm.

**Copyright**

Copyright seeks to provide a balance between a fair return to the creator and encouragement of originality and free flow of information. Copyright does not protect ideas. It protects the creator's right to perform, reproduce, sell, and derive related works. A common example is that hearing a song or reading a novel about "love" or "hurt" prompts you to decide to write your own. You are free to do so, but if you repeat the exact notes of the chorus or copy exact pieces of dialogue, you will infringe the original author's copyright. In fact, the underlying structure of a song or novel may well be copyrighted also.

- Fair use notations exist in copyright laws throughout the world. For example, copyright might not apply to reuse if there is likely to be little commercial impact on the creator. This idea is often used by people to validate their copying music: "Well, I was not going to buy the song anyway, so I have not deprived the creator or distributor of any income, hence I have not behaved unethically!" This is not the intention of fair use, it is intended to promote free flow of ideas and information; for example, in an education setting it is reasonable to copy parts of works for face-to-face teaching purposes.

Generally, if someone reuses a work and benefits commercially, the owner of the copyright may well objec—provided, of course, that the infringement is detected.

- What ethical issues are related to copyright?
  - Ask students: Is it unethical to steal? (In fact, it is illegal.) Taking someone else's work is in fact stealing, and you are likely to impact on their fair return; you might also impact on their reputation for creativity.
  - There are issues of trust involved.
  - There are issues related to "telling a lie."

- Have the students consider copyright infringement against their own works. Ask them if they would be happy if such infringements occurred.

- Raise the question: What is a fair return? Copyright does not exist to provide a way to unduly inflate monetary returns. For example, directly discuss the issue of the price charged for CDs and DVDs. Is it justifiable to infringe on copyright because the price of CDs is too high? Openly discuss this issue. For instance, is it ethically reasonable to argue that because CD prices are too high, it is reasonable to download pirated copies because the middle person between the creator and listener has inflated the price? There is a clear ethic of trust involved. The public trusts companies to do the right thing and behave ethically; laws exist to protect the public against undue price manipulation. Do you, as an individual, have the right to protest by infringing copyright? This is a difficult question to attempt to answer.

**Not Doing Harm**

- The ethic of not doing harm is an important one. Providing content that is misleading or based on poor research can harm a person's reputation, can lead to growth of unfounded beliefs or opinions, can result in unwarranted actions, and so forth.
- The notion of harm is not just related to physical harm. Content on the Internet is public, or at least public to subscribers of particular Web sites. Content may or may not directly identify the author, sources, or parties mentioned in the content. More problematic is content that deliberately obscures the creator.
- Have the students consider a situation where misleading material is published about them, and have them discuss how they feel.
- Have the students consider why someone might place misleading material on a Web site. Does it matter if the misleading nature of the material is deliberate or not?
- As a way of linking to other areas of the curriculum, the concept of checking sources and telling the truth are important in English, science, journalism, and so forth. However, sometimes telling the truth can do harm—to someone's reputation, for example.

**Ethics for ISPs**

Have the students consider this situation:

- Students are gathered around a dance hall ready for a school dance. Inside the dance hall it is dark, and there are several senior students whose role is to make sure that no alcohol is consumed inside the hall. For students to enter, they need to show their bags to the school captain before entering the hall. The school captain at the door is acting in the role of the ISP.
  - If the school captain did not inspect the bags, we would not be surprised if alcohol got into the hall. Parents would assume that the bags would be inspected.
  - The teacher and the school would find it very difficult to argue that they did not have an ethical responsibility to prevent students from bringing alcohol into the hall. By inspecting bags, they are exercising due care. Consider the argument: "It is not our responsibility to check what students bring into the hall in their bags; we simply provide the venue."
  - Have students respond to this situation and discuss the ethical issues:
    - Is there any case of invasion of privacy?
    - Who bears the ethical responsibility?
    - What level of ethical responsibility does the student have

Now consider the ISP:

- In the above case, the ISP actually inspects each bag. The bag is like a data packet on the Internet. However, on the Internet it is impossible to inspect each set of bits to determine their purpose—ethical or otherwise—as they pass through a server.
- An ISP has no way of knowing what a bit pattern represents. But they can see the end result of postings on a Web site or conversations in a chat room that they host. For example, consider a chat room that allows people to denigrate particular individuals in a school.
  - Assume that the ISP claims to monitor conversations and asks chat- room participants to abide by a code of conduct, which does not permit the use of denigrating terminology. However, in this instance, the chat room is not monitored, and an individual is denigrated and is identified to the school group. This results in the student suffering. (Be careful here, as it might be the case that some students in your group have encountered this exact problem!)

Putting aside the legal issues raised here, have the students consider the ethical behavior of the actors in this scenario. Refer to my “Proposed Methodology” paper (described above under "Resource Materials").

- Who are the actors? (ISP and chat-room participants)
- Has the ISP knowingly allowed transgression of its code of conduct?
- Does it matter whether the ISP has acted knowingly or not? The ISP has, in fact, provided the space (in this case virtual space) for the denigration or abuse to occur.

The participants have participated in an act of abuse. Let's assume for the moment that the participants have not identified themselves and have not identified the victim. Can the participants claim to have acted ethically? Have students discuss and produce a justifiable set of ethics for a chat room.

- [IT Ethics of Internet Service Providers and Internet Content Providers (.ppt/40KB)](https://secure-media.collegeboard.org/apc/ap07_compsci_meyenn.ppt)
- [Worksheet and Lab Exercises for Ethical Issues: Internet Content Providers and Internet Service Providers (.rtf/26KB)](https://secure-media.collegeboard.org/apc/ap07_compsci_meyenn_worksheet.rtf)

The questions will require students to research on the Internet and/or library. Teachers will also have to take students through a scenario-analysis process.

**Summary of Expected Results:**

- Students should become more aware of the complexity of the ethical issues applying to Internet content providers and Internet service providers. 
- Students should become aware of their own roles in Internet communication and the possible consequences of their behavior on the Internet.

Andrew Meyenn received master of science and master of education degrees from the University of Melbourne in Australia as part of a doctoral program in e-learning. He is the head of the information technology (IT) learning area at Wesley College in Melbourne and lectures on IT professional issues at the University of Melbourne and at Central Queensland University. Author of a number of textbooks, he is the coauthor, with Richard Jones, of Computer Science: Java Enabled, for use with the International Baccalaureate (IB) diploma program; Meyenn and Jones are developing an online teaching resource for IB computer science. He is a member of the Computer Science Teachers Association (CSTA).

Authored by Andrew Meyenn

Wesley College, Melbourne, Australia

