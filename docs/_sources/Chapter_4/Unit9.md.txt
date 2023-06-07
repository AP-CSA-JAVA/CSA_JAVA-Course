# Unit 9

## 9.1 Creating Superclasses and Subclasses

In Java, there are four different types of inheritance variations that you can demonstrate:

- single inheritance
- multiple inheritance (through interfaces)
- multilevel inheritance
- hierarchical inheritance. 

Here is an example that illustrates each of these variations:

```java
// Single Inheritance
class Animal {
    void eat() {
        System.out.println("Animal is eating.");
    }
}

class Dog extends Animal {
    void bark() {
        System.out.println("Dog is barking.");
    }
}

// Multiple Inheritance (through interfaces)
interface Swimming {
    void swim();
}

interface Flying {
    void fly();
}

class Duck implements Swimming, Flying {
    public void swim() {
        System.out.println("Duck is swimming.");
    }
    
    public void fly() {
        System.out.println("Duck is flying.");
    }
}

// Multilevel Inheritance
class Vehicle {
    void start() {
        System.out.println("Vehicle is starting.");
    }
}

class Car extends Vehicle {
    void accelerate() {
        System.out.println("Car is accelerating.");
    }
}

class SportsCar extends Car {
    void race() {
        System.out.println("Sports car is racing.");
    }
}

// Hierarchical Inheritance
class Shape {
    void draw() {
        System.out.println("Drawing shape.");
    }
}

class Circle extends Shape {
    void drawCircle() {
        System.out.println("Drawing circle.");
    }
}

class Rectangle extends Shape {
    void drawRectangle() {
        System.out.println("Drawing rectangle.");
    }
}

public class InheritanceDemo {
    public static void main(String[] args) {
        // Single Inheritance
        Dog dog = new Dog();
        dog.eat();
        dog.bark();
        System.out.println();

        // Multiple Inheritance (through interfaces)
        Duck duck = new Duck();
        duck.swim();
        duck.fly();
        System.out.println();

        // Multilevel Inheritance
        SportsCar sportsCar = new SportsCar();
        sportsCar.start();
        sportsCar.accelerate();
        sportsCar.race();
        System.out.println();

        // Hierarchical Inheritance
        Circle circle = new Circle();
        circle.draw();
        circle.drawCircle();
        System.out.println();

        Rectangle rectangle = new Rectangle();
        rectangle.draw();
        rectangle.drawRectangle();
    }
}
```

In this program, each inheritance variation is demonstrated through different classes and interfaces:
1.	Single Inheritance: The Animal class serves as the base class, and the Dog class extends it to inherit its methods (eat()) and add its own method (bark()).
2.	Multiple Inheritance (through interfaces): The Swimming and Flying interfaces define methods swim() and fly(), respectively. The Duck class implements both interfaces and provides their implementations.
3.	Multilevel Inheritance: The Vehicle class is the base class, the Car class extends it, and the SportsCar class further extends the Car class. Each subclass inherits and adds its own methods (start(), accelerate(), race()).
4.	Hierarchical Inheritance: The Shape class is the base class, and the Circle and Rectangle classes extend it. Each subclass inherits the draw() method and adds its own specific method (drawCircle(), drawRectangle()).
When you run this program, it will demonstrate the different variations of inheritance by invoking the appropriate methods on the instantiated objects.


## 9.2 Writing Constructors for Subclasses

## 9.3 Overriding Methods

## 9.4 super Keyword

## 9.5 Creating References Using Inheritance Hierarchies

## 9.6 Polymorphism

## 9.7 Object Superclass
