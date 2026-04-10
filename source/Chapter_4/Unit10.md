# Unit 10


## Project Recursion Game

<details><summary>Project Instructions - Click Here</summary>

### AP CSA Recursion Project: Choose Your Challenge

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
S * |
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
| --------------------- | ------ | ------------------------------------ |
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

**The Two Key Parts that every recursive method must have:**
1. **Base Case** (Stopping Point)
This is the condition where the method stops calling itself. Without it, the program would run forever (and crash).

3. **Recursive Case** (The Work)
This is where the method calls a small part of the problem within method itself with a smaller input.

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

#### When Should You Use Recursion?

Recursion is especially useful when problems:
* Can be broken into smaller identical problems
* Have a natural “divide and conquer” structure
* Involve trees, hierarchies, or nested data

**Examples:**
* Factorials
* Searching (Binary Search)
* Sorting (Merge Sort)
* File systems and organization charts


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



Manager:
   - Has a base salary.
   - Has a list of subordinates (other Employee objects — either RegularEmployee`s or other Manager`s).
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

    Recursive Searching (Binary Search):
    Binary search is a commonly used searching algorithm that works efficiently on 
    sorted arrays. It divides the array into two halves and compares the target 
    element with the middle element. Based on the comparison, it either continues 
    searching in the left half or the right half of the array. Here's an example of 
    recursive binary search in Java:
    
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

In this example, the binarySearch() method performs a recursive binary search on the sorted array to find the target element. It takes the array, target element, low index, and high index as parameters. If the low index becomes greater than the high index, it means the target element is not present in the array, so it returns -1. Otherwise, it calculates the mid index and compares the element at that index with the target element. If they match, it returns the index. If the element at mid is greater than the target element, it recursively calls binarySearch() on the left half of the array, otherwise on the right half.

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

In this example, the mergeSort() method performs recursive merge sort on the array. It takes the array, left index, and right index as parameters. It recursively calls itself to sort the left half and the right half of the array, and then merges the two sorted halves using the merge() method. The merge() method merges the two sorted halves into a single sorted array.

Both examples demonstrate the power of recursion in searching and sorting algorithms. Recursive searching allows for efficient retrieval of elements from sorted data, while recursive sorting algorithms provide efficient ways to sort arrays or collections.
