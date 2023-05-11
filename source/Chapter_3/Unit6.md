# Unit 6

## 6.1 Array Creation and Access

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

