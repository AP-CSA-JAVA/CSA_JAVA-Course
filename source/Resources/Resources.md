# Resources

|  | CSA Topics |   |
| :---: | :----: | :---: |
|    | 1.1 Why Programming?  Why Java? | [x] |
|    | 1.2 Variables and Data Types? | [ ] |
|    | 1.3 Expressions and Assignment Statements | [ ] |
|    | 1.4 Compound Assignment Operators | [ ] |
|    | 1.5 Casting and Ranges of Variables | [ ] |
|    | 2.1 Objects: Instances of Classes | [ ] |
|    | 2.2 Creating and Storing Objects (Instantiation) | [ ] |
|    | 2.3 Calling a Void Method | [ ] |
|    | 2.4 Calling a Void Method with Parameters | [ ] |
|    | 2.5 Calling a Non-Void Method | [ ] |
|    | 2.6 String Objects: Concatenation, Literals, and More | [ ] |
|    | 2.7 String Methods | [ ] |
|    | 2.8 Wrapper: Classes Integer and Double | [ ] |
|    | 2.9 Using the Math Class | [ ] |
|    | 3.1 Boolean Expressions | [ ] |
|    | 3.2 if Statements and Control Flow | [ ] |
|    | 3.3 if-else Statements | [ ] |
|    | 3.4 else if Statements | [ ] |
|    | 3.5 Compound Boolean Expressions | [ ] |
|    | 3.6 Equivalent Boolean Expressions | [ ] |
|    | 3.7 Comparing Objects | [ ] |
|    | 4.1 while Loops | [ ] |
|    | 4.2 for Loops | [ ] |
|    | 4.3 Developing Algorithms Using Strings | [ ] |
|    | 4.4 Nested Iteration | [ ] |
|    | 4.5 Informal Code Analysis | [ ] |
|    | 5.1 Anatomy of a Class | [ ] |
|    | 5.2 Constructors | [ ] |
|    | 5.3 Documentation with Comments | [ ] |
|    | 5.4 Accessor Methods | [ ] |
|    | 5.5 Mutator Methods | [ ] |
|    | 5.6 Writing Methods | [ ] |
|    | 5.7 Static Variables and Methods | [ ] |
|    | 5.8 Scope and Access | [ ] |
|    | 5.9 this Keyword | [ ] |
|    | 5.10 Ethical and Social Implications of Computing Systems | [ ] |
|    | 6.1 Array Creation and Access | [ ] |
|    | 6.2 Traversing Arrays | [ ] |
|    | 6.3 Enhanced for Loop for Arrays | [ ] |
|    | 6.4 Developing Algorithms Using Arrays | [ ] |
|    | 7.1 Introduction to ArrayList | [ ] |
|    | 7.2 ArrayList Methods | [ ] |
|    | 7.3 Traversing ArrayLists | [ ] |
|    | 7.4 Developing Algorithms Using ArrayLists | [ ] |
|    | 7.5 Searching | [ ] |
|    | 7.6 Sorting | [ ] |
|    | 7.7 Ethical Issues Around Data Collection (no quiz) | [ ] |
|    | 8.1 2D Arrays | [ ] |
|    | 8.2 Traversing 2D Arrays | [ ] |
|    | 9.1 Creating Superclasses and Subclasses (no quiz) | [ ] |
|    | 9.2 Writing Constructors for Subclasses | [ ] |
|    | 9.3 Overriding Methods | [ ] |
|    | 9.4 super Keyword | [ ] |
|    | 9.5 Creating References Using Inheritance Hierarchies | [ ] |
|    | 9.6 Polymorphism | [ ] |
|    | 9.7 Object Superclass | [ ] |
|    | 10.1 Recursion | [ ] |
|    | 10.2 Recursive Searching and Sorting | [ ] |




### Replit.com
By default, Replit uses Main as the main class.  To change the Main class name to a class name of your choosing, create a new file within replit and call it <i>.repl</i>.  Within the file type the following:

```
run="sh main.sh"

javac NewClass.java  # whatever that file is java NewClass
```

Lastly, make sure that the Main class is label correctly!  In this instance it will be called <i>NewClass</i>.

![replit](https://user-images.githubusercontent.com/12989939/186237117-a3565f6b-bc38-4edd-be59-f787ed233668.PNG)


Another method that you may find useful within replit is that you can create different programs and have them execute on the Main.java page.

```java
public class Main {
  public static void main(String[] args) {
    ProgramOne.main(args);
    ProgramTwo.main(args);
    ProgramThree.main(args);
  }
}
```
Example of this in use can be found [here](https://replit.com/@jonvirak/Array-Creation#Main.java).  Use this format for Assignment 2 and all future programs where you are asked to create two different programs.



**Void Method with inheritance**

```java
class Parent {
    void run() {
        System.out.println("Parent is running");
    }

    void sleep() {
        System.out.println("Parent is sleeping");
    }

    void sing() {
        System.out.println("Parent is singing");
    }
}

class Child1 extends Parent {
    void run() {
        System.out.println("Child1 is running");
    }

    void sleep() {
        System.out.println("Child1 is sleeping");
    }

    void sing() {
        System.out.println("Child1 is singing");
    }
}

class Child2 extends Parent {
    private String name;
    private int age;

    Child2(String name, int age) {
        this.name = name;
        this.age = age;
    }

    void run() {
        System.out.println(name + " (age " + age + ") is running");
    }

    void sleep() {
        System.out.println(name + " (age " + age + ") is sleeping");
    }

    void sing() {
        System.out.println(name + " (age " + age + ") is singing");
    }
}

public class Main {
    public static void main(String[] args) {
        Child1 child1 = new Child1();
        child1.run();
        child1.sleep();
        child1.sing();

        Child2 child2 = new Child2("Francis", 10);
        child2.run();
        child2.sleep();
        child2.sing();
    }
}
```
---------- Program 2 ----------
```java
class Child1 {
    void run() {
        System.out.println("Child1 is running");
    }

    void sleep() {
        System.out.println("Child1 is sleeping");
    }

    void sing() {
        System.out.println("Child1 is singing");
    }
}

class Child2 {
    private String name;
    private int age;

    Child2(String name, int age) {
        this.name = name;
        this.age = age;
    }

    void run() {
        System.out.println(name + " (age " + age + ") is running");
    }

    void sleep() {
        System.out.println(name + " (age " + age + ") is sleeping");
    }

    void sing() {
        System.out.println(name + " (age " + age + ") is singing");
    }
}

public class Main {
    public static void main(String[] args) {
        Child1 child1 = new Child1();
        child1.run();
        child1.sleep();
        child1.sing();

        Child2 child2 = new Child2("Francis", 10);
        child2.run();
        child2.sleep();
        child2.sing();
    }
}
```
