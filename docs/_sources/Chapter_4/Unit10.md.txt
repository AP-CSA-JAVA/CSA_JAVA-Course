# Unit 10

## 10.1 Recursion

**Goals**
- Learn about methods that call themselves.
- Trace the results of a recursive call to determine the results.
- Rewrite a recursive algorithm as an interactive method.


🌀 **What is Recursion?**

**Recursion** is when a function calls **itself** to solve a problem.

It is a clever way of breaking down big problems into smaller ones. Imagine you have a set of **Russian nesting dolls**. You open the biggest one, and inside is another doll. Then you open that one, and there’s another one… and so on.  Eventually, you reach the tiniest doll that doesn’t open.  Recursion works like that — each step opens a smaller version of the same problem, until it reaches the **base case** (the smallest, simplest version that doesn't need any more steps).


💻 **Programming Example: Factorial**

Let’s say you want to find the **factorial** of a number — written like this:

`5! = 5 × 4 × 3 × 2 × 1 = 120`

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

🧠 So if you call `factorial(5)`:
- It calls `factorial(4)`
- Which calls `factorial(3)`
- And so on until `factorial(1)`, which returns 1
- Then it multiplies all the way back up: `2×1`, then `3×2`, etc.


🔁 **Key Parts of Recursion**

1. **Base Case** – The stopping point. Without this, the function would go forever.
2. **Recursive Case** – The part where the function calls itself with a smaller input.


🧩 **Why Use Recursion?**

It’s great for:
- Breaking problems into smaller chunks
- Working with trees or graphs
- Solving puzzles like mazes
- Anything that has a repeating, self-similar structure


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
Total salary for manager1 and his subordinates: $10500.0
Total salary for manager2 and his subordinates: $17000.0

---


<details><summary>Click here</summary>


Manager:
   - Has a base salary.
   - Has a list of subordinates (other Employee objects — either RegularEmployee`s or other Manager`s).
   - When `getSalary()` is called, it returns:
     - Its own base salary
     - Plus, the sum of all subordinates' salaries (recursively).

manager1: 5000 (own) + 3000 (employee1) + 2500 (employee2) = 10500
manager2: 4500 (own) + 10500 (manager1 + his subs) + 2000 (employee3) = 17000

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


In this program, we have three classes: Employee, Manager, and RegularEmployee. The Employee interface ensures that both Manager and RegularEmployee classes have a getSalary() method. The Manager class contains an ArrayList of subordinates, and the addSubordinate() method is used to add employees to the manager's team.

The main method creates instances of employees and managers, arranges them in a hierarchy, and then calculates the total salary using recursion through the getSalary() method of the Manager class. The program outputs the total salaries for the managers and their subordinates.

---


**Recursion** is a concept in programming where a method calls itself in order to solve a problem. It breaks down a problem into smaller, simpler versions of the same problem. Recursion is particularly useful in problems that have a repetitive structure, such as tree traversals, 
factorial calculations, and Fibonacci sequences.

**Key Concepts of Recursion**
1. **Base Case**: Every recursive function needs a base case that stops the recursion. If there is no base case, the recursion will continue indefinitely, leading to a stack overflow.
2. **Recursive Case**: This is the part of the function that breaks the problem into smaller subproblems and calls the function itself with those smaller inputs.

**Steps to Writing Recursive Functions**
- **Identify the base case**: This is the simplest scenario where the function doesn’t need to call itself again.
- **Define the recursive case**: The function should call itself with a smaller or simpler version of the problem.
- **Ensure progress towards the base case**: Each recursive call should make progress towards reaching the base case.

Recursion can be challenging, but the best way to understand the nuances of it, is to experiment with it.  The basics of a recursive method is the recursive call and the base case.  The recursive call, calls itself.  It can start over with the same parameter or a different one.  After x calls, we reach the base case where the recusion is stopped.

The basic structure will look something like this:

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


Let’s take the example of calculating the factorial of a number (n!). The factorial of a number is defined as:
- `n! = n * (n-1) * (n-2) * ... * 1`
- Special case: `0! = 1`


The recursive approach to calculating factorial can be described as:
- Base case: `factorial(0)` or `factorial(1)` is `1`.
- Recursive case: `factorial(n) = n * factorial(n - 1)`.


```java
//Recursion Example
public class RecursionExample {
    public static void main(String[] args) {
        int number = 5;
        int factorial = calculateFactorial(number);
        System.out.println("Factorial of " + number + " = " + factorial);
    }

    public static int calculateFactorial(int n) {
        if (n == 0) {
            return 1;
        } else {
            return n * calculateFactorial(n - 1);
        }
    }
}
```

In this example, the calculateFactorial method is a recursive function that calculates the factorial of a given number n. If n is equal to 0, it returns 1 (since the factorial of 0 is defined as 1). Otherwise, it calls itself with the argument n - 1 and multiplies the result by n.
When you run this program, it will output the factorial of the number variable, which is set to 5 in this case. The output will be:

```Factorial of 5 = 120```

This demonstrates how recursion can be used to solve problems by breaking them down into smaller, simpler subproblems.

Let's create a simple Java program that uses recursion to calculate the factorial of a given number. The factorial of a non-negative integer n is the product of all positive integers less than or equal to n. The factorial of n is denoted as n!.

Factorial Formula: `n! = n * (n-1) * (n-2) * ... * 2 * 1`

When you run this program, it will calculate the factorial of the `number` variable (which is set to 5 in this example). The output will be:

Factorial of 5 is: 120


public class FactorialRecursion {
    public static int factorial(int n) {
        // Base case: 0! and 1! are both equal to 1
        if (n == 0 || n == 1) {
            return 1;
        } else {
            // Recursive case: n! = n * (n-1)!
            return n * factorial(n - 1);
        }
    }

    public static void main(String[] args) {
        int number = 5; // Change this number to calculate the factorial of a different value

        int result = factorial(number);
        System.out.println("Factorial of " + number + " is: " + result);
    }
}


The program uses recursion to calculate the factorial. When `factorial(n)` is called, it checks if `n` is equal to 0 or 1 (the base case). If `n` is 0 or 1, it returns 1. Otherwise, it recursively calls `factorial(n - 1)` to calculate `(n-1)!` and multiplies it by `n` to get the final result `n!`.


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
