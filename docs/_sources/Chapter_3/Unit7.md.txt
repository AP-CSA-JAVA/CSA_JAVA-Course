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

The definition of an ArrayList method refers to the signature, parameters, and behavior of a specific method provided by the ArrayList class in Java. It describes how the method can be used, what arguments it accepts (if any), and what it returns (if anything).

The general format of a method definition in Java is as follows:

```java
accessModifier returnType methodName(parameterList) {
    // Method body
}
```

Here's an example of an ArrayList method definition:

```java
public boolean contains(Object element) {
    // Method body
}
```

Let's break down the components of this ArrayList method definition:

- **accessModifier**: Specifies the visibility of the method. In this case, `public` indicates that the method can be accessed from any class.

- **returnType**: Specifies the type of value the method returns, if any. In this case, boolean indicates that the method returns a `boolean` value (`true` or `false`).

- **methodName**: Specifies the name of the method. In this case, the method is named `contains`.

- **parameterList**: Specifies the parameters the method accepts, if any. In this case, the method accepts a single parameter of type *Object* named `element`.

- **Method body**: Contains the actual code that is executed when the method is called. It defines the behavior of the method.

For example, the `contains` method in ArrayList returns `true` if the specified element is found in the ArrayList, and `false` otherwise.

Note that different methods in the ArrayList class have different definitions, with variations in the return type, method name, parameter types, and behaviors based on the specific functionality they provide.

Here are some commonly used methods of the ArrayList class in Java:

1.	**add(element)**: Adds the specified element to the end of the ArrayList.

```java
ArrayList<String> fruits = new ArrayList<>();
fruits.add("Apple");
fruits.add("Banana");
```

2.	**get(index)**: Retrieves the element at the specified index in the ArrayList.

```java
String fruit = fruits.get(0);  
// Retrieves the element at index 0 (Apple)
```

3.	**set(index, element)**: Replaces the element at the specified index with the specified element.

```java
fruits.set(1, "Orange");  
// Replaces the element at index 1 with "Orange"
```

4.	**remove(index)**: Removes the element at the specified index from the ArrayList.

```java
fruits.remove(0);  
// Removes the element at index 0 (Apple)
```

5.	**size()**: Returns the number of elements in the ArrayList.

```java
int size = fruits.size();  
// Returns the number of elements in the ArrayList
```

6.	**contains(element)**: Checks whether the ArrayList contains the specified element.

```java
boolean containsOrange = fruits.contains("Orange");  
// Checks if "Orange" is present in the ArrayList
```

7.	**indexOf(element)**: Returns the index of the first occurrence of the specified element in the ArrayList.

```java
int indexOfBanana = fruits.indexOf("Banana");  
// Returns the index of "Banana" in the ArrayList
```

8.	**isEmpty()**: Checks whether the ArrayList is empty.

```java
boolean isEmpty = fruits.isEmpty();  
// Checks if the ArrayList is empty
```

9.	**clear()**: Removes all elements from the ArrayList.

```java
fruits.clear();  
// Removes all elements from the ArrayList
```

These are just a few examples of the methods available in the ArrayList class. The class provides many more methods for various operations like sorting, sublist extraction, iteration, and more. You can refer to the official Java documentation for a complete list of ArrayList methods and their descriptions.


## 7.3 Traversing ArrayLists

In this example, we create an ArrayList called myList and add three elements to it. We then traverse the ArrayList using both a enhanced for loop and a for loop.

The enhanced for loop iterates over each element in the ArrayList and assigns it to the variable element, which we can then print or perform any desired operations with.

The for loop uses an index variable i to access each element in the ArrayList using the `get()` method. We use the `size()` method to determine the size of the ArrayList, and the loop continues until `i` reaches the size of the ArrayList.

```java
import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        // Create an ArrayList
        ArrayList<String> myList = new ArrayList<>();

        // Add elements to the ArrayList
        myList.add("Apple");
        myList.add("Banana");
        myList.add("Orange");

        // Traverse the ArrayList using a for-each loop
        System.out.println("Traversing the ArrayList using a for-each loop:");
        for (String element : myList) {
            System.out.println(element);
        }

        // Traverse the ArrayList using a for loop
        System.out.println("\nTraversing the ArrayList using a for loop:");
        for (int i = 0; i < myList.size(); i++) {
            String element = myList.get(i);
            System.out.println(element);
        }
    }
}
```

When you run the program, it will output:

```java
Traversing the ArrayList using a enhanced for loop:
Apple
Banana
Orange

Traversing the ArrayList using a for loop:
Apple
Banana
Orange
```

## 7.4 Developing Algorithms Using ArrayLists


## 7.5 Searching

To search for an element in an ArrayList in Java, you can use the `contains()` method or iterate through the ArrayList and compare each element with the target value. 

In this example, we create an ArrayList called `myList` and add three elements to it. We then search for an element, "Banana", in the ArrayList using two different approaches.

First, we use the `contains()` method to check if the ArrayList contains the target element. The `contains()` method returns a boolean value indicating whether the element is present in the ArrayList.

Next, we perform a manual search by iterating through each element of the ArrayList using a enhanced for loop. We compare each element with the target element using the `equals()` method. If a match is found, we set the found variable to `true` and `break` out of the loop.

Finally, we print the search results to the console.


```java
import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        // Create an ArrayList
        ArrayList<String> myList = new ArrayList<>();

        // Add elements to the ArrayList
        myList.add("Apple");
        myList.add("Banana");
        myList.add("Orange");

        // Search for an element using contains() method
        String targetElement = "Banana";
        boolean found = myList.contains(targetElement);
        System.out.println("Using contains(): " + targetElement + " found? " + found);

        // Search for an element using iteration
        found = false;
        for (String element : myList) {
            if (element.equals(targetElement)) {
                found = true;
                break;
            }
        }
        System.out.println("Using iteration: " + targetElement + " found? " + found);
    }
}
```

When you run the program, it will output:

```java
Using contains(): Banana found? true
Using iteration: Banana found? true
```


## 7.6 Sorting

In Java, there are various methods available to sort an ArrayList. The most common approaches include using the Collections.sort() method, implementing the Comparable interface, or providing a custom Comparator. Let's explore each of these methods with examples:

- Sorting using `Collections.sort()` method:
    This method sorts an ArrayList in ascending order using the natural ordering of its elements. The elements must implement the Comparable interface to define their natural ordering.

```java
import java.util.ArrayList;
import java.util.Collections;

public class ArrayListSorting {
    public static void main(String[] args) {
        // Create an ArrayList
        ArrayList<Integer> numbers = new ArrayList<>();

        // Add elements to the ArrayList
        numbers.add(5);
        numbers.add(2);
        numbers.add(8);
        numbers.add(1);
        numbers.add(3);

        // Sort the ArrayList in ascending order
        Collections.sort(numbers);

        // Print the sorted ArrayList
        System.out.println(numbers);
    }
}
```
**Sample Output:**
```java
[1, 2, 3, 5, 8]
```

Sorting by implementing the Comparable interface:
By implementing the Comparable interface, you can define the natural ordering of your custom objects. The `compareTo()` method is used to compare two objects and return a negative, zero, or positive value based on their order.

```java
import java.util.ArrayList;
import java.util.Collections;

public class Student implements Comparable<Student> {
    private int id;
    private String name;

    public Student(int id, String name) {
        this.id = id;
        this.name = name;
    }

    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    @Override
    public int compareTo(Student other) {
        // Compare students based on their IDs
        return Integer.compare(this.id, other.id);
    }

    @Override
    public String toString() {
        return "Student [id=" + id + ", name=" + name + "]";
    }
}

public class Main {
    public static void main(String[] args) {
        // Create an ArrayList of Student objects
        ArrayList<Student> students = new ArrayList<>();

        // Add students to the ArrayList
        students.add(new Student(3, "Alice"));
        students.add(new Student(1, "Bob"));
        students.add(new Student(2, "Charlie"));

        // Sort the ArrayList using natural ordering (by ID)
        Collections.sort(students);

        // Print the sorted ArrayList
        System.out.println(students);
    }
}
```

**Sample Output:**
```java
[Student [id=1, name=Bob], Student [id=2, name=Charlie], Student [id=3, name=Alice]]
```

Sorting using a custom Comparator:
A Comparator allows you to define a custom comparison logic for sorting elements. It is useful when you want to sort objects based on different criteria or when the objects do not implement the Comparable interface.

```java
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;

public class Student {
    private int id;
    private String name;

    public Student(int id, String name) {
        this.id = id;
        this.name = name;
    }

    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    @Override
    public String toString() {
        return "Student [id=" + id + ", name=" + name + "]";
    }
}

public class SortByName
```


## 7.7 Ethical Issues Around Data Collection

[The original content can be found here:](https://apcentral.collegeboard.org/courses/ap-computer-science-a/classroom-resources/ethical-issues-internet-content-providers-and-internet-service-providers)


Ethical Issues: Internet Content Providers and Internet Service Providers
Background on ethical issues, and activities that illustrate these issues.
Objectives

At the conclusion of this lesson, students will have an understanding of:

    Ethical issues of copyright
    Ethical issues of "do no harm"
    Ethical issues for ISPs (Internet service providers)
    How to analyze an ethical issue

Student prerequisites

Some understanding of basic ethical theory—for a summary, see "A Proposed Methodology..." below.
Resource Materials
Online
**A Proposed Methodology for the Teaching of Information Technology Ethics in Schools**

I wrote this article, which appears in John Weckert, ed., Computer Ethics 2000: Selected Papers from the Second Australian Institute of Computer Ethics Conference, vol. 1 (Sydney: Australian Computer Society Inc., 2001).
[A Proposed Methodology for the Teaching of Information Technology Ethics in Schools](https://dl.acm.org/doi/10.5555/563715.563727)

**Stanford Encyclopedia of Philosophy—Computer Ethics: Basic Concepts and Historical Overview**

Terrell Bynum's entry for information technology ethics is an excellent synopsis.
[Stanford Encyclopedia of PhilosophyComputer Ethics: Basic Concepts and Historical Overview](https://plato.stanford.edu/archives/sum2020/entries/ethics-computer/)

**Books**

Baase, Sara. A Gift of Fire: Social, Legal, and Ethical Issues for Computers and the Internet.
2nd ed. Upper Saddle River, New Jersey: Prentice Hall, 2003.

Bynum, Terrell Ward, and Simon Rogerson. Computer Ethics and Professional Responsibility. 
Malden, Massachusetts: Blackwell Publishing, 2004.

Tavanni, Herman T. Ethics and Technology: Ethical Issues in an Age of Information and Communication Technology. 
Hoboken, New Jersey: Wiley, 2003.

**Ethics for Content Providers and ISPs: Specific Issues for the Activities**

The activities below deal with Internet content providers (ICPs) and ISPs.

Make it clear to students what the two terms mean and who belongs to each group:

- ICPs include anyone who provides material available on the Internet, typically from the World Wide Web.
- ISPs include all the organizations that provide the infrastructure and gateways that facilitate access to the Internet and hence to content.

One does not exist without the other; to read content, you need an ISP.

Laws exist that apply to both groups. In general, ISPs can be held legally liable in relation to the degree to which the ISP was aware of illegal activity and did nothing to prevent the activity from taking place or did nothing to prevent potential illegal activity from occurring.

Encourage the students to think about how they behave and make decisions. Draw a distinction between:

- Behavior controlled by law (detection, apprehension, prosecution, enforced consequences)
- The role of personal ethics

A law works if transgressions can be detected and then effectively prosecuted.

- What is it about the law that actually acts as the deterrent? Is it that you accept the law as right and just? Or is it that you think you will be caught and hence be punished?

Ask students these questions:

- Are you more likely to do something questionable if you think you will not be caught?
- Are you more likely to do something questionable if you believe that not only will you not be caught, but also nobody else will be impacted by your actions?

Students will probably be confused at this point, which indeed is the point—deciding how to behave is confusing.

**Ethics for Content Providers**

Concentrate on two key areas: copyright and not doing harm.

**Copyright**

Copyright seeks to provide a balance between a fair return to the creator and encouragement of originality and free flow of information. Copyright does not protect ideas. It protects the creator's right to perform, reproduce, sell, and derive related works. A common example is that hearing a song or reading a novel about "love" or "hurt" prompts you to decide to write your own. You are free to do so, but if you repeat the exact notes of the chorus or copy exact pieces of dialogue, you will infringe the original author's copyright. In fact, the underlying structure of a song or novel may well be copyrighted also.

- Fair use notations exist in copyright laws throughout the world. For example, copyright might not apply to reuse if there is likely to be little commercial impact on the creator. This idea is often used by people to validate their copying music: "Well, I was not going to buy the song anyway, so I have not deprived the creator or distributor of any income, hence I have not behaved unethically!" This is not the intention of fair use, it is intended to promote free flow of ideas and information; for example, in an education setting it is reasonable to copy parts of works for face-to-face teaching purposes.

Generally, if someone reuses a work and benefits commercially, the owner of the copyright may well objec—provided, of course, that the infringement is detected.

- What ethical issues are related to copyright?
  - Ask students: Is it unethical to steal? (In fact, it is illegal.) Taking someone else's work is in fact stealing, and you are likely to impact on their fair return; you might also impact on their reputation for creativity.
  - There are issues of trust involved.
  - There are issues related to "telling a lie."

- Have the students consider copyright infringement against their own works. Ask them if they would be happy if such infringements occurred.

- Raise the question: What is a fair return? Copyright does not exist to provide a way to unduly inflate monetary returns. For example, directly discuss the issue of the price charged for CDs and DVDs. Is it justifiable to infringe on copyright because the price of CDs is too high? Openly discuss this issue. For instance, is it ethically reasonable to argue that because CD prices are too high, it is reasonable to download pirated copies because the middle person between the creator and listener has inflated the price? There is a clear ethic of trust involved. The public trusts companies to do the right thing and behave ethically; laws exist to protect the public against undue price manipulation. Do you, as an individual, have the right to protest by infringing copyright? This is a difficult question to attempt to answer.

**Not Doing Harm**

- The ethic of not doing harm is an important one. Providing content that is misleading or based on poor research can harm a person's reputation, can lead to growth of unfounded beliefs or opinions, can result in unwarranted actions, and so forth.
- The notion of harm is not just related to physical harm. Content on the Internet is public, or at least public to subscribers of particular Web sites. Content may or may not directly identify the author, sources, or parties mentioned in the content. More problematic is content that deliberately obscures the creator.
- Have the students consider a situation where misleading material is published about them, and have them discuss how they feel.
- Have the students consider why someone might place misleading material on a Web site. Does it matter if the misleading nature of the material is deliberate or not?
- As a way of linking to other areas of the curriculum, the concept of checking sources and telling the truth are important in English, science, journalism, and so forth. However, sometimes telling the truth can do harm—to someone's reputation, for example.

**Ethics for ISPs**

Have the students consider this situation:

- Students are gathered around a dance hall ready for a school dance. Inside the dance hall it is dark, and there are several senior students whose role is to make sure that no alcohol is consumed inside the hall. For students to enter, they need to show their bags to the school captain before entering the hall. The school captain at the door is acting in the role of the ISP.
  - If the school captain did not inspect the bags, we would not be surprised if alcohol got into the hall. Parents would assume that the bags would be inspected.
  - The teacher and the school would find it very difficult to argue that they did not have an ethical responsibility to prevent students from bringing alcohol into the hall. By inspecting bags, they are exercising due care. Consider the argument: "It is not our responsibility to check what students bring into the hall in their bags; we simply provide the venue."
  - Have students respond to this situation and discuss the ethical issues:
    - Is there any case of invasion of privacy?
    - Who bears the ethical responsibility?
    - What level of ethical responsibility does the student have

Now consider the ISP:

- In the above case, the ISP actually inspects each bag. The bag is like a data packet on the Internet. However, on the Internet it is impossible to inspect each set of bits to determine their purpose—ethical or otherwise—as they pass through a server.
- An ISP has no way of knowing what a bit pattern represents. But they can see the end result of postings on a Web site or conversations in a chat room that they host. For example, consider a chat room that allows people to denigrate particular individuals in a school.
  - Assume that the ISP claims to monitor conversations and asks chat- room participants to abide by a code of conduct, which does not permit the use of denigrating terminology. However, in this instance, the chat room is not monitored, and an individual is denigrated and is identified to the school group. This results in the student suffering. (Be careful here, as it might be the case that some students in your group have encountered this exact problem!)

Putting aside the legal issues raised here, have the students consider the ethical behavior of the actors in this scenario. Refer to my “Proposed Methodology” paper (described above under "Resource Materials").

- Who are the actors? (ISP and chat-room participants)
- Has the ISP knowingly allowed transgression of its code of conduct?
- Does it matter whether the ISP has acted knowingly or not? The ISP has, in fact, provided the space (in this case virtual space) for the denigration or abuse to occur.

The participants have participated in an act of abuse. Let's assume for the moment that the participants have not identified themselves and have not identified the victim. Can the participants claim to have acted ethically? Have students discuss and produce a justifiable set of ethics for a chat room.

- [IT Ethics of Internet Service Providers and Internet Content Providers (.ppt/40KB)](https://secure-media.collegeboard.org/apc/ap07_compsci_meyenn.ppt)
- [Worksheet and Lab Exercises for Ethical Issues: Internet Content Providers and Internet Service Providers (.rtf/26KB)](https://secure-media.collegeboard.org/apc/ap07_compsci_meyenn_worksheet.rtf)

The questions will require students to research on the Internet and/or library. Teachers will also have to take students through a scenario-analysis process.

**Summary of Expected Results:**

- Students should become more aware of the complexity of the ethical issues applying to Internet content providers and Internet service providers. 
- Students should become aware of their own roles in Internet communication and the possible consequences of their behavior on the Internet.

Andrew Meyenn received master of science and master of education degrees from the University of Melbourne in Australia as part of a doctoral program in e-learning. He is the head of the information technology (IT) learning area at Wesley College in Melbourne and lectures on IT professional issues at the University of Melbourne and at Central Queensland University. Author of a number of textbooks, he is the coauthor, with Richard Jones, of Computer Science: Java Enabled, for use with the International Baccalaureate (IB) diploma program; Meyenn and Jones are developing an online teaching resource for IB computer science. He is a member of the Computer Science Teachers Association (CSTA).

Authored by

Andrew Meyenn

Wesley College

Melbourne, Australia

