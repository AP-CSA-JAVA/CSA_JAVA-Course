# Unit 3

## Logical Operators

Logical operators are used to performing logical “AND”, “OR” and “NOT” operations, i.e. the function similar to AND gate and OR gate in digital electronics. They are used to combine two or more conditions/constraints or to complement the evaluation of the original condition under particular consideration. One thing to keep in mind is the second condition is not evaluated if the first one is false.  For example, using the `&&` comparison, if the first expression is false, the value of the second expression doesn’t matter. Likewise, for the `||` comparison, if the first expression is true, the second value doesn’t matter.  When the result of a logical expression using `&&` or `||` can be determined by evaluating only the first Boolean operand, the second is not executed or evaluated. This is known as *short-circuited*.  This is used extensively to test for several conditions for making a decision.

    AND Operator ( && ) – if( a && b ) [if true execute else don’t]
    OR Operator ( || ) – if( a || b) [if one of them is true execute else don’t]
    NOT Operator ( ! ) – !(a<b) [returns false if a is smaller than b]
    
    
## Boolean Expressions

**Goals**
- []  Understand Boolean expressions.
- []  Use relational operators to compute the value of a Boolean expression.


George Boole formulated the basic rules of Boolean algebra back in 1847. His endeavor created the mathematical logic that we use today.  Below are the relational operators that you will need to know for the AP exam.

| Relational Operator | Description | Boolean Value |
| :-----------------: | ----------- | ------------- |
| a < b | a less than b | Equates to 'true' if a is less than b,'false' otherwise |
| a <= b | a less than or equal to b | Equates to 'true' if a is less than or equal to b, 'false' otherwise. |
| a > b | a greater than b | Equates to 'true' if a is greater than b, 'false' otherwise. |
| a >= b | a greater than or equal to b | Equates to 'true' if a is greater than or equal to b, 'false' otherwise. |
| a == b | a equals b\* | Equates to 'true' if a has the same value as b. |
| a != b | a does not equal b | Equates to 'true' if a does not have the same value as b, 'false' otherwise. |

\* Sometimes this comparison can be misleading.  `==` can look at the value `a` and compare it to `b` to see if it is located at the same memory location.

![Boolean_1](https://user-images.githubusercontent.com/12989939/197055817-30b782a8-c6fb-4610-bf3c-03db4db06cf5.PNG)

| A | !A |  
| ------ | ------ |   
| false | true |    
| true | false |    
  
![Boolean_2](https://user-images.githubusercontent.com/12989939/197055928-de3c4faa-0c52-4284-9c9e-e9f93b26225e.PNG)

| A | B | A \|\| B |
| ----- | ----- | ----- |
| false | false |       |
| false | true  |       |
| true  | false |       |
| true  | true  |       |


1.  Given `boolean` **variables** `a` ,`b` , and `c`, fill in the truth table for `a && (B || c)`.

| a | b | c | b \|\| c | a && (b \|\| c) |
| -----  |  ----- | -----  | ------ | ------ |
| T | T | T |  |  |
| T | T | F |  |  |
| T | F | T |  |  |
| T | F | F |  |  |
| F | T | T |  |  |
| F | T | F |  |  |
| F | F | T |  |  |
| F | F | F |  |  |

<details><summary>Solution</summary>

| a | b | c | b \|\| c | a && (b \|\| c) |
| -----  |  ----- | -----  | ------ | ------ |
| T | T | T | T | T |
| T | T | F | T | T |
| T | F | T | T | T |
| T | F | F | F | F |
| F | T | T | T | F |
| F | T | F | T | F |
| F | F | T | T | F |
| F | F | F | F | F |
    
</details>

2.  Which of the following expressions will short circuit when `happy` is `true` and `pink` is `false`?  Why?

- [ ] ! happy && pink
- [ ] happy | | pink
- [ ] pink | | happy


<details><summary>Solution</summary>

An `&&` statement short circuits when the left operand is `false`. `!happy` is `false`, so `!happy && pink` will short circuit to `false`.
    
An \|\| statement short circuits when the left operand is `true`.  `happy` is `true`, so `!happy || pink` will short circuit to `true`.

</details>


**Assignment 1:**  [Boolean Exercises.docx](https://github.com/AP-CSA-JAVA/CSA_JAVA-Course/files/9834076/Boolean.Exercises.docx)



**Assignment 2:**  Write the body of the method given the following requirements.

You have three numbers to work with: `ints a`, `b` and `c`.  
- [ ] If the numbers are all different from each other, print "unique".  
- [ ] If all of the numbers are the same, print "boring".  
- [ ] If two of the numbers are the same, print "twins!".

```java
public void suchFun(int a, int b, int c) {


}
```

[BlankAnswerSheet.pdf](https://github.com/AP-CSA-JAVA/CSA_JAVA-Course/files/9862940/FRQ_BlankAnswerSheet.pdf)

## If Statements and Control Flow

**Goals**
- []  Gain an understanding of how to control program flow with if statements.
- []  Start to implement control flow in a more complex program.

Java supports the usual logical conditions from mathematics:

- Less than: a < b
- Less than or equal to: a <= b
- Greater than: a > b
- Greater than or equal to: a >= b
- Equal to a == b
- Not Equal to: a != b

You can use these conditions to perform different actions for different decisions.

Java has the following conditional statements:

- Use if to specify a block of code to be executed, if a specified condition is true
- Use else to specify a block of code to be executed, if the same condition is false
- Use else if to specify a new condition to test, if the first condition is false

Use the if statement to specify a block of Java code to be executed if a condition is true.

**Note** The body of an if statement in Java is not dependent on indentation. Indenting in Java is a strong convention 
that makes code segments readable. Java is often flexible about spacing. The three constructs below are equivalent and 
like indentation, spacing is used to improve readability.

`if(b!=0)System.out.println("...");`

`if (b!=0) System.out.println("...");`

`if (b!=0)
  System.out.println("...");`
  
  **Note College Board Exclusion:** You will not be required to use the `parseInt` or `parseDouble` methods on the AP exam.
  
 Look at the code below.

```java

import java.util.Scanner;
 
public class GuessChecker
{
	public static void main(String[] args)
	{
    /* Add any variables you will need throughout the program here. */
  
    // Generate the random number
    String targetStr = makeCode();
    //System.out.println(targetStr);  // uncomment for debugging
    
    // Break the random number into four variables.
    int r1 = Integer.parseInt(targetStr.substring(0, 1));
    int r2 = Integer.parseInt(targetStr.substring(1, 2));
    int r3 = Integer.parseInt(targetStr.substring(2, 3));
    int r4 = Integer.parseInt(targetStr.substring(3, 4));
    
    // Get the user's guess.
    String guess = getGuess();
    //System.out.println(guess);   // uncomment for debugging
    
    // Break the user's guess into four variables.
    int g1 = Integer.parseInt(guess.substring(0, 1));
    int g2 = Integer.parseInt(guess.substring(1, 2));
    int g3 = Integer.parseInt(guess.substring(2, 3));
    int g4 = Integer.parseInt(guess.substring(3, 4));

    /*your code here*/
   
	}
 
  // Checks to ensure no duplicate digits in a int.
	public static boolean hasDupes(int num)
	{ 
		boolean[] digs = new boolean[10];
		while (num > 0)
		{
			if (digs[num % 10])
			  return true;
			digs[num % 10] = true;
			num /= 10;
		}
		return false;
	}

  // Creates a new random 4 digit code 1000-9999 with no duplicates.
  public static String makeCode() 
  { 
		int target = (int) (Math.random() * 9000 + 1000);
		while (hasDupes(target))
		  target = (int) (Math.random() * 9000 + 1000);
    String targetStr = target + "";
    return targetStr;
  }

  // Prompts the user for a guess and repeats until valid guess is made.
  public static String getGuess() 
  { 
    Scanner sc = new Scanner(System.in);
    boolean validGuess = false;
    int userGuess = 0;
    while (!validGuess)
    {
      System.out.print("Guess a 4-digit number from 1000 to 9999 with no duplicate digits: ");
      userGuess = sc.nextInt();
      if (!(hasDupes(userGuess) || (userGuess < 1000))) 
        validGuess = true;
    }
    String userStr = userGuess + "";
    return userStr;
  }
}

```

| Method Summary |      |
| -------------- | ---- |
| `getGuess()` | Prompts the user for a four-digit guess |
| `makeCode()` | Creates the random code that will try to be guessed |
| `boolean hasDupes(int sum)` | Used by `getGuess()` and `makeCode() to ensure that no digits are duplicated |


**Assignment 1** 

Modify the above code where you see `/*your code here*/` in the following ways:
- Use if statements to compare each digit in the user's guess to the digit in the same position of the random number to see if they match.
- Implement a "hit" counter that increase by one if theuser's guessed digit matches the random number digit in the same position
- Display the total number of hits at the end of your program
- line 14: System.out.println(targetStr);  // leave this line uncommented

**Sample output:**
```java
3768 // random number that was generated
Guess a 4-digit number from 1000 to 9999 with no duplicate digits:  7658
Number of hits:1
Guess a 4-digit number from 1000 to 9999 with no duplicate digits:  3658
Number of hits:2
```

## If/ Else Statements

**Goals**
- []  Learn the if/else statement.
- []  Simplify a complex program with if/else statements.


```java
class Main {
  public static void main(String[] args) {
  int grade = 95;
  if (grade >92)
	{
	System.out.println("You have an A in the class.");
	}
   else
	{
	System.out.println("You do not have an A in the class");
	}
  }
}
```

Take a look at the code below...
```java
class Main {
  public static void main(String[] args) {
    int Age = 25;
    int Weight = 89;

	if  (Age >= 18)
	{
		if (Weight > 90)
		{
			System.out.println("You are eligible to donate blood.");
		}
		else
		{
			System.out.println("You are not eligible to donate blood.");
		}
	}
	else
	{
		System.out.println("Age must be greater than 18.");
	}
  }
}
```
**Assignment 1**

**Starter Code:**  [starterFile_Shipping.txt](https://github.com/AP-CSA-JAVA/CSA_JAVA-Course/files/9913050/starterFile_Shipping.txt)

**Directions:**
*Shipping*
- [ ] ask user for the weight of package, method of shipping, and coupon code
- **Weight**
- - [ ] if weight is between 0 and 1, shippingCost is $1.
- - [ ] if weight is between 1 and 5,
shippingCost is $7.50 and add 1 day to shippingDays.
- - [ ] if weight is over 5, shippingCost is $10.25 and add 3 days to shippingDays.
- **Method of Shipping**
- - [ ] "Standard" adds 3 days to shippingDays 
- - [ ] "Express" subtracts 3 days from shippingDays and add $10 to shippingCosts
- - [ ] "Overnight" sets shippingDays to be 1 and add $10 to shippingCosts
- **CouponCode** If the user had the correct coupon code, subtract $10 from the shippingCost

**Sample Outputs:**
```java
Weight of Package:
0.5
Method of Shipping: Standard, Express, or Overnight:
Standard
Coupon Code:
none

Total Shipping Cost: $1.0
Days to Deliver: 8
```
```java
Weight of Package:
10
Method of Shipping: Standard, Express, or Overnight:
Express
Coupon Code:
none    

Total Shipping Cost: $20.25
Days to Deliver: 5
```
```java
Weight of Package:
7.5
Method of Shipping: Standard, Express, or Overnight:
Overnight
Coupon Code:
COUPON17 

Total Shipping Cost: $20.25
Days to Deliver: 1
```

## Else If Statements

**Goals**
- []  Learn multiple selections with the if/else-if conditional.
- []  Continue to improve the code of a complex program.


#### GOALS
- Learn multiple selections with the if/else-if conditional.
- Continue to improve the code of a complex program.

A *multi-way selection* is written when there are a series of conditions with different statements for each condition. Multi-way selection is performed using if/else-if statements such that exactly one section of code is executed based on the first condition that evaluates to true.

```java
if (condition 1) // true
    {
    // body of the first 'if'
    // statement to be executed
    }
else if (condition 2) // if condition 1 is false
    {
    // if condition 2 is true
    // body of second 'if'
    // statements to be executed
    }
else if (condition 3) // if condition 2 is false
    {
    // if condition 3 is true
    // body of third 'if'
    // statements to be executed
    }
else // if condition 3 is false
    {
    // body of the 'else'
    // statements to be executed
    }

```

**Assignment 1**

**Directions:** Modify your program to include “near hits.” These are correctly guessed numbers that are in the wrong position.

- Report actual `hits` at the end of the program
- Report the `near hit` counter at the end of your program 
- Use if/else-if/else statements

Comment where you made the changes. Submit your program digitally.

## Compound Boolean Expressions

**Goals**
- []  Understand how to evaluate a Boolean expression with multiple parts.
- []  Use truth tables to simplify expressions.
- []  Continue to improve the GuessChecker program.


### Assignment 1: Boolean Expressions

**Directions:** Using logical and relational operators, write a program that will take 3 numbers and return the if the number is greater than, less than or equal to the other two numbers.  Print out the results of your program.  Submit this assignment as a replit on Canvas.

```java
Enter the first number
 15
Enter the second number
 32
Enter the third number
 56
A is less than B and B is less than C
A is not greater than B
B is not greater than C
```

### EXTRA CREDIT: Guess Checker 

This extra credit assignment will be categorized as a Projects/ Presentations.

**Directions:** Update GuessChecker to use compound Boolean statements.  Give the user at minimum three opportunities to guess the correct answer and print out how many of the remaining guesses they have.  Submit your program as a replit on Canvas.

```java
9782
Guess a 4-digit number from 1000 to 9999 with no duplicate digits:  9728
Number of hits:2
Number of near hits:2
You have 2 guesses remaining.

Guess a 4-digit number from 1000 to 9999 with no duplicate digits:  7928
Number of hits:0
Number of near hits:4
You have 1 guesses remaining.

Guess a 4-digit number from 1000 to 9999 with no duplicate digits:  9782
Number of hits:4
Number of near hits:0
You have 0 guesses remaining.
```

## Equivalent Boolean Expressions

 **Goals**

- []  Understand De Morgan’s Laws.
- []  Students will work independently, but are encouraged to ask each other for help as needed.
- []  Convert complex Boolean statements to conditional statements in code.



**De Morgan’s law** was developed by the mathematician Augustus De Morgan in the 1800s. He created them to interpret the negation 
of conditional expressions, like the expressions !(a > b) that you saw in the last activity.  This particular negation may seem simple, 
but conditional expressions can become complex when joined by multiple logical operators, for example, !((x < 3) || (y > 2)). De Morgan 
created simple laws, or rules, to help handle these types of complex conditional expressions. 

Specifically, De Morgan’s laws are:

    not (a and b) is the same as (not a) or (not b)
    not (a or b) is the same as (not a) and (not b)
    
    To better understand these laws, you can use the distributive property of mathematics:

    Law 1: not (a and b) is the same as (not a) or (not b)
    Starting with not (a and b), distribute the not and switch the logical operator to get (not a) or (not b). 
    In Java, this can be written as:

     !(a && b) == (!a || !b)
    Law 2: not (a or b) is the same as (not a) and (not b)
    Again, distribute the not and switch the logical operator to get (not a) and (not b) . In Java:
     !(a || b) == (!a && !b)
     
To apply De Morgan’s laws, distribute the not using the distributive property of mathematics and switch the logical operator (from and to or or from or to and).

De Morgan’s laws can also be applied to conditional operators. When negating conditional operators (such as <, >, >=), they become the opposite of what they are.

| Conditional Operator | De Morgan’s Law | De Morgan’s Law Applied |
| :-----------------: | :-------------: | :----------------------: |
| < | not < | >= |
| > |	not > |	<= |
| == |	not == | != |
| <= |	not <= | > |
| >= |	not >= | < |
| != |	not not equal |	== |

### Assignment 1 - DeMorgan's Law

[DeMorgan___Starter_Files.zip](https://github.com/AP-CSA-JAVA/CSA_JAVA-Course/files/9941153/DeMorgan___Starter_Files.zip)

**Directions:** 

1.  In DeMorgansLaw.java, add the code to validate the first part of De Morgan’s Laws: not (a and b) is the same as (not a) or (not b).
 - Use two if/else statements, one for each expression.
 - Show output to confirm the results.
 - Test for all possible values of a and b (true | true, true | false, false | true, false | false).


2.  Continuing in DeMorgansLaw, add the code to validate the second part of De Morgan’s Laws: not (a or b) is the same as (not a) and (not b).
 - Use two if/else statements, one for each expression.
 - Show output to confirm the results.
 - Test for all possible values of a and b (true | true, true | false, false | true, false | false).

3.  In DeMorgansLawIf.java, reproduce the compound Boolean expressions provided in the code without using logical operators. Instead, use nested if/else statements to duplicate their logic. Note there are two sections to modify, one to reproduce !(a && b) and one to reproduce !(a || b).
- Create truth tables if you find it helpful.
- Test for all possible values of a and b (true | true, true | false, false | true, false | false).


4.  In DeMorgansLawGTLT.java, use De Morgan’s Laws to reproduce the provided if statement, creating a new if statement that uses a logical OR. Test for all combinations of positive, negative, and zero values.

- Comment where short-circuited evaluation could occur and describe how it could occur.
- Find the equivalent compound Boolean expression in one of your truth tables and use it to create the or version.

Submit your assignment as a replit on Canvas.


## Comparing Objects

**Goals**
- Learn how to compare instances of classes to one another
- Create your own `equals` method for a class
- Practice `if` statements and coding skills

You may recall that the String class is included in the Java language. When you create a String object from its class, the object is a reference variable. For example, the following declarations create two String reference variables.

`String s1 = null;`
`String s2 = new String("HELLO");`

Note that the value of the first reference variable s1 is null. It was not assigned an actual String object like s2 was. This reference variable, and in fact any reference variable, can be compared with null, using == or != to determine if the variable actually references an object.

**Note:** You do not need to use the `new string` constructor to create a string.  Instead you can use `String s = "HELLO"`.  The `String` constructor is used to demonstrate object equality.

#### Object Equality

In addition to comparing an object to `null`, the == operator can be used to test if two variables reference the same object. For example, consider the following code:

`String s1 = new String("HELLO");`
`String s2 = s1;`

If you were to compare `s1 == s2`, the result would be `true`. Both objects refer to the same storage location in memory. Compare the above code to the following:

`String s1 = new String("HELLO");`
`String s2 = new String("HELLO");`

Both `s1` and `s2` contain the same string, but they are different objects in memory, so the comparison of `s1 == s2 is false`. They are not the same object; they just happen to contain the same value. When comparing objects, `==` is used to compare object references (memory locations.) To compare the values of two objects, you must use a new method called `equals`.  Using `s1` and `s2` as an example, the syntax of the equals method is:

`s1.equals(s2);`

The `equals` method is a Boolean method that returns `true` if the contents of `s1` is equal to the contents of `s2`; otherwise, it returns `false`.

**Notes:** The == operator is used to compare object references, and the equals method is used to compare object contents. In other words, == checks if both objects point to the same memory location, whereas the equals method compares the values in the objects.

#### Aliasing

```java
1 public class ShapeEquals
2 {
3  public static void main(String[] args) 
4  {
5    Shape shape1 = new Shape();
6    shape1.setShape("Triangle", 3);
7  
8    Shape shape2 = new Shape();
9    shape2.setShape("Square", 4);
10  
11   Shape shape3 = shape1; <---
12    shape3.setShape("Hexagon", 6); <---
13    
14    System.out.println(shape1.getShape());
15  }
16 }
```
Take a look at the program above.  Looking at the program, you may have thought that the output of "shape1" would display "Triangle".  Look carefully at lines 11 and 12. When `shape3` is set to `shape1`, `shape3` points to the same address in memory as `shape1`. Any changes to `shape1` or `shape3` will change the contents of the memory, thereby changing the values of both variables. In Java, this is known as aliasing.  

**Note:** Two object references are considered aliases when they both reference the same object. Object references can be compared using == and != to identify aliases. 

### Assignment 1: Clue

**Directions**  This is a program that kinda simulates Clue.

Here is what works:
- the program randomly generates a final murderer, weapon, and room
- prints out choices for the user
- asks user for final guess


Here is what needs work:

    we want to see if our guess is the same as the solution, but something is off with equals()
    check() should only get called if our guess isn't 100% correct

       - Should print "You have the correct muderer." if we have the correct muderer.
       - Should print "You have the correct weapon." if we have the correct weapon.
       - Should print "You have the correct room." if we have the correct room.


Extra: if we want to ignore case, we can use .equalsIgnoreCase()

<details><summary>**New Java Word:**  switch</summary>

For the purposes of this program, you can use the jave keyword `switch`.  I discourage you from using it for the AP exam as it is not a part of the AP exam.  
Instead of writing many `if..else` statements, you can use the switch statement.  The switch statement selects one of many code blocks to be executed.  Take a look at the pseudocode below:

```java
switch(expression) {
  case x:
    // your code
    break;
  case y:
    // your code
    break;
  default:
    // your code
}

This is how it works:

- The switch expression is evaluated once.
- The value of the expression is compared with the values of each case.
- If there is a match, the associated block of code is executed.
- The break and default keywords are optional.
	- When Java reaches a `break` keyword, it breaks out of the switch block.
	- The default keyword specifies some code to run if there is no case match.

```java
int day = 4;
switch (day) {
  case 1:
    System.out.println("Monday");
    break;
  case 2:
    System.out.println("Tuesday");
    break;
  case 3:
    System.out.println("Wednesday");
    break;
  case 4:
    System.out.println("Thursday");
    break;
  case 5:
    System.out.println("Friday");
    break;
  case 6:
    System.out.println("Saturday");
    break;
  case 7:
    System.out.println("Sunday");
    break;
    default:
    	System.out.println("I don't even know what day it is!");
}
// Outputs "Thursday" (day 4)
```
	
</details>
