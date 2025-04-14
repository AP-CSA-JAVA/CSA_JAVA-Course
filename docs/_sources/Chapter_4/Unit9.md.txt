# Unit 9

## 9.1 Creating Superclasses and Subclasses
**Goals**
- Create an inheritance relationship from a subclass to the superclass.
- Write program code to define a new type by creating superclasses and subclasses.


**Keywords**
<details><summary>Click Here</summary>

---

Key concepts and keywords for **Java Inheritance**:

**Core Concepts**:
1. **Inheritance**: The mechanism in Java where one class can inherit fields and methods from another class.
2. **Superclass (Parent Class)**: The class being inherited from.
3. **Subclass (Child Class)**: The class that inherits from the superclass.
4. **`extends` keyword**: Used to indicate that a class is inheriting from another class.
5. **Overriding**: Redefining a method in the subclass to provide a specific implementation.  `@Override` **annotation**: Used to indicate that a method is overriding a method in the superclass.
6. **`super` keyword**: Used to refer to the superclass’s fields and methods, including calling the superclass constructor.  **`super()`**: Calls the superclass's constructor.
7. **Method Overloading**: Having multiple methods in the same class with the same name but different parameter types.
8. **Method Overriding**: A subclass provides its own implementation of a method already defined in its superclass.
9. **Access Modifiers**: Controls access to inherited methods and fields (e.g., `public`, `protected`, `private`).
10. **Polymorphism**: The ability to treat an object of a subclass as if it were an object of the superclass. It is usually used in conjunction with method overriding.
11. **Upcasting**: Assigning an object of a subclass to a variable of the superclass type.
12. **Downcasting**: Casting a superclass reference back to a subclass type (can lead to `ClassCastException`).
13. **Abstract Classes**: Classes that cannot be instantiated and may contain abstract methods (methods without a body) that must be implemented by subclasses.  It may contain abstract methods (methods without a body) as well as non-abstract methods (methods with implementations). The purpose of an abstract class is to provide a base for other classes to inherit from. It is often used to define a common interface or shared functionality for subclasses while enforcing a certain structure.
    - Key points about abstract classes:
        - It can have both abstract (without implementation) and non-abstract methods (with implementation).
        - It can have instance variables (fields) and constructors.
        - It is declared using the `abstract` keyword.
14. **Abstract Methods**: Methods in an abstract class that do not have a body and must be implemented in concrete subclasses. An `abstract method` is a method that is declared without a body in an abstract class (or an interface). Abstract methods define a signature (name, parameters, and return type) but do not provide the actual implementation. Any subclass of an abstract class is required to implement all of its abstract methods unless the subclass is also abstract.
    - Key points about abstract methods:
        - It cannot have a body (no implementation).
        - It must be implemented by a concrete (non-abstract) subclass.
        - It is declared using the `abstract` keyword.
15. **`instanceof` Operator**: Checks whether an object is an instance of a particular class or subclass.
16. **Constructors in Inheritance**: Subclasses may call the constructor of the superclass using `super()`, and can also have their own constructors.
17. **`this` keyword**: Refers to the current object in the subclass.

**Key Terms**:
1. **Single Inheritance**: A subclass inherits from only one superclass.
2. **Multilevel Inheritance**: A class can inherit from a subclass, which itself inherits from another superclass.
3. **Hierarchical Inheritance**: Multiple subclasses inherit from a single superclass.
4. **Interface**: Not strictly inheritance, but allows a class to inherit behavior (methods) without implementing it.
5. **Concrete Class**: A class that can be instantiated and does not contain abstract methods.


The keywords and concepts form the foundation of *inheritance* in Java. In Object-Oriented Programming (OOP), understanding how objects and classes interact is vital to successful programming.

---


</details>

In Java, there are four different types of inheritance variations that you can demonstrate:

- single inheritance
- multiple inheritance (through **interfaces**)
- multilevel inheritance
- hierarchical inheritance. 

Here are examples that illustrates each of these variations:

Single Inheritance:
Single inheritance is a type of inheritance where a class extends only one superclass. In this example, we'll create a base class called Animal and a derived class called Dog, which inherits from Animal.

```java
// Single Inheritance
class Animal {
    void sound() {
        System.out.println("Animals make different sounds.");
    }
}

class Dog extends Animal {
    @Override
    void sound() {
        System.out.println("Dog barks.");
    }
}

public class Main {
    public static void main(String[] args) {
        Dog dog = new Dog();
        dog.sound(); // Output: Dog barks.
    }
}
```

Multiple Inheritance (through interfaces):
Java does not support multiple inheritance of classes due to the "diamond problem" where ambiguity may arise when two superclasses have the same method name. However, multiple inheritance can be achieved through interfaces. In this example, we'll create two interfaces, Swim and Fly, and a class Bird that implements both interfaces.

```java
// Multiple Inheritance (through interfaces)
interface Swim {
    void swim();
}

interface Fly {
    void fly();
}

class Bird implements Swim, Fly {
    @Override
    public void swim() {
        System.out.println("Bird can swim.");
    }

    public void fly() {
        System.out.println("Bird can fly.");
    }
}

public class Main {
    public static void main(String[] args) {
        Bird bird = new Bird();
        bird.swim(); // Output: Bird can swim.
        bird.fly();  // Output: Bird can fly.
    }
}
```

Multilevel Inheritance:
In multilevel inheritance, a class extends another class, and that class further extends another class. In this example, we'll create a base class Vehicle, a derived class Car that inherits from Vehicle, and another class Sedan that inherits from Car.

```java
// Multilevel Inheritance
class Vehicle {
    void drive() {
        System.out.println("Vehicles can be driven.");
    }
}

class Car extends Vehicle {
    @Override
    void honk() {
        System.out.println("Car honks.");
    }
}

class Sedan extends Car {
    @Override
    void fuelType() {
        System.out.println("Sedan uses petrol for fuel.");
    }
}

public class Main {
    public static void main(String[] args) {
        Sedan sedan = new Sedan();
        sedan.drive();    // Output: Vehicles can be driven.
        sedan.honk();     // Output: Car honks.
        sedan.fuelType(); // Output: Sedan uses petrol for fuel.
    }
}
```

Hierarchical Inheritance:
Hierarchical inheritance is a type of inheritance where multiple classes inherit from a single base class. In this example, we'll create a base class Shape and two derived classes Circle and Square, which both inherit from Shape.

```java
// Hierarchical Inheritance
class Shape {
    void draw() {
        System.out.println("Shapes can be drawn.");
    }
}

class Circle extends Shape {
    @Override
    void draw() {
        System.out.println("Circle can be drawn.");
    }
}

class Square extends Shape {
    @Override
    void draw() {
        System.out.println("Square can be drawn.");
    }
}

public class Main {
    public static void main(String[] args) {
        Circle circle = new Circle();
        Square square = new Square();

        circle.draw(); // Output: Circle can be drawn.
        square.draw(); // Output: Square can be drawn.
    }
}
```

The three Java programs that demonstrate three different types of inheritance: `single inheritance`, `multiple inheritance (achieved through interfaces)`, and `hierarchical inheritance`. Each program will include an `ArrayList` to showcase different aspects of inheritance.


Single Inheritance:
In single inheritance, a class extends only one superclass.

```java
import java.util.ArrayList;

class Animal {
    void sound() {
        System.out.println("Animal makes a sound");
    }
}

class Dog extends Animal {
    @Override
    void sound() {
        System.out.println("Dog barks");
    }
}

public class Main {
    public static void main(String[] args) {
        ArrayList<Animal> animals = new ArrayList<>();
        animals.add(new Animal());
        animals.add(new Dog());

        for (Animal animal : animals) {
            animal.sound();
        }
    }
}
```

Multiple Inheritance (Using Interfaces):
In Java, multiple inheritance can be achieved through interfaces. A class can implement multiple interfaces.


```java
import java.util.ArrayList;

interface Flyable {
    void fly();
}

interface Swimmable {
    void swim();
}

class Bird implements Flyable {
    @Override
    public void fly() {
        System.out.println("Bird is flying");
    }
}

class Fish implements Swimmable {
    @Override
    public void swim() {
        System.out.println("Fish is swimming");
    }
}

public class Main {
    public static void main(String[] args) {
        ArrayList<Object> entities = new ArrayList<>();
        entities.add(new Bird());
        entities.add(new Fish());

        for (Object entity : entities) {
            if (entity instanceof Flyable) {
                ((Flyable) entity).fly();
            } else if (entity instanceof Swimmable) {
                ((Swimmable) entity).swim();
            }
        }
    }
}
```

Hierarchical Inheritance:
In hierarchical inheritance, a single superclass is extended by multiple subclasses.


```java
import java.util.ArrayList;

class Shape {
    void draw() {
        System.out.println("Drawing a shape");
    }
}

class Circle extends Shape {
    @Override
    void draw() {
        System.out.println("Drawing a circle");
    }
}

class Rectangle extends Shape {
    @Override
    void draw() {
        System.out.println("Drawing a rectangle");
    }
}

public class Main {
    public static void main(String[] args) {
        ArrayList<Shape> shapes = new ArrayList<>();
        shapes.add(new Circle());
        shapes.add(new Rectangle());

        for (Shape shape : shapes) {
            shape.draw();
        }
    }
}
```



## 9.2 Writing Constructors for Subclasses

When creating subclasses in Java, constructors are used to initialize the subclass's specific attributes and also to ensure that the superclass's state is properly initialized. To write constructors for subclasses, you can use the super() keyword to invoke the superclass's constructor and provide any additional initialization specific to the subclass. 

**Protected vs Private Keywords**

<details><summary>Click Here</summary>

In Java, the `protected` and `private` keywords are **access modifiers** that control the visibility (or accessibility) of classes, methods, and variables. Below is a comparison between the two:

---

**🔒 `private`**:
- **Access Level:** Most restrictive.
- **Accessible From:**
  - Only within the **same class**.
- **Not Accessible From:**
  - Subclasses (even if they are in the same package).
  - Other classes in the same package.
  - Any external class.

**✅ Use Case**:
Use `private` when you want to **encapsulate** your data or methods so that they cannot be accessed or modified from outside the class.

```java
public class Example {
    private int data;

    private void display() {
        System.out.println("This is private.");
    }
}
```

---

**🛡️ `protected`**:
- **Access Level:** Less restrictive than `private`, more restrictive than `public`.
- **Accessible From:**
  - The same class.
  - **Subclasses** (even in different packages).
  - Other classes in the **same package**.
- **Not Accessible From:**
  - Non-subclass classes in **different packages**.

**✅ Use Case**:
Use `protected` when you want to **allow subclasses to access** or override certain methods or fields, but still keep access restricted from unrelated classes.

```java
public class Example {
    protected int data;

    protected void display() {
        System.out.println("This is protected.");
    }
}
```

---

🧠 Summary Table:

| Modifier   | Same Class | Same Package | Subclass (diff package) | Other Classes |
|------------|------------|--------------|--------------------------|----------------|
| `private`  | ✅         | ❌           | ❌                       | ❌             |
| `protected`| ✅         | ✅           | ✅                       | ❌             |



---

</details>



Here's an example that demonstrates how to write constructors for a subclass:

```java
public class Animal {
    protected String name;

    public Animal(String name) {
        this.name = name;
    }

    public void speak() {
        System.out.println("Animal speaks");
    }
}

public class Dog extends Animal {
    private String breed;

    public Dog(String name, String breed) {
        super(name); // Invoking superclass constructor
        this.breed = breed;
    }

    public void bark() {
        System.out.println("Dog barks");
    }

    @Override
    public void speak() {
        System.out.println("Dog speaks");
    }
}

public class Main {
    public static void main(String[] args) {
        Dog dog = new Dog("Buddy", "Labrador");
        System.out.println("Name: " + dog.name);
        System.out.println("Breed: " + dog.breed);
        dog.speak();
        dog.bark();
    }
}
```

In this example, we have a superclass Animal and a subclass Dog. The Animal class has a constructor that takes a name parameter and initializes the name attribute. It also has a speak() method.

The Dog class extends the Animal class and adds a new attribute breed. The Dog class has a constructor that takes both name and breed parameters. It invokes the superclass constructor using super(name) to initialize the name attribute inherited from Animal. It also initializes the breed attribute. The Dog class overrides the speak() method from the Animal class and adds a new method bark().

In the Main class, we create an instance of Dog and pass values to the constructor for name and breed. We then access the name and breed attributes of the Dog object and call the speak() and bark() methods.

When you run the program, it will output:

```java
Name: Buddy
Breed: Labrador
Dog speaks
Dog barks
```

This demonstrates how to write constructors for a subclass in Java, ensuring proper initialization of both superclass and subclass attributes.

## 9.3 Overriding Methods

**Goals**
- Create an inheritance relationship from a subclass to the superclass.
- Incorporate method overriding in a subclass.

**Concepts you need to understand**:
- When can you override?
- How do you override?
- What happens when you override?

Recall, a **void method** does not return a value.  It performs an action (like printing something or modifying an instance variable), but does not give anything back to the 'call'.  When a class (subclass) extends another class (superclass), it inherits its methods and instance variables.  A subclass can **override** a void method of the superclass which means the subclass provides its **own version** of the method.

**Example**:


```java
public class Animal {
    public void speak() {
        System.out.println("Animal speaks");
    }
}

public class Dog extends Animal {
    public void speak() {
        System.out.println("Bark");
    }
}

Animal a = new Dog();
a.speak(); // Output: Bark
```

Even though `a` is declared as an `Animal`, the actual object is a `Dog`, so the `Dog`’s `speak()` method is used.  This is called **dynamic method** or **polymorphism**.

🧠 **Note**:

Understanding how **void methods behave with inheritance** is key to:
- Using polymorphism correctly
- Designing flexible, reusable code
- Knowing which version of a method is called at runtime

---

Here's an example that demonstrates method overriding in Java:

```java
public class Animal {
    public void makeSound() {
        System.out.println("Animal makes a sound");
    }
}

public class Cat extends Animal {
    @Override
    public void makeSound() {
        System.out.println("Cat meows");
    }
}

public class Dog extends Animal {
    @Override
    public void makeSound() {
        System.out.println("Dog barks");
    }
}

public class Main {
    public static void main(String[] args) {
        Animal animal1 = new Animal();
        animal1.makeSound();

        Animal animal2 = new Cat();
        animal2.makeSound();

        Animal animal3 = new Dog();
        animal3.makeSound();
    }
}
```

In this example, we have a superclass `Animal` with a method `makeSound()`. The Cat and Dog classes are subclasses of Animal and they override the `makeSound()` method.

The Cat class overrides the `makeSound()` method and provides its own implementation to print "Cat meows".

The Dog class also overrides the `makeSound()` method and provides its own implementation to print "Dog barks".

In the Main class, we create instances of Animal, Cat, and Dog. We assign the Cat and Dog objects to Animal references. When we call the `makeSound()` method on each object, the overridden version of the method in the respective subclass is invoked.

When you run the program, it will output:

```java
Animal makes a sound
Cat meows
Dog barks
```


📌 Sample Question

```java
public class Shape {
    public void printType() {
        System.out.println("Shape");
    }
}

public class Circle extends Shape {
    public void printType() {
        System.out.println("Circle");
    }
}

Shape s = new Circle();
s.printType();
```

What does `s` print?
<details><Summary>Check Here</Summary>

✅ **`Circle`**

Even though `s` is declared as a `Shape`, it refers to a `Circle` object, so the `Circle`’s version of `printType()` runs.

</details>


## 9.4 super Keyword

In Java, the super keyword is used to refer to the superclass, allowing you to access its members (fields and methods) from within a subclass. It is particularly useful when you want to distinguish between the superclass's members and the subclass's members that have the same name. The super keyword can be used to invoke the superclass's constructor, access its instance variables or methods, and invoke its overridden methods. 

🔑 **Vocabulary**

1. **`super` keyword** – A reference to the **parent (superclass)** of the current object.
2. **Superclass** – The class being **extended** or inherited from.
3. **Subclass** – The class that **extends** the superclass.
4. **Constructor** – A special method used to create objects.
5. **Method overriding** – When a subclass provides a specific implementation of a method that is already defined in its superclass.

---

📘 **Main Concepts of `super`**

1. `super` is used in **two main ways**:
   - **To call a superclass constructor**
   - **To call a superclass method**

---


💡 Notes & Tips:
- If a superclass has a **no-argument constructor**, the compiler automatically inserts `super()` in the subclass constructor.
- If the superclass only has **constructors with parameters**, then the subclass must explicitly call `super(parameters)`.

---


Here's an example that demonstrates the usage of the super keyword in Java:

```java
public class Animal {
    protected String name;

    public Animal(String name) {
        this.name = name;
    }

    public void sleep() {
        System.out.println("Animal sleeps");
    }
}

public class Dog extends Animal {
    private String breed;

    public Dog(String name, String breed) {
        super(name); // Invoking superclass constructor
        this.breed = breed;
    }

    public void sleep() {
        super.sleep(); // Invoking superclass method
        System.out.println("Dog sleeps");
    }

    public void displayDetails() {
        System.out.println("Name: " + super.name); // Accessing superclass variable
        System.out.println("Breed: " + breed);
    }
}

public class Main {
    public static void main(String[] args) {
        Dog dog = new Dog("Buddy", "Labrador");
        dog.sleep(); // Invoking overridden method
        dog.displayDetails(); // Accessing superclass variable
    }
}
```

In this example, we have a superclass Animal with a constructor that takes a name parameter and initializes the name attribute. It also has a sleep() method.

The Dog class extends the Animal class and adds a new attribute breed. The Dog class has a constructor that takes both name and breed parameters. It invokes the superclass constructor using super(name) to initialize the name attribute inherited from Animal. It also initializes the breed attribute. The Dog class overrides the sleep() method from the Animal class and adds a new method displayDetails().

In the sleep() method of the Dog class, we invoke the superclass's sleep() method using super.sleep() to execute the superclass's behavior before adding the dog-specific behavior.

In the displayDetails() method, we access the name attribute of the superclass using super.name to distinguish it from the name attribute of the subclass.

In the Main class, we create an instance of Dog and pass values to the constructor for name and breed. We then call the sleep() method, which invokes the overridden method, and the displayDetails() method, which accesses the superclass variable.

When you run the program, it will output:

```java
Animal sleeps
Dog sleeps
Name: Buddy
Breed: Labrador
```


## 9.5 Creating References Using Inheritance Hierarchies

🧠 What Does "Creating References Using Inheritance Hierarchies" Mean?

In Java, you can create references using inheritance hierarchies to refer to objects of both the superclass and its subclasses. This allows you to treat objects of different classes in the hierarchy as interchangeable, providing flexibility and polymorphic behavior. 

✅ **Key Concept**:
You **can use a superclass reference variable to refer to an object of a subclass**. This is legal because the subclass **inherits** from the superclass and is guaranteed to have at least the same structure and behavior.

```java
Animal a = new Dog();  // Legal! Dog is an Animal
```

This allows for *flexibility*, *abstraction*, and *polymorphism* in code.

---

🧩 **Let’s look at this hierarchy Example called `Animals`**:

🐾 Superclass:
```java
public class Animal {
    public void speak() {
        System.out.println("Some generic animal sound");
    }
}
```

🐶 Subclass:
```java
public class Dog extends Animal {
    public void speak() {
        System.out.println("Woof!");
    }
}
```

🐱 Another Subclass:
```java
public class Cat extends Animal {
    public void speak() {
        System.out.println("Meow!");
    }
}
```

✨ Now try this:
```java
Animal myPet = new Dog();
myPet.speak();  // Output: Woof!
```

**Note**:  Even though `myPet` is declared as type `Animal`, because it was created as a `Dog`, the **Dog's version** of `speak()` is called. This is **dynamic method**—a key concept in polymorphism.

---

Here is another example creating references using inheritance hierarchies:

```java
public class Animal {
    protected String name;

    public Animal(String name) {
        this.name = name;
    }

    public void makeSound() {
        System.out.println("Animal makes a sound");
    }
}

public class Dog extends Animal {
    private String breed;

    public Dog(String name, String breed) {
        super(name); // Invoking superclass constructor
        this.breed = breed;
    }

    public void makeSound() {
        System.out.println("Dog barks");
    }

    public void fetch() {
        System.out.println("Dog fetches");
    }
}

public class Cat extends Animal {
    private String color;

    public Cat(String name, String color) {
        super(name); // Invoking superclass constructor
        this.color = color;
    }

    public void makeSound() {
        System.out.println("Cat meows");
    }

    public void scratch() {
        System.out.println("Cat scratches");
    }
}

public class Main {
    public static void main(String[] args) {
        Animal animal1 = new Animal("Generic Animal");
        Animal animal2 = new Dog("Buddy", "Labrador");
        Animal animal3 = new Cat("Kitty", "White");

        animal1.makeSound();
        animal2.makeSound();
        animal3.makeSound();

        // animal2.fetch(); // Error: fetch() is not defined in the Animal class
        // animal3.scratch(); // Error: scratch() is not defined in the Animal class

        Dog dog = (Dog) animal2; // Casting the reference to Dog type
        dog.fetch();

        Cat cat = (Cat) animal3; // Casting the reference to Cat type
        cat.scratch();
    }
}
```

In the above example, we have a superclass Animal with a constructor that takes a name parameter and initializes the name attribute. It also has a `makeSound()` method.

The Dog class extends the Animal class and adds a new attribute breed. It has a constructor that takes both name and breed parameters. It overrides the `makeSound()` method and adds a new method `fetch()`.

The Cat class also extends the Animal class and adds a new attribute color. It has a constructor that takes both name and color parameters. It overrides the `makeSound()` method and adds a new method `scratch()`.

In the Main class, we create references of type Animal and assign them objects of Animal, Dog, and Cat. This demonstrates polymorphism, where objects of different types in the inheritance hierarchy can be referred to by a common superclass reference.

We call the `makeSound()` method on each reference, which invokes the overridden method based on the actual type of the object.

We cannot directly call the `fetch()` method on the Animal references because it is not defined in the Animal class. To access the fetch() method, we can cast the Animal reference to Dog type, as demonstrated with `Dog dog = (Dog) animal2`, and then we can call `dog.fetch()`.

Similarly, we can cast the Animal reference to Cat type, as demonstrated with `Cat cat = (Cat) animal3`, and then we can call `cat.scratch()`.

When you run the program, it will output:

```java
Animal makes a sound
Dog barks
Cat meows
Dog fetches
Cat scratches
```


## 9.6 Polymorphism

Polymorphism in Java refers to the ability of objects of different classes in an inheritance hierarchy to be treated as objects of their common superclass. This allows for code reuse, flexibility, and the ability to invoke overridden methods based on the actual type of the object. Here are multiple examples that demonstrate polymorphism in Java:

- Polymorphic Method Invocation:

```java
public class Animal {
    public void makeSound() {
        System.out.println("Animal makes a sound");
    }
}

public class Dog extends Animal {
    public void makeSound() {
        System.out.println("Dog barks");
    }
}

public class Cat extends Animal {
    public void makeSound() {
        System.out.println("Cat meows");
    }
}

public class Main {
    public static void main(String[] args) {
        Animal animal1 = new Animal();
        Animal animal2 = new Dog();
        Animal animal3 = new Cat();

        animal1.makeSound();
        animal2.makeSound();
        animal3.makeSound();
    }
}
```

**Output**
```java
Animal makes a sound
Dog barks
Cat meows
```

In this example, we have a superclass Animal with a makeSound() method. The Dog and Cat classes are subclasses of Animal and override the makeSound() method. In the Main class, we create objects of type Animal, Dog, and Cat, and call the makeSound() method on each object. The actual implementation of the method invoked depends on the type of the object, demonstrating polymorphic method invocation.

Polymorphic Assignments:

```java
public class Shape {
    public void draw() {
        System.out.println("Drawing a shape");
    }
}

public class Circle extends Shape {
    public void draw() {
        System.out.println("Drawing a circle");
    }
}

public class Rectangle extends Shape {
    public void draw() {
        System.out.println("Drawing a rectangle");
    }
}

public class Main {
    public static void main(String[] args) {
        Shape shape1 = new Circle();
        Shape shape2 = new Rectangle();

        shape1.draw();
        shape2.draw();
    }
}
```

**Output**
```java
Drawing a circle
Drawing a rectangle
```

In this example, we have a superclass Shape with a draw() method. The Circle and Rectangle classes are subclasses of Shape and override the draw() method. In the Main class, we create objects of type Circle and Rectangle, but assign them to references of type Shape. We then call the draw() method on each reference, and the actual implementation of the method invoked is based on the type of the object referred to, demonstrating polymorphic assignments.

Polymorphic Parameter Usage:

```java
public class Animal {
    public void makeSound() {
        System.out.println("Animal makes a sound");
    }
}

public class Dog extends Animal {
    public void makeSound() {
        System.out.println("Dog barks");
    }
}

public class Cat extends Animal {
    public void makeSound() {
        System.out.println("Cat meows");
    }
}

public class AnimalShelter {
    public void makeAnimalsSpeak(Animal[] animals) {
        for (Animal animal : animals) {
            animal.makeSound();
        }
    }
}

public class Main {
    public static void main(String[] args) {
        Animal[] animals = { new Dog(), new Cat() };
        AnimalShelter shelter = new AnimalShelter();
        shelter.makeAnimalsSpeak(animals);
    }
}
```

**Output**
```java
Dog barks
Cat meows
```

In this example, we have a superclass Animal with a makeSound() method. The Dog and Cat classes are subclasses of Animal and override the makeSound() method. The AnimalShelter class has a makeAnimalsSpeak() method that takes an array of Animal objects and calls the makeSound() method on each object. In the Main class, we create an array of Animal objects with a Dog and a Cat, and pass it to the makeAnimalsSpeak() method. The overridden makeSound() method of each object is invoked based on its actual type, demonstrating polymorphic parameter usage.

These examples illustrate different aspects of polymorphism in Java, including polymorphic method invocation, polymorphic assignments, and polymorphic parameter usage. Polymorphism allows for flexible and extensible code by leveraging the inheritance hierarchy and the ability to treat objects of different classes as objects of their common superclass.

## 9.7 Object Superclass

In Java, the Object class is the root superclass for all other classes. Every class in Java implicitly inherits from the Object class, either directly or through a chain of class inheritance. The Object class provides some common methods and functionality that are inherited by all classes. Here are several examples of the Object superclass in Java:

`toString()` Method:

```java
public class Person {
    private String name;
    private int age;

    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    @Override
    public String toString() {
        return "Person [name=" + name + ", age=" + age + "]";
    }
}

public class Main {
    public static void main(String[] args) {
        Person person = new Person("John Doe", 25);
        System.out.println(person.toString());
    }
}
```

**Output**
```java
Person [name=John Doe, age=25]
```

In this example, the Person class overrides the toString() method inherited from the Object class. The overridden toString() method returns a string representation of the Person object. When we call person.toString() or implicitly use System.out.println(person), it invokes the overridden toString() method to provide a meaningful string representation of the object.

`equals()` Method:
```java
public class Person {
    private String name;
    private int age;

    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj == null || getClass() != obj.getClass()) {
            return false;
        }
        Person person = (Person) obj;
        return age == person.age && Objects.equals(name, person.name);
    }
}

public class Main {
    public static void main(String[] args) {
        Person person1 = new Person("John Doe", 25);
        Person person2 = new Person("John Doe", 25);
        Person person3 = new Person("Jane Smith", 30);

        System.out.println(person1.equals(person2)); // true
        System.out.println(person1.equals(person3)); // false
    }
}
```

**Output:**
```java
true
false
```

In this example, the Person class overrides the equals() method inherited from the Object class. The overridden equals() method compares two Person objects based on their name and age attributes. When we call person1.equals(person2), it invokes the overridden equals() method to check if the two objects are equal based on their attributes.

`hashCode()` Method:
```java
public class Person {
    private String name;
    private int age;

    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    @Override
    public int hashCode() {
        return Objects.hash(name, age);
    }
}

public class Main {
    public static void main(String[] args) {
        Person person = new Person("John Doe", 25);
        System.out.println(person.hashCode());
    }
}
```

**Output**
```java
964396650
```

In this example, the Person class overrides the hashCode() method inherited from the Object class. The overridden hashCode() method calculates the hash code of the Person object based on its name and age attributes. When we call person.hashCode(), it invokes the overridden hashCode() method to retrieve the hash code value of the object.

