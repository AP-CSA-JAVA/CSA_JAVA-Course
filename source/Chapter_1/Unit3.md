# Unit 3

## Boolean Expressions

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

1. Write the body of the method given the following requirements.
*You have three numbers to work with: `ints a`, `b` and `c`.  If the numbers are all different from each other, print "unique".  If all of the numbers are the same, print "boring".  If two of the numbers are the same, print "twins!".*

```java
public void suchFun(int a, int b, int c) {







}
```

2.  Which of the following expressions will short circuit when `happy` is `true` and `pink` is `false`?  Why?

- [ ] ! happy && pink
- [ ] happy | | pink
- [ ] pink | | happy

3.  Given `boolean` **variables** `a` ,`b` , and `c`, fill in the truth table for `a && (B || c)`.

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


**Assignment 1:** ![Boolean Exercises](https://github.com/AP-CSA-JAVA/CSA_JAVA-Course/files/9834076/Boolean.Exercises.docx)

