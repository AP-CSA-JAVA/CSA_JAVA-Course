# Objects: Instances of Classes

**GOALS**
- [ ] Explain the relationship between a class and an object


As stated earlier, a class is a blueprint of an object.  So we can also say that an object is an instance of a class.  What we define as a class determines what objects that will be associated with the class and how things will operate within it.  For example, we can define `human` as a class.  We can assign attributes to that class like a nose, ears, eyes, hands, feet, etc.  **NOTE:** Attribute and state are interchangable terms.

We can also create a method that will call the attributes within a class.  For example, we can create a method called running or sleeping.  Now each of these methods will use an attribute or attributes of its class to perform something within the `human` class.  If we create an instance of the `human` class, let say Object John , then John will have all the attributes (nose , ears, eyes, hands, legs) unique to it and will also have access to these methods to carry out basic functions. **NOTE:** Method and behavior are interchangable terms.

The value of the attributes define the state of the object. What makes this efficient is that the class does not hold any space in the memory becaue we just create a definition.  The moment we instantiate the class the object will require a dedicated space in memory.  Thus we can say that a Class defines how the object should look and object is the actual representation of the same.

### Example:
```ruby
class Bicycle {

    // attribute or state
    int gear = 1;
    string color = white;
    
    // behavior or method
    public void pedaling() {
        System.out.println("Pedaling to accelerate!");
    }
} 
```
