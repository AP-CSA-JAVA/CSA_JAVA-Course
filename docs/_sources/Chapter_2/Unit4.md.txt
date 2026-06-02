# Unit 4 - Data Collections
*AP Exam Weighting: 30–40%*

---

## 4.1 Ethical and Social Issues Around Data Collection

**Goals**
- Understand the ethical responsibilities involved in collecting and handling data.

As programs collect increasing amounts of user data, ethical considerations become critical:

- **Informed Consent:** Users should know what data is collected and how it will be used.
- **Data Minimization:** Only collect data that is necessary for the intended purpose.
- **Security:** Protect stored data from unauthorized access or breaches.
- **Transparency:** Be open about data practices in privacy policies.
- **Bias in Data:** Datasets that are not representative can produce biased algorithms that discriminate against certain groups.

*Refer to Unit 3.2 for a deeper discussion on the ethical and social implications of computing systems.*

---

## 4.2 Introduction to Using Data Sets

**Goals**
- Understand how data sets are represented in programs.
- Identify appropriate data structures for different types of data.

A **data set** is a collection of related values. In Java, data sets are typically stored in:
- **Arrays**: Fixed-size collections of the same type.
- **ArrayLists**: Dynamic-size collections of objects.
- **2D Arrays**: Table-structured data (rows and columns).
- **Text Files**: External data loaded at runtime.

---

## 4.3 Array Creation and Access

**Goals**
- Represent collections of related primitive or object reference data using arrays.
- Manage relationships in data.

Arrays are a group of variables referred to by a common name. Important points:

- In Java, all arrays are dynamically allocated.
- Java arrays are objects; find the length using `arrayName.length`.
- The variables in the array are ordered, and each has an index beginning with 0.
- Arrays in Java are *mutable* — values can be modified after creation.
- The size of the array cannot be altered once initialized.

| Sample Array |   |   |  |  |  |  |  |  |  |  |  |
| ----------- | -- | -- | -- | -- | -- | -- | -- | -- | -- | -- | -- |
| list of items in array -> | A | B | C | D | E | F | G | H | I | J | K |
| array indices -> | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |

**Note:**
- *Square brackets* `[ ]` instantiate the creation of an array and identify the number of elements.
- *Curly brackets* `{ }` are used to store the elements within an array.
- *Index Value* begins with zero. Using an index value outside the range results in an **ArrayIndexOutOfBoundsException**.
- Initializer lists can only be used when you create the array at declaration time.

```java
// Array creation examples
int[] intArray = {10, 20, 30, 40, 50};
boolean[] boolArray = {true, false, true, false, true};
double[] doubleArray = {3.14, 2.71, 1.618, 9.81};
String[] stringArray = {"Apple", "Banana", "Cherry", "Date"};

// Dynamic size from user input
Scanner scanner = new Scanner(System.in);
System.out.print("Enter the length of the array: ");
int length = scanner.nextInt();
int[] numbers = new int[length];
```

---

## 4.4 Array Traversals

**Goals**
- Traverse arrays using standard for loops.

```java
// Traversal with standard for loop
int[] scores = {85, 92, 78, 95, 88};
for (int i = 0; i < scores.length; i++) {
    System.out.println("Score " + i + ": " + scores[i]);
}
```

**Enhanced for Loop (for-each):**

```java
// Enhanced for loop - simpler syntax, no index needed
for (int score : scores) {
    System.out.println(score);
}
```

**Advantages/Disadvantages of Enhanced for Loop:**

| | Standard for | Enhanced for |
| --- | --- | --- |
| Access index | ✅ | ❌ |
| Modify array elements | ✅ | ❌ |
| Simpler syntax | ❌ | ✅ |
| Reverse traversal | ✅ | ❌ |

---

## 4.5 Implementing Array Algorithms

**Goals**
- Implement standard algorithms on arrays: search, sort, min/max, average.

### Sorting Algorithms

**Bubble Sort:**
```java
// Bubble Sort - compares adjacent elements and swaps if needed
for (int i = 0; i < arr.length - 1; i++) {
    for (int j = 0; j < arr.length - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
            // Swap
            int temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
    }
}
```

**Selection Sort:**
```java
// Selection Sort - finds the minimum element and puts it at the beginning
for (int i = 0; i < arr.length - 1; i++) {
    int minIdx = i;
    for (int j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[minIdx]) {
            minIdx = j;
        }
    }
    // Swap
    int temp = arr[minIdx];
    arr[minIdx] = arr[i];
    arr[i] = temp;
}
```

**Insertion Sort:**
```java
// Insertion Sort - builds the sorted array one element at a time
for (int i = 1; i < arr.length; i++) {
    int key = arr[i];
    int j = i - 1;
    while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j];
        j--;
    }
    arr[j + 1] = key;
}
```

**Merge Sort:**
```java
// Merge Sort - divide and conquer recursive approach
public static void mergeSort(int[] arr, int left, int right) {
    if (left < right) {
        int mid = (left + right) / 2;
        mergeSort(arr, left, mid);
        mergeSort(arr, mid + 1, right);
        merge(arr, left, mid, right);
    }
}
```

### Developing Algorithms Using Arrays

**Finding min/max and average:**
```java
int[] data = {15, 7, 23, 4, 42, 16};
int min = data[0];
int max = data[0];
int sum = 0;

for (int val : data) {
    if (val < min) min = val;
    if (val > max) max = val;
    sum += val;
}
double avg = (double) sum / data.length;
System.out.println("Min: " + min + ", Max: " + max + ", Avg: " + avg);
```

### Unit 4 Project - Memory Game

Design a Memory card game using arrays.

---

## 4.6 Using Text Files

**Goals**
- Read data from text files using Java's file I/O classes.

```java
import java.io.File;
import java.util.Scanner;

public class ReadFile {
    public static void main(String[] args) {
        try {
            File file = new File("data.txt");
            Scanner sc = new Scanner(file);
            while (sc.hasNextLine()) {
                String line = sc.nextLine();
                System.out.println(line);
            }
            sc.close();
        } catch (Exception e) {
            System.out.println("File not found: " + e.getMessage());
        }
    }
}
```

---

## 4.7 Wrapper Classes

*(See Unit 1.17 for a full discussion on Wrapper Classes including `Integer`, `Double`, autoboxing, and unboxing.)*

---

## 4.8 ArrayList Methods

**Goals**
- Create and use `ArrayList` objects.
- I will be able to write more complex programs using ArrayList.

An `ArrayList` in Java is a dynamic array-like structure that can store elements of any generic type. Unlike arrays, `ArrayList` can grow or shrink in size as elements are added or removed. It is part of the `java.util` package.

```java
ArrayList<String> list = new ArrayList<>();
list.add("one");
list.add("two");
list.add("three");
```

**Key `ArrayList` Methods:**

| Method | Description |
| ------ | ----------- |
| `add(element)` | Adds element to the end |
| `add(index, element)` | Inserts element at specified index |
| `get(index)` | Returns element at index |
| `set(index, element)` | Replaces element at index |
| `remove(index)` | Removes element at index |
| `remove(object)` | Removes first occurrence of object |
| `size()` | Returns number of elements |
| `contains(element)` | Returns true if element is present |
| `indexOf(element)` | Returns index of first occurrence |
| `clear()` | Removes all elements |

**Array vs ArrayList Comparison:**

| Feature | Array | ArrayList |
|----------------------|-----------------------------------|-----------------------------------|
| **Size** | Fixed size after initialization. | Dynamic size; can grow/shrink. |
| **Type** | Can store primitives or objects. | Can only store objects (use autoboxing for primitives). |
| **Performance** | Faster due to fixed size. | Slower due to resizing overhead. |
| **Resizing** | Cannot be resized. | Automatically resizes. |
| **Methods** | Only `length` property. | Rich set of built-in methods. |

### Activity 4.8.1 - List Algorithms
### Activity 4.8.2 - Auto List
### Project: Student Management System

---

## 4.9 ArrayList Traversals

**Goals**
- Traverse ArrayLists using for loops and enhanced for loops.

```java
ArrayList<String> names = new ArrayList<>();
names.add("Alice");
names.add("Bob");
names.add("Carol");

// Standard for loop (use when modifying or needing index)
for (int i = 0; i < names.size(); i++) {
    System.out.println(i + ": " + names.get(i));
}

// Enhanced for loop (simpler, read-only)
for (String name : names) {
    System.out.println(name);
}
```

**Removing elements during traversal:** When removing elements while traversing, iterate backwards or use an Iterator to avoid `ConcurrentModificationException`:

```java
// Traverse backwards when removing
for (int i = names.size() - 1; i >= 0; i--) {
    if (names.get(i).startsWith("A")) {
        names.remove(i);
    }
}
```

### Activity 4.9.1 - Traversing ArrayLists

---

## 4.10 Implementing ArrayList Algorithms

**Goals**
- Implement standard algorithms on ArrayLists: search, sort, filter.

### Searching

**Linear Search:**
```java
public static int linearSearch(ArrayList<Integer> list, int target) {
    for (int i = 0; i < list.size(); i++) {
        if (list.get(i) == target) {
            return i;
        }
    }
    return -1;  // not found
}
```

**Binary Search** (requires sorted list):
```java
public static int binarySearch(ArrayList<Integer> list, int target) {
    int low = 0;
    int high = list.size() - 1;
    while (low <= high) {
        int mid = (low + high) / 2;
        if (list.get(mid) == target) return mid;
        else if (list.get(mid) < target) low = mid + 1;
        else high = mid - 1;
    }
    return -1;
}
```

### Sorting ArrayLists

```java
import java.util.Collections;

ArrayList<Integer> nums = new ArrayList<>(Arrays.asList(5, 3, 8, 1, 9));
Collections.sort(nums);                    // Ascending
Collections.sort(nums, Collections.reverseOrder());  // Descending
```

**Using Comparator (Oracle Foundation — not on AP exam):**
```java
// Sort by string length
Collections.sort(names, (a, b) -> a.length() - b.length());
```

### Quick Sort Explanation

Quick sort is a divide-and-conquer algorithm:
1. Choose a **pivot** element.
2. **Partition** the array so elements less than pivot go left, greater go right.
3. **Recursively sort** the left and right sub-arrays.

```java
public static void quickSort(int[] arr, int low, int high) {
    if (low < high) {
        int pivotIndex = partition(arr, low, high);
        quickSort(arr, low, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, high);
    }
}
```

### Activity 4.10.1 - Searching
### Activity 4.10.2 - Sorting

---

## 4.11 2D Array Creation and Access

**Goals**
- Represent collections of related data using two-dimensional (2D) array objects.
- Write program code to create elements in 2D array objects.

In Java, a 2D array is organized in rows and columns — like a spreadsheet. Sometimes it is referred to as an array of arrays.

```java
// 3 rows, 5 columns — elements default to 0
int[][] newArray = new int[3][5];

// Initialize with values
int[][] matrix = {
    {1, 2, 3, 4, 5},
    {6, 7, 8, 9, 10},
    {11, 12, 13, 14, 15}
};

// Accessing elements
System.out.println(matrix[1][3]);   // 9 (row 1, column 3)
```

**Note:** When you initialize a 2D array, you must always specify the first dimension (rows), but the second dimension (columns) is optional.

**2D Array vs 1D Array:**

| **Aspect** | **1D Array** | **2D Array** |
|-------------------------|-----------------------------------------------------|-----------------------------------------------------|
| **Syntax** | `type[] arrayName = new type[size];` | `type[][] arrayName = new type[rows][columns];` |
| **Accessing Elements** | `arrayName[index]` | `arrayName[row][column]` |
| **Use Case** | Linear lists | Matrices, grids, tables |

---

## 4.12 2D Array Traversals

**Goals**
- Traverse 2D arrays using nested iteration.

```java
// Traverse entire 2D array
int[][] grid = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};

for (int row = 0; row < grid.length; row++) {
    for (int col = 0; col < grid[row].length; col++) {
        System.out.printf("%4d", grid[row][col]);
    }
    System.out.println();
}
```

**Enhanced for loop with 2D array:**
```java
for (int[] row : grid) {
    for (int val : row) {
        System.out.printf("%4d", val);
    }
    System.out.println();
}
```

---

## 4.13 Implementing 2D Array Algorithms

**Goals**
- Apply standard algorithms to 2D arrays.

```java
// Find the sum of all elements
int sum = 0;
for (int[] row : grid) {
    for (int val : row) {
        sum += val;
    }
}

// Find the largest element
int max = grid[0][0];
for (int[] row : grid) {
    for (int val : row) {
        if (val > max) max = val;
    }
}
```

### Project 4.13.1 - Climate Grid Analysis
### Project 4.13.2 - Battleship

---

## 4.14 Searching Algorithms

**Goals**
- Distinguish between sequential (linear) search and binary search.
- Understand when to use each algorithm.

| | Linear Search | Binary Search |
| --- | --- | --- |
| **Requires sorted data?** | No | Yes |
| **Best case** | O(1) | O(1) |
| **Worst case** | O(n) | O(log n) |
| **Use when** | Unsorted or small data | Sorted, large data |

*See section 4.10 for code examples.*

### Activity 4.14.1 - Searching Practice

---

## 4.15 Sorting Algorithms

**Goals**
- Implement and compare sorting algorithms.
- Understand performance differences between sorting algorithms.

| Algorithm | Best Case | Worst Case | Stable? |
| --------- | --------- | ---------- | ------- |
| Bubble Sort | O(n) | O(n²) | Yes |
| Selection Sort | O(n²) | O(n²) | No |
| Insertion Sort | O(n) | O(n²) | Yes |
| Merge Sort | O(n log n) | O(n log n) | Yes |
| Quick Sort | O(n log n) | O(n²) | No |

*See section 4.5 for full code implementations.*

---

## 4.16 Recursion

**Goals**
- Understand the concept of recursion and base/recursive cases.
- Trace recursive method calls.

A **recursive method** is one that calls itself. Every recursive method needs:
1. **Base case**: The condition that stops the recursion.
2. **Recursive case**: The call that moves toward the base case.

```java
// Factorial - classic recursion example
public static int factorial(int n) {
    if (n == 0 || n == 1) {    // Base case
        return 1;
    } else {
        return n * factorial(n - 1);  // Recursive case
    }
}

// Fibonacci
public static int fibonacci(int n) {
    if (n <= 1) return n;      // Base case
    return fibonacci(n-1) + fibonacci(n-2);  // Recursive case
}
```

---

## 4.17 Recursive Searching and Sorting

**Goals**
- Implement recursive versions of binary search and merge sort.

```java
// Recursive Binary Search
public static int binarySearch(int[] arr, int target, int low, int high) {
    if (low > high) return -1;   // base case: not found
    int mid = (low + high) / 2;
    if (arr[mid] == target) return mid;
    else if (arr[mid] < target) return binarySearch(arr, target, mid + 1, high);
    else return binarySearch(arr, target, low, mid - 1);
}
```

---

## Unit 4 Projects

### Project: Video Game Library (Option 1)
Build a video game library management system using an `ArrayList<VideoGame>`. Include search by title, sort by rating, and display formatted output.

### Project: Movie Ratings Database (Option 2)
Build a movie ratings database using an `ArrayList<Movie>`. Load data from a text file, support searching, sorting, and generating statistics.

### Activity 4.17.1 - Test Scores
### Activity 4.17.2 - Inventory

---

## 4.18 Ethical Issues Around Data Collection

*(See Section 4.1 and Unit 3.2 for full discussion.)*

---

---

# Unit 5 — Inheritance, Polymorphism, and OOP Design
*AP Exam Weighting: Part of Unit 4 (10%) | Suggested Pacing: ~18–20 Class Periods*

> **Note:** This content corresponds to AP CSA Unit 9 (Inheritance) and aligns with the Oracle Java Foundations exam (1Z0-811) topics: superclasses & subclasses, subclass constructors, overriding methods, super methods, inheritance hierarchies, polymorphism, abstract classes, and interfaces.

---

## AP CSA Project: Designing with Inheritance

<details><summary>Click Here</summary>

---

**Project Title:** *Build a Simulation Using Inheritance*

**Project Overview:**

You will design and build a Java program that models a real-world system using **inheritance and polymorphism**.

Your program must include:

* A **superclass** that defines shared behavior
* At least **2–3 subclasses** with specialized behavior
* Use of **method overriding**
* Use of **constructors with `super()`**
* A collection (**ArrayList**) using **polymorphism**
* At least one use of **casting or `instanceof`**
* Clear demonstration of **dynamic method behavior**

---

**Project Theme Options:**

Students choose ONE:

1. **Animal Ecosystem** — Superclass: `Animal`, Subclasses: `Dog`, `Bird`, `Fish`
2. **Vehicle System** — Superclass: `Vehicle`, Subclasses: `Car`, `Truck`, `ElectricCar`
3. **Game Characters** — Superclass: `Character`, Subclasses: `Warrior`, `Mage`, `Archer`
4. **School System** — Superclass: `Person`, Subclasses: `Admin`, `Counselor`, `Teacher`, `Student`
5. **Inter-disciplinary Project** — Your own theme

**Deliverables:**
1. Java Code (`.java` file with appropriate comments)
2. Class Diagram
3. Written Explanation
4. Test Cases (PDF)

</details>

---

## 5.1 Creating Superclasses and Subclasses

**Goals**
- Create an inheritance relationship from a subclass to the superclass.
- Write program code to define a new type by creating superclasses and subclasses.

### Inheritance Keywords

<details><summary>Click Here</summary>

**Core Concepts:**
1. **Inheritance**: The mechanism where one class can inherit fields and methods from another class.
2. **Superclass (Parent Class)**: The class being inherited from.
3. **Subclass (Child Class)**: The class that inherits from the superclass.
4. **`extends` keyword**: Used to indicate that a class is inheriting from another class.
5. **`super` keyword**: Used to refer to the superclass's fields and methods, including calling the superclass constructor.
6. **Method Overriding**: A subclass provides its own implementation of a method already defined in its superclass. Use the `@Override` annotation.
7. **Polymorphism**: The ability to treat an object of a subclass as if it were an object of the superclass.
8. **`instanceof` Operator**: Checks whether an object is an instance of a particular class.

**Key Terms:**
1. **Single Inheritance**: A subclass inherits from only one superclass.
2. **Multilevel Inheritance**: A class can inherit from a subclass, which itself inherits from another superclass.
3. **Hierarchical Inheritance**: Multiple subclasses inherit from a single superclass.
4. **Interface**: Allows a class to inherit behavior (methods) without implementing it, enabling multiple inheritance of behavior.
5. **Abstract Class**: Cannot be instantiated; may contain abstract methods that must be implemented by subclasses.

</details>

In Java, there are four types of inheritance:

**Single Inheritance:**
```java
class Animal {
    void sound() {
        System.out.println("Animals make different sounds.");
    }
}

class Dog extends Animal {
    @Override
    void sound() {
        System.out.println("Dog barks.");
    }
}
```

**Multiple Inheritance (through interfaces):**
```java
interface Swim { void swim(); }
interface Fly { void fly(); }

class Bird implements Swim, Fly {
    public void swim() { System.out.println("Bird can swim."); }
    public void fly() { System.out.println("Bird can fly."); }
}
```

**Multilevel Inheritance:**
```java
class Vehicle { void drive() { ... } }
class Car extends Vehicle { void honk() { ... } }
class Sedan extends Car { void fuelType() { ... } }
```

**Hierarchical Inheritance:**
```java
class Shape { void draw() { ... } }
class Circle extends Shape { void draw() { ... } }
class Square extends Shape { void draw() { ... } }
```

---

## 5.2 Writing Constructors for Subclasses

**Goals**
- Write subclass constructors that call `super()`.
- Properly initialize inherited and new instance variables.

**`protected` vs `private`:**

| Modifier | Same Class | Same Package | Subclass (diff package) | Other Classes |
|------------|------------|--------------|--------------------------|----------------|
| `private` | ✅ | ❌ | ❌ | ❌ |
| `protected`| ✅ | ✅ | ✅ | ❌ |

```java
public class Animal {
    protected String name;

    public Animal(String name) {
        this.name = name;
    }
}

public class Dog extends Animal {
    private String breed;

    public Dog(String name, String breed) {
        super(name);  // Calls the Animal constructor
        this.breed = breed;
    }

    @Override
    public void speak() {
        System.out.println("Dog speaks");
    }
}

// In Main:
Dog dog = new Dog("Buddy", "Labrador");
System.out.println(dog.name);   // Buddy
dog.speak();                    // Dog speaks
```

---

## 5.3 Overriding Methods

**Goals**
- Create an inheritance relationship from a subclass to the superclass.
- Incorporate method overriding in a subclass.

When a class (subclass) extends another class (superclass), it inherits its methods. A subclass can **override** a method of the superclass to provide its **own version**.

```java
public class Animal {
    public void makeSound() {
        System.out.println("Animal makes a sound");
    }
}

public class Cat extends Animal {
    @Override
    public void makeSound() {
        System.out.println("Cat meows");
    }
}

public class Dog extends Animal {
    @Override
    public void makeSound() {
        System.out.println("Dog barks");
    }
}

Animal a = new Dog();
a.makeSound(); // Output: Dog barks  (dynamic method dispatch)
```

Even though `a` is declared as `Animal`, because it was created as a `Dog`, the `Dog`'s version is called. This is **polymorphism**.

**Sample Question:**
```java
Shape s = new Circle();
s.printType();
```
What does `s` print?
<details><Summary>Check Here</Summary>

**`Circle`** — Even though `s` is declared as a `Shape`, it refers to a `Circle` object, so `Circle`'s version of `printType()` runs.

</details>

---

## 5.4 super Keyword

**Goals**
- Use `super()` to call superclass constructors.
- Use `super.method()` to extend behavior.

`super` can be used in **two main ways**:
1. **Call a superclass constructor**: `super(parameters)`
2. **Call a superclass method**: `super.methodName()`

```java
public class Dog extends Animal {
    public Dog(String name, String breed) {
        super(name);  // calls Animal(String name) constructor
        this.breed = breed;
    }

    public void sleep() {
        super.sleep();  // calls Animal's sleep() method first
        System.out.println("Dog also sleeps");
    }
}
```

**Notes:**
- If a superclass has a no-argument constructor, Java automatically inserts `super()`.
- If the superclass only has constructors with parameters, the subclass must explicitly call `super(parameters)`.

---

## 5.5 Creating References Using Inheritance Hierarchies

**Goals**
- Use superclass reference variables to refer to subclass objects.
- Understand upcasting and downcasting.

You can use a **superclass reference variable** to refer to an object of a subclass:

```java
Animal myPet = new Dog();  // Legal! Dog IS-A Animal
myPet.makeSound();          // Output: Dog barks (dynamic dispatch)
```

**Upcasting** (implicit): Assigning a subclass object to a superclass reference.
**Downcasting** (explicit): Casting a superclass reference back to a subclass type.

```java
Animal animal = new Dog("Buddy", "Labrador");  // upcasting

Dog dog = (Dog) animal;  // downcasting — OK if animal IS a Dog
dog.fetch();             // now we can call Dog-specific methods

// Safe casting with instanceof
if (animal instanceof Dog) {
    Dog d = (Dog) animal;
    d.fetch();
}
```

---

## 5.6 Polymorphism

**Goals**
- Use an `ArrayList<Superclass>` to store multiple object types.
- Demonstrate dynamic method calls.

Polymorphism allows objects of different classes to be treated as objects of their common superclass, enabling code reuse and flexibility.

```java
ArrayList<Animal> animals = new ArrayList<>();
animals.add(new Animal());
animals.add(new Dog("Rex", "German Shepherd"));
animals.add(new Cat("Whiskers", "Gray"));

for (Animal a : animals) {
    a.makeSound();  // Each calls its own overridden version
}
// Output:
// Animal makes a sound
// Dog barks
// Cat meows
```

**Polymorphic Parameter Usage:**
```java
public class AnimalShelter {
    public void makeAnimalsSpeak(ArrayList<Animal> animals) {
        for (Animal animal : animals) {
            animal.makeSound();  // Polymorphic call
        }
    }
}
```

---

## 5.7 Object Superclass

**Goals**
- Override `toString()` for meaningful output.
- Understand that every Java class inherits from `Object`.

In Java, the `Object` class is the root superclass for all other classes. Every class implicitly inherits from `Object`.

**`toString()` Method:**
```java
public class Person {
    private String name;
    private int age;

    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    @Override
    public String toString() {
        return "Person [name=" + name + ", age=" + age + "]";
    }
}

Person person = new Person("John Doe", 25);
System.out.println(person);  // Calls toString() automatically
// Output: Person [name=John Doe, age=25]
```

**`equals()` Method:**
```java
@Override
public boolean equals(Object obj) {
    if (this == obj) return true;
    if (obj == null || getClass() != obj.getClass()) return false;
    Person person = (Person) obj;
    return age == person.age && Objects.equals(name, person.name);
}
```

---

## 5.8 Abstract Classes — *Oracle Foundations 1Z0-811*

> **Oracle Exam Note:** Abstract classes and interfaces are tested on the Oracle Java Foundations exam (1Z0-811) and appear in the AP CSA curriculum extension.

An **abstract class** is a class that:
- Cannot be instantiated directly (you cannot do `new AbstractClass()`).
- May contain **abstract methods** (methods without a body that *must* be implemented by subclasses).
- May also contain regular (non-abstract) methods with implementations.
- Is declared using the `abstract` keyword.

```java
// Abstract class
public abstract class Shape {
    protected String color;

    public Shape(String color) {
        this.color = color;
    }

    // Abstract method — no body, must be implemented by subclasses
    public abstract double area();

    // Non-abstract method — has implementation, inherited as-is
    public void displayColor() {
        System.out.println("Color: " + color);
    }
}

// Concrete subclasses
public class Circle extends Shape {
    private double radius;

    public Circle(String color, double radius) {
        super(color);
        this.radius = radius;
    }

    @Override
    public double area() {
        return Math.PI * radius * radius;
    }
}

public class Rectangle extends Shape {
    private double width, height;

    public Rectangle(String color, double width, double height) {
        super(color);
        this.width = width;
        this.height = height;
    }

    @Override
    public double area() {
        return width * height;
    }
}
```

**Using abstract classes with polymorphism:**
```java
ArrayList<Shape> shapes = new ArrayList<>();
shapes.add(new Circle("Red", 5.0));
shapes.add(new Rectangle("Blue", 4.0, 6.0));

for (Shape s : shapes) {
    System.out.printf("%s area: %.2f%n", s.getClass().getSimpleName(), s.area());
    s.displayColor();
}
```

**Key differences: Abstract Class vs Regular Class:**

| | Regular Class | Abstract Class |
| --- | --- | --- |
| Can be instantiated? | ✅ | ❌ |
| Can have abstract methods? | ❌ | ✅ |
| Can have regular methods? | ✅ | ✅ |
| Can have instance variables? | ✅ | ✅ |

---

## 5.9 Interfaces — *Oracle Foundations 1Z0-811*

**Goals**
- Understand what an interface is and how it differs from a class or abstract class.
- Implement one or more interfaces in a class.

An **interface** is a contract that specifies what methods a class must implement, without providing the implementation. Java uses interfaces to achieve multiple inheritance of behavior safely (avoiding the "diamond problem").

```java
// Defining interfaces
interface Flyable {
    void fly();  // implicitly public and abstract
}

interface Swimmable {
    void swim();
}

// A class can implement multiple interfaces
class Duck implements Flyable, Swimmable {
    @Override
    public void fly() {
        System.out.println("Duck is flying");
    }

    @Override
    public void swim() {
        System.out.println("Duck is swimming");
    }
}
```

**Interface with default methods (Java 8+):**
```java
interface Printable {
    void print();  // abstract

    default void printTwice() {  // default method — has a body
        print();
        print();
    }
}
```

**Abstract Class vs Interface:**

| | Abstract Class | Interface |
| --- | --- | --- |
| Can have instance variables? | ✅ | ❌ (only constants) |
| Can have constructors? | ✅ | ❌ |
| Multiple inheritance? | ❌ (single extends) | ✅ (multiple implements) |
| Can have non-abstract methods? | ✅ | ✅ (via `default`) |
| Use when... | Shared base for related classes | Shared behavior for unrelated classes |

**Polymorphism with interfaces:**
```java
ArrayList<Object> entities = new ArrayList<>();
entities.add(new Duck());
entities.add(new Fish());  // implements Swimmable only

for (Object entity : entities) {
    if (entity instanceof Flyable) {
        ((Flyable) entity).fly();
    }
    if (entity instanceof Swimmable) {
        ((Swimmable) entity).swim();
    }
}
```

### Activity 5.9.1 - Interface Implementation
Design an interface `Describable` with a method `describe()`. Create three classes (`Book`, `Movie`, `Song`) that implement `Describable`. Store them in an `ArrayList<Describable>` and call `describe()` on each.

---

## Unit 5 Project — Recursion Game

<details><summary>Project Instructions - Click Here</summary>

### AP CSA Recursion Project:

**Project Overview**

You will choose **ONE** of the following recursive problem-solving challenges:

**Option A:** Maze Solver

**Option B:** Sudoku Solver

Your goal is to design and implement a **recursive backtracking algorithm** that solves your chosen problem.

---

**Important Expectation**

> You are not being graded on finishing fast — you are being graded on having a deep **understanding of recursion**.

---

### OPTION A: Maze Solver

**Problem:** Find a path from **Begin (B)** to **End (E)** in a maze.

**REQUIREMENTS**

You must:
* Minimum size of the maze must be 5 x 5
* Use **recursion with backtracking**
* Write clean, organized methods
* Include **at least 2 test cases**
* Explain your algorithm clearly using comments
* Use Java Time API
* Project Block Header
* Test Cases
* Use a **2D array**
  * Represent maze as `char[][]`
  * Symbols: `'B'` = Begin, `'E'` = End, `'|'` = Wall, `'-'` = Open space
  * Mark solution path (e.g., `'*'`)

**Required Method:**
```java
public static boolean solveMaze(char[][] maze, int row, int col)
```

**Optional Extensions:** Count number of paths, shortest path only, GUI with JPanel

</details>

---

## White Tower Final Project

*(See Final_Project.md for full project details, rubric, and schedule.)*

Your White Tower Project is to design and develop a Java computer program of your own/group choosing that addresses a need at your school, club, or community.

**Required elements:**
- Variables (appropriately named)
- Arrays/ArrayList (more than 3 items)
- Nested iterations
- Loops
- Boolean logic
- Constructors
- Encapsulation
- toString Method
- Inheritance

**Deliverables (due 5/23):**
| Item | Points |
| :--- | :---: |
| Written Proposal and supporting documentation | 10 |
| Program Code (.java file, appropriately commented) | 20 |
| At least four test cases | 12 |
| Video of program running with narration (≤ 2 min) | 8 |
| **TOTAL** | **100** |
