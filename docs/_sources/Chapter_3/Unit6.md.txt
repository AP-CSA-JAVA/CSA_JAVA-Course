# Unit 6

## 6.1 Array Creation and Access

**Goals**
- Represent collections of related primitive or object reference data using arrays.
- Manage relationships in data.


Arrays are a group of variables referred to by a common name. Below are some important points to know about Java arrays:

- In Java, all arrays are dynamically allocated.
- Arrays are stored in contiguous memory (consecutive memory locations).
- Java arrays are objects, so we can find the length of a given array using the object property length. 
- A Java array variable can also be declared like other variables with [] after the data type.
- The variables in the array are ordered, and each has an index beginning with 0.
- Java array can also be used as a static field, a local variable, or a method parameter.
- The size of an array must be specified by int or short value.
- The direct superclass of an array type is Object.
- The size of the array cannot be altered(once initialized).   
 
 
| Sample Array |   |   |  |  |  |  |  |  |  |  |  |
| ----------- | -- | -- | -- | -- | -- | -- | -- | -- | -- | -- | -- |
| list of items in array -> | A | B | C | D | E | F | G | H | I | J | K |
| array indices -> | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |


The array length has 11 indices.
The first index is 0.
The last index is 10.


An array can contain primitives (int, double, boolean) and object (String) references of a class depending on the definition of the array. In the case of primitive data types, the actual values are stored in contiguous memory locations. In the case of class objects, the actual objects are stored in a heap segment.

**Note**: 
- *Square brackets* [ ] are used to house elements of an array.
- *Index Value* begins with zero. Valid index values for an array are 0 through one less than the number of elements in the array.  Using an index value outside of thei range will result in an **ArayIndexOutOfBoundException** error.
- Array Types can be primitive types (intergers, double, and boolean) and can store objects (Strings).
- Strings are not primitive data types. They are object references.  Therefore, an array of `Strings` cannot store `0` or `false` in an array. Instead, JVM assigns the null value for each element in the array.
- Initializer lists can only be used when you create the array at declaration time.
- After you declare an array, you cannot change the length of the array.
	- You can create a larger array by copying the elements from initial array by using: `java.util.Arrays.copyOf`
- Java does not provide a mechanism for removing elements of an array, but you can assign a `null` value.


To create an array, you will need to use the keyword **new**, the data type and followed by the size of the array.  You can also use the `scanner` class to instantiate the size of the array.

For example, 
- *type*[ ] arrayName = new *type*[*value*]
- int[] intArray = {10, 20, 30, 40, 50};
- boolean[] boolArray = {true, false, true, false, true};
- double[] doubleArray = {3.14, 2.71, 1.618, 9.81};
- String[] stringArray = {"Apple", "Banana", "Cherry", "Date"};
 	

Which statements below are correct code segments.

    a)	`String[] names;`
    b)	`String[] names = {new Dog("Bingo"), new Dog("Fido")};`
    c)	`String[] names = {"Fido", "Bingo"};`
    d)	`String[] names = {"Fido", "Bingo"};`
    	`names[1] = "Lady";`
    e)	`String[] names = ("Fido", "Bingo"};`
    	`names[2] = "Lady";`
    f)	`int[] age = new int;`
    g)	`int[] age = new int[2];`


**Explanation**:

The invalid statements are:
b: You cannot assign a Dog object to a String array.
e: An array of size 2 is indexed 0 to 1 (2 is out of bounds).
f: You must designate a size of at least 1 when creating an arrray.


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

### Bubble Sort ###

Bubble sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. The process is repeated until the list is sorted. Here's a Java program that demonstrates the bubble sort algorithm:

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
- Inside the main method, we create an array arr with some unsorted elements.
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

### Insertion Sort ###

Insertion sort is another simple sorting algorithm that builds the final sorted array one item at a time. It takes each element from the input and inserts it into its correct position in the sorted part of the array. Here's a Java program that demonstrates the insertion sort algorithm:

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

