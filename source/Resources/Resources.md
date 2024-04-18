# Resources


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
