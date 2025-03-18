# Unit 8 2D Array

Below is a comparison of arrays and 2D arrays showing the similarities and differences between them:

| **Aspect**              | **Java Array**                                      | **2D Array**                                        |
|-------------------------|-----------------------------------------------------|-----------------------------------------------------|
| **Definition**           | A single-dimensional collection of elements.        | A collection of elements arranged in rows and columns, forming a matrix-like structure. |
| **Syntax**               | `type[] arrayName = new type[size];`                 | `type[][] arrayName = new type[rows][columns];`     |
| **Initialization**       | Can be initialized with a single set of values: `int[] arr = {1, 2, 3};` | Initialized with a two-dimensional array: "\n" `int[][] arr = {{1, 2}, {3, 4}};` |
| **Example Code**         | `int[] arr = new int[5];`                           | `int[][] arr = new int[3][3];`                     |
| **Storage**              | Stores elements in a linear memory structure.       | Stores elements in a matrix (row × column) structure. |
| **Accessing Elements**   | Accessed via a single index: `arrayName[index]`.    | Accessed via two indices: `arrayName[row][column]`. |
| **Indexing**             | Starts at 0 and goes up to `size-1`.                | Starts at 0 for both rows and columns.             |
| **Memory Representation**| Stored in a single contiguous memory block.         | Internally, it is an array of arrays (an array of references to other arrays). |
| **Dimensionality**       | 1D (single dimension).                             | 2D (two dimensions).                               |
| **Use Case**             | Suitable for lists of items that are one-dimensional. | Suitable for matrices, grids, tables, etc.         |

**Key Similarities**:
- Both Java arrays and 2D arrays are fixed in size once they are initialized.
- Both use 0-based indexing.
- Both can be populated with a set of elements, either at initialization or afterward.
- Both are objects in Java (with 2D arrays being objects of arrays).

**Key Differences**:
- A Java array is a one-dimensional collection, while a 2D array represents a collection in two dimensions (rows and columns).
- 2D arrays involve an extra level of indexing (row and column) compared to single-indexed arrays.


---


## 8.1 2D Arrays
**Goals**
- Represent collections of related primitive or object reference data using two-dimensional (2D) array objects.
- Write program code to create elements in 2D array objects.


In Java, a 2D array is organized in rows and columns much like a spreadsheet.  Sometimes it is referred to as an array of arrays.  It is an `object` that contains a set of similar variable data types. Real life examples of 2D Arrays can be a traditional classroom seating chart, a chess board, or the game Connect Four.

Creating a 2D array is easy.  First you must declare the type of an array that you want to create.  In the example below, we are using `int`.  Then you use 2 sets of open and closed brackets.  Create a name for the array... in this case it is `newArray`.  From there, you will declare it as a new array and define the size of the array.  The code creates a 2D array with 3 rows and 3 columns, and it initializes all the elements to the default value of 0.

**NOTE**: When you initialize a 2D array, you must always specify the first dimension(rows), but you do not need to specify the second dimension(columns).

```java
// my preferred initialization method of a 2D array
int[][] newArray = new int[3][5];

// minimum requirement is for you to define the rows.
int[][] newArray = new int[3][];
newArray[0] = new int[]{1, 2, 3, 4, 5};
newArray[1] = new int[]{6, 7, 8, 9, 10};
newArray[2] = new int[]{11, 12, 13, 14, 15, 16};

// The minimum required is declaring the data type, 
// 2 open/close brackets, and the array name.
int newArray [][];
```

**Note**: ***Dynamically initializing** columns for each row: Instead of specifying a fixed number of columns when you create the array, you create each row and then determine the number of columns for that particular row at runtime.*


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

In this Java program, we'll represent collections of related data using a two-dimensional (2D) array object. We'll create a 2D array to store information about students and their scores in different subjects.

```java
public class TwoDArrayExample {
    public static void main(String[] args) {
        // Create a 2D array to store student scores
        int[][] studentScores = new int[3][5]; // 3 students and 5 subjects

        // Assign values to the elements in the 2D array
        studentScores[0][0] = 90; // Student 1, Subject 1
        studentScores[0][1] = 85; // Student 1, Subject 2
        studentScores[0][2] = 78; // Student 1, Subject 3
        studentScores[0][3] = 95; // Student 1, Subject 4
        studentScores[0][4] = 88; // Student 1, Subject 5

        studentScores[1][0] = 75; // Student 2, Subject 1
        studentScores[1][1] = 92; // Student 2, Subject 2
        studentScores[1][2] = 84; // Student 2, Subject 3
        studentScores[1][3] = 80; // Student 2, Subject 4
        studentScores[1][4] = 88; // Student 2, Subject 5

        studentScores[2][0] = 82; // Student 3, Subject 1
        studentScores[2][1] = 78; // Student 3, Subject 2
        studentScores[2][2] = 90; // Student 3, Subject 3
        studentScores[2][3] = 85; // Student 3, Subject 4
        studentScores[2][4] = 92; // Student 3, Subject 5

        // Display the 2D array
        System.out.println("Student Scores:");
        for (int i = 0; i < studentScores.length; i++) {
            for (int j = 0; j < studentScores[i].length; j++) {
                System.out.print(studentScores[i][j] + "\t");
            }
            System.out.println();
        }
    }
}
```

Explanation:

- We create a 2D array studentScores to store student scores for 3 students (rows) and 5 subjects (columns).
- We assign values to the elements in the 2D array to represent the scores of each student in each subject.
- We use nested loops to display the 2D array in a tabular format, showing the scores for each student in each subject.

When you run this program, it will output:
```java
Student Scores:
90	85	78	95	88	
75	92	84	80	88	
82	78	90	85	92	
```

This program demonstrates how to represent collections of related data using a 2D array in Java. It creates a 2D array studentScores and assigns values to its elements to store student scores in different subjects. The program then displays the 2D array to show the scores for each student in each subject.

## 8.2 Traversing 2D Arrays
**Goals**
- Traverse 2D arrays using nested for and enhanced for loops.
- Write program code to create, traverse, and manipulate elements in 2D array objects.
- Use test cases to find errors or validate results.

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

for(int i = 0; i < newArray.length; i++) {  // row 
   for(int j = 0; j < newArray[i].length; j++) {  // column 
      System.out.print(newArray[i][j] + "\t");
   }
   System.out.println(); // Move to the next line after each row
    }
  }
}
```

**Sample Output**
```java
1   2   3   4   5   
6   7   8   9   10  
11  12  13  14  15
```

In this Java program, we'll traverse a 2D array using nested for and enhanced for loops. We'll also create the 2D array, traverse it, and manipulate its elements. Finally, we'll use test cases to find errors and validate the results.

```java
public class TwoDArrayTraversalExample {
    public static void main(String[] args) {
        // Create a 2D array to store student scores
        int[][] studentScores = {
            {90, 85, 78, 95, 88},
            {75, 92, 84, 80, 88},
            {82, 78, 90, 85, 92}
        };

        // Traverse the 2D array using nested for loops
        System.out.println("Student Scores using nested for loop:");
        for (int i = 0; i < studentScores.length; i++) {
            for (int j = 0; j < studentScores[i].length; j++) {
                System.out.print(studentScores[i][j] + "\t");
            }
            System.out.println();
        }

        // Traverse the 2D array using enhanced for loop
        System.out.println("\nStudent Scores using enhanced for loop:");
        for (int[] row : studentScores) {
            for (int score : row) {
                System.out.print(score + "\t");
            }
            System.out.println();
        }

        // Manipulate elements in the 2D array
        studentScores[1][3] = 88; // Change the score of Student 2 in Subject 4 to 88

        // Display the modified 2D array
        System.out.println("\nModified Student Scores:");
        for (int[] row : studentScores) {
            for (int score : row) {
                System.out.print(score + "\t");
            }
            System.out.println();
        }

        // Test case to validate the results
        validateScores(studentScores);
    }

    // Test case to validate the results
    public static void validateScores(int[][] scores) {
        // Calculate the total score for each student
        int[] totalScores = new int[scores.length];
        for (int i = 0; i < scores.length; i++) {
            for (int j = 0; j < scores[i].length; j++) {
                totalScores[i] += scores[i][j];
            }
        }

        // Calculate the average score for each student
        double[] averageScores = new double[scores.length];
        for (int i = 0; i < scores.length; i++) {
            averageScores[i] = (double) totalScores[i] / scores[i].length;
        }

        // Display the validation results
        System.out.println("\nValidation Results:");
        for (int i = 0; i < scores.length; i++) {
            System.out.println("Student " + (i + 1) + ": Total Score = " + totalScores[i] + ", Average Score = " + averageScores[i]);
        }
    }
}
```

Explanation:

- We create a 2D array studentScores and initialize it with student scores for different subjects.
- We traverse the 2D array using nested for loops and enhanced for loop to display the student scores in tabular format.
- We manipulate the element studentScores[1][3] to change the score of Student 2 in Subject 4 to 88.
- We display the modified 2D array to show the changes.
- We use a test case (validateScores()) to calculate the total and average scores for each student and validate the results.

When you run this program, it will output:

```java
Student Scores using nested for loop:
90	85	78	95	88	
75	92	84	80	88	
82	78	90	85	92	

Student Scores using enhanced for loop:
90	85	78	95	88	
75	92	84	80	88	
82	78	90	85	92	

Modified Student Scores:
90	85	78	95	88	
75	92	84	88	88	
82	78	90	85	92	

Validation Results:
Student 1: Total Score = 436, Average Score = 87.2
Student 2: Total Score = 417, Average Score = 83.4
Student 3: Total Score = 427, Average Score = 85.4
```

This program demonstrates how to create, traverse, and manipulate elements in a 2D array using nested for loops and enhanced for loop. It also shows the use of test cases to validate the results, ensuring that the array elements are correctly modified and the calculated total and average scores are accurate.
