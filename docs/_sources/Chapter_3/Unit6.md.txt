# Unit 6

## 6.1 Array Creation and Access

**Goals**
- Represent collections of related primitive or object reference data using arrays.
- Manage relationships in data.


Arrays are a group of variables referred to by a common name. Below are some important points to know about Java arrays:

- In Java, all arrays are dynamically allocated.
- Primitives are stored in contiguous memory (consecutive memory locations).
- Objects are stored in a heap segment.
- Java arrays are objects, so we can find the length of a given array using the object property `length`. 
- A Java array variable can also be declared like other variables with [] after the data type.
- The variables in the array are ordered, and each has an index beginning with 0.
- Java array can also be used as a static field, a local variable, or a method parameter.
- The size of an array must be specified by int or short value.
- The direct superclass of an array type is Object.
- Arrays in Java are *mutable*, which means the values of the elements can be modified after the array has been created.
- The size of the array cannot be altered(once initialized).   
 
 
| Sample Array |   |   |  |  |  |  |  |  |  |  |  |
| ----------- | -- | -- | -- | -- | -- | -- | -- | -- | -- | -- | -- |
| list of items in array -> | A | B | C | D | E | F | G | H | I | J | K |
| array indices -> | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |


The array length has 11 indices.
The first index is 0.
The last index is 10.

**Note**: 
- *Square brackets* [ ] are used to instantiate the creation of an array and identify the number of elements within the newly created array.
- *Curly brackets* { } are used to store the elements within an array.
- *Index Value* begins with zero. Valid index values for an array are 0 through one less than the number of elements in the array.  Using an index value outside of the range will result in an **ArrayIndexOutOfBoundException** error.
- Array Types can be primitive types (intergers, double, and boolean) and can store objects (Strings).
- Strings are not primitive data types. They are object references.  Therefore, an array of `Strings` cannot store `0` or `false` in an array. Instead, JVM assigns the null value for each element in the array.
- Initializer lists can only be used when you create the array at declaration time.
- After you declare an array, you cannot change the length of the array.
	- You can create a larger array by copying the elements from initial array by using: `java.util.Arrays.copyOf`
- Java does not provide a mechanism for removing elements of an array, but you can assign a `null` value.
- `java.util.Arrays` - you do not need to import the [Arrays Class](https://docs.oracle.com/javase/8/docs/api/java/util/Arrays.html) if you are writing simple Array programs.  You will need it if you are using any of the **util**ity methods (example: Arrays.sort. Arrays.toString, Array.equals).


To create an array, you will need to use the keyword **new**, the data type and followed by the size of the array.
<p align="center"> 
	primStrType [ ] arrayName = new primStrType [##] </p>




You can also use the `scanner` class to instantiate the size of the array:

```java
System.out.print("Enter the length of the array: ");
	// Read the length input by the user
        int length = scanner.nextInt();  
        
        // Create an array of the specified length
        int[] numbers = new int[length];
```


Example of array types:
- int[ ] intuhRay = new int[5]; //no elements added
- int[ ] intArray = {10, 20, 30, 40, 50};
- boolean[ ] boolArray = {true, false, true, false, true};
- double[ ] doubleArray = {3.14, 2.71, 1.618, 9.81};
- String[ ] stringArray = {"Apple", "Banana", "Cherry", "Date"};
 	

Which statements below are correct code segments.

    a)	`String[] names;`
    
    b)	`String[] names = {new Dog("Harold"), new Dog("Hoover")};`
    
    c)	`String[] names = {"Harold", "Hoover"};`
    
    d)	`String[] names = {"Harold", "Hoover"};`
    	`names[1] = "Tango";`
     
    e)	`String[] names = {"Harold", "Hoover"};`
    	`names[2] = "Tango";`
     
    f)	`int[] age = new int;`
    
    g)	`int[] age = new int[2];`
    

<details> <summary> Click Here </summary>

 
**Explanation**:

The invalid statements are:

**b**: You cannot assign a Dog object to a String array.

**e**: An array of size 2 is indexed 0 to 1 (2 is out of bounds).

**f**: You must designate a size of at least 1 when creating an arrray.


</details>



## 6.2 Traversing Arrays

**Goals**
- Traverse the elements in a 1D array.
- Identify errors in a program.
- Write program code to create, traverse, and manipulate elements in a 1D array.

In this section we will navigate items within an array.  Take a look at the array below:

```java
String [] fruit = {"Apple", "Banana", "Grapes", "Mango", "Strawberry"};
```
To access an element in the fruit array, we can do so by identifying the location of the element within the array.

```java
String myFruit = fruit[1]; // returns Banana
```
If we want to access more items within the fruit array, we can use a `for` loop to *traverse* the array.  This program prints the *i*<sup>th</sup> element.

```java
/* Recall the three components necessary for a for loop:
	for (initialization; condition; increment/decrement) {
    		// Loop body (code to execute repeatedly)
	}
*/

for(int i = 0; i < fruit.length; i++)
{
	System.out.println(fruit[i]);
}
```
This `for` loop will *traverse* through every value in the fruit array, and prints out the value at every index.

The keyword `length` returns the current size of an array. An array with five values is considered an array length of 5. The length of an array corresponds to the number of elements in an array, *not the last index value in an array*. Remember arrays start at index 0 - an array with five elements will start at 0 and end at index 4.
This, the last index in an array will always be array.length - 1. The `for` loop is set to `i < fruit.length`, so the greatest value of `i` will always be *one less than* the length of the array.
**Notice** that the `for` loop starts at the first element (0) and ends at the last element (array.length - 1). Each time through the loop, the value of *i* accesses the element at index *i*. This simple `for` loop is able to loop through the array, regardless of how many items there are in the array.

---------------------------------------------------------------------------------------------------------------

**`.length`** variable vs. **`length()`** method

<details>
<summary> Click Here </summary>
<p>

**Note**

`array.length`: length is a final variable applicable for arrays. With the help of the `length` variable, we can obtain the size of the array. 
`string.length()` : `length()` method is a final method which is applicable for string objects. The `length()` method returns the number of characters present in the string. 

The `length` variable is applicable to an array but not for string objects whereas the `length()` method is applicable for string objects but not for arrays.  To directly access a field member of an array we can use `.length`; whereas `.length()` invokes a method to access a field member.


```java
// Java program to illustrate the concept of length and length()
public class Main {
	public static void main(String[] args)
	{
		// Here array is the array name of int type
		int[] array = new int[4];
		System.out.println("The size of the array is " + array.length);

		// Here str is a string object
		String str = "This is a string";
		System.out.println("The size of the String is " + str.length());
	}
}
```

**Sample Output**

`The size of the array is 4
The size of the String is 13`


-------------------------------------------------------------------------------------------------------------------------


What will be the output of the following program?

```java
public class Main {
	public static void main(String[] args)
	{
		// Here str is the array name of String type.
		String[] str = { "Apple", "and", "Orange" };
		System.out.println(str.length);
	}
}
```

<details>
<summary>Click here</summary>
<p>
There are `3` items in the str.
</p>
</details>



What will be the output of the following program?

```java
public class Main {
	public static void main(String[] args)
	{
	  // Here str[0] pointing to a string i.e. Apple
	  String[] str = { "Apple", "and", "Orange" };
	  System.out.println(str.length());
	}
}
```
<details>
<summary>Click here</summary>
<p>
`error: cannot find symbol symbol: method length()`
	
`location: variable str of type String[]`
</p>
</details>



What will be the output of the following program?

```java
public class Main {
	public static void main(String[] args)
	{
		// Here str[0] pointing to String i.e. Apple
		String[] str = { "Apple", "and", "Orange" };
		System.out.println(str[0].length());
	}
}
```
<details>
<summary>Click here</summary>
<p>
`5`
</p>
</details>



```java
// If an array has zero elements, you cannot get the last index by subtracting one. We must check this case.
public class Main {
    public static void main(String[] args) {
        
        String[] strArray = { "cat", "apple", "frog" };
        
        // Display length of the array.
        System.out.println(strArray.length);
        
        // Display first and last elements.
        System.out.println(strArray[0]);
        System.out.println(strArray[strArray.length - 1]);
    }
}
```

**Sample Output:**

`3`

`cat`

`frog`

```java
public class Program {
    public static void main(String[] args) {
        
        int[] numbers = { 5, 10, 15, 20 };
        // Loop over numbers using length.
        for (int i = 0; i < numbers.length; i++) {
            System.out.print(numbers[i] + " ");
        }
    }
}
```

**Sample Output:**

`5 10 15 20`

</p>
</details>

---------------------------------------------------------------------------------------------------------------

We can also use a `while` loop to write this *traversal*.

```java
int index = 0;
while(index < fruit.length)
{
    System.out.println(fruit[index]);
    index++;
}
```
Another example of traversing an array:

```java
    int[] goals = {1, 2, 0, 3, 2, 4, 2, 1, 0, 2, 0, 1, 3, 2};
    for (int i = 0; i < goals.length; i++)
    {
      System.out.print(goals[i] + " ");
    }
```
**Sample Output**

`1 2 0 3 2 4 2 1 0 2 0 1 3 2`


Traversing an array in reverse order:

```java

    int[] goals = {1, 2, 0, 3, 2, 4, 2, 1, 0, 2, 0, 1, 3, 2};
                   
    for (int i = goals.length; i > 0; i--)
    {
      System.out.print(goals[i-1] + " ");
    }
```

**Sample Output**

`2 3 1 0 2 0 1 2 4 2 3 0 2 1`

---------------------------------------------------------------------------------------------------------------

Using `int[] goals = {1, 2, 0, 3, 2, 4, 2, 1, 0, 2, 0, 1, 3, 2};`, 
write a program that will use a while loop to traverse a list. 
<details>
<summary>Click Here</summary>
<p>

```java

    int[] goals = {1, 2, 0, 3, 2, 4, 2, 1, 0, 2, 0, 1, 3, 2};

    int i = 0;
    while (i < goals.length)
    {
      System.out.print(goals[i] + " ");
      i++;
    }
```

</p>
</details>

---------------------------------------------------------------------------------------------------------------

Using `int[] goals = {1, 2, 0, 3, 2, 4, 2, 1, 0, 2, 0, 1, 3, 2};`, 
write a program that will use a while loop to traverse a list in reverse order. 
<details>
<summary>Click Here</summary>
<p>

```java
    int i = goals.length - 1;
    while (i >= 0)
    {
      int goal = goals[i];
	System.out.print((goal + " ");
      i--;
    }
```
</p>
</details>


## 6.3 Enhanced for Loop for Arrays

**Goals**
- Traverse the elements in a 1D array using an enhanced for loop.
- Write a program to create, traverse, and manipulate elements in a 1D array.


 A counter(i) was used to traverse both the `for` and `while` loop arrays.  The counter(i) was used to determine the correct index at which an array element could be found:

```java
//for loop
for(int i = 0; i < array.length; i++){
   // Do something
}  

//while loop
int i = 0;
while(i < array.length) { 
   // Do something
   i++;
}

```

Arrays can also be traversed without the use of a counter by using an enhanced for loop.

**Enhanced for Loops** 

Enhanced for loops are an alternate method of traversing an array:

```java
for (datatype variable : Collection of Array) {
	Body of Loop
}
```
**Notes**
- The enhanced for loop simplifies iteration, especially for arrays and collections, by eliminating the need to manually manage an index.
- The variable inside the loop holds a copy of the current element, and you cannot modify the collection directly through the variable (i.e., it's read-only).
- It's useful when you don't need to know the index of the current element.

Enhanced for loop example:

```java
int[] numList = {5,6,7,4,2};
for(int number: numList)
{
   System.out. println(number);
}
```

Instead of initializing a variable for looping, the enhanced for loop header initializes a new variable, `number` known as the enhanced for loop variable. The variable type must be the same value of the array.  In this instance, `numList` is an `int` array, so `number` is also an `int`.

Once the enhanced for loop variable is defined, the header is completed by placing a colon and the name of the array being iterated on `numList`.
Within the loop, the enhanced `for` loop variable is assigned a copy of each value of the array without using the array index. Each iteration, the value of number changes to match an element in the array. The first value of `number` in this loop is 5. The second value is 6, as it is the next item in the array. The enhanced for loop iterates in the order that the elements are placed in the array, from first to last. Making changes to the enhanced for loop variable does not change the original value in the array.

Standard `for` loops can be rewritten as enhanced `for` loops, and vice versa:

```java

String[] classroom = {"julian", "larisa", "amada", "mikka", "jay"};

//Enhanced For Loop:
for(String student : classroom)
{
   System.out.println(student);
}


//Standard For Loop:
for(int i = 0; i < classroom.length; i ++)
{
    System.out.println(classroom[i]);
}
```

**Enhanced `for` Loop Applications** 

Both standard and enhanced `for` loops are useful in different contexts. For example, since *enhanced* `for` loops make a copy of each element value, they are incapable of changing the value of the elements in an array. If elements need to be altered, *standard* `for` loops are more appropriate. In contrast, if elements just need to be accessed, *enhanced* `for` loops provide a more streamlined way to access elements without the need for a counter, or a potential `ArrayIndexOutOfBounds error`. 

---

### Advantages/ Disadvantages


<details><summary> Click Here </summary>

**For Loop**

 **Advantages:**
- Ideal for definite iterations: It works best when you know the number of iterations ahead of time (e.g., looping through an array or list with a known size).
- Compact syntax: Initialization, condition check, and increment/decrement are all in one place, making the loop easy to read and maintain.
- Control over loop variables: You can manually manage the loop variable, its increment/decrement, and conditions within the loop.

 **Disadvantages:**
- Not ideal for indefinite loops: It’s cumbersome when you don’t know how many times you need to loop.
- Less readable for complex conditions: If the loop condition becomes complicated, it can reduce readability.

 **When to use:**
- When you know the exact number of iterations in advance.
- Iterating over arrays, lists, or ranges with a specific index.
- Looping with a counter (e.g., for repeating an operation a set number of times).

 Example:
```java
// Loop through an array by index
int[] numbers = {1, 2, 3, 4, 5};
for (int i = 0; i < numbers.length; i++) {
    System.out.println(numbers[i]);
}
```

**While Loop**

 **Advantages:**
- Best for indefinite iterations: It’s ideal when you don’t know the number of iterations in advance, but the loop continues based on a condition (e.g., reading input until a certain condition is met).
- Simple condition-based looping: The loop continues as long as a condition is `true`, which is easy to understand for certain use cases.

 **Disadvantages:**
- Risk of infinite loop: If the condition is never met, the loop can run indefinitely, leading to errors.
- Less structured: The initialization and increment/decrement steps are separate from the condition check, which might make the loop harder to maintain.

 **When to use:**
- When the number of iterations is not known ahead of time.
- When the loop needs to run until a specific condition becomes true (e.g., user input validation or network communication).


 Example:
```java
// Loop while a condition is true (e.g., user input)
int number = 0;
while (number < 5) {
    System.out.println("Enter a number greater than or equal to 5: ");
    number = scanner.nextInt();
}
```


**Enhanced For Loop**

 **Advantages:**
- Simplifies iteration over collections and arrays: It's great for iterating through collections (like arrays, lists, and other collections) without dealing with indices or manual counting.
- Cleaner and more concise: It reduces boilerplate code and makes the loop easier to read.
- No risk of index errors: Since it doesn't require an index variable, there's no risk of going out of bounds or off-by-one errors.

 **Disadvantages:**
- Limited to collections and arrays: It cannot be used in situations where you need to modify the loop variable or if you need the index.
- Lacks flexibility: You can’t break early from the loop or increment the index manually. The loop just iterates over each element.

 **When to use:**
- When you need to iterate over every element in a collection or array without needing the index.
- When you want to avoid manually handling array indices or iterating based on a counter.

 Example:
```java
// Loop through an array using an enhanced for loop
int[] numbers = {1, 2, 3, 4, 5};
for (int num : numbers) {
    System.out.println(num);
}
```

</details>


---


### Bubble Sort

<details><Summary> Click Here </Summary>

Bubble sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. [Bubble Sort Example](https://www.hackerearth.com/practice/algorithms/sorting/bubble-sort/visualize/)


The process is repeated until the list is sorted. Here's a Java program that demonstrates the bubble sort algorithm:

```java
public class BubbleSortExample {
    public static void main(String[] args) {
        int[] arr = {64, 34, 25, 12, 22, 11, 90};

        System.out.println("Original array:");
        printArray(arr);

        bubbleSort(arr);

        System.out.println("\nSorted array:");
        printArray(arr);
    }

    public static void bubbleSort(int[] arr) {
        int n = arr.length;
        boolean swapped;
        
        for (int i = 0; i < n - 1; i++) {
            swapped = false;
            
            for (int j = 0; j < n - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    // Swap arr[j] and arr[j+1]
                    int temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                    
                    swapped = true;
                }
            }
            
            // If no two elements were swapped in the inner loop, the array is already sorted.
            // So, we can break out of the outer loop.
            if (!swapped) {
                break;
            }
        }
    }

    public static void printArray(int[] arr) {
        for (int num : arr) {
            System.out.print(num + " ");
        }
        System.out.println();
    }
}
```

Explanation:

- We define a class BubbleSortExample with a main method.
- Inside the main method, we create an array `arr` with some unsorted elements.
- We print the original array using the printArray method.
- We call the bubbleSort method to sort the array using the bubble sort algorithm.
- The bubbleSort method performs the bubble sort on the array. It uses two nested loops to compare and swap adjacent elements as necessary.
- The printArray method is used to print the elements of the array.
- After sorting, we print the sorted array using the printArray method.

When you run this program, it will output:

```java
Original array:
64 34 25 12 22 11 90 

Sorted array:
11 12 22 25 34 64 90 
```

</details>

---


### Insertion Sort


<details><summary> Click Here </summary>


Insertion sort is another simple sorting algorithm that builds the final sorted array one item at a time. It takes each element from the input and inserts it into its correct position in the sorted part of the array. [Insertion Sort Example](https://www.hackerearth.com/practice/algorithms/sorting/insertion-sort/visualize/)

Here's a Java program that demonstrates the insertion sort algorithm:

```java
public class InsertionSortExample {
    public static void main(String[] args) {
        int[] arr = {64, 34, 25, 12, 22, 11, 90};

        System.out.println("Original array:");
        printArray(arr);

        insertionSort(arr);

        System.out.println("\nSorted array:");
        printArray(arr);
    }

    public static void insertionSort(int[] arr) {
        int n = arr.length;

        for (int i = 1; i < n; i++) {
            int key = arr[i];
            int j = i - 1;

            // Move elements that are greater than the key to one position ahead of their current position
            while (j >= 0 && arr[j] > key) {
                arr[j + 1] = arr[j];
                j--;
            }

            // Insert the key in its correct position
            arr[j + 1] = key;
        }
    }

    public static void printArray(int[] arr) {
        for (int num : arr) {
            System.out.print(num + " ");
        }
        System.out.println();
    }
}
```

Explanation:

- We define a class InsertionSortExample with a main method.
- Inside the main method, we create an array arr with some unsorted elements.
- We print the original array using the printArray method.
- We call the insertionSort method to sort the array using the insertion sort algorithm.
- The insertionSort method performs the insertion sort on the array. It iterates through the array and inserts each element in its correct position in the sorted part of the array.
- The printArray method is used to print the elements of the array.
- After sorting, we print the sorted array using the printArray method.

When you run this program, it will output:

```java
Original array:
64 34 25 12 22 11 90 

Sorted array:
11 12 22 25 34 64 90 
```

</details>

---

### Selection Sort

<details><summary> Click Here </summary>
Selection Sort is an in-place comparison-based sorting algorithm. It works by repeatedly finding the minimum element from the unsorted portion of the array and swapping it with the first unsorted element. The process is repeated for the remaining unsorted portion until the entire array is sorted. [Selection Sort Example](https://www.hackerearth.com/practice/algorithms/sorting/selection-sort/visualize/)

**Example:**


```java
public class SelectionSortExample {
    public static void main(String[] args) {
        int[] arr = {64, 34, 25, 12, 22, 11, 90};

        System.out.println("Original array:");
        printArray(arr);

        selectionSort(arr);

        System.out.println("\nSorted array:");
        printArray(arr);
    }

    public static void selectionSort(int[] arr) {
        int n = arr.length;
        
        // Traverse through all elements of the array
        for (int i = 0; i < n - 1; i++) {
            int minIndex = i;
            
            // Find the minimum element in the unsorted portion
            for (int j = i + 1; j < n; j++) {
                if (arr[j] < arr[minIndex]) {
                    minIndex = j;
                }
            }
            
            // Swap the found minimum element with the first unsorted element
            if (minIndex != i) {
                int temp = arr[i];
                arr[i] = arr[minIndex];
                arr[minIndex] = temp;
            }
        }
    }

    public static void printArray(int[] arr) {
        for (int num : arr) {
            System.out.print(num + " ");
        }
        System.out.println();
    }
}
```

**Explanation:**

- **Class Definition**: The `SelectionSortExample` class contains a main method, a `selectionSort` method to perform the sorting, and a `printArray` method to display the array elements.
  
- **Main Method**: 
  - We create an array `arr` with unsorted values.
  - We print the original array using the `printArray` method.
  - We call the `selectionSort` method to sort the array using the selection sort algorithm.

- **SelectionSort Method**: 
  - The `selectionSort` method iterates over the entire array. For each element, it finds the smallest element in the remaining unsorted portion of the array and swaps it with the first unsorted element.
  - This continues until all elements are sorted.

- **printArray Method**: The `printArray` method is used to display the elements of the array both before and after sorting.

**Output:**

```java
Original array:
64 34 25 12 22 11 90 

Sorted array:
11 12 22 25 34 64 90 
```

</details>

---


### Merge Sort

<details><summary> Click Here </summary>

Merge Sort is a divide-and-conquer sorting algorithm that splits the array into smaller sub-arrays, sorts each of them, and then merges them back together to form a sorted array. This process continues recursively until the entire array is sorted. [Merge Sort Example:](https://www.hackerearth.com/practice/algorithms/sorting/merge-sort/visualize/)

**Merge Sort Example**

```java
public class MergeSortExample {
    public static void main(String[] args) {
        int[] arr = {64, 34, 25, 12, 22, 11, 90};

        System.out.println("Original array:");
        printArray(arr);

        mergeSort(arr, 0, arr.length - 1);

        System.out.println("\nSorted array:");
        printArray(arr);
    }

    public static void mergeSort(int[] arr, int left, int right) {
        if (left < right) {
            // Find the middle point of the array
            int middle = (left + right) / 2;

            // Recursively split the array into two halves
            mergeSort(arr, left, middle);
            mergeSort(arr, middle + 1, right);

            // Merge the two halves
            merge(arr, left, middle, right);
        }
    }

    public static void merge(int[] arr, int left, int middle, int right) {
        // Find sizes of two sub-arrays to be merged
        int n1 = middle - left + 1;
        int n2 = right - middle;

        // Create temporary arrays
        int[] leftArr = new int[n1];
        int[] rightArr = new int[n2];

        // Copy data to temporary arrays leftArr[] and rightArr[]
        System.arraycopy(arr, left, leftArr, 0, n1);
        System.arraycopy(arr, middle + 1, rightArr, 0, n2);

        // Merge the temporary arrays back into arr[left..right]
        int i = 0, j = 0;
        int k = left;

        while (i < n1 && j < n2) {
            if (leftArr[i] <= rightArr[j]) {
                arr[k] = leftArr[i];
                i++;
            } else {
                arr[k] = rightArr[j];
                j++;
            }
            k++;
        }

        // Copy any remaining elements of leftArr[], if any
        while (i < n1) {
            arr[k] = leftArr[i];
            i++;
            k++;
        }

        // Copy any remaining elements of rightArr[], if any
        while (j < n2) {
            arr[k] = rightArr[j];
            j++;
            k++;
        }
    }

    public static void printArray(int[] arr) {
        for (int num : arr) {
            System.out.print(num + " ");
        }
        System.out.println();
    }
}
```

**Explanation:**

- **Class Definition**: The `MergeSortExample` class contains a `main` method to execute the program, a `mergeSort` method to perform the recursive divide and conquer, a `merge` method to combine sorted subarrays, and a `printArray` method to display the array elements.

- **Main Method**:
  - We create an unsorted array `arr`.
  - We print the original array using the `printArray` method.
  - We call the `mergeSort` method to sort the array using the merge sort algorithm.

- **mergeSort Method**:
  - The `mergeSort` method recursively divides the array into two halves, continues splitting them until each sub-array contains only one element, and then starts the merging process.
  - The base case of the recursion is when the `left` index is greater than or equal to the `right` index, meaning the array is already a single element.

- **merge Method**:
  - The `merge` method combines two sorted subarrays into a single sorted array. It compares elements from each subarray and places the smaller element into the original array.
  - After comparing all elements, any leftover elements from either subarray are copied into the original array.

- **printArray Method**: This method prints the elements of the array both before and after sorting.

**Output:**

```
Original array:
64 34 25 12 22 11 90 

Sorted array:
11 12 22 25 34 64 90 
```
</details>


---


## 6.4 Developing Algorithms Using Arrays

**Goals**
- Identify and modify standard array traversal algorithms.
- Write standard array traversal algorithms.
- Develop code to create, traverse, and manipulate elements in 1D array.
- Describe the initial conditions that must be met for a program segment to work as intended or described.


To help you debug, you can quickly and easily print the contents of an array with a convenience method in the **java.util.Arrays** library. 

`System.out.println(java.util.Arrays.toString(r));  // r is an array.  Per request of MGD `


## Unit 6 Project

**Goals**
- Organize and encapsulate a set of required features.
- Write program code to satisfy method specifications using expressions, conditional statements, and iterative statements.
- Write program code to create, traverse, and manipulate elements in 1D array.
- Create test cases and provide evidence of validity testing.
- Apply the development process to create a project.


The **Memory Game** shows a random sequence of "memory strings" in a variety of buttons.
After wathcing the memory strings appear in the buttons one at a time, the
player recreates the sequence from memory.

- Create the "memory strings" - an array of single character strings to show in the buttons, one element at a time. This is the sequence the player will have to remember.
- Create the game and gameboard. Configure a randomized board with 3 buttons. (Later, you can change options to configure more or less buttons and turn randomization on or off.)
- Play the game until user wants to quit.
  - Create a new array that will contain the randomly ordered memory strings.
  - Create a list of randomly ordered integers with no repeats, the length of memory strings. 
    - Use it to create a random sequence of the memory strings.  --OR--
    - Overload the next method in RandomPermutation to create a random sequence of the memory strings, passed as a parameter.
  - Play one sequence, delaying half a second for the strings to show in the buttons. Save the player's guess. (Later, you can speed up or slow down the game.)
  - Determine if player's guess matches all elements of the random sequence.
  - Cleanup the guess - remove commas and spaces. Refer to a new String method replace to make this easy.
  - iterate to determine if guess matches sequence:
    - If match, increase score, and signal a match, otherwise, try again.
  - Ask if user wants to play another round of the game and track the number of games played.
  - When done playing, show score and end the game.


## Project - Arrays & Arraylists

**Directions:** You are taking three classes at the college: Economics, Political Science and History. You are required to have textbooks for each class. Below are a list of books students are to have for their respective classes.  These 10 books that may be found in a library array (see below).  ***In the array, print all "Out of Stock" and all books that were published before 1900.***

Store the *inputted* ISBN items in an arrayList. Print out the results of the query that include: Book name, Author, Date, ISBN number, Category and Status (In Stock, Not in Stock). ***Organize the books based by Category and book title by alphabetically.***

<mark>Submit your finished code as a .java file. Provide appropriate comments within your program. Use Java Time API to display Local Date Time. Submit one document for your test case(s) showing that program works as intended (pdf).</mark>

**ISBN Books for your class.**

```txt
9780140449150
9780140449266
9780140449280
9780226731561
9780307387899
9780393337642
9780465060737
9780465093339
9780679720201
9780691156044
```
 

**Use the list below to create your array.**

```java
Book[] books = {
    new Book("The History of the Peloponnesian War", "Thucydides", 2003, "9780140449266", "History", "In Stock"),
    new Book("The Rise and Fall of the Third Reich", "William L. Shirer", 1990, "9780679720201", "History", "Out of Stock"),
    new Book("Guns, Germs, and Steel", "Jared Diamond", 1997, "9780307387899", "History", "In Stock"),
    new Book("The Rise and Fall of the Great Powers", "Paul Kennedy", 1987, "9780679404736", "History", "Out of Stock"),
    new Book("The Cold War: A New History", "John Lewis Gaddis", 2005, "9780143039433", "History", "In Stock"),
    new Book("Postwar: A History of Europe Since 1945", "Tony Judt", 2005, "9781400032716", "History", "In Stock"),
    new Book("The Roman Revolution", "Ronald Syme", 1939, "9780192805511", "History", "Out of Stock"),
    new Book("A People's History of the United States", "Howard Zinn", 1980, "9780375758786", "History", "In Stock"),
    new Book("The Lessons of History", "Will Durant & Ariel Durant", 1968, "9780142002100", "History", "In Stock"),
    new Book("The Wright Brothers", "David McCullough", 2015, "9780670020898", "History", "Out of Stock"),
    new Book("SPQR: A History of Ancient Rome", "Mary Beard", 2015, "9780871404237", "History", "In Stock"),
    new Book("The Silk Roads", "Peter Frankopan", 2015, "9781101912379", "History", "Out of Stock"),
    new Book("1776", "David McCullough", 2005, "9780743226714", "History", "In Stock"),
    new Book("Team of Rivals", "Doris Kearns Goodwin", 2005, "9780684824901", "History", "In Stock"),
    new Book("The Diary of a Young Girl", "Anne Frank", 1947, "9780553296983", "History", "Out of Stock"),
    new Book("The Prince", "Niccolò Machiavelli", 1532, "9780226731561", "Political Science", "In Stock"),
    new Book("The Communist Manifesto", "Karl Marx & Friedrich Engels", 1848, "9780140449334", "Political Science", "Out of Stock"),
    new Book("The Origins of Political Order", "Francis Fukuyama", 2011, "9780465093339", "Political Science", "In Stock"),
    new Book("Democracy in America", "Alexis de Tocqueville", 1835, "9780307274939", "Political Science", "Out of Stock"),
    new Book("Political Order and Political Decay", "Francis Fukuyama", 2014, "9780691156044", "Political Science", "In Stock"),
    new Book("Leviathan", "Thomas Hobbes", 1651, "9780140449211", "Political Science", "In Stock"),
    new Book("On Tyranny", "Timothy Snyder", 2017, "9780465007855", "Political Science", "Out of Stock"),
    new Book("The Federalist Papers", "Alexander Hamilton, James Madison, John Jay", 1788, "9780140449273", "Political Science", "In Stock"),
    new Book("The Road to Serfdom", "Friedrich Hayek", 1944, "9780226458116", "Political Science", "In Stock"),
    new Book("The Clash of Civilizations and the Remaking of World Order", "Samuel P. Huntington", 1996, "9780307387905", "Political Science", "Out of Stock"),
    new Book("The Open Society and Its Enemies", "Karl Popper", 1945, "9780691158130", "Political Science", "In Stock"),
    new Book("Imagined Communities", "Benedict Anderson", 1983, "9781784786755", "Political Science", "Out of Stock"),
    new Book("The End of History and the Last Man", "Francis Fukuyama", 1992, "9780029109755", "Political Science", "In Stock"),
    new Book("Justice: What's the Right Thing to Do?", "Michael J. Sandel", 2009, "9780374532509", "Political Science", "In Stock"),
    new Book("Why Nations Fail", "Daron Acemoglu & James A. Robinson", 2012, "9780307719218", "Political Science", "Out of Stock"),
    new Book("The Wealth of Nations", "Adam Smith", 1776, "9780140449280", "Economics", "In Stock"),
    new Book("Capital in the Twenty-First Century", "Thomas Piketty", 2013, "9780393337642", "Economics", "Out of Stock"),
    new Book("Capitalism and Freedom", "Milton Friedman", 1962, "9780465060737", "Economics", "In Stock"),
    new Book("The General Theory of Employment, Interest, and Money", "John Maynard Keynes", 1936, "9780140449150", "Economics", "In Stock"),
    new Book("Development as Freedom", "Amartya Sen", 1999, "9780465025279", "Economics", "Out of Stock"),
    new Book("Freakonomics", "Steven D. Levitt & Stephen J. Dubner", 2005, "9780393358388", "Economics", "In Stock"),
    new Book("Das Kapital", "Karl Marx", 1867, "9780140449242", "Economics", "Out of Stock"),
    new Book("The Undercover Economist", "Tim Harford", 2005, "9780465026566", "Economics", "In Stock"),
    new Book("Principles of Economics", "Alfred Marshall", 1890, "9780140449204", "Economics", "In Stock"),
    new Book("The Worldly Philosophers", "Robert L. Heilbroner", 1953, "9780393337659", "Economics", "Out of Stock"),
    new Book("Thinking, Fast and Slow", "Daniel Kahneman", 2011, "9780374533551", "Economics", "In Stock"),
    new Book("Nudge", "Richard H. Thaler & Cass R. Sunstein", 2008, "9780143115267", "Economics", "Out of Stock"),
    new Book("The Big Short", "Michael Lewis", 2010, "9780393338823", "Economics", "In Stock"),
    new Book("Global Inequality", "Branko Milanovic", 2016, "9780674987593", "Economics", "In Stock"),
    new Book("Poor Economics", "Abhijit V. Banerjee & Esther Duflo", 2011, "9781610390934", "Economics", "Out of Stock"),
    new Book("The Origins of Totalitarianism", "Hannah Arendt", 1951, "9780156701532", "Political Science", "In Stock"),
    new Book("Man, the State, and War", "Kenneth Waltz", 1959, "9780231188053", "Political Science", "Out of Stock"),
    new Book("Diplomacy", "Henry Kissinger", 1994, "9780671510992", "Political Science", "In Stock"),
    new Book("The Tragedy of Great Power Politics", "John Mearsheimer", 2001, "9780393020254", "Political Science", "In Stock"),
    new Book("Orientalism", "Edward W. Said", 1978, "9780394740670", "History", "Out of Stock"),
    new Book("The Wealth and Poverty of Nations", "David S. Landes", 1998, "9780393318887", "Economics", "In Stock"),
    new Book("The Great Transformation", "Karl Polanyi", 1944, "9780807056431", "Economics", "Out of Stock"),
    new Book("The Affluent Society", "John Kenneth Galbraith", 1958, "9780395925007", "Economics", "In Stock"),
    new Book("An Inquiry into the Nature of Peace", "Immanuel Kant", 1795, "9780872200180", "Political Science", "In Stock"),
    new Book("The Constitution of Liberty", "Friedrich Hayek", 1960, "9780226320840", "Political Science", "Out of Stock"),
    new Book("The Republic", "Plato", 380, "9780140455113", "Political Science", "In Stock"),
    new Book("On Liberty", "John Stuart Mill", 1859, "9780140439144", "Political Science", "Out of Stock"),
    new Book("The Social Contract", "Jean-Jacques Rousseau", 1762, "9780140442014", "Political Science", "In Stock"),
    new Book("The Origins of the Second World War", "A. J. P. Taylor", 1961, "9780684829470", "History", "In Stock"),
    new Book("The Gulag Archipelago", "Aleksandr Solzhenitsyn", 1973, "9780061253713", "History", "Out of Stock"),
    new Book("The Making of the Atomic Bomb", "Richard Rhodes", 1986, "9781451677614", "History", "In Stock"),
    new Book("The Better Angels of Our Nature", "Steven Pinker", 2011, "9780143122012", "History", "Out of Stock"),
    new Book("The Rise of China and the Demise of the Capitalist World System", "Minqi Li", 2008, "9781583671825", "Economics", "In Stock"),
    new Book("The Logic of Collective Action", "Mancur Olson", 1965, "9780674537514", "Economics", "Out of Stock"),
    new Book("The Calculus of Consent", "James M. Buchanan & Gordon Tullock", 1962, "9780865972247", "Economics", "In Stock"),
    new Book("Capitalism, Socialism and Democracy", "Joseph A. Schumpeter", 1942, "9780415107624", "Economics", "In Stock"),
    new Book("The Theory of Moral Sentiments", "Adam Smith", 1759, "9780140449495", "Economics", "Out of Stock"),
    new Book("The Road to Unfreedom", "Timothy Snyder", 2018, "9780525574460", "History", "In Stock"),
    new Book("The Square and the Tower", "Niall Ferguson", 2017, "9780735222915", "History", "Out of Stock"),
    new Book("The Art of War", "Sun Tzu", 500, "9781599869773", "History", "In Stock"),
    new Book("The Origins of Alliances", "Stephen M. Walt", 1987, "9780801494185", "Political Science", "In Stock"),
    new Book("The Economic Consequences of the Peace", "John Maynard Keynes", 1919, "9780486435442", "Economics", "Out of Stock"),
    new Book("The Power Elite", "C. Wright Mills", 1956, "9780195133543", "Political Science", "In Stock"),
    new Book("The Great Divergence", "Kenneth Pomeranz", 2000, "9780691090102", "History", "In Stock"),
    new Book("Capital", "Thomas Piketty", 2014, "9780674430006", "Economics", "In Stock"),
    new Book("Why the Nations Fail", "Daron Acemoglu & James A. Robinson", 2012, "9780307719225", "Economics", "In Stock"),
    new Book("The Narrow Corridor", "Daron Acemoglu & James A. Robinson", 2019, "9780735224384", "Political Science", "Out of Stock"),
    new Book("The Age of Revolution", "Eric Hobsbawm", 1962, "9780674175320", "History", "In Stock"),
    new Book("The Age of Capital", "Eric Hobsbawm", 1975, "9780349104843", "History", "Out of Stock"),
    new Book("The Age of Empire", "Eric Hobsbawm", 1987, "9780679721758", "History", "In Stock"),
    new Book("The Age of Extremes", "Eric Hobsbawm", 1994, "9780679730057", "History", "In Stock"),
    new Book("The Commanding Heights", "Daniel Yergin & Joseph Stanislaw", 1998, "9780684835693", "Economics", "Out of Stock"),
    new Book("The Euro", "Joseph E. Stiglitz", 2016, "9780393254024", "Economics", "In Stock"),
    new Book("The Price of Inequality", "Joseph E. Stiglitz", 2012, "9780393345067", "Economics", "Out of Stock"),
    new Book("The American Revolution: A History", "Gordon S. Wood", 2002, "9780143038423", "History", "In Stock"),
    new Book("The Origins of Modern Science", "Richard S. Westfall", 1971, "9780195135493", "History", "Out of Stock"),
    new Book("The Structure of Scientific Revolutions", "Thomas S. Kuhn", 1962, "9780226458086", "Political Science", "In Stock"),
    new Book("The Politics of Power", "Leslie Lipson", 1964, "9780195006114", "Political Science", "Out of Stock"),
    new Book("An Economic History of the World Since 1400", "Donald J. Harris", 2002, "9780262161320", "Economics", "In Stock"),
    new Book("The Mystery of Capital", "Hernando de Soto", 2000, "9780465013640", "Economics", "Out of Stock"),
    new Book("A Short History of Nearly Everything", "Bill Bryson", 2003, "9780767908184", "History", "In Stock"),
    new Book("The Great Economists: How Their Ideas Can Help Us Today", "Linda Yueh", 2017, "9780691177823", "Economics", "In Stock"),
    new Book("The Age of Revolution: 1789-1848", "Eric Hobsbawm", 1962, "9780674175321", "History", "Out of Stock"),
    new Book("Political Ideologies: An Introduction", "Andrew Heywood", 2017, "9780230361585", "Political Science", "In Stock"),
    new Book("Economics in One Lesson", "Henry Hazlitt", 1946, "9780517548230", "Economics", "Out of Stock"),
    new Book("The Industrial Revolution: A Very Short Introduction", "Robert C. Allen", 2017, "9780198732661", "History", "In Stock")
	new Book("The Rise of Modern Science", "H. Floris Cohen", 2010, "9780262014469", "History", "In Stock"),
	new Book("The Political Brain", "D. O. Westen", 2007, "9780465015057", "Political Science", "In Stock"),
	new Book("Globalizing Capital", "Barry Eichengreen", 2008, "9780691136019", "Economics", "Out of Stock"),
	new Book("Economic History of the World", "Joel Mokyr", 2016, "9780691177847", "Economics", "In Stock")
};
```


---


In Unit 7, you will learn another method of storing lists.  Take a look at the differences below:

|   | Arrays | ArrayList |
| ----- | ------ | ------ |
| Definition | An array is a dynamically created object.  It serves as a container that holds the constant number of values of the **same** type.  It has contiguous memory location. | The ArrayList is a class of Java Collections framework.  It contains popular classes like Vector, HashTable, and HashMap. |
| Static/ Dynamic | Array is static in size | ArrayList is dynamic in size |
| Resizable | An array is a fixed-length data structure | ArrayList is a variable-length data structure.  It can be resized when needed. |
| Initialization | It is mandatory to provide the size of an array while initializing it directly or indirectly | We can create an instance of ArrayList without specifying its size.  Java creates ArrayList of Default size |
| Performance | It performs dast in comparision to ArrayList because of fixed size |  ArrayList is internally backed by the array in Java.  The resize operation in ArrayList slows down the performance. |
| Primitive/ Generic type | An array can store both objects and primitives type. |  We cannot store primitive type in ArrayList.  It automatically converts primitive type to object. |
| Type-Safety | We cannot use generics along with array because it is not a convertible type of array. | ArrayList allows us to store only generic/ type, that is why it is type-safe. |
| Length | Array provides a length variable which denotes the length of an array. | ArrayList provides the size() method to determine the size of ArrayList. |
| Adding Elements | We can add elements in an array by using the assignment operator. | Java provides the add() method to determine the size of ArrayList.
| One/ Multi-Dimensional | Array can be multi-dimensional | ArrayList is always one-dimensional. |

