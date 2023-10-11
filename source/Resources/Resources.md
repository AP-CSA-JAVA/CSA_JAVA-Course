# Resources

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
