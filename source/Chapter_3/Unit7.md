# Unit 7 ArrayList

## 7.1 Introduction to ArrayList

In Java, an ArrayList is a class that provides an implementation of a dynamic array-like data structure. It is part of the java.util package and is based on the concept of an array, but with additional functionality and flexibility.

Here are some key differences between ArrayLists and arrays:

- **Dynamic Size**: Arrays have a fixed size, which means you need to specify the size during initialization and cannot change it later. In contrast, ArrayLists can grow or shrink dynamically as elements are added or removed. The size of an ArrayList is automatically adjusted to accommodate the number of elements it contains.

- **Automatic Resizing**: When an ArrayList reaches its capacity, it automatically increases its size by allocating a new underlying array and copying the existing elements into it. This resizing is handled internally by the ArrayList class. In contrast, arrays require manual resizing and element shifting if you want to change their size.

- **Flexibility in Element Types**: Arrays can hold elements of any type, including primitive types and objects. ArrayLists, on the other hand, are limited to holding objects. To store primitive types in an ArrayList, you must use their corresponding wrapper classes (e.g., `Integer` for `int`).

- **Convenience Methods**: ArrayLists provide a set of convenient methods that simplify common operations on arrays, such as adding elements (`add`), accessing elements by index (`get`), modifying elements (`set`), and removing elements (`remove`). Arrays require manual element manipulation using index-based access.

- **Iterable Interface**: ArrayLists implement the Iterable interface, which enables them to be easily traversed using *enhanced* `for` loops or iterators. Arrays do not implement this interface, so iterating over them requires manual index handling.

- **Additional Functionality**: ArrayLists offer many additional methods for searching, sorting, and manipulating the elements. For example, ArrayLists provide methods like `contains`, `indexOf`, `sort`, `subList`, and more, which are not available directly for arrays.

Overall, ArrayLists provide a more flexible and convenient alternative to arrays when you need a dynamic-sized collection of objects in Java. They handle resizing and provide numerous utility methods, making it easier to work with collections of elements.

In this example, we import the ArrayList class from the java.util package. 

```java
import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        // Create an ArrayList to store integers
        ArrayList<Integer> numbers = new ArrayList<>();

        // Add elements to the ArrayList
        numbers.add(10);
        numbers.add(20);
        numbers.add(30);

        // Get the size of the ArrayList
        int size = numbers.size();
        System.out.println("Size of the ArrayList: " + size);

        // Access elements from the ArrayList
        int firstElement = numbers.get(0);
        System.out.println("First element: " + firstElement);

        // Modify an element in the ArrayList
        numbers.set(1, 50);
        System.out.println("Modified ArrayList: " + numbers);

        // Remove an element from the ArrayList
        numbers.remove(0);
        System.out.println("Updated ArrayList: " + numbers);

        // Iterate over the ArrayList using a for-each loop
        System.out.print("ArrayList elements: ");
        for (int num : numbers) {
            System.out.print(num + " ");
        }
        System.out.println();

        // Check if the ArrayList contains an element
        boolean containsElement = numbers.contains(30);
        System.out.println("ArrayList contains 30: " + containsElement);

        // Clear all elements from the ArrayList
        numbers.clear();
        System.out.println("Cleared ArrayList: " + numbers);

        // Check if the ArrayList is empty
        boolean isEmpty = numbers.isEmpty();
        System.out.println("ArrayList is empty: " + isEmpty);
    }
}
```

Here are some key differences between ArrayList and arrays:

- **Dynamic Size**: Unlike arrays, ArrayLists can grow or shrink dynamically as elements are added or removed. You don't need to specify the size in advance.
- **Automatic Resizing**: When an ArrayList reaches its capacity, it automatically increases its size to accommodate additional elements. This resizing is handled internally by the ArrayList class.
- **Flexible Data Types**: ArrayLists can store objects of any type. In the example, we use an ArrayList of Integer objects, but you can use any valid Java class or even create your own custom objects.
- **Convenience Methods**: ArrayLists provide a set of convenient methods, such as `add`, `get`, `set`, and `remove`, to manipulate elements without having to manually shift elements as you would in an array.
- **Iterable Interface**: ArrayLists implement the Iterable interface, allowing you to easily iterate over the elements using a `for` loop, as shown in the example.
- **Additional Functionality**: ArrayLists offer many other methods for searching, sorting, and manipulating the elements, such as `contains`, `sort`, `indexOf`, `subList`, and more.

These features make ArrayLists a versatile data structure that simplifies working with collections of objects in Java.

## 7.2 ArrayList Methods

## 7.3 Traversing ArrayLists

## 7.4 Developing Algorithms Using ArrayLists

## 7.5 Searching

## 7.6 Sorting

## 7.7 Ethical Issues Around Data Collection

