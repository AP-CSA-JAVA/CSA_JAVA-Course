# Resources

|  | CSA Topics | MCQ | FRQ | Project |
| :---: | :---- | :---: | :---: | :----: |
|  Week 1  | 1.1 Why Programming?  Why Java? | MCQ |   |
|  Week 1  | 1.2 Variables and Data Types? |   |   |
|  Week 1  | 1.3 Expressions and Assignment Statements |   |   |
|  Week 1  | 1.4 Compound Assignment Operators |   |   |
|  Week 2  | 1.5 Casting and Ranges of Variables |   |   |
|  Week 2  | 3.1 Boolean Expressions |   |   |
|  Week 2  | 3.2 if Statements and Control Flow |   |   |
|  Week 3  | 3.3 if-else Statements |    |   |
|  Week 3  | 3.4 else if Statements |    |   |
|  Week 4  | 3.5 Compound Boolean Expressions |    |   |
|  Week 4  | 3.6 Equivalent Boolean Expressions |    |   |
|  Week 5  | 3.7 Comparing Objects |    |   |
|  Week 5  | 2.1 Objects: Instances of Classes |    |   |
|  Week 6  | 2.2 Creating and Storing Objects (Instantiation) |    |   |
|  Week 6  | 2.3 Calling a Void Method |    |   |
|  Week 7  | 2.4 Calling a Void Method with Parameters |    |   |
|  Week 7  | 2.5 Calling a Non-Void Method |    |   |
|  Week 8  | 2.6 String Objects: Concatenation, Literals, and More |    |   |
|  Week 8  | 2.7 String Methods |    |   |
|  Week 9  | 2.8 Wrapper: Classes Integer and Double |   |   |
|  Week 9  | 2.9 Using the Math Class |   |   |
|  Week 10  | 4.1 while Loops |   |   |
|  Week 10  | 4.2 for Loops |    |   |
|  Week 11  | 4.3 Developing Algorithms Using Strings |    |   |
|  Week 11  | 4.4 Nested Iteration |    |   |
|  Week 12  | 4.5 Informal Code Analysis |    |   |
|  Week 12  | 5.1 Anatomy of a Class |    |   |
|  Week 13  | 5.2 Constructors |    |   |
|  Week 13  | 5.3 Documentation with Comments |    |   |
|  Week 14  | 5.4 Accessor Methods |    |   |
|  Week 14  | 5.5 Mutator Methods |    |   |
|  Week 15  | 5.6 Writing Methods |    |   |
|  Week 15  | 5.7 Static Variables and Methods |   |   |
|  Week 16  | 5.8 Scope and Access |    |   |
|  Week 16  | 5.9 this Keyword |    |   |
|  Week 16  | 5.10 Ethical and Social Implications of Computing Systems |    |   |
|  Week 17  | 6.1 Array Creation and Access |   |   |
|  Week 17  | 6.2 Traversing Arrays |    |   |
|    | ----------------------- **Semester 1 Ends** ----------------------- |   |   |
|  Week 19  | 6.3 Enhanced for Loop for Arrays |   |   |
|  Week 19  | 6.4 Developing Algorithms Using Arrays |    |   |
|  Week 20  | 7.1 Introduction to ArrayList |    |   |
|  Week 20  | 7.2 ArrayList Methods |    |   |
|  Week 21  | 7.3 Traversing ArrayLists |   |   |
|  Week 21  | 7.4 Developing Algorithms Using ArrayLists |    |   |
|  Week 22  | 7.5 Searching |    |   |
|  Week 22  | 7.6 Sorting |    |   |
|  Week 23  | 7.7 Ethical Issues Around Data Collection (no quiz) |    |   |
|  Week 23  | 8.1 2D Arrays |    |   |
|  Week 24  | 8.2 Traversing 2D Arrays |    |   |
|  Week 24  | 9.1 Creating Superclasses and Subclasses (no quiz) |    |   |
|  Week 25  | 9.2 Writing Constructors for Subclasses |    |   |
|  Week 25  | 9.3 Overriding Methods |   |   |
|  Week 26  | 9.4 super Keyword |    |   |
|  Week 26  | 9.5 Creating References Using Inheritance Hierarchies |   |   |
|  Week 27  | 9.6 Polymorphism |   |   |
|  Week 27  | 9.7 Object Superclass |   |   |
|  Week 28  | 10.1 Recursion |    |   |
|  Week 28  | 10.2 Recursive Searching and Sorting |   |   |




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
