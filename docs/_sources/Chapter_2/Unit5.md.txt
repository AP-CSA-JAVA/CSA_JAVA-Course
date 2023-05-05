# Unit 5

## Anatomy of a Class

**Goals**
  - Understand the design principals of a class.
  - Use a nonprogramming methodology to design code.
  - Create a roadmap for the next activities.


A class is a blueprint for the objects of that class. A class contains variables and methods to store and manipulate information. To
create a class, you first state whether you want it to be public or private, use the class keyword, and name the class. Then, you
add a set of curly braces {} that will contain the contents of the class. To understand the key components of classes, we will
create an NewClass class. This is the class header:

public class NewClass {}

Inside the curly braces, you can define the variables and methods of the class. Variables are used to store data, and methods are
used to perform actions. In the NewClass class, we can create an instance variable to store the number of students in a classroom:

public class NewClass {

      private int numStudents;
}

