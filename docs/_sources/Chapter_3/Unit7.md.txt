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


- **accessModifier**: `public` (for the method `add()`)
  - The `add()` method is public, which means it can be called from other classes (like `Main` in this case).
  - The `accessModifier` defines the visibility of the class or method. 
  - The `Student` class is declared as `public`, meaning it can be accessed by any other class.
  - The `displayInfo()` method inside the `Student` class is also `public`, meaning it can be accessed by other classes (such as `Main`).

- **returnType**: `boolean` (for the `add()` method)
   - The `returnType` specifies what type of value the method will return.
   - In this example, the `displayInfo()` method has a `returnType` of `void`, meaning it does not return anything. It simply prints information to the console.
  - The `add()` method in `ArrayList` returns a boolean value, indicating whether the student was successfully added to the list.

- **methodName**: `add` `displayInfo`
   - The `methodName` is the name of the method that performs some task.
   - In this example, the method `displayInfo` prints the student’s ID, name, and grade.
   - The method name is `add`, which adds an eelment (in this case, a new `Student` object) to the ArrayList.

- **parameterList**: `(Student)` (the `add()` method accepts a `Student` object as a parameter):  `()` (empty for `displayInfo()`)
   - The `parameterList` defines the parameters that the method takes as input. It is defined in the parentheses after the method name.
   - In this example, the `displayInfo()` method does not take any parameters, so the `parameterList` is empty (`()`).
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
Why isn't
a koala
considered a
bear ?
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
	
**Coding Exercise: Classic Car Showroom List**
A dealer wants to create a list of classic cars in the showroom. Using the existing `Car` class in this exercise. 
- Create a __*static*__ ArrayList called `showroom` that adds a `Car` to the showroom whenever a new Car is created.
  - In the constructor, you will have to add that Car to the ArrayList.

**Now that the `showroom` ArrayList has been implemented, we need to create methods to access the list items.**
Create the following static methods for the Car class:

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

In this example, we create an ArrayList called myList and add three elements to it. We then traverse the ArrayList using both a **enhanced `for` loop** and a standard `for` loop.

The **enhanced `for` loop** iterates over each element in the ArrayList and assigns it to the variable element, which we can then print or perform any desired operations with.

You Should Use the **enhanced `for` loop** when:
- You want to process every element
- You don’t need the index
- You are not modifying the structure of the collection

It works very well for:
- Printing values
- Calculating totals or averages
- Searching for a value

When You Should **Not** Use It:
- You need the index
- You want to change elements by index
- You want to add or remove elements while looping

Below the for loop uses an index variable i to access each element in the ArrayList using the `get()` method. We use the `size()` method to determine the size of the ArrayList, and the loop continues until `i` reaches the size of the ArrayList.

```java
import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        
        ArrayList<String> myList = new ArrayList<>();

        // Add elements to the ArrayList
        myList.add("Apple");
        myList.add("Banana");
        myList.add("Orange");

        // Traverse the ArrayList using a enhanced for loop
        System.out.println("Traversing the ArrayList using a enhanced for loop:");
        for (String element : myList) {
            System.out.println(element);
        }

        // Traverse the ArrayList using a for loop
        System.out.println("\nTraversing the ArrayList using a standard for loop:");
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

Traversing the ArrayList using a standard for loop:
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

public class Main {
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

---


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

In this Java program, we'll identify, modify, and develop standard array traversal algorithms using `ArrayLists`. We'll use standard traversal algorithms to insert and delete elements in `ArrayLists`, and we'll also demonstrate how to use multiple `ArrayLists` to accomplish a traversing algorithm.  We will use an `Iterator` that comes from the **Java Collections Framework** and works with the `ArrayList` collection.

**Three Core methods** that you will need to know:

* `hasNext()` → checks if another element exists
* `next()` → returns the next element
* `remove()` → safely removes the current element (optional, but important)

> An iterator is used to safely loop through a collection one item at a time, especially when elements may be removed during the loop.



```java
import java.util.ArrayList;
import java.util.Iterator;

public class Main {
    public static void main(String[] args) {
        
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

	// valueOf() method converts Primitive Types to Wrapper Objects as well as a
	// String to an Object

        // Display the modified ArrayList using standard traversal (using iterator)
        System.out.println("Modified ArrayList using iterator:");
        Iterator<Integer> iterator = numbersList.iterator();
        while (iterator.hasNext()) {
            System.out.print(iterator.next() + " ");
        }
        System.out.println();

	// next() method retrieves the element and advances the iterator
	// hasNext() method ensures that you are not attempting to access an element
	// that doesn’t exist, thus preventing a `NoSuchElementException`

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
10 20 50 
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

To search for an element in an ArrayList in Java, you can use the `contains()` method or iterate through the ArrayList and compare each element with the target value. In this example, we create an ArrayList called `myList` and add three elements to it. We then search for an element, "Banana", in the ArrayList using two different approaches.  First, we use the `contains()` method to check if the ArrayList contains the target element. The `contains()` method returns a boolean value indicating whether the element is present in the ArrayList.
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

### Activity 3.7.5 Searching

<details><summary> Click Here </summary>


**Instructions**

1. Create an Integer arrayList and call it `numbers`.
2. Write a program that will generate 100 *random* numbers between 1 and 999 without repetition and store them in `numbers`.
3. Create a Scanner class that will prompt the user to input a number (`target`) they want to search for in the arrayList.
4. Create a `linearSearch` method that takes the arrayList `numbers` and the `target` value as arguments.
5. Use a standard for loop to search the elements of the `arrayList`.
   - If the target value is found, it returns the index of that element.
   - If the target value is not found after checking all elements, it returns `-1`.
6. The program prints the result: the index of the found number or a message indicating that the number was not found.
7. Ask the user if they would like to continue searching for a `number`.
8. Comment throughout your program as appropriate.
9. Include test samples (pdf) to show that your program works as intended.
10. Include date/time in your program as it is executed

**Sample Output:**

```
Generated ArrayList of 100 numbers:
[376, 712, 944, 45, 673, 355, 32, 105, 907, 809, 228, 66, 175, 296, 54, 75, 531, 635, 853, 11,
952, 409, 609, 978, 822, 510, 83, 696, 414, 971, 777, 719, 574, 27, 95, 332, 840, 305, 868,
566, 711, 284, 392, 602, 576, 142, 220, 50, 640, 156, 110, 787, 988, 991, 74, 82, 226, 473, 
436, 559, 447, 478, 267, 408, 428, 586, 830, 139, 507, 161, 23, 42, 221, 136, 446, 161, 191, 
94, 735, 369, 198, 415, 342, 622, 380, 839, 758, 602, 998, 108, 347, 351, 673, 208, 602, 92,
589, 198, 900, 945]

Enter a number to search for: 96
-1
The number 96 was not found in the List.
Do you want to search for another number?
Y

Enter a number to search for: 139
The number 139 was found in the ArrayList at index 67.
Do you want to search for another number?
N

```

Optional:

Create method(s) that will do the following:

Ask the user if they would like to search for a range of numbers?

**Examples**:
- a range of numbers (ex. all numbers from 1 to 100.) (+.5)
- all odd or even numbers (+.5)
- all prime numbers (+.5)
- all numbers divisible by 3 (+.5)
- all numbers in the list in order from lowest to highest (+.5)
- all numbers in the list in reverse order from highest to lowest (+.5)


</details>  


---


## 7.6 Sorting

Here are a few programs related to sorting algorithms that you may see in Computer Science. Below are descriptions of how these sorting algorithms work: Bubble Sort, Selection Sort, Insertion Sort, Merge Sort, and Quick Sort.

Mistakes students make when identifying an algorithm:

- Swapping inside the inner loop (selection sort)
- Forgetting to reset minIndex
- Incorrect base case in recursion
- Returning the wrong array reference


Scorer Comments:

❌ “Student implemented `bubble sort` logic instead of `selection sort`.”

❌ “Loop iterates one index too far, causing an out-of-bounds error.”

❌ “Student confused index with value when finding minimum.”

❌ “Merge logic assumes arrays are unsorted.”


It is important to visualize what sorting method you are looking at.  Try these steps to help you identify the correct sorting algorithm.

- Label sorted/unsorted regions
- Write comments before code
- Explain what the loop does, not just what it loops over



---

**1. Bubble Sort Implementation**
**Objective**: Implement the Bubble Sort algorithm, which repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order.

**Task**: Write a Java program that takes an array of integers and sorts it using the Bubble Sort algorithm.

```java
public class BubbleSort {
    public static void bubbleSort(int[] arr) {
        int n = arr.length;
        for (int i = 0; i < n-1; i++) {
            for (int j = 0; j < n-i-1; j++) {
                if (arr[j] > arr[j+1]) {
                    // swap arr[j] and arr[j+1]
                    int temp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = temp;
                }
            }
        }
    }
    
    public static void printArray(int[] arr) {
        for (int i : arr) {
            System.out.print(i + " ");
        }
        System.out.println();
    }

    public static void main(String[] args) {
        int[] arr = {64, 34, 25, 12, 22, 11, 90};
        System.out.println("Original Array: ");
        printArray(arr);
        
        bubbleSort(arr);
        
        System.out.println("Sorted Array: ");
        printArray(arr);
    }
}
```

**Questions**:
- How does the number of passes change based on the size of the array?
- Can you optimize Bubble Sort to detect when the array is already sorted?

---

**2. Selection Sort Implementation - AP Exam**
**Objective**: Implement the Selection Sort algorithm, which divides the array into two parts: sorted and unsorted. The algorithm selects the minimum element from the unsorted part and swaps it with the leftmost unsorted element.

**Task**: Write a Java program that sorts an array using the Selection Sort algorithm.

```java
public class SelectionSort {
    public static void selectionSort(int[] arr) {
        int n = arr.length;
        
        for (int i = 0; i < n-1; i++) {
            int minIdx = i;
            for (int j = i+1; j < n; j++) {
                if (arr[j] < arr[minIdx]) {
                    minIdx = j;
                }
            }
            
            // Swap the found minimum element with the first element
            int temp = arr[minIdx];
            arr[minIdx] = arr[i];
            arr[i] = temp;
        }
    }
    
    public static void printArray(int[] arr) {
        for (int i : arr) {
            System.out.print(i + " ");
        }
        System.out.println();
    }

    public static void main(String[] args) {
        int[] arr = {29, 10, 14, 37, 13};
        System.out.println("Original Array: ");
        printArray(arr);
        
        selectionSort(arr);
        
        System.out.println("Sorted Array: ");
        printArray(arr);
    }
}
```

**Questions**:
- How does Selection Sort differ from Bubble Sort in terms of efficiency?
- What is the time complexity of the Selection Sort algorithm?

---

**3. Insertion Sort Implementation - AP Exam**
**Objective**: Implement the Insertion Sort algorithm, which builds the sorted array one element at a time by repeatedly taking the next element and inserting it into its correct position.

**Task**: Write a Java program that sorts an array using the Insertion Sort algorithm.

```java
public class InsertionSort {
    public static void insertionSort(int[] arr) {
        int n = arr.length;
        for (int i = 1; i < n; i++) {
            int key = arr[i];
            int j = i - 1;
            
            // Move elements of arr[0..i-1] that are greater than key to one position ahead
            while (j >= 0 && arr[j] > key) {
                arr[j + 1] = arr[j];
                j = j - 1;
            }
            arr[j + 1] = key;
        }
    }

    public static void printArray(int[] arr) {
        for (int i : arr) {
            System.out.print(i + " ");
        }
        System.out.println();
    }

    public static void main(String[] args) {
        int[] arr = {12, 11, 13, 5, 6};
        System.out.println("Original Array: ");
        printArray(arr);
        
        insertionSort(arr);
        
        System.out.println("Sorted Array: ");
        printArray(arr);
    }
}
```

**Questions**:
- How does Insertion Sort perform with nearly sorted data versus completely unsorted data?
- What is the time complexity of Insertion Sort?

---

**4. Merge Sort Implementation - AP Exam**
**Objective**: Implement the Merge Sort algorithm, which is a divide-and-conquer algorithm that splits the array into halves and recursively sorts them.

**Task**: Write a Java program that sorts an array using the Merge Sort algorithm.

```java
public class MergeSort {
    
    public static void mergeSort(int[] arr) {
        if (arr.length < 2) return; // Base case: array is already sorted
        int mid = arr.length / 2;
        
        // Split the array into two halves
        int[] left = new int[mid];
        int[] right = new int[arr.length - mid];
        
        System.arraycopy(arr, 0, left, 0, mid);
        System.arraycopy(arr, mid, right, 0, arr.length - mid);
        
        // Recursively sort the two halves
        mergeSort(left);
        mergeSort(right);
        
        // Merge the sorted halves
        merge(arr, left, right);
    }

    private static void merge(int[] arr, int[] left, int[] right) {
        int i = 0, j = 0, k = 0;
        
        // Merge the two arrays into the original array
        while (i < left.length && j < right.length) {
            if (left[i] <= right[j]) {
                arr[k++] = left[i++];
            } else {
                arr[k++] = right[j++];
            }
        }
        
        // Copy remaining elements of left array
        while (i < left.length) {
            arr[k++] = left[i++];
        }
        
        // Copy remaining elements of right array
        while (j < right.length) {
            arr[k++] = right[j++];
        }
    }
    
    public static void printArray(int[] arr) {
        for (int i : arr) {
            System.out.print(i + " ");
        }
        System.out.println();
    }

    public static void main(String[] args) {
        int[] arr = {38, 27, 43, 3, 9, 82, 10};
        System.out.println("Original Array: ");
        printArray(arr);
        
        mergeSort(arr);
        
        System.out.println("Sorted Array: ");
        printArray(arr);
    }
}
```

**Questions**:
- How does Merge Sort handle large datasets compared to algorithms like Bubble Sort and Insertion Sort?
- What is the time complexity of Merge Sort?

---

**5. Quick Sort Implementation**
**Objective**: Implement the Quick Sort algorithm, which is another divide-and-conquer algorithm that selects a pivot element and partitions the array around it.

**Task**: Write a Java program that sorts an array using the Quick Sort algorithm.

```java
public class QuickSort {
    
    public static void quickSort(int[] arr, int low, int high) {
        if (low < high) {
            int pi = partition(arr, low, high);
            
            quickSort(arr, low, pi - 1);
            quickSort(arr, pi + 1, high);
        }
    }
    
    private static int partition(int[] arr, int low, int high) {
        int pivot = arr[high];
        int i = (low - 1);
        
        for (int j = low; j < high; j++) {
            if (arr[j] <= pivot) {
                i++;
                // Swap arr[i] and arr[j]
                int temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
        
        // Swap arr[i + 1] and arr[high] (pivot)
        int temp = arr[i + 1];
        arr[i + 1] = arr[high];
        arr[high] = temp;
        
        return i + 1;
    }
    
    public static void printArray(int[] arr) {
        for (int i : arr) {
            System.out.print(i + " ");
        }
        System.out.println();
    }

    public static void main(String[] args) {
        int[] arr = {10, 80, 30, 90, 40, 50, 70};
        System.out.println("Original Array: ");
        printArray(arr);
        
        quickSort(arr, 0, arr.length - 1);
        
        System.out.println("Sorted Array: ");
        printArray(arr);
    }
}
```

**Questions**:
- How does Quick Sort perform compared to Merge Sort in terms of performance?
- Can you implement Quick Sort using the "median of three" method to choose the pivot?

---


---

### Sorting explanations in detail

**Explanation of How a Bubble Sort Java Program Works**

**Bubble Sort** is a simple sorting algorithm that works by repeatedly stepping through the list to be sorted, comparing adjacent elements, and swapping them if they are in the wrong order. The process is repeated until no more swaps are needed, which indicates that the list is sorted. The algorithm gets its name because the largest unsorted elements "bubble up" to the correct position after each pass through the list.

**Step-by-Step Breakdown of Bubble Sort**:

1. **Initial Array**: The program starts with an unsorted array.
   
   Example array:
   ```java
   {64, 34, 25, 12, 22, 11, 90}
   ```

2. **First Pass Through the Array**:
   - The algorithm compares adjacent elements in the array.
   - If the element on the left is greater than the element on the right, they are swapped.
   - This process continues for the entire array, and the largest element moves (or "bubbles") to the end of the array.

   Example of comparisons and swaps for the first pass:
   ```
   Compare 64 and 34 → Swap them → {34, 64, 25, 12, 22, 11, 90}
   Compare 64 and 25 → Swap them → {34, 25, 64, 12, 22, 11, 90}
   Compare 64 and 12 → Swap them → {34, 25, 12, 64, 22, 11, 90}
   Compare 64 and 22 → Swap them → {34, 25, 12, 22, 64, 11, 90}
   Compare 64 and 11 → Swap them → {34, 25, 12, 22, 11, 64, 90}
   Compare 64 and 90 → No swap → {34, 25, 12, 22, 11, 64, 90}
   ```
   After the first pass, the largest element (90) is correctly placed at the end of the array.

3. **Subsequent Passes**:
   - In each subsequent pass, the algorithm performs similar comparisons but only up to the second-to-last unsorted element because the largest element in the unsorted portion of the array is now correctly positioned at the end of the array after each pass.
   - The number of comparisons reduces with each pass.

4. **Termination**:
   - After each pass, the algorithm checks if any swaps were made. If no swaps were made during a pass, the array is considered sorted, and the algorithm terminates early.
   - If swaps were made, the algorithm continues to the next pass.

**Bubble Sort Code Example in Java**:

```java
public class BubbleSort {
    public static void bubbleSort(int[] arr) {
        int n = arr.length;
        // Outer loop: goes through the entire array multiple times
        for (int i = 0; i < n - 1; i++) {
            // Inner loop: compares adjacent elements and swaps them if necessary
            for (int j = 0; j < n - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    // Swap the elements if they are in the wrong order
                    int temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
    }
    
    public static void printArray(int[] arr) {
        for (int i : arr) {
            System.out.print(i + " ");
        }
        System.out.println();
    }

    public static void main(String[] args) {
        int[] arr = {64, 34, 25, 12, 22, 11, 90};
        System.out.println("Original Array: ");
        printArray(arr);
        
        bubbleSort(arr);
        
        System.out.println("Sorted Array: ");
        printArray(arr);
    }
}
```

**How the Program Works**:

1. **The `bubbleSort()` Method**:
   - This method contains two nested loops:
     - The **outer loop** iterates over the array. Each iteration represents one pass through the array.
     - The **inner loop** compares adjacent elements and swaps them if the left element is greater than the right element.
     - After each pass, the largest element "bubbles" up to its correct position.
   - The outer loop runs `n - 1` times, where `n` is the length of the array.

2. **The `printArray()` Method**:
   - This method simply prints out the elements of the array in a single line.

3. **The `main()` Method**:
   - The `main()` method initializes the array, prints the original array, calls the `bubbleSort()` method to sort it, and then prints the sorted array.

**Example Output**:

```
Original Array: 
64 34 25 12 22 11 90 
Sorted Array: 
11 12 22 25 34 64 90 
```

**Time Complexity of Bubble Sort**:

- **Best Case**: O(n) if the array is already sorted (optimized version).
- **Average and Worst Case**: O(n²) due to the two nested loops.
  - In the worst case (when the array is in reverse order), the algorithm will perform the maximum number of comparisons and swaps.

**Space Complexity**:
- **Space Complexity**: O(1) because it sorts the array in place and does not require additional memory proportional to the input size.

---

**Key Points to Remember**:
- **Bubble Sort is easy to understand** and is a good introduction to sorting algorithms.
- **Inefficient for large datasets** because of its O(n²) time complexity in average and worst cases.
- It's an **in-place sorting algorithm**, meaning it doesn’t require extra space other than the input array.


---


**Explanation of How a Selection Sort Algorithm Works in Java**

**Selection Sort** is a simple and intuitive comparison-based sorting algorithm. It works by repeatedly finding the smallest (or largest, depending on sorting order) element from the unsorted portion of the array and swapping it with the first unsorted element. This process is repeated until the entire array is sorted.

**Step-by-Step Breakdown of Selection Sort**:

1. **Initial Array**: The algorithm starts with an unsorted array.

   Example array:
   ```java
   {29, 10, 14, 37, 13}
   ```

2. **Find the Minimum (or Maximum)**:
   - In each pass through the array, the algorithm looks for the smallest (or largest) element from the unsorted portion of the array.
   - It swaps this smallest (or largest) element with the first element of the unsorted portion.
   
3. **Repeat the Process**:
   - After each pass, the first element of the unsorted portion is sorted, and the unsorted portion becomes smaller.
   - The algorithm repeats this process until all elements are sorted.

**Detailed Process**:

**First Pass**:
- **Start with the entire array**: Find the smallest element and move it to the first position.
- Compare each element with the current smallest. Once the smallest element is found, swap it with the element at the start of the unsorted portion.

**Second Pass**:
- Now, start with the second element and repeat the process for the remaining unsorted part of the array.

**Continue Until Sorted**:
- The process continues until the entire array is sorted. At this point, the unsorted portion of the array is empty.

**Code Example of Selection Sort in Java**:

```java
public class SelectionSort {
    // Method to implement Selection Sort
    public static void selectionSort(int[] arr) {
        int n = arr.length;
        
        // Outer loop: Go through the entire array
        for (int i = 0; i < n - 1; i++) {
            // Assume the first element is the smallest
            int minIdx = i;
            
            // Inner loop: Find the minimum element in the unsorted part of the array
            for (int j = i + 1; j < n; j++) {
                // If the current element is smaller, update minIdx
                if (arr[j] < arr[minIdx]) {
                    minIdx = j;
                }
            }
            
            // Swap the found minimum element with the first element of the unsorted part
            if (minIdx != i) {
                int temp = arr[i];
                arr[i] = arr[minIdx];
                arr[minIdx] = temp;
            }
        }
    }

    // Helper method to print the array
    public static void printArray(int[] arr) {
        for (int i : arr) {
            System.out.print(i + " ");
        }
        System.out.println();
    }

    // Main method to test the selection sort
    public static void main(String[] args) {
        int[] arr = {29, 10, 14, 37, 13};
        System.out.println("Original Array: ");
        printArray(arr);
        
        selectionSort(arr);
        
        System.out.println("Sorted Array: ");
        printArray(arr);
    }
}
```

**How the Program Works**:

1. **The `selectionSort()` Method**:
   - This method contains two nested loops:
     - **Outer loop**: This loop goes through the entire array, treating each element as the current "starting" element for sorting.
     - **Inner loop**: For each element in the unsorted portion, the inner loop finds the smallest element in that portion.
     - **Swapping**: After finding the smallest element, it is swapped with the element at the "current" position (the first unsorted element).
   
2. **The `printArray()` Method**:
   - This method prints the array elements after each pass or at the end of the sorting process.

3. **The `main()` Method**:
   - Initializes the unsorted array, prints it, calls the `selectionSort()` method, and prints the sorted array.

**Example Output**:

**Original Array**:
```
29 10 14 37 13
```

**Sorting Process**:
- **First pass**:
  - Minimum element in the unsorted portion `{29, 10, 14, 37, 13}` is `10`.
  - Swap `10` with `29`.
  - Array becomes: `{10, 29, 14, 37, 13}`

- **Second pass**:
  - Minimum element in the unsorted portion `{29, 14, 37, 13}` is `13`.
  - Swap `13` with `29`.
  - Array becomes: `{10, 13, 14, 37, 29}`

- **Third pass**:
  - Minimum element in the unsorted portion `{14, 37, 29}` is `14` (no swap needed).
  - Array remains: `{10, 13, 14, 37, 29}`

- **Fourth pass**:
  - Minimum element in the unsorted portion `{37, 29}` is `29`.
  - Swap `29` with `37`.
  - Array becomes: `{10, 13, 14, 29, 37}`

**Sorted Array**:
```
10 13 14 29 37
```

**Time Complexity**:

- **Best, Average, and Worst Case Time Complexity**: O(n²)
  - Regardless of the input, there are always two nested loops that make comparisons. The number of comparisons in the worst case is proportional to the square of the number of elements in the array.

- **Space Complexity**: O(1)
  - Selection Sort is an in-place sorting algorithm, meaning it doesn't require additional memory besides the input array.

**Characteristics of Selection Sort**:

- **Stable or Unstable**: Selection Sort is generally **unstable**, meaning it may change the relative order of elements with equal values.
  
- **Efficiency**:
  - Selection Sort is **not efficient for large datasets** due to its O(n²) time complexity.
  - However, it has the advantage of performing a minimal number of swaps (only `n - 1` swaps), which may be useful in scenarios where swapping is costly.
  
- **In-Place Sorting**:
  - Selection Sort is an **in-place sorting algorithm**, meaning it does not require extra space proportional to the input size.

---

**Key Points to Remember**:
- **Simple to implement** and easy to understand.
- **Less efficient than more advanced algorithms** like Merge Sort and Quick Sort, especially on large lists.
- **In-place** algorithm, meaning it does not require additional memory for sorting.


---



**Explanation of How Insertion Sort Works in Java**

**Insertion Sort** is a simple comparison-based sorting algorithm that builds the final sorted array one element at a time. It is much like sorting playing cards in your hands. Starting with the second element, you compare it with the elements before it and insert it into the correct position in the already-sorted portion of the array.

**How Insertion Sort Works**:

1. **Start with the second element**:
   - The first element is considered sorted by itself, so you start with the second element.

2. **Compare the current element with the sorted portion**:
   - The current element (let's call it the **key**) is compared with the elements in the sorted portion (all elements to the left of it).
   - If the current element is smaller than the compared element, shift the compared element one position to the right.

3. **Insert the key in the correct position**:
   - Once you find the correct position, insert the current element (key) there.

4. **Repeat the process for all elements**:
   - The algorithm continues this process for each element in the array, gradually expanding the sorted portion until the entire array is sorted.

**Example Output**:

Let’s say we have an array like this:  
```java
{12, 11, 13, 5, 6}
```

- **Step 1**: Start with the second element (`11`):
  - Compare `11` with `12`, since `11` is smaller, shift `12` to the right and insert `11` at the beginning.
  - Array becomes: `{11, 12, 13, 5, 6}`

- **Step 2**: Move to the next element (`13`):
  - `13` is already in the correct place, so no changes are made.
  - Array remains: `{11, 12, 13, 5, 6}`

- **Step 3**: Move to the next element (`5`):
  - `5` is smaller than `13`, `12`, and `11`, so all three are shifted to the right and `5` is placed at the beginning.
  - Array becomes: `{5, 11, 12, 13, 6}`

- **Step 4**: Move to the last element (`6`):
  - `6` is smaller than `13`, `12`, and `11`, so they are shifted to the right, and `6` is placed between `5` and `11`.
  - Array becomes: `{5, 6, 11, 12, 13}`

Now, the array is sorted: `{5, 6, 11, 12, 13}`.

---

**Code Implementation of Insertion Sort in Java**

```java
public class InsertionSort {

    // Method to implement Insertion Sort
    public static void insertionSort(int[] arr) {
        int n = arr.length;

        // Start from the second element (index 1) and move to the right
        for (int i = 1; i < n; i++) {
            int key = arr[i];  // The current element we want to insert
            int j = i - 1;     // j is the index of the last element in the sorted portion

            // Shift elements of the sorted portion that are greater than key
            // to one position to the right
            while (j >= 0 && arr[j] > key) {
                arr[j + 1] = arr[j];
                j = j - 1;
            }

            // Insert the key into its correct position
            arr[j + 1] = key;
        }
    }

    // Helper method to print the array
    public static void printArray(int[] arr) {
        for (int i : arr) {
            System.out.print(i + " ");
        }
        System.out.println();
    }

    // Main method to test the insertion sort
    public static void main(String[] args) {
        int[] arr = {12, 11, 13, 5, 6};
        System.out.println("Original Array:");
        printArray(arr);
        
        insertionSort(arr);  // Call insertion sort
        
        System.out.println("Sorted Array:");
        printArray(arr);
    }
}
```

**Explanation of the Code**:

1. **`insertionSort()` Method**:
   - This method implements the actual insertion sort algorithm.
   - **Outer loop**: Starts from index `1` (second element) and goes through the entire array, one element at a time.
   - **Inner loop (while loop)**: Compares the key (the current element) with the elements before it (in the sorted portion). If the key is smaller than an element, that element is shifted to the right.
   - Once the correct position for the key is found, it is inserted at that position.

2. **`printArray()` Method**:
   - This method prints all elements of the array in a single line.

3. **`main()` Method**:
   - Initializes an array of unsorted integers, prints it, calls the `insertionSort()` method to sort it, and then prints the sorted array.

**Example Output**:

**Original Array**:
```
12 11 13 5 6 
```

**Sorting Process**:

- **First Pass** (Key = 11):
  - Compare 11 with 12, since 11 < 12, shift 12 to the right.
  - Array becomes: `{11, 12, 13, 5, 6}`

- **Second Pass** (Key = 13):
  - 13 is already in the correct place (greater than 12), no changes.
  - Array remains: `{11, 12, 13, 5, 6}`

- **Third Pass** (Key = 5):
  - 5 is smaller than 13, 12, and 11, so they are shifted right.
  - Array becomes: `{5, 11, 12, 13, 6}`

- **Fourth Pass** (Key = 6):
  - 6 is smaller than 13, 12, and 11, so they are shifted right.
  - Array becomes: `{5, 6, 11, 12, 13}`

**Sorted Array**:
```
5 6 11 12 13
```

**Time Complexity**:

- **Best Case**: O(n)
  - This occurs when the array is already sorted. The inner loop will not perform any shifts, so the algorithm will run in linear time.

- **Average and Worst Case**: O(n²)
  - In the worst case (when the array is sorted in reverse order), the inner loop will shift all elements for each key, leading to quadratic time complexity.

**Space Complexity**:

- **Space Complexity**: O(1)
  - Insertion Sort is an in-place algorithm, meaning it sorts the array without requiring additional memory (other than for a few variables).

**Characteristics of Insertion Sort**:

- **Stable**: Insertion Sort is a stable sorting algorithm, meaning that if two elements are equal, they will maintain their relative order in the sorted array.
  
- **Efficient for small or nearly sorted arrays**: Since it has linear time complexity in the best case, it performs well when the array is nearly sorted or has only a few elements out of place.

- **In-Place Sorting**: It doesn’t require extra space other than the input array, making it memory efficient.

**Key Points to Remember**:
- **Simple to implement**: Insertion Sort is easy to code and understand, making it a good algorithm for small or nearly sorted datasets.
- **Not suitable for large datasets** due to its O(n²) time complexity in the worst case.
- **Stable and in-place**: It doesn’t require additional memory, and it preserves the order of equal elements.

---



**Explanation of How Merge Sort Works in Java**

**Merge Sort** is a **divide and conquer** sorting algorithm. It works by breaking down an array into smaller subarrays, sorting those subarrays, and then merging them back together in sorted order. It is one of the most efficient sorting algorithms for large datasets, with a time complexity of O(n log n), which is better than algorithms like **Bubble Sort** and **Insertion Sort** (which have time complexities of O(n²)).

**How Merge Sort Works**:

1. **Divide**:
   - The array is recursively divided into two halves until each subarray contains only one element. An array with one element is considered sorted.

2. **Conquer**:
   - Once the array is divided into individual elements, the algorithm begins to merge the subarrays back together, sorting them as it goes. During the merging process, two sorted subarrays are combined to form a larger sorted subarray.

3. **Combine**:
   - The subarrays are merged in sorted order, and this merging continues until the entire array is merged back into a single sorted array.

**Key Operations**:
- **Divide**: Splitting the array into halves.
- **Merge**: Combining the two halves into a sorted array.

**Code Implementation of Merge Sort in Java**:

```java
public class MergeSort {

    // Method to implement Merge Sort
    public static void mergeSort(int[] arr) {
        if (arr.length <= 1) {
            return; // Base case: a single element is already sorted
        }
        
        // Split the array into two halves
        int mid = arr.length / 2;
        int[] left = new int[mid];
        int[] right = new int[arr.length - mid];
        
        // Copy data to temp arrays left[] and right[]
        System.arraycopy(arr, 0, left, 0, mid);
        System.arraycopy(arr, mid, right, 0, arr.length - mid);

        // Recursively sort each half
        mergeSort(left);
        mergeSort(right);
        
        // Merge the sorted halves
        merge(arr, left, right);
    }

    // Method to merge two sorted arrays into the original array
    public static void merge(int[] arr, int[] left, int[] right) {
        int i = 0, j = 0, k = 0;
        
        // Merge the two arrays while both have elements
        while (i < left.length && j < right.length) {
            if (left[i] <= right[j]) {
                arr[k++] = left[i++];
            } else {
                arr[k++] = right[j++];
            }
        }

        // If there are remaining elements in left[], add them
        while (i < left.length) {
            arr[k++] = left[i++];
        }

        // If there are remaining elements in right[], add them
        while (j < right.length) {
            arr[k++] = right[j++];
        }
    }

    // Helper method to print the array
    public static void printArray(int[] arr) {
        for (int i : arr) {
            System.out.print(i + " ");
        }
        System.out.println();
    }

    // Main method to test the Merge Sort
    public static void main(String[] args) {
        int[] arr = {38, 27, 43, 3, 9, 82, 10};
        System.out.println("Original Array:");
        printArray(arr);

        mergeSort(arr);  // Call Merge Sort
        
        System.out.println("Sorted Array:");
        printArray(arr);
    }
}
```

**Explanation of the Code**:

1. **`mergeSort()` Method**:
   - This method divides the array into two halves.
   - The array is recursively split into smaller subarrays until each subarray has only one element.
   - It uses the **Base Case** (`if (arr.length <= 1)`) to stop the recursion when a subarray has only one element.
   - After splitting, the two halves are passed to the `merge()` method to be combined into a sorted array.

2. **`merge()` Method**:
   - The merge method takes the two sorted arrays (`left[]` and `right[]`) and combines them into a single sorted array (`arr[]`).
   - It uses three pointers:
     - `i` to iterate through the `left` array,
     - `j` to iterate through the `right` array,
     - `k` to fill the original array with sorted elements.
   - If the current element in `left[i]` is smaller than or equal to `right[j]`, it is added to `arr[k]`, and `i` is incremented.
   - If the current element in `right[j]` is smaller, it is added to `arr[k]`, and `j` is incremented.
   - After one array is exhausted, any remaining elements from the other array are added to the result array.

3. **`printArray()` Method**:
   - This method simply prints all the elements in the array.

4. **`main()` Method**:
   - Initializes an unsorted array, prints the original array, performs the merge sort, and then prints the sorted array.

**Example Ouput**:

**Original Array**:
```
38 27 43 3 9 82 10
```

**Sorting Process**:

1. **Divide the Array**:
   - The array is recursively split into smaller subarrays:
   ```
   [38, 27, 43, 3, 9, 82, 10]
   → [38, 27, 43] | [3, 9, 82, 10]
   → [38] | [27, 43] → [3] | [9, 82, 10]
   → [27] | [43] → [9] | [82, 10]
   → [82] | [10]
   ```

2. **Merge the Subarrays**:
   - The subarrays are merged back together in sorted order:
   ```
   [27, 38, 43] | [3, 9, 10, 82]
   → [3, 9, 10, 27, 38, 43, 82]
   ```

**Sorted Array**:
```
3 9 10 27 38 43 82
```

**Time Complexity**:

- **Best Case**: O(n log n)
  - Even if the array is already sorted, the merge sort still performs the splitting and merging processes, resulting in O(n log n) time complexity.

- **Average Case**: O(n log n)
  - The array is divided in half at each step, and each level of the recursion performs O(n) operations (merging). Since the depth of the recursion is O(log n), the overall time complexity is O(n log n).

- **Worst Case**: O(n log n)
  - The time complexity is still O(n log n) even in the worst case, making it very efficient for large datasets compared to algorithms like bubble sort and insertion sort.

**Space Complexity**:

- **Space Complexity**: O(n)
  - Merge Sort requires additional space for the temporary arrays (`left[]` and `right[]`) used during the merging process. Therefore, it is not an in-place sorting algorithm.

**Characteristics of Merge Sort**:

- **Stable**: Merge Sort is stable, meaning that if two elements are equal, they retain their relative order in the sorted array.
  
- **Efficient for Large Datasets**: Merge Sort is efficient for large datasets because of its O(n log n) time complexity.

- **Not In-Place**: Unlike Insertion Sort or Bubble Sort, Merge Sort requires additional memory for the temporary arrays used during the merging process.

**Key Points to Remember**:

- **Divide and Conquer**: Merge Sort breaks down the problem into smaller subproblems, solves each subproblem, and combines the results.
- **Stable and Efficient**: It's stable and works efficiently even on large arrays with a time complexity of O(n log n).
- **Not In-Place**: Requires additional memory for merging the subarrays, which is a trade-off compared to in-place algorithms like Quick Sort or Insertion Sort.


---



### Explanation of How Quick Sort Works in Java

**Quick Sort** is an efficient, comparison-based, divide-and-conquer sorting algorithm. It works by selecting a "pivot" element from the array and partitioning the other elements into two subarrays, according to whether they are less than or greater than the pivot. The subarrays are then recursively sorted. Quick Sort is generally faster than other O(n²) sorting algorithms like Bubble Sort and Insertion Sort due to its average-case time complexity of O(n log n).

**How Quick Sort Works**:

1. **Choose a Pivot**:
   - Quick Sort starts by selecting a pivot element from the array. There are different strategies to choose the pivot (e.g., first element, last element, middle element, or random element).
   
2. **Partitioning the Array**:
   - The array is rearranged such that:
     - All elements less than the pivot are placed before it.
     - All elements greater than the pivot are placed after it.
   - After partitioning, the pivot is in its correct position in the sorted array.

3. **Recursively Sort the Subarrays**:
   - The subarrays (elements before and after the pivot) are then sorted independently by recursively applying the same process (choosing a pivot, partitioning, and sorting the subarrays).

4. **Base Case**:
   - The base case for the recursion is when the subarray has one or zero elements, which is inherently sorted.

**Code Implementation of Quick Sort in Java**:

```java
public class QuickSort {

    // Method to implement Quick Sort
    public static void quickSort(int[] arr, int low, int high) {
        if (low < high) {
            // Find pivot element such that
            // element smaller than pivot are on the left of pivot
            // and element greater than pivot are on the right
            int pi = partition(arr, low, high);
            
            // Recursively sort elements before and after partition
            quickSort(arr, low, pi - 1);
            quickSort(arr, pi + 1, high);
        }
    }

    // Method to partition the array around the pivot
    public static int partition(int[] arr, int low, int high) {
        // Choose the last element as pivot
        int pivot = arr[high];
        
        int i = (low - 1);  // index of smaller element
        for (int j = low; j < high; j++) {
            // If current element is smaller than or equal to the pivot
            if (arr[j] <= pivot) {
                i++;
                
                // Swap arr[i] and arr[j]
                int temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
        
        // Swap arr[i + 1] and arr[high] (pivot)
        int temp = arr[i + 1];
        arr[i + 1] = arr[high];
        arr[high] = temp;
        
        // Return the partition index
        return i + 1;
    }

    // Helper method to print the array
    public static void printArray(int[] arr) {
        for (int i : arr) {
            System.out.print(i + " ");
        }
        System.out.println();
    }

    // Main method to test Quick Sort
    public static void main(String[] args) {
        int[] arr = {10, 7, 8, 9, 1, 5};
        System.out.println("Original Array:");
        printArray(arr);
        
        quickSort(arr, 0, arr.length - 1);  // Call Quick Sort
        
        System.out.println("Sorted Array:");
        printArray(arr);
    }
}
```

**Explanation of the Code**:

1. **`quickSort()` Method**:
   - This method takes three parameters: the array (`arr`), the starting index (`low`), and the ending index (`high`).
   - The base case is when the `low` index is greater than or equal to `high`, which means the subarray has one or zero elements, and no sorting is needed.
   - The method calls the `partition()` method to find the correct position for the pivot. After partitioning, it recursively sorts the two subarrays on either side of the pivot.

2. **`partition()` Method**:
   - The `partition()` method selects the last element as the pivot.
   - It then iterates through the array, comparing each element with the pivot. If an element is smaller than or equal to the pivot, it swaps that element with an element at the "smaller element" index (`i`).
   - After finishing the loop, the pivot is swapped into its correct position (after all smaller elements), and the method returns the pivot index (`pi`), which is the point of partition.

3. **`printArray()` Method**:
   - This method is used to print the elements of the array.

4. **`main()` Method**:
   - The `main()` method initializes an unsorted array, prints it, performs Quick Sort, and then prints the sorted array.

**Example Output**:

**Original Array**:
```
10 7 8 9 1 5
```

**Sorting Process**:

1. **First call to `quickSort()`** (low = 0, high = 5):
   - Choose `5` as the pivot.
   - After partitioning, array becomes `{1, 5, 8, 9, 7, 10}`. The pivot (`5`) is placed at index `1`.

2. **Recursively sort the left subarray** (low = 0, high = 0):
   - This subarray has only one element, so it is already sorted.

3. **Recursively sort the right subarray** (low = 2, high = 5):
   - Choose `10` as the pivot.
   - After partitioning, array becomes `{1, 5, 8, 7, 9, 10}`. The pivot (`10`) is placed at index `5`.

4. **Recursively sort the left subarray** (low = 2, high = 4):
   - Choose `9` as the pivot.
   - After partitioning, array becomes `{1, 5, 7, 8, 9, 10}`. The pivot (`9`) is placed at index `4`.

5. **Recursively sort the left subarray** (low = 2, high = 3):
   - Choose `8` as the pivot.
   - After partitioning, array becomes `{1, 5, 7, 8, 9, 10}`. The pivot (`8`) is placed at index `3`.

#### Sorted Array:
```
1 5 7 8 9 10
```

**Time Complexity**:

- **Best Case**: O(n log n)
  - The best case occurs when the pivot divides the array into nearly equal subarrays at each step. This happens when the pivot is chosen optimally (e.g., the median or a random element). In this case, the time complexity is O(n log n), where `n` is the number of elements in the array.

- **Average Case**: O(n log n)
  - The average case time complexity is also O(n log n) when the pivot divides the array in a balanced way. On average, Quick Sort performs well with O(n log n) complexity.

- **Worst Case**: O(n²)
  - The worst case occurs when the pivot is the smallest or largest element (e.g., if the array is already sorted or reversed). In this case, Quick Sort performs poorly, and the time complexity becomes O(n²). However, this can be avoided with better pivot selection strategies (e.g., choosing a random pivot or using the median-of-three rule).

**Space Complexity**:

- **Space Complexity**: O(log n) (for recursive stack)
  - The space complexity is O(log n) for the recursive calls. This is because Quick Sort only requires additional space for the recursive stack, which grows with the depth of the recursion. In the best case, the depth of recursion is log n.
  - In the worst case (when the array is sorted or nearly sorted), the space complexity can become O(n) due to deep recursion.

**Characteristics of Quick Sort**:

- **In-place sorting**: Quick Sort does not require additional memory for sorting (besides the recursion stack), making it memory efficient.
- **Unstable**: Quick Sort is not a stable sorting algorithm. That is, equal elements may not retain their relative order after sorting.
- **Efficient for large datasets**: Quick Sort is very efficient on average and is often the algorithm of choice for sorting large datasets.

**Key Points to Remember**:

- **Divide and Conquer**: Quick Sort recursively divides the array into smaller subarrays, sorts them, and combines them.
- **Efficient on average**: Quick Sort has an average time complexity of O(n log n), which makes it fast for large datasets.
- **Not Stable**: Quick Sort does not guarantee that equal elements retain their relative order.
- **In-place**: Quick Sort does not require extra space for sorting, other than the recursive stack.


---

#### Using Comparator - NOT on AP Exam


**Using a Custom Comparator for Sorting in Java**

In Java, the **Comparator** interface allows you to define a custom sorting order for collections like lists or arrays. By using a custom comparator, you can define how two elements should be compared, which is especially useful when you want to sort objects in a specific order that is not necessarily natural (like numerical or lexicographical order).

**Key Concepts**:

- **Comparator**: A functional interface in Java (`java.util.Comparator`) that defines a method `compare(T o1, T o2)`. It returns:
  - A negative integer if `o1` is less than `o2`.
  - Zero if `o1` is equal to `o2`.
  - A positive integer if `o1` is greater than `o2`.
  
- **`compare()` Method**: The core of the comparator is the `compare()` method, where the logic for how two objects should be compared is defined.

**Why Use a Custom Comparator?**
- You may want to sort objects based on some property other than their natural order (e.g., sorting `Person` objects by their `age` instead of their `name`).
- You need to sort collections of complex objects or objects without a natural ordering.

**Example: Sorting a List of `Person` Objects with a Custom Comparator**

Let's say you have a `Person` class with fields `name` and `age`, and you want to sort people by their age in ascending order. You can do this with a custom comparator.

**1. **Define the `Person` Class**

```java
public class Person {
    private String name;
    private int age;

    // Constructor
    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    // Getters
    public String getName() {
        return name;
    }

    public int getAge() {
        return age;
    }
    // String representation for easy printing
    public String toString() {
        return name + " (" + age + ")";
    }
}
```

**2. Create a Custom Comparator for Sorting by Age**

You can create a custom comparator that sorts the `Person` objects by `age`.

```java
import java.util.Comparator;

public class AgeComparator implements Comparator<Person> {
    
    public int compare(Person p1, Person p2) {
        // Compare by age in ascending order
        return Integer.compare(p1.getAge(), p2.getAge());
    }
}
```

**3. Sort a List Using the Custom Comparator**

Now, you can use this comparator to sort a list of `Person` objects by their age.

```java
import java.util.*;

public class CustomComparatorExample {
    public static void main(String[] args) {
        // Creating a list of Person objects
        List<Person> people = new ArrayList<>();
        people.add(new Person("John", 25));
        people.add(new Person("Alice", 30));
        people.add(new Person("Bob", 20));
        people.add(new Person("Charlie", 35));

        // Print the original list
        System.out.println("Original List:");
        for (Person person : people) {
            System.out.println(person);
        }

        // Sorting using custom comparator (AgeComparator)
        people.sort(new AgeComparator());

        // Print the sorted list
        System.out.println("\nSorted by Age:");
        for (Person person : people) {
            System.out.println(person);
        }
    }
}
```

**Sample Output**:

```
Original List:
John (25)
Alice (30)
Bob (20)
Charlie (35)

Sorted by Age:
Bob (20)
John (25)
Alice (30)
Charlie (35)
```

**Key Steps in the Example**:

1. **Define the Comparator**: 
   - `AgeComparator` implements `Comparator<Person>`.
   - The `compare()` method compares two `Person` objects by their `age`.

2. **Sort with the Comparator**:
   - The `people.sort(new AgeComparator())` call sorts the list using the custom comparator.
   - The `List.sort()` method requires a `Comparator` to decide the sorting order.

**Alternative: Using a Lambda Expression for Custom Comparators**

In modern Java (Java 8 and later), you can use a **lambda expression** to create a comparator without explicitly defining a separate class. This is a more concise approach.

**1. Using a Lambda Expression to Sort by Age**

```java
import java.util.*;

public class CustomComparatorExample {
    public static void main(String[] args) {
        // Creating a list of Person objects
        List<Person> people = new ArrayList<>();
        people.add(new Person("John", 25));
        people.add(new Person("Alice", 30));
        people.add(new Person("Bob", 20));
        people.add(new Person("Charlie", 35));

        // Print the original list
        System.out.println("Original List:");
        for (Person person : people) {
            System.out.println(person);
        }

        // Sorting using a lambda expression to compare by age
        people.sort((p1, p2) -> Integer.compare(p1.getAge(), p2.getAge()));

        // Print the sorted list
        System.out.println("\nSorted by Age:");
        for (Person person : people) {
            System.out.println(person);
        }
    }
}
```

**Sample Output (same as before)**:

```
Original List:
John (25)
Alice (30)
Bob (20)
Charlie (35)

Sorted by Age:
Bob (20)
John (25)
Alice (30)
Charlie (35)
```

**Sorting by Multiple Criteria Using a Custom Comparator**

Sometimes you want to sort by multiple fields (e.g., by `age`, and if the `age` is the same, then by `name`).

**1. Define the Comparator for Multiple Criteria**

```java
import java.util.*;

public class MultiCriteriaComparator implements Comparator<Person> {
    @Override
    public int compare(Person p1, Person p2) {
        // First, compare by age
        int ageCompare = Integer.compare(p1.getAge(), p2.getAge());
        
        // If ages are equal, compare by name
        if (ageCompare == 0) {
            return p1.getName().compareTo(p2.getName());
        }
        
        return ageCompare;  // If ages are not equal, return age comparison result
    }
}
```

**2. Using the Comparator with Multi-Criteria Sorting**

```java
import java.util.*;

public class CustomComparatorExample {
    public static void main(String[] args) {
        // Creating a list of Person objects
        List<Person> people = new ArrayList<>();
        people.add(new Person("John", 25));
        people.add(new Person("Alice", 30));
        people.add(new Person("Bob", 25));
        people.add(new Person("Charlie", 35));
        people.add(new Person("Alice", 25));

        // Print the original list
        System.out.println("Original List:");
        for (Person person : people) {
            System.out.println(person);
        }

        // Sorting using multi-criteria comparator (AgeComparator and NameComparator)
        people.sort(new MultiCriteriaComparator());

        // Print the sorted list
        System.out.println("\nSorted by Age and Name:");
        for (Person person : people) {
            System.out.println(person);
        }
    }
}
```

**Sample Output**:

```
Original List:
John (25)
Alice (30)
Bob (25)
Charlie (35)
Alice (25)

Sorted by Age and Name:
Alice (25)
Alice (25)
Bob (25)
John (25)
Alice (30)
Charlie (35)
```

**Key Points**:

- **Comparator Interface**: A custom comparator can define a specific order for sorting objects, whether it's based on one property or multiple properties.
- **Lambda Expression**: Instead of creating a separate comparator class, you can use a lambda expression to define the comparison logic directly in the sorting method.
- **Multiple Criteria Sorting**: You can chain comparisons (e.g., compare first by age, and if equal, by name) to create complex sorting behaviors.
- **Flexibility**: The Comparator interface provides a lot of flexibility, allowing you to easily define sorting logic for complex objects, including sorting in ascending or descending order, sorting by multiple properties, and more.

**Common Usage**:

- **Sorting Collections**: You use custom comparators with the `Collections.sort()` method or the `List.sort()` method to sort collections.
- **Sorting Arrays**: You can also use `Arrays.sort(array, comparator)` to sort arrays using a custom comparator.

Comparators can be used in a powerful way to control the sorting order in Java. It allows for great flexibility when working with collections and arrays.



## 7.7 ArrayList using data sets

> “Files are just long strings of text.
> We read them line by line, store the data in an `ArrayList`,
> then use the same list skills you already know.”

When working with data files in Java, typical patterns are as follows:

1. **Read** data from a file
2. **Store** data in an `ArrayList`
3. **Process or modify** the data
4. **Write** the updated data back to a file

**Common File Types (AP CSA Level)**

| File Type | Description                                  |
| --------- | -------------------------------------------- |
| `.txt`    | Plain text (one value per line or sentences) |
| `.csv`    | Comma-separated values (rows & columns)      |

⚠️ **Key AP rule:** Files are treated as **plain text**, not spreadsheets.

---

**Reading a TXT File (Scanner – Most AP-Friendly)**

**Example File: `scores.txt`**

```
85
92
78
90
```

**Program Code**

```java
import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Scanner;

public class ReadTextFile {
    public static void main(String[] args) throws IOException {
        ArrayList<Integer> scores = new ArrayList<>();

        File file = new File("scores.txt");
        Scanner input = new Scanner(file);

        while (input.hasNextInt()) {
            scores.add(input.nextInt());
        }

        input.close();

        System.out.println(scores);
    }
}
```


---

**Reading a CSV File (Scanner + `split()`)**

**Example File: `students.csv`**

```
Alice,90
Bob,85
Carlos,78
```

**Program Code**

```java
import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Scanner;

public class ReadCSV {
    public static void main(String[] args) throws IOException {
        ArrayList<String> names = new ArrayList<>();
        ArrayList<Integer> grades = new ArrayList<>();

        Scanner input = new Scanner(new File("students.csv"));

        while (input.hasNextLine()) {
            String line = input.nextLine();
            String[] parts = line.split(",");

            names.add(parts[0]);
            grades.add(Integer.parseInt(parts[1]));
        }

        input.close();

        System.out.println(names);
        System.out.println(grades);
    }
}
```

---

**Reading a File Using `BufferedReader` (Advanced)**

This is **not required** for AP CSA but useful for comparison.

```java
import java.io.*;
import java.util.ArrayList;

public class BufferedReaderExample {
    public static void main(String[] args) throws IOException {
        ArrayList<String> lines = new ArrayList<>();

        BufferedReader reader = new BufferedReader(new FileReader("data.txt"));
        String line;

        while ((line = reader.readLine()) != null) {
            lines.add(line);
        }

        reader.close();

        System.out.println(lines);
    }
}
```

---

**Modifying Data in an `ArrayList`**

**Example: Curve all grades by +5 (max 100)**

```java
for (int i = 0; i < grades.size(); i++) {
    int updated = grades.get(i) + 5;
    if (updated > 100) {
        updated = 100;
    }
    grades.set(i, updated);
}
```

---

**Writing Data Back to a File (`PrintWriter`)**

**Writing Updated CSV**

```java
import java.io.PrintWriter;
import java.io.IOException;

public class WriteCSV {
    public static void main(String[] args) throws IOException {
        ArrayList<String> names = new ArrayList<>();
        ArrayList<Integer> grades = new ArrayList<>();

        names.add("Alice");
        grades.add(95);

        PrintWriter output = new PrintWriter("updated_students.csv");

        for (int i = 0; i < names.size(); i++) {
            output.println(names.get(i) + "," + grades.get(i));
        }

        output.close();
    }
}
```

---

**Standard Data Workflow**

```java
// Read file → store → modify → write back
ArrayList<Integer> data = new ArrayList<>();

// read
Scanner input = new Scanner(new File("values.txt"));
while (input.hasNextInt()) {
    data.add(input.nextInt());
}
input.close();

// modify
for (int i = 0; i < data.size(); i++) {
    data.set(i, data.get(i) * 2);
}

// write
PrintWriter output = new PrintWriter("new_values.txt");
for (int value : data) {
    output.println(value);
}
output.close();
```

---


### Activity 7.7.1 Test Scores

Program Description:
- Below are given a data set containing student test scores. Each row represents one test attempt.
- ***You will:***
	- Read the data
	- Store each column in a separate ArrayList
	- Compute summary statistics
	- Apply a score curve
	- Output a formatted report
	

```
StudentID,Name,TestName,Score
1001,Alice Nguyen,Unit 1 Test,78
1002,Brandon Lee,Unit 1 Test,85
1003,Carlos Martinez,Unit 1 Test,92
1004,Diana Patel,Unit 1 Test,88
1005,Ethan Johnson,Unit 1 Test,69
1006,Fatima Khan,Unit 1 Test,94
1007,Grace Kim,Unit 1 Test,81
1008,Hannah Brown,Unit 1 Test,73
1009,Isaac Wilson,Unit 1 Test,90
1010,Jasmine Lopez,Unit 1 Test,84
1011,Kevin Chen,Unit 1 Test,76
1012,Liam OConnor,Unit 1 Test,89
1013,Maya Rodriguez,Unit 1 Test,95
1014,Noah Smith,Unit 1 Test,67
1015,Olivia Davis,Unit 1 Test,88
```


**Required:**
- Store student IDs, names, test names, and scores using ArrayList
- Calculate:
	- Average score
	- Highest score
	- Lowest score
- Curve all scores by +5 points (max score = 100)
- Print updated scores in a clean table
- Count how many students scored 90 or above after the curve

**Starter Code**

```java
import java.util.ArrayList;

public class StudentScoreAnalyzer {

    public static void main(String[] args) {

        ArrayList<Integer> studentIDs = new ArrayList<>();
        ArrayList<String> names = new ArrayList<>();
        ArrayList<String> testNames = new ArrayList<>();
        ArrayList<Integer> scores = new ArrayList<>();

        String[] data = {
            "1001,Alice Nguyen,Unit 1 Test,78",
            "1002,Brandon Lee,Unit 1 Test,85",
            "1003,Carlos Martinez,Unit 1 Test,92",
            "1004,Diana Patel,Unit 1 Test,88",
            "1005,Ethan Johnson,Unit 1 Test,69",
            "1006,Fatima Khan,Unit 1 Test,94",
            "1007,Grace Kim,Unit 1 Test,81",
            "1008,Hannah Brown,Unit 1 Test,73",
            "1009,Isaac Wilson,Unit 1 Test,90",
            "1010,Jasmine Lopez,Unit 1 Test,84",
            "1011,Kevin Chen,Unit 1 Test,76",
            "1012,Liam OConnor,Unit 1 Test,89",
            "1013,Maya Rodriguez,Unit 1 Test,95",
            "1014,Noah Smith,Unit 1 Test,67",
            "1015,Olivia Davis,Unit 1 Test,88"};

        // TODO 1: Read data into ArrayLists

        // TODO 2: Calculate average, highest, and lowest score

        // TODO 3: Curve scores by +5 (max 100)

        // TODO 4: Count how many students scored 90 or above

        // TODO 5: Print updated report
    }
}
```


---


### Activity 7.7.2 Inventory

**Program Description:**
Students are given two inventory data sets from different systems:
One from the warehouse
One from the storefront system
Each product appears in both systems, but the quantities may not match.

**Required:**
- Align products using the product ID
- Compare quantities
- Identify mismatches
- Identify Matching quantities
- Generate discrepancy reports
- Store each column in its own ArrayList
- Match records using ProductID


**Output should show:**
- Total inventory in each system
- Number of mismatched products
- Print a discrepancy report showing only mismatches

```
ProductID,ProductName,Category,WarehouseQty
2001,USB-C Cable,Electronics,120
2002,Wireless Mouse,Electronics,85
2003,Laptop Stand,Accessories,60
2004,Notebook,Stationery,200
2005,Pen Pack,Stationery,180
2006,Backpack,Accessories,45
2007,Water Bottle,Accessories,75
2008,Keyboard,Electronics,90
2009,HDMI Cable,Electronics,110
2010,Phone Charger,Electronics,95
2011,Desk Lamp,Home,40
2012,Calculator,Electronics,55
2013,Sticky Notes,Stationery,300
2014,Monitor Stand,Electronics,50
2015,Webcam,Electronics,65
2016,Headphones,Electronics,70
2017,Mouse Pad,Accessories,140
2018,Planner,Stationery,160
2019,Flash Drive,Electronics,130
2020,Whiteboard Marker,Stationery,210
```

```
ProductID,ProductName,Category,StoreQty
2001,USB-C Cable,Electronics,118
2002,Wireless Mouse,Electronics,85
2003,Laptop Stand,Accessories,62
2004,Notebook,Stationery,198
2005,Pen Pack,Stationery,180
2006,Backpack,Accessories,40
2007,Water Bottle,Accessories,75
2008,Keyboard,Electronics,92
2009,HDMI Cable,Electronics,110
2010,Phone Charger,Electronics,90
2011,Desk Lamp,Home,38
2012,Calculator,Electronics,55
2013,Sticky Notes,Stationery,295
2014,Monitor Stand,Electronics,48
2015,Webcam,Electronics,70
2016,Headphones,Electronics,68
2017,Mouse Pad,Accessories,140
2018,Planner,Stationery,155
2019,Flash Drive,Electronics,130
2020,Whiteboard Marker,Stationery,205
```

**Complete one of the Extensions below:**

- Identify products where discrepancy > 5 units
- Sort discrepancy report by largest difference
- Calculate total value using a price list
- Convert to a menu-driven program
- Add error handling for missing product IDs


**Starter Code**
```java
import java.util.ArrayList;

public class InventoryReconciliation {

    public static void main(String[] args) {

        ArrayList<Integer> productIDs = new ArrayList<>();
        ArrayList<String> productNames = new ArrayList<>();
        ArrayList<Integer> warehouseQty = new ArrayList<>();
        ArrayList<Integer> storeQty = new ArrayList<>();

        String[] warehouseData = {
            "2001,USB-C Cable,120",
            "2002,Wireless Mouse,85",
            "2003,Laptop Stand,60",
            "2004,Notebook,200",
            "2005,Pen Pack,180",
            "2006,Backpack,45",
            "2007,Water Bottle,75",
            "2008,Keyboard,90",
            "2009,HDMI Cable,110",
            "2010,Phone Charger,95",
            "2011,Desk Lamp,40",
            "2012,Calculator,55",
            "2013,Sticky Notes,300",
            "2014,Monitor Stand,50",
            "2015,Webcam,65",
            "2016,Headphones,70",
            "2017,Mouse Pad,140",
            "2018,Planner,160",
            "2019,Flash Drive,130",
            "2020,Whiteboard Marker,210"
        };

        String[] storeData = {
            "2001,118","2002,85","2003,62","2004,198","2005,180",
            "2006,40","2007,75","2008,92","2009,110","2010,90",
            "2011,38","2012,55","2013,295","2014,48","2015,70",
            "2016,68","2017,140","2018,155","2019,130","2020,205"
        };

        // TODO 1: Read warehouse data

        // TODO 2: Match store quantities to products

        // TODO 3: Identify mismatches

        // TODO 4: Print discrepancy report
    }
}
```


---


#### Project: Video Game Library (Option 1)

Dataset:

100 video games × 10 columns. Example columns:
Title
Platform
Genre
Developer
Publisher
Release Year
ESRB Rating
Metacritic Score
Sales (millions)
Language

CSV Example:

| Title	| Platform | Genre	| Developer	| Publisher	| Year	| ESRB	| MetaScore	| Sales | Language |
| :---: | :---:    | :---:  | :---:     | :---:     | :---: | :---: | :---:     | :---: | :---:    |
| The Legend of Zelda: Breath of the Wild |	Switch	| Adventure	| Nintendo	| Nintendo | 2017 |	E10+ |	97	| 25 |	English |
| God of War |	PS4	Action	| Santa Monica Studio |	Sony Interactive |	2018 |	M	| 94 | 12 | English |

Student Requirements:
 - Read CSV into an ArrayList of objects
 - Create a VideoGame class with 10 attributes
 - Store each row as a VideoGame object in ArrayList<VideoGame>
 - Add / Remove Games
 - Add a new game via user input
 - Remove a game by title or index
 - Contains / Search
 - Check if a game is in the library (by title, developer, or genre)
 - Get / Set
 - Retrieve a game by index
 - Update attributes of a game (like score or sales)

Optional Extras for Challenge:
 - Sort games by sales, Metacritic score, or release year
 - Filter games by platform, genre, or ESRB rating
 - Calculate average sales per platform
 - Save changes back to CSV
 - Why This Works for AP CSA

Submit your finished code as a .java file.  Provide appropriate comments within your program.  Use Java Time API to display Local Date Time.  Submit one document for your test case(s) showing that program works as intended (pdf).

---
---

#### Project: Movie Ratings Database (Option 2)

Dataset:

100 movies × 10 columns. Example columns:
Title
Genre
Director
Year
Runtime (minutes)
IMDb Rating
Rotten Tomatoes Rating
Box Office Gross
Language
Country

CSV Example:

| Title	| Genre	 | Director	| Year	| Runtime |IMDb | RT |	BoxOffice |	Language | Country |
| :---: | :---:  | :---:  | :---:     | :---:     | :---: | :---: | :---: | :---: | :---:  |
| Inception |	Sci-Fi | Nolan | 2010 |	148	| 8.8 |	87	| 829895144 | English | USA |
| Spirited Away | Fantasy |	Miyazaki |	2001 | 125	| 8.6 | 97 | 355467855 | Japanese | Japan |

Student Requirements:

- Read CSV into an ArrayList of objects
- Create a Movie class with 10 attributes.
- Store each row as a Movie object in an ArrayList<Movie>.
- Add / Remove Movies
- Add a new movie via user input.
- Remove a movie by title or index.
- Contains / Search
- Check if a movie is in the database (e.g., by title or director).
- Get / Set
- Retrieve a movie by index.
- Update attributes of a movie (e.g., change IMDb rating).


Bonus Features (Optional)
- Sort movies by year, rating, or box office.
- Filter by genre or director.
- Calculate average rating per genre.
- Save changes back to CSV.
- Why This Works for AP CSA



Encourages data handling skills with CSV parsing.


---


## 7.8 Ethical Issues Around Data Collection

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

