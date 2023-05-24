# Unit 8 2D Array

## 8.1 2D Arrays

In Java, a 2D array is organized in rows and columns much like a spreadsheet.  Sometimes it is referred to as an array of arrays.  It is an `object` that contains a set of similar variable data types. Real life examples of 2D Arrays can be a traditional classroom, Chess, or checkers.

Creating a 2D array is easy.  First you must declare the type of an array that you want to create.  In the example, we are using `int`.  Then you use 2 sets of open and closed brackets.  Create a name for the array... in this case it is `newArray`.  From there, you will declare it as a new array and define the size of the array.  The code creates a 2D array with 3 rows and 3 columns, and it initializes all the elements to the default value of 0.

```java
int[][] newArray = new int[3][3];
```
Much like one-dimensional arrays:
- the size of the array cannot be changed after being initialized
- all  elements in the array must be the same type
- a 2D array can hold primitive types as well as objects.

Another way to initialize a 2D array is as follows:  

```java
int[][] newArray = { 
                 {1, 2, 3}, 
                 {4, 5, 6}, 
                 {7, 8, 9} 
};
```

**NOTE** It is possible for 2D arrays to have different row lengths.

To access the variables within a 2D array, you can use the syntax newArray[i][j], where i is the index of the row and j is the index of the column. 

Example:
```java
int num = newArray[1][2];
```

This statement creates a variable `num` and assigns it the value of the number inside the second array and in the third column, so the number 6. Remember that arrays are zero-indexed, so the first element's index is 0. 

## Traversing 2D Arrays
