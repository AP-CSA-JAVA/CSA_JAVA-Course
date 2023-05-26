# Unit 6

## 6.1 Array Creation and Access
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

## 6.4 Developing Algorithms Using Arrays
