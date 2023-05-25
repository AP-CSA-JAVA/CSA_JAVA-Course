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
 

An array can contain primitives (int, double, boolean) and object (String) references of a class depending on the definition of the array. In the case of primitive data types, the actual values are stored in contiguous memory locations. In the case of class objects, the actual objects are stored in a heap segment.

array.length: length is a final variable applicable for arrays. With the help of the length variable, we can obtain the size of the array. 
`string.length()` : `length()` method is a final method which is applicable for string objects. The `length()` method returns the number of characters present in the string. 
`length` vs `length()`

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
-------------------------------------------------------------------------------------------------------------------------



What will be the output of the following program?

```java
public class Test {
	public static void main(String[] args)
	{
		// Here str is the array name of String type.
		String[] str = { "Apple", "and", "Orange" };
		System.out.println(str.length);
	}
}
```

**Sample Output**

`3`

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

**Sample Output:**
`error: cannot find symbol
symbol: method length()
location: variable str of type String[]`


What will be the output of the following program?


public class Main {
	public static void main(String[] args)
	{
		// Here str[0] pointing to String i.e. Apple
		String[] str = { "Apple", "and", "Orange" };
		System.out.println(str[0].length());
	}
}

**Sample Output:** 
`5`

// If an array has zero elements, you cannot get the last index by subtracting one. We must check this case.
public class Program {
    public static void main(String[] args) {
        
        String[] array = { "cat", "apple", "frog" };
        
        // Display length of the array.
        System.out.println(array.length);
        
        // Display first and last elements.
        System.out.println(array[0]);
        System.out.println(array[array.length - 1]);
    }
}
Output:

3
cat
frog

public class Program {
    public static void main(String[] args) {
        
        int[] numbers = { 5, 10, 15, 20 };
        // Loop over numbers using length.
        for (int i = 0; i < numbers.length; i++) {
            System.out.println(numbers[i]);
        }
    }
}

Output:

5
10
15
20

/* Version 1 Here we access the array's length each time in a hot inner loop. The length never changes.
Version 2 In this version of the code we use a cached "length" local instead of accessing length each time.
Result Checking a local variable that copies the value of an array's length is faster.
Warning This optimization does not work in a loop boundary. The Java runtime applies special optimizations in loops. */

public class Main {
    public static void main(String[] args) {
        
        int[] array = new int[1000];
        int length = array.length;
        
        long t1 = System.currentTimeMillis();
        
        // Version 1: check array length.
        for (int i = 0; i < 10000000; i++) {
            for (int j = 0; j < 100; j++) {
                if (array.length != 1000) {
                    System.out.println(false);
                }
            }
        }
        
        long t2 = System.currentTimeMillis();
        
        // Version 2: check length cached value.
        for (int i = 0; i < 10000000; i++) {
            for (int j = 0; j < 100; j++) {
                if (length != 1000) {
                    System.out.println(false);
                }
            }
        }
        
        long t3 = System.currentTimeMillis();
        
        // ... Timings.
        System.out.println(t2 - t1);
        System.out.println(t3 - t2);
    }
}
14 ms,    check array.length
 9 ms,    check local variable

/*  Version 1 This code loops over a 100,000 element array and accesses array.length in the for-loop limit.
Version 2 This version uses a local variable instead of array.length. In the loop it accesses the array.
Result The loop that accesses the array length directly is faster. The compiler is optimizing bounds-checking in the loop body. */

```java
public class Main {
    public static void main(String[] args) {
        
        int[] array = new int[100000];
        int length = array.length;
        
        // Access all elements in memory (prime the cache).
        for (int v = 0; v < array.length; v++) {
            if (array[v] != 0) {
                System.out.println(false);
            }
        }
        
        long t1 = System.currentTimeMillis();
        
        // Version 1: use array length in for-loop maximum.
        for (int i = 0; i < 30000000; i++) {
            for (int j = 0; j < 100; j++) {
                int count = 0;
                for (int v = 0; v < array.length; v++) {
                    count++;
                }
                if (count == 0) {
                    System.out.println(0);
                }
            }
        }
        
        long t2 = System.currentTimeMillis();
        
        // Version 2: use local variable as for-loop maximum.
        for (int i = 0; i < 30000000; i++) {
            for (int j = 0; j < 100; j++) {
                int count = 0;
                for (int v = 0; v < length; v++) {
                    count++;
                }
                if (count == 0) {
                    System.out.println(0);
                }
            }
        }
        
        long t3 = System.currentTimeMillis();
        
        // ... Timings.
        System.out.println(t2 - t1);
        System.out.println(t3 - t2);
    }
}
3114 ms,    loop with length max
6785 ms,    loop with local variable max
```



## 6.2 Traversing Arrays

## 6.3 Enhanced for Loop for Arrays

## 6.4 Developing Algorithms Using Arrays
Arrays in java is a list of items that are grouped together with a common name.  There are important points you need to know about Java arrays: 
- In Java, all arrays are dynamically allocated.
- Arrays are stored in consecutive memory locations.
- Java arrays are objects, so we can find the length of a given array using the object property length. 
- A Java array variable can also be declared like other variables with brackets after the data type.
- The variables in the array are ordered, and each has an index beginning with 0.
- Java array can also be used as a static field, a local variable, or a method parameter.
- The size of an array must be specified by int or short value.
- The direct superclass of an array type is Object.
- The size of the array cannot be altered(once initialized).   

| Sample Array |   |   |  |  |  |  |  |  |  |  |  |
| ----------- | -- | -- | -- | -- | -- | -- | -- | -- | -- | -- | -- |
| list of items in array -> | A | B | C | D | E | F | G | H | I | J | K |
| array indices -> | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |

array length is 11 indices.
first index is 0.
last index is 10.

An array can contain primitive types and object references.  Primitive data types are stored in consecutive memory locations where class objects are stored in a heap segment which is beyond the scope of this course.

array.length: length is a final variable applicable for arrays. With the help of the length variable, we can obtain the size of the array. 
string.length() : length() method is a final method which is applicable for string objects. The length() method returns the number of characters present in the string.

length vs length()

1. The length variable is applicable to an array but not for string objects whereas the length() method is applicable for string objects but not for arrays.
// length can be used for int[], double[], String[] 
// to know the length of the arrays.

// length() can be used for String, StringBuilder, etc 
// String class related Objects to know the length of the String

To directly access a field member of an array we can use .length.  While .length() uses a method to access a field member.

// Example for length vs length()
public class Main {
	public static void main(String[] args)
	{
		// Using length as a variable for an array
		int[] array = new int[4];
		System.out.println("This is the size my array. " + array.length);

		// Using length() for a string object
		String str = "This is the size of a string.";
		System.out.println("The size of this String is " + str.length());
	}
}

The size of the array is 4
The size of the String is 29

