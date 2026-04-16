# Unit 10


## Project Recursion Game

<details><summary>Project Instructions - Click Here</summary>

### AP CSA Recursion Project:

**Project Overview**

You will choose **ONE** of the following recursive problem-solving challenges:

**Option A:** Maze Solver

**Option B:** Sudoku Solver

Your goal is to design and implement a **recursive backtracking algorithm** that solves your chosen problem.

---

**Important Expectation**

> You are not being graded on finishing fast—you are being graded on having a deep **understanding of recursion**.

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
  * Symbols:
    * `'B'` = Begin
    * `'E'` = End
    * `'|'` = Wall
    * `'-'` = Open space
  * Mark solution path (e.g., `'*'`)

**Required Method**

```java
public static boolean solveMaze(char[][] maze, int row, int col)
```


**Optional Extensions for Maze**
* Count number of possible paths
* Shortest path only
* **GUI Extension**
* - Use `JPanel` grid
* - Color path vs walls

---

***Example***

*Input*

```java
B - |
- - |
| - E
```

*Output*

```java
B * |
- * |
| * E
```

---

**Key Ideas**
* Try moving (up/down/left/right)
* If blocked → return false
* If correct path → continue
* If dead end → **backtrack (undo move)**

---

### OPTION B: Sudoku Solver

**Problem**
Fill a 9×9 grid so that:
* Each row has 1–9
* Each column has 1–9
* Each 3×3 box has 1–9

**Requirements**
* Use a **2D array**
  * Use `int[][]`
* Empty cells = `0`
* Must validate placement
* Use Java Time API
* Project Block Header
* Test Cases

**Optional Extensions for Sudoku**
* Count all solutions
* Generate a puzzle
* **GUI Extension**
* Use `JTextField[][]`
* Button to trigger solver

---

**Required Method**

```java
public static boolean solveSudoku(int[][] board)
```

---

**Example**

*Input*

```
5 3 0
6 0 0
0 9 8
```

*Output*

```
5 3 4
6 7 2
1 9 8
```

---

**Key Ideas**
* Find empty cell
* Try numbers 1–9
* If valid → recurse
* If it fails later → **backtrack**

---

**Regardless of the Program that you chose, you must do the following:**

**REQUIRED EXPLANATION**
1. What is your **base case**?
2. Where does **backtracking happen**?
3. What would cause your algorithm to fail?
4. How does the call stack behave?

**TESTING REQUIREMENT**
* Minimum **2 different inputs**
* One must be **more complex**
* Show before + after output

---

**Project Rubric**

| Category              | Points | Description                          |
| --------------------- | :-----: | ------------------------------------ |
| **Recursive Logic**   | 3      | Correct base case + backtracking     |
| **Program Comments**	| 1		 | Appropriate comments on key concepts |
| **Correctness**       | 1      | Produces valid solution              |
| **2D Array Use**      | 1      | Proper traversal/manipulation        |
| **Code Organization** | 1      | Clean structure, readable            |
| **Testing**           | 1      | Multiple test cases                  |
| **Explanation**       | 2      | Clear understanding of recursion     |
|        **Total Points:**| **10** |                                    |

---


**Note: Common Problems**

* “It runs forever” → you are missing base case
* “It almost works” → you are not backtracking properly
* “It skips spots” → Your program is not written correctly -- bad indexing
* “It works once only” → You are modifying shared data incorrectly


</details>

---


## 10.1 Recursion

**Goals**
- Learn about methods that call themselves.
- Trace the results of a recursive call to determine the results.
- Rewrite a recursive algorithm as an interactive method.


**What is [Recursion](https://www.youtube.com/watch?v=ngCos392W4w)?**

Recursion is when a method calls itself to solve a problem.  A helpful way to think about recursion is to imagine a task that repeats in smaller and smaller versions of itself. Each step solves a piece of the problem and passes the rest along. A classic analogy is Russian nesting dolls. You open one doll to find a smaller one inside, and keep going until you reach the smallest doll that cannot be opened. That smallest doll is where the process stops. In recursion, each “smaller doll” is a recursive call. The smallest doll is the base case. 

[Recursion Sample](https://github.com/user-attachments/assets/ffb1039c-d01f-401d-bfcd-97a8e2d11101)

**The Two Key Parts that every recursive method must have:**
1. **Base Case** (Stopping Point)
This is the condition where the method stops calling itself. Without it, the program would run forever (and crash).

3. **Recursive Case** (The Work)
This is where the method calls a small part of the problem within method itself with a smaller input.

The basic structure of a recursive program will look something like this:

```java
public static void Main()
  // base case
  if (baseCaseCondition) { 
    baseCaseSteps
  } 
  else {
    do something
    // recursive call
    recursiveMethod(); 
  }
}
```

**Recursion works** because:
* Each step makes the problem smaller
* Eventually, it reaches a case we already know how to solve
* Then the answers “stack back up”

**When Should You Use Recursion?**
* Can be broken into smaller identical problems
* Have a natural “divide and conquer” structure
* Involve trees, hierarchies, or nested data

**Examples:**
* Factorials
* Searching (Binary Search)
* Sorting (Merge Sort)
* File systems and organization charts


---


***Example:*** **Factorial**

The factorial of a number means multiplying it by all smaller positive integers.

5! = 5 × 4 × 3 × 2 × 1 = 120

**Recursive Thinking**

Instead of doing it all at once, think like this:

- 5! = 5 × 4!
- 4! = 4 × 3!
- 3! = 3 × 2!
- 2! = 2 × 1!
- 1! = 1 ← base case

Using recursion:

```java
public class Factorial {

    public static int factorial(int n) {
        if (n == 1) {
            return 1; // Base case
        } else {
            return n * factorial(n - 1); // Recursive step
        }
    }

    public static void main(String[] args) {
        int number = 5;
        int result = factorial(number);
        System.out.println("Factorial of " + number + " is: " + result);
    }
}
```

**Output**
```java
Factorial of 5 is 120
```

**How the Calls Work (Step-by-Step)**

When you call factorial(5), here’s what happens:

* factorial(5) → 5 × factorial(4)
* factorial(4) → 4 × factorial(3)
* factorial(3) → 3 × factorial(2)
* factorial(2) → 2 × factorial(1)
* factorial(1) → 1 (base case)

Now the program builds the answer back up:

* factorial(2) = 2 × 1 = 2
* factorial(3) = 3 × 2 = 6
* factorial(4) = 4 × 6 = 24
* factorial(5) = 5 × 24 = 120


---


In Java, multiple inheritance can be achieved through interfaces, and we can use an ArrayList along with recursion to demonstrate the concept. Below is a program that models the hierarchy of employees in a company using multiple inheritance through interfaces. We'll also use recursion to calculate the total salary of all employees in the hierarchy.

```java
import java.util.ArrayList;

interface Employee {
    double getSalary();
}

class Manager implements Employee {
    private double baseSalary;
    private ArrayList<Employee> subordinates;

    public Manager(double baseSalary) {
        this.baseSalary = baseSalary;
        this.subordinates = new ArrayList<>();
    }

    public void addSubordinate(Employee employee) {
        subordinates.add(employee);
    }

    public double getSalary() {
        double totalSalary = baseSalary;
        for (Employee subordinate : subordinates) {
            totalSalary += subordinate.getSalary();
        }
        return totalSalary;
    }
}

class RegularEmployee implements Employee {
    private double salary;

    public RegularEmployee(double salary) {
        this.salary = salary;
    }

    public double getSalary() {
        return salary;
    }
}

public class MultipleInheritanceWithArrayListAndRecursion {
    public static void main(String[] args) {
        RegularEmployee employee1 = new RegularEmployee(3000);
        RegularEmployee employee2 = new RegularEmployee(2500);
        RegularEmployee employee3 = new RegularEmployee(2000);

        Manager manager1 = new Manager(5000);
        manager1.addSubordinate(employee1);
        manager1.addSubordinate(employee2);

        Manager manager2 = new Manager(4500);
        manager2.addSubordinate(manager1);
        manager2.addSubordinate(employee3);

        System.out.println("Total salary for manager1 and his subordinates: $" + manager1.getSalary());
        System.out.println("Total salary for manager2 and his subordinates: $" + manager2.getSalary());
    }
}
```

**Sample Output**:
```java
Total salary for manager1 and his subordinates: $10500.0
Total salary for manager2 and his subordinates: $17000.0
```

---

In this program, we have three classes: Employee, Manager, and RegularEmployee. The Employee interface ensures that both Manager and RegularEmployee classes have a getSalary() method. The Manager class contains an ArrayList of subordinates, and the addSubordinate() method is used to add employees to the manager's team.

The main method creates instances of employees and managers, arranges them in a hierarchy, and then calculates the total salary using recursion through the getSalary() method of the Manager class. The program outputs the total salaries for the managers and their subordinates.


---


<details><summary>Let's look at this in another way!</summary>

---

**Manager:**
   - Has a base salary.
   - Has a list of subordinates (other Employee objects — either RegularEmployee's or other Manager's).
   - When `getSalary()` is called, it returns:
     - Its own base salary
     - Plus, the sum of all subordinates' salaries (recursively).

**manager1**: 5000 (own) + 3000 (employee1) + 2500 (employee2) = 10500

**manager2**: 4500 (own) + 10500 (manager1 + his subs) + 2000 (employee3) = 17000

```java
public double getSalary() {
    double totalSalary = baseSalary;
    for (Employee subordinate : subordinates) {
        totalSalary += subordinate.getSalary();  // Recursive call happens here
    }
    return totalSalary;
}
```

---


Another way to look at this:

```java
RegularEmployee e1 = new RegularEmployee(3000);
RegularEmployee e2 = new RegularEmployee(2500);
RegularEmployee e3 = new RegularEmployee(2000);

Manager m1 = new Manager(5000);
m1.addSubordinate(e1);
m1.addSubordinate(e2);

Manager m2 = new Manager(4500);
m2.addSubordinate(m1);
m2.addSubordinate(e3);

```

Now, calling `m2.getSalary()` triggers this:
- `m2.getSalary()`
  - totalSalary = 4500
  - Loop through subordinates:
    - First subordinate is m1 → `m1.getSalary()`
      - totalSalary = 5000
      - Loop through subordinates:
        - `e1.getSalary()` = 3000
        - `e2.getSalary()` = 2500
      - `m1.getSalary()` returns 10500
  - Add 10500 to m2's & e3’s salary → 4500 + 10500 + 2000 = 17000


</details>


---


> <!Note> A recursive method is like saying:
>     “I’ll solve a small part of the problem, and trust that the rest will be solved the same way.”


Recursion is not just a programming trick, it is a way of thinking. Instead of trying to solve a large problem all at once, recursion teaches you to:
* Break problems into smaller, manageable pieces
* Clearly define when to stop
* Trust a repeating process to build the final solution

At first, recursion can feel confusing because the method calls itself. But once you learn to identify the base case and the recursive step, it becomes a powerful and elegant tool. As you continue practicing, you’ll start to recognize patterns where recursion is the natural solution—and in many of those cases, it leads to code that is simpler, cleaner, and easier to understand than traditional loops. The real goal is not just to write recursive programs, but to think recursively—because that skill applies far beyond programming.


## 10.2 Recursive Searching and Sorting

Recursive searching and sorting are techniques in Java where the searching or sorting algorithm calls itself repeatedly on smaller portions of the data until the desired result is found or the data is sorted. Here are explanations and examples of recursive searching and sorting in Java:

**Recursive Searching (Binary Search):** Binary search is a commonly used searching algorithm that works efficiently on sorted arrays. It divides the array into two halves and compares the target element with the middle element. Based on the comparison, it either continues searching in the left half or the right half of the array. 

Here's an example of recursive binary search in Java:
    
```java
public class BinarySearch {
    public static int binarySearch(int[] array, int target, int low, int high) {
        if (low > high) {
            return -1; // target element not found
        }
        
        int mid = (low + high) / 2;
        
        if (array[mid] == target) {
            return mid; // target element found at mid index
        } else if (array[mid] > target) {
            return binarySearch(array, target, low, mid - 1); // search in the left half
        } else {
            return binarySearch(array, target, mid + 1, high); // search in the right half
        }
    }

    public static void main(String[] args) {
        int[] array = { 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 };
        int target = 12;

        int index = binarySearch(array, target, 0, array.length - 1);
        if (index != -1) {
            System.out.println("Element found at index " + index);
        } else {
            System.out.println("Element not found");
        }
    }
}
```

**Output**
```java
Element found at index 5
```

In this example, the `binarySearch()` method performs a recursive binary search on the sorted array to find the target element. It takes the array, target element, low index, and high index as parameters. If the low index becomes greater than the high index, it means the target element is not present in the array, so it returns -1. Otherwise, it calculates the mid index and compares the element at that index with the target element. If they match, it returns the index. If the element at mid is greater than the target element, it recursively calls `binarySearch()` on the left half of the array, otherwise on the right half.

Recursive Sorting (Merge Sort):
Merge sort is a popular sorting algorithm that uses a divide-and-conquer approach. It divides the array into two halves, recursively sorts each half, and then merges the two sorted halves into a single sorted array. Here's an example of recursive merge sort in Java:

```java
public class MergeSort {
    public static void mergeSort(int[] array, int left, int right) {
        if (left < right) {
            int mid = (left + right) / 2;
            mergeSort(array, left, mid); // sort left half
            mergeSort(array, mid + 1, right); // sort right half
            merge(array, left, mid, right); // merge the two sorted halves
        }
    }

    public static void merge(int[] array, int left, int mid, int right) {
        int n1 = mid - left + 1;
        int n2 = right - mid;

        int[] leftArray = new int[n1];
        int[] rightArray = new int[n2];

        for (int i = 0; i < n1; i++) {
            leftArray[i] = array[left + i];
        }
        for (int j = 0; j < n2; j++) {
            rightArray[j] = array[mid + 1 + j];
        }

        int i = 0, j = 0, k = left;

        while (i < n1 && j < n2) {
            if (leftArray[i] <= rightArray[j]) {
                array[k] = leftArray[i];
                i++;
            } else {
                array[k] = rightArray[j];
                j++;
            }
            k++;
        }

        while (i < n1) {
            array[k] = leftArray[i];
            i++;
            k++;
        }

        while (j < n2) {
            array[k] = rightArray[j];
            j++;
            k++;
        }
    }

    public static void main(String[] args) {
        int[] array = { 8, 3, 1, 5, 9, 2, 6, 4, 7 };
        int n = array.length;

        System.out.println("Original Array: " + Arrays.toString(array));

        mergeSort(array, 0, n - 1);

        System.out.println("Sorted Array: " + Arrays.toString(array));
    }
}
```

**Output**
```java
Original Array: [8, 3, 1, 5, 9, 2, 6, 4, 7]
Sorted Array: [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

In this example, the `mergeSort()` method performs recursive merge sort on the array. It takes the array, left index, and right index as parameters. It recursively calls itself to sort the left half and the right half of the array, and then merges the two sorted halves using the `merge()` method. The `merge()` method merges the two sorted halves into a single sorted array.

Both examples demonstrate the power of recursion in searching and sorting algorithms. Recursive searching allows for efficient retrieval of elements from sorted data, while recursive sorting algorithms provide efficient ways to sort arrays or collections.


---


## 10.3 Lambda Expressions

Lambda expressions allow you to treat functionality as method arguments, enabling functional programming in Java. They were introduced in Java 8.

**Basic Syntax:**

```java
(parameters) -> expression
// or
(parameters) -> { statements; }
```

Why do we want to code this way?

**Conciseness:** Reduces boilerplate code
**Readability:** Makes intent clearer
**Functional Programming:** Enables passing behavior as data

**Simple Example:**

```java
// Before (Anonymous Class)
Runnable r1 = new Runnable() {
    @Override
    public void run() {
        System.out.println("Hello");
    }
};

// After (Lambda)
Runnable r2 = () -> System.out.println("Hello");
```

**2. Lambdas and the forEach Method**
**The `forEach Method`:** The `forEach` method accepts a `Consumer<T>` functional interface and applies an operation to each element.

**Example:** Iterating Over a List

```java
import java.util.List;
import java.util.Arrays;

List<String> names = Arrays.asList("Alice", "Bob", "Charlie");

// Traditional for-each loop
for (String name : names) {
    System.out.println(name);
}

// Using forEach with Lambda
names.forEach(name -> System.out.println(name));

// Method reference (shorthand)
names.forEach(System.out::println);
Multi-line Lambda
names.forEach(name -> {
    String upper = name.toUpperCase();
    System.out.println(upper);
});
```


---

**3. Predicates and Lambdas**

**What is a Predicate?**
- A `Predicate<T>` is a functional interface that takes an argument and returns a boolean.

```java
@FunctionalInterface
interface Predicate<T> {
    boolean test(T t);
}

/* Common Use Cases:

- Filtering collections
- Conditional logic
- Validation
*/


// Example: Filtering Numbers
import java.util.List;
import java.util.Arrays;
import java.util.function.Predicate;

List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// Predicate to find even numbers
Predicate<Integer> isEven = n -> n % 2 == 0;

// Filter using predicate
numbers.stream()
       .filter(isEven)
       .forEach(n -> System.out.print(n + " "));
// Output: 2 4 6 8 10
Predicate Methods
Predicate<Integer> isEven = n -> n % 2 == 0;
Predicate<Integer> isGreaterThan5 = n -> n > 5;

// AND
Predicate<Integer> both = isEven.and(isGreaterThan5);

// OR
Predicate<Integer> either = isEven.or(isGreaterThan5);

// NOT
Predicate<Integer> notEven = isEven.negate();
```

---


**4. Predicate and Lambda for Your Dog**

```java
class Dog {
    private String name;
    private int age;
    private String breed;
    
    public Dog(String name, int age, String breed) {
        this.name = name;
        this.age = age;
        this.breed = breed;
    }
    
    public String getName() { return name; }
    public int getAge() { return age; }
    public String getBreed() { return breed; }
    
    @Override
    public String toString() {
        return name + " (" + breed + ", " + age + " years old)";
    }
}

// Creating Predicates for Dogs
import java.util.List;
import java.util.Arrays;
import java.util.function.Predicate;
import java.util.stream.Collectors;

List<Dog> dogs = Arrays.asList(
    new Dog("Buddy", 3, "Golden Retriever"),
    new Dog("Max", 7, "German Shepherd"),
    new Dog("Bella", 2, "Labrador"),
    new Dog("Charlie", 5, "Beagle")
);

// Predicate: Find adult dogs (age >= 3)
Predicate<Dog> isAdult = dog -> dog.getAge() >= 3;

// Predicate: Find Golden Retrievers
Predicate<Dog> isGoldenRetriever = dog -> "Golden Retriever".equals(dog.getBreed());

// Combined Predicate: Adult Golden Retrievers
Predicate<Dog> adultGolden = isAdult.and(isGoldenRetriever);

// Using with filter
List<Dog> adultDogs = dogs.stream()
    .filter(isAdult)
    .collect(Collectors.toList());

List<Dog> goldenRetrievers = dogs.stream()
    .filter(isGoldenRetriever)
    .collect(Collectors.toList());

List<Dog> adultGoldens = dogs.stream()
    .filter(adultGolden)
    .collect(Collectors.toList());

// Print results
adultDogs.forEach(dog -> System.out.println(dog.getName() + " is an adult"));
Teaching Tip
Have students create their own predicates like:

isPuppy (age < 1)
isNamedBuddy (name equals "Buddy")
isOlderThan(dog) (compare ages)
```

---

**5. Predicate and Lambda for Your Horse**

```java
class Horse {
    private String name;
    private int age;
    private double height; // in hands
    private String color;
    
    public Horse(String name, int age, double height, String color) {
        this.name = name;
        this.age = age;
        this.height = height;
        this.color = color;
    }
    
    public String getName() { return name; }
    public int getAge() { return age; }
    public double getHeight() { return height; }
    public String getColor() { return color; }
    
    @Override
    public String toString() {
        return name + " (" + color + ", " + height + " hands, " + age + " years old)";
    }
}
Creating Predicates for Horses
import java.util.List;
import java.util.Arrays;
import java.util.function.Predicate;
import java.util.stream.Collectors;

List<Horse> horses = Arrays.asList(
    new Horse("Spirit", 5, 15.2, "Bay"),
    new Horse("Thunder", 8, 16.0, "Black"),
    new Horse("Whisper", 3, 14.5, "Chestnut"),
    new Horse("Shadow", 10, 15.8, "Gray")
);

// Predicate: Find tall horses (height >= 15.5 hands)
Predicate<Horse> isTall = horse -> horse.getHeight() >= 15.5;

// Predicate: Find young horses (age < 5)
Predicate<Horse> isYoung = horse -> horse.getAge() < 5;

// Predicate: Find specific colors
Predicate<Horse> isBay = horse -> "Bay".equals(horse.getColor());

// Combined: Tall AND Bay horses
Predicate<Horse> tallAndBay = isTall.and(isBay);

// Using with filter
List<Horse> tallHorses = horses.stream()
    .filter(isTall)
    .collect(Collectors.toList());

List<Horse> youngHorses = horses.stream()
    .filter(isYoung)
    .collect(Collectors.toList());

List<Horse> tallBayHorses = horses.stream()
    .filter(tallAndBay)
    .collect(Collectors.toList());

// Print results
tallHorses.forEach(horse -> System.out.println(horse.getName() + " is tall"));
```

---

> **Common Student Misconceptions**
> "Lambdas replace all loops" → Not true; use when appropriate
> "Predicates must be separate classes" → Can be inline lambdas
> "Lambdas are slower" → Performance is comparable to anonymous classes
> "Cannot use local variables" → Can use effectively final variables
> 


Assessment Ideas

Code Conversion: Give students anonymous class code, have them convert to lambdas
Predicate Writing: Provide requirements, students write matching predicates
Debugging: Give broken lambda code, students fix it
Creative Extension: Have students create their own animal class with custom predicates



Here are two engaging, challenging projects designed to solidify student understanding of Lambda Expressions, Functional Interfaces (Predicate, Consumer, Function), and the Stream API.

### Project 1: The "Galactic Zoo" Manager

**Theme:** Students manage a database of alien species visiting a space station.
**Challenge Level:** High (Requires combining multiple stream operations and custom logic).
**Scenario:** The Space Station Alpha has received 50+ alien species. The station commander needs a system to filter, sort, and analyze the population based on complex biological traits. The system must be built entirely using `Streams` and `Lambdas` (no traditional for loops allowed for data processing).

**Requirements:**

**Data Structure:** Create a `class Alien` with fields: `name`, `species`, `intelligenceLevel (1-10)`, `dangerLevel (1-10)`, `homePlanet`, and `hasWings (boolean)`.

**Population Generation:** Create a list of at least 20 unique aliens.

**Feature 1:** The Danger Filter (Predicate)
* Create a Predicate<Alien> that identifies "Safe Visitors" (Danger Level < 3 AND Intelligence > 5).
* Use .filter() to display only safe visitors.

**Feature 2:** The Intelligence Sort (Comparator via Lambda)
* Sort the entire list by intelligenceLevel descending.
* If intelligence is equal, sort alphabetically by name.
  * Hint: Use Comparator.comparing(...).thenComparing(...).

**Feature 3**: The Planet Report (Grouping)
* Group aliens by homePlanet.
* Print a report showing which planet has the highest average intelligence.

**Feature 4:** The "Wing" Transformation (Function)
* Create a Function<Alien, String> that generates a flight status string: "Can Fly" if wings are true, "Grounded" if false.
* Map the list to a list of these strings and print them.

**Feature 5:** The Commander's Summary (Reduce/Collect)
* Calculate the total "Threat Score" of the station (Sum of all dangerLevel * intelligenceLevel).
* Print the result using .reduce().

***Constraints:***
* No for, while, or do-while loops for processing the list.
* Must use at least 3 different functional interfaces (Predicate, Function, Consumer, Comparator).


---


### Project 2: The "Eco-Economy" Simulator

**Theme:** Managing a dynamic market for renewable energy resources.
**Challenge Level:** Medium-High (Focuses on state mutation, side effects, and complex filtering).
**Scenario:** Students are building the backend for a green energy trading platform. They need to simulate market fluctuations, identify profitable trades, and generate automated alerts for investors.

--- 

**Requirements:**

**Data Structure:** Create a `class EnergyResource` with fields: `resourceType (Solar, Wind, Hydro, Nuclear)`, `costPerUnit`, `efficiencyRating (0.0 - 1.0)`, `availability (boolean)`, and `carbonFootprint (int)`.
Market Simulation: Generate a list of 15 resources with random values.

**Feature 1:** The "Green Deal" Filter (Predicate)

Define a `predicate` that finds resources that are: `availability == true AND carbonFootprint < 50 AND efficiencyRating > 0.7`.
Display the names of these resources.


**Feature 2:** Dynamic Pricing (Function)

Create a `Function<EnergyResource`, Double> that calculates a "Market Price" based on: `costPerUnit * (1.0 / efficiencyRating)`.
Map the list to a new list of prices and find the minimum and maximum price.


**Feature 3:** The Investor Alert (Consumer)

Create a `Consumer<EnergyResource>` that prints a formatted alert message: " ALERT: [Name] is a high-value investment!" if the calculated Market Price is below 10.0.
Apply this consumer to the filtered list of "Green Deals".


**Feature 4:** The Efficiency Dashboard (Partitioning)

Partition the resources into two groups: "High Efficiency" (> 0.8) and "Low Efficiency".
Print the count of resources in each group.


**Feature 5:** The Total Carbon Impact (Reduce)

Calculate the total carbon footprint of only the "High Efficiency" group.



**Constraints**

Must use Stream.collect(Collectors.partitioningBy(...)) for Feature 4.
Must use Stream.reduce() for Feature 5.
No manual iteration.


**10-Point Rubric**
This rubric applies to both projects. It emphasizes correct usage of Lambdas over just getting the right output.
CriteriaPointsExcellent (Full Points)Proficient (Partial Points)Needs Improvement (Low/No Points)Lambda Syntax & Usage3Correctly uses -> syntax in all required places. Uses method references where appropriate. No compilation errors.Uses lambdas but makes minor syntax errors or overuses anonymous classes where lambdas were required.Relies heavily on anonymous inner classes or traditional loops instead of lambdas. Syntax errors prevent compilation.Functional Interfaces2Correctly implements Predicate, Function, Consumer, and Comparator as distinct variables/methods.Implements some interfaces correctly but confuses roles (e.g., using a Consumer where a Predicate is needed).Fails to use functional interfaces; logic is embedded directly in loops or methods without abstraction.Stream Operations2Correctly chains filter, map, sorted, collect, reduce, and forEach in a logical pipeline.Uses streams but misses a step (e.g., forgets to collect after filter) or chains incorrectly.Uses streams only for forEach without filtering or mapping. Logic is procedural, not functional.Logic & Problem Solving2All business logic (sorting, grouping, calculating) is accurate and meets the specific project constraints.Logic is mostly correct but fails on edge cases (e.g., sorting order is wrong, math formula slightly off).Logic is fundamentally flawed; results do not match the scenario requirements.Code Quality & Readability1Code is clean, well-commented, variable names are descriptive, and formatting is consistent.Code is readable but lacks comments or has inconsistent naming.Code is messy, hard to read, or lacks necessary comments explaining the lambda logic.Total10


The "Loop" Trap: If a student uses a for loop to iterate the list, deduct points immediately from Stream Operations. The whole point is to practice the Stream API.
Method References: Award bonus points (extra credit) if a student uses System.out::println instead of x -> System.out.println(x) where appropriate.
Chaining: Look for "Stream Chaining." A student who writes list.stream().filter(...).forEach(...) is demonstrating a higher level of understanding than one who assigns intermediate lists to variables unnecessarily.
Debugging: Encourage students to use peek() during development to debug their streams, but remind them not to leave it in the final submission.

These projects move beyond "Hello World" lambdas and force students to think about data transformation pipelines, which is the core power of Java 8+.

To make the Eco-Economy Simulator realistic and educationally valuable for AP CSA students, the "market fluctuations" should be modeled using simple mathematical logic that students can implement with basic arithmetic and randomization.Since this is a Java project, the fluctuations should be deterministic enough to test but random enough to require dynamic code.Here are the three most impactful market fluctuation types to focus on, along with how to implement them in code:1. Weather Dependency Volatility (The "Sun/Wind" Factor)
Impact: Renewable energy sources (Solar, Wind) are intermittent. Their "availability" and "efficiency" fluctuate wildly based on simulated weather, directly impacting supply and price.

Why it matters: It teaches students that availability isn't a static boolean; it's a dynamic state.
The Logic:

Solar: Efficiency drops to 0% at night (simulated by a random "time of day" or weather event) and drops on cloudy days.
Wind: Efficiency spikes during storms but drops to 0% during calm periods.
Hydro/Nuclear: Stable (low volatility).


Implementation Idea:
// Simulate a "Day" event
double weatherFactor = Math.random(); // 0.0 to 1.0

if (resource.getType().equals("Solar")) {
    // Solar is useless if weatherFactor < 0.3 (cloudy/rainy)
    resource.setEfficiency(resource.getBaseEfficiency() * (weatherFactor > 0.3 ? 1.0 : 0.1));
    resource.setAvailability(weatherFactor > 0.3);
} else if (resource.getType().equals("Wind")) {
    // Wind is great if weatherFactor > 0.7 (stormy)
    resource.setEfficiency(resource.getBaseEfficiency() * (weatherFactor > 0.7 ? 1.5 : 0.2));
    resource.setAvailability(weatherFactor > 0.5);
}

Student Challenge: Write a Predicate that filters for resources that are currently viable (efficiency > 0.5 AND availability == true) after the weather update.

2. Policy Subsidy Shocks (The "Government" Factor)
Impact: Governments often subsidize specific green technologies, causing sudden price drops or demand spikes. This affects the costPerUnit calculation.

Why it matters: It introduces the concept of external variables affecting internal state.
The Logic:

Randomly select a resource type (e.g., "Solar") to receive a subsidy.
The costPerUnit for that type drops by 20-40%.
Alternatively, a "Carbon Tax" increases the costPerUnit for high-carbon resources (Nuclear/Coal if included).


Implementation Idea:
// Simulate a policy change
String subsidizedType = getRandomResourceType(); // e.g., "Wind"
double subsidyAmount = 0.30; // 30% discount

resources.forEach(r -> {
    if (r.getResourceType().equals(subsidizedType)) {
        r.setCostPerUnit(r.getCostPerUnit() * (1 - subsidyAmount));
        System.out.println("Policy Update: " + subsidizedType + " subsidized!");
    }
});

Student Challenge: Use a Consumer to apply the subsidy to the list, then use a Function to recalculate the "Market Price" based on the new cost.

3. Demand Surges (The "Grid Load" Factor)
Impact: Energy demand fluctuates based on time of day or season. High demand drives up the "Market Price" (supply/demand economics).

Why it matters: It teaches students how to calculate dynamic pricing based on a global variable.
The Logic:

Create a globalDemandMultiplier (e.g., 0.8 for night, 1.5 for peak afternoon).
Market Price = (Cost / Efficiency) * DemandMultiplier.
If demand is high, prices go up, making inefficient resources suddenly profitable.


**Implementation Idea:**
```java
double demandMultiplier = (Math.random() > 0.5) ? 1.4 : 0.9; // Peak or Off-Peak

// Calculate new market price for ALL resources
List<Double> newPrices = resources.stream()
    .map(r -> r.calculateMarketPrice(demandMultiplier)) // Function
    .collect(Collectors.toList());
```

**Challenge:** Filter for resources where `Market Price < 10.0 // (Good Deal)` specifically during a high-demand surge.


**How to Integrate This into the Project**
Instead of just generating a static list, you will create a "Simulation Loop":

Initialize: Create the 15 resources.
Loop (e.g., 10 "Days"):

Step A: Apply Weather Fluctuations (Update efficiency/availability).
Step B: Apply Policy Shocks (Randomly change costs).
Step C: Apply Demand Surge (Calculate new prices).
Step D: Alert Generation: Use a Predicate to find "Profitable Trades" (Price < Cost * 1.1) and a Consumer to print alerts.
Step E: Dashboard: Use Collectors.groupingBy to show average efficiency per resource type for that day.



#### AP CSA & Oracle Foundations

***Object-Oriented Design***: Students must update fields in their EnergyResource objects (Encapsulation).

**Lambda Mastery:**
* **Predicate**: "Is this resource viable right now?"
* **Function**: "What is the price given the current demand?"
* **Consumer**: "Print the alert."
* **Logic Complexity:** It moves beyond "static data" to "dynamic systems," which is exactly what the Oracle Foundations exam tests (handling real-world variability).
* **Debugging:** Students can easily see if their logic is wrong ("Solar is producing power at night" = bug in the weather logic).

Sample MarketEvent class:

```java
enum EventType { WEATHER_STORM, POLICY_SUBSIDY, PEAK_DEMAND }

class MarketEvent {
    private EventType type;
    private double intensity; // 0.0 to 1.0

    public void apply(List<EnergyResource> resources) {
        switch(type) {
            case WEATHER_STORM:
                // Logic to lower solar, raise wind
                break;
            case POLICY_SUBSIDY:
                // Logic to lower cost
                break;
            // ...
        }
    }
}
```


You can use `resources.forEach(r -> event.applySingle(r))` or a similar pattern.
This will be a mini-simulation engine, for you to develop this project.

Below is a scaffolded implementation for **Steps B, C, and D**. 

**Step B: Apply Policy Shocks (Randomly Change Costs):**

> **Explanation:**
> "The government announced a new subsidy for Wind Energy. It is now cheaper to buy. In your code, you need to pick a random resource type and lower its cost for everyone in that category.
> You will use a Consumer to visit every resource and apply the change."


**Student Template:**


```java
// 1. Define the possible policy changes
String[] policyTypes = {"Solar", "Wind", "Hydro", "Nuclear"};
String targetResource = policyTypes[(int)(Math.random() * policyTypes.length)]; // Pick one randomly
double discountRate = 0.20; // 20% discount

System.out.println("POLICY UPDATE: Government subsidizes " + targetResource + "!");

// 2. Apply the change using a Consumer
// A Consumer takes an object and does something to it (returns nothing)
resources.forEach(resource -> {
    if (resource.getResourceType().equals(targetResource)) {
        // Lower the cost by 20%
        double newCost = resource.getCostPerUnit() * (1.0 - discountRate);
        resource.setCostPerUnit(newCost);
        
        // Optional: Print what happened for this specific item
        System.out.println("   -> " + resource.getName() + " cost dropped to $" + newCost);
    }
});
```

**Key Concepts:**
* `forEach`: Loops through the list.
* `if`: Checks if the current item matches the policy.
* `setCostPerUnit`: Updates the object's state.


**Step C: Apply Demand Surge (Calculate New Prices)**

> **Explanation:**
> Now that the costs have changed, you will need to calculate the 'Market Price'. Unfortunately, the market is crazy today. Sometimes demand is high (prices go up), sometimes low (prices go down). You will create a 'Demand Multiplier' and use a function to calculate the new price for every resource."


Student Template:

```java
// Simulate the market (Random number between 0.8 and 1.5)
double demandMultiplier = 0.8 + (Math.random() * 0.7); 
String marketCondition = (demandMultiplier > 1.2) ? "HIGH DEMAND" : "LOW DEMAND";

System.out.println("MARKET STATUS: " + marketCondition + " (Multiplier: " + demandMultiplier + ")");

// Calculate new prices using a Function
// A Function takes an object and RETURNS a new value (Double)
List<Double> newPrices = resources.stream()
    .map(resource -> {
        // Formula: (Cost / Efficiency) * Demand
        // Note: Handle division by zero if efficiency is 0
        double baseValue = resource.getCostPerUnit() / (resource.getEfficiencyRating() == 0 ? 1 : resource.getEfficiencyRating());
        return baseValue * demandMultiplier;
    })
    .collect(Collectors.toList());

// Update the resources with the new calculated prices
// (Sync the list back to the objects)
for (int i = 0; i < resources.size(); i++) {
    resources.get(i).setCurrentMarketPrice(newPrices.get(i));
}

System.out.println("Prices updated for all resources.");
```


**Key Concepts:**
* `stream().map()`: Transforms every object into a new value (the price).
* **Formula**: They just plug in their math logic here.
* **Syncing**: Remind them that map creates a new list of numbers, so they have to put those numbers back into the objects.

---

**Step D: Alert Generation (Predicate + Consumer)**

> **Explanation:**
> A trade is considered profitable if the Market Price is low enough compared to the cost.
> You will use a 'Predicate' to filter the list for these deals, and a 'Consumer' to shout out the alerts!"


Student Template:

```java
// 1. Define the Profitability Rule (Predicate)
// Returns TRUE if the deal is good (Price is less than 110% of the base cost)
Predicate<EnergyResource> isProfitableTrade = resource -> {
    // Logic: Is the current market price less than 1.1 * the base cost?
    // (We assume a 10% profit margin is the threshold)
    return resource.getCurrentMarketPrice() < (resource.getCostPerUnit() * 1.1);
};

System.out.println("SCANNING FOR PROFITABLE TRADES...");

// Filter and Alert
resources.stream()
    .filter(isProfitableTrade) // Keep only the ones that match the Predicate
    .forEach(resource -> {     // Do something for each one (Consumer)
        double profitMargin = resource.getCostPerUnit() - resource.getCurrentMarketPrice();
        System.out.println("ALERT: Buy " + resource.getName() + "! " +
                           "Market Price: $" + String.format("%.2f", resource.getCurrentMarketPrice()) + 
                           " | Potential Profit: $" + String.format("%.2f", profitMargin));
    });

// If no alerts, print a message
if (resources.stream().noneMatch(isProfitableTrade)) {
    System.out.println("💤 No profitable trades found today. Wait for the next cycle.");
}
```

**Key Concepts:**
* **filter(predicate)**: The "Gatekeeper". Only lets items through if the method returns true.
* **forEach(consumer)**: The "Action Taker". Prints the alert.
* **noneMatch**: A handy helper to check if the list is empty after filtering.

---

Below is a skeleton that you can use to complete the logic inside the loop.

```java
// Main Simulation Loop
for (int day = 1; day <= 10; day++) {
    System.out.println("\n========== DAY " + day + " ==========");

    // Step A: Weather (Already done in previous lesson, just call it)
    applyWeatherFluctuations(resources); 

    // Step B: Policy Shocks
    applyPolicyShocks(resources); 

    // Step C: Demand Surge
    applyDemandSurge(resources); 

    // Step D: Alerts
    generateAlerts(resources); 

    // Step E: Dashboard (Optional for now)
    // generateDashboard(resources); 
}
```

**Do not write the whole thing at once.**

Before running the loop, print the initial list.
Start with Step B - Run the code and see the costs change.
Add Step C - Show how the prices change based on the multiplier.
Add Step D - Show the alerts appearing only when the math works out.


**If you get stuck use *Print Debugging*.**
* add `System.out.println` inside the lambdas to see what is happening within each object.

---

> **Computational Thinking Goal:**
> Define the "rules" of a system and let the computer execute the data generation.
> This is what software engineers do when they build a simulation.
> The numbers are random, but the logical relationships are based on real-world facts they researched.
> "Think of this like a video game. When you play SimCity, the game doesn't connect to the real city hall to get traffic data.
> It uses math to simulate traffic. Your program is the engine that creates the world."

**Research the "Rules", and not the "Numbers".**

Research the concepts below to determine their ranges and formulas:
* Solar
  * "How much does solar efficiency drop at night?"
     * **Code Implementation:** `if (time == night) efficiency = 0;`
  * "What is the best efficiency for solar?"

* Wind turbines
  * "Do wind turbines work better in storms?"
     * **Code Implementation:** `if (windSpeed > 50) efficiency = 0; else efficiency = windSpeed * 0.02;`
  * "What is the best range to determine the best efficiency for wind turbines?"

* Nuclear
  * "Does nuclear produce more energy than comparable green energy sources?"
     * "What is a typical cost for a solar panel vs. nuclear?"
     * **Code Implementation:** Set `baseCost` for `Solar` to 50 and `Nuclear` to 500.


---


3. The "Data Factory" Method

**Example Program:**


```java
public class EnergyDataFactory {
    
    // Helper to generate random numbers in a range
    public static double randomInRange(double min, double max) {
        return min + (Math.random() * (max - min));
    }

    public static List<EnergyResource> generateInitialMarket(int count) {
        List<EnergyResource> market = new ArrayList<>();
        String[] types = {"Solar", "Wind", "Hydro", "Nuclear"};
        String[] names = {"SunRay", "Zephyr", "RiverFlow", "AtomCore", "Breeze", "Tide", "GeoThermal"};

        for (int i = 0; i < count; i++) {
            String type = types[(int)(Math.random() * types.length)];
            
            // Set realistic BASE ranges based on research
            double baseCost = 0;
            double baseEfficiency = 0;
            
            if (type.equals("Solar")) {
                baseCost = randomInRange(40, 60);
                baseEfficiency = randomInRange(0.6, 0.9);
            } else if (type.equals("Wind")) {
                baseCost = randomInRange(30, 50);
                baseEfficiency = randomInRange(0.5, 0.85);
            } else if (type.equals("Hydro")) {
                baseCost = randomInRange(80, 120);
                baseEfficiency = randomInRange(0.8, 0.95);
            } else { // Nuclear
                baseCost = randomInRange(200, 300);
                baseEfficiency = randomInRange(0.9, 0.98);
            }

            // Create the object
            EnergyResource res = new EnergyResource(
                names[(int)(Math.random() * names.length)] + "_" + i,
                type,
                baseCost,
                baseEfficiency,
                true, // Initially available
                (int)randomInRange(10, 100) // Carbon footprint
            );
            
            market.add(res);
        }
        return market;
    }
}
```
