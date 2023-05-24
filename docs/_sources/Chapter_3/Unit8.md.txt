# Unit 8 2D Array

## 8.1 2D Arrays

In Java, a 2D array is organized in rows and columns much like a spreadsheet.  Sometimes it is referred to as an array of arrays.  It is an `object` that contains a set of similar variable data types. Real life examples of 2D Arrays can be a traditional classroom seating chart, a chess board, or the game Connect Four.

Creating a 2D array is easy.  First you must declare the type of an array that you want to create.  In the example below, we are using `int`.  Then you use 2 sets of open and closed brackets.  Create a name for the array... in this case it is `newArray`.  From there, you will declare it as a new array and define the size of the array.  The code creates a 2D array with 3 rows and 3 columns, and it initializes all the elements to the default value of 0.

**NOTE**: When you initialize a 2D array, you must always specify the first dimension(rows), but you do not need to specify the second dimension(columns).

```java
// my preferred initialization method of a 2D array
int[][] newArray = new int[3][5];

// The minimum required is declaring the data type, 
// 2 open/close brackets, and the array name.
int newArray [][];
```

Much like one-dimensional arrays:
- the size of the array cannot be changed after being initialized
- all  elements in the array must be the same type
- a 2D array can hold primitive types as well as objects.

```java
        int[][] integer2DArray; // 2D integer array
        double[][] double2DArray; // 2D double array
        boolean[][] boolean2DArray; // 2D boolean array
        String[][] string2DArray; // 2D String array   
```

Another way to initialize a 2D array is as follows:  

```java
int[][] newArray = { 
                 {1, 2, 3, 4, 5}, 
                 {6, 7, 8, 9, 10}, 
                 {11, 12, 13, 14, 15} 
};
```

**NOTE** It is possible for 2D arrays to have different row lengths.



This statement creates a variable `num` and assigns it the value of the number inside the second array and in the third column, so the number 6. Remember that arrays are zero-indexed, so the first element's index is 0. 

## Traversing 2D Arrays

Now that you know how to create a 2D array, it is important to know how to navigate a 2D array.  One of the ways that you can do this is to reference a specific element within the 2D array.  To access the variables within a 2D array, you can use the syntax newArray[i][j], where i is the index of the row and j is the index of the column. 

|  | index[0] | index[1] | index[2] | index[3] | index[4] |
| ----- | ----- | ----- | ----- | ----- | ----- |
| **index[0]** | 1 | 2 | 3 | 4 | 5 |
| **index[1]** | 6 | 7 | 8 | 9 | 10 |
| **index[2]** | 11 | 12 | 13 | 14 | 15 |


```java
System.out.println(newArray[1] [1]);
```
**Sample output**

`7`

What if you wanted to see all of the elements within a 2D array.  You can use a nested for loop to iterate through each element in the array.  See the program below:

```java
class Main {
  public static void main(String[] args) {
		int[][] newArray = {
				   {1,2,3,4,5},
                    		   {6,7,8,9,10},
                    		   {11,12,13,14,15}
};

for(int i = 0; i < newArray.length; i++)
{
   for(int j = 0; j < newArray[i].length; j++)
   {
      System.out.print(newArray[i][j] + ", ");
   }
}
  }
}
```

**Sample Output**
`1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15`



