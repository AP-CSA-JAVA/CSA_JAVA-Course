# Oracle Resources


## Oracle Java Foundations (1Z0-811) — Deep Dive Topic Reference

> Each section is the **best placement** in the AP CSA pacing guide, explains the concept in full, and provides classroom-ready examples with common exam traps highlighted.

---

## TABLE OF CONTENTS
1. [JVM & JRE — Platform Architecture](#1-jvm--jre)
2. [The `this` Keyword — Nuances & Traps](#2-the-this-keyword)
3. [OOP Principles — Encapsulation, Inheritance, Polymorphism, Abstraction](#3-oop-principles)
4. [Packages & the CLASSPATH](#4-packages--classpath)
5. [Access Modifiers & Visibility](#5-access-modifiers--visibility)
6. [Throwable Hierarchy & Exception Handling](#6-throwable-hierarchy--exception-handling)
7. ["Swallowing" — Empty Catch Blocks](#7-swallowing--empty-catch-blocks)
8. [Comparing — `==` vs `.equals()` vs `compareTo()`](#8-comparing)
9. [Visibility Scope vs. Lifespan (Storage) Scope](#9-visibility-scope-vs-lifespan-scope)

---

## 1. JVM & JRE

### 📍 Best Placement in CSA Curriculum
**Unit 1, Week 1** — immediately after "Why Java?" before writing the first program. Students need this mental model before they compile anything.

### Concept Overview

```
  You write:        HelloWorld.java      ← Human-readable source code
  javac compiles:   HelloWorld.class     ← Bytecode (platform-NEUTRAL)
  JVM executes:     bytecode → native    ← Platform-SPECIFIC translation
```

| Component | What It Is | What It Does | Analogy |
|-----------|-----------|--------------|---------|
| **JDK** (Java Development Kit) | Developer toolkit | Includes `javac` compiler, debugger, `javadoc` | The full workshop |
| **JRE** (Java Runtime Environment) | Runtime only | Includes JVM + standard libraries (no compiler) | The engine to run the car |
| **JVM** (Java Virtual Machine) | Software interpreter | Translates bytecode to native machine code at runtime | A universal translator |

### Key Exam Nuances

**1. "Write once, run anywhere" — but HOW?**
The `.class` bytecode is platform-neutral. The JVM is platform-specific (there is a different JVM for Windows, Mac, Linux). The JVM is what makes Java portable, not the source code.

```java
// HelloWorld.java compiles to HelloWorld.class (same on ALL platforms)
// The JVM on Windows reads that .class file differently than the JVM on Linux
// BUT the bytecode itself never changes — that's the portability
```

**2. JRE contains the JVM — the JDK contains the JRE**
```
JDK ⊃ JRE ⊃ JVM
```
- To RUN a Java program: you need a JRE (or JDK)
- To COMPILE a Java program: you need a JDK
- End users only need the JRE

**3. Memory management — Java vs C++**
The exam tests: "Does Java allow direct memory management (like C++ pointers)?"
> **No.** Memory is managed entirely by the JVM's garbage collector. Programmers cannot access memory addresses directly.

**4. The String Pool lives in JVM memory**
```java
String s1 = "hello";           // JVM checks pool → creates 1 object in pool
String s2 = "hello";           // JVM finds "hello" in pool → NO new object created
String s3 = new String("hello"); // Forces NEW object in heap (bypasses pool)

System.out.println(s1 == s2);  // true  (same pool reference)
System.out.println(s1 == s3);  // false (s3 is a different heap object)
System.out.println(s1.equals(s3)); // true (same content)
```
> ⚠️ **Exam Trap:** `new String("hello")` creates TWO objects — one in the pool (due to the literal) and one in the heap (due to `new`).

**5. Execution flow diagram**
```
HelloWorld.java
      ↓  javac (compiler in JDK)
HelloWorld.class  ← bytecode, not native code
      ↓  java command triggers JVM
   JVM loads class
      ↓  Just-In-Time (JIT) compiler
   Native machine code executes
      ↓
   Output to console
```

### ✅ Practice Question
```
Q: You compiled HelloWorld.java on a Windows machine and got HelloWorld.class.
   Can you run HelloWorld.class on a Mac?

A: Yes — IF a JRE (or JDK) is installed on the Mac. The .class bytecode is
   platform-neutral. The Mac's JVM translates it to Mac native code at runtime.
```

---

## 2. The `this` Keyword

### 📍 Best Placement in CSA Curriculum
**Unit 3, Week 12 (3.9)** — taught alongside constructors and instance variables. Revisit during **Inheritance (Week 17)** when `super` is introduced as a contrast.

### Concept Overview

`this` is a reference to the **current object** — the instance whose method or constructor is currently executing.

### Use Case 1 — Disambiguate field from parameter (most common)

```java
public class Dog {
    private String name;   // instance variable
    private int age;

    // WITHOUT this — BROKEN (parameter shadows the field)
    public Dog(String name, int age) {
        name = name;   // ← assigns parameter to itself! field is never set
        age = age;     // ← same problem
    }
}
```

```java
public class Dog {
    private String name;
    private int age;

    // WITH this — CORRECT
    public Dog(String name, int age) {
        this.name = name;   // this.name = field, name = parameter
        this.age = age;
    }

    public void setName(String name) {
        this.name = name;   // same pattern in setters
    }
}
```

### Use Case 2 — Constructor chaining with `this()`

```java
public class Rectangle {
    private int width;
    private int height;
    private String color;

    // Full constructor
    public Rectangle(int width, int height, String color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    // Delegates to full constructor — avoids duplicating logic
    public Rectangle(int width, int height) {
        this(width, height, "black");   // ← this() calls another constructor
    }

    // Single-arg delegates too
    public Rectangle(int size) {
        this(size, size);               // calls the 2-arg constructor above
    }
}
```

> ⚠️ **Exam Trap #1:** `this()` must be the **first statement** in a constructor. The following will NOT compile:
> ```java
> public Rectangle(int size) {
>     System.out.println("Creating square"); // ← COMPILE ERROR — this() must be first
>     this(size, size);
> }
> ```

> ⚠️ **Exam Trap #2:** `this()` cannot be used in a regular method — ONLY in constructors.
> ```java
> public void reset() {
>     this(0, 0, "black");  // ← COMPILE ERROR — not a constructor
> }
> ```

### Use Case 3 — Passing the current object as an argument

```java
public class Button {
    private String label;

    public Button(String label) {
        this.label = label;
    }

    public void click() {
        EventSystem.register(this);  // passes THIS button to the event system
    }
}
```

### `this` vs `super` — Key Contrast for Inheritance Week

| Keyword | Refers to | Used in |
|---------|-----------|---------|
| `this` | Current object / current class constructor | Methods & constructors |
| `super` | Parent class / parent class constructor | Methods & constructors |
| `this()` | Another constructor in the SAME class | Constructors only (must be first line) |
| `super()` | Constructor of the PARENT class | Constructors only (must be first line) |

> ⚠️ **Exam Trap:** You CANNOT use both `this()` AND `super()` in the same constructor. Each must be the first line — so only one can exist.

---

## 3. OOP Principles

### 📍 Best Placement in CSA Curriculum
- **Encapsulation** → Unit 3, Week 12 (with 3.1–3.5)
- **Inheritance & Polymorphism** → Inheritance unit, Weeks 16–18
- **Abstraction** → briefly in Unit 1.7 (Objects concept) and revisited in Inheritance

### The Four Pillars

---

#### 3A. Encapsulation
> "Bundle data and the methods that operate on it; hide the internals."

```java
public class BankAccount {
    private double balance;    // ← PRIVATE — hidden from outside

    public BankAccount(double initialBalance) {
        if (initialBalance >= 0) {
            this.balance = initialBalance;
        }
    }

    // Controlled access via public methods
    public double getBalance() {
        return balance;
    }

    public void deposit(double amount) {
        if (amount > 0) balance += amount;
    }

    public void withdraw(double amount) {
        if (amount > 0 && amount <= balance) balance -= amount;
        else System.out.println("Insufficient funds");
    }
}

// Outside the class:
BankAccount acct = new BankAccount(500);
// acct.balance = -9999;   ← COMPILE ERROR — private field protected!
acct.withdraw(100);         // ← must go through the validated method
System.out.println(acct.getBalance()); // 400.0
```

**Why it matters on the exam:** Questions about `private` vs `public` fields often test whether you understand that access through getters/setters allows validation that direct field access does not.

---

#### 3B. Inheritance
> "A subclass acquires the non-private fields and methods of its superclass."

```java
// Superclass
public class Animal {
    private String name;

    public Animal(String name) {
        this.name = name;
    }

    public String getName() { return name; }

    public String speak() {
        return "...";
    }
}

// Subclass
public class Dog extends Animal {
    private String breed;

    public Dog(String name, String breed) {
        super(name);           // ← MUST call parent constructor first
        this.breed = breed;
    }

    @Override
    public String speak() {
        return "Woof!";        // ← overrides Animal's speak()
    }

    public String getBreed() { return breed; }
}

// Usage
Animal a = new Dog("Rex", "Lab");  // polymorphism — Animal reference, Dog object
System.out.println(a.speak());     // "Woof!" — Dog's version called (dynamic dispatch)
System.out.println(a.getName());   // "Rex" — inherited from Animal
```

> ⚠️ **Exam Trap:** Subclasses do NOT inherit `private` members — they exist in the object but are invisible to the subclass. Access them through inherited `public` or `protected` getters.

---

#### 3C. Polymorphism
> "One interface, many forms — the correct method is chosen at runtime."

```java
Animal[] zoo = {
    new Dog("Rex", "Lab"),
    new Cat("Whiskers"),
    new Animal("Generic")
};

for (Animal a : zoo) {
    System.out.println(a.getName() + " says: " + a.speak());
    // Output depends on the ACTUAL type at runtime, not the declared type
}
// Rex says: Woof!
// Whiskers says: Meow!
// Generic says: ...
```

**Compile-time vs Runtime type:**
```java
Animal a = new Dog("Rex", "Lab");
// Compile-time type: Animal  (what the compiler sees)
// Runtime type:      Dog     (what actually runs)

a.speak();       // ✔ calls Dog.speak() — runtime type wins for OVERRIDDEN methods
a.getBreed();    // ✘ COMPILE ERROR — Animal doesn't know about getBreed()
                 //   must cast: ((Dog) a).getBreed()
```

---

#### 3D. Abstraction
> "Expose what an object does, not how it does it."

This is enforced through `private` fields + public methods (encapsulation) and through abstract classes/interfaces (beyond AP CSA scope but on Oracle exam).

```java
// Users of BankAccount don't need to know HOW balance is stored
// They just know: deposit(), withdraw(), getBalance() exist
// That's abstraction in practice
```

---

## 4. Packages & CLASSPATH

### 📍 Best Placement in CSA Curriculum
**Unit 1, Week 2 (1.3)** alongside `import` statements, and revisit briefly in **Unit 3, Week 12** when students write their own classes.

### Concept Overview

A **package** is a namespace that organizes related classes, similar to folders on a hard drive.

```
src/
  com/
    school/
      Student.java          ← package com.school;
      Teacher.java          ← package com.school;
    math/
      Calculator.java       ← package com.math;
```

### Declaring a Package

```java
// File: com/school/Student.java
package com.school;         // ← MUST be the first non-comment line

public class Student {
    private String name;
    private int grade;

    public Student(String name, int grade) {
        this.name = name;
        this.grade = grade;
    }
    // ...
}
```

### Importing a Package

```java
// Three ways to use a class from another package:

// Option 1 — fully qualified name (no import needed, but verbose)
com.school.Student s = new com.school.Student("Ana", 11);

// Option 2 — import specific class
import com.school.Student;
Student s = new Student("Ana", 11);

// Option 3 — import entire package (wildcard)
import com.school.*;
Student s = new Student("Ana", 11);
Teacher t = new Teacher("Ms. Smith");
```

> ⚠️ **Exam Trap #1:** `import` does NOT import sub-packages. `import com.school.*` does NOT import `com.school.honors.HonorsStudent`. Sub-packages must be imported separately.

> ⚠️ **Exam Trap #2:** `java.lang` is automatically imported — you never need to write `import java.lang.String` or `import java.lang.Math`.

> ⚠️ **Exam Trap #3:** `package` statement must come BEFORE `import` statements:
> ```java
> package com.school;    // 1st: package declaration
> import java.util.*;    // 2nd: imports
> public class Student { // 3rd: class definition
> ```

### The CLASSPATH

The CLASSPATH tells the JVM where to look for `.class` files.

```
// Running from command line:
java -classpath /home/student/classes com.school.Student

// Or with environment variable:
CLASSPATH=/home/student/classes
java com.school.Student
```

**On the exam:** Know that if a class cannot be found, the JVM throws a `ClassNotFoundException` or `NoClassDefFoundError` at runtime. This is a CLASSPATH problem, not a code problem.

### `java.lang` vs `java.util` — What's Automatically Available

| Always Available (java.lang) | Must Import (java.util) |
|------------------------------|------------------------|
| `String`, `Math`, `Integer`, `Double` | `ArrayList`, `Scanner` |
| `Object`, `System`, `StringBuilder` | `Random`, `Arrays` |
| All wrapper classes | `HashMap`, `List` |

---

## 5. Access Modifiers & Visibility

### 📍 Best Placement in CSA Curriculum
**Unit 3, Weeks 12–14 (3.1, 3.4, 3.8)** — taught progressively as fields, then methods, then scope are introduced.

### The Four Access Levels

| Modifier | Same Class | Same Package | Subclass | Anywhere |
|----------|:----------:|:------------:|:--------:|:--------:|
| `private` | ✔ | ✘ | ✘ | ✘ |
| *(default / package-private)* | ✔ | ✔ | ✘ | ✘ |
| `protected` | ✔ | ✔ | ✔ | ✘ |
| `public` | ✔ | ✔ | ✔ | ✔ |

> **AP CSA focuses on `private` and `public`.** The Oracle exam adds `protected` and default (no modifier).

### Examples Across All Four Levels

```java
package com.school;

public class Student {
    public    String schoolName = "Lincoln High";  // anyone can access
    protected String studentId  = "S-1042";        // subclasses + same package
              String nickname    = "Ace";           // default: same package only
    private   double gpa         = 3.8;             // this class ONLY

    public double getGpa() { return gpa; }          // public getter for private field
}
```

```java
package com.school;

public class HonorStudent extends Student {
    public void printInfo() {
        System.out.println(schoolName);   // ✔ public
        System.out.println(studentId);    // ✔ protected — accessible in subclass
        System.out.println(nickname);     // ✔ default — same package
        // System.out.println(gpa);       // ✘ COMPILE ERROR — private
        System.out.println(getGpa());     // ✔ uses the public method instead
    }
}
```

```java
package com.athletics;       // DIFFERENT package

import com.school.Student;

public class Coach {
    public void check(Student s) {
        System.out.println(s.schoolName);  // ✔ public
        // System.out.println(s.studentId); // ✘ protected — different package, not subclass
        // System.out.println(s.nickname);  // ✘ default — different package
        // System.out.println(s.gpa);       // ✘ private
    }
}
```

### Applying to Methods — Same Rules

```java
public class Calculator {
    // private helper — implementation detail, not exposed
    private double validateInput(double x) {
        return Math.abs(x);
    }

    // public API — what callers use
    public double squareRoot(double x) {
        return Math.sqrt(validateInput(x));
    }
}
```

> ⚠️ **Exam Trap:** A class itself can only be `public` or default (no modifier). You cannot declare a top-level class as `private` or `protected`.

> ⚠️ **Exam Trap:** `private` members are NOT inherited. They exist in the subclass object's memory, but the subclass code cannot reference them directly — even with `super`.

---

## 6. Throwable Hierarchy & Exception Handling

### 📍 Best Placement in CSA Curriculum
**Unit 2, Week 10 (2.12 Debugging)** — introduce the hierarchy and checked vs. unchecked. Revisit in **Unit 4, Week 25 (File I/O)** where checked exceptions (`IOException`) become unavoidable.

### The Throwable Hierarchy

```
java.lang.Throwable
├── java.lang.Error               ← JVM-level, do NOT catch
│   ├── OutOfMemoryError
│   ├── StackOverflowError
│   └── VirtualMachineError
└── java.lang.Exception           ← application-level, handle these
    ├── IOException               ← CHECKED (must declare or catch)
    │   └── FileNotFoundException
    ├── SQLException              ← CHECKED
    ├── RuntimeException          ← UNCHECKED (don't have to catch)
    │   ├── ArithmeticException       (divide by zero)
    │   ├── NullPointerException      (null reference)
    │   ├── ArrayIndexOutOfBoundsException
    │   ├── ClassCastException
    │   ├── NumberFormatException     (Integer.parseInt("abc"))
    │   └── IllegalArgumentException
    └── ...
```

### Checked vs. Unchecked

| | Checked | Unchecked |
|---|---------|-----------|
| Parent class | `Exception` (not RuntimeException) | `RuntimeException` or `Error` |
| Must handle? | **Yes** — compile error if not | No — optional |
| Typical cause | External resource issues | Programming bugs |
| Examples | `IOException`, `FileNotFoundException` | `NPE`, `ArrayIndexOutOfBounds` |

```java
// UNCHECKED — ArithmeticException — no try/catch required (but good practice)
int result = 10 / 0;    // throws ArithmeticException at runtime

// CHECKED — FileNotFoundException — MUST handle or declare
import java.io.*;
// This will NOT compile without try/catch or throws declaration:
FileReader fr = new FileReader("data.txt");   // ← checked exception!
```

### try / catch / finally Mechanics

```java
public class ExceptionDemo {
    public static void main(String[] args) {

        try {
            System.out.println("1 - try starts");
            int x = 5 / 0;                           // ArithmeticException thrown here
            System.out.println("2 - never reached");
        }
        catch (ArithmeticException e) {
            System.out.println("3 - caught ArithmeticException: " + e.getMessage());
        }
        catch (RuntimeException e) {
            System.out.println("4 - never reached — ArithmeticException caught above");
        }
        finally {
            System.out.println("5 - finally ALWAYS runs");
        }

        System.out.println("6 - after try/catch/finally");
    }
}
// Output:
// 1 - try starts
// 3 - caught ArithmeticException: / by zero
// 5 - finally ALWAYS runs
// 6 - after try/catch/finally
```

> ⚠️ **Exam Trap #1:** `finally` ALWAYS executes — even if a `catch` block executes `return`. The only exception is `System.exit()`.

> ⚠️ **Exam Trap #2:** Catch blocks must go from MOST specific to LEAST specific. If a parent exception type is caught first, child types can never be reached → compile error.
> ```java
> catch (Exception e)           { }   // ← WRONG ORDER
> catch (ArithmeticException e) { }   // ← COMPILE ERROR: already caught above
> ```

> ⚠️ **Exam Trap #3:** `throws` in a method signature = declaration (checked exceptions).  `throw` in a method body = actually throwing an exception.
> ```java
> public void readFile(String path) throws IOException {   // declaration
>     throw new IOException("File not found");             // throwing
> }
> ```

### `e.getMessage()` vs `e.toString()` vs `e.printStackTrace()`

```java
try {
    int[] arr = new int[3];
    arr[10] = 5;
} catch (ArrayIndexOutOfBoundsException e) {
    System.out.println(e.getMessage());      // "Index 10 out of bounds for length 3"
    System.out.println(e.toString());         // "java.lang.ArrayIndexOutOfBoundsException: Index 10..."
    e.printStackTrace();                      // full stack trace to stderr
}
```

---

## 7. "Swallowing" — Empty Catch Blocks

### 📍 Best Placement in CSA Curriculum
**Unit 2, Week 10 (2.12 Debugging)** — taught as an antipattern immediately after introducing try/catch.

### What It Is

An **empty catch block** silently discards an exception. The program continues as if nothing went wrong — but something did.

```java
// ❌ SWALLOWING — this is the antipattern
try {
    int result = Integer.parseInt(userInput);
    process(result);
} catch (NumberFormatException e) {
    // nothing here — exception is "swallowed"
}
// Program continues, result was never set — silent corruption
```

### Why It's Dangerous

```java
// Real classroom example — grade calculator
public static double parseGrade(String input) {
    try {
        return Double.parseDouble(input);
    } catch (NumberFormatException e) {
        // swallowed — returns 0.0 by default
    }
    return 0.0;  // student gets a 0 with no warning or explanation
}

// Called with:
double grade = parseGrade("A+");   // should throw, instead silently returns 0.0
System.out.println("Grade: " + grade);   // Grade: 0.0 — bug invisible to user
```

### What to Do Instead

```java
// ✔ Option 1 — Log the error
catch (NumberFormatException e) {
    System.out.println("Invalid input: " + e.getMessage());
}

// ✔ Option 2 — Rethrow as a different exception
catch (NumberFormatException e) {
    throw new IllegalArgumentException("Grade must be a number, got: " + input, e);
}

// ✔ Option 3 — Handle with a default + notification
catch (NumberFormatException e) {
    System.out.println("Could not parse '" + input + "', defaulting to 0.");
    return 0.0;
}

// ✔ Option 4 — Add a comment explaining WHY it's intentionally empty (very rare)
catch (InterruptedException e) {
    // Restore interrupt status — intentional; see Thread.currentThread().interrupt()
    Thread.currentThread().interrupt();
}
```

### Exam Nuance — What Does the Code ACTUALLY Do?

```java
// What is the output?
public class Test {
    public static void main(String[] args) {
        int k = 0;
        try {
            System.out.println("1");
            int i = 5 / k;               // ArithmeticException thrown
            System.out.println("2");     // never reached
        } catch (ArithmeticException e) {
            System.out.println("3");     // caught here — empty block version below
        } catch (RuntimeException e) {
            System.out.println("4");
        } finally {
            System.out.println("5");
        }
        System.out.println("6");
    }
}
// Output: 1, 3, 5, 6
// If catch (ArithmeticException e) were EMPTY (swallowed): output would be 1, 5, 6
// — the exception is silently gone but "2" was still skipped
```

---

## 8. Comparing

### 📍 Best Placement in CSA Curriculum
- **`==` for primitives** → Unit 1, Week 2 (1.2 Variables & Expressions)
- **`==` vs `.equals()` for objects** → Unit 2, Week 8 (2.7 Comparing Objects)
- **`.compareTo()`** → Unit 2, Week 8 + Unit 4 (Sorting)
- **String pool nuances** → Unit 1, Week 5 (1.9 String Objects) and revisit in Unit 2

### Three Tools, Three Purposes

| Tool | Works on | Tests |
|------|---------|-------|
| `==` | Primitives & references | Value equality (primitives) OR same memory address (objects) |
| `.equals()` | Objects | Logical/content equality (as defined by the class) |
| `.compareTo()` | `Comparable` objects (String, Integer, etc.) | Ordering: negative, zero, positive |

---

### Comparing Primitives — `==` is correct

```java
int a = 5;
int b = 5;
System.out.println(a == b);   // true — comparing VALUES directly
```

---

### Comparing Objects — `==` tests REFERENCE, not content

```java
String s1 = new String("hello");
String s2 = new String("hello");

System.out.println(s1 == s2);       // FALSE — different objects in heap
System.out.println(s1.equals(s2));  // TRUE — same content
```

```
Heap memory:
  s1 ──→ [hello]   ← object at address 0x100
  s2 ──→ [hello]   ← object at address 0x200

  s1 == s2 asks: is 0x100 == 0x200? → false
  s1.equals(s2) asks: is "hello" == "hello"? → true
```

### String Pool Trap (from the Exam)

```java
String a = "hello";               // interned in pool
String b = "hello";               // reuses same pool object
String c = new String("hello");   // NEW heap object (bypasses pool)

System.out.println(a == b);       // TRUE  — both point to pool object
System.out.println(a == c);       // FALSE — c is a different heap object
System.out.println(a.equals(c));  // TRUE  — content is same
```

> ⚠️ **Exam Trap:** `==` on String literals from the pool often returns `true` — but this is an implementation detail. ALWAYS use `.equals()` for String content comparison.

---

### `.compareTo()` — Ordering

```java
// Returns:  negative  if this < other
//           0         if this == other
//           positive  if this > other

String s1 = "apple";
String s2 = "banana";
String s3 = "apple";

System.out.println(s1.compareTo(s2));   // negative (a < b alphabetically)
System.out.println(s2.compareTo(s1));   // positive
System.out.println(s1.compareTo(s3));   // 0 (equal)

// With integers (wrapper class)
Integer x = 5;
Integer y = 10;
System.out.println(x.compareTo(y));     // negative (5 < 10)
```

---

### Comparing `null` — A Common Bug

```java
String s = null;

// ❌ NullPointerException — s is null, can't call a method on null
if (s.equals("hello")) { ... }

// ✔ Safe — null check first
if ("hello".equals(s)) { ... }   // "hello" is never null

// ✔ Also safe
if (s != null && s.equals("hello")) { ... }
```

---

### Wrapper Class Integer Caching — Sneaky Trap

```java
Integer a = 127;
Integer b = 127;
System.out.println(a == b);   // TRUE — JVM caches integers -128 to 127

Integer x = 128;
Integer y = 128;
System.out.println(x == y);   // FALSE — outside cache range, different objects
System.out.println(x.equals(y)); // TRUE — always use .equals() for Integer objects
```

> ⚠️ This is a well-known Oracle exam trap. The safe rule: always use `.equals()` or `.compareTo()` for `Integer`, `Double`, and other wrapper objects.

---

## 9. Visibility Scope vs. Lifespan Scope

### 📍 Best Placement in CSA Curriculum
**Unit 3, Week 14 (3.8 Scope & Access)** — core topic. Revisit briefly in **Unit 2, Weeks 8–10** when loop variables are first introduced.

### Two Different Questions

| Question | Concept | The Answer |
|----------|---------|------------|
| "Can I read/write this variable here?" | **Visibility Scope** | Determined by where the variable was declared (block, method, class) |
| "How long does this variable live in memory?" | **Lifespan (Storage) Scope** | Determined by the variable's type (local, instance, static) |

---

### Visibility Scope — Four Levels

```java
public class ScopeDemo {

    // ── CLASS SCOPE (static) ─────────────────────────────────
    private static int studentCount = 0;     // visible to ALL instances
    //                                          lifespan: from class load until program ends

    // ── INSTANCE SCOPE ───────────────────────────────────────
    private String name;                      // one per object instance
    private int grade;                        //   lifespan: from new() until garbage collected

    // ── METHOD / PARAMETER SCOPE ─────────────────────────────
    public void setGrade(int grade) {         // parameter 'grade' — method scope
        this.grade = grade;                   // 'this.grade' = instance var, 'grade' = param
    }

    public double calculateGpa() {
        double gpa = 0.0;                     // local variable — method scope
        //            lifespan: created when method is called, destroyed when it returns

        // ── BLOCK SCOPE ──────────────────────────────────────
        if (grade >= 90) {
            String honor = "Dean's List";     // block scope — only visible inside this if
            gpa = 4.0;
        }
        // System.out.println(honor);         // ✘ COMPILE ERROR — 'honor' out of scope

        return gpa;
    }
}
```

---

### Lifespan / Storage Scope — The Three Categories

#### 1. Local Variables — shortest life

```java
public void calculate() {
    int x = 10;      // created when method is called
    int y = 20;      // created when method is called
    // ...
}                    // x and y are DESTROYED here — eligible for garbage collection
// x and y no longer exist in memory
```

> ⚠️ **Exam Trap:** Local variables are **NOT initialized automatically**. Using one before assignment is a compile error.
> ```java
> int x;
> System.out.println(x);   // ✘ COMPILE ERROR: variable x might not have been initialized
> ```

#### 2. Instance Variables — medium life

```java
public class Counter {
    private int count;    // auto-initialized to 0 (instance vars get default values)

    public void increment() { count++; }
    public int getCount() { return count; }
}

Counter c1 = new Counter();   // c1.count created in heap
Counter c2 = new Counter();   // c2.count created in heap — SEPARATE from c1.count
c1.increment();
System.out.println(c1.getCount()); // 1
System.out.println(c2.getCount()); // 0 — independent
// When c1 and c2 go out of scope and GC runs, their count fields are destroyed
```

> ✅ Instance variables **are** automatically initialized:
> - `int`, `long`, `short`, `byte` → `0`
> - `double`, `float` → `0.0`
> - `boolean` → `false`
> - `char` → `'\u0000'`
> - Object references → `null`

#### 3. Static Variables — longest life

```java
public class Counter {
    private static int totalCount = 0;    // ONE copy shared by ALL Counter objects
    private int myCount = 0;              // one copy PER object

    public void increment() {
        myCount++;        // only this object's counter
        totalCount++;     // shared counter — ALL objects see the same value
    }

    public static int getTotalCount() { return totalCount; }
    public int getMyCount() { return myCount; }
}

Counter a = new Counter();
Counter b = new Counter();
a.increment();
a.increment();
b.increment();

System.out.println(a.getMyCount());          // 2
System.out.println(b.getMyCount());          // 1
System.out.println(Counter.getTotalCount()); // 3 — sum of all increments ever
// Static variable lives until the program ends
```

---

### Variable Shadowing — The Common Bug

```java
public class Shadowing {
    private int value = 100;    // instance variable

    public void demonstrate() {
        int value = 200;        // local variable SHADOWS the instance variable
        System.out.println(value);        // 200 — local wins
        System.out.println(this.value);   // 100 — this. accesses instance variable
    }

    public static void shadowStatic() {
        int studentCount = 99;  // local shadows the static field
        System.out.println(studentCount);            // 99 — local
        System.out.println(ScopeDemo.studentCount);  // actual static (if accessible)
    }
}
```

---

### Loop Variable Scope — Exam Trap

```java
// for-loop variable is scoped to the loop
for (int i = 0; i < 5; i++) {
    System.out.println(i);
}
// System.out.println(i);   // ✘ COMPILE ERROR — i doesn't exist here

// while-loop variable declared outside = accessible after
int j = 0;
while (j < 5) {
    j++;
}
System.out.println(j);   // ✔ prints 5 — j still in scope
```

---

## CURRICULUM INTEGRATION SUMMARY

| Topic | Primary Placement | Secondary Placement |
|-------|------------------|---------------------|
| JVM & JRE architecture | Unit 1, Week 1 | Revisit with File I/O (Unit 4, Wk 25) |
| String pool (JVM memory) | Unit 1, Week 5 (Strings) | Unit 2, Week 8 (Comparing Objects) |
| `this` disambiguation | Unit 3, Week 12 (Constructors) | |
| `this()` constructor chaining | Unit 3, Week 12 (Constructors) | |
| `this` vs `super` | Inheritance, Week 17 | |
| OOP — Encapsulation | Unit 3, Week 12 | |
| OOP — Inheritance & Polymorphism | Inheritance, Weeks 16–18 | |
| Packages & import | Unit 1, Week 2 | Unit 3, Week 12 |
| `java.lang` auto-import | Unit 1, Week 2 | |
| Access modifiers (public/private) | Unit 3, Week 12 | |
| Access modifiers (protected/default) | Inheritance, Week 16 | |
| Throwable hierarchy | Unit 2, Week 10 | Unit 4, Week 25 (checked I/O exceptions) |
| Checked vs unchecked exceptions | Unit 2, Week 10 | Unit 4, Week 25 |
| `finally` always runs | Unit 2, Week 10 | |
| Catch order (specific → general) | Unit 2, Week 10 | |
| Swallowing / empty catch | Unit 2, Week 10 | |
| `==` vs `.equals()` | Unit 1, Week 2 (primitives) → Unit 2, Week 8 (objects) | |
| `.compareTo()` | Unit 2, Week 8 | Unit 4 (sorting, Week 26) |
| Integer caching trap (127) | Unit 2, Week 8 | |
| null safety when comparing | Unit 2, Week 8 | |
| Visibility scope (block/method/class) | Unit 3, Week 14 (3.8) | |
| Lifespan scope (local/instance/static) | Unit 3, Week 14 (3.8) | |
| Variable shadowing | Unit 3, Week 14 (3.8) | |
| Default initialization values | Unit 3, Week 12 | |
| Loop variable scope | Unit 2, Week 9 (for loops) | |

---
*Oracle 1Z0-811 Exam Details: education.oracle.com/java-foundations/pexam_1Z0-811*
*Sample questions sourced from: enthuware.com/oca-ocp-java-certification-resources/270-java-foundations-exam-sample-questions*

**Project** Header

Place this at the top of the main Class file containing your program's main() method, place an `external' block comment containing the following content.

```java
/*=============================================================================
 |   Assignment:  Program #[n]:  [Assignment Title]
 |       Author:  [Your Name (Your E-mail Address)]
 |
 |       Course:  Computer Science A
 |   Instructor:  [title, first-initial of the given name, Surname (Ex. Dr. J. Smith) ] 
 |     Due Date:  [Due Date and Time]
 |
 |  Description:  [Describe the program's goal, IN DETAIL.]
 |
 |     Language:  Java version 8
 | Ex. Packages:  [List names and sources of all external packages
 |                required by this program.]
 |                
 | Deficiencies:  [If you know of any problems with the code, provide
 |                details here, otherwise clearly state that you know
 |                of no unsatisfied requirements and no logic errors.]
 *===========================================================================*/

```





