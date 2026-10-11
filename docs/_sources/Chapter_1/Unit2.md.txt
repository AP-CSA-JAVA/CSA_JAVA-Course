# Unit 2 - Selection and Iteration
***Updated: 10/11/2026*** *AP Exam Weighting: 25–35%*


**AP Computer Science A — Assignment Rubric**


<details>
<summary>Assignment Header</summary> 

All submitted documents and `.java` files must include the header below. This mirrors the block comment required in `Main.java` and follows the standard used by university CS departments.

```
Name:          [Your Full Name]
Partner:       [Partner's Full Name, or "None"]
Course:        AP Computer Science A
Instructor:    [Instructor Name]
Assignment:    [Assignment Number — Assignment Title]
Due Date:      [Month Day, Year]
```

**Example:**
```java
Name:          Jordan Smith
Partner:       Alex Rivera
Course:        AP Computer Science A
Instructor:    [Instructor Name]
Assignment:    2.03.1 — Guess Checker Pt 1
Due Date:      October 19, 2026
```

> This header must appear at the top of your `Main.java` block comment AND on your Test Cases document. Submissions missing the header will be penalized *one point*.

---

**Submission Requirements**

All assignments require the following unless otherwise stated:

- [ ] All `.java` source file(s)
- [ ] Test Cases document showing inputs, expected output, actual output, and Pass/Fail result

***Projects*** will have their own dedicated rubric and submission instructions.

---

**5-Point Assignment Rubric**

| Points | Grade | Compilation & Output | Documentation & Style | Submission |
|:------:|:-----:|----------------------|-----------------------|------------|
| **5** | Full Credit | Program compiles and runs without errors or warnings. Output matches expected results for **all** test cases. | Block comment header fully completed. Meaningful variable names, camelCase convention, proper indentation. Inline and multi-line comments present throughout. | All required `.java` files and test cases submitted with completed assignment header. |
| **4** | Near Full Credit | Program compiles and runs. Output is correct for most test cases with **one** minor error or omission. | Block comment header complete. Comments mostly present. Minor style or formatting inconsistency. | All required files submitted. Assignment header present. |
| **3** | Partial Credit | Program compiles but produces incorrect output for **some** test cases, or compiles with warnings. | Limited comments. Block comment header partially completed. Variable names or formatting inconsistent. | Most required files submitted. Test cases incomplete or partially documented. |
| **2** | Minimal Credit | Program has syntax or logic errors that cause significant incorrect output, or fails to fully compile. | Little to no commenting. Block comment header missing or blank. Poor variable naming or formatting. | A required `.java` file or test cases document is missing. Assignment header absent. |
| **1** | Attempted | Code submitted shows a clear attempt but does not compile or run. | Minimal or no documentation present. | At least one file submitted, but submission is largely incomplete. |
| **0** | No Credit | Nothing submitted, file is empty, or code is unrelated to the assignment. | N/A | N/A |

---

**Academic Integrity Policy**

> **Any submission that violates academic integrity will receive no credit and will be referred for disciplinary action in accordance with school policy.**

The following are considered academic integrity violations in this course:

- Submitting another student's code as your own
- Copying code from the internet without citation and modification
- Allowing another student to copy your code
- Sharing your source files with another student outside of an approved partner assignment
- **AI & External Source Use**
  - AI tools may be used for *idea generation, debugging assistance, and understanding small parts of code* — not to generate complete solutions.
  - If you use any external source (websites, LLM/AI tools, friends), **cite it in your code comments** — indicate where you got help and whether any code sections came from that source.
  - Submitting AI-generated code as your own work — whether a whole solution or an unattributed snippet — is an **academic integrity violation**. Violations receive **no credit** and are referred for disciplinary action in accordance with school policy.

**Approved Collaboration:** Discussing concepts, approaches, and debugging strategies with classmates is encouraged. Writing or sharing actual code is not permitted unless the assignment is explicitly designated as a partner assignment.

**Partner Assignments:** Both partners must be listed in the assignment header. Both partners are equally responsible for the integrity of the submitted work.

---

**Late Work Policy**

Most work is done in class, so the late work policy is not applicable.  For any ***assigned*** homework assignment, you have 1 week after the given due date to turn it in.  Otherwise, you will receive a maximum of 50% for late work.  With regards to Projects, you will have daily progress checks that will count for your overall grade.  Failure to complete a daily progress check will lower your grade.

---

**Grading Notes**

- A program that does not compile cannot earn higher than a **2**.
- A missing test cases document cannot earn higher than a **4**.
- A missing block comment header deducts **1 point** from the earned score.
- A missing assignment header deducts **1 point** from the earned score.
- Style and documentation are evaluated holistically — occasional lapses do not automatically lower a grade, but a consistent pattern does.
</details>


#############################################################################




<details>
<summary>📋 Unit 2 Standards Alignment</summary>

| Standard | Description |
| -------- | ----------- |
| ICT 1.0 | Academics — apply academic standards across content areas |
| ICT 2.0 | Communications — communicate clearly in written and electronic formats |
| ICT 4.1 | Use electronic reference materials to gather information |
| ICT 5.4 | Interpret information and draw conclusions to make informed decisions |
| ICT 5.8 | Create and use algorithms to solve problems |
| ICT 5.9 | Deconstruct large problems into smaller components |
| ICT 7.5 | Apply high-quality techniques to product design and development |
| ICT 10.1 | Interpret and explain ICT-specific terminology |
| C4.4 | Identify and apply data types and encoding |
| C4.6 | Use proper programming language syntax |
| C4.9 | Create programs using control structures, procedures, and variables |
| C4.11 | Document development work using comments |
| C5.4 | Design a solution to a problem |
| C5.5 | Implement a solution |
| CRP 1 | Apply appropriate technical skills and academic knowledge |
| CRP 2 | Communicate clearly, effectively, and with reason |
| CRP 4 | Apply technology to enhance productivity |
| CRP 5 | Utilize critical thinking to make sense of problems |
| CRP 7 | Act as a responsible and contributing citizen and employee |

</details>

---

**You've Already Started Unit 2**

Several Unit 2 ideas showed up in Unit 1 before they had a name. This unit gives them names, rules, and exam-level precision.

| Unit 2 Topic | Where You Already Saw It | What's New in Unit 2 |
| ------------ | ------------------------ | -------------------- |
| `if/else`, `&&` | 1.02.1 Allowance — `(age >= 13 && age <= 19)` | Else-if chains, nesting, ordering traps, short-circuiting |
| `==` vs. `.equals()` | 1.07a String Pool, 1.15 aliasing, 1.17 wrapper pitfalls | `!=`, `null` checks, and comparing objects of **your own** classes |
| Ternary `? :` | 1.14.4 Bike Shop — `(gears == 1) ? " gear" : " gears"` | How it works and when to use it |
| `while` loop | 1.07.2 Magic 8-Ball "keep asking" loop | Writing loops from scratch, tracing, counting iterations |
| `for` loop | Cake `repeat()`, 1.17.1 High Score Tracker | Writing `for` loops yourself; rewriting `while` ↔ `for` |
| Find max, average | 1.17.1 — `Integer.MIN_VALUE` and a counter | Divisibility, digit extraction, frequency counts |

> **College Board Note:** Unit 2 is the heaviest unit on the AP exam (25–35%), and **FRQ 1 (Methods and Control Structures)** is built almost entirely from it. On FRQ 1 you will be given a class and asked to *write the body of a method* that uses conditionals and loops. Every section in this unit includes a **Write the Method** exercise in that style.

> **Oracle Exam Note:** Sections marked **— *Oracle Foundations 1Z0-811*** (`switch`, the ternary operator, operator precedence, `do-while`, `break`/`continue`, and the Date/Time API) are tested on Oracle but are **not** part of the AP Java subset. You are allowed to use them on the AP exam, but no AP question will require them.

---

## 2.01 Algorithms with Selection and Repetition

<details>
<summary>📌 Standards — 2.01</summary>

| Standard | Description |
| -------- | ----------- |
| ICT 5.8 | Create and use algorithms and solve problems |
| ICT 5.9 | Deconstruct large problems into components |
| C4.6 | Use proper programming language syntax |
| C4.9 | Create programs using control structures and variables |
| C5.4 | Design a solution to a problem |
| CRP 1 | Apply appropriate technical skills and academic knowledge |
| CRP 5 | Utilize critical thinking to make sense of problems |

</details>

- [ ] Identify sequencing, selection, and repetition in an algorithm.
- [ ] Represent an algorithm with a flowchart and with pseudocode.
- [ ] Trace an algorithm by hand to predict its result.

**Three Building Blocks**

An **algorithm** is a finite, step-by-step process for solving a problem. Every algorithm, from a vending machine to a search engine, is built from only three structures:

| Structure | Meaning | Java Tools |
| --------- | ------- | ---------- |
| **Sequencing** | Steps run one after another, in order | Every program you wrote in Unit 1 |
| **Selection** | Choose a path based on a condition | `if`, `if/else`, `else if` (and `switch` for Oracle) |
| **Repetition** (iteration) | Repeat steps while a condition holds | `while`, `for` (and `do-while` for Oracle) |

Every selection and every repetition is controlled by a **Boolean expression**, a question with a `true` or `false` answer. That's why 2.02 starts there.

**Flowchart Symbols**

You'll need these for the Choose Your Own Adventure project.

| Shape | Name | Use |
| ----- | ---- | --- |
| Oval | Terminator | Start / End |
| Parallelogram | Input / Output | `Scanner` input, `println` output |
| Rectangle | Process | Calculations, assignments |
| Diamond | Decision | A Boolean question — exactly two exits, labeled **true** and **false** |
| Arrow | Flow line | Shows which step comes next |

> A loop in a flowchart is simply an arrow that travels *back up* to an earlier decision diamond.

**From English to Pseudocode to Java**

*English:* "A ride lets you on if you're at least 48 inches tall. Otherwise it tells you to try the kiddie coaster."

```text
INPUT height
IF height >= 48
    DISPLAY "Enjoy the ride!"
ELSE
    DISPLAY "Try the kiddie coaster."
```

```java
int height = input.nextInt();
if (height >= 48)
{
    System.out.println("Enjoy the ride!");
}
else
{
    System.out.println("Try the kiddie coaster.");
}
```

> **College Board Note:** AP multiple-choice questions frequently describe an algorithm in English and ask which code segment correctly implements it. Read the English slowly. Words like *at least* (`>=`), *more than* (`>`), *no more than* (`<=`), and *unless* (negation) decide the answer.

### Exercise 2.01.A — Name the Structure

For each step of this "school morning" algorithm, label it **sequencing**, **selection**, or **repetition**.

1. Wake up.
2. If it's raining, grab an umbrella.
3. Hit snooze until you've snoozed 3 times.
4. Eat breakfast.
5. If the bus has left, ask for a ride; otherwise, walk to the stop.

<details>
<summary>Sample Answer</summary>

1. Sequencing
2. Selection (one-way: only acts when true)
3. Repetition (repeat *until* a count is reached)
4. Sequencing
5. Selection (two-way: one path when true, a different path when false)

</details>

### Exercise 2.01.B — English to Pseudocode

Write pseudocode for: *"A movie theater charges $8 for children under 13, $14 for adults, and $9 for seniors 65 and older."*

<details>
<summary>Sample Answer</summary>

```text
INPUT age
IF age < 13
    price ← 8
ELSE IF age >= 65
    price ← 9
ELSE
    price ← 14
DISPLAY price
```

Other orderings work as long as every age lands in exactly one branch. You'll see why ordering matters in 2.04.

</details>

### Check for Understanding

**1.** Which structure lets an algorithm choose between two or more paths?

<details>
<summary>Answer</summary>

**Selection.** Sequencing runs steps in order; repetition repeats steps.
</details>

**2.** In a flowchart, how many arrows leave a decision diamond, and how are they labeled?

<details>
<summary>Answer</summary>

**Two**, labeled **true** and **false** (or yes/no).
</details>

**3.** Translate to a Java condition: "the score is no more than 100."

<details>
<summary>Answer</summary>

`score <= 100`. "No more than" includes 100 itself.
</details>

**4.** What do selection and repetition both depend on?

<details>
<summary>Answer</summary>

A **Boolean expression**, a condition that evaluates to `true` or `false`.
</details>

#############################################################################

## 2.02 Boolean Expressions

<details>
<summary>📌 Standards — 2.02</summary>

| Standard | Description |
| -------- | ----------- |
| ICT 5.4 | Interpret information and draw conclusions to make informed decisions |
| ICT 5.8 | Create and use algorithms and solve problems |
| C4.4 | Identify and apply data types and encoding |
| C4.6 | Use proper programming language syntax |
| C4.9 | Create programs using control structures and variables |
| CRP 1 | Apply appropriate technical skills and academic knowledge |
| CRP 5 | Utilize critical thinking to make sense of problems |

</details>

- [ ] Use relational operators to compute the value of a Boolean expression.
- [ ] Store the result of a comparison in a `boolean` variable.
- [ ] Explain the difference between `=` and `==`.
	- [ ] I will be able to write a program that utilizes a Boolean expression.

George Boole formulated the basic rules of Boolean algebra back in 1847. A **Boolean expression** evaluates to exactly one of two values: `true` or `false`.

**Relational Operators** (all on the AP exam)

| Relational Operator | Description | Boolean Value |
| :-----------------: | ----------- | ------------- |
| `a < b` | a less than b | `true` if a is less than b, `false` otherwise |
| `a <= b` | a less than or equal to b | `true` if a is less than or equal to b, `false` otherwise |
| `a > b` | a greater than b | `true` if a is greater than b, `false` otherwise |
| `a >= b` | a greater than or equal to b | `true` if a is greater than or equal to b, `false` otherwise |
| `a == b` | a equals b\* | `true` if a has the same value as b, `false` otherwise |
| `a != b` | a does not equal b | `true` if a does not have the same value as b, `false` otherwise |

\* For **primitives** (`int`, `double`, `char`, `boolean`) `==` compares values. For **objects** it compares references (addresses). You already know to use `.equals()` for Strings and wrapper objects; 2.06 extends that to objects of your own classes.

**Boolean Variables Store Answers**

A comparison produces a value, so you can store it, just as you did in 1.02.1 Allowance:

```java
int temperature = 95;
boolean isHot = temperature > 90;      // true
boolean isFreezing = temperature <= 32; // false
System.out.println(isHot);             // true
```

Naming tip: start boolean names with `is`, `has`, or `can` (`isHot`, `hasKey`, `canVote`) so conditions read like English: `if (hasKey)`.

**Rules for What Can Be Compared**

```java
int a = 7;
double b = 7.0;
char c = 'A';

System.out.println(a == b);    // true  — int is widened to double, then compared
System.out.println(c < 'B');   // true  — chars compare by Unicode value ('A' = 65, 'B' = 66)
System.out.println(c + 1);     // 66    — char arithmetic produces an int
// System.out.println("cat" < "dog");   // COMPILE ERROR — < is not defined for Strings
// System.out.println(true > false);    // COMPILE ERROR — booleans only use == and !=
```

To *order* Strings, use `compareTo` (from 1.15): `"cat".compareTo("dog")` returns a negative number because "cat" comes first alphabetically. You'll use this in 2.10.

> **College Board Note:** Comparing `double` values with `==` is risky because of rounding. `0.1 + 0.2 == 0.3` is **`false`**! When exactness matters, check whether the values are *close enough*: `Math.abs(x - y) < 0.0001`.

**`=` vs. `==`**

| Operator | Name | Meaning |
| :------: | ---- | ------- |
| `=` | Assignment | *Store* the right side into the variable on the left |
| `==` | Equality | *Ask* whether two values are the same |

```java
int score = 10;
// if (score = 10) { }        // COMPILE ERROR — (score = 10) is an int, not a boolean

boolean done = false;
if (done = true)              // COMPILES — assigns true to done, so the condition is ALWAYS true
{
    System.out.println("This always prints!");
}
```

> **Oracle Exam Note:** The `if (done = true)` trap is a classic. With an `int`, the mistake won't compile. With a `boolean`, it compiles **and** silently changes the variable. Best practice: write `if (done)` and `if (!done)` instead of comparing a boolean to `true` or `false`.

**Logical Operators — A Preview**

You used `&&` in 1.02.1. Here are all three; 2.05 covers them in depth.

| Operator | Name | `true` when... |
| :------: | ---- | -------------- |
| `&&` | AND | **both** sides are true |
| `\|\|` | OR | **at least one** side is true |
| `!` | NOT | the expression it's applied to is false |

### Exercise 2.02.A — Evaluate It

Given `int x = 8; int y = 3; double z = 8.0; char ch = 'm';`, evaluate each expression.

1. `x > y`
2. `x % y == 2`
3. `x == z`
4. `y * 3 != 9`
5. `ch >= 'a'`
6. `x / y == 2.666`

<details>
<summary>Sample Answer</summary>

1. `true`
2. `true` — `8 % 3` is 2
3. `true` — `x` is widened to `8.0`
4. `false` — `y * 3` is 9, so "not equal to 9" is false
5. `true` — `'m'` comes after `'a'` in Unicode
6. `false` — `x / y` is **integer division** (2), and `2 == 2.666` is false

</details>

### Exercise 2.02.B — Write the Method

The `Ride` class from your Unit 1 project needs a method that answers a yes/no question. Write `isTallEnough`. (No `if` statement needed; return the comparison itself.)

```java
public class Ride
{
    private String name;
    private int minHeight;   // in inches

    public Ride(String name, int minHeight)
    {
        this.name = name;
        this.minHeight = minHeight;
    }

    /** Returns true if a guest of the given height (inches) may ride. */
    public boolean isTallEnough(int guestHeight)
    {
        /* your code here */
    }
}
```

<details>
<summary>Sample Answer</summary>

```java
public boolean isTallEnough(int guestHeight)
{
    return guestHeight >= minHeight;
}
```

Writing `if (guestHeight >= minHeight) return true; else return false;` also works, but it's longer and says the same thing. The comparison already *is* `true` or `false`.

</details>

### Activity 2.02.1 — Truth Table

Fill in the truth table for `a && (b || c)`:

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

### Activity 2.02.2 — Field Trip Eligibility Check

**Overview**

The CTE department is planning a field trip, and the office needs a quick report on each student. Your program reads a student's information and prints a **true/false report**, one Boolean expression per line. You won't make any decisions with `if` yet (that's 2.03). The goal is to write correct Boolean expressions and store them in well-named `boolean` variables.

By the end of this activity you will be able to:
- [ ] Write Boolean expressions with all six relational operators
- [ ] Store the result of a comparison in a `boolean` variable
- [ ] Compare `char` values and test whether two `double` values are "close enough"
- [ ] Explain how integer division can make a Boolean expression wrong

**Report Rules**

| Report Line | `true` when... |
| ----------- | -------------- |
| Upperclassman | grade level is 11 or higher |
| GPA requirement | GPA is at least `MIN_GPA` (2.0) |
| Attendance | absences are `MAX_ABSENCES` (5) or fewer |
| Permission slip | the answer is `yes` in any capitalization |
| Perfect GPA | GPA is 4.0, tested with `Math.abs(gpa - 4.0) < 0.0001` |
| Bus A | the student's name starts with a letter from `A` to `M` |
| Service average | service hours ÷ events attended is **3.5 or more** |

**To Do**

- [ ] Add the required block comment header
- [ ] Use `Scanner` to read: name (full line), grade level, GPA, absences, total service hours, service events attended, and permission slip (`yes`/`no`)
- [ ] Declare `final` constants `MIN_GPA` and `MAX_ABSENCES`
- [ ] Create **seven** `boolean` variables, one for each report line. Name them with `is`, `has`, or `meets` (for example, `meetsGpa`).
- [ ] Use at least **four different** relational operators across your expressions
- [ ] For **Bus A**, compare the first character of the name (`name.charAt(0)`) with `'M'`. Assume names start with a capital letter.
- [ ] For **Service average**, first write it **without** a cast and test with 14 hours and 4 events. Record the result in a comment, then fix it with a `(double)` cast and explain in the comment why the first version was wrong.
- [ ] Print the report with `printf` so the `true`/`false` values line up (`%b` prints a boolean)
- [ ] Do **not** use `if`, `&&`, or `||` in this activity

**Sample Output** (two separate runs)

```text
Student name: Maya Lopez
Grade level (9-12): 11
GPA: 3.4
Absences this semester: 2
Total service hours: 14
Service events attended: 4
Permission slip returned? (yes/no): YES

=== FIELD TRIP CHECK: MAYA LOPEZ ===
Upperclassman (11-12):       true
GPA at least 2.0:            true
Absences 5 or fewer:         true
Permission slip returned:    true
Perfect 4.0 GPA:             false
Rides Bus A (names A-M):     true
Avg 3.5+ hours per event:    true
```

```text
Student name: Theo
Grade level (9-12): 9
GPA: 4.0
Absences this semester: 7
Total service hours: 9
Service events attended: 4
Permission slip returned? (yes/no): no

=== FIELD TRIP CHECK: THEO ===
Upperclassman (11-12):       false
GPA at least 2.0:            true
Absences 5 or fewer:         false
Permission slip returned:    false
Perfect 4.0 GPA:             true
Rides Bus A (names A-M):     false
Avg 3.5+ hours per event:    false
```

**Think About It** (comment at the bottom)

1. Without the cast, 14 ÷ 4 gave the wrong answer for Service average. What value did Java actually compare to 3.5?
2. Why can't you write `name < "M"` to decide the bus?
3. A student is eligible only when **all** of the first four lines are true. What operator will let you combine them (coming in 2.05)?

**Submission**

- [ ] `FieldTrip.java` with block comment header
- [ ] Test Cases document: at least **three** students, including one exactly at each limit (grade 11, GPA 2.0, 5 absences) and one whose name starts with `M` or `N`

**Grading:** AP CSA 5-point Assignment Rubric.

### Check for Understanding

**1.** What is printed?

```java
int a = 5;
int b = 2;
boolean result = a / b == 2.5;
System.out.println(result);
```

<details>
<summary>Answer</summary>

`false`. `a / b` is integer division, so it's `2`, and `2 == 2.5` is `false`. Casting one side, `(double) a / b == 2.5`, would make it `true`.
</details>

**2.** Which line does **not** compile?

- A. `boolean p = 4 > 3;`
- B. `boolean q = 'a' < 'b';`
- C. `boolean r = "a" < "b";`
- D. `boolean s = true != false;`

<details>
<summary>Answer</summary>

**C.** Relational operators like `<` don't work on Strings; use `compareTo`. B compiles because `char` values compare by Unicode number.
</details>

**3.** What is printed?

```java
boolean ready = false;
if (ready = true)
{
    System.out.println("Go!");
}
System.out.println(ready);
```

<details>
<summary>Answer</summary>

```
Go!
true
```
`ready = true` is an **assignment**. It stores `true` in `ready`, and the whole expression has the value `true`, so the `if` body runs.
</details>

**4.** Rewrite `if (isMember == false)` in the preferred style.

<details>
<summary>Answer</summary>

`if (!isMember)`
</details>

**5.** Why might `0.1 + 0.2 == 0.3` evaluate to `false`, and how would you test whether two doubles are "equal"?

<details>
<summary>Answer</summary>

Most decimals can't be stored exactly in binary, so `0.1 + 0.2` is actually `0.30000000000000004`. Test whether they're close instead: `Math.abs(x - y) < 0.0001`.
</details>

#############################################################################

## 2.03 if Statements

<details>
<summary>📌 Standards — 2.03</summary>

| Standard | Description |
| -------- | ----------- |
| ICT 5.8 | Create and use algorithms and solve problems |
| C4.6 | Use proper programming language syntax |
| C4.9 | Create programs using control structures and variables |
| CRP 1 | Apply appropriate technical skills and academic knowledge |
| CRP 5 | Utilize critical thinking to make sense of problems |

</details>

- [ ] Write one-way (`if`) and two-way (`if/else`) selection statements.
- [ ] Predict which statements run for a given input.
- [ ] Identify the empty-statement and missing-brace traps.
	- [ ] I will be able to write a program that uses if/else statements.

**One-Way Selection: `if`**

The body runs **only** when the condition is `true`. Either way, the program continues after the closing brace.

```java
if (condition)
{
    // runs only when condition is true
}
// always runs
```

```java
int gold = 120;
if (gold >= 100)
{
    System.out.println("You can buy the sword.");
}
System.out.println("You leave the shop.");
```

Output:

```text
You can buy the sword.
You leave the shop.
```

**Two-Way Selection: `if/else`**

Exactly **one** of the two blocks runs, never both and never neither.

```java
if (gold >= 100)
{
    System.out.println("You can buy the sword.");
}
else
{
    System.out.println("Not enough gold.");
}
```

**Braces Matter**

Without braces, only the **first statement** after the `if` belongs to it. Indentation means nothing to Java.

```java
int hp = 50;
if (hp <= 0)
    System.out.println("Game over.");
    System.out.println("Respawning...");   // NOT part of the if — always prints!
```

Output:

```text
Respawning...
```

> **Best practice in this course:** always use braces, even for one statement.

**The Empty-Statement Trap**

```java
int lives = 0;
if (lives > 0);            // ← this semicolon IS the entire if body (an empty statement)
{
    System.out.println("Keep playing!");   // a plain block — ALWAYS runs
}
```

> **Oracle Exam Note:** Oracle loves both traps above: misleading indentation and a stray semicolon after `if (...)`. Both compile without errors, so you have to catch them by reading carefully.

**Variables Declared Inside a Block Stay Inside**

A variable declared inside `{ }` only exists inside that block (its **scope**).

```java
if (gold >= 100)
{
    String item = "sword";
}
// System.out.println(item);   // COMPILE ERROR — item does not exist here
```

Fix: declare the variable *before* the `if`, then assign it inside.

> **Oracle Exam Note:** Expect "Does this code compile?" questions that hinge on a variable used outside the block where it was declared.

### Exercise 2.03.A — Predict the Output

For each segment, write the output **before** running it.

```java
// Segment 1
int x = 15;
if (x % 5 == 0)
{
    System.out.print("Fizz ");
}
System.out.print("Done");
```

```java
// Segment 2
int temp = 72;
if (temp > 80)
    System.out.print("Hot ");
    System.out.print("Shorts ");
System.out.print("Go!");
```

```java
// Segment 3
int score = 40;
if (score >= 60)
{
    System.out.print("Pass ");
}
else
{
    System.out.print("Retake ");
}
System.out.print(score);
```

<details>
<summary>Sample Answer</summary>

1. `Fizz Done` — 15 is divisible by 5.
2. `Shorts Go!` — only the first `print` belongs to the `if`. "Shorts" is indented but always runs.
3. `Retake 40` — the `else` runs, then the statement after the `if/else`.

</details>

### Exercise 2.03.B — Write the Method

The bakery from Assignment 1.12.1 now gives **10% off** orders over $50.00. Write `finalTotal`.

```java
public class BakeryOrder
{
    private String customer;
    private double subtotal;

    public BakeryOrder(String customer, double subtotal)
    {
        this.customer = customer;
        this.subtotal = subtotal;
    }

    /** Returns the subtotal, reduced by 10% when the subtotal is more than 50.00. */
    public double finalTotal()
    {
        /* your code here */
    }
}
```

<details>
<summary>Sample Answer</summary>

```java
public double finalTotal()
{
    double total = subtotal;
    if (subtotal > 50.00)
    {
        total = subtotal * 0.90;
    }
    return total;
}
```

A one-way `if` works because the "no discount" case needs no extra code: `total` already holds the subtotal. An `if/else` with two `return` statements is also correct.

</details>

### Activity 2.03.1 — Guess Checker Pt 1

**Overview**

You're building a code-breaking game. The computer picks a secret 4-digit code with no repeated digits, and the player tries to crack it. You will grow this program across three activities: **hits** now (2.03), **near hits** in 2.04, and **compound conditions plus multiple guesses** in 2.05. You submit it once, at the end of Pt 3.

By the end of this activity you will be able to:
- [ ] Use `if` statements to compare matching positions of two codes
- [ ] Use a counter variable with `++` to tally results
- [ ] Read code that someone else wrote and add to it without breaking it

**What's Provided (read it; don't change it)**

| Method | What It Does |
| ------ | ------------ |
| `makeCode()` | Creates a random 4-digit code from 1000–9999 with no duplicate digits |
| `getGuess()` | Prompts until the player types a valid guess, then returns it as a `String` |
| `hasDupes(int num)` | Returns `true` if a number repeats a digit. Used by both methods above |

> These helper methods contain a loop and an array, which you'll learn in 2.07 and Unit 4. You only need to *call* them, the same way you called `Math` methods in Unit 1 without seeing inside them.

**To Do**

- [ ] Add the required block comment header
- [ ] Declare an `int hits` counter and set it to `0`
- [ ] Write **four** `if` statements that each compare one guess digit to the secret digit in the **same position** (`g1` with `r1`, `g2` with `r2`, ...)
- [ ] Each time a digit matches, add one to `hits`
- [ ] After the four `if`s, print `Number of hits: ` followed by the count
- [ ] Leave the line that prints the secret code **turned on**. It lets you and your teacher test the program.

**Starter Code — GuessChecker.java**

```java
import java.util.Scanner;

public class GuessChecker
{
    // PROVIDED: one Scanner for the whole program
    private static Scanner sc = new Scanner(System.in);

    public static void main(String[] args)
    {
        // Generate the secret code
        String targetStr = makeCode();
        System.out.println(targetStr);   // LEAVE THIS LINE ON for testing and grading

        // Break the secret code into four digits
        int r1 = Integer.parseInt(targetStr.substring(0, 1));
        int r2 = Integer.parseInt(targetStr.substring(1, 2));
        int r3 = Integer.parseInt(targetStr.substring(2, 3));
        int r4 = Integer.parseInt(targetStr.substring(3, 4));

        // Get the player's guess
        String guess = getGuess();

        // Break the guess into four digits
        int g1 = Integer.parseInt(guess.substring(0, 1));
        int g2 = Integer.parseInt(guess.substring(1, 2));
        int g3 = Integer.parseInt(guess.substring(2, 3));
        int g4 = Integer.parseInt(guess.substring(3, 4));

        /* your code here */

    }

    // ===================== PROVIDED — DO NOT MODIFY =====================

    // Returns true if num repeats any digit
    public static boolean hasDupes(int num)
    {
        boolean[] digs = new boolean[10];
        while (num > 0)
        {
            if (digs[num % 10])
            {
                return true;
            }
            digs[num % 10] = true;
            num /= 10;
        }
        return false;
    }

    // Creates a random 4-digit code (1000-9999) with no duplicate digits
    public static String makeCode()
    {
        int target = (int) (Math.random() * 9000 + 1000);
        while (hasDupes(target))
        {
            target = (int) (Math.random() * 9000 + 1000);
        }
        return target + "";
    }

    // Prompts until the player enters a valid 4-digit guess with no duplicates
    public static String getGuess()
    {
        boolean validGuess = false;
        int userGuess = 0;
        while (!validGuess)
        {
            System.out.print("Guess a 4-digit number from 1000 to 9999 with no duplicate digits: ");
            userGuess = sc.nextInt();
            if (!(hasDupes(userGuess) || userGuess < 1000 || userGuess > 9999))
            {
                validGuess = true;
            }
        }
        return userGuess + "";
    }
}
```

**Sample Output** (two separate runs)

```text
3768
Guess a 4-digit number from 1000 to 9999 with no duplicate digits: 7658
Number of hits: 1
```

```text
3768
Guess a 4-digit number from 1000 to 9999 with no duplicate digits: 3658
Number of hits: 2
```

> Your secret code will be different every run. Use the printed code to plan a guess that should produce 0, 1, 2, and 4 hits, and check each one.

**Think About It** (answer in a comment at the bottom of your program)

1. Why does `makeCode()` multiply by `9000` and then add `1000`? (Hint: 1.11 `Math.random()`.)
2. `getGuess()` returns a `String`, not an `int`. Why is a `String` convenient for pulling out one digit at a time?

**Submission:** None yet. Keep this file; you'll build on it in 2.04.

### Check for Understanding

**1.** What is printed when `n` is `4`? When `n` is `-4`?

```java
if (n > 0)
{
    System.out.print("positive ");
}
System.out.print("number");
```

<details>
<summary>Answer</summary>

`n = 4` → `positive number`
`n = -4` → `number`
</details>

**2.** What is printed?

```java
int k = 3;
if (k == 5);
{
    System.out.println("Five!");
}
```

<details>
<summary>Answer</summary>

`Five!`. The semicolon after `if (k == 5)` ends the `if` with an empty statement, so the block below it is unconditional.
</details>

**3.** Does this compile? If not, why?

```java
int age = 17;
if (age >= 16)
{
    boolean canDrive = true;
}
System.out.println(canDrive);
```

<details>
<summary>Answer</summary>

**No.** `canDrive` is declared inside the `if` block, so it is out of scope on the last line. Declare `boolean canDrive = false;` before the `if`.
</details>

**4.** In an `if/else`, how many of the two blocks can run on a single pass?

<details>
<summary>Answer</summary>

**Exactly one.**
</details>

**5.** Rewrite so the message prints only when the player has a key. Fix the bug, don't just reformat.

```java
if (hasKey)
    System.out.println("The door creaks open...");
    System.out.println("You step inside.");
```

<details>
<summary>Answer</summary>

```java
if (hasKey)
{
    System.out.println("The door creaks open...");
    System.out.println("You step inside.");
}
```
Without braces only the first line belonged to the `if`.
</details>

#############################################################################

## 2.04 Nested if Statements

<details>
<summary>📌 Standards — 2.04</summary>

| Standard | Description |
| -------- | ----------- |
| ICT 5.8 | Create and use algorithms and solve problems |
| ICT 5.9 | Deconstruct large problems into components |
| C4.6 | Use proper programming language syntax |
| C4.9 | Create programs using control structures and variables |
| CRP 1 | Apply appropriate technical skills and academic knowledge |
| CRP 5 | Utilize critical thinking to make sense of problems |

</details>

- [ ] Write multiway selection with `if / else if / else`.
- [ ] Order conditions so every branch is reachable.
- [ ] Trace nested `if` statements, including the "dangling else."

**Multiway Selection: `else if`**

Java checks the conditions **from top to bottom** and runs the **first** branch whose condition is true. Every other branch is skipped, even if its condition is also true.

```java
if (score >= 90)
{
    grade = "A";
}
else if (score >= 80)
{
    grade = "B";
}
else if (score >= 70)
{
    grade = "C";
}
else
{
    grade = "F";
}
```

When `score` is 95, `score >= 80` is also true, but it is never checked. The chain stopped at `"A"`.

**Order Matters**

```java
// BUGGY — what grade does 95 get?
if (score >= 70)
{
    grade = "C";
}
else if (score >= 80)
{
    grade = "B";       // unreachable for any score >= 80!
}
else if (score >= 90)
{
    grade = "A";       // unreachable!
}
```

A 95 gets a `"C"`. With "at least" (`>=`) ranges, test the **largest** threshold first. With "less than" (`<`) ranges, test the **smallest** first.

**`else if` vs. Separate `if`s**

```java
// Separate ifs: EVERY condition is checked
int points = 95;
if (points >= 90) { System.out.print("A "); }
if (points >= 80) { System.out.print("B "); }
if (points >= 70) { System.out.print("C "); }
// prints: A B C
```

Use separate `if`s when several things can be true at once (bonus badges). Use `else if` when exactly one outcome should happen (a letter grade).

**Nested `if`: A Decision Inside a Decision**

```java
if (hasTicket)
{
    if (age >= 18)
    {
        System.out.println("Welcome to the late show.");
    }
    else
    {
        System.out.println("Matinee only.");
    }
}
else
{
    System.out.println("Please buy a ticket.");
}
```

The inner question (age) is only asked when the outer answer (ticket) is `true`.

**The Dangling `else`**

An `else` always pairs with the **nearest unmatched `if`**, no matter how it's indented.

```java
int x = 5;
int y = 10;
if (x > 10)
    if (y > 5)
        System.out.println("A");
else                              // indented under the outer if, but belongs to the INNER if
    System.out.println("B");
```

Nothing prints. `x > 10` is false, so the entire inner `if/else` is skipped. Braces remove all doubt.

> **Oracle Exam Note:** "Dangling else" questions appear on **both** exams. Cover the indentation with your finger and pair each `else` with the closest `if` above it that doesn't already have one.

### Exercise 2.04.A — Trace the Chain

What is printed for `t = 30`, `t = 65`, and `t = 100`?

```java
if (t < 32)
{
    System.out.println("Freezing");
}
else if (t < 60)
{
    System.out.println("Cool");
}
else if (t < 85)
{
    System.out.println("Warm");
}
else
{
    System.out.println("Hot");
}
```

<details>
<summary>Sample Answer</summary>

- `t = 30` → `Freezing`
- `t = 65` → `Warm` (65 is not < 32 and not < 60, but is < 85)
- `t = 100` → `Hot`

The "less than" thresholds are tested smallest-first, so every branch is reachable.

</details>

### Exercise 2.04.B — Write the Method

Write `ticketPrice` for the `Guest` class from your Unit 1 Theme Park project.

| Guest | Price |
| ----- | ----- |
| Age under 3 | 0 (free) |
| Age 3–12 | 45 |
| Age 13–64 | 80 |
| Age 65+ | 50 |

Members get **$10 off** any non-free ticket. Use a nested `if` for the member discount.

```java
public class Guest
{
    private String name;
    private int age;
    private boolean isMember;

    public Guest(String name, int age, boolean isMember)
    {
        this.name = name;
        this.age = age;
        this.isMember = isMember;
    }

    /** Returns this guest's ticket price in whole dollars. */
    public int ticketPrice()
    {
        /* your code here */
    }
}
```

<details>
<summary>Sample Answer</summary>

```java
public int ticketPrice()
{
    int price;
    if (age < 3)
    {
        price = 0;
    }
    else if (age <= 12)
    {
        price = 45;
    }
    else if (age <= 64)
    {
        price = 80;
    }
    else
    {
        price = 50;
    }

    if (price > 0)
    {
        if (isMember)
        {
            price -= 10;
        }
    }
    return price;
}
```

The member check is a **separate** `if` because it applies on top of whichever age price was chosen. The nested `if` could also be written as a compound condition, `price > 0 && isMember`, which you'll learn in 2.05.

</details>

### Activity 2.04.1 — Guess Checker Pt 2

**Overview**

Add **near hits** to your Guess Checker: digits the player guessed correctly but placed in the **wrong position**. Because the secret code never repeats a digit, each guess digit is either a hit, a near hit, or neither, and you can test those possibilities with an `if / else if` chain.

By the end of this activity you will be able to:
- [ ] Write an `if / else if` chain where the order of the checks matters
- [ ] Maintain two separate counters in the same program
- [ ] Document changes to existing code with dated comments

**To Do**

- [ ] Declare an `int nearHits` counter set to `0`
- [ ] Replace each of your four hit checks with an `if / else if` chain for that digit:
  - first, check for a hit (same position)
  - then use `else if` to check the digit against **each of the other three** secret positions, adding one to `nearHits` on a match
- [ ] Do **not** use `&&` or `||` yet. That's Pt 3.
- [ ] Print both counters at the end
- [ ] Add a comment with **today's date** wherever you changed or added code

Here is the pattern for the first digit. Write the other three yourself.

```java
if (g1 == r1)
{
    hits++;
}
else if (g1 == r2)
{
    nearHits++;
}
else if (g1 == r3)
{
    nearHits++;
}
else if (g1 == r4)
{
    nearHits++;
}
```

**Sample Output**

```text
9782
Guess a 4-digit number from 1000 to 9999 with no duplicate digits: 9728
Number of hits: 2
Number of near hits: 2
```

```text
9782
Guess a 4-digit number from 1000 to 9999 with no duplicate digits: 7928
Number of hits: 0
Number of near hits: 4
```

**Think About It** (comment at the bottom)

1. Why must the **hit** check come first in each chain?
2. Why is an `else if` chain safe here only because the secret code has no duplicate digits?

**Submission:** None. Keep building; you'll submit after Pt 3.

### Activity 2.04.2 — Activity Director

**Overview**

You're the Activities Director at a resort. Every morning the program checks the temperature and tells guests what to do. Some temperatures also trigger a second message, which tests whether you know the difference between an `else if` chain (exactly one result) and a separate `if` (an extra, independent check).

By the end of this activity you will be able to:
- [ ] Write an `if / else if / else` chain with ranges in the correct order
- [ ] Decide when a check belongs in the chain and when it needs its own `if`
- [ ] Generate a random integer in a range (1.11 `Math.random()`)
- [ ] Test a program at its **boundary values**

**Activity Table**

| Temperature | Message |
| ----------- | ------- |
| 80 and above | `Go swimming!` |
| 60–79 | `Play tennis!` |
| 40–59 | `Play golf!` |
| 39 and below | `Go skiing!` |

**And separately:** if the temperature is **above 95** or **below 20**, also print `Visit our shops!`

> Temperatures are whole numbers, so the ranges are written with whole numbers. There's no gap between 59 and 60 to fall through.

**To Do**

- [ ] Add the required block comment header
- [ ] Generate a random `int` temperature from **10 to 101**, inclusive. Add a comment showing how you chose the numbers in your formula.
- [ ] Print `Temperature: ` followed by the value
- [ ] Write a static method `suggestActivity(int temp)` that **returns** the activity `String` using an `if / else if / else` chain. Call it from `main` and print the result.
- [ ] After printing the activity, print `Visit our shops!` when the temperature is above 95 **or** below 20. You haven't learned `||` yet (2.05), so use an `if` with an `else if`. This check must **not** be part of the activity chain.
- [ ] Test every boundary listed in Test Cases below

**Starter Code — ActivityDirector.java**

```java
public class ActivityDirector
{
    public static void main(String[] args)
    {
        // TODO: random temperature from 10 to 101 (inclusive)
        int temp = 0;

        System.out.println("Temperature: " + temp);

        // TODO: print the result of suggestActivity(temp)

        // TODO: shop message (above 95 or below 20)
    }

    /** Returns the suggested activity for the given temperature. */
    public static String suggestActivity(int temp)
    {
        /* your code here */
    }
}
```

**Sample Output** (three separate runs)

```text
Temperature: 72
Play tennis!
```

```text
Temperature: 100
Go swimming!
Visit our shops!
```

```text
Temperature: 35
Go skiing!
```

**Test Cases**

A random temperature makes testing hard because you can't choose the value. For testing, temporarily replace the random line with a fixed value (for example, `int temp = 95;`), run it, record the result, and repeat. Put the random line back before you submit.

Test **every boundary**, the values right at the edge of each range:

| Temperature | Expected Output |
| :---------: | --------------- |
| 101 | Go swimming! · Visit our shops! |
| 96 | Go swimming! · Visit our shops! |
| 95 | Go swimming! |
| 80 | Go swimming! |
| 79 | Play tennis! |
| 60 | Play tennis! |
| 59 | Play golf! |
| 40 | Play golf! |
| 39 | Go skiing! |
| 20 | Go skiing! |
| 19 | Go skiing! · Visit our shops! |
| 10 | Go skiing! · Visit our shops! |

**Think About It** (comment at the bottom)

1. Why can't `Visit our shops!` be another `else if` at the bottom of the activity chain?
2. Your chain probably tests `temp >= 80` first. What would go wrong if `temp >= 40` came first?
3. Preview of 2.05: rewrite your shop check as **one** `if` using `||`.

**Submission**

- [ ] `ActivityDirector.java` with block comment header (random line restored)
- [ ] Test Cases document covering all twelve boundary values

**Grading:** AP CSA 5-point Assignment Rubric.

### Check for Understanding

**1.** What is printed when `n` is `12`?

```java
if (n % 2 == 0)
{
    System.out.print("even ");
}
else if (n % 3 == 0)
{
    System.out.print("three ");
}
else
{
    System.out.print("other ");
}
```

<details>
<summary>Answer</summary>

`even `. 12 is also divisible by 3, but the chain stops at the first true condition.
</details>

**2.** Same code, but `else if (n % 3 == 0)` is changed to a separate `if (n % 3 == 0)` (the final `else` now belongs to it). What prints for `n = 12`? For `n = 7`?

<details>
<summary>Answer</summary>

`n = 12` → `even three `. Both `if` statements are now checked independently.
`n = 7` → `other `. The first `if` is false (nothing prints), and the second `if` is false, so its `else` runs.
</details>

**3.** What is printed?

```java
int a = 3;
int b = 8;
if (a > 5)
    if (b > 5)
        System.out.println("X");
else
    System.out.println("Y");
System.out.println("Z");
```

<details>
<summary>Answer</summary>

`Z`. The `else` belongs to the inner `if (b > 5)`. Since `a > 5` is false, the whole inner `if/else` is skipped.
</details>

**4.** Which branch is unreachable, and how do you fix it?

```java
if (speed > 55)       { msg = "Ticket"; }
else if (speed > 80)  { msg = "Arrest"; }
else                  { msg = "OK"; }
```

<details>
<summary>Answer</summary>

`"Arrest"` is unreachable: any speed over 80 is also over 55 and is caught first. Test `speed > 80` before `speed > 55`.
</details>

**5.** True or false: in an `if / else if / else` chain with four branches, exactly one branch runs.

<details>
<summary>Answer</summary>

**True.** The final `else` guarantees one branch always runs. Without a final `else`, it's possible for *zero* branches to run.
</details>

#############################################################################

## 2.04a Switch Statements and the Ternary Operator — *Oracle Foundations 1Z0-811*

<details>
<summary>📌 Standards — 2.04a</summary>

| Standard | Description |
| -------- | ----------- |
| ICT 5.8 | Create and use algorithms and solve problems |
| C4.6 | Use proper programming language syntax |
| C4.9 | Create programs using control structures and variables |
| CRP 1 | Apply appropriate technical skills and academic knowledge |
| CRP 5 | Utilize critical thinking to make sense of problems |

</details>

> **Oracle Exam Note:** `switch` and the ternary operator are tested on Oracle 1Z0-811. They are **not** in the AP Java subset. You may use them on AP free-response questions, but no AP question requires them.

- [ ] Write a `switch` statement with `case`, `break`, and `default`.
- [ ] Predict output when `break` is missing (fall-through).
- [ ] Identify which types a `switch` can and cannot use.
- [ ] Use the ternary operator for a simple conditional assignment.

**The `switch` Statement**

A `switch` compares **one value** against a list of **constant** cases. It's a cleaner alternative to a long `else if` chain that keeps testing the same variable with `==`.

```java
int day = 3;
switch (day)
{
    case 1:
        System.out.println("Monday");
        break;
    case 2:
        System.out.println("Tuesday");
        break;
    case 3:
        System.out.println("Wednesday");
        break;
    default:
        System.out.println("Other day");
}
```

**How It Runs**

1. Java evaluates the expression in `switch (...)` once.
2. It jumps to the matching `case` (or to `default` if nothing matches).
3. It runs statements **downward** until it hits a `break` or the end of the `switch`.

Step 3 is what makes **fall-through** happen.

**Fall-Through: Missing `break`**

```java
int level = 2;
switch (level)
{
    case 1:
        System.out.println("Easy");
    case 2:
        System.out.println("Medium");
    case 3:
        System.out.println("Hard");
        break;
    default:
        System.out.println("Unknown");
}
```

Output:

```text
Medium
Hard
```

Java jumped to `case 2`, printed "Medium," then **kept going** into `case 3` because there was no `break`.

Fall-through is sometimes useful on purpose, to group cases:

```java
int month = 4;
switch (month)
{
    case 4:
    case 6:
    case 9:
    case 11:
        System.out.println("30 days");
        break;
    case 2:
        System.out.println("28 or 29 days");
        break;
    default:
        System.out.println("31 days");
}
```

**`switch` Rules Oracle Tests**

| Rule | Example |
| ---- | ------- |
| Allowed types: `byte`, `short`, `char`, `int`, their wrappers, `String`, and enums | `switch (letter)` where `letter` is a `char` ✅ |
| **Not** allowed: `long`, `float`, `double`, `boolean` | `switch (price)` where `price` is a `double` ❌ compile error |
| Case labels must be **constants** (literals or `final` variables) | `case MAX:` ✅ if `final int MAX = 10;` · `case x:` ❌ if `x` is a regular variable |
| Case labels must be **unique** | two `case 3:` labels ❌ compile error |
| Case label type must match the switch type | `case "1":` inside `switch (intValue)` ❌ compile error |
| `default` is optional and can appear **anywhere** | If `default` is in the middle and has no `break`, it falls through too |
| `String` cases are **case-sensitive** (uses `.equals()`) | `"Yes"` does **not** match `case "yes":`. Normalize with `.toLowerCase()` first |

> **Oracle Exam Note:** Newer versions of Java (14+) add an arrow form, `case 1 -> ...`, with no fall-through. Both exams use the classic form shown here.

**The Ternary Operator `? :`**

The ternary operator is a one-line `if/else` that **produces a value**.

```java
// condition ? valueIfTrue : valueIfFalse
int age = 17;
String status = (age >= 18) ? "adult" : "minor";   // "minor"

int a = 10, b = 20;
int max = (a > b) ? a : b;                          // 20
```

Remember this line from 1.14.4 Bike Shop?

```java
String gearWord = (gears == 1) ? " gear" : " gears";
```

Now you can read it: *if `gears` is 1, use `" gear"`; otherwise use `" gears"`.*

**Ternary Rules**

- It is an **expression** (it produces a value), so it must be used: assigned, printed, or returned. `(x > 0) ? "pos" : "neg";` on a line by itself is a compile error.
- Both result values must fit the target type: `int n = (flag) ? 5 : "five";` does not compile.
- Ternaries can be nested, but readability drops fast. Prefer `if/else` for anything beyond a simple choice.

```java
int n = -4;
String sign = (n > 0) ? "positive" : (n < 0) ? "negative" : "zero";   // "negative"
```

### Exercise 2.04a.A — Trace the Switch

What does each segment print?

```java
// Segment 1
char grade = 'B';
switch (grade)
{
    case 'A':
        System.out.print("Excellent ");
    case 'B':
        System.out.print("Good ");
    case 'C':
        System.out.print("Fair ");
        break;
    default:
        System.out.print("See me ");
}
```

```java
// Segment 2
String cmd = "Quit";
switch (cmd)
{
    case "quit":
        System.out.print("Bye");
        break;
    default:
        System.out.print("Unknown command");
}
```

```java
// Segment 3
int code = 9;
switch (code)
{
    default:
        System.out.print("D ");
    case 1:
        System.out.print("One ");
        break;
    case 2:
        System.out.print("Two ");
}
```

<details>
<summary>Sample Answer</summary>

1. `Good Fair ` — starts at `case 'B'`, falls through into `case 'C'`, and stops at `break`.
2. `Unknown command` — `"Quit"` does not equal `"quit"`; String cases are case-sensitive.
3. `D One ` — no case matches 9, so Java jumps to `default`, which has no `break` and falls into `case 1`.

</details>

### Exercise 2.04a.B — Convert It

Rewrite using a `switch` on `choice`:

```java
if (choice == 1)
{
    System.out.println("Attack");
}
else if (choice == 2)
{
    System.out.println("Defend");
}
else if (choice == 3)
{
    System.out.println("Run");
}
else
{
    System.out.println("Invalid");
}
```

Then rewrite this `if/else` as a single ternary assignment:

```java
String label;
if (hp > 0)
{
    label = "alive";
}
else
{
    label = "defeated";
}
```

<details>
<summary>Sample Answer</summary>

```java
switch (choice)
{
    case 1:
        System.out.println("Attack");
        break;
    case 2:
        System.out.println("Defend");
        break;
    case 3:
        System.out.println("Run");
        break;
    default:
        System.out.println("Invalid");
}
```

```java
String label = (hp > 0) ? "alive" : "defeated";
```

</details>

### Activity 2.04a.1 — Text-Based Calculator with Mode Selection

**Overview**

Build a calculator that asks the user which **mode** to run and routes them there with a `switch`. Inside each mode, use ternary operators for quick decisions. This activity pulls in `Scanner`, `Math` methods, and `printf` from Unit 1.

By the end of this activity you will be able to:
- [ ] Use a `switch` on a `String` to route program flow
- [ ] Nest a `switch` on a `char` inside another `switch`
- [ ] Use the ternary operator to choose between two values
- [ ] Guard against invalid input with `default`

**To Do**

- [ ] Add the required block comment header
- [ ] Ask the user to choose a mode: `basic`, `scientific`, or `stats`. Convert the input with `.trim().toLowerCase()` so `" Basic "` still works.
- [ ] Use a `switch` on the mode `String`:
  - **`basic`** — read two `double` values and an operator (`+`, `-`, `*`, `/`). Use a **nested `switch`** on the operator `char` (`input.next().charAt(0)`). For division, use a **ternary** to print `undefined` when the divisor is `0`. Use a second **ternary** to report whether the result is `positive` or `negative` (treat `0` as positive).
  - **`scientific`** — read one `double`. Print its square (`Math.pow`), its absolute value (`Math.abs`), and its square root. Use a **ternary** so a negative number prints `not a real number` instead of `NaN`.
  - **`stats`** — read three `int` values. Find the largest using **two ternaries** (no `Math.max`). Print the average to **two decimal places** with `printf`.
  - **`default`** — print `Unknown mode: ` followed by what the user typed.
- [ ] Every `case` ends with `break` (unless you can explain an intentional fall-through in a comment)
- [ ] Test every mode, plus at least one invalid mode, in your Test Cases document

**Sample Output** (four separate runs)

```text
Choose a mode (basic, scientific, stats): basic
Enter first number: 12
Enter second number: 0
Enter operator (+ - * /): /
Result: undefined
```

```text
Choose a mode (basic, scientific, stats): Basic
Enter first number: 7.5
Enter second number: 10
Enter operator (+ - * /): -
Result: -2.5 (negative)
```

```text
Choose a mode (basic, scientific, stats): scientific
Enter a number: -16
Square: 256.0
Absolute value: 16.0
Square root: not a real number
```

```text
Choose a mode (basic, scientific, stats): stats
Enter three whole numbers: 84 97 90
Largest: 97
Average: 90.33
```

**Hints**

- `input.next().charAt(0)` reads the next word and keeps its first character.
- A ternary must produce one type. Use `String.format("%.3f", Math.sqrt(x))` so both choices are `String`s.
- Find the max of three in two steps: `int max = (a > b) ? a : b;` then compare `c` with `max`.

**Submission**

- [ ] `Calculator.java` with block comment header
- [ ] Test Cases document: at least **five** runs (each mode, one invalid mode, and divide by zero)

**Grading:** AP CSA 5-point Assignment Rubric.

### Check for Understanding

**1.** What is printed?

```java
int n = 2;
switch (n)
{
    case 1:
        System.out.print("A");
    case 2:
        System.out.print("B");
    case 3:
        System.out.print("C");
    default:
        System.out.print("D");
}
```

<details>
<summary>Answer</summary>

`BCD`. No `break` anywhere, so execution falls from `case 2` to the end.
</details>

**2.** Which `switch` expression causes a compile error?

- A. `switch (letter)` where `letter` is a `char`
- B. `switch (name)` where `name` is a `String`
- C. `switch (total)` where `total` is a `double`
- D. `switch (count)` where `count` is an `Integer`

<details>
<summary>Answer</summary>

**C.** `double` (along with `long`, `float`, and `boolean`) cannot be used in a `switch`.
</details>

**3.** What is the value of `msg`?

```java
int items = 1;
String msg = items + ((items == 1) ? " item" : " items");
```

<details>
<summary>Answer</summary>

`"1 item"`
</details>

**4.** Why doesn't this line compile?

```java
(score >= 60) ? System.out.println("Pass") : System.out.println("Fail");
```

<details>
<summary>Answer</summary>

A ternary must **produce a value**, but `println` is `void`. It also can't stand alone as a statement. Fix: `System.out.println((score >= 60) ? "Pass" : "Fail");`
</details>

**5.** A user types `YES`. Which case runs, and how would you fix the code so it matches?

```java
switch (answer)
{
    case "yes": System.out.println("Great!"); break;
    default:    System.out.println("Okay.");
}
```

<details>
<summary>Answer</summary>

`default` runs and prints `Okay.`, because String cases are case-sensitive. Fix: `switch (answer.toLowerCase())`.
</details>

#############################################################################

## 2.05 Compound Boolean Expressions

<details>
<summary>📌 Standards — 2.05</summary>

| Standard | Description |
| -------- | ----------- |
| ICT 5.4 | Interpret information and draw conclusions to make informed decisions |
| ICT 5.8 | Create and use algorithms and solve problems |
| C4.6 | Use proper programming language syntax |
| C4.9 | Create programs using control structures and variables |
| CRP 1 | Apply appropriate technical skills and academic knowledge |
| CRP 5 | Utilize critical thinking to make sense of problems |

</details>

- [ ] Combine conditions with `&&`, `||`, and `!`.
- [ ] Explain and use short-circuit evaluation to prevent errors.
- [ ] Write range checks correctly.

**Logical Operators**

| `a` | `b` | `a && b` | `a \|\| b` | `!a` |
| :-: | :-: | :------: | :--------: | :--: |
| T | T | **T** | **T** | F |
| T | F | F | **T** | F |
| F | T | F | **T** | **T** |
| F | F | F | F | **T** |

- `&&` is true only when **both** sides are true.
- `||` is true when **at least one** side is true. (It's *inclusive*: both true counts.)
- `!` flips the value.

```java
// Range: between 18 and 65, inclusive
if (age >= 18 && age <= 65)
{
    System.out.println("Working age");
}

// Out of range: invalid score
if (score < 0 || score > 100)
{
    System.out.println("Invalid score");
}

// Negation
if (!hasKey)
{
    System.out.println("The door is locked.");
}
```

**Compound vs. Nested**

These two segments are equivalent:

```java
if (hasTicket)
{
    if (age >= 18)
    {
        System.out.println("Welcome to the late show.");
    }
}
```

```java
if (hasTicket && age >= 18)
{
    System.out.println("Welcome to the late show.");
}
```

Use `&&` when both conditions lead to the same single action. Use nesting when the outer condition has its **own** `else` or other work to do.

**Short-Circuit Evaluation**

Java evaluates left to right and stops **as soon as it knows the answer**:

- `false && anything` is `false`, so the right side is **never evaluated**.
- `true || anything` is `true`, so the right side is **never evaluated**.

This isn't just a speed trick. It's how you write **guards** that prevent crashes:

```java
int count = 0;
int total = 50;

// SAFE — when count is 0, the left side is false and the division never happens
if (count != 0 && total / count > 10)
{
    System.out.println("High average");
}

// CRASH — the division runs first: ArithmeticException: / by zero
// if (total / count > 10 && count != 0) { ... }
```

```java
String nickname = null;

// SAFE — when nickname is null, the length check is skipped
if (nickname != null && nickname.length() > 0)
{
    System.out.println("Hi, " + nickname);
}

// CRASH — NullPointerException (recall 1.14: calling a method on null)
// if (nickname.length() > 0 && nickname != null) { ... }
```

> **College Board Note:** Short-circuit evaluation is tested on almost every AP exam. Questions show a guard like `x != 0 && y / x > 2` and ask whether an exception can occur. **Order is everything:** the guard goes on the **left**.

> **Oracle Exam Note:** Java also has `&` and `|`, which work on booleans but do **not** short-circuit; both sides always run. Oracle may show `if (x != 0 & 10 / x > 1)` and ask what happens when `x` is 0. Answer: an `ArithmeticException`.

**Common Mistakes**

```java
// if (0 < x < 10)          // COMPILE ERROR — (0 < x) is a boolean; boolean < 10 is meaningless
if (0 < x && x < 10)         // correct

// if (choice == 1 || 2)    // COMPILE ERROR — 2 is not a boolean
if (choice == 1 || choice == 2)   // correct

if (x > 10 && x < 5)         // compiles, but can NEVER be true
if (x > 5 || x < 10)         // compiles, but is ALWAYS true
```

### Exercise 2.05.A — Evaluate and Short-Circuit

Given `int a = 4; int b = 0; String s = null;`, decide whether each expression is `true`, `false`, or **throws an exception**.

1. `a > 2 && a < 10`
2. `b != 0 && a / b > 1`
3. `a / b > 1 && b != 0`
4. `a == 4 || a / b > 1`
5. `s != null && s.equals("hi")`
6. `s == null || s.length() > 3`
7. `!(a > 3) || b == 0`

<details>
<summary>Sample Answer</summary>

1. `true`
2. `false` — the left side is false, so `a / b` never runs
3. **ArithmeticException** — `a / b` runs first and divides by zero
4. `true` — the left side is true, so `||` stops before dividing
5. `false` — `s != null` is false, so `.equals` is never called
6. `true` — `s == null` is true, so `.length()` is never called
7. `true` — `!(true)` is false, but `b == 0` is true

</details>

### Exercise 2.05.B — Write the Method

Write two methods for the `Car` class from your Unit 1 Car Dealership project.

```java
public class Car
{
    private String make;
    private int year;
    private int mileage;
    private double price;

    public Car(String make, int year, int mileage, double price)
    {
        this.make = make;
        this.year = year;
        this.mileage = mileage;
        this.price = price;
    }

    /** A car is "featured" if it is (2020 or newer AND under 30,000 miles)
     *  OR priced below 15000.00. */
    public boolean isFeatured()
    {
        /* your code here */
    }

    /** Returns true if searchMake is not null and matches this car's make,
     *  ignoring case. Must never throw a NullPointerException. */
    public boolean matchesMake(String searchMake)
    {
        /* your code here */
    }
}
```

<details>
<summary>Sample Answer</summary>

```java
public boolean isFeatured()
{
    return (year >= 2020 && mileage < 30000) || price < 15000.00;
}

public boolean matchesMake(String searchMake)
{
    return searchMake != null && searchMake.equalsIgnoreCase(make);
}
```

In `matchesMake`, the `null` check must be on the **left** so short-circuiting protects the method call. (`make.equalsIgnoreCase(searchMake)` is also safe, because `equalsIgnoreCase` returns `false` when passed `null`. Explaining *why* is a great exam answer.)

</details>

### Activity 2.05.1 — Thunder Mountain Ride Gate

**Overview**

Your Unit 1 theme park needs a gate program for its newest roller coaster. A rider's height, age, and answers decide whether they ride. The rules combine conditions with `&&` (ranges), `||` (invalid input), and `!` (a missing requirement), and one rule needs parentheses to group a compound condition correctly.

By the end of this activity you will be able to:
- [ ] Write range checks with `&&`
- [ ] Reject invalid input with `||`
- [ ] Use `!` with a boolean variable
- [ ] Use parentheses to group `&&` and `||` in the same condition

**Ride Rules** (check them in this order)

| # | Rule | Message |
| :-: | ---- | ------- |
| 1 | Height under 30 or over 96 inches, **or** age under 1 or over 110 | `Invalid entry. Please check the height and age.` |
| 2 | Has **not** watched the safety video | `Please watch the safety video first.` |
| 3 | Height 48–76 inches (inclusive) **and** age 8 or older | `Welcome aboard! Enjoy Thunder Mountain.` |
| 4 | Height 44–47 inches **and** riding with an adult | `Welcome aboard! Stay seated next to your adult.` |
| 5 | Height over 76 inches | `Sorry, the restraints do not fit riders over 76 inches.` |
| 6 | Anyone else | `Sorry, you do not meet the ride requirements yet.` |

**Fast Pass:** after the gate decision, an **admitted** rider who is **under 10 years old or under 48 inches** also gets `Fast Pass granted: use the short line!`

**To Do**

- [ ] Add the required block comment header
- [ ] Read height (`int`), age (`int`), riding with an adult (`yes`/`no`), and watched the safety video (`yes`/`no`). Store both yes/no answers as `boolean` variables using `.equalsIgnoreCase("yes")`.
- [ ] Write the six rules as **one** `if / else if / else` chain, in the order shown
- [ ] Rule 1 must be a **single** condition using `||`
- [ ] Rule 2 must use `!` with your safety-video boolean
- [ ] Rules 3 and 4 must each be a **single** condition using `&&`
- [ ] Declare `boolean admitted = false;` before the chain and set it to `true` in the two "Welcome aboard" branches
- [ ] Write the Fast Pass check as **one** `if` that uses `admitted`, `&&`, `||`, **and parentheses**
- [ ] Test every rule, plus the boundary heights 44, 47, 48, 76, and 77

**Sample Output** (three separate runs)

```text
=== THUNDER MOUNTAIN RIDE GATE ===
Rider height (inches): 52
Rider age: 9
Riding with an adult? (yes/no): no
Watched the safety video? (yes/no): yes
Welcome aboard! Enjoy Thunder Mountain.
Fast Pass granted: use the short line!
```

```text
=== THUNDER MOUNTAIN RIDE GATE ===
Rider height (inches): 46
Rider age: 7
Riding with an adult? (yes/no): no
Watched the safety video? (yes/no): yes
Sorry, you do not meet the ride requirements yet.
```

```text
=== THUNDER MOUNTAIN RIDE GATE ===
Rider height (inches): 52
Rider age: 12
Riding with an adult? (yes/no): no
Watched the safety video? (yes/no): no
Please watch the safety video first.
```

**Think About It** (comment at the bottom)

1. Remove the parentheses from your Fast Pass condition: `admitted && age < 10 || height < 48`. Find an input where the result changes, and explain why. (Hint: `&&` is evaluated before `||`.)
2. Why must Rule 1 come **first** in the chain?
3. Rule 3 uses `height >= 48 && height <= 76`. Write the **opposite** of that range as a single condition.

**Submission**

- [ ] `RideGate.java` with block comment header
- [ ] Test Cases document: every rule triggered at least once, a Fast Pass rider, and the five boundary heights

**Grading:** AP CSA 5-point Assignment Rubric.


### Activity 2.05.2 — Smart Checkout: Short-Circuit Guards

**Overview**

A store's checkout program has two hidden dangers: a coupon lookup that returns **`null`** for bad codes, and a loyalty calculation that can **divide by zero**. You'll crash the program on purpose to see both errors, then fix it with **short-circuit guards**: compound conditions where the left side protects the right side. This builds on the `NullPointerException` you met in 1.17.1 High Score Tracker.

By the end of this activity you will be able to:
- [ ] Explain short-circuit evaluation for `&&` and `||`
- [ ] Order a compound condition so it can never throw an exception
- [ ] Guard against unboxing a `null` `Integer` (1.17)
- [ ] Guard against integer division by zero

**Store Rules**

| Rule | Details |
| ---- | ------- |
| Coupon | `couponPercent(code)` (provided) returns `10`, `15`, or `1` for a valid code, and **`null`** for anything else. Coupons under 5% are not accepted. |
| Big saver | A valid coupon of 15% or more prints `Big saver! That's one of our best coupons.` |
| VIP | Average loyalty points per visit (`points / visits`, integer division) of **50 or more** earns an extra $5.00 off. A shopper with 0 visits is not VIP. |

**To Do**

- [ ] Add the required block comment header
- [ ] Read the subtotal (`double`), coupon code (`String`), store visits (`int`), and loyalty points (`int`)
- [ ] **Crash it on purpose (do this first).** Write these unguarded versions, run them, and screenshot each crash:
  - `if (percent < 5 || percent == null)` with the code `BOGUS` → `NullPointerException`
  - `boolean vip = points / visits >= 50 && visits != 0;` with 0 visits → `ArithmeticException`
- [ ] **Fix it.** Reorder each condition so the safety check is on the **left**:
  - **Guard 1 (`||`):** no discount when the coupon is `null` **or** under 5%; otherwise apply it
  - **Guard 2 (`&&`):** print the Big saver message only when the coupon is not `null` **and** at least 15%
  - **Guard 3 (`&&`):** VIP only when visits is not 0 **and** the average is at least 50
- [ ] Above each guard, add a comment naming the **exception it prevents** and **why** the order works
- [ ] Print the receipt with `printf` (two decimal places)

**Starter Code — SmartCheckout.java**

```java
import java.util.Scanner;

public class SmartCheckout
{
    public static void main(String[] args)
    {
        Scanner input = new Scanner(System.in);
        System.out.println("=== SMART CHECKOUT ===");

        // TODO: read subtotal, coupon code, visits, and points

        Integer percent = couponPercent(code);   // WARNING: may be null!

        // TODO: Guard 1, Guard 2, Guard 3, and the receipt
    }

    // ===================== PROVIDED — DO NOT MODIFY =====================
    // Returns the percent off for a valid code, or null if the code is not valid
    public static Integer couponPercent(String code)
    {
        if (code.equalsIgnoreCase("SAVE10"))
        {
            return 10;
        }
        else if (code.equalsIgnoreCase("TEACHER"))
        {
            return 15;
        }
        else if (code.equalsIgnoreCase("PENNY"))
        {
            return 1;
        }
        return null;
    }
}
```

**Sample Output** (three separate runs)

```text
=== SMART CHECKOUT ===
Subtotal: $80.00
Coupon code (or NONE): SAVE10
Store visits this year: 4
Loyalty points earned: 260
Coupon applied: 10% off
VIP shopper: extra $5.00 off!
Subtotal:  $   80.00
Discount: -$   13.00
Total:     $   67.00
```

```text
=== SMART CHECKOUT ===
Subtotal: $80.00
Coupon code (or NONE): teacher
Store visits this year: 0
Loyalty points earned: 0
Coupon applied: 15% off
Big saver! That's one of our best coupons.
Subtotal:  $   80.00
Discount: -$   12.00
Total:     $   68.00
```

```text
=== SMART CHECKOUT ===
Subtotal: $25.50
Coupon code (or NONE): NONE
Store visits this year: 3
Loyalty points earned: 149
No coupon discount applied.
Subtotal:  $   25.50
Discount: -$    0.00
Total:     $   25.50
```

**Think About It** (comment at the bottom)

1. In the third run, 149 points over 3 visits is not VIP. What does `149 / 3` evaluate to in Java, and why?
2. Guard 1 and the "apply the coupon" logic are opposites. Use De Morgan's Laws (2.06 preview) to write the condition for "the coupon **is** accepted."
3. Try `10.0 / 0` in a quick test. It doesn't crash; what does it print? Why is integer division different?

**Submission**

- [ ] `SmartCheckout.java` with block comment header and guard comments
- [ ] Screenshots of **both** crashes from the crash-it-on-purpose step
- [ ] Test Cases document: a valid coupon, a `PENNY` coupon, an invalid code, 0 visits, and a VIP shopper

**Grading:** AP CSA 5-point Assignment Rubric. Pay particular attention to:
- Every guard has the safety check on the **left**
- Each guard comment names the exception it prevents

### Activity 2.05.3 — Guess Checker Pt 3

**Overview**

Finish your Guess Checker. You'll simplify the near-hit chains with **compound Boolean expressions**, give the player **three guesses**, and end with a win or lose message. This is the version you submit.

By the end of this activity you will be able to:
- [ ] Replace an `else if` chain with a single condition using `||`
- [ ] Write a compound condition with `&&` that controls when a game keeps going
- [ ] Use a ternary to fix singular/plural output
- [ ] Write test cases that prove each part of a program works

**What's New in the Starter**

Repeating the guess three times requires a **loop**, which you'll study in 2.07. The loop is provided below. Your job is to write the **condition** that decides whether the game keeps going, the same kind of Boolean expression you've been writing all unit.

**To Do**

- [ ] Rewrite each digit's near-hit check as **one** `else if` using `||`. For example, `g1` becomes:
  `else if (g1 == r2 || g1 == r3 || g1 == r4)`
- [ ] Inside the loop, reset `hits` and `nearHits` to `0` at the start of every guess
- [ ] Write the loop condition: keep going while the player **has guesses left AND has not cracked the code**
- [ ] After each guess, subtract one from `guessesLeft` and print the hits, near hits, and guesses remaining
- [ ] Use a **ternary** so the output says `1 guess` but `2 guesses` / `0 guesses`
- [ ] After the loop, use an `if/else` to print `You cracked the code!` or `Out of guesses! The code was ____.`
- [ ] Test at least **four** situations (see Submission) and record them in your Test Cases document

**Starter Code — the new `main` method** (helper methods are unchanged from Pt 1)

```java
public static void main(String[] args)
{
    String targetStr = makeCode();
    System.out.println(targetStr);   // LEAVE THIS LINE ON for testing and grading

    int r1 = Integer.parseInt(targetStr.substring(0, 1));
    int r2 = Integer.parseInt(targetStr.substring(1, 2));
    int r3 = Integer.parseInt(targetStr.substring(2, 3));
    int r4 = Integer.parseInt(targetStr.substring(3, 4));

    final int MAX_GUESSES = 3;
    int guessesLeft = MAX_GUESSES;
    int hits = 0;
    int nearHits = 0;

    // PROVIDED LOOP (2.07): repeats its body as long as the condition is true
    while ( /* TODO: guesses left AND code not cracked */ )
    {
        String guess = getGuess();
        int g1 = Integer.parseInt(guess.substring(0, 1));
        int g2 = Integer.parseInt(guess.substring(1, 2));
        int g3 = Integer.parseInt(guess.substring(2, 3));
        int g4 = Integer.parseInt(guess.substring(3, 4));

        /* TODO: reset the counters */

        /* TODO: four if / else-if checks using || */

        /* TODO: update guessesLeft and print the results (use a ternary for guess/guesses) */

        System.out.println();
    }

    /* TODO: win or lose message */
}
```

**Sample Output**

```text
9782
Guess a 4-digit number from 1000 to 9999 with no duplicate digits: 9728
Number of hits: 2
Number of near hits: 2
You have 2 guesses remaining.

Guess a 4-digit number from 1000 to 9999 with no duplicate digits: 7928
Number of hits: 0
Number of near hits: 4
You have 1 guess remaining.

Guess a 4-digit number from 1000 to 9999 with no duplicate digits: 9782
Number of hits: 4
Number of near hits: 0
You have 0 guesses remaining.

You cracked the code!
```

Cracking it early ends the game right away:

```text
5163
Guess a 4-digit number from 1000 to 9999 with no duplicate digits: 5163
Number of hits: 4
Number of near hits: 0
You have 2 guesses remaining.

You cracked the code!
```

**Think About It** (comment at the bottom)

1. Your loop condition uses `&&`. Using De Morgan's thinking (coming in 2.06), the game **stops** when what is true?
2. Why must `hits` be declared **before** the loop instead of inside it?

**Submission**

- [ ] `GuessChecker.java` with block comment header and dated change comments from Pt 2
- [ ] Test Cases document with at least these four runs (use the printed code to plan your guesses):
  - win on the first guess
  - win on the third guess
  - lose after three guesses
  - an invalid guess (a repeated digit or a 5-digit number) that gets re-prompted
- [ ] Screenshot of one complete run

**Grading:** AP CSA 5-point Assignment Rubric. Pay particular attention to:
- Near-hit checks use `||` (one `else if` per digit, not three)
- The loop condition correctly combines both stopping reasons with `&&`
- Singular/plural output uses a ternary

### Check for Understanding

**1.** What is printed?

```java
int x = 7;
if (x > 5 && x % 2 == 0)
{
    System.out.print("A");
}
else if (x > 5 || x % 2 == 0)
{
    System.out.print("B");
}
else
{
    System.out.print("C");
}
```

<details>
<summary>Answer</summary>

`B`. `x % 2 == 0` is false, so the `&&` fails. `x > 5` is true, so the `||` succeeds.
</details>

**2.** `count` is `0`. Which statement throws an exception?

- A. `if (count != 0 && 100 / count > 5)`
- B. `if (count == 0 || 100 / count > 5)`
- C. `if (100 / count > 5 && count != 0)`
- D. `if (count > 0 && 100 / count > 5)`

<details>
<summary>Answer</summary>

**C.** The division runs before the guard. In A and D the left side is false (`&&` stops), and in B the left side is true (`||` stops).
</details>

**3.** Write a condition that is true when `temp` is **outside** the range 60 to 80, inclusive.

<details>
<summary>Answer</summary>

`temp < 60 || temp > 80`
</details>

**4.** Rewrite this nested `if` as a single `if` with a compound condition.

```java
if (score >= 90)
{
    if (attendance >= 95)
    {
        System.out.println("Honor roll");
    }
}
```

<details>
<summary>Answer</summary>

```java
if (score >= 90 && attendance >= 95)
{
    System.out.println("Honor roll");
}
```
</details>

**5.** What's wrong with `if (grade == 'A' || 'B')`?

<details>
<summary>Answer</summary>

It doesn't compile. Each side of `||` must be a complete boolean expression: `if (grade == 'A' || grade == 'B')`.
</details>

#############################################################################

## 2.05a Operator Precedence — *Oracle Foundations 1Z0-811*

<details>
<summary>📌 Standards — 2.05a</summary>

| Standard | Description |
| -------- | ----------- |
| ICT 5.4 | Interpret information and draw conclusions to make informed decisions |
| ICT 10.1 | Interpret and explain ICT-specific terminology |
| C4.6 | Use proper programming language syntax |
| CRP 1 | Apply appropriate technical skills and academic knowledge |
| CRP 5 | Utilize critical thinking to make sense of problems |

</details>

> **Oracle Exam Note:** Oracle 1Z0-811 includes "use operator precedence" in its objectives and tests it with dense one-line expressions. AP questions add parentheses to avoid precedence puzzles, but the same evaluation rules still apply.

- [ ] Evaluate expressions that mix arithmetic, relational, and logical operators.
- [ ] Trace pre- and post-increment inside a condition.
- [ ] Use parentheses to make the intended order obvious.

**Precedence Table** (highest at the top)

| Level | Operators | Notes |
| :---: | --------- | ----- |
| 1 | `x++` `x--` | Postfix: use the value, **then** change it |
| 2 | `++x` `--x` `-x` `!` `(type)` | Prefix and unary: change **first**, then use. Includes casts |
| 3 | `*` `/` `%` | Left to right |
| 4 | `+` `-` | Left to right (also String concatenation) |
| 5 | `<` `<=` `>` `>=` | Relational |
| 6 | `==` `!=` | Equality |
| 7 | `&&` | AND binds **tighter** than OR |
| 8 | `\|\|` | |
| 9 | `? :` | Ternary |
| 10 | `=` `+=` `-=` `*=` `/=` `%=` | Assignment happens **last**, right to left |

Memory aid: **unary → math → compare → equal → AND → OR → ternary → assign.**

**Worked Examples**

```java
System.out.println(true || false && false);
```

`&&` goes first: `false && false` is `false`. Then `true || false` is **`true`**. (Reading strictly left to right would give `false`, which is the trap.)

```java
System.out.println(5 + 3 * 2 > 10 && !(4 % 2 == 1));
```

1. `3 * 2` → `6`, and `4 % 2` → `0`
2. `5 + 6` → `11`
3. `11 > 10` → `true`, and `0 == 1` → `false`
4. `!(false)` → `true`
5. `true && true` → **`true`**

**Increments Inside Conditions**

```java
int x = 5;
boolean b = x++ > 5 || x > 5;
System.out.println(b + " " + x);   // true 6
```

`x++ > 5` compares the **old** value (5 > 5 is `false`), *then* `x` becomes 6. The right side, `x > 5`, sees 6, so `b` is `true`.

```java
int y = 3;
boolean c = y > 5 && ++y > 3;
System.out.println(c + " " + y);   // false 3
```

`y > 5` is false, so `&&` short-circuits and `++y` **never runs**. `y` stays 3.

> **Oracle Exam Note:** Short-circuiting combined with `++` is a favorite Oracle trap. Always ask: *did the right side actually execute?*

### Exercise 2.05a.A — Evaluate It

Evaluate each, given `int a = 2, b = 5;` (each line starts fresh).

1. `a + b * 2`
2. `a < b == true`
3. `!(a > b) && b % a == 1`
4. `false && true || true`
5. `a * 3 > b || b / a == 2.5`
6. `int r = a++ + ++a;` (what is `r`, and what is `a` afterward?)

<details>
<summary>Sample Answer</summary>

1. `12` — multiply before adding
2. `true` — `a < b` is `true`, then `true == true`
3. `true` — `!(false)` is `true`, and `5 % 2 == 1` is `true`
4. `true` — `(false && true)` is `false`, then `false || true`
5. `true` — `6 > 5` is true, so `||` stops (and `b / a` is integer division, 2, anyway)
6. `r` is `6`, `a` is `4`. `a++` uses 2 and makes `a` 3. `++a` makes `a` 4 and uses 4. 2 + 4 = 6.

</details>

### Check for Understanding

**1.** What is printed?

```java
System.out.println(!true == false);
```

<details>
<summary>Answer</summary>

`true`. `!` binds tighter than `==`, so this is `(!true) == false`, which is `false == false`.
</details>

**2.** What is printed?

```java
int n = 10;
if (n > 5 || n++ > 9)
{
    n += 2;
}
System.out.println(n);
```

<details>
<summary>Answer</summary>

`12`. `n > 5` is true, so `||` short-circuits and `n++` never runs. Then `n += 2` makes it 12.
</details>

**3.** Add parentheses to show how Java groups this: `a || b && c || d`

<details>
<summary>Answer</summary>

`a || (b && c) || d`
</details>

**4.** What is the value of `result`?

```java
int result = 20 - 4 * 3 % 5;
```

<details>
<summary>Answer</summary>

`18`. `4 * 3` is 12, then `12 % 5` is 2 (same level, left to right), then `20 - 2`.
</details>

#############################################################################

## 2.06 Comparing Boolean Expressions

<details>
<summary>📌 Standards — 2.06</summary>

| Standard | Description |
| -------- | ----------- |
| ICT 5.4 | Interpret information and draw conclusions to make informed decisions |
| ICT 5.8 | Create and use algorithms and solve problems |
| ICT 10.1 | Interpret and explain ICT-specific terminology |
| C4.6 | Use proper programming language syntax |
| C4.7 | Use various data structures including objects |
| CRP 1 | Apply appropriate technical skills and academic knowledge |
| CRP 5 | Utilize critical thinking to make sense of problems |

</details>

- [ ] Determine whether two Boolean expressions are equivalent using a truth table.
- [ ] Apply De Morgan's Laws, including correctly negating relational operators.
- [ ] Compare object references with `==`, `!=`, and `null`.
- [ ] Explain when `==` and `.equals()` give different answers, including for your own classes.

### Part 1 — Equivalent Expressions

Two Boolean expressions are **equivalent** if they produce the **same value for every possible input**. A truth table proves it by checking every row.

Are `!(a && b)` and `!a || !b` equivalent?

| a | b | a && b | !(a && b) | !a | !b | !a \|\| !b |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: |
| T | T | T | **F** | F | F | **F** |
| T | F | F | **T** | F | T | **T** |
| F | T | F | **T** | T | F | **T** |
| F | F | F | **T** | T | T | **T** |

The two bold columns match in every row, so the expressions are equivalent.

**De Morgan's Laws**

```java
!(a && b)  ≡  !a || !b     // NOT (A AND B)  is  (NOT A) OR  (NOT B)
!(a || b)  ≡  !a && !b     // NOT (A OR B)   is  (NOT A) AND (NOT B)
```

To push a `!` inside parentheses: **negate each piece and flip `&&` ↔ `||`.**

**Negating Relational Operators**

This is where most mistakes happen. The opposite of "greater than" is **not** "less than."

| Expression | Negation |
| :--------: | :------: |
| `x > y` | `x <= y` |
| `x >= y` | `x < y` |
| `x < y` | `x >= y` |
| `x <= y` | `x > y` |
| `x == y` | `x != y` |
| `x != y` | `x == y` |

**Worked Example**

```java
!(age >= 13 && age <= 19)
```

1. Negate each piece: `age >= 13` → `age < 13`; `age <= 19` → `age > 19`
2. Flip `&&` to `||`
3. Result: `age < 13 || age > 19`, "not a teenager," which matches the 1.02.1 Allowance logic

> **College Board Note:** AP questions give an expression like `!(x > 5 || y != 3)` and ask which choice is equivalent. Two choices usually look almost the same: one says `x < 5` (wrong) and one says `x <= 5` (right). Negate the operators carefully.

### Part 2 — Comparing Objects

You learned in 1.07a and 1.15 that object variables store **references** (addresses), and that two variables can be **aliases** for the same object. Here's the full set of rules.

| Comparison | What It Asks |
| ---------- | ------------ |
| `obj1 == obj2` | Do these variables point to the **same object**? |
| `obj1 != obj2` | Do they point to **different objects**? |
| `obj == null` | Does this variable point to **no object at all**? |
| `obj1.equals(obj2)` | Do these objects have the **same content**? (Only if the class defines what "same content" means) |

**Aliases vs. Equal Content**

```java
public class Locker
{
    private int number;

    public Locker(int number)
    {
        this.number = number;
    }
}
```

```java
Locker a = new Locker(214);
Locker b = new Locker(214);
Locker c = a;                     // alias: c and a point to the SAME object

System.out.println(a == b);       // false — two different objects
System.out.println(a == c);       // true  — same object
System.out.println(a.equals(b));  // false — surprise!
```

Why is `a.equals(b)` false when both lockers are #214? **`Locker` never defined its own `equals` method**, so it uses the default one inherited from `Object`, and the default `equals` just does `==`. `String` and `Integer` give "content" answers because their classes **override** `equals`. You'll write your own `equals` in Unit 5.

> **Exam Note (AP + Oracle):** For a class that doesn't override `equals`, `.equals()` behaves exactly like `==`. Both exams test this with a small custom class.

**Checking for `null`**

Calling a method on `null` throws a `NullPointerException` (recall 1.14). Compare to `null` with `==` or `!=` **before** calling methods, and use short-circuiting (2.05) to keep it to one line:

```java
String weapon = null;   // the player hasn't picked one up yet

if (weapon != null && weapon.equals("sword"))
{
    System.out.println("You swing the sword!");
}
else
{
    System.out.println("You have no sword.");
}
```

> Never write `weapon.equals(null)` to check for null. If `weapon` *is* null, that line crashes. Always use `weapon == null`.

### Exercise 2.06.A — Apply De Morgan's Laws

Write an equivalent expression with **no `!` operator**.

1. `!(x > 10 && y < 5)`
2. `!(score < 0 || score > 100)`
3. `!(a == b || c != d)`
4. `!(!done && count >= 3)`

<details>
<summary>Sample Answer</summary>

1. `x <= 10 || y >= 5`
2. `score >= 0 && score <= 100` (the score is valid)
3. `a != b && c == d`
4. `done || count < 3` — the negation of `!done` is just `done`

</details>

### Exercise 2.06.B — Prove It with a Truth Table

Is `a || (b && !a)` equivalent to `a || b`? Build the truth table to prove your answer.

<details>
<summary>Sample Answer</summary>

| a | b | !a | b && !a | a \|\| (b && !a) | a \|\| b |
| :-: | :-: | :-: | :-: | :-: | :-: |
| T | T | F | F | **T** | **T** |
| T | F | F | F | **T** | **T** |
| F | T | T | T | **T** | **T** |
| F | F | T | F | **F** | **F** |

**Yes, they're equivalent.** The last two columns match in every row.

</details>

### Exercise 2.06.C — Write the Method

The Unit 1 `Guest` class tracks which ride a guest is currently on (`null` if none). Write `isOnRide`. It must never throw an exception.

```java
public class Guest
{
    private String name;
    private String currentRide;   // null when the guest is not on a ride

    public Guest(String name)
    {
        this.name = name;
        currentRide = null;
    }

    public void board(String rideName)
    {
        currentRide = rideName;
    }

    /** Returns true if this guest is currently on the ride named rideName. */
    public boolean isOnRide(String rideName)
    {
        /* your code here */
    }
}
```

<details>
<summary>Sample Answer</summary>

```java
public boolean isOnRide(String rideName)
{
    return currentRide != null && currentRide.equals(rideName);
}
```

The `null` check protects the `.equals` call. Comparing with `currentRide == rideName` would compare references, which isn't reliable for Strings (1.07a String Pool).

</details>

### Activity 2.06.1 — Two Ways to Say No: De Morgan Checker

**Overview**

Every condition with a `!` in front of parentheses can be rewritten **without** the `!` using De Morgan's Laws. But how do you *know* your rewrite is right? You test it. In this activity you write each condition two ways as methods, and a provided test harness runs both versions on the same inputs and reports **MATCH** or **MISMATCH**. Every method is one line long, the same shape as an AP free-response method.

By the end of this activity you will be able to:
- [ ] Apply De Morgan's Laws to `&&` and `||` conditions
- [ ] Negate relational operators correctly (`>=` becomes `<`, not `<=`)
- [ ] Test whether two Boolean expressions are equivalent, including at the boundaries
- [ ] Write methods that return a `boolean`

**The Four Scenarios**

| # | Method Pair | Original (write it exactly like this) |
| :-: | ----------- | ------------------------------------- |
| 1 | `schoolOpenOriginal` / `schoolOpenRewrite` | School stays open when it is **not** the case that snow is 6+ inches **or** the temperature is below -10: `!(snow >= 6 \|\| temp < -10)` |
| 2 | `rejectedOriginal` / `rejectedRewrite` | A password is rejected when it is **not** the case that it has 8+ characters **and** a digit: `!(length >= 8 && hasDigit)` |
| 3 | `gameOverOriginal` / `gameOverRewrite` | The game is over when it is **not** the case that lives remain **and** time remains: `!(lives > 0 && time > 0)` |
| 4 | `outOfRangeOriginal` / `outOfRangeRewrite` | A score is out of range when it is **not** the case that it is from 0 to 100: `!(score >= 0 && score <= 100)` |

**To Do**

- [ ] Add the required block comment header
- [ ] Write all **eight** methods. Each `...Original` method returns the condition in the table, exactly as written.
- [ ] Each `...Rewrite` method returns the De Morgan equivalent with **no `!` in front of parentheses** (`!hasDigit` on a single variable is fine)
- [ ] Run the program. Every line in Scenarios 1–4 must say **MATCH**. If you see MISMATCH, fix your rewrite. Don't change the tests.
- [ ] Study the provided **Common Mistake** section. It's supposed to show MISMATCH. Explain why in a comment.
- [ ] In a comment at the bottom, write the full **truth table** for Scenario 2 (all four combinations of `length >= 8` and `hasDigit`)

**Starter Code — TwoWaysToSayNo.java**

```java
public class TwoWaysToSayNo
{
    public static void main(String[] args)
    {
        System.out.println("=== SCENARIO 1: School stays open ===");
        check("snow=2, temp=20", schoolOpenOriginal(2, 20), schoolOpenRewrite(2, 20));
        check("snow=8, temp=20", schoolOpenOriginal(8, 20), schoolOpenRewrite(8, 20));
        check("snow=2, temp=-15", schoolOpenOriginal(2, -15), schoolOpenRewrite(2, -15));
        check("snow=6, temp=-10", schoolOpenOriginal(6, -10), schoolOpenRewrite(6, -10));

        System.out.println("=== SCENARIO 2: Password rejected ===");
        check("length=10, digit=true", rejectedOriginal(10, true), rejectedRewrite(10, true));
        check("length=10, digit=false", rejectedOriginal(10, false), rejectedRewrite(10, false));
        check("length=5, digit=true", rejectedOriginal(5, true), rejectedRewrite(5, true));
        check("length=8, digit=true", rejectedOriginal(8, true), rejectedRewrite(8, true));

        System.out.println("=== SCENARIO 3: Game over ===");
        check("lives=3, time=30", gameOverOriginal(3, 30), gameOverRewrite(3, 30));
        check("lives=0, time=30", gameOverOriginal(0, 30), gameOverRewrite(0, 30));
        check("lives=3, time=0", gameOverOriginal(3, 0), gameOverRewrite(3, 0));
        check("lives=0, time=0", gameOverOriginal(0, 0), gameOverRewrite(0, 0));

        System.out.println("=== SCENARIO 4: Score out of range ===");
        check("score=50", outOfRangeOriginal(50), outOfRangeRewrite(50));
        check("score=0", outOfRangeOriginal(0), outOfRangeRewrite(0));
        check("score=100", outOfRangeOriginal(100), outOfRangeRewrite(100));
        check("score=101", outOfRangeOriginal(101), outOfRangeRewrite(101));

        System.out.println("=== THE COMMON MISTAKE (provided) ===");
        check("score=0", outOfRangeOriginal(0), outOfRangeBuggy(0));
        check("score=100", outOfRangeOriginal(100), outOfRangeBuggy(100));
    }

    // PROVIDED — prints one test row and whether the two versions agree
    public static void check(String inputs, boolean original, boolean rewrite)
    {
        String result = (original == rewrite) ? "MATCH" : "MISMATCH";
        System.out.printf("  %-24s original=%-6b rewrite=%-6b %s%n", inputs, original, rewrite, result);
    }

    // TODO: write the eight methods, for example:
    // public static boolean schoolOpenOriginal(int snow, int temp) { return /* ... */; }
    // public static boolean schoolOpenRewrite(int snow, int temp)  { return /* ... */; }

    // PROVIDED — a common mistake: negating >= as > and <= as <
    public static boolean outOfRangeBuggy(int score)
    {
        return score <= 0 || score >= 100;
    }
}
```

**Sample Output** (when all eight methods are correct)

```text
=== SCENARIO 1: School stays open ===
  snow=2, temp=20          original=true   rewrite=true   MATCH
  snow=8, temp=20          original=false  rewrite=false  MATCH
  snow=2, temp=-15         original=false  rewrite=false  MATCH
  snow=6, temp=-10         original=false  rewrite=false  MATCH
=== SCENARIO 2: Password rejected ===
  length=10, digit=true    original=false  rewrite=false  MATCH
  length=10, digit=false   original=true   rewrite=true   MATCH
  length=5, digit=true     original=true   rewrite=true   MATCH
  length=8, digit=true     original=false  rewrite=false  MATCH
=== SCENARIO 3: Game over ===
  lives=3, time=30         original=false  rewrite=false  MATCH
  lives=0, time=30         original=true   rewrite=true   MATCH
  lives=3, time=0          original=true   rewrite=true   MATCH
  lives=0, time=0          original=true   rewrite=true   MATCH
=== SCENARIO 4: Score out of range ===
  score=50                 original=false  rewrite=false  MATCH
  score=0                  original=false  rewrite=false  MATCH
  score=100                original=false  rewrite=false  MATCH
  score=101                original=true   rewrite=true   MATCH
=== THE COMMON MISTAKE (provided) ===
  score=0                  original=false  rewrite=true   MISMATCH
  score=100                original=false  rewrite=true   MISMATCH
```

**Think About It** (comment at the bottom)

1. The Common Mistake only fails at 0 and 100. Why do the boundary values catch the bug when 50 and 101 don't?
2. Which test in Scenario 1 would catch someone who wrote `temp > -10` instead of `temp >= -10`?
3. Write one more scenario of your own: an English rule, the `!( ... )` original, and its rewrite. Add two `check` calls that test it, including a boundary.

**Submission**

- [ ] `TwoWaysToSayNo.java` with block comment header, all methods, the Scenario 2 truth table, and your own scenario
- [ ] Screenshot of the output showing every Scenario 1–4 line as MATCH

**Grading:** AP CSA 5-point Assignment Rubric. Pay particular attention to:
- No `!` in front of parentheses in any `...Rewrite` method
- Relational operators are negated correctly
- Your own scenario includes a boundary test

### Activity 2.06.2 — Body Mass Index (BMI)

**Overview**

Body Mass Index (BMI) is a person's weight divided by the square of their height. Health professionals use it as a quick **screening** number for weight categories. It does not diagnose anyone's health. You'll write a BMI calculator with two methods, validate the input using **De Morgan's Laws**, and practice choosing between units with String comparison.

> **Use sample values.** For testing, use the sample numbers below or made-up values. You do not need to enter your own measurements.

By the end of this activity you will be able to:
- [ ] Write a method that **calls another method** you wrote (1.10)
- [ ] Classify a `double` value into ranges with an `if / else if / else` chain
- [ ] Write an input-validation condition two equivalent ways using De Morgan's Laws
- [ ] Compare user input Strings with `.equalsIgnoreCase()`

**Weight Classes** (CDC)

| BMI | Weight Class |
| --- | ------------ |
| below 18.5 | underweight |
| 18.5 up to (not including) 25.0 | normal |
| 25.0 up to (not including) 30.0 | overweight |
| 30.0 and above | obese |

> Watch the boundaries: a BMI of exactly **25.0** is *overweight*, not normal.

**Formulas**

| Units | Formula |
| ----- | ------- |
| Pounds and inches | BMI = (weight ÷ height²) × 703 |
| Kilograms and meters | BMI = weight ÷ height². If height is in centimeters, divide by 100 first |

Source: [cdc.gov/healthyweight](https://www.cdc.gov/healthyweight/)

**To Do**

- [ ] Add the required block comment header
- [ ] Use `Scanner` to read the height (inches) and weight (pounds) as `double` values
- [ ] Write `public static double bmi(double height, double weight)` that **returns** the BMI (imperial formula)
- [ ] Write `public static String weightClass(double height, double weight)` that **calls `bmi`** and returns the weight class as a `String`
- [ ] **Validate the input.** Height and weight must both be greater than 0.
  - Write the "invalid" condition with `!` around a compound condition: `!(height > 0 && weight > 0)`
  - In a comment directly above it, write the **De Morgan equivalent** with no `!`
  - If the input is invalid, print an error message and do not calculate
- [ ] Print the BMI to **one decimal place** with `printf` and print the weight class
- [ ] Test values on both sides of every weight-class boundary, plus both invalid cases

**Extra Credit — Metric or Imperial**

- [ ] Ask `metric (m) or imperial (i)?` and compare the answer with `.equalsIgnoreCase()` so `M` and `m` both work
- [ ] For metric, read centimeters and kilograms. Either convert to inches and pounds before calling your methods (1 in = 2.54 cm, 1 kg = 2.20462 lb) or add metric versions of the methods.

**Sample Output**

```text
Would you like to use metric (m) or imperial (i) units? i
Height (in inches): 70.0
Weight (in pounds): 194.25
BMI = 27.9
Weight class: overweight
```

```text
Would you like to use metric (m) or imperial (i) units? M
Height (in centimeters): 177.8
Weight (in kilograms): 88.1
BMI = 27.9
Weight class: overweight
```

```text
Would you like to use metric (m) or imperial (i) units? i
Height (in inches): 0
Weight (in pounds): 150
Height and weight must both be greater than 0.
```

**Think About It** (comment at the bottom)

1. Why should `weightClass` call `bmi` instead of repeating the formula?
2. Your chain uses `value < 25.0` for the normal range. What changes if you write `value <= 25.0`, and which BMI would be misclassified?
3. Write the **valid-input** condition (the opposite of your invalid check) without using `!`.

**Submission**

- [ ] `BMI.java` with block comment header
- [ ] Test Cases document: at least one value in each weight class, values just below and just above 18.5, 25.0, and 30.0, and both invalid cases (zero and negative)

**Grading:** AP CSA 5-point Assignment Rubric. Pay particular attention to:
- `weightClass` calls `bmi` (no duplicated formula)
- The validation condition and its De Morgan equivalent are both correct
- Boundary values land in the correct weight class

### Activity 2.06.3 — Library Return Desk: Comparing Objects

**Overview**

The school library tracks books as objects. When a student returns a book, the desk has to decide: **is this the book they checked out?** That question turns out to be trickier than it looks. Two `Book` objects can have identical titles and authors and still be **different objects**. You'll predict and test how `==` and `.equals()` behave, then write your own method that compares two books by their **content**.

By the end of this activity you will be able to:
- [ ] Explain the difference between an alias and an equal-content object
- [ ] Predict the result of `==`, `!=`, and `.equals()` on objects of a class you wrote
- [ ] Explain why `.equals()` acts like `==` when a class doesn't override it
- [ ] Write a content-comparison method with a `null` guard

**To Do**

**Part A — Predict, then Run**
- [ ] Before running anything, write your predictions for the four Part A lines in a comment at the top of `ReturnDesk.java`
- [ ] Run the program and record which predictions were right. For any you missed, explain why in your comment.

**Part B — Write `sameBook`**
- [ ] In `Book.java`, write `public boolean sameBook(Book other)`. It returns `true` when `other` is not `null` **and** the titles match **and** the authors match, ignoring capitalization.
- [ ] Use short-circuiting (2.05) so `sameBook(null)` returns `false` instead of crashing
- [ ] Do **not** use `==` to compare the Strings

**Part C — The Return Desk**
- [ ] In `ReturnDesk.java`, write `public static void processReturn(Book onRecord, Book returned)` using an `if / else if / else` chain:
  - `onRecord` is `null` → `No book on record. [returned] goes to the lost-and-found cart.`
  - the books match (`sameBook`) → `Thank you! [returned] has been checked in.`
  - otherwise → `Mismatch: expected [onRecord] but received [returned].`
- [ ] The `null` check must come **first**. Explain why in a comment.

**Starter Code — Book.java**

```java
public class Book
{
    private String title;
    private String author;

    public Book(String title, String author)
    {
        this.title = title;
        this.author = author;
    }

    public String getTitle()  { return title; }
    public String getAuthor() { return author; }

    // TODO Part B: returns true if other is not null and has the same
    //              title and author (ignoring case)
    public boolean sameBook(Book other)
    {
        /* your code here */
    }

    @Override
    public String toString()
    {
        return "\"" + title + "\" by " + author;
    }
}
```

**Starter Code — ReturnDesk.java**

```java
public class ReturnDesk
{
    public static void main(String[] args)
    {
        Book checkedOut = new Book("Hatchet", "Gary Paulsen");
        Book shelfCopy = new Book("Hatchet", "Gary Paulsen");
        Book myCopy = checkedOut;                         // alias
        Book returned = new Book("hatchet", "GARY PAULSEN");
        Book nothing = null;                              // nothing checked out yet

        // PART A: write your predictions in a comment BEFORE running
        System.out.println("=== PART A: == vs. equals ===");
        System.out.println("checkedOut == myCopy:        " + (checkedOut == myCopy));
        System.out.println("checkedOut == shelfCopy:     " + (checkedOut == shelfCopy));
        System.out.println("checkedOut.equals(shelfCopy): " + checkedOut.equals(shelfCopy));
        System.out.println("checkedOut.getTitle().equals(shelfCopy.getTitle()): "
                           + checkedOut.getTitle().equals(shelfCopy.getTitle()));

        System.out.println();
        System.out.println("=== PART B: sameBook ===");
        System.out.println("checkedOut.sameBook(shelfCopy): " + checkedOut.sameBook(shelfCopy));
        System.out.println("checkedOut.sameBook(returned):  " + checkedOut.sameBook(returned));
        System.out.println("checkedOut.sameBook(nothing):   " + checkedOut.sameBook(nothing));

        System.out.println();
        System.out.println("=== PART C: Return desk ===");
        processReturn(checkedOut, returned);
        processReturn(checkedOut, new Book("Holes", "Louis Sachar"));
        processReturn(nothing, returned);
    }

    // TODO Part C
    public static void processReturn(Book onRecord, Book returned)
    {
        /* your code here */
    }
}
```

**Sample Output**

```text
=== PART A: == vs. equals ===
checkedOut == myCopy:        true
checkedOut == shelfCopy:     false
checkedOut.equals(shelfCopy): false
checkedOut.getTitle().equals(shelfCopy.getTitle()): true

=== PART B: sameBook ===
checkedOut.sameBook(shelfCopy): true
checkedOut.sameBook(returned):  true
checkedOut.sameBook(nothing):   false

=== PART C: Return desk ===
Thank you! "hatchet" by GARY PAULSEN has been checked in.
Mismatch: expected "Hatchet" by Gary Paulsen but received "Holes" by Louis Sachar.
No book on record. "hatchet" by GARY PAULSEN goes to the lost-and-found cart.
```

**Think About It** (comment at the bottom)

1. `checkedOut.equals(shelfCopy)` is `false`, but `checkedOut.getTitle().equals(shelfCopy.getTitle())` is `true`. Explain the difference in one or two sentences.
2. What would happen if `processReturn` checked `onRecord.sameBook(returned)` **before** checking for `null`?
3. In Unit 5 you'll learn to override `equals` itself. Based on `sameBook`, what do you think the body of a `Book` `equals` method will need to compare?

**Submission**

- [ ] `Book.java` and `ReturnDesk.java` with block comment headers
- [ ] Your Part A predictions and corrections, plus Think About It answers, in comments
- [ ] Screenshot of the output

**Grading:** AP CSA 5-point Assignment Rubric. Pay particular attention to:
- `sameBook` guards against `null` with the check on the **left**
- Strings are compared with `.equalsIgnoreCase()`, never `==`
- The `null` case is handled first in `processReturn`

### Check for Understanding

**1.** Which expression is equivalent to `!(x <= 4 || y == 0)`?

- A. `x > 4 || y != 0`
- B. `x > 4 && y != 0`
- C. `x >= 4 && y != 0`
- D. `x < 4 && y == 0`

<details>
<summary>Answer</summary>

**B.** Negate each piece (`x <= 4` → `x > 4`, `y == 0` → `y != 0`) and flip `||` to `&&`. C uses the wrong negation of `<=`.
</details>

**2.** What is printed?

```java
Locker p = new Locker(5);
Locker q = p;
Locker r = new Locker(5);
System.out.println((p == q) + " " + (p == r) + " " + p.equals(r));
```

<details>
<summary>Answer</summary>

`true false false`. `q` is an alias of `p`. `r` is a separate object, and `Locker` doesn't override `equals`, so `.equals` falls back to `==`.
</details>

**3.** What is printed?

```java
String s1 = new String("ok");
String s2 = new String("ok");
System.out.println((s1 == s2) + " " + s1.equals(s2));
```

<details>
<summary>Answer</summary>

`false true`. They are two different objects, but `String` overrides `equals` to compare content.
</details>

**4.** `name` might be `null`. Which condition is safe?

- A. `name.equals("Ava") && name != null`
- B. `name != null && name.equals("Ava")`
- C. `name.length() > 0 || name == null`
- D. `name.equals(null)`

<details>
<summary>Answer</summary>

**B.** The null check runs first and short-circuits. A, C, and D all call a method on `name` before (or without) checking it.
</details>

**5.** True or false: `!(a && b)` and `!a && !b` are equivalent. Use one row of a truth table to justify your answer.

<details>
<summary>Answer</summary>

**False.** Try `a = true, b = false`: `!(true && false)` is `true`, but `!true && !false` is `false`. De Morgan's Law flips `&&` to `||`.
</details>

#############################################################################

## Unit 2 Mid-Unit Project — Choose Your Own Adventure

<details>
<summary>📌 Standards — Mid-Unit Project</summary>

| Standard | Description |
| -------- | ----------- |
| ICT 2.0 | Communications — communicate clearly in written and electronic formats |
| ICT 5.4 | Interpret information and draw conclusions to make informed decisions |
| ICT 5.8 | Create and use algorithms and solve problems |
| ICT 5.9 | Deconstruct large problems into smaller components |
| ICT 7.5 | Apply high-quality techniques to product design and development |
| C4.6 | Use proper programming language syntax |
| C4.7 | Use various data structures including objects |
| C4.8 | Use OOP concepts: properties, methods, and inheritance |
| C4.9 | Create programs using control structures, procedures, and variables |
| C4.11 | Document development work using comments |
| C5.4 | Design a solution to a problem |
| C5.5 | Implement a solution |
| CRP 1 | Apply appropriate technical skills and academic knowledge |
| CRP 2 | Communicate clearly, effectively, and with reason |
| CRP 5 | Utilize critical thinking to make sense of problems |
| CRP 7 | Act as a responsible and contributing citizen and employee |

</details>

- [ ] Apply every selection concept from 2.01–2.06 in one cohesive program.
- [ ] Combine Unit 2 decision logic with a Unit 1 class (constructors, `toString`, instance methods).
- [ ] Plan with a flowchart and timeline before coding, then test every path.
	- [ ] I will demonstrate mastery of selection by building an interactive story game.

**Overview**

You are a game developer building a text-based **Choose Your Own Adventure** game. The player reads a scene, makes a choice, and the story branches. Earlier choices change what happens later, a random event keeps every playthrough unpredictable, and the story ends in one of **at least three** different endings.

Your story, your theme: escape a haunted school, survive a zombie mall, solve a mystery in a data center, explore a shipwreck. Keep it school-appropriate.

> **No loops required.** Your game is a single playthrough from start to an ending. (Loops arrive in 2.07; then you could add "Play again?")

**Required Files:** `Main.java`, `Player.java` (minimum)

**Submission:** All `.java` files, flowchart, timeline, and Test Cases, combined into **one PDF**, plus your `.java` files

---

#### Part 1 — Plan First

- [ ] **Digital flowchart** of your story using correct symbols (2.01): oval start/end, parallelogram input/output, rectangle process, diamond decision with **true/false** labels. Every ending in your code must appear in the flowchart.
- [ ] **Digital timeline chart** showing your plan: story outline, flowchart, `Player.java`, `Main.java` scenes, testing, final PDF.

---

#### Part 2 — Player.java

Your `Player` class stores the player's state. Complete the starter below. You may rename fields to fit your theme (`hp` → `sanity`, `gold` → `credits`), but every required method must exist and be **used** in `Main`.

```java
/*
 * Name:          [Your Full Name]
 * Partner:       None
 * Course:        AP Computer Science A
 * Instructor:    [Instructor Name]
 * Assignment:    Unit 2 Mid-Unit Project — Choose Your Own Adventure
 * Due Date:      [Month Day, Year]
 */
public class Player
{
    private String name;
    private int health;
    private int gold;
    private String item;      // null until the player picks something up

    // Constructor: sets name, starts health at 100, gold at a value you choose, item at null
    public Player(String name)
    {
        /* your code here */
    }

    // ----- Accessors -----
    public String getName()   { return name; }
    public int getHealth()    { return health; }
    public int getGold()      { return gold; }
    public String getItem()   { return item; }

    // ----- void methods: change the player's state -----

    // Subtracts damage from health. Health must never drop below 0 (use an if).
    public void takeDamage(int damage)
    {
        /* your code here */
    }

    // Stores the item the player picked up.
    public void pickUp(String newItem)
    {
        /* your code here */
    }

    // Subtracts cost from gold ONLY if the player can afford it.
    public void spend(int cost)
    {
        /* your code here */
    }

    // ----- non-void methods: answer questions (FRQ style) -----

    // Returns true if health is greater than 0.
    public boolean isAlive()
    {
        /* your code here */
    }

    // Returns true if the player has at least cost gold.
    public boolean canAfford(int cost)
    {
        /* your code here */
    }

    // Returns true if the player is holding an item that matches itemName (ignore case).
    // Must NOT throw an exception when item is null.
    public boolean hasItem(String itemName)
    {
        /* your code here */
    }

    // Returns a status String such as:  "Ava | Health: 85 | Gold: 20 | Item: flashlight"
    // Shows "none" when item is null (a ternary works well here).
    @Override
    public String toString()
    {
        /* your code here */
    }
}
```

---

#### Part 3 — Main.java

Build your story in `Main.java`. Your game must:

1. Ask for the player's name with `Scanner` and create a `Player`.
2. Have **at least four decision points**, each driven by user input.
3. Use **both** `String` input (normalized with `.trim().toLowerCase()`) **and** `int` input (a numbered menu).
4. Include **at least three** `if / else if / else` chains, and **at least one** `if` nested inside another `if`.
5. Include **at least one decision that depends on an earlier choice** (for example, the locked door only opens if the player picked up the key two scenes ago).
6. Use a **`switch`** for one numbered menu and a **ternary** somewhere meaningful (2.04a).
7. Use `&&`, `||`, and `!` each at least once in conditions that affect the story.
8. Include a **short-circuit guard** (2.05): a compound condition where the left side protects the right side from an error. Add a comment explaining it.
9. Include a condition written with `!( ... )` **and**, in a comment directly above it, its **De Morgan equivalent** (2.06).
10. Compare Strings only with `.equals()` / `.equalsIgnoreCase()`, never `==`.
11. Compare an object reference to `null` before using it (for example, checking `getItem()`).
12. Use `Math.random()` (or `Random`) for at least one **random event** that changes the path, such as a 30% chance of a trap: `if (Math.random() < 0.30)`.
13. Print the player's status using `toString()` at least twice, and the final summary line with `printf` or `String.format`.
14. Reach **at least three distinct endings**.

**Sample Output** (an example story, "Server Room Escape." Yours will be different.)

```text
=== SERVER ROOM ESCAPE ===
Enter your name: Ava
Ava | Health: 100 | Gold: 25 | Item: none

The lights flicker. A toolbox sits by the door. Do you open it? (yes/no): yes
You find a flashlight!
Ava | Health: 100 | Gold: 25 | Item: flashlight

Two hallways:
  1. The humming hallway
  2. The dark hallway
  3. Wait for help
Choose 1, 2, or 3: 2
Good thing you have a flashlight. You spot a loose floor panel and step around it.

A vending machine sells an access card for 20 gold. Buy it? (yes/no): yes
You bought the access card. 5 gold left.

A sparking cable whips across the hall!
You dodge it.

The exit door has a card reader...
Card accepted. You walk out into the sunlight.

*** ENDING 1 of 3: THE CLEAN ESCAPE ***
Final status -> Ava | Health: 100 | Gold:   5
```

> Because of the random event, the "sparking cable" scene might hit the player on another run. Your Test Cases document needs to show both outcomes.

---

#### Part 4 — Test Cases

- [ ] At least **one test case per ending** (minimum three), showing the inputs typed at every decision
- [ ] At least **one test of the random event going each way**
- [ ] At least **one test of an earlier choice changing a later scene**
- [ ] Each test lists: inputs, expected output, actual output, Pass/Fail
- [ ] Quality screenshots of at least three complete playthroughs

---

### Unit 2 Mid-Unit Project Rubric

Each concept below is worth **1 point**. Credit is awarded when the concept is used correctly and meaningfully, not simply present in the code. Partial credit is not awarded per concept.

| # | Category | Concept | What to Demonstrate | Pts |
|:-:|----------|---------|---------------------|:---:|
| 1 | 2.01 Algorithms | Flowchart | Digital flowchart with correct symbols; every decision diamond has labeled true/false exits; all endings shown | 1 |
| 2 | 2.01 Algorithms | Timeline | Digital timeline chart covering planning, coding, and testing | 1 |
| 3 | 2.02 Boolean Expressions | Relational operators | Uses at least **three different** relational operators (`<`, `<=`, `>`, `>=`, `==`, `!=`) correctly | 1 |
| 4 | 2.02 Boolean Expressions | boolean variable | Stores the result of a comparison in a `boolean` variable and uses it later in a condition | 1 |
| 5 | 2.03 if Statements | if/else | At least one `if/else` where each branch leads to a different story outcome | 1 |
| 6 | 2.03 if Statements | Braces and scope | All `if` bodies use braces; no variable is used outside the block where it was declared | 1 |
| 7 | 2.04 Nested if | Multiway selection | At least **three** `if / else if / else` chains | 1 |
| 8 | 2.04 Nested if | Nested if | At least one `if` inside another `if` where the inner decision depends on the outer one | 1 |
| 9 | 2.04 Nested if | Condition order | Range-based conditions are ordered so every branch is reachable | 1 |
| 10 | 2.04a Switch (Oracle) | switch | Uses a `switch` with `break` statements and a `default` case for invalid input | 1 |
| 11 | 2.04a Ternary (Oracle) | Ternary operator | Uses `? :` to choose a value (for example, in `toString()` or singular/plural output) | 1 |
| 12 | 2.05 Compound Boolean | && | Uses `&&` in a condition that affects the story | 1 |
| 13 | 2.05 Compound Boolean | \|\| | Uses `\|\|` in a condition that affects the story | 1 |
| 14 | 2.05 Compound Boolean | ! | Uses `!` in a condition that affects the story | 1 |
| 15 | 2.05 Compound Boolean | Short-circuit guard | A compound condition where the left side prevents an error on the right, with a comment explaining it | 1 |
| 16 | 2.06 Comparing Boolean | De Morgan's Law | A `!( ... )` condition with its correct De Morgan equivalent in a comment directly above it | 1 |
| 17 | 2.06 Comparing Objects | String comparison | All String comparisons use `.equals()` / `.equalsIgnoreCase()`; no `==` on Strings | 1 |
| 18 | 2.06 Comparing Objects | null check | Compares an object reference to `null` before calling a method on it; no `NullPointerException` possible | 1 |
| 19 | Story Logic | Earlier choice matters | At least one decision combines the current choice with a choice made earlier | 1 |
| 20 | Story Logic | Random event | Uses `Math.random()` or `Random` so an event can go two ways | 1 |
| 21 | Story Logic | Three endings | At least **three** distinct endings, each reachable | 1 |
| 22 | Unit 1 — OOP | Player class | `Player` has the required instance variables and a constructor that initializes all of them | 1 |
| 23 | Unit 1 — OOP | toString() | Overrides `toString()` and prints it at least twice | 1 |
| 24 | Unit 1 — Instance Methods | void methods | `takeDamage`, `pickUp`, and `spend` each contain correct conditional logic and are called in `Main` | 1 |
| 25 | Unit 1 — Instance Methods | non-void methods | `isAlive`, `canAfford`, and `hasItem` return correct booleans and their results are used in conditions | 1 |
| 26 | Unit 1 — Scanner | Input types | Reads both `String` and `int` input with `Scanner` | 1 |
| 27 | Unit 1 — String Methods | Input normalization | Uses `.trim()` and/or `.toLowerCase()` (or `.equalsIgnoreCase()`) so input like `" YES "` works | 1 |
| 28 | Unit 1 — Formatting | printf / String.format | Final summary uses `printf()` or `String.format()` | 1 |
| 29 | Documentation | Headers and comments | Required block comment header in **both** files, all fields completed; meaningful comments throughout | 1 |
| 30 | Submission | Test Cases | Test cases cover every ending, both random outcomes, and an earlier-choice path (inputs, expected, actual, Pass/Fail) | 1 |
| 31 | Submission | Files and PDF | Single PDF (flowchart, timeline, screenshots, code) plus all `.java` files submitted | 1 |
| 32 | Submission | Compiles & runs | Program compiles without errors and every path runs without crashing | 1 |
| | | | **TOTAL** | **32** |

**Grading Notes:**
- Code must compile and run to receive credit for most concept points.
- A concept used only in a comment, or in code that can never execute, does not earn its point.
- The block comment header must have all fields completed, not left as placeholders.
- De Morgan point: the commented equivalent must be logically correct, including the negated relational operators.
- Short-circuit point: the comment must name **what error** the left side prevents.
- `null` check point: the program must check before use. A `NullPointerException` on any tested path loses this point **and** point 32.

#############################################################################

## 2.06a The Date/Time API — *Oracle Foundations 1Z0-811*

<details>
<summary>📌 Standards — 2.06a</summary>

| Standard | Description |
| -------- | ----------- |
| ICT 4.1 | Use electronic reference materials to gather information |
| ICT 5.8 | Create and use algorithms and solve problems |
| C4.6 | Use proper programming language syntax |
| C4.9 | Create programs using control structures and variables |
| CRP 1 | Apply appropriate technical skills and academic knowledge |
| CRP 4 | Apply technology to enhance productivity |
| CRP 5 | Utilize critical thinking to make sense of problems |

</details>

> **Oracle Exam Note:** Creating and manipulating calendar data with the `java.time` classes is tested on Oracle 1Z0-811. It is **not** on the AP exam. This section comes before loops because every activity from 2.07 on prints a **run stamp** built with these classes.

- [ ] Create `LocalDate`, `LocalTime`, and `LocalDateTime` objects with `now()` and `of()`.
- [ ] Explain why `java.time` objects are **immutable**, and reassign the result of `plus` methods.
- [ ] Measure the gap between two dates or times with `Period` and `Duration`.
- [ ] Format dates with `DateTimeFormatter`.

**The Core Classes** (all in `java.time`, so they need an `import`. Recall 1.01a: only `java.lang` is automatic)

| Class | Holds | Create One |
| ----- | ----- | ---------- |
| `LocalDate` | a date, no time | `LocalDate.now()` · `LocalDate.of(2027, 3, 14)` |
| `LocalTime` | a time, no date | `LocalTime.now()` · `LocalTime.of(14, 30)` |
| `LocalDateTime` | both | `LocalDateTime.now()` · `LocalDateTime.of(2027, 3, 14, 14, 30)` |
| `Period` | a gap in years, months, days | `Period.between(date1, date2)` |
| `Duration` | a gap in hours, minutes, seconds, nanoseconds | `Duration.between(time1, time2)` |
| `DateTimeFormatter` | a display pattern | `DateTimeFormatter.ofPattern("MM/dd/yy")` |

> These classes have **no public constructors**. `new LocalDate()` does not compile; you use the static methods `now()` and `of(...)`, the same way you used `Math` methods in 1.11.

**Immutability: The Big Trap**

`java.time` objects can never change, just like `String` (1.15). Methods like `plusDays` return a **new** object.

```java
LocalDate day = LocalDate.of(2026, 10, 11);
day.plusDays(7);                       // creates a new date... and throws it away
System.out.println(day);               // 2026-10-11  (unchanged!)

day = day.plusDays(7);                 // reassign to keep the new date
System.out.println(day);               // 2026-10-18
```

**Comparing and Measuring**

```java
LocalDate today = LocalDate.of(2026, 10, 11);
LocalDate trip = LocalDate.of(2027, 3, 14);

System.out.println(trip.isAfter(today));            // true
System.out.println(trip.isBefore(today));           // false
System.out.println(trip.equals(today));             // false

Period gap = Period.between(today, trip);
System.out.println(gap.getMonths() + " months, " + gap.getDays() + " days");   // 5 months, 3 days
```

**Formatting**

| Pattern Letter | Meaning | Example |
| :------------: | ------- | ------- |
| `yyyy` / `yy` | year | 2026 / 26 |
| `MM` / `MMM` / `MMMM` | month | 10 / Oct / October |
| `dd` | day of month | 11 |
| `EEEE` | day of week | Sunday |
| `HH` / `hh` | hour (24-hour / 12-hour) | 14 / 02 |
| `mm` | **minutes** | 30 |
| `a` | AM/PM | PM |

```java
LocalDateTime when = LocalDateTime.of(2026, 10, 11, 14, 30);
System.out.println(when.format(DateTimeFormatter.ofPattern("MM/dd/yy")));         // 10/11/26
System.out.println(when.format(DateTimeFormatter.ofPattern("EEEE, MMMM dd")));    // Sunday, October 11
```

> **Oracle Exam Note:** Watch for these traps:
> - `MM` is **month** and `mm` is **minutes**.
> - Months run **1–12** (the old `Calendar` class used 0–11).
> - `LocalDate.of(2026, 2, 30)` compiles but throws a `DateTimeException` at run time.
> - A `LocalDate` has no time, so calling `getHour()` on one does not compile.

**The Run Stamp** (used in every activity from here to the end of Unit 2)

From now on, every program starts by printing a **run stamp**, the date and time it ran. It takes three lines and two imports:

```java
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

// first lines of main:
DateTimeFormatter stamp = DateTimeFormatter.ofPattern("MM/dd/yyyy hh:mm a");
System.out.println("Run: " + LocalDateTime.now().format(stamp));
```

```text
Run: 10/11/2026 01:03 PM
```

When an activity says *"print the run stamp (2.06a)"*, this is what it means.

### Check for Understanding

**1.** What is printed?

```java
LocalDate d = LocalDate.of(2026, 12, 30);
d.plusDays(5);
System.out.println(d);
```

<details>
<summary>Answer</summary>

`2026-12-30`. `plusDays` returns a new `LocalDate`, but the result was never saved. `d = d.plusDays(5);` would print `2027-01-04`.
</details>

**2.** Which line does **not** compile?

- A. `LocalDate a = LocalDate.now();`
- B. `LocalDate b = new LocalDate(2026, 10, 11);`
- C. `LocalTime c = LocalTime.of(9, 15);`
- D. `LocalDateTime e = LocalDateTime.now();`

<details>
<summary>Answer</summary>

**B.** The `java.time` classes have no public constructors. Use `LocalDate.of(2026, 10, 11)`.
</details>

**3.** A student formats a date with `"mm/dd/yyyy"` and gets `30/11/2026` in October. What went wrong?

<details>
<summary>Answer</summary>

`mm` means **minutes**, so the 30 is the minutes value. The month pattern is `MM`.
</details>

**4.** Does `LocalDate.of(2026, 2, 30)` cause a compile error, a run-time error, or neither?

<details>
<summary>Answer</summary>

A **run-time error** (`DateTimeException`). The code is valid Java, but February 30 isn't a real date.
</details>

### Activity 2.06a.1 — Birthday Countdown

**Overview**

How long until your next birthday? Java can work it out, but there's a catch: if your birthday already happened this year, the *next* one is next year. That takes an `if` statement, `isBefore`, and a reassignment, because `LocalDate` is immutable.

**To Do**

- [ ] Add the required block comment header
- [ ] Read a birthday month and day with `Scanner`
- [ ] Get today's date with `LocalDate.now()` and build this year's birthday with `LocalDate.of(today.getYear(), month, day)`
- [ ] If that birthday is **before** today, move it to next year with `plusYears(1)`. Remember to **reassign**.
- [ ] If the birthday is **today**, print `Happy birthday! It's today!`
- [ ] Otherwise, use `Period.between(today, birthday)` and print:

```text
Your birthday is in X months and Y days!
```

- [ ] Use ternaries so the output says `1 month` / `1 day` instead of `1 months` / `1 days`
- [ ] Also print the total number of days to go with `ChronoUnit.DAYS.between(today, birthday)` (import `java.time.temporal.ChronoUnit`)

**Sample Output** (run on October 11, 2026. Your dates will differ.)

```text
Birthday month (1-12): 3
Birthday day: 14
Today:         2026-10-11
Next birthday: 2027-03-14
Your birthday is in 5 months and 3 days!
Total days to go: 154
```

```text
Birthday month (1-12): 10
Birthday day: 12
Today:         2026-10-11
Next birthday: 2026-10-12
Your birthday is in 0 months and 1 day!
Total days to go: 1
```

**Extension:** a February 29 birthday crashes your program in most years. Find out why, then handle it (for example, celebrate on February 28 in non-leap years; `LocalDate` has an `isLeapYear()` method).

**Submission:** `BirthdayCountdown.java`. No test cases needed.

**Grading:** AP CSA 5-point Assignment Rubric.

### Activity 2.06a.2 — Date Formatting Challenge

**Overview**

The same moment in time can be written many ways. You'll format the current date and time several ways with `DateTimeFormatter`, prove that `java.time` objects are immutable, and catch the most common pattern mistake.

**To Do**

- [ ] Add the required block comment header
- [ ] Create `LocalDateTime now = LocalDateTime.now();`
- [ ] Print it in **three** required formats:
  - **ISO:** `DateTimeFormatter.ISO_LOCAL_DATE_TIME`
  - **Short:** `MM/dd/yy`
  - **Long:** `EEEE, MMMM dd, yyyy HH:mm`
- [ ] Print a **fourth** format of your own design using at least one pattern letter not used above (for example, `h:mm a 'on' MMM d`). Text in single quotes prints literally.
- [ ] **Immutability:** call `now.plusWeeks(1);` without saving it and print `now` again (it won't change). Then save `now.plusWeeks(1)` in a new variable and print that.
- [ ] **The trap:** print `now` with the pattern `mm/dd/yy`, then explain the result in a comment

[Need help? Oracle's DateTimeFormatter pattern reference](https://docs.oracle.com/javase/8/docs/api/java/time/format/DateTimeFormatter.html)

**Sample Output** (run at 12:46 PM on October 11, 2026. Yours will show the current date and time.)

```text
ISO format:    2026-10-11T12:46:05.733207985
Short format:  10/11/26
Long format:   Sunday, October 11, 2026 12:46
My format:     12:46 PM on Oct 11
After now.plusWeeks(1) (not saved): 10/11/26
One week from now:                  10/18/26
Using mm/dd/yy by mistake: 46/11/26
```

**Submission:** `DateFormats.java`. No test cases needed.

**Grading:** AP CSA 5-point Assignment Rubric.

#############################################################################

## 2.07 while Loops

<details>
<summary>📌 Standards — 2.07</summary>

| Standard | Description |
| -------- | ----------- |
| ICT 5.8 | Create and use algorithms and solve problems |
| ICT 5.9 | Deconstruct large problems into components |
| C4.6 | Use proper programming language syntax |
| C4.9 | Create programs using control structures and variables |
| CRP 1 | Apply appropriate technical skills and academic knowledge |
| CRP 5 | Utilize critical thinking to make sense of problems |

</details>

- [ ] Write `while` loops that repeat code while a condition is true.
- [ ] Trace a loop with a trace table and predict its output.
- [ ] Identify loops that run zero times, run forever, or run one time too many or too few.
	- [ ] I will be able to write a program that uses while loops.

**Anatomy of a `while` Loop**

You already filled in a `while` loop in 1.07.2 Magic 8-Ball. Every working `while` loop has three parts:

```java
int count = 1;                  // 1. INITIALIZE — set up the loop variable
while (count <= 5)              // 2. CONDITION — checked BEFORE every pass
{
    System.out.print(count + " ");
    count++;                    // 3. UPDATE — move toward making the condition false
}
System.out.println("Done");
// Output: 1 2 3 4 5 Done
```

How it runs:

1. Check the condition. If it's `false`, skip the loop entirely.
2. If it's `true`, run the body once.
3. Go back to step 1.

**Trace Tables**

A trace table records the variables and the condition on every pass. It's the most reliable way to answer AP loop questions.

```java
int n = 13;
int steps = 0;
while (n > 1)
{
    n = n / 2;
    steps++;
}
System.out.println(steps);
```

| Pass | `n > 1`? | `n` after | `steps` after |
| :--: | :------: | :-------: | :-----------: |
| 1 | 13 > 1 ✅ | 6 | 1 |
| 2 | 6 > 1 ✅ | 3 | 2 |
| 3 | 3 > 1 ✅ | 1 | 3 |
| — | 1 > 1 ❌ | stop | |

Output: `3`

**Three Ways Loops Go Wrong**

```java
// 1. ZERO ITERATIONS — the condition is false from the start
int x = 10;
while (x < 5)
{
    System.out.println("never prints");
}

// 2. INFINITE LOOP — the update is missing (or moves the wrong way)
int y = 1;
while (y <= 5)
{
    System.out.println(y);     // y never changes: prints 1 forever
}

// 3. OFF BY ONE — runs one time too many or too few
int z = 0;
while (z <= 5)                 // runs 6 times (0-5) when 5 were intended
{
    z++;
}
```

> If your program seems frozen, it's probably an infinite loop. Stop it, then check the update.

**When to Use `while`**

Use `while` when you **don't know in advance** how many times the loop will run:

- **Sentinel loop:** keep going until a special value appears (`"q"`, `-1`, `"no"`)
- **Validation loop:** keep asking until the input is acceptable
- **Until a condition is met:** keep doubling until the amount passes a target

```java
// Sentinel loop: add numbers until the user types 0
int total = 0;
int num = input.nextInt();
while (num != 0)
{
    total += num;
    num = input.nextInt();     // read the NEXT value at the end of the body
}
```

> **College Board Note:** A `return` statement inside a loop ends the **whole method** immediately, not just the loop. AP questions use this in search methods: return as soon as you find what you're looking for, and return the "not found" value after the loop.

```java
/** Returns the first multiple of 7 that is greater than start. */
public static int nextMultipleOf7(int start)
{
    int n = start + 1;
    while (true)
    {
        if (n % 7 == 0)
        {
            return n;          // exits the method (and the loop) right away
        }
        n++;
    }
}
```

### Exercise 2.07.A — Trace Table

Build a trace table and give the output.

```java
int a = 1;
int b = 20;
while (a < b)
{
    a = a * 2;
    b = b - 3;
}
System.out.println(a + " " + b);
```

<details>
<summary>Sample Answer</summary>

| Pass | `a < b`? | `a` after | `b` after |
| :--: | :------: | :-------: | :-------: |
| 1 | 1 < 20 ✅ | 2 | 17 |
| 2 | 2 < 17 ✅ | 4 | 14 |
| 3 | 4 < 14 ✅ | 8 | 11 |
| 4 | 8 < 11 ✅ | 16 | 8 |
| — | 16 < 8 ❌ | stop | |

Output: `16 8`

</details>

### Exercise 2.07.B — How Many Times?

For each loop, state how many times the body runs, or say **infinite**.

```java
// Loop 1
int i = 0;
while (i < 10) { i += 3; }

// Loop 2
int j = 10;
while (j > 0) { j++; }

// Loop 3
int k = 5;
while (k != 0) { k -= 2; }

// Loop 4
int m = 100;
while (m >= 1) { m = m / 10; }
```

<details>
<summary>Sample Answer</summary>

1. **4 times** — `i` goes 0 → 3 → 6 → 9 → 12. The condition is checked with 0, 3, 6, and 9.
2. **Infinite** — `j` moves *away* from 0. (Strictly, `int` overflow eventually turns it negative, but treat this as an infinite-loop bug.)
3. **Infinite** — `k` goes 5, 3, 1, -1, ... and skips over 0. A `!=` condition is risky when the step can jump past the target.
4. **3 times** — `m` goes 100 → 10 → 1 → 0.

</details>

### Exercise 2.07.C — Write the Method

The theme park's `Ride` class needs to estimate the wait. Each ride cycle takes `cycleMinutes` and carries up to `seatsPerCycle` guests. Write `minutesToClear` using a `while` loop (no division).

```java
public class Ride
{
    private int seatsPerCycle;
    private int cycleMinutes;

    public Ride(int seatsPerCycle, int cycleMinutes)
    {
        this.seatsPerCycle = seatsPerCycle;
        this.cycleMinutes = cycleMinutes;
    }

    /** Returns the minutes needed to give every guest in line a ride.
     *  Precondition: lineLength >= 0 */
    public int minutesToClear(int lineLength)
    {
        /* your code here */
    }
}
```

For example, with 24 seats and a 4-minute cycle, a line of 50 takes 3 cycles: **12 minutes**.

<details>
<summary>Sample Answer</summary>

```java
public int minutesToClear(int lineLength)
{
    int minutes = 0;
    int waiting = lineLength;
    while (waiting > 0)
    {
        waiting -= seatsPerCycle;
        minutes += cycleMinutes;
    }
    return minutes;
}
```

A line of 0 returns 0 because the loop never runs. Notice that the last cycle can be partly empty (2 guests on a 24-seat ride), and the loop still counts it.

</details>

### Activity 2.07.1 — Unknown Number of Loops

**Overview**

Some questions can only be answered by repeating a step until something happens: *"How many days until...?"* or *"How many steps until...?"* You can't know the count in advance, which makes these perfect `while` loops.

By the end of this activity you will be able to:
- [ ] Write a `while` loop whose number of passes isn't known in advance
- [ ] Use a counter to report how many passes happened
- [ ] Use selection (`if/else`) inside a loop
- [ ] Trace a loop with a trace table

**Part A — The Doubling Penny**

You get one penny on day 1, and the amount doubles every day. On what day does it first reach a target amount?

**Part B — The Collatz Sequence**

Start with any positive whole number and repeat:
- if it's even, divide it by 2
- if it's odd, multiply by 3 and add 1

Mathematicians believe every starting number eventually reaches 1, but no one has proven it. Count the steps.

**To Do**

- [ ] Add the required block comment header and print the **run stamp** (2.06a) first
- [ ] **Part A:** read a target in dollars. Start at `0.01` on day 1 and use a `while` loop to double the amount until it **reaches or passes** the target. Print the day and the amount with `printf` using a comma separator (`%,.2f`).
- [ ] **Part B:** read a starting number and use a `while` loop that runs until the number is 1, using `if/else` for the even and odd rules. Build the path as a String (`6 -> 3 -> 10 ...`) and count the steps.
- [ ] On paper (or in a comment), make a **trace table** for Part B starting at 6
- [ ] Test Part B with at least three starting numbers, including 1 and 27

**Sample Output**

```text
Run: 10/11/2026 01:15 PM
Target amount in dollars: 1000000
A doubling penny passes $1,000,000.00 on day 28 with $1,342,177.28.
Starting number for Collatz: 6
6 -> 3 -> 10 -> 5 -> 16 -> 8 -> 4 -> 2 -> 1
Reached 1 in 8 steps.
```

> Try 27. It takes 111 steps and climbs as high as 9232 before falling back to 1.

**Think About It** (comment at the bottom)

1. What does your Collatz loop do when the starting number is 1? Is that correct?
2. Part A's loop condition is `amount < target`. What changes if you write `amount <= target`?
3. What would happen in Part B if a user entered 0? Add a validation loop that prevents it.

**Submission**

- [ ] `UnknownLoops.java` with block comment header
- [ ] Your Part B trace table for 6
- [ ] Test Cases document: Part A with targets 1, 100, and 1000000; Part B with 1, 6, 7, and 27

**Grading:** AP CSA 5-point Assignment Rubric.

### Activity 2.07.2 — Factors, Digits, and Sums

**Overview**

Three `while`-loop algorithms, each a different loop pattern:
- **Is a Factor?** repeats until a value runs out (repeated subtraction)
- **Extract Digits** peels off one digit per pass (a 2.09 standard algorithm)
- **Sum and Average** keeps reading until a **sentinel** value appears

By the end of this activity you will be able to:
- [ ] Replace division with a repeated-subtraction loop
- [ ] Use `% 10` and `/ 10` to take apart an integer digit by digit
- [ ] Write a sentinel-controlled input loop
- [ ] Guard against bad input that would cause an infinite loop or a divide-by-zero

**To Do**

- [ ] Add the required block comment header and print the **run stamp** (2.06a) first
- [ ] **Program 1 — Is a Factor?** Write `public static boolean isFactor(int number, int divisor)` that decides whether `divisor` divides `number` evenly **without using `%` or `/`**. Hint: keep subtracting the divisor; what's left at the end tells you the answer.
  - In `main`, reject a divisor of 0 or less **before** calling `isFactor`. In a comment, explain why a divisor of 0 would make your loop run forever.
- [ ] **Program 2 — Extract Digits.** Write `public static void extractDigits(int num)` that prints each digit on its own line, **last digit first**, using a `while` loop with `% 10` and `/ 10`. Make sure `extractDigits(0)` prints `0`.
- [ ] **Program 3 — Sum and Average.** Read entries with `next()` until the user types `q` or `Q`. Convert each number with `Integer.parseInt` (1.17), then print the sum and the average as a `double`. If the user types `q` right away, print `No numbers were entered.` instead of dividing by zero.

**Sample Output**

```text
Run: 10/11/2026 01:15 PM
Enter the number:
104
Enter the divisor:
13
13 is a factor of 104

Enter a positive integer:
54321
1
2
3
4
5

Enter a number, or the letter 'q' to end the sequence:
25
Enter a number, or the letter 'q' to end the sequence:
78
Enter a number, or the letter 'q' to end the sequence:
16
Enter a number, or the letter 'q' to end the sequence:
14
Enter a number, or the letter 'q' to end the sequence:
q
The sum is: 133
The average is: 33.25
```

```text
Enter the number:
52
Enter the divisor:
3
3 is not a factor of 52
```

**Think About It** (comment at the bottom)

1. How many times does the `isFactor` loop run for `isFactor(104, 13)`? For `isFactor(1000000, 1)`? What does that tell you about this algorithm compared to using `%`?
2. How would you print the digits **first to last** instead (5, 4, 3, 2, 1 for 54321)? What makes that harder?
3. Why does Program 3 read the **first** entry before the loop and the **next** entry at the bottom of the loop?

**Submission**

- [ ] `WhileAlgorithms.java` with block comment header
- [ ] Test Cases document: a factor and a non-factor, divisor 0, number 0; `extractDigits` of 54321, 7, and 0; Sum and Average with several numbers and with `q` first

**Grading:** AP CSA 5-point Assignment Rubric.

### Check for Understanding

**1.** What is printed?

```java
int k = 2;
while (k < 20)
{
    k = k * 3;
}
System.out.println(k);
```

<details>
<summary>Answer</summary>

`54`. `k` goes 2 → 6 → 18 → 54. When `k` is 54 the condition is false.
</details>

**2.** How many times is `"Hi"` printed?

```java
int n = 7;
while (n > 7)
{
    System.out.println("Hi");
    n--;
}
```

<details>
<summary>Answer</summary>

**0 times.** `7 > 7` is false before the first pass, so the body never runs.
</details>

**3.** Which change fixes this infinite loop so it prints `5 4 3 2 1`?

```java
int c = 5;
while (c > 0)
{
    System.out.print(c + " ");
    c++;
}
```

<details>
<summary>Answer</summary>

Change `c++` to `c--`. The update has to move `c` **toward** making `c > 0` false.
</details>

**4.** What is printed?

```java
int num = 2468;
int sum = 0;
while (num > 0)
{
    sum += num % 10;
    num /= 10;
}
System.out.println(sum);
```

<details>
<summary>Answer</summary>

`20`. The loop adds the digits 8 + 6 + 4 + 2.
</details>

**5.** In a sentinel loop that reads numbers until `-1`, why is the first value read **before** the loop?

<details>
<summary>Answer</summary>

So the condition has a real value to check on the first pass. Reading the next value at the **end** of the body means the sentinel is checked before it can be processed as data.
</details>

#############################################################################

## 2.07a do-while Loops, break, and continue — *Oracle Foundations 1Z0-811*

<details>
<summary>📌 Standards — 2.07a</summary>

| Standard | Description |
| -------- | ----------- |
| ICT 5.8 | Create and use algorithms and solve problems |
| C4.6 | Use proper programming language syntax |
| C4.9 | Create programs using control structures and variables |
| CRP 1 | Apply appropriate technical skills and academic knowledge |
| CRP 5 | Utilize critical thinking to make sense of problems |

</details>

> **Oracle Exam Note:** `do-while`, `break`, and `continue` are tested on Oracle 1Z0-811. None of them are part of the AP Java subset. You may use them on AP free-response questions, but no AP question requires them.

- [ ] Write a `do-while` loop and explain when its body runs.
- [ ] Use a `do-while` loop for input validation.
- [ ] Trace loops that use `break` and `continue`.

**The `do-while` Loop**

A `do-while` checks its condition **after** the body, so the body always runs **at least once**.

```java
do
{
    // body: always runs at least once
} while (condition);      // ← note the semicolon
```

```java
Scanner input = new Scanner(System.in);
int number;
do
{
    System.out.print("Enter a positive number: ");
    number = input.nextInt();
} while (number <= 0);     // checked AFTER the body
System.out.println("You entered " + number);
```

That's the classic use: **validation**. You have to ask at least once before there's anything to check.

**`while` vs. `do-while`**

```java
int i = 10;
while (i < 5)              // false right away: body runs 0 times
{
    System.out.println("while: " + i);
}

int j = 10;
do
{
    System.out.println("do-while: " + j);   // runs once, prints "do-while: 10"
} while (j < 5);
```

> **Oracle Exam Note:** Two traps to watch for: forgetting the semicolon after `while (condition)` is a **compile error** in a `do-while`, and a variable declared **inside** the `do { }` block can't be used in the `while (...)` condition, because it's out of scope.

**`break` and `continue`**

- `break` exits the loop **immediately**. Code after the loop runs next.
- `continue` skips the **rest of this pass** and goes straight to the next condition check.

```java
// break: stop at the first multiple of 7
int n = 50;
while (n < 100)
{
    if (n % 7 == 0)
    {
        System.out.println("Found " + n);   // Found 56
        break;
    }
    n++;
}

// continue: print 1-10 but skip multiples of 3
int k = 0;
while (k < 10)
{
    k++;                       // update BEFORE continue
    if (k % 3 == 0)
    {
        continue;
    }
    System.out.print(k + " "); // 1 2 4 5 7 8 10
}
```

> **Oracle Exam Note:** In a `while` loop, if `continue` comes **before** the update, the update is skipped and the loop can run forever. (In a `for` loop, `continue` still runs the update in the header.) When loops are nested (2.11), `break` exits only the **innermost** loop.

**Writing Loops Without `break` or `continue`**

Anything `break` and `continue` do, a condition and an `if` can do. This is the style AP expects:

```java
// Instead of break: put the stopping reason in the condition
boolean found = false;
int m = 50;
while (m < 100 && !found)
{
    if (m % 7 == 0)
    {
        found = true;
    }
    else
    {
        m++;
    }
}
```

### Activity 2.07a.1 — Guessing Game

**Overview**

The computer picks a secret number from 1 to 100, and the player guesses until they get it. A guessing game is the classic `do-while` situation: the player must guess **at least once** before there's anything to check. You'll give "hot/cold" hints, count the guesses, and use the Date/Time API to report how long the player took.

By the end of this activity you will be able to:
- [ ] Use a `do-while` loop when the body must run at least once
- [ ] Combine a loop with an `if / else if / else` chain for feedback
- [ ] Measure elapsed time with `LocalDateTime` and `Duration` (2.06a)
- [ ] Use a seeded `Random` so a random program can be tested

**Hint Table**

| Distance from the secret | Hint |
| ------------------------ | ---- |
| 0 | `Correct!` |
| 1–3 | `Burning hot!` |
| 4–10 | `Warm.` |
| 11–25 | `Cool.` |
| more than 25 | `Freezing!` |

Every wrong guess also says `Go higher.` or `Go lower.`

**To Do**

- [ ] Add the required block comment header
- [ ] Print the **run stamp** (2.06a) first. Save the `LocalDateTime` in a variable named `start`, because you'll need it again at the end.
- [ ] Declare `private static final boolean TEST_MODE` and a `SEED`. In test mode, create `new Random(SEED)` and print the secret number so you can test.
- [ ] Use a `do-while` loop that repeats **while the guess is not the secret**
- [ ] Inside the loop:
  - a guess below 1 or above 100 prints `Out of range! Pick 1 to 100.` and does **not** count as a try
  - otherwise count the try, compute the distance with `Math.abs`, and print the hint and direction
- [ ] After the loop, use `Duration.between(start, LocalDateTime.now())` to print the number of seconds taken, along with the number of tries. Use a ternary so 1 try isn't printed as "1 tries".
- [ ] Set `TEST_MODE` to `false` before you submit

**Sample Output** (test mode, seed 4. Your run stamp and the number of seconds will differ.)

```text
Run: 10/11/2026 01:03 PM
I'm thinking of a number from 1 to 100.
[TEST MODE] secret = 63
Your guess: 150
Out of range! Pick 1 to 100.
Your guess: 50
Cool. Go higher.
Your guess: 75
Cool. Go lower.
Your guess: 61
Burning hot! Go higher.
Your guess: 63
Correct!
Congratulations! You found 63 in 4 tries and 12 seconds.
```

**Think About It** (comment at the bottom)

1. Why is a `do-while` a better fit here than a `while` loop? What would you have to do before a `while` loop to make it work?
2. Write your loop's condition, then use De Morgan's thinking to state exactly when the loop **stops**.
3. What's the greatest number of guesses a perfect strategy needs to find any number from 1 to 100? (Hint: each guess can cut the range in half.)

**Submission**

- [ ] `GuessingGame.java` with block comment header (`TEST_MODE` set to `false`)
- [ ] Test Cases document (made in test mode): a win on the first guess, an out-of-range guess, and each hint level at least once

**Grading:** AP CSA 5-point Assignment Rubric.

### Activity 2.07a.2 — Age/Name

**Overview**

`do-while` is the standard tool for **input validation**: ask, check, and ask again until the answer is acceptable. You'll validate a name and an age, then use the Date/Time API to estimate the user's birth year.

By the end of this activity you will be able to:
- [ ] Write a `do-while` loop that re-prompts until input is valid
- [ ] Write validation conditions using String length and a numeric range
- [ ] Use `LocalDate.now().getYear()` in a calculation (2.06a)

**To Do**

- [ ] Add the required block comment header and print the **run stamp** (2.06a) first
- [ ] Write a `do-while` that asks for the user's first name until it is **at least 4 characters** long (ignore extra spaces with `.trim()`). Print an error message when it's too short.
- [ ] Write a second `do-while` that asks for the user's age until it is **between 18 and 65, inclusive** (`nextInt()`). Print an error message when it's out of range.
- [ ] Print `[name] is [age] years old.`
- [ ] Use `LocalDate.now().getYear()` to print the two possible birth years (it depends on whether their birthday has happened yet this year)
- [ ] Use made-up ages for testing. You don't need your own.

**Sample Output**

```text
Run: 10/11/2026 01:03 PM
What is your first name?
Kai
Your name needs to be at least 4 characters long.
What is your first name?
Kaiden

What is your current age?
70
Age must be between 18 and 65.

What is your current age?
50

Kaiden is 50 years old.
Kaiden was born in 1976 or 1975.
```

**Think About It** (comment at the bottom)

1. The age condition is `age < 18 || age > 65`. Write the **valid-age** condition, then show how De Morgan's Laws connect the two.
2. Why do you only know the birth year to within one year?
3. What happens if the user types `fifty` instead of `50`? (Try it. You'll learn to handle this with exceptions in Unit 3.)

**Submission**

- [ ] `AgeName.java` with block comment header
- [ ] Test Cases document: a name that is exactly 3 characters, then exactly 4; ages 17, 18, 65, and 66

**Grading:** AP CSA 5-point Assignment Rubric.

### Activity 2.07a.3 — `char` — Oracle

**Overview**

Oracle expects you to work comfortably with the `char` type: comparing characters, converting case, and using them in a `switch`. You'll validate that the user typed exactly **one letter**, then classify it as a vowel or consonant with a `switch` that uses intentional **fall-through** (2.04a).

> **Oracle Exam Note:** A `char` is stored as a number (its Unicode value), so `'a' < 'b'` works and `'a' + 1` is `98`. A `switch` can use `char` cases, and grouping several cases with no `break` between them is a common Oracle pattern.

By the end of this activity you will be able to:
- [ ] Get a `char` from a `String` with `charAt(0)` and convert its case
- [ ] Test whether a `char` is a letter with a range check
- [ ] Use a `do-while` to validate input
- [ ] Group `switch` cases with fall-through

**To Do**

- [ ] Add the required block comment header and print the **run stamp** (2.06a) first
- [ ] Use a `do-while` to read a line until the user types **exactly one character** that is a **letter**. Print `Please type exactly one character.` or `That character is not a letter.` as appropriate.
- [ ] Convert the letter to lowercase with `Character.toLowerCase(...)` before testing it
- [ ] Check "is a letter" with a range: `ch >= 'a' && ch <= 'z'`
- [ ] Use a `switch` on the `char`: group `'a'`, `'e'`, `'i'`, `'o'`, and `'u'` with fall-through to print `is a vowel.`, and use `default` for `is a consonant.`
- [ ] Print the letter exactly as the user typed it (so `E is a vowel.` keeps the capital)

**Starter Code**

```java
import java.util.Scanner;

public class Main
{
    public static void main(String[] args)
    {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter a letter");
        String str = sc.nextLine();
    }
}
```

**Sample Output**

```text
Run: 10/11/2026 01:03 PM
Enter a letter
bat
Please type exactly one character.
Enter a letter
7
That character is not a letter.
Enter a letter
b

b is a consonant.
```

**Think About It** (comment at the bottom)

1. What does `System.out.println('a' + 1);` print, and why isn't it `b`?
2. Your `switch` cases for the vowels have no `break` between them. Explain why that's correct here.
3. Should `y` be a vowel? How would you change your `switch` if your teacher said yes?

**Submission**

- [ ] `Main.java` with block comment header
- [ ] Test Cases document: a vowel, a consonant, an uppercase vowel, a digit, an empty line, and a multi-character entry

**Grading:** AP CSA 5-point Assignment Rubric.

### Activity 2.07a.4 — Break & Continue — Oracle

**Overview**

`break` exits a loop immediately. `continue` skips the rest of the current iteration and jumps to the next one. Both are tested on Oracle 1Z0-811 but are **not** in the AP Java subset, so in Part C you'll prove that every program can be written without them.

By the end of this activity you will be able to:
- [ ] Use `continue` to skip certain iterations
- [ ] Use `break` to stop a loop early, and check afterward *why* it stopped
- [ ] Explain the infinite-loop trap when `continue` skips a `while` loop's update
- [ ] Rewrite a loop without `break` or `continue`

**To Do**

- [ ] Add the required block comment header and print the **run stamp** (2.06a) first
- [ ] **Part A — continue:** read `n`, then use a `while` loop to add the numbers from 1 to `n`, using `continue` to **skip multiples of 3**. Print each number added and the final sum.
  - Increment your counter at the **top** of the loop body. In a comment, explain what would happen if the increment were at the bottom, after the `continue`.
- [ ] **Part B — break:** build a vault that allows up to **4** attempts to enter the code `4721`. Use a `while` loop and `break` out as soon as the code is right. After the loop, print `Vault unlocked after X tries!` or `LOCKED OUT.` Use a `boolean` to remember which happened.
- [ ] **Part C — no break, no continue:** rewrite Part A as a second `while` loop with an `if` instead of `continue`, and print its sum. In a comment, write the `while` condition that would let Part B work **without** `break`.

**Sample Output**

```text
Run: 10/11/2026 01:03 PM
Add the numbers from 1 to: 10
Added: 1 2 4 5 7 8 10
Sum without multiples of 3: 37

=== VAULT ===
Enter code (4 left): 1111
Wrong code.
Enter code (3 left): 4721
Vault unlocked after 2 tries!

Part C sum (no continue): 37
```

**Think About It** (comment at the bottom)

1. After the vault loop ends, why can't you tell whether the user succeeded just from `tries`?
2. Which version of Part A do you find easier to read, the one with `continue` or the one without? Why?
3. Predict the output, then check it:

```java
int i = 0;
while (i < 5)
{
    i++;
    if (i == 2) continue;
    if (i == 4) break;
    System.out.print(i + " ");
}
```

**Submission**

- [ ] `BreakContinue.java` with block comment header
- [ ] Test Cases document: Part A with `n` = 1, 3, and 10; Part B unlocked on try 1, unlocked on try 4, and locked out

**Grading:** AP CSA 5-point Assignment Rubric.

### Check for Understanding

**1.** What is printed?

```java
int x = 5;
do
{
    System.out.print(x + " ");
    x--;
} while (x > 5);
```

<details>
<summary>Answer</summary>

`5 `. The body runs once before the condition `4 > 5` is checked.
</details>

**2.** Why doesn't this compile?

```java
do
{
    int guess = input.nextInt();
} while (guess != 7);
```

<details>
<summary>Answer</summary>

`guess` is declared inside the `do { }` block, so it doesn't exist in the `while (...)` condition. Declare `int guess;` before the `do`.
</details>

**3.** What is printed?

```java
int i = 0;
while (i < 6)
{
    i++;
    if (i == 2 || i == 4)
    {
        continue;
    }
    if (i == 5)
    {
        break;
    }
    System.out.print(i + " ");
}
```

<details>
<summary>Answer</summary>

`1 3 `. Passes 2 and 4 are skipped by `continue`, and the loop ends at 5 because of `break`.
</details>

**4.** This loop never ends. Why?

```java
int n = 0;
while (n < 10)
{
    if (n % 2 == 0)
    {
        continue;
    }
    n++;
}
```

<details>
<summary>Answer</summary>

`n` starts at 0, which is even, so `continue` skips `n++` and `n` stays 0 forever. Move the update above the `continue`.
</details>

#############################################################################

## 2.08 for Loops

<details>
<summary>📌 Standards — 2.08</summary>

| Standard | Description |
| -------- | ----------- |
| ICT 5.8 | Create and use algorithms and solve problems |
| C4.6 | Use proper programming language syntax |
| C4.9 | Create programs using control structures and variables |
| CRP 1 | Apply appropriate technical skills and academic knowledge |
| CRP 5 | Utilize critical thinking to make sense of problems |

</details>

- [ ] Write `for` loops for counter-controlled repetition.
- [ ] Determine exactly how many times a `for` loop runs.
- [ ] Rewrite a `for` loop as an equivalent `while` loop, and back.

**One Line, Three Parts**

A `for` loop puts all three parts of a counting loop in its header:

```java
//   initialize     condition     update
for (int i = 0;     i < 5;        i++)
{
    System.out.print(i + " ");    // 0 1 2 3 4
}
```

**Order of execution:**

1. **Initialize** runs **once**, before anything else.
2. **Check** the condition. If it's `false`, the loop ends.
3. Run the **body**.
4. Run the **update**, then go back to step 2.

**Every `for` Loop Is a `while` Loop**

```java
for (int i = 1; i <= 3; i++)
{
    System.out.println(i);
}
```

```java
int i = 1;
while (i <= 3)
{
    System.out.println(i);
    i++;
}
```

Same output. The difference is where the parts live, and the **scope** of `i`.

**Counting Patterns**

| Goal | Header | Runs |
| ---- | ------ | :--: |
| 0 up to n − 1 | `for (int i = 0; i < n; i++)` | `n` times |
| 1 up to n | `for (int i = 1; i <= n; i++)` | `n` times |
| n down to 1 | `for (int i = n; i >= 1; i--)` | `n` times |
| Even numbers 0–20 | `for (int i = 0; i <= 20; i += 2)` | 11 times |
| Each index of a String | `for (int i = 0; i < str.length(); i++)` | `str.length()` times |

**Counting iterations:** for `for (int i = a; i < b; i++)` the loop runs `b - a` times. With `<=`, it's `b - a + 1`.

### <mark>IMPORTANT: off-by-one error</mark>

The most common loop mistake is running one time too many or too few:

```java
// WRONG: runs 6 times (0-5) when you want 5 iterations
for (int i = 0; i <= 5; i++) { ... }

// CORRECT: runs 5 times (0-4)
for (int i = 0; i < 5; i++) { ... }
```

Check the **first** value and the **last** value the loop variable takes. That's where off-by-one errors hide.

**Loop Variable Scope**

A variable declared in the `for` header exists **only inside the loop**:

```java
for (int i = 0; i < 3; i++)
{
    System.out.println(i);
}
// System.out.println(i);   // COMPILE ERROR — i is out of scope
```

If you need the value afterward, declare the variable **before** the loop.

> **Oracle Exam Note:** Oracle tests scope with `for` headers, and also these legal-but-unusual forms: several variables in one header (`for (int i = 0, j = 10; i < j; i++, j--)`), and empty parts (`for (;;)` is an infinite loop).

> **Best practice:** Don't change the loop variable inside the body of a `for` loop. It compiles, but it makes the number of iterations hard to predict. Exam questions sometimes do it on purpose to test your tracing.

### Exercise 2.08.A — Count the Iterations

How many times does each loop body run?

1. `for (int i = 0; i < 12; i++)`
2. `for (int i = 1; i <= 12; i++)`
3. `for (int i = 5; i < 25; i += 5)`
4. `for (int i = 10; i > 0; i -= 3)`
5. `for (int i = 3; i < 3; i++)`

<details>
<summary>Sample Answer</summary>

1. **12** (0 through 11)
2. **12** (1 through 12)
3. **4** (5, 10, 15, 20)
4. **4** (10, 7, 4, 1)
5. **0** — the condition is false from the start

</details>

### Exercise 2.08.B — while ↔ for

Rewrite the `while` loop as a `for` loop, and the `for` loop as a `while` loop. Each pair must print the same output.

```java
int n = 100;
while (n > 1)
{
    System.out.print(n + " ");
    n = n / 2;
}
```

```java
for (int t = 10; t >= 0; t -= 5)
{
    System.out.print(t + " ");
}
```

<details>
<summary>Sample Answer</summary>

```java
for (int n = 100; n > 1; n = n / 2)
{
    System.out.print(n + " ");    // 100 50 25 12 6 3
}
```

```java
int t = 10;
while (t >= 0)
{
    System.out.print(t + " ");    // 10 5 0
    t -= 5;
}
```

</details>

### Exercise 2.08.C — Write the Method

Remember the private `repeat` helper inside the `Cake` class from 1.14.3? Now you can write it yourself.

```java
/** Returns text repeated times times, joined together.
 *  repeat("ab", 3) returns "ababab"; repeat("x", 0) returns "".
 *  Precondition: times >= 0 */
public static String repeat(String text, int times)
{
    /* your code here */
}
```

<details>
<summary>Sample Answer</summary>

```java
public static String repeat(String text, int times)
{
    String result = "";
    for (int i = 0; i < times; i++)
    {
        result += text;
    }
    return result;
}
```

When `times` is 0 the loop runs zero times and the empty String is returned, which is exactly right.

</details>

### Activity 2.08.1 — Launch Sequence: for Loop Basics

**Overview**

Mission Control (remember 1.10.1?) needs a launch sequence program. Each stage of the launch is a different kind of `for` loop: counting up by a step, adding up a total, counting matches, and counting down. Choosing the right **start, condition, and update** for each loop is the whole skill.

By the end of this activity you will be able to:
- [ ] Write `for` loops that count up, count down, and count by steps
- [ ] Use an accumulator to add up values inside a loop
- [ ] Use an `if` inside a loop to count values that meet a condition
- [ ] Avoid off-by-one errors by testing the first and last values

**To Do**

- [ ] Add the required block comment header and print the **run stamp** (2.06a) first
- [ ] **Part A — Fuel Loading:** one `for` loop prints `Fuel at 0%` through `Fuel at 100%` in steps of 20. The update must be `fuel += 20`, not `fuel++`.
- [ ] **Part B — Systems Check:** read `n` and use a `for` loop to add 1 + 2 + ... + n. Print the total.
- [ ] **Part C — Signal Scan:** read `k` and use a `for` loop from 1 to 100 with an `if` inside that counts how many numbers are multiples of `k` (2.09 preview)
- [ ] **Part D — Countdown:** read a starting number and count down to 1 on **one line**, then print `LIFTOFF!`
- [ ] Above each loop, add a comment stating exactly **how many times** the loop body runs (use the sample inputs)

**Sample Output**

```text
=== MISSION CONTROL: LAUNCH SEQUENCE ===
-- Fuel Loading --
Fuel at 0%
Fuel at 20%
Fuel at 40%
Fuel at 60%
Fuel at 80%
Fuel at 100%
Number of systems to check: 5
-- Systems Check --
Check codes 1 through 5 add up to 15
Signal frequency to scan for: 7
-- Signal Scan --
Signals on multiples of 7 from 1 to 100: 14
Countdown from: 10
-- Countdown --
10... 9... 8... 7... 6... 5... 4... 3... 2... 1... LIFTOFF!
```

**Think About It** (comment at the bottom)

1. Part A runs 6 times, not 5. Why?
2. Part C could loop through only the multiples of `k` instead of all 100 numbers. Write that loop header. How many times does it run when `k` is 7?
3. What happens in Part D if you write the condition as `t > 1`? As `t >= 0`?

**Submission**

- [ ] `LaunchSequence.java` with block comment header and loop-count comments
- [ ] Test Cases document: Part B with `n` = 1 and `n` = 100; Part C with `k` = 1, 7, and 100; Part D starting from 1 and from 10

**Grading:** AP CSA 5-point Assignment Rubric.

### Activity 2.08.2 — Factorial X

**Overview**

Two classic `for`-loop programs: an **accumulator that multiplies** (factorial) and a **counter that prints a table** (multiples). Factorial values grow so fast that they also test what you learned about data type ranges in 1.05.

By the end of this activity you will be able to:
- [ ] Use a `for` loop to multiply values into a running product
- [ ] Choose a data type large enough for the result
- [ ] Validate input before running a loop
- [ ] Use the loop variable inside the loop body to build output

**Background**

The **factorial** of `n`, written `n!`, multiplies `n` by every positive integer below it:

```text
4! = 4 × 3 × 2 × 1 = 24
0! = 1   (defined that way)
```

**To Do**

**Program 1 — Factorial.java**
- [ ] Add the required block comment header and print the **run stamp** (2.06a) first
- [ ] Read a number. If it is less than 0 or greater than 19, print `Invalid input! Please enter a number between 0 and 19.` and do not calculate.
- [ ] Otherwise, use a `for` loop to compute the factorial and print `Factorial of n is: result`
- [ ] Store the product in a **`long`**. Starting the product at `1` makes `0!` come out right automatically.
- [ ] In a comment, explain what goes wrong if the product is an `int` (try `13!` to find out)

**Program 2 — TimesTable.java**
- [ ] Add the required block comment header and print the **run stamp** (2.06a) first
- [ ] Read an integer and how many multiples to display
- [ ] Use a `for` loop to print each line in the form `4 * 3 = 12`

**Sample Output — Program 1** (four separate runs)

```text
Enter a number (0-19): 5
Factorial of 5 is: 120
```

```text
Enter a number (0-19): 10
Factorial of 10 is: 3628800
```

```text
Enter a number (0-19): 25
Invalid input! Please enter a number between 0 and 19.
```

```text
Enter a number (0-19): -3
Invalid input! Please enter a number between 0 and 19.
```

**Sample Output — Program 2**

```text
Enter an integer:
4
Enter the number of multiples:
10

4 * 1 = 4
4 * 2 = 8
4 * 3 = 12
4 * 4 = 16
4 * 5 = 20
4 * 6 = 24
4 * 7 = 28
4 * 8 = 32
4 * 9 = 36
4 * 10 = 40
```

**Think About It** (comment at the bottom of Factorial.java)

1. What is `19!`? Find out how large a `long` can be (`Long.MAX_VALUE`). Is `20!` still safe? What about `21!`?
2. Your loop can start at `i = 2` instead of `i = 1`. Why doesn't that change the answer?
3. How many times does the loop body run for `n = 10`? Write the count in terms of `n`.

**Submission**

- [ ] `Factorial.java` and `TimesTable.java` with block comment headers
- [ ] Test Cases document: factorial of 0, 1, 5, 19, -1, and 20; times table with 0 multiples and with a negative number

**Grading:** AP CSA 5-point Assignment Rubric.

### Activity 2.08.3 — Allowance Savings Plan

**Overview**

Back in 1.02.1 you decided who gets an allowance. Now you'll plan how to **save** it. Your program prints a week-by-week savings table, adds a parent "match" bonus every fourth week, and reports when (or whether) a savings goal is reached. In Part B, you'll prove that a `while` loop and a `for` loop can do the same job.

By the end of this activity you will be able to:
- [ ] Use a `for` loop to build a formatted table, one row per iteration
- [ ] Use `%` inside a loop to act on every *n*th iteration
- [ ] Record the **first** iteration where a condition becomes true
- [ ] Rewrite a `while` loop as an equivalent `for` loop

**Rules**

- Each week, the saver deposits a chosen **percent** of their weekly allowance.
- Every **4th week** (weeks 4, 8, 12, ...), parents add a **$5.00 bonus**.
- The program reports the **first week** the balance reaches the goal, or how far short it is.

**To Do**

**Part A — Savings Table**
- [ ] Add the required block comment header and print the **run stamp** (2.06a) first
- [ ] Read the weekly allowance (`double`), percent to save (`int`), number of weeks (`int`), and savings goal (`double`)
- [ ] Declare `final double BONUS = 5.00;`
- [ ] Use a `for` loop from week 1 to the last week. Each iteration computes the deposit, uses a **ternary** with `week % 4 == 0` for the bonus, updates the balance, and prints one aligned row with `printf`.
- [ ] Before the loop, declare `int goalWeek = -1;` (meaning "not reached yet"). Inside the loop, record the week **only the first time** the balance reaches the goal. (Hint: two conditions joined with `&&`.)
- [ ] After the loop, print the goal message or how much is still needed

**Part B — while to for**
- [ ] Copy this `while` loop into your program, then write a `for` loop that prints **exactly** the same output:

```java
int count = 3;
while (count <= 30)
{
    System.out.print(count + " ");
    count += 3;
}
```

**Sample Output**

```text
Weekly allowance: $20
Percent to save each week: 25
Number of weeks: 8
Savings goal: $30

Week      Deposit    Bonus    Balance
1            5.00     0.00       5.00
2            5.00     0.00      10.00
3            5.00     0.00      15.00
4            5.00     5.00      25.00
5            5.00     0.00      30.00
6            5.00     0.00      35.00
7            5.00     0.00      40.00
8            5.00     5.00      50.00

Goal of $30.00 reached in week 5!

while version: 3 6 9 12 15 18 21 24 27 30
for version:   3 6 9 12 15 18 21 24 27 30
```

When the goal isn't reached (allowance $10, 10%, 6 weeks, goal $50), the last line of Part A is:

```text
Goal not reached. You are $39.00 short.
```

**Think About It** (comment at the bottom)

1. Why does `goalWeek` need the extra check `goalWeek == -1`? What would it hold at the end without it?
2. In Part B, where did each of the three parts of the `while` loop (start, condition, update) go in your `for` header?
3. Why is `-1` a safe "not reached" value for a week number?

**Submission**

- [ ] `SavingsPlan.java` with block comment header
- [ ] Test Cases document: goal reached early, goal reached exactly on a bonus week, goal never reached, and 0 weeks

**Grading:** AP CSA 5-point Assignment Rubric.

#############################################################################

### Check for Understanding

**1.** What is printed?

```java
int total = 0;
for (int i = 1; i <= 4; i++)
{
    total += i * i;
}
System.out.println(total);
```

<details>
<summary>Answer</summary>

`30`. The loop adds 1 + 4 + 9 + 16.
</details>

**2.** Which header prints `10 8 6 4 2`?

- A. `for (int i = 10; i > 2; i -= 2)`
- B. `for (int i = 10; i >= 2; i -= 2)`
- C. `for (int i = 10; i >= 2; i--)`
- D. `for (int i = 2; i <= 10; i += 2)`

<details>
<summary>Answer</summary>

**B.** A stops before printing 2, C prints every number from 10 down to 2, and D counts up.
</details>

**3.** Does this compile? If not, why?

```java
for (int k = 0; k < 5; k++)
{
    int doubled = k * 2;
}
System.out.println(k + " " + doubled);
```

<details>
<summary>Answer</summary>

**No.** Both `k` and `doubled` are out of scope after the loop.
</details>

**4.** How many times is `"*"` printed?

```java
for (int i = 0; i <= 20; i += 4)
{
    System.out.print("*");
}
```

<details>
<summary>Answer</summary>

**6** (`i` = 0, 4, 8, 12, 16, 20).
</details>

**5.** What is printed?

```java
String word = "loops";
String result = "";
for (int i = 0; i < word.length(); i += 2)
{
    result += word.substring(i, i + 1);
}
System.out.println(result);
```

<details>
<summary>Answer</summary>

`los`. Indexes 0, 2, and 4 hold `l`, `o`, and `s`.
</details>

#############################################################################

## 2.08a Comparing Loops — *Oracle Foundations 1Z0-811*

<details>
<summary>📌 Standards — 2.08a</summary>

| Standard | Description |
| -------- | ----------- |
| ICT 5.4 | Interpret information and draw conclusions to make informed decisions |
| ICT 5.8 | Create and use algorithms and solve problems |
| ICT 10.1 | Interpret and explain ICT-specific terminology |
| C4.6 | Use proper programming language syntax |
| C4.9 | Create programs using control structures and variables |
| CRP 1 | Apply appropriate technical skills and academic knowledge |
| CRP 5 | Utilize critical thinking to make sense of problems |

</details>

> **Oracle Exam Note:** "Compare and contrast the `for`, `while`, and `do-while` loops" is a direct objective on Oracle 1Z0-811. You've now seen all three individually (2.07, 2.07a, 2.08). This section puts them side by side.

- [ ] Explain when each loop checks its condition.
- [ ] Choose the best loop for a situation and justify the choice.
- [ ] Convert between loop types without changing the behavior.

All three loops repeat code. They differ in **when the condition is checked** and **when you'd choose one over another**.

| | `while` | `do-while` | `for` |
| --- | --- | --- | --- |
| **Condition checked** | Before each iteration | After each iteration | Before each iteration |
| **Guarantees at least 1 run?** | No | **Yes** | No |
| **Best used when...** | The number of iterations is unknown and depends on a condition | The body must run at least once (menus, input validation) | The number of iterations is known or counter-based |
| **Counter handled where?** | Declared and updated separately | Declared and updated separately | Declared, checked, and updated in the header |
| **Semicolon after the condition?** | No | **Yes:** `while (condition);` | No |

```java
// while — condition checked FIRST; may run zero times
int i = 10;
while (i < 5)
{
    System.out.println(i);   // never runs; i starts at 10
}

// do-while — condition checked LAST; runs at least once
int j = 10;
do
{
    System.out.println(j);   // runs once, prints 10
} while (j < 5);

// for — best when you know exactly how many times to repeat
for (int k = 0; k < 5; k++)
{
    System.out.println(k);   // runs exactly 5 times
}
```

> **Oracle Exam Note:** A common trap: given a `do-while` whose condition is false from the start, students assume the body never runs. A `do-while` always runs its body **at least once**, no matter what the condition is.

### Activity 2.08a.1 — Which Loop?

For each scenario, name the best loop (`for`, `while`, or `do-while`) and explain why in one sentence.

1. Printing the numbers 1 through 20.
2. Repeatedly asking the user for a password until they enter the correct one.
3. Reading lines from a file until there are no more lines to read.
4. Displaying a menu at least once, then repeating it if the user enters an invalid choice.
5. Doubling a savings balance until it passes $1,000.
6. Processing every character of a String.

<details>
<summary>Sample Answers</summary>

1. **`for`** — the count (20) is known in advance.
2. **`do-while`** — the user must be asked at least once before there's anything to check. (A `while` with a first prompt before the loop also works.)
3. **`while`** — the number of lines is unknown, and the file might be empty (zero iterations).
4. **`do-while`** — the menu must display at least once.
5. **`while`** — the number of doublings isn't known in advance.
6. **`for`** — the length of the String gives the exact count: `for (int i = 0; i < str.length(); i++)`.

</details>

################################################################

### Activity 2.08a.2 — Convert Program: for to do-while

**Overview**

This activity goes with the loop comparison in 2.08a. Any `for` loop can be rewritten as a `do-while`, but there's a catch. A `for` loop can run **zero** times, while a `do-while` always runs **at least once**. You'll convert two programs and discover what goes wrong when the loop shouldn't run at all.

By the end of this activity you will be able to:
- [ ] Rewrite a `for` loop as a `do-while` loop
- [ ] Identify inputs where a `do-while` runs when it shouldn't
- [ ] Guard a `do-while` with an `if`
- [ ] Use a `do-while` for input validation

**The Original Programs**

```java
// Program A: counts how many times "aaa" appears (overlaps count)
String pattern = "aaa";
int howMany = 0;
for (int i = 0; i < input.length() - pattern.length() + 1; i++)
{
    String currSeq = input.substring(i, i + pattern.length());
    if (currSeq.equals(pattern))
    {
        howMany++;
    }
}
System.out.println("There were " + howMany + " substrings matching " + pattern);
```

```java
// Program B: prints the input backward
String output = "";
for (int i = input.length(); i > 0; i--)
{
    output += input.substring(i - 1, i);
}
System.out.println(output);
```

**To Do**

- [ ] Add the required block comment header and print the **run stamp** (2.06a) first
- [ ] Put both programs in **one** file, one after the other, using one `Scanner`
- [ ] **Convert:** rewrite each `for` loop as a `do-while`. Move the start before the loop, the update to the end of the body, and the condition into `while (...)`.
- [ ] **Break it on purpose:** run Program B with an **empty** input (just press Enter). Screenshot the `StringIndexOutOfBoundsException`, and explain in a comment why the `for` version didn't crash.
- [ ] **Fix it:** wrap each `do-while` in an `if` that only lets it run when it should. Program B needs at least one character; Program A needs at least as many characters as the pattern.
- [ ] **Validate:** Program A's prompt asks for at least 3 characters, but nothing enforces it. Add a `do-while` that re-prompts until the input is long enough.

**Sample Output**

```text
Run: 10/11/2026 01:03 PM
Enter a String with at least 3 characters:
ab
Enter a String with at least 3 characters:
baaaaab
There were 3 substrings matching aaa
Enter a String:
stressed
desserts
```

**Think About It** (comment at the bottom)

1. `"baaaaab"` contains five a's in a row. Why does Program A count **3** matches?
2. After adding the input-validation loop in Program A, is the `if` guard still needed? Explain.
3. Which loop type would you choose for each program, and why?

**Submission**

- [ ] `ConvertPrograms.java` with block comment header
- [ ] Screenshot of the Program B crash before your fix

No Test Cases document needed.

**Grading:** AP CSA 5-point Assignment Rubric.

#############

## 2.09 Implementing Selection and Iteration Algorithms

<details>
<summary>📌 Standards — 2.09</summary>

| Standard | Description |
| -------- | ----------- |
| ICT 5.8 | Create and use algorithms and solve problems |
| ICT 5.9 | Deconstruct large problems into components |
| ICT 7.5 | Apply high-quality techniques to product design and development |
| C4.6 | Use proper programming language syntax |
| C4.9 | Create programs using control structures and variables |
| CRP 1 | Apply appropriate technical skills and academic knowledge |
| CRP 5 | Utilize critical thinking to make sense of problems |

</details>

- [ ] Recognize and write the standard algorithms that combine loops and conditionals.
- [ ] Choose a correct starting value for sums, counts, minimums, and maximums.
- [ ] Combine standard algorithms to solve a new problem.

> **College Board Note:** The AP CED lists these as standard algorithms you should be able to write **and** recognize: determining whether an integer is evenly divisible by another, extracting digits, counting how often a condition is met, finding a minimum or maximum, and computing a sum or average. FRQ 1 almost always asks for one or more of them.

**The Standard Algorithms**

You've already used several of these. Here they are side by side.

**1. Divisibility** — `x % d == 0` means `d` divides `x` evenly (2.09.1 Smallest Divisible).

```java
int count = 0;
for (int x = 1; x <= 100; x++)
{
    if (x % 6 == 0)
    {
        count++;          // how many numbers from 1-100 are divisible by 6? 16
    }
}
```

**2. Digit extraction** — `% 10` gives the last digit, and `/ 10` removes it (2.07.2).

```java
int num = 3074;
while (num > 0)
{
    int digit = num % 10;   // 4, then 7, then 0, then 3
    num = num / 10;
}
```

**3. Frequency count** — count how many values meet a condition (Sevens face counts, the Signal Scan in 2.08.1).

```java
int evens = 0;
for (int i = 1; i <= 10; i++)
{
    int roll = (int) (Math.random() * 6) + 1;
    if (roll % 2 == 0)
    {
        evens++;
    }
}
```

**4. Minimum / maximum** — keep a "best so far" and replace it when a better value appears (1.17.1 High Score Tracker).

```java
int max = Integer.MIN_VALUE;   // start at the WORST possible value
int count = 0;
int value = input.nextInt();
while (value != -1)
{
    if (value > max)
    {
        max = value;
    }
    count++;
    value = input.nextInt();
}
```

**5. Sum and average** — add with an accumulator, count the values, and divide **as a `double`**, but only if the count isn't 0.

```java
double average = (count > 0) ? (double) sum / count : 0.0;
```

**Starting Values Matter**

| Algorithm | Start at | Why |
| --------- | -------- | --- |
| Sum | `0` | Adding 0 changes nothing |
| Product | `1` | Multiplying by 1 changes nothing (2.08.2 Factorial) |
| Count | `0` | Nothing counted yet |
| Maximum | `Integer.MIN_VALUE` or the **first** value | Any real value replaces it |
| Minimum | `Integer.MAX_VALUE` or the **first** value | Any real value replaces it |

> Starting a maximum at `0` is a classic bug: if every value is negative, the "maximum" comes out as 0, a value that was never entered.

### Exercise 2.09.A — Trace It

What is printed?

```java
int n = 50721;
int count = 0;
int largest = 0;
while (n > 0)
{
    int d = n % 10;
    if (d % 2 == 1)
    {
        count++;
    }
    if (d > largest)
    {
        largest = d;
    }
    n /= 10;
}
System.out.println(count + " " + largest);
```

<details>
<summary>Sample Answer</summary>

`3 7`. The digits, last to first, are 1, 2, 7, 0, 5. The odd ones are 1, 7, and 5 (count 3), and the largest digit is 7. (Starting `largest` at 0 is safe here because digits are never negative.)

</details>

### Exercise 2.09.B — Write the Method

This is a classic FRQ 1 style method. Write `countEvenDigits`.

```java
/** Returns the number of even digits in num.
 *  countEvenDigits(24681) returns 4; countEvenDigits(135) returns 0.
 *  Precondition: num > 0 */
public static int countEvenDigits(int num)
{
    /* your code here */
}
```

<details>
<summary>Sample Answer</summary>

```java
public static int countEvenDigits(int num)
{
    int count = 0;
    while (num > 0)
    {
        if ((num % 10) % 2 == 0)
        {
            count++;
        }
        num /= 10;
    }
    return count;
}
```

This combines **digit extraction** with a **frequency count**, which is exactly how FRQs build bigger problems out of the standard algorithms.

</details>

### Exercise 2.09.C — Write the Method

Write `isPrime`. A prime number is greater than 1 and has no divisors other than 1 and itself.

```java
/** Returns true if n is prime. isPrime(13) is true; isPrime(1) and isPrime(15) are false. */
public static boolean isPrime(int n)
{
    /* your code here */
}
```

<details>
<summary>Sample Answer</summary>

```java
public static boolean isPrime(int n)
{
    if (n < 2)
    {
        return false;
    }
    for (int d = 2; d < n; d++)
    {
        if (n % d == 0)
        {
            return false;     // found a divisor: stop right away
        }
    }
    return true;              // no divisor found
}
```

The `return false` inside the loop ends the method as soon as a divisor is found. `return true` is only reached after **every** possible divisor has been checked. A common bug is putting `return true` inside an `else` in the loop, which decides after checking only one divisor.

</details>

### Activity 2.09.1 — Smallest Divisible Number

**Overview**

What is the **smallest positive number that every whole number from 1 to 10 divides evenly**? There's no formula to plug into, but a computer can **search** for it: try a number, test it, and move to the next one until a number passes every test. This is one of the standard algorithms on the AP exam, testing **divisibility** with `%` inside a loop.

By the end of this activity you will be able to:
- [ ] Use `%` to test whether one number divides another evenly
- [ ] Write a search loop that stops when a compound condition is satisfied
- [ ] Rewrite a loop condition with De Morgan's Laws (2.06)
- [ ] Measure how much work an algorithm does by counting iterations (2.12)

**Background**

*"Evenly divides"* means **no remainder**. `x % d == 0` is `true` exactly when `d` divides `x` evenly.

```java
System.out.println(12 % 4 == 0);   // true  — 12 / 4 = 3, remainder 0
System.out.println(12 % 5 == 0);   // false — 12 / 5 = 2, remainder 2
```

A number is divisible by **all** of 1–10 when **every** test is true, so the tests are joined with `&&`:

```java
num % 2 == 0 && num % 3 == 0 && num % 4 == 0 && ... && num % 10 == 0
```

> Why is `num % 1 == 0` missing? Every whole number is divisible by 1, so that test is always `true` and adds nothing.

The search algorithm in plain English:

```text
num ← 1
WHILE num is NOT divisible by all of 2-10
    num ← num + 1
DISPLAY num
```

**To Do**

**Part A — Brute Force**
- [ ] Add the required block comment header and print the **run stamp** (2.06a) first
- [ ] Start `num` at `1` and use a `while` loop that keeps going while `num` is **not** divisible by all of 2–10. Write it as `!( ... && ... )`.
- [ ] Count how many numbers you checked with a `checks` counter
- [ ] Print the answer and the count

**Part B — Work Smarter**
- [ ] The answer must be divisible by 10, so only **multiples of 10** can possibly work. Start a new search at `10` and add `10` each time.
- [ ] Multiples of 10 already pass the tests for 1, 2, 5, and 10, so only check the divisors that are left
- [ ] Rewrite the loop condition **without `!`** using De Morgan's Laws: "keep going while *any* test fails" (`||` with `!=`)
- [ ] Count the checks again and print both counts

**Part C — Think About It** (comment at the bottom)

1. Part B checks far fewer numbers than Part A. About how many times fewer, and why?
2. If a number is divisible by 8 and 9, which other divisors from 2–10 are automatically covered?
3. Using De Morgan's Laws, show that `!(a == 0 && b == 0)` is the same as `a != 0 || b != 0`.

**Starter Code — SmallestDivisible.java**

```java
public class SmallestDivisible
{
    public static void main(String[] args)
    {
        // ---------- Part A: brute force ----------
        int num = 1;
        int checks = 1;

        // TODO: while num is NOT divisible by every number from 2 to 10
        //       (write the condition as  !( ... && ... ) )
        //           num++ and checks++

        System.out.println("Part A: smallest number divisible by 1-10 is " + num);
        System.out.println("Numbers checked: " + checks);

        // ---------- Part B: only multiples of 10 ----------
        int candidate = 10;
        int checksB = 1;

        // TODO: while ANY remaining test fails (use || and !=, no !)
        //           candidate += 10 and checksB++

        System.out.println("Part B: " + candidate + " after checking " + checksB + " numbers");
    }
}
```

**Sample Output**

```text
Part A: smallest number divisible by 1-10 is 2520
Numbers checked: 2520
Part B: 2520 after checking 252 numbers
```

**Extension**

- [ ] Find the smallest number divisible by **every number from 1 to `n`** for any `n` the user enters. Writing out every test is no longer possible, so use a **nested loop**: an inner `for` loop checks divisors 2 through `n` and sets a `boolean` flag to `false` if any divisor fails. Check: for `n = 20` the answer is `232792560`.

**Submission**

- [ ] `SmallestDivisible.java` with block comment header
- [ ] Screenshot of the output and your Part C answers

**Grading:** AP CSA 5-point Assignment Rubric. Pay particular attention to:
- Part A uses `!( ... && ... )`; Part B uses the correct De Morgan form with `||` and `!=`
- The check counters are correct (no off-by-one)

### Check for Understanding

**1.** What is printed?

```java
int sum = 0;
for (int i = 1; i <= 20; i++)
{
    if (i % 4 == 0)
    {
        sum += i;
    }
}
System.out.println(sum);
```

<details>
<summary>Answer</summary>

`60`. The multiples of 4 are 4 + 8 + 12 + 16 + 20.
</details>

**2.** A method finds the largest of several user-entered temperatures and starts with `int max = 0;`. For which input would it give a wrong answer?

<details>
<summary>Answer</summary>

Any input where **every** temperature is negative, such as -5, -12, -3. The method would report 0. Start at `Integer.MIN_VALUE` or at the first value entered.
</details>

**3.** What is printed?

```java
int n = 9035;
int result = 0;
while (n > 0)
{
    result = result * 10 + n % 10;
    n /= 10;
}
System.out.println(result);
```

<details>
<summary>Answer</summary>

`5309`. Each pass moves the last digit of `n` onto the end of `result`, which reverses the number.
</details>

**4.** Why does `(double) sum / count` need the cast, and what must you check first?

<details>
<summary>Answer</summary>

Without the cast, `sum / count` is integer division and drops the decimal. First check that `count` is not 0: integer division by 0 throws an `ArithmeticException`.
</details>

**5.** What's wrong with this method?

```java
public static boolean hasZeroDigit(int num)
{
    while (num > 0)
    {
        if (num % 10 == 0)
        {
            return true;
        }
        else
        {
            return false;
        }
    }
    return false;
}
```

<details>
<summary>Answer</summary>

It only ever checks the **last** digit. Both branches `return`, so the loop never reaches a second pass. `hasZeroDigit(105)` returns `false`. Remove the `else` branch so `return false` happens only after the loop.
</details>

#############################################################################

## 2.10 Implementing String Algorithms

<details>
<summary>📌 Standards — 2.10</summary>

| Standard | Description |
| -------- | ----------- |
| ICT 5.8 | Create and use algorithms and solve problems |
| ICT 5.9 | Deconstruct large problems into components |
| C4.6 | Use proper programming language syntax |
| C4.9 | Create programs using control structures and variables |
| CRP 1 | Apply appropriate technical skills and academic knowledge |
| CRP 5 | Utilize critical thinking to make sense of problems |

</details>

- [ ] Traverse a String one character at a time with a loop.
- [ ] Find, count, and replace substrings.
- [ ] Build a new String in a loop, including a reversed String.
- [ ] Avoid `StringIndexOutOfBoundsException` at the end of a String.

> **College Board Note:** The AP CED's standard String algorithms are: finding whether a String contains a substring with a given property, counting substrings that meet a criterion, and creating a new String with the characters reversed. The AP Java Quick Reference gives you `length`, `substring`, `indexOf`, `equals`, and `compareTo`, but not `charAt`. AP solutions pull one character at a time with `str.substring(i, i + 1)`.

**The Traversal Pattern**

```java
String word = "banana";
for (int i = 0; i < word.length(); i++)
{
    String letter = word.substring(i, i + 1);   // one character, as a String
    System.out.print(letter + " ");             // b a n a n a
}
```

Indexes run from `0` to `length() - 1`, so the condition is `i < word.length()`. `substring(i, i + 1)` is safe at the last index, because the end index may equal `length()`.

**Counting Matches** (frequency count on a String)

```java
String text = "Mississippi";
int sCount = 0;
for (int i = 0; i < text.length(); i++)
{
    if (text.substring(i, i + 1).equals("s"))
    {
        sCount++;                               // 4
    }
}
```

**Checking a Set of Characters with `indexOf`**

`"aeiou".indexOf(letter)` returns `-1` when `letter` isn't in the set, so one call replaces five comparisons:

```java
if ("aeiouAEIOU".indexOf(letter) >= 0)     // letter is a vowel
```

**Searching for a Longer Substring**

When the target is longer than one character, **stop early** so `substring` doesn't run past the end:

```java
String dna = "GATTACATTA";
String target = "TTA";
int found = 0;
for (int i = 0; i <= dna.length() - target.length(); i++)
{
    if (dna.substring(i, i + target.length()).equals(target))
    {
        found++;                                // 2 (at index 2 and index 7)
    }
}
```

> **Exam Note (AP + Oracle):** Running `substring(i, i + 3)` all the way to `i < dna.length()` throws a `StringIndexOutOfBoundsException` near the end. The last legal start index for a target of length `t` is `length() - t`.

**Building a New String: Reverse**

```java
String original = "stressed";
String reversed = "";
for (int i = original.length() - 1; i >= 0; i--)
{
    reversed += original.substring(i, i + 1);
}
System.out.println(reversed);                   // desserts
```

Compare this with 1.16.2 Palindrome Checker, where `StringBuilder.reverse()` did the work for you. Now you know what's inside.

**Replacing as You Build**

```java
// Replace every space with an underscore
String phrase = "AP CS A rocks";
String result = "";
for (int i = 0; i < phrase.length(); i++)
{
    String ch = phrase.substring(i, i + 1);
    result += ch.equals(" ") ? "_" : ch;
}
System.out.println(result);                     // AP_CS_A_rocks
```

### Exercise 2.10.A — Predict the Output

```java
String s = "computer";
String out = "";
for (int i = 1; i < s.length(); i += 2)
{
    out = s.substring(i, i + 1) + out;
}
System.out.println(out);
```

<details>
<summary>Sample Answer</summary>

`rtpo`. The loop visits indexes 1, 3, 5, and 7, which hold `o`, `p`, `t`, and `r`. Each letter is added to the **front** of `out`:

| `i` | letter | `out` after |
| :-: | :----: | :---------: |
| 1 | `o` | `o` |
| 3 | `p` | `po` |
| 5 | `t` | `tpo` |
| 7 | `r` | `rtpo` |

</details>

### Exercise 2.10.B — Write the Method

```java
/** Returns the number of times target appears in str. Overlapping matches count.
 *  countOccurrences("banana", "ana") returns 2; countOccurrences("aaaa", "aa") returns 3.
 *  Precondition: target.length() > 0 */
public static int countOccurrences(String str, String target)
{
    /* your code here */
}
```

<details>
<summary>Sample Answer</summary>

```java
public static int countOccurrences(String str, String target)
{
    int count = 0;
    for (int i = 0; i <= str.length() - target.length(); i++)
    {
        if (str.substring(i, i + target.length()).equals(target))
        {
            count++;
        }
    }
    return count;
}
```

If `target` is longer than `str`, the condition is false right away and the method correctly returns 0.

</details>

### Exercise 2.10.C — Write the Method

```java
/** Returns true if str contains at least one digit character (0-9).
 *  hasDigit("R2D2") is true; hasDigit("Java") is false. */
public static boolean hasDigit(String str)
{
    /* your code here */
}
```

<details>
<summary>Sample Answer</summary>

```java
public static boolean hasDigit(String str)
{
    for (int i = 0; i < str.length(); i++)
    {
        if ("0123456789".indexOf(str.substring(i, i + 1)) >= 0)
        {
            return true;
        }
    }
    return false;
}
```

</details>

### Activity 2.10.1 — EveryOther, Vowels, dbpq

**Overview**

Three String algorithms, each built the same way: **traverse the String one character at a time and build a new String**. Write each one as a method that **returns** the new String, the same shape as an AP free-response method.

> **College Board Note:** The AP Java Quick Reference lists `substring`, `indexOf`, `length`, `equals`, and `compareTo`, but not `charAt`. Get comfortable pulling one character as a String with `str.substring(i, i + 1)`. That's what AP solutions use.

By the end of this activity you will be able to:
- [ ] Traverse a String with a loop and `substring(i, i + 1)`
- [ ] Build a result String by concatenating inside a loop
- [ ] Test whether a character belongs to a set using `indexOf`
- [ ] Handle edge cases: an empty String and a one-character String

**The Three Methods**

**1. `everyOther(String str)`** keeps the characters at indexes 0, 2, 4, ...

| Input | Output |
| ----- | ------ |
| `"abcdefg"` | `"aceg"` |
| `"HelloWorld"` | `"Hlool"` |
| `""` | `""` |
| `"A"` | `"A"` |
| `"123456"` | `"135"` |

**2. `removeVowels(String str)`** removes upper- and lowercase vowels

| Input | Output |
| ----- | ------ |
| `"Hello World"` | `"Hll Wrld"` |
| `"AEIOUaeiou"` | `""` |
| `"Programming"` | `"Prgrmmng"` |
| `"ChatGPT"` | `"ChtGPT"` |
| `"Beautiful Day"` | `"Btfl Dy"` |

**3. `scrambleDBPQ(String str)`** replaces every **lowercase** `d`, `b`, `p`, or `q` with a randomly chosen `d`, `b`, `p`, or `q`. Every other character stays the same.

| Input | One possible output |
| ----- | ------------------- |
| `"badquip"` | `"pabbuib"` |
| `"ddbbpq"` | `"dpdbqb"` |
| `"hello"` | `"hello"` (nothing to replace) |

**To Do**

- [ ] Add the required block comment header and print the **run stamp** (2.06a) first
- [ ] Write all three methods as `public static String` methods that **return** the new String
- [ ] Use `substring(i, i + 1)` to get each character
- [ ] `removeVowels`: test each character with `"aeiouAEIOU".indexOf(letter)`
- [ ] `scrambleDBPQ`: test each character with `"dbpq".indexOf(letter)`, then pick a random index 0–3 and take that letter from `"dbpq"`
- [ ] Use a `Random` with a test-mode `SEED` (see 2.07a.1) so your scramble output can be repeated for testing
- [ ] In `main`, call each method on **every** input in its table and print the results, then let the user type their own text and run all three methods on it

**Sample Output** (test mode, seed 10. Scrambled results depend on your seed.)

```text
Run: 10/11/2026 01:04 PM
=== Program 1: everyOther ===
"abcdefg"    -> "aceg"
"HelloWorld" -> "Hlool"
""           -> ""
"A"          -> "A"
"123456"     -> "135"
=== Program 2: removeVowels ===
"Hello World"   -> "Hll Wrld"
"AEIOUaeiou"    -> ""
"Programming"   -> "Prgrmmng"
"ChatGPT"       -> "ChtGPT"
"Beautiful Day" -> "Btfl Dy"
=== Program 3: scrambleDBPQ (test mode, seed 10) ===
"badquip" -> "pabbuib"
"ddbbpq"  -> "dpdbqb"
"hello"   -> "hello"
Your own text: Bob dipped a pear
everyOther:   "Bbdpe  er"
removeVowels: "Bb dppd  pr"
scrambleDBPQ: "Bob piqqep a bear"
```

**Think About It** (comment at the bottom)

1. Why doesn't `everyOther("")` crash, even though the loop calls `substring`?
2. In `scrambleDBPQ("Bob dipped a pear")`, the capital `B` wasn't replaced. Why? How would you include capitals?
3. `everyOther` can be written by stepping `i += 2`, or by stepping `i++` with an `if`. How many times does each version's loop run for a String of length 10?

**Submission**

- [ ] `StringAlgorithms.java` with block comment header
- [ ] Test Cases document: every row of all three tables (scramble results with your seed), plus one input of your own

**Grading:** AP CSA 5-point Assignment Rubric.

### Activity 2.10.2 — wordCount and vowelCount

**Overview**

Count the words and vowels in a phrase. The starting hint, *words = spaces + 1*, works for neat input. In Part B you'll find inputs that break it and write a version that doesn't break.

By the end of this activity you will be able to:
- [ ] Count characters that meet a condition while traversing a String (2.09 frequency count)
- [ ] Find the inputs that break a simple algorithm
- [ ] Track state across loop iterations with a `boolean` variable

**To Do**

- [ ] Add the required block comment header and print the **run stamp** (2.06a) first
- [ ] Write `public static int wordCount(String phrase)` that counts spaces and returns spaces + 1
- [ ] Write `public static int vowelCount(String phrase)` that counts upper- and lowercase vowels
- [ ] Use `substring(i, i + 1)` to examine each character
- [ ] **Part B — Break it:** test `wordCount` with an empty String and with `"  two   spaces  "`. In a comment, record what it returns and why it's wrong.
- [ ] **Part B — Fix it:** write `public static int robustWordCount(String phrase)`. A new word starts wherever a non-space character comes right after a space (or at the very start). Use a `boolean inWord` to remember whether the previous character was part of a word.

**Sample Output**

```text
Run: 10/11/2026 01:04 PM
Enter a phrase:
This phrase has eight words and twelve vowels.
Words: 8
Vowels: 12
Words (Part B, robust): 8
```

When the input is `"  two   spaces  "`:

```text
Words: 8
Vowels: 3
Words (Part B, robust): 2
```

**Think About It** (comment at the bottom)

1. Why does the spaces + 1 method say an empty String has 1 word?
2. Your `robustWordCount` uses the `boolean` to "remember" the previous character. What other algorithm in this unit remembered something from an earlier iteration?
3. Does your `vowelCount` count `y`? Should it? Defend your choice in one sentence.

**Submission**

- [ ] `WordVowelCount.java` with block comment header
- [ ] Test Cases document: the sample phrase, an empty String, a single word, extra spaces, and a phrase with no vowels

**Grading:** AP CSA 5-point Assignment Rubric.

### Check for Understanding

**1.** What is printed?

```java
String w = "level";
int count = 0;
for (int i = 0; i < w.length(); i++)
{
    if (w.substring(i, i + 1).equals("e"))
    {
        count++;
    }
}
System.out.println(count);
```

<details>
<summary>Answer</summary>

`2`
</details>

**2.** This loop throws an exception. Fix the header.

```java
String s = "abcdef";
for (int i = 0; i < s.length(); i++)
{
    System.out.println(s.substring(i, i + 2));
}
```

<details>
<summary>Answer</summary>

On the last pass (`i = 5`), `substring(5, 7)` goes past the end. Use `i < s.length() - 1` (or `i <= s.length() - 2`).
</details>

**3.** What does `"programming".indexOf("m")` return? What about `"programming".indexOf("z")`?

<details>
<summary>Answer</summary>

`6` (the first `m`) and `-1` (not found).
</details>

**4.** What is printed?

```java
String s = "abc";
String t = "";
for (int i = 0; i < s.length(); i++)
{
    t = t + s.substring(i, i + 1) + s.substring(i, i + 1);
}
System.out.println(t);
```

<details>
<summary>Answer</summary>

`aabbcc`
</details>

**5.** Write a loop header that visits every index of `str` from the **last** index to the first.

<details>
<summary>Answer</summary>

`for (int i = str.length() - 1; i >= 0; i--)`
</details>

#############################################################################

## Unit 2 Mini-Project — Mad Libs

<details>
<summary>📌 Standards — Mini-Project</summary>

| Standard | Description |
| -------- | ----------- |
| ICT 2.0 | Communications — communicate clearly in written and electronic formats |
| ICT 5.8 | Create and use algorithms and solve problems |
| ICT 5.9 | Deconstruct large problems into components |
| C4.6 | Use proper programming language syntax |
| C4.9 | Create programs using control structures, procedures, and variables |
| C4.11 | Document development work using comments |
| C5.5 | Implement a solution |
| CRP 1 | Apply appropriate technical skills and academic knowledge |
| CRP 2 | Communicate clearly, effectively, and with reason |
| CRP 5 | Utilize critical thinking to make sense of problems |

</details>

- [ ] Write String algorithms that find, process, and replace parts of a text.
- [ ] Use loops to keep the user on track with clear prompts and validation.
- [ ] Build a complete, readable story from user input.
	- [ ] I will build a Mad Libs program that writes a different story for every user.

**Overview**

In a Mad Lib, a story has blanks labeled with a part of speech, like `[noun]` or `[adjective]`. The player fills each blank without seeing the story, and the result is usually ridiculous. Your program does the hard part: it **finds** each blank in the story, **asks** for the right kind of word, **replaces** the blank, and **assembles** the finished story.

**Required File:** `MadLibs.java`

**Submission:** One PDF with your code, sample runs, and test values, plus your `.java` file

---

#### How the Algorithm Works

Your story is one String with blanks written in square brackets:

```java
String story = "It was a [adjective] morning when a [noun] wandered into the CS lab. ...";
```

The core algorithm repeats until no `[` remains:

```text
open ← position of "[" in story
WHILE open is not -1
    close ← position of "]" after open
    partOfSpeech ← the text between open and close
    ask the user for a word of that type
    story ← (text before "[") + answer + (text after "]")
    open ← position of the next "[" in story
```

Because the story itself shrinks and grows as blanks are replaced, the loop always searches the **updated** story for the next `[`.

---

#### Requirements

Your program must:

1. Store the incomplete Mad Lib in a `String` variable with **at least five sentences** and **at least five blanks**
2. Display the **original** story (with its blanks) before asking for any words
3. Use a `while` loop with `indexOf` and `substring` to **find each blank**, read its part of speech, and **replace** it with the user's answer. Write this as a method: `public static String fillBlanks(String text)`.
4. Keep the user on track:
   - each prompt names the part of speech: `Enter a(n) adjective:`
   - re-prompt (loop) if the user enters a blank answer
5. Use **numbers**: include a `[number]` blank. Re-prompt until the answer contains only digits (check each character), convert it with `Integer.parseInt`, and use it in a calculation that appears in the finished story.
6. Include a **section choice**: offer at least two different endings (or middle sections). Re-prompt until the choice is valid, use selection to include the chosen section, and fill its blanks with the same `fillBlanks` method.
7. Fix grammar: change `a` to `an` before words that start with a vowel (`a iguana` → `an iguana`)
8. Display the completed story with a final print statement
9. Include a **test mode**: a `final boolean TEST_MODE` that, when `true`, supplies answers from a String of test values (for example `"enormous,iguana,backpack,..."`) instead of the keyboard, so your program can be tested the same way every time

---

**Sample Output** (test mode. Your story and words will be your own.)

```text
Run: 10/11/2026 01:18 PM
=== THE ORIGINAL STORY ===
It was a [adjective] morning at school when a [noun] wandered into the CS lab. It climbed onto a [noun] and refused to leave. Everyone tried to [verb] to scare it away, but nothing worked. Then [name] walked in with a [adjective] grin. "I have practiced this for [number] years," they said.

Enter a(n) adjective: enormous
Enter a(n) noun: iguana
Enter a(n) noun: backpack
Enter a(n) verb: juggle
Enter a(n) name: Mr. Okafor
Enter a(n) adjective: elegant
Enter a whole number: 17
Choose an ending (1 = happy, 2 = mysterious): 2
Enter a(n) noun: octopus

=== YOUR STORY ===
It was an enormous morning at school when an iguana wandered into the CS lab. It climbed onto a backpack and refused to leave. Everyone tried to juggle to scare it away, but nothing worked. Then Mr. Okafor walked in with an elegant grin. "I have practiced this for 17 years," they said. They whispered a secret, and the octopus vanished in a puff of semicolons. That's about 6205 days of practice!
```

**Hints**

- `text.indexOf("]", open)` searches for `]` starting at position `open`.
- To check "only digits," loop through the answer and use `"0123456789".indexOf(...)`, the same technique as `hasDigit` in 2.10.
- To read test values one at a time, find the first comma with `indexOf(",")`, take the text before it, then keep the rest for next time.

---

### Mad Libs Rubric

Each concept is worth **1 point**, awarded when it is used correctly and meaningfully.

| # | Category | Concept | What to Demonstrate | Pts |
|:-:|----------|---------|---------------------|:---:|
| 1 | Structure | Class and main | Class name matches the file name; program runs from `main` | 1 |
| 2 | Structure | Naming | camelCase for variables and methods; `final` constants in ALL_CAPS | 1 |
| 3 | Story | Mad Lib variable | Incomplete story stored in a `String` variable: 5+ sentences, 5+ blanks | 1 |
| 4 | Story | Original displayed | The story with its blanks is printed before any prompts | 1 |
| 5 | 2.10 Algorithms | Find the blanks | A `while` loop with `indexOf` locates each `[ ]` and extracts the part of speech with `substring` | 1 |
| 6 | 2.10 Algorithms | Replace the blanks | Each blank is replaced with the user's word using `substring` and concatenation in `fillBlanks` | 1 |
| 7 | 2.07 Loops | Stay on track | Prompts name the part of speech; blank answers are re-prompted | 1 |
| 8 | 2.10 Algorithms | Number validation | The `[number]` answer is checked character by character before `Integer.parseInt` | 1 |
| 9 | Numbers | Calculation | The number is used in a calculation that appears in the story | 1 |
| 10 | Selection | Section choice | A validated choice decides which section is included, and its blanks are filled too | 1 |
| 11 | 2.10 Algorithms | Grammar fix | `a` becomes `an` before vowel-starting words | 1 |
| 12 | String Methods | String class | Uses at least four String methods meaningfully (e.g., `indexOf`, `substring`, `length`, `equals`, `trim`) | 1 |
| 13 | Testing | Test mode | `TEST_MODE` supplies repeatable test values; the PDF shows a test-mode run | 1 |
| 14 | Output | Final story | Completed story is printed at the end with correct sentence structure and spacing | 1 |
| 15 | Documentation | Comments and header | Block comment header completed; comments describe each algorithm | 1 |
| 16 | Submission | Compiles & runs | Compiles and completes a full run without errors | 1 |
| | | | **TOTAL** | **16** |

**Penalties** (from the original scoring guidelines):
- **−1** for sentence structure or grammar problems in the finished story (beyond what the player typed)
- **−1** for any input that causes a run-time error (for example, a non-number crashing `parseInt`)

#############################################################################

## 2.11 Nested Iteration

<details>
<summary>📌 Standards — 2.11</summary>

| Standard | Description |
| -------- | ----------- |
| ICT 5.8 | Create and use algorithms and solve problems |
| ICT 5.9 | Deconstruct large problems into components |
| C4.6 | Use proper programming language syntax |
| C4.9 | Create programs using control structures and variables |
| CRP 1 | Apply appropriate technical skills and academic knowledge |
| CRP 5 | Utilize critical thinking to make sense of problems |

</details>

- [ ] Write nested loops (a loop inside another loop).
- [ ] Determine how many times the inner loop body executes.
- [ ] Trace nested loops where the inner loop depends on the outer loop variable.

**How Nested Loops Run**

The inner loop runs **all the way through** for **each single pass** of the outer loop.

```java
for (int row = 1; row <= 3; row++)
{
    for (int col = 1; col <= 4; col++)
    {
        System.out.print(row * col + "\t");
    }
    System.out.println();      // end the row AFTER the inner loop finishes
}
```

```text
1	2	3	4
2	4	6	8
3	6	9	12
```

The outer loop runs 3 times. Each time, the inner loop runs 4 times, so the inner body runs **3 × 4 = 12** times.

**When the Inner Loop Depends on the Outer Loop**

```java
for (int row = 1; row <= 4; row++)
{
    for (int col = 1; col <= row; col++)    // inner count grows with row
    {
        System.out.print("*");
    }
    System.out.println();
}
```

```text
*
**
***
****
```

The inner body runs 1 + 2 + 3 + 4 = **10** times. In general, 1 + 2 + ... + n = **n(n + 1) / 2**.

**Nested Loops with Strings: Comparing Every Pair**

To compare every character with every **later** character, start the inner loop one past the outer index:

```java
String word = "letter";
int pairs = 0;
for (int i = 0; i < word.length(); i++)
{
    for (int j = i + 1; j < word.length(); j++)
    {
        if (word.substring(i, i + 1).equals(word.substring(j, j + 1)))
        {
            pairs++;           // matching pairs: e-e and t-t → 2
        }
    }
}
```

> **Exam Note (AP + Oracle):** A `return` inside nested loops exits the whole method. A `break` (Oracle) exits only the **innermost** loop, and the outer loop keeps going.

### Exercise 2.11.A — Count the Executions

How many times does `count++` execute in each segment?

```java
// Segment 1
for (int a = 0; a < 5; a++)
    for (int b = 0; b < 3; b++)
        count++;

// Segment 2
for (int a = 1; a <= 5; a++)
    for (int b = a; b <= 5; b++)
        count++;

// Segment 3
for (int a = 0; a < 4; a++)
    for (int b = 0; b < a; b++)
        count++;
```

<details>
<summary>Sample Answer</summary>

1. **15** — 5 outer passes × 3 inner passes
2. **15** — the inner loop runs 5, 4, 3, 2, 1 times
3. **6** — the inner loop runs 0, 1, 2, 3 times

</details>

### Exercise 2.11.B — Write the Method

```java
/** Returns true if any character appears more than once in str.
 *  hasRepeat("java") is true; hasRepeat("code") is false. */
public static boolean hasRepeat(String str)
{
    /* your code here */
}
```

<details>
<summary>Sample Answer</summary>

```java
public static boolean hasRepeat(String str)
{
    for (int i = 0; i < str.length(); i++)
    {
        for (int j = i + 1; j < str.length(); j++)
        {
            if (str.substring(i, i + 1).equals(str.substring(j, j + 1)))
            {
                return true;
            }
        }
    }
    return false;
}
```

Starting `j` at `i + 1` compares each pair only once and never compares a character with itself.

</details>

### Activity 2.11.1 — Java Patterns: Nested Loop Art

**Overview**

Every ASCII pattern is a grid of rows and columns, which makes it a perfect fit for **nested loops**: the outer loop chooses the **row**, and the inner loop prints what goes **in that row**. You'll build **six** patterns: four required ones that each teach a different nested-loop shape, plus two of your choice from the challenge menu.

By the end of this activity you will be able to:
- [ ] Write nested loops where the inner loop runs a fixed number of times (rectangles)
- [ ] Write nested loops where the inner loop depends on the outer loop variable (triangles)
- [ ] Use **two** inner loops in one row (spaces, then symbols) to center a shape
- [ ] Count how many times a nested loop body executes (2.12)

**The Three Nested-Loop Shapes**

| Shape | Inner loop condition | Example |
| ----- | -------------------- | ------- |
| Rectangle | `col <= n` (same every row) | Solid square |
| Triangle | `col <= row` (grows with the row) | Right triangle |
| Centered | one loop for `n - row` spaces, then one for the symbols | Pyramid |

**Required Patterns** (all four)

```text
A. Solid Square       B. Right Triangle     C. Number Triangle    D. Star Pyramid
*****                 *                     1                         *
*****                 **                    12                       ***
*****                 ***                   123                     *****
*****                 ****                  1234                   *******
*****                 *****                 12345                 *********
```

**Challenge Menu** (choose **any two**)

```text
E. Hollow Square      F. Number Pyramid     G. Inverted Triangle  H. Diamond
*****                     1                 *****                     *
*   *                    121                ****                     ***
*   *                   12321               ***                     *****
*   *                  1234321              **                     *******
*****                 123454321             *                     *********
                                                                   *******
                                                                    *****
                                                                     ***
                                                                      *
```

```text
I. Checkerboard         J. Floyd's Triangle     K. Times Table
#.#.#                     1                        1   2   3   4   5
.#.#.                     2  3                     2   4   6   8  10
#.#.#                     4  5  6                  3   6   9  12  15
.#.#.                     7  8  9 10               4   8  12  16  20
#.#.#                    11 12 13 14 15            5  10  15  20  25
```

**To Do**

- [ ] Add the required block comment header and print the **run stamp** (2.06a) first
- [ ] Write each pattern as its own `public static void` method that takes the size `n` as a parameter, for example `solidSquare(int n)`
- [ ] In `main`, set `int n = 5;`, print a label for each pattern, and call all six methods
- [ ] Every pattern must use **nested loops**. Build each line one character at a time with `print`. No `String.repeat()`, and no hard-coded rows like `System.out.println("*****");`.
- [ ] Each pattern must still be correct when you change `n` to 3 and to 7
- [ ] **Run-time comments (2.12):** above `solidSquare` and `rightTriangle`, state how many times the inner loop body runs when `n = 5`, **and** write a formula in terms of `n`
- [ ] Above each challenge pattern, add a comment explaining which nested-loop shape(s) it uses

**Hints**

- `System.out.print("*")` stays on the same line; `System.out.println()` ends the row.
- For centered patterns, row `r` of `n` needs `n - r` spaces, then `2r - 1` symbols.
- Hollow square: print `*` when the position is on an edge (first or last row, first or last column), and a space otherwise.
- Checkerboard: `(row + col) % 2 == 0` alternates like a chessboard.

**Sample Output** (first two patterns; yours continues with all six)

```text
A. Solid Square
*****
*****
*****
*****
*****

B. Right Triangle
*
**
***
****
*****
```

**Submission**

- [ ] `Patterns.java` with block comment header
- [ ] Screenshots of the output with `n = 5` **and** `n = 7`

**Grading:** AP CSA 5-point Assignment Rubric. Pay particular attention to:
- All six patterns use nested loops and work for any `n`
- The run-time formulas for patterns A and B are correct

### Check for Understanding

**1.** What is printed?

```java
for (int i = 1; i <= 3; i++)
{
    for (int j = 1; j <= 2; j++)
    {
        System.out.print(i + "" + j + " ");
    }
}
```

<details>
<summary>Answer</summary>

`11 12 21 22 31 32 `
</details>

**2.** How many times is `"#"` printed?

```java
for (int r = 0; r < 6; r++)
{
    for (int c = r; c < 6; c++)
    {
        System.out.print("#");
    }
}
```

<details>
<summary>Answer</summary>

**21** (6 + 5 + 4 + 3 + 2 + 1).
</details>

**3.** What is printed?

```java
int total = 0;
for (int x = 1; x <= 3; x++)
{
    for (int y = 1; y <= x; y++)
    {
        total += y;
    }
}
System.out.println(total);
```

<details>
<summary>Answer</summary>

`10`. The passes add 1, then 1 + 2, then 1 + 2 + 3.
</details>

**4.** In a pattern program, what goes wrong if `System.out.println()` is placed **inside** the inner loop instead of after it?

<details>
<summary>Answer</summary>

Every character prints on its own line, so the shape collapses into a single column.
</details>

#############################################################################

## 2.12 Informal Run-Time Analysis

<details>
<summary>📌 Standards — 2.12</summary>

| Standard | Description |
| -------- | ----------- |
| ICT 5.4 | Interpret information and draw conclusions to make informed decisions |
| ICT 5.9 | Deconstruct large problems into components |
| ICT 10.1 | Interpret and explain ICT-specific terminology |
| C4.6 | Use proper programming language syntax |
| CRP 1 | Apply appropriate technical skills and academic knowledge |
| CRP 5 | Utilize critical thinking to make sense of problems |

</details>

- [ ] Count how many times a statement executes for a given input.
- [ ] Write a statement-execution count in terms of a variable like `n`.
- [ ] Compare two algorithms that solve the same problem by the amount of work they do.

> **College Board Note:** The AP exam measures efficiency **informally**: you count how many times a statement executes. You won't be asked for Big-O notation. Typical questions: *"How many times is the statement `x++` executed?"* or *"Which code segment performs the fewest iterations?"*

**Counting Statement Executions**

| Loop | Times the body runs |
| ---- | ------------------- |
| `for (int i = 0; i < n; i++)` | `n` |
| `for (int i = 1; i <= n; i++)` | `n` |
| `for (int i = 0; i < n; i += 2)` | about `n / 2` (exactly `(n + 1) / 2` with integer division) |
| `for (int i = 1; i < n; i *= 2)` | about the number of times `n` can be halved |
| Two nested loops, each `n` | `n × n` |
| Inner loop runs `1, 2, ..., n` times | `n(n + 1) / 2` |

**Same Problem, Different Work**

You've already seen this in action:

| Activity | Version 1 | Version 2 |
| -------- | --------- | --------- |
| 2.09.1 Smallest Divisible | checked **2,520** numbers | multiples of 10 only: **252** |
| 2.10.1 `everyOther` | `i++` with an `if`: **n** passes | `i += 2`: about **n / 2** passes |
| 2.07.2 Is a Factor? | repeated subtraction: up to **number ÷ divisor** passes | `%`: **1** operation |

Both versions in each pair give the same answer. The second does less work, and on large inputs that difference becomes real time, which you'll measure in 2.12.1.

**Tracing Tools**

These visualizers step through Java code one line at a time and show every variable, which is a great way to check a trace table:

- [Java Visualizer (CS Circles)](https://cscircles.cemc.uwaterloo.ca/java_visualize/)
- [Python Tutor (Java mode)](https://pythontutor.com/render.html#mode=display)

### Exercise 2.12.A — Count It

How many times does `sum++` execute?

```java
// Segment 1
for (int i = 0; i < 20; i += 4)
    sum++;

// Segment 2
for (int i = 1; i <= 64; i *= 2)
    sum++;

// Segment 3
for (int i = 0; i < 10; i++)
    for (int j = 0; j < 10; j++)
        if (j % 2 == 0)
            sum++;
```

<details>
<summary>Sample Answer</summary>

1. **5** (`i` = 0, 4, 8, 12, 16)
2. **7** (`i` = 1, 2, 4, 8, 16, 32, 64)
3. **50** — 10 × 10 = 100 inner passes, and the `if` is true for half of them (`j` = 0, 2, 4, 6, 8)

</details>

### Exercise 2.12.B — Which Is Faster?

Both segments print the same sum of the even numbers from 2 to `n`. In terms of `n`, how many times does each loop body run? Which does less work?

```java
// Segment A
int sumA = 0;
for (int i = 1; i <= n; i++)
{
    if (i % 2 == 0)
    {
        sumA += i;
    }
}

// Segment B
int sumB = 0;
for (int i = 2; i <= n; i += 2)
{
    sumB += i;
}
```

<details>
<summary>Sample Answer</summary>

Segment A's body runs **`n`** times. Segment B's body runs about **`n / 2`** times (exactly `n / 2` with integer division). **Segment B** does about half the work, and there's an even faster way: the formula `(n / 2) * (n / 2 + 1)` needs no loop at all.

</details>

### Activity 2.12.1 — Event Timer

**Overview**

How long does a loop take? You'll record the time before and after a `for` loop that adds up the numbers 1 to `n`, then calculate the difference with `Duration`. Running it with bigger and bigger values of `n` connects what you counted on paper in 2.12 to real time on a real computer: more iterations take more time.

**To Do**

- [ ] Add the required block comment header
- [ ] Read `n` with `Scanner` (use `nextLong()`)
- [ ] Record `LocalTime start = LocalTime.now();` just before the loop (2.06a)
- [ ] Use a `for` loop to add 1 through `n` into a sum. The sum must be a **`long`**, because adding to a billion overflows an `int` (recall 1.05 ranges).
- [ ] Record `LocalTime end = LocalTime.now();` right after the loop
- [ ] Print the start and end times with the pattern `HH:mm:ss.SSS`, the sum, and the elapsed time from `Duration.between(start, end)` in **milliseconds** (`toMillis()`) and **nanoseconds** (`toNanos()`)
- [ ] Run it with `n` = 1,000,000, then 100,000,000, then 1,000,000,000. In a comment, record the three times and describe the pattern.

**Sample Output** (times vary by computer and run)

```text
How many numbers should the loop add? 100000000
Start time: 12:46:06.006
End time:   12:46:06.089
Sum of 1 to 100000000 = 5000000050000000
Elapsed:    83 ms (83157726 ns)
```

**Think About It** (comment at the bottom)

1. When `n` grows 10 times bigger, about how much does the time grow?
2. Why does the sum need to be a `long`? What is the largest `int` (`Integer.MAX_VALUE`, 1.17)?
3. For very precise timing, programmers often use `System.nanoTime()` instead. Why might a clock time like `LocalTime` be less precise for very short loops?

**Submission:** `EventTimer.java` with your three recorded times in a comment. No test cases needed.

**Grading:** AP CSA 5-point Assignment Rubric.

### Check for Understanding

**1.** How many times is `x++` executed?

```java
for (int a = 0; a < 7; a++)
{
    x++;
}
for (int b = 0; b < 3; b++)
{
    x++;
}
```

<details>
<summary>Answer</summary>

**10.** The loops run one after the other (7 + 3), not nested (7 × 3).
</details>

**2.** How many times is `x++` executed?

```java
for (int a = 0; a < 7; a++)
{
    for (int b = 0; b < 3; b++)
    {
        x++;
    }
}
```

<details>
<summary>Answer</summary>

**21** (7 × 3).
</details>

**3.** A loop runs `n(n + 1) / 2` times. How many times does it run when `n = 10`? When `n = 100`?

<details>
<summary>Answer</summary>

**55** and **5,050**. Making `n` 10 times bigger made the work about 100 times bigger. That's the cost of a nested loop.
</details>

**4.** How many times does the loop body run?

```java
int n = 100;
while (n > 1)
{
    n = n / 2;
}
```

<details>
<summary>Answer</summary>

**6** (`n` goes 100 → 50 → 25 → 12 → 6 → 3 → 1).
</details>

#############################################################################

## Unit 2 End-of-Unit Project — Sevens

<details>
<summary>📌 Standards — End-of-Unit Project</summary>

| Standard | Description |
| -------- | ----------- |
| ICT 2.0 | Communications — communicate clearly in written and electronic formats |
| ICT 5.4 | Interpret information and draw conclusions to make informed decisions |
| ICT 5.8 | Create and use algorithms and solve problems |
| ICT 5.9 | Deconstruct large problems into smaller components |
| ICT 7.5 | Apply high-quality techniques to product design and development |
| C4.6 | Use proper programming language syntax |
| C4.7 | Use various data structures including objects |
| C4.8 | Use OOP concepts: properties, methods, and inheritance |
| C4.9 | Create programs using control structures, procedures, and variables |
| C4.11 | Document development work using comments |
| C5.4 | Design a solution to a problem |
| C5.5 | Implement a solution |
| CRP 1 | Apply appropriate technical skills and academic knowledge |
| CRP 2 | Communicate clearly, effectively, and with reason |
| CRP 5 | Utilize critical thinking to make sense of problems |
| CRP 7 | Act as a responsible and contributing citizen and employee |

</details>

- [ ] Apply selection **and** iteration from all of Unit 2 (2.01–2.12) in one cohesive program.
- [ ] Use a standard algorithm (frequency counting) to solve a real rule in a game.
- [ ] Design repeatable tests for a program that uses randomness.
	- [ ] I will demonstrate mastery of Unit 2 by building a two-player dice game.

**Overview**

The number 7 is usually considered lucky, but not in this game! In **Sevens**, any two dice that add up to 7 are taken away. Players try to finish each round with the highest total from the dice that are left, and they must decide when to stop rolling: another roll might help, or it might wipe out their score.

**Required Files:** `Sevens.java`, `SevensPlayer.java` (minimum)

---

### How to Play

**You need:** 2 players and 6 dice.

1. **Set up.** Choose the number of rounds (**1 to 10**). Player 1 goes first each round.
2. **Roll.** Player 1 rolls all six dice.
3. **Remove sevens.** Any **pair** of dice that adds up to 7 (1 + 6, 2 + 5, or 3 + 4) is removed and set aside for the rest of the turn. Each die can be in only one pair.
4. **Score.** Add up the dice that are left. That total is the player's current score.
5. **Roll again or stop.** A player may roll **up to three times** per turn. A re-roll uses **only the dice still in play**; set-aside dice stay out. If every die has been removed, the next roll uses **all six** again. After each roll, new sevens are removed and the score becomes the total of what's left. The score from the player's **last** roll is their score for the round.
6. **Player 2's turn.** Player 2 follows the same steps, but may roll **only as many times as Player 1 did** that round. If Player 1 rolled twice, Player 2 may roll up to twice.
7. **End of round.** Both round scores are added to the players' running totals.
8. **Winning.** After the last round, the higher total wins. Equal totals are a tie.

**Example Round**

*Player 1: Alex · Player 2: Jamie · 1 round · up to 3 rolls*

**Alex's turn**
- **Roll 1:** 2, 3, 4, 5, 1, 6 → removed (1, 6), (2, 5), (3, 4) → remaining: none → **total 0**
- Alex rolls again. Every die was removed, so Alex rolls all six.
- **Roll 2:** 2, 2, 3, 5, 4, 1 → removed (2, 5), (3, 4) → remaining: 2, 1 → **total 3**
- Alex stops and scores **3**. Alex rolled **twice**, so Jamie may roll up to twice.

**Jamie's turn**
- **Roll 1:** 6, 6, 3, 3, 2, 5 → removed (2, 5) → remaining: 6, 6, 3, 3 → **total 18**
- Jamie stops and scores **18**.

| Player | Roll Attempts | Round Score |
| ------ | :-----------: | :---------: |
| Alex | 2 | 3 |
| Jamie | 1 | 18 |

Jamie wins the round.

---

### The Key Idea: Counting Pairs

You might think you need to compare every die with every other die to find pairs. There's a much simpler way.

A 1 can **only** pair with a 6. A 2 can **only** pair with a 5. A 3 can **only** pair with a 4. So if you know **how many of each face** were rolled, the number of pairs is just the **smaller** count of each partner:

| Roll: 2, 2, 3, 5, 4, 1 | 1s | 6s | 2s | 5s | 3s | 4s |
| ---------------------- | :-: | :-: | :-: | :-: | :-: | :-: |
| Count | 1 | 0 | 2 | 1 | 1 | 1 |
| Pairs | min(1, 0) = **0** | | min(2, 1) = **1** | | min(1, 1) = **1** | |

That's 2 pairs: the score is the sum of all dice minus 7 for each pair (17 − 14 = **3**), and the dice still in play drop by 4 (two per pair).

Counting how many times each value appears is the **frequency count** algorithm from 2.09. Six counters, `c1` through `c6`, are all you need. No arrays required.

---

#### Part 1 — Plan First

- [ ] **Flowchart of one turn** (2.01): rolling, removing pairs, the "roll again?" decision, and the roll limit. Use correct symbols, with the loop drawn as an arrow back to a decision diamond.
- [ ] **Pseudocode** for counting the faces and computing the pairs, score, and dice remaining.

---

#### Part 2 — SevensPlayer.java

Stores one player's state. Requirements:

- [ ] Instance variables for the name, running total, this round's score, and this round's roll count
- [ ] A constructor that takes the name and initializes everything else to 0
- [ ] Accessor methods for each instance variable
- [ ] `public void recordRound(int score, int rolls)` stores this round's results **and** adds `score` to the running total
- [ ] `toString()` returns something like `Alex (total: 12)`

---

#### Part 3 — Sevens.java

Your game must:

1. Read both players' names, then the number of rounds. **Re-prompt** until the number is 1–10 (a `while` or `do-while` validation loop).
2. Use a `for` loop for the rounds and a `while` loop for the rolls in a turn. The roll loop keeps going while the player **has rolls left AND wants to keep rolling**.
3. Use a static method `rollDie()` that returns a random value from 1 to 6.
4. Use a static method `playTurn(SevensPlayer player, int maxRolls)` for one turn. Call it with `3` for Player 1 and with **Player 1's roll count** for Player 2.
5. On each roll:
   - roll exactly as many dice as are in play, using a `for` loop
   - build a display String of the dice, like `2, 3, 4, 5, 1, 6` (no comma after the last die)
   - count each face (`switch` or an `else if` chain)
   - compute pairs with `Math.min`, then the score and the dice remaining
   - print the roll, the removed pairs (or `none`), the remaining dice (or `none`), and the total
6. Print the remaining dice with a **nested loop**: for each face 1–6, an inner loop prints that face as many times as it is left.
7. Ask `Roll again? (y/n)` only when the player has rolls left, comparing the answer with `.equalsIgnoreCase()`.
8. After each round, print a scoreboard with `printf` and announce the round winner, **including ties**.
9. After the final round, print both players with `toString()` and announce the game winner, **including ties**.
10. **Test mode:** declare `private static final boolean TEST_MODE` and a `SEED`. When `TEST_MODE` is `true`, create your `Random` with the seed (`new Random(SEED)`) so the same dice come up every run. Set it to `false` before you submit.
11. In a comment above `playTurn`, state the **maximum number of times `rollDie()` can be called in one round** and show how you got it (2.12).

**Sample Output** (test mode, seed 7. Inputs: Alex, Jamie, `12` (rejected), `2`, then y, n, y, n, n, n)

```text
=== SEVENS ===
Player 1 name: Alex
Player 2 name: Jamie
How many rounds (1-10)? 12
Please enter a number from 1 to 10.
How many rounds (1-10)? 2

========== ROUND 1 of 2 ==========

Alex's turn (up to 3 rolls)
Roll 1: 5, 3, 4, 5, 5, 5
  Removed: (3, 4)
  Remaining: 5, 5, 5, 5
  Alex's total = 20
  Roll again? (y/n): y
Roll 2: 5, 6, 1, 1
  Removed: (1, 6)
  Remaining: 1, 5
  Alex's total = 6
  Roll again? (y/n): n
  Alex scores 6 this round.

Jamie's turn (up to 2 rolls)
Roll 1: 1, 1, 1, 2, 2, 5
  Removed: (2, 5)
  Remaining: 1, 1, 1, 2
  Jamie's total = 5
  Roll again? (y/n): y
Roll 2: 4, 1, 4, 4
  Removed: none
  Remaining: 1, 4, 4, 4
  Jamie's total = 13
  Jamie scores 13 this round.

Player       Roll Attempts  Round Score
Alex         2              6
Jamie        2              13
Jamie wins this round.

========== ROUND 2 of 2 ==========

Alex's turn (up to 3 rolls)
Roll 1: 5, 3, 4, 2, 3, 3
  Removed: (2, 5) (3, 4)
  Remaining: 3, 3
  Alex's total = 6
  Roll again? (y/n): n
  Alex scores 6 this round.

Jamie's turn (up to 1 roll)
Roll 1: 4, 5, 1, 6, 4, 4
  Removed: (1, 6)
  Remaining: 4, 4, 4, 5
  Jamie's total = 17
  Jamie scores 17 this round.

Player       Roll Attempts  Round Score
Alex         1              6
Jamie        1              17
Jamie wins this round.

========== FINAL ==========
Alex (total: 12)
Jamie (total: 30)
Jamie wins the game!
```

> Notice Alex's first round: re-rolling four 5s (a score of 20) turned into a 6. That's the risk in Sevens. Also notice Jamie's turns: the roll limit follows Alex's roll count each round.

---

#### Part 4 — Test Cases

Use test mode so every test can be repeated exactly. Record the seed you used with each test.

- [ ] An invalid round count (0 or 11) that gets re-prompted
- [ ] A roll where **all** dice are removed, followed by a re-roll of all six
- [ ] A roll with **two of the same pair**, such as (2, 5) (2, 5)
- [ ] Player 2's roll limit following Player 1's roll count (1, 2, and 3 rolls)
- [ ] A tied round and a final winner
- [ ] Each test lists: seed, inputs, expected output, actual output, Pass/Fail

> **Tip:** to find a seed that produces a situation you need (like all dice removed), try a few seeds and keep the one that works.

---

### Unit 2 End-of-Unit Project Rubric

Each concept below is worth **1 point**. Credit is awarded when the concept is used correctly and meaningfully, not simply present in the code. Partial credit is not awarded per concept.

| # | Category | Concept | What to Demonstrate | Pts |
|:-:|----------|---------|---------------------|:---:|
| 1 | 2.01 Algorithms | Flowchart | Flowchart of one turn with correct symbols, labeled decisions, and the roll loop drawn back to a decision | 1 |
| 2 | 2.01 Algorithms | Pseudocode | Pseudocode for face counting, pairs, score, and dice remaining | 1 |
| 3 | 2.02 Boolean Expressions | boolean variable | A `boolean` (such as `keepRolling`) stores a decision and controls the loop | 1 |
| 4 | 2.03 / 2.04 Selection | Round winner | `if / else if / else` correctly announces the round winner **or a tie** | 1 |
| 5 | 2.04 Selection | Game winner | Final winner logic correctly handles all three outcomes, including a tie | 1 |
| 6 | 2.04a Switch (Oracle) | switch | Uses a `switch` with `break` (and `default`) to count faces or choose remaining counts | 1 |
| 7 | 2.04a Ternary (Oracle) | Ternary operator | Uses `? :` meaningfully (for example, `roll`/`rolls`, or `none` when nothing is left) | 1 |
| 8 | 2.05 Compound Boolean | Loop condition | Roll loop condition combines rolls left **&&** wants to roll | 1 |
| 9 | 2.05 Compound Boolean | Input validation | Round validation uses `\|\|` (or `!` with `&&`) to reject values outside 1–10 | 1 |
| 10 | 2.06 Comparing Boolean | De Morgan's Law | A comment states when the roll loop **stops**, written as the correct De Morgan form of its condition | 1 |
| 11 | 2.06 Comparing Objects | String comparison | The y/n answer is compared with `.equalsIgnoreCase()` | 1 |
| 12 | 2.07 while Loops | while loop | Turn rolls are controlled by a `while` loop | 1 |
| 13 | 2.07 while Loops | Validation loop | Invalid round counts are re-prompted until valid | 1 |
| 14 | 2.07a do-while (Oracle) | do-while | Uses a `do-while` loop appropriately (for example, round validation) | 1 |
| 15 | 2.08 for Loops | for loop | Dice are rolled with a `for` loop that runs exactly once per die in play | 1 |
| 16 | 2.08 for Loops | No off-by-one | Exactly the chosen number of rounds is played, and Player 2's limit matches Player 1's rolls | 1 |
| 17 | 2.09 Algorithms | Frequency count | Counts each face value correctly | 1 |
| 18 | 2.09 Algorithms | Pairs and score | Uses `Math.min` on partner counts; score and dice remaining are correct, including all-removed re-rolls | 1 |
| 19 | 2.09 Algorithms | Accumulator | Running totals accumulate correctly across rounds | 1 |
| 20 | 2.10 String Algorithms | String building | Builds the dice display String in a loop with correct separators (no trailing comma) | 1 |
| 21 | 2.11 Nested Iteration | Nested loop | Remaining dice are printed with a nested loop (faces outer, count inner) | 1 |
| 22 | 2.12 Run-Time Analysis | Execution count | Comment correctly states the maximum `rollDie()` calls in one round, with reasoning | 1 |
| 23 | Unit 1 — OOP | SevensPlayer class | Required instance variables, constructor, and accessors; `recordRound` updates both round and total | 1 |
| 24 | Unit 1 — OOP | toString() | Overrides `toString()` and uses it in the final results | 1 |
| 25 | Unit 1 — Methods | Static methods | `rollDie()` and `playTurn(...)` are written and called correctly | 1 |
| 26 | Unit 1 — Random | Random with seed | Uses `Random`, with a seeded test mode controlled by a `final` constant | 1 |
| 27 | Unit 1 — Scanner | Input | Reads names (`String`), rounds (`int`), and y/n answers with one `Scanner` | 1 |
| 28 | Unit 1 — Formatting | printf scoreboard | Round scoreboard is aligned with `printf` | 1 |
| 29 | Documentation | Headers and comments | Required block comment header in **both** files, all fields completed; meaningful comments throughout | 1 |
| 30 | Submission | Test Cases | All Part 4 tests included with seeds, inputs, expected and actual output, Pass/Fail | 1 |
| 31 | Submission | Files | Flowchart, pseudocode, test cases, screenshots, and all `.java` files submitted (`TEST_MODE` set to `false`) | 1 |
| 32 | Submission | Compiles & runs | Program compiles without errors and plays a complete game without crashing | 1 |
| | | | **TOTAL** | **32** |

**Grading Notes:**
- Code must compile and run to receive credit for most concept points.
- A concept used only in a comment, or in code that never executes, does not earn its point (except points 10 and 22, which are comments by design).
- Point 18 requires correct handling of the all-removed case: the next roll uses all six dice.

#############################################################################
