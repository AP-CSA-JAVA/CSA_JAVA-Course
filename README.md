<p align="center">*** This course is designed to prepare students to take the <b>AP Computer Science A </b>Exam *** </br>
*** Excerpts from the course overview was taken from AP CollegeBoard ***</p> 

# AP Computer Science A Course Overview 

AP Computer Science A introduces students to computer science through programming. Fundamental topics in this course include the design of solutions to problems, the use of data structures to organize large sets of data, the development and implementation of algorithms to process data and discover new information, the analysis of potential solutions, and the ethical and social implications of computing systems. The course emphasizes object-oriented programming and design using the Java programming language.

The following big ideas serve as the foundation of the course, enabling students to create meaningful connections among concepts:</br>
<b>Modularity</b>: Modularity in object-oriented programming allows us to use abstraction to break complex programs down into individual classes and methods.</br>
<b>Variables</b>: Variables create data abstractions, as they can represent a set of possible values or a group of related values.</br>
<b>Control</b>: Doing things in order, making decisions, and doing thesame process multiple times are represented in code by usingcontrol structures.</br>
<b>Impact of Computing</b>: Computers and computing haverevolutionized our lives. To use computing safely and responsibly,we need to be aware of privacy, security, and ethical issues.</br>

For this course we will be using various Integrated Development Environment (IDE) software to help you manage your programs, data files, & images.  Coding Rooms will be our primary online IDE for this course.  For your personal development and collaboration, you may want to use an online IDE that will allow you to collaborate with peers.  If you are using a personal laptop, a good desktop IDE to install is VS Code. 

## Anatomy of a Java Program
<details><summary>Click Here</summary>
 <p>
  In this section, I will provide the basics of a Java program.  This information will be covered in more detail in Unit 5.  
  
  The topics that will be covered are:
  - Comments
  - Reserved Words
  - Modifiers
  - Statements
  - Blocks
  - Classes
  - Methods
  - The main method
  
  **Comments**
  - One-line comments are denoted with two forward slashes. //
  - Block comments are denoted with a forward slash followed by an asterisk and concludes with an asterisk followed by a forward slash.  It looks like this:  /* your comments here */
  - Comments are ignored during the program execution
  - Include a summary at the beginning of the program to explain what the program does, its features, its supporting data structures, and any unique techniques it uses.
  
  **Reserved Words**
  - Words that have a specific purpose for the compiler
  - These reserved words cannot be used for any other purpose in the program (variable, method, class, etc.)
  - Key words are lower case (Java is a case sensitive language)
  - Examples of key words include:
  
  |      |     |     |     |
  | --- | --- | --- | --- |
  | public | void | boolean | private |
  | class | int | continue | protected |
  | static | double | return | package |
  
  
  **Modifiers**
  - Java uses certain reserved words called modifiers that *specify the properties of the data, methods, and classes and how they can be used.
    - Examples include `public`, `static`, `private`, `final`, `abstract`, and `protected`
  - A `public` datum, method, or claqss can be accessed by other programs.
  - A `private` datum or method cannot be accessed by other programs.
  
  **Statements**
  - A statement is an action or a sequence of actions.
  - The print statement `System.out.println("Hello World!");` in the program is a statement to display the string "Hello World!"
  - Every statement in Java ends with a semicolon(;).
    
  **Blocks**
  - A pair of curly braces {} in a program forms a block that groups contents of a program to be executed.
  
  ```java
  public class Main {
     public static void main(String[] args) {
        System.out.println("Hello World!");
      }
  }
  ```
  
  **Classes**
  - The class is the most important construct in Java!
  - A class is a template or bluepring for objects. To program in Java you must understand classes and be able to write and use them.
  - A program is defined by using one or more classes.

  
  **Method**
  - `System.out.println` is a method.
  - Method is a collection of statements that performs a sequence of oeprations to display a message on the console.
  - It is used by invoking a statement with a string argument.  The string argument is enclosed within parentheses.
    - In this case, the argument is "Hellow World!"  YOu can call the same println method with a different argument to print a different message.
  
  **main() Method**
  - The main method provides the control of program flow.  The Java interpreter executes the application by invoking the main method.
  - The main method looks like this:
  
  ```java
  public static void main(String[] args) {
  
     // Statements;
  }
  ```
  
  
  **Programming Style and Documentation in Java**
  - Appropriate comments and comments style:
    - Include a summary at the beginning of the program to explain what the program does, its key features, its supporting data structures, and any unique techniques it uses.
    - Include your name, class, lecture's name, date, and a brief description of your code at the beginning of the program.
  
  
  **Comment Style**
  - A "block" comment is placed between /* and */ marks:
  - Example:
  
  ```java
  /* Activity 2.5.2 Java Methods
     Author: Your Name
     Date:   5/17/2023
     Notes:  Version 1  */
  ```
  - A single-line comment foes from // to the end of the line:
  ```java
     int x = 0; //variable for user quantity
  ```
  - Javadoc Comments are denoted with a forward slash and two asterisks and ends with one asterisk and a forward slash.  Each line will also have an asterisk.
  
  ```java
  /**
   *     Returns total sales from all vendors:
   *     sets <code>totalSales</code> // Can use HTML tags
   *     to 0.
   *
   *     @return total amount of sales from all vendors
   */
  ```
  
  
  **Naming Conventions**
  - Choose meaningful and descriptive names
  - Variables and method names:
    - User lowercase - if the name consists of several words, concatenate all into one, use lowercase for the first letter of the first word, and capitalize the first letter of each subsequent word in the name.
  - For example, the variables `radius` and `area`, and the method `computeArea`.
  - Class names:
    - Capitalize the first letter of each word in the name.
    - For example, the class name `ComputeArea`.
  - Constants:
    - Capitalize all letters in constants, and use underscores to connect words.
    - For example, the constant `PI` and `MAX_VALUE`.
  
  
  **Proper Indentation and Spacing**
  - Indentation
    - Indent two spaces
  - Spacing
    - Use blank line to separate segments of the code.
  
  
  **Block Styles**
  - Use end-of-line style for braces.
  
  
  ```java
  public class Main
  {  //  <-- Next-line style
    public static void main(String[] args)
    {
       System.out.println("Block Styles");
    }
  }
  ```

             
   ```java
  public class Main  {      //  <-- End-of-line style
    public static void main(String[] args) {
       System.out.println("Block Styles");
    }
  }
  ```
  
  Every Java program will begin like this:
  
  ![Main Class and Method in java](https://github.com/AP-CSA-JAVA/CSA_JAVA-Course/assets/12989939/e7f0bd1f-69b7-42da-b824-0ed8f9d0f460)
  
  
  
   </p></details>
   
   
-------------------------------------------------------------------------------------------------------------



## Syllabus
<details><summary>Click Here</summary>
 <p>
  
 ### Expectations

- [ ] Be on time and prepared for class. This includes but is not limited to having you log in for your Canvas course, course website, and digital notebook.
- [ ] Be on time and prepared for class. This includes, but is not limited to having your notebook, assignments, pen/pencil, and paper. Students should be seated within the first five minutes of class to avoid being marked tardy or absent
- [ ] Have a good attitude about learning. Be prepared to actively participate in class. Accept feedback with a positive attitude.
- [ ] Students will follow all written and oral directions as well as safety precautions. This is for your own safety as there will be hands-on activities.
- [ ] Complete all assignments within a timely fashion.
- [ ] Be respectful of others and their property.
- [ ] Take care of the learning environment. Keep your area neat and clean. Always clean your space before you leave for the day. Put materials away in their proper place.
  
---------------------------------------------------------------------------------------


### Policy on Academic Honesty

- [ ] Students are allowed to help each other on assignments with general problem-solving strategies, ideas, and algorithms, but all solutions should be your own. In practice, this means that, while students can discuss programs and questions, all lines of code should originate from your own mind. This course uses technology in ways no other course does. If you are unsure about the ethical implications of what you are doing, you should ask. Claiming ignorance is not a reasonable excuse.
- [ ] If you use other sources for help (websites like stackoverflow, AI tools like ChatGPT, friends, etc.), please cite them in the comments of your code indicating where you got help and whether certain sections of code came from that help.  Please make sure you understand any code that you use from another source. ChatGPT tends to generate compact and complex code, so make sure you read the explanation of the code and ask for simpler code if you don’t understand it. Never copy the text of my assignments into an AI tool to generate a complete solution. You can use AI tools and other sources for idea generation, code debugging, and help with understanding or generating small parts of code to get you started, but you should not have them do all of the work for you. Be in charge of your own learning, and make sure you learn what the assignment is asking you to practice! 
  
---------------------------------------------------------------------------------------


### Electronic Devices
- [ ] Students should be engaged during class, and cell phones and other electronic devices are a distraction that prevent students from fully participating in class. Specifically, students should not be accessing cell phones, smart phones, or any devices during class without permission from the teacher. Phones should be set to silent or turned off in class.
  
---------------------------------------------------------------------------------------


### Computer Lab Policies

- [ ] Do not change any of the settings on the computers.
- [ ] Do not download/ install any programs (including games) to the computer.
- [ ] Do not access inappropriate content on the internet.
- [ ] Report any broken equipment immediately to the instructor.
  
---------------------------------------------------------------------------------------


### Academic Support

- [ ] Peer Tutoring (Monday - Friday/ before and after school)
- [ ] By appointment only
  
---------------------------------------------------------------------------------------


  | Grading | Percentage |
  | ------- | ---------- |
  | Test/ Quizzes | 40% |
  | Projects | 30% |
  | Notes/ Portfolio (2024/25 School Year) | 15% |
  | IDP (Second Semester) / Final Project / Semester Final (MCQ/ FRQ) | 10% |
  | Assignments | 5% |

  
  
### Make-up & Late work policy

- [ ] Students are responsible for makeup work when absent. Per district policy, each student will have **one school day** for each day that they are absent.
- [ ] *To make up a quiz or a test, it is the student’s responsibility to contact the teacher to set an agreed upon date & time.*  Students must contact the teacher within two school days upon their return to make-up the missing quiz or test.  Failure to do so may result in a zero.
- [ ] Handouts will be placed in a makeup folder with the students name and it is the student’s responsibility to check this folder when absent before consulting the instructor.
- [ ] Due dates for every assignment are posted in Canvas. Unless otherwise stated, assignments are due on those days.
- [ ] **This will not be used after the 2023-2024 school year*** I recognize that there are issues beyond your control.  In this instance, you may use your allotted two flex-days in a semester.  These days allow you to submit a late assignment (not projects or presentations) up to two school days beyond the due date, without penalty. You can use these days for any assignment and for any reason. You will need to fill out a **google form** and upload the late assignment.
- [ ] **This will not be used after the 2023-2024 school year*** Once you’ve exhausted your flex days, then point deductions will occur for any assignment submitted after the deadline. Each day that an assignment is late the assignment or project will be reduced by 5% up to 59%. 

---------------------------------------------------------------------------------------


## Note-Taking in learning

SO, you have the powerpoint, video, textbook, website and/ or whatever other resources were provided to you for this particular lesson.  <ins>Do you need to take notes as well?</ins>

Despite the vast amount of information available in electronic formats, taking notes is an <code style="color : red">important</code> learning strategy. In addition, the way that you take notes matters, and not all note-taking strategies lead to equal results.  By considering your note-taking strategies carefully, you will be able to create a set of notes that will help retain the most important concepts from lectures and tests, and that will assist you in your exam preparation.

### Two Purposes for Taking Notes

People take notes for two main reasons:
  1.	To keep a record of the information that was heard. This is also called the *external storage function* of note-taking.
  2.	To facilitate learning that you are currently studying.

The availability of information on the internet may reduce the importance of the *external storage function* of note-taking. When the information is available online, it may seem logical to stop taking notes.  However, by neglecting to take notes, <ins>you lose the benefits of note-taking as a learning tool</ins>.

### How Note-Taking Supports Learning

Taking notes during class supports your learning in several important ways:
  1.	Taking notes helps you to focus your attention and avoid distractions.
  2.	As you take notes in class, you will be engaging your mind in identifying and organizing the main ideas. Rather than passively listening, you will be doing the work of active learning while in class, making the most of your time.
  3.	Creating good notes means that you will have a record for later review. Reviewing a set of condensed and well-organized notes is more efficient than re-reading longer texts and articles.

Everybody takes notes, or at least everybody claims to. But if you take a close look, many who are claiming to take notes on their laptops are actually surfing the Web, and paper notebooks are filled with doodles interrupted by a couple of random words with an asterisk next to them reminding you that “This is important!” In college and university, these approaches will not work. Your instructors expect you to make connections between class lectures and reading assignments; they expect you to create an opinion about the material presented; they expect you to make connections between the material and life beyond school. Your notes are your road maps for these thoughts. Do you take good notes? Actively listening and note-taking are key strategies to ensure your student success.

Effective note-taking is important because it:

- [ ] supports your listening efforts.
- [ ] allows you to test your understanding of the material.
- [ ] helps you remember the material better when you write key ideas down.
- [ ] gives you a sense of what the instructor thinks is important.
- [ ] creates your “ultimate study guide.”
  
There are various forms of taking notes, and which one you choose depends on both your personal style and the instructor’s approach to the material. Each can be used in a notebook, index cards, or in a digital form on your laptop. No specific type is good for all students and all situations, so we recommend that you develop your own style, but you should also be ready to modify it to fit your needs of a specific class or instructor. To be effective, all of these methods require you to *listen actively* and to think; merely jotting down words the instructor is saying will be of little use to you.

### Note-taking methods

**Method	Description	When to Use** 

| Method | Description | When to Use |
| --- | --------- | --- |
| Lists	| A sequential listing of ideas as they are presented. Lists may be short phrases or complete paragraphs describing ideas in more detail.	| This method is what most students use as a fallback if they haven’t learned other methods. This method typically requires a lot of writing, and you may find that you are not keeping up with the professor. It is not easy for students to prioritize ideas in this method. |
| Outlines	| The outline method places most important ideas along the left margin, which are numbered with roman numerals. Supporting ideas to these main concepts are indented and are noted with capital letters. Under each of these ideas, further detail can be added, designated with an Arabic number, a lowercase letter, and so forth.	| A good method to use when material presented by the instructor is well organized. Easy to use when taking notes on your computer. |
| Concept Maps	| When designing a concept map, place a central idea in the centre of the page and then add lines and new circles in the page for new ideas. Use arrows and lines to connect the various ideas.	Great method to show relationships among ideas. | Also good if the instructor tends to hop from one idea to another and back. |
| Cornell Method	| The Cornell method uses a two-column approach. The left column takes up no more than a third of the page and is often referred to as the “cue” or “recall” column. The right column (about two-thirds of the page) is used for taking notes using any of the methods described above or a combination of them. After class or completing the reading, review your notes and write the key ideas and concepts or questions in the left column. You may also include a summary box at the bottom of the page, in which to write a summary of the class or reading in your own words.	| The Cornell method can include any of the methods above and provides a useful format for calling out key concepts, prioritizing ideas, and organizing review work. Most universities recommend using some form of the Cornell method. |

 
#### The List Method

**Example:** The List Method of Note-taking

Topic

Date

Time

Instructor


The learning cycle is an approach to gathering and retaining info that can help students be successful in school. The cycle consists of 4 steps which should all be applied. They are preparing, which sets the foundation for learning, absorbing, which exposes us to new knowledge, capturing, which sets the information into our knowledge base and finally reviewing and applying which lets us set the know. into our memory and use it.

Preparing for learning can involve mental preparation, physical prep, and oper. prep. Mental prep includes setting learning goals for self based on what we know the class will cover.  Also it is very important to do any assignments for the class to be able to learn w/ confidence and…. ______________

Physical Prep means having enough rest and eating well. Its hard to study when you are hungry and you won’t listen well in class if you doze off.

Operation Prep means bringing all supplies to class, or having them at hand when studying. This includes pens, paper, computer, textbook, etc. This also means getting to school on time and getting a good seat (near the front).

Absorbing new knowledge is a combination of listening and reading. These are two of the most important learning skills you can have.

The list method is usually not the best choice because it is focused exclusively on capturing as much of what the instructor says as possible, not on processing the information. Most students who have not learned effective study skills use this method, because it’s easy to think that this is what note-taking is all about. Even if you are skilled in some form of shorthand, you should probably also learn one of the other methods described here, because they are all better at helping you process and remember the material. You may want to take notes in class using the list method, but transcribe your notes to an outline or concept map method after class as a part of your review process. It is always important to review your notes as soon as possible after class and write a summary of the class in your own words.

 
#### The Outline Method

**Example:** The Outline Method of Note-taking

Topic

Date

Time

Instructor



Learning is a cycle made up of 4 steps:
  1.	Preparing: Setting the foundation for learning.
  2.	Absorbing: (Data input) Exposure to new knowledge.
  3.	Capturing: Taking ownership of the knowledge.
  4.	Review & Apply: Putting new knowledge to work.

--------------------------------------------------------------------------------------------

- Preparing
   - Mental Prep. 
       - Do assignments – New knowledge is built on prior knowledge. 
           - assignments from prior classes.
           - Readings! (May not have been assigned in class – see Syllabus!)
       - Review Syllabus 
           - Know what instructor expects to cover
           - Know what assignments you need to do
           - Set your own objective
   - Physical Prep 
       - Get right about of rest. Don’t zzz in class.
       - Eat right. Hard to focus when you are hungry.
       - Arrive on time.
   - Practical Prep (Organizational Prep): 
       - Bring right supplies – (Notebooks, Texts, Pens, etc.)
       - Arrive on time 
           - Get organized and ready to listen
           - Don’t unterupt the focus of others
           - Get a good seat
       - Sit in the front of the class.


The advantage of the outline method is that it allows you to prioritize the material. Key ideas are written to the left of the page, subordinate ideas are then indented, and details of the subordinate ideas can be indented further. To further organize your ideas, you can use the typical outlining numbering scheme (starting with roman numerals for key ideas, moving to capital letters on the first subordinate level, Arabic numbers for the next level, and lowercase letters following.) At first you may have trouble identifying when the instructor moves from one idea to another. This takes practice and experience with each instructor, so don’t give up! In the early stages you should use your syllabus to determine what key ideas the instructor plans to present. Your reading assignments before class can also give you guidance in identifying the key ideas.

If you’re using your laptop for taking notes, a basic word processing application can be very effective. Format your document by creating an outline format using bullets/ dashes. Either increase or decrease your indentation to indicate the level of importance you want to give each item.

After class be sure to review your notes and then summarize the class in one or two short paragraphs using your own words. This summary will significantly affect your recall and will help you prepare for the next class.
 
#### The Concept Map Method

**Example:** The Concept Map Method of Note-taking
 
--- INSERT IMAGE HERE ---

This is a very graphic method of note-taking that is especially good at capturing the relationships among ideas. Concept maps harness your visual sense to understand complex material “at a glance.” They also give you the flexibility to move from one idea to another and back easily (so they are helpful if your instructor moves freely through the material).

To develop a concept map, start by using your syllabus to rank the ideas you will listen to by level of detail (from high-level or abstract ideas to detailed facts). Select an overriding idea (high level or abstract) from the instructor’s lecture and place it in a circle in the middle of the page. Then create branches off that circle to record the more detailed information, creating additional limbs as you need them. Arrange the branches with others that interrelate closely. When a new high-level idea is presented, create a new circle with its own branches. Link together circles or concepts that are related. Use arrows and symbols to capture the relationship between the ideas. For example, an arrow may be used to illustrate cause or effect, a double-pointed arrow to illustrate dependence, or a dotted arrow to illustrate impact or effect.

As with all note-taking methods, you should summarize the chart in one or two paragraphs of your own words after class.
 
#### The Cornell Method

**Example:** The Cornell Method of Note-taking

--- INSERT IMAGE HERE ---

The Cornell method was developed in the 1950s by Professor Walter Pauk at Cornell University [1]. It is recommended by many universities because of its usefulness and flexibility. This method is simple to use for capturing notes, is helpful for defining priorities, and is a very helpful study tool.

The Cornell method follows a very specific format that consists of four boxes: a header, two columns, and a footer.

The header is a small box across the top of the page. In it you write identification information like the course name and the date of the class. Underneath the header are two columns: a narrow one on the left (no more than one-third of the page) and a wide one on the right. The wide column, called the “notes” column, takes up most of the page and is used to capture your notes using any of the methods outlined earlier. The left column, known as the “cue” or “recall” column, is used to jot down main ideas, keywords, questions, clarifications, and other notes. It should be used both during the class and when reviewing your notes after class. Finally, use the box in the footer to write a summary of the class in your own words. This will help you make sense of your notes in the future and is a valuable tool to aid with recall and studying.

**Using Index Cards for the Cornell Method**

Some students like to use index cards to take notes. They actually lend themselves quite well to the Cornell method. Use the “back” or lined side of the card to write your notes in class. Use one card per key concept. The “front” unlined side of the card replaces the left hand “cue” column. Use it after class to write keywords, comments, or questions. When you study, the cards become flash cards with questions on one side and answers on the other. Write a summary of the class on a separate card and place it on the top of the deck as an introduction to what was covered in the class.
“I used to tape my lecture classes so I could fill in my sketchy notes afterwards. Now that I’m using the Cornell system, my notes are complete and organized in much less time. And my regular five-minute reviews make learning almost painless. No more taping and listening twice.”

— A student at Southern Methodist University

You will have noticed that all methods end with the same step: reviewing your notes as soon as possible after class. Any review of your notes is helpful (reading them, copying them into your computer, or even recasting them using another note-taking method). But THINK! Make your review of notes a thoughtful activity, not a mindless process. When you review your notes, think about questions you still have and determine how you will get the answers. (From the next class? Studying with a friend? Looking up material in your text or on the net?) Examine how the material applies to the course; make connections with notes from other class sessions, with material in your text, and with concepts covered in class discussions. Finally, it’s fun to think about how the material in your notes applies to real life. Consider this both at the very strategic level (as in “What does this material mean to me in relation to what I want to do with my life?”) as well as at a very mundane level (as in, “Is there anything cool here I can work into a conversation with my friends?”).

#### Instructor Handouts

Some instructors hand out or post their notes or their PowerPoint slides from their lectures. These handouts should never be considered a substitute for taking notes in class. They are a very useful complement and will help you confirm the accuracy of your notes, but they do not involve you in the process of learning as well as your own notes do. After class, review your notes with highlighter in hand and mark keywords and ideas in your notes. This will help you write a summary of the class in your own words.

### General Tips on Note-Taking

Regardless of what note-taking method you choose, there are some note-taking habits you should get into for all circumstances and all courses:

1.	**Be prepared:** Make sure you have the tools you need to do the job. If you are using a notebook, be sure you have it with you and that you have enough paper. Also be sure to have your pen (as well as a spare) and perhaps a pen with different-coloured ink to use for emphasis. If you are taking notes on your laptop, make sure the battery is charged! Select the application that lends itself best to your style of note-taking. Microsoft Word works very well for outline notes, but you might find taking notes in Excel to work best if you are working within the Cornell method. (It’s easier to align your thoughts in the cue or recall column to your notes in the right column. Just be sure you keep one idea per row!)

2.	**Write on only one side of the paper:** This will allow you to integrate your reading notes with your class notes.

3.	**Label, number, and date all notes at the top of each page:** This will help you keep organized.

4.	**When using a laptop, position it such that you can see the instructor and white board right over your screen:** This will keep the instructor in your field of vision even if you have to glance at your screen or keyboard from time to time. Make sure your focus remains with the instructor and not on your laptop. A word of caution about laptops for note-taking: use them if you are very adept at keyboarding, but remember that not all note-taking methods work well on laptops because they do not easily allow you to draw diagrams and use special notations (scientific and math formulas, for example).
5.	**Don’t try to capture everything that is said:** Listen for the big ideas and write them down. Make sure you can recognize the instructor’s emphasis cues and write down all ideas and keywords the instructor emphasizes. Listen for clues like “the four causes were…” or “to sum up.…”

6.	**Copy anything the instructor writes on the board:** It’s likely to be important.

7.	**Leave space between ideas:** This allows you to add additional notes later (e.g. notes on the answer to a question you or one of your classmates asked).

8.	**Use signals and abbreviations:** The ones you use are up to you, but be consistent so you will know exactly what you mean by “att.” when you review your notes. You may find it useful to keep a key to your abbreviations in all your notebooks.

9.	**Use some method for identifying your own thoughts and questions to keep them separate from what the instructor or textbook author is saying:** Some students use different colour ink; others box or underline their own thoughts. Do whatever works for you.

10.	**Create a symbol to use when you fall behind or get lost in your note-taking:** Jot down the symbol, leave some space, and focus on what the instructor is covering now. Later you can ask a classmate or the professor to help you fill in what you missed, or you can find it in your textbook.

11.	**Review your notes as soon after class as possible (the same day is best):** This is the secret to making your notes work! Use the recall column to call out the key ideas and organize facts. Fill in any gaps in your notes and clean up or redraw hastily drawn diagrams.

12.	**Write a summary of the main ideas of the class in your own words:** This process is a great aid to recall. Be sure to include any conclusions from the lecture or discussion.

13.	**Use notes when preparing for a test or doing an assignment:** Your notes usually have a summary of the most important points and are useful for making sure you incorporate important concepts in your assignments and for focusing on the main concepts when studying for tests and exams.


**Exercise:** Journal Entry

Choose one of your classes where you normally take notes. Make a conscious effort to use the Cornell method with either the outline or concept map method for taking your notes. Follow as many steps listed previously as possible. Now compare these notes with those you took in the previous class. Are your new notes more useful? What did you like about taking notes this way? What are some of the things you need to work on improving? (Remember this will get much easier with more practice.) Write your thoughts down.

**What If You Miss Class?**
Clearly the best way to learn class material is to be at the class and to take your own notes. In university, regular attendance is expected. But life happens. On occasion, you may have to miss a class or lecture. When this happens, here are some strategies you can use to make up for it:
- Check with the instructor to see if there is another section of the class you can attend. Never ask the instructor “Did I miss anything important?” (Think about what that’s saying and you’ll see it’s rather insulting.)
- If the instructor posts his or her lectures as a podcast, listen to the lecture online and take notes. If the instructor uses PowerPoint slides, request a copy (or download them if posted) and review them carefully, jotting down your own notes and questions. Review your notes with a classmate who did attend.
- You may want to borrow class notes from a classmate. If you do, don’t just copy them and insert them in your notebook. They will not be very helpful. When you borrow notes from a classmate, you should photocopy them and then review them carefully and mark your copy with your own notes and questions. Use your textbook to try to fill in the gaps. Finally, schedule a study session with the person who gave you the notes to review the material and confirm your understanding.
- If none of these options is available for you, use the course syllabus to determine what was covered in the class, then write a short paper (two pages or so) on the material using the class readings and reliable online sources. See your instructor during office hours to review your key findings and to answer any questions you still may have.

#### Group Notes: A Collaborative Approach

Groups within a class can take notes together using file-sharing software on the Cloud such as Google Docs. The individuals in the group can add to the document in real time as different individuals are adding themselves. This creates a collaborative document that all can use, download, (or adapt). This won’t work for all situations but can be very useful especially in a fast-moving classroom.

#### Keeping Your Notes

Class is over, and you have a beautiful set of notes in your spiral notebook or saved in your laptop. You have written the summary of the class in your own words. Now what?
Start by organizing your notes. We recommend you use a three-ring binder for each of your subjects. Print your notes if you used a computer. If you used note cards, insert them in plastic photo holders for binders. Group all notes from a class or unit together in a section; this includes class notes, reading notes, and instructor handouts. You might also want to copy the instructor’s syllabus for the unit on the first page of the section.

Next, spend some time linking the information across the various notes. Use the recall column in your notes to link to related information in other notes (e.g. “See class notes date/page”).
If you have had a quiz or test on the unit, add it to your binder, too, but be sure to write out the correct answer for any item you missed. Link those corrections to your notes, too.
Use this opportunity to write “notes on your notes.” Review your summary to see if it still is valid in light of your notes on the reading and any handouts you may have added to your notes package.
You don’t need to become a pack rat with your notes. It is fairly safe to toss them after the end of a course except in the following cases:

1.	If the course you took is a prerequisite for another course, or when the course is part of a standard progression of courses that build upon each other (this is very common in math and science courses), you should keep them as a reference and review for the follow-up course.
2.	If the course may pertain to your future major, keep your notes. You may not realize it now that they may have future value when you study similar topics or even the same topics in more depth.
3.	If you are very interested in the course subject and would like to get into the material through a more advanced course, independent study, or even research, keep your notes as a prep tool for further work.


**Key Takeaways:**
- Good note-taking is a key strategy for academic success.
- Choose among effective note-taking styles for what works best for you and modify it to meet the needs of a specific class or instructor.
- List notes are generally less effective and not prioritized.
- Outlines work well for taking notes on a laptop when the instructor is well organized.
- Concept map notes are good for showing the relationships among ideas.
- The Cornell method is effective for calling out key concepts and organizing notes for review.
- Instructor handouts and PowerPoint presentations help with—but do not replace the need for—personal note-taking.
- If you miss a class, explore your options for replacing your missing notes.
- Keep your notes organized in a way that makes it easy to study for tests and other uses in the future.

Exercise: Note-taking
1.	Name two advantages of the Cornell system over the list method of note-taking.
2.	Describe the benefits of—and potential problems with—taking class notes on a laptop.
3.	List at least three ways to make up for missing notes because you miss a class.
________________________________________
Text Attributions
- This chapter was adapted from “Got Notes?” in University Success by N. Mahoney, B. Klassen, and M. D’Eon. Adapted by Mary Shier. CC BY-NC-SA.
- The first two paragraphs and text under the “Two Purposes for Taking Notes” heading are from “Take Notes from Lectures – That You’ll Actually Use” in University 101: Study, Strategize and Succeed by Kwantlen Polytechnic University. CC BY-SA.

Video Attributions
- “How to Take Great Notes” by watchwellclass. Standard YouTube Licence.
________________________________________
1.	Pauk, W. & Owens, R.J.Q. (2013). How to Study in College. Boston, MA: Wadsworth, Cengage Learning. ↵




 </p></details>
 


## Table of Contents 
<details><summary>Click Here</summary>
 <p>

The course content is organized into ten commonly taught units:</br>
</br>
| Chapter 1: Java Code Fundamentals | Chapter 2: Iteration and Classes | Chapter 3: Arrays | Chapter 4: Inheritance and Recursion |
| :---: | :---: |:---: | :---: |
| **Unit 1 - Primitive Types** | **Unit 4 - Iteration** | **Unit 6 - Arrays** | **Unit 9 - Inheritance** |
| [Why Programming? Why Java?](https://ap-csa-java.github.io/CSA_JAVA-Course/Chapter_1/Unit1.html#why-programming-why-java) | While Loops | Array Creation and Access | Creating Superclasses and Subclasses |
| [Variables and Data Types](https://ap-csa-java.github.io/CSA_JAVA-Course/Chapter_1/Unit1.html#variables-and-data-types) | For Loops | Traversing Arrays | Writing constructors for Subclasses |
| [Expressions and Assignment Statements](hhttps://ap-csa-java.github.io/CSA_JAVA-Course/Chapter_1/Unit1.html#expressions-and-assignment-statements) | Developing Algorithms Using Strings | Enhanced Loops for Arrays | Overriding Methods |
| [Compound Assignment Operators](https://ap-csa-java.github.io/CSA_JAVA-Course/Chapter_1/Unit1.html#compound-assignment-operators) | Nested Iterations | Developing Algorithms Using Arrays | Super Keyword |
| [Casting and Range Variables](https://ap-csa-java.github.io/CSA_JAVA-Course/Chapter_1/Unit1.html#casting-and-range-of-variables) | Informal Code Analysis | Project: Memory Game | Creating References Using Inheritance Hierachies |
| [Project: Numbers Riddle](https://ap-csa-java.github.io/CSA_JAVA-Course/Chapter_1/Unit1.html#numbers-riddle-project) | Project: Consumer Review Lab |  | Polymorphism |
|  |  |  | Object Superclass |
|  |  |  | Project: Celebrity Lab |
| **Unit 2 - Using Objects** | **Unit 5 - Writing Classes** | **Unit 7 - ArrayList** |  |
| Objects: Instances of Classes  | Anatomy of a Class | Introduction to ArrayList |  |
| Creating and Storing Objects | Constructors | ArrayList Methods |  |
| Calling a Void Method | Documentation with Commands | Traversing ArrayLists |  |
| Calling a Void Method with Parameters | Accessor Methods | Developing Algorithms Using ArrayLists |  |
| Calling a Non-Void Method | Mutator Methods | Searching |  |
| String Objects: Concatenation, Literals, and More | Writing Methods | Sorting |  |
| String Methods | Static Variables and Methods | Project: Data Lab |  |
| Wrapper Classes: Integer and Doubles | Scope and Access |  |  |
| Using a Math Class | `this` Keyword |  |  |
| Project: Mad Libs | Ethical and social Implications of Computing |  |  |
|  | Project: Game of Nim |  |  |
|  | Project - Sell my Pet Food |  |  |
| **Unit 3 - Boolean Expressions and if Statements** |  | **Unit 8 - 2D Arrays** | **Unit 10 - Recursion** |
| Boolean Expression |  | 2D Arrays | Recursion |
| If Statements and Control Flow |  | Traversing 2D Arrays | Recursive Searching and Sorting |
| if/ else Statements |  | Project: Stenography Lab | Project: TBD |
| else if Statements |  | **Problem:** Data Lab | **Problem:** Almost Anything! |
| Compound Boolean Expressions |  |  |
| Equivalent Boolean Expressions |  |  |
| Comparing Objects |  |  |
| Project: Choose Your Path |  |  |
| **Problem:** Escape Room |  |  |

 </p></details>
 
## AP Computational Thinking Practices: Skills

<details><summary>Click Here</summary>
 <p>


| Practice 1: Program Design and Algorithm Development |
| ---------------------------------------------------- |
| **1.A** Determin an appropriate program design to solve a problem or accomplish a task (not assessed) |
| **1.B** Determine code that would be used to complete code segments |
| **1.C** Determine colde that would be used to interact with completed program code |


| Practice 2: Code Logic |
| ---------------------------------------------------- |
| **2.A** Apply the meaning of specific operators |
| **2.B** Determine the result or ouput based on statement execution order in a code segment without method calls (other than output) |
| **2.C** Determin the result or output based on the statement execution order in a code segment containing method calls |
| **2.D** Determine the number of times a code segment will execute |


| Practice 3: Code Implementation |
| ---------------------------------------------------- |
| **3.A** Write program code to create objects of a class and call methods |
| **3.B** Write program code to design a new type by creating a class |
| **3.C** Write program code to satisfy method specifications using expressions, conditional statements, and iterative statements |
| **3.D** Write program code to create, traverse, and manipulate elements in 1D or ArrayList objects |
| **3.E** Write program code to create, traverse and manipulate elements in 2D array objects |

| Practice 4: Code Testing |
| ---------------------------------------------------- |
| **4.A** Use test-cases to find errors or validate results |
| **4.B** Identify errors in program code |
| **4.C** Determine if two or more code segments yield equivalent results |


| Practice 5:  Documentation |
| ---------------------------------------------------- |
| **5.A** Describe the behavior of a given segment of program code |
| **5.B** Explain why a code segment will not compile or work as intended |
| **5.C** Explain how the result of program code changes, given a change to the initial code |
| **5.D** Describe the initial conditions that must be met for a program segment to work as intended or described |

| Units | Exam Weighting |
| ----- | -------------- |
| Unit 1: Primitive Types | 2.5 - 5% |
| Unit 2: Using Objects | 5 - 7.5% |
| Unit 3: Boolean Expressions and if Statements | 15 -17.5% |
| Unit 4: Iteration | 17.5 - 22% |
| Unit 5: Writing Classes | 5 - 7.5% |
| Unit 6: Array | 10 - 15% |
| Unit 7: ArrayList | 2.5 - 7.5% |
| Unit 8: 2D Array | 7.5 - 10% |
| Unit 9: Inheritance | 5 - 10% |
| Unit 10: Recursion | 5 - 7.5% |
  
  
 </p></details>

## AP Computer Science A Vocabulary

<details><summary>Click Here</summary>
 <p></br>
 
 **Below is a comprehensive list of vocabulary words every AP Computer Science A student should be familiar with.**
 
 *Did I miss a word? Please let me know...*

| Term  | Definition |
| :---: | :--- |
| !	| A logical operator that reverses the state of a boolean value |
| &&	| A logical operator that evaluates to true only if both sides are true| 
| ==	| An operator to compare two pieces of primitive data or two addresses| 
| ![2bars](https://user-images.githubusercontent.com/12989939/164557376-cd1f0068-ad3d-4115-81e9-75726b8c64e9.PNG)	| A logical operator that evaluates to true if either side is true | 
|abstract	 | A class that is never meant to be instantiated except through a concrete subclass | 
|accessor	 | A method that returns the value of a private instance variable (aka getter) | 
|add	 | The method for putting a new item in a list | 
|addresses	 | The location in memory at which an object is stored | 
|Aggregation	 | Has - A Object relation | 
|algorithm	 | A step by step process for solving a problem | 
|AND	 | Only true if both inputs are true
| arithmetic operators	 | +, -, *, /, % | 
 | array	 | A collection of pieces of data stored as indexed items under one name | 
 | ArrayIndexOutOfBoundsException	 | An error that happens when you refer to an element number larger than your array | 
 | ArrayList	 | A template class for keeping track of collections of data with a changing size | 
 | assembler	 | The part of the IDE that turns your code into assembly code | 
 | assembly language	 | The instruction set used by the CPU (aka machine code) | 
 | assign	 | Set a variable to a value | 
 | attribute	 | A variable property of an object (aka field) | 
 | autoboxing	 | A feature of Java that converts primitive types to their class counterpart | 
 | base 2 logarithm	 | A mathematical operation that returns what power of 2 a number is | 
 | base case	 | A condition that triggers a recursive process to end | 
 | base class	 | A class that another class inherits from (aka superclass) | 
 | behavior	 | An ability of an object (aka method) | 
 | Binary Search	 | A search technique on ordered data that cuts the list in half on each check | 
 | bit	 | A binary digit | 
 | block	 | A piece of code that is separated from the code around it | 
 | body	 | The code inside of a method | 
 | boolean	 | A type of variable or operation that evaluates to true or false | 
 | braces	 | Symbols that define the start and end of a block of code | 
 | break	 | A statement to jump outside of a loop or conditional branch | 
 | bugs	 | Problems that prevent code from working properly | 
 | byte	 | Eight bits | 
 | bytecode	 | The Java code that is ready to be processed by an interpreter | 
 | capacity	 | The amount of space allocated for a List | 
 | case	 | Identifies a code choice of a switch statement | 
 | cast	 | Forcing an expression of one data type to fit into a variable with a different type | 
 | catch	 | A keyword used to collect and handle specific types of exceptions | 
 | change	 | Setting a part of the condition to a different value so the code doesn't loop infinitely | 
 | char	 | A data type for holding a single letter, digit or symbol | 
 | class	 | Code that defines the attributes and behaviors of an object | 
 | class  | definition	All of the method headers and instance variables that make up a class | 
 | class  | declaration	The header line of a class | 
 | class  | variable	A variable that is shared among all instances of a class (aka static field) | 
 | client	 | A class that uses another class | 
 | column	 | A vertical organization of items in a 2D array, the second set of brackets | 
 | comments	 | A written description of what code does for human readers | 
 | Comparable	 | An interface requiring compareTo that allows built-in sort and searches to be used on a class | 
 | comparator	 | A class implementing compare that creates a tool for sorting and searching | 
 | compare	 | A tool that is used to check the order between two objects passed as parameters | 
 | compareTo	 | A method that is used to check the order between an object and a single parameter | 
 | comparisons	 | When an expression or constant is checked for a relationship with another | 
 | compatible	 | Data types that contain similar enough values that they can be cast to each other | 
 | compiler	 | The part of an IDE used to change turn code into software | 
 | compound	 | A complex line of code with made of multiple expressions | 
 | compound assignment operator  | 	+=, -=, *=, /=, %= | 
 | concatenation	 | An operation that creates a new string out of other strings by sticking them together | 
 | concrete	 | A class that can be instantiated, a non abstract class | 
 | condition	 | A statement that can be evaluated to determine if a piece of code will be run | 
 | conditional	 | A statement that is dependent on an expression that evaluates to true or false | 
 | console application	 | A piece of software that runs without a GUI | 
 | conspicuous | 	Variable names that clearly describe the value they represent | 
 | constant	 | A variable that cannot change once its initial value is assigned | 
 | constructor	 | A piece of code that is run when an object is instantiated/created | 
 | contents	 | What is inside of a data set or element | 
 | convention	 | An agreed upon way of coding that is not required by the computer | 
 | convert	 | Changing values of one type into another | 
 | copy constructor	 | A special constructor that takes a parameter of the same type as the class being created | 
 | CPU	 | The "brain" of your computer | 
 | data type | The kind of information that can be held in a variable | 
 | debugger	 | The part of an IDE that helps you find errors in your code | 
 | declaration	 | The line where a class, method or variable is first created | 
 | decrement	 | Decreasing a value by 1 | 
 | default constructor	 | A constructor provided by the compiler when no constructor is coded | 
 | DeMorgan's Laws	 | Rules that describe how logical operations relate and transform into each other | 
 | derived class	 | A class that inherits from another class (aka subclass) | 
 | digital	 | Using whole numbers | 
 | direct manipulation interface	 | An interface that allows the user to interact with program constructs manually | 
 | do-while	 | A type of loop with the condition at the end that always executes at least once | 
 | document	 | To create help files and comments to make notes for future users and editors | 
 | dot notation	 | A way of referencing a method or variable that is part of a class | 
 | double	| The most common data type for decimal numbers | 
 | editor	 | The part of an IDE used to type code | 
 | element	 | A individual item in an array or list | 
 | empty string	 | A string variable that has memory allocated but no text ("") | 
 | encapsulation	 | The practice of using setters and getters to control access to private variables | 
 | equals	 | A method that compares objects to see if they are the same | 
 | equation	 | A mathematical statement that two expressions have the same value | 
 | evaluate	 | Determine the current value of an expression | 
 | exception	 | An problem that occurs while a program is running that causes it to crash | 
 | exception handling	 | Code intended to catch runtime errors and handle them to prevent a crash | 
 | executable	 | A file ready to be run as a program by an operating system | 
 | expression	 | A piece of code that will be evaluated when it is run | 
 | extends	 | A keyword that is used to cause a class to inherit from another class | 
 | false	 | The opposite of true | 
 | field	 | A variable created and stored at the object level (aka instance variable) | 
 | final	 | A keyword used for creating a constant | 
 | finally	 | A keyword that attempts to run code after an exception has happened | 
 | flowchart	 | A graphic showing the paths that execution of a program may follow | 
 | for	 | A type of loop with the initialization, condtion and chage built into the header. A fixed number of times loop. | 
 | for-each loop	 | A special code block for traversing an array or list | 
 | formatting	 | Making numbers appear in as text in a particular way | 
 | gate	 | A component that does simple binary calculations | 
 | generic type	 | A superclass type shared by multiple subclass types | 
 | getter	 | A method that returns the value of a private instance variable (aka accessor) | 
 | GUI	 | The graphical user interface for interacting with a user | 
 | hardware	 | Physical component of a device | 
 | HAS-A	 | A relationship between classes where one class is used by another | 
 | hierarchy	 | A system for organizing in which each item is a superclass and/or subclass of another item | 
 | high level language	 | A language like Java that is converted to machine code before it is executated | 
 | IDE	 | An integrated development environment that contains the tools you need to write a program | 
 | if-else	 | The keywords used for conditional branching | 
 | immutable	 | A value that cannot be changed once created | 
 | implementation	 | The final code used to solve a programming problem | 
 | implements	 | A keyword that indicates a class will perform the job of an interface | 
 | implicit	 | Something that is assumed to be the case if not stated otherwise | 
 | import	 | A keyword that allows you to use code from another package in your code | 
 | increment	 | To increase a value by a set amount | 
 | indentation	 | Shifting code to the right to indicated that it is inside a block | 
 | index	 | The number that represents each letter or element in a String, array or a List | 
 | IndexOutOfBoundsException	 | An error that happens when code accesses an element in an array that doesn't exist | 
 | infinite loop	 | A piece of code that repeats itself forever | 
 | information hiding	 | The practice of making instance variables private to protect the internals operations of the code | 
 | inheritance	 | When a subclass gets code and variables originally created in the parent class | 
 | initialize	 | Allocate the memory for an array and set up beginning values | 
 | Insertion Sort	 | A sort with O(n^2) speed that finds the correct position of each element swapping as needed | 
 | instance	 | An object based on a class that exists when a program is running | 
 | instance variable	 | A variable stored at the class level (aka field) | 
 | instantiate	 | Creating and setting up and actual instance of a class to link to its variable, uses "new" keyword | 
 | int	 | The most common data type for non decimal numbers | 
 | integer division	 | The answer for why 7/2 is 3 and not 3.5 | 
 | interface	 | A programming construct that provides headers of required methods, but no code or variables | 
 | interpret	 | Preparing a Java application to be run for a specific operating system | 
 | invoke	 | A word meaning to call a method and run its code | 
 | IS-A	 | A subclass/superclass relationship between classes | 
 | iteration	 | One of many times executing the same piece of code | 
 | iterative statements	 | Sections of code that repeat in a predictable order | 
 | JavaDoc	 | A tool that creates documentation for code using comments with special syntax and keywords | 
 | JDK	 | The Java Development Kit needed for writing Java code | 
 | key	 | A piece of data in an object used to sort on | 
 | length	 | The number of items in an array | 
 | length() method	 | Used to find the number of characters in a string | 
 | literal strings	 | Text that is written in code between quotation marks | 
 | local variable	 | A variable created inside a method or other block of code | 
 | logic error	 | A coding mistake that causes code to act differently than planned | 
 | logical operators	 | Operators that combine or compare boolean expressions (eg. &&, ||, !) | 
 | loop invariant	 | A relationship between variables that is checked to determine whether to loop again | 
 | loops	A | ny piece of code that repeats when it reaches the end | 
 | machine code	 | A CPU specific binary language (aka assembly code) | 
 | Mergesort	 | A sort with O(n log n) speed that breaks the data set in half calling itself recursively | 
 | method	 | Code that defines an ability or behavior of an object | 
 | minimized	 | Code that takes the least space possible | 
 | modifier	 | A method used to change the value of a private variable (aka setter, mutator) | 
 | modulus	(%) | An operator for finding the remainder from integer division | 
 | motherboard	 | Computer component all other parts connect to | 
 | mutator	 | A method used to change the value of a private variable (aka setter, modifer) | 
 | nested	 | Code that is inside another block of code | 
 | nested loop	 | A piece of repeating code inside another piece of repeating code | 
 | new operator	 | A keyword used when calling the constructor for an object being instantiated | 
 | newline	 | A character that tells the console to move the cursor to the next line | 
 | no-args constructor	 | An empty constructor, one that takes no parameters | 
 | NOT | Reverses value of the input | 
 | null	 | A keyword meaning "has no value" | 
 | O notation	 | A way of showing the relative theoretical speed of a search or sort algorithm | 
 | object	 | An instance of a class that exists when a program is running | 
 | object model	 | A planning tool used to design a class before coding it | 
 | object oriented programming	 | A programming philosophy in which code is written to represent real world things or ideas | 
 | OR	 | True if any input is true | 
 | order of operators	 | The rules that determine how the computer chooses which operations are evaluated first | 
 | overloaded	 | When a method is written in different ways with two or more possible parameter sets | 
 | package	 | A collection of java classes | 
 | parameter	 | A variable whose value or reference is passed into a method | 
 | parse	 | Move through a string one letter or word at a time | 
 | partitioning	 | The process of breaking a set into two or more pieces | 
 | pass by reference	 | When a parameter is sent as a memory location | 
 | pass by value	 | When a parameter is sent as data | 
 | pattern recognition	 | The ability to recognize a form of organization in a data set | 
 | peripheral	 | Computer part not inside the chassis | 
 | pivot	 | A value in a set used to split the set into two parts on which the data will be sorted | 
 | polymorphism	 | The concept that a single named behavior can be performed differently by various subclasses | 
 | primitive type | One of the built-in non-object data types that is stored by value | 
 | printf	 | A special method for Strings that includes formatting characters in the string literal | 
 | private	 | A keyword that makes a variable or method accessible from only inside the class | 
 | procedural language	 | A language where programs are expected to operate in a predictable order | 
 | pseudocode	 | A way of designing a program using written descriptions of what the code will be | 
 | public	| A keyword that makes a variable or method accessible from outside the class | 
 | Quicksort	 | A sort with O(n log n) speed that splits the data using a randomly chosen pivot | 
 | RAM	 | Computer component that stores currently in-use data | 
 | readability	 | A measure of how easily something is understood by others | 
 | recursive	 | A piece of code that uses itself to solve the problem | 
 | redundancy	 | Allows a something to be understood even if some of it is missing or wrong | 
 | reference	 | An address that holds the memory location of the variable's data | 
 | regular expression	 | A predefined set of codes for limiting parse and search type String operations | 
 | relational operators	 | Operators that compare two expressions (eg. <>, !=, ==) | 
 | remove	 | A method for taking an item out of a list and filling any gap | 
 | reserved word	 | Special words used by the Java language that cannot be used for naming | 
 | return	 | A statement that causes a method to end and may send back a value to the calling code | 
 | return type	 | The kind of data that will be sent back by a method | 
 | row	 | A horizontal section of a 2D array, the first set of square brackets | 
 | scope	 | The part of code in which a variable exists or is accessible | 
 | search	 | Finding a particular item in a list, array or other collection | 
 | Selection Sort	 | A sort with O(n^2) speed that checks each element against every other element | 
 | Sequential Search	 | A search that checks each element from beginning to end | 
 | set	 | A method for changing the value of an item in a list | 
 | setter	 | A method that is used to change the value of a private variable (aka modifier) | 
 | short-circuit evaluation	 | A chain of relational or conditional expressions that stops evaluating as soon as the result is known | 
 | signature	 | The header line of a method that defines its return type, name and parameter list | 
 | size	 | The number of items in an ArrayList | 
 | software engineering | Planning, designing, building and testing computer programs | 
 | sorting	 | Putting a collection of data in order | 
 | source code	 | The original code created by the programmer | 
 | square brackets	 | Used to create arrays and refer to a specific element | 
 | stack	T | he part of the computer that keeps track currently running layers of code | 
 | statement	 | A complete and syntactically correct line of code | 
 | static field	 | A variable that is shared among all instances of a class (aka class variable) | 
 | static method	 | A method that uses no (non-static) instance variables and can be called without an instance of the class | 
 | String	 | A built-in class for holding words, sentences, parahraphes, etc. | 
 | style	 | The conventions agreed upon by programmers for how to write code to be understood by others | 
 | subclass	 | A class that inherits from another class | 
 | subinterface	 | An interface that inherits from another interface | 
 | subscript	 | A way of writing an index to an array in pseudocode | 
 | substring	 | There are 2 ways to use the substring method. The first returns a substring of the original string. The second method returns a new string from a specified index and extends to a defined end or up to `endIndex - 1`. | 
 | super	 | A keyword that is used to access methods and fields from a base class | 
 | superclass	 | A class that another class inherits from (aka base class) | 
 | superinterface	 | An interface that another interface inherits from | 
 | switch	 | A keyword that chooses what code to run based on a single value | 
 | symbolic	 | A name that represents another value | 
 | syntax	 | The rules for how code must be entered to compile and work | 
 | syntax error	 | A coding mistake that prevents code from compiling | 
 | testing	 | Checking the condition on a piece of code | 
 | this	 | A keyword that refers to the current instance of the class | 
 | transistor	 | A tiny on-off switch | 
 | transmission	 | Moving something from one place to another | 
 | traversal	 | The process of interacting with each element in an array or list in order | 
 | true	 | The opposite of false | 
 | try	 | A keyword that begins a block code that could cause an exception | 
 | Two-Dimensional Array	 | An array of arrays | 
 | uninitialized string	 | A string variable that is named but has nowhere to store its data | 
 | value	 | Data represented by a variable or expression | 
 | variable	 | A named value in a program that can contain a specific type of data | 
 | visual prototyping and design tools	 | Tools that allow an engineer to plan their software through drawings and flow models | 
 | while	 | A type of loop that runs as long as its condition is true | 
 | whitespace	 | Any space, tab or new line charcter in the code | 
 | wrapper class	 | A class designed to add behaviors to a primitive type | 

</p></details>

## Academic Integrity
<details><summary>Click to Open</summary>
<p>
This is a reminder that each student is responsible for their own work.  Assignments that are designated as team/ group assignments must have each students name within the block header.  Other assignments students may collaborate with another student, but each student must submit their own work and the assignment cannot be a facsimile of their peers work.  Submitted assignments that has another student's name on it and not your name will be considered as cheating and subject to the schools policy regarding plagiarism/ cheating.  Furthermore, assignments that have been deemed as plagirised will receive a '0' on the assignment.
 
If you have any questions, please contact me.
 </p>
 </details>

## Java Style Guidelines
<details><summary>Click Here</summary>
 <p></br>
 Please review the Java Style Guidelines
 
**Java Style Guidelines**

Here are guidelines for writing Java programs in this course.
#### Spaces

Put spaces on both sides of arithmetic operators.
```java
// Incorrect
a=(b*4+7.5/c);

// Correct
a = (b * 4 + 7.5 / c);
```
The keywords if, else, for, do, and while are always followed by a space. Put a space between a closing parenthesis and an opening brace. When a closing brace is on the same line as an else, follow it with a space.

```java
// Incorrect
if(a < b){
    for(int i = 0; i < 10; i++){
       j += i * a;
    }
}else{
    j = b * 9;
}
// Correct
if (a < b) {
    for (int i = 0; i < 10; i++) {
       j += i * a;
    }
} else {
    j = b * 9;
}
```
Do not put spaces after an opening parenthesis or before a closing parenthesis:

```java
// Incorrect
for ( int i = 0; i < 5; i++ ) {
    sum = ( sum + i ) * Math.sqrt( 2 );
}
// Correct
for (int i = 0; i < 5; i++) {
    sum = (sum + i) * Math.sqrt(2);
}
```
#### Braces and Indenting
There are several ways of placing braces in your Java source code. One thing they all have in common: closing braces are always the first non-whitespace character on a line. They are never placed at the end of a line:

```java
// Incorrect
if (a < b) {
    result = 22; }
else
    result = 99; }
```
Any of these are correct; the book we are currently using uses the third style:

```java
// Correct
if (a < b) {
    result = 22;
} else {
    result = 99;
}
// Correct
if (a < b)
{
    result = 22;
}
else
{
    result = 99;
}
// Correct
if (a < b) {
    result = 22;
}
else {
    result = 99;
}
```

Always enclose the body of an if clause, else clause, or loop in braces, even when there is only one statement in the body:

```java
// Incorrect
if (a < b)
    result = 22;
else
    result = 99;

for (int i = 0; i < 7; i++)
    result += i * i;
// Correct
if (a < b) {
    result = 22;
} else {
    result = 99;
}

for (int i = 0; i < 7; i++) {
    result += i * i;
}
```

You may indent either two or four spaces, and you may use the TAB character instead of spaces. You have to be correct and consistent in your indenting and placement of braces. Note how the if-else-if chain is aligned in the correct example:

```java
//Incorrect
if (a < b) {
    if (c >= d) {
      result = 2;
  } else if (e == f) 
{
        result = 99;
    }
  }
//Correct
if (a < b) {
    if (c >= d) {
        result = 2;
    } else if (e == f) {
        result = 99;
    }
}
```

#### Names and Declarations

Variable names begin with lower case letters. If you have a multi-word variable name, prefer camelCase to snake_case. If you have a final (constant), use all upper case for its name, and, if it is a multi-word name, use SNAKE_CASE. Names of Java classes begin with a upper case letter:

```java
// Incorrect
class example {
    int Counter;
    double unitprice;
    final double salestaxrate = 0.075;
    // ...
}
// Correct
class Example {
    int counter;
    double unit_price; // acceptable
    double unitPrice;  // preferred
    final double SALES_TAX_RATE = 0.075;
    // ..
}
````

Put only one declaration per line:

```java
// Incorrect
double cut, clarity, caratWeight, color;
// Correct
double cut;
double clarity;
double caratWeight;
double color;
```

#### Long Lines

Limit line length to 75, no more than 79, characters. Many IDEs will let you display a “line length marker” and set its limit. They might also show the current column number in the status bar at the bottom of the editor window.

Prefer multiple println() calls to one print() or println() with multiple \n:

```java
// difficult to read and edit
System.out.print("Weight: " + weight + "\nVolume: " + volume + "\nSurface Area: " + area + "\n");
// better
System.out.println("Weight: " + weight);
System.out.println("Volume: " + volume);
System.out.println("Surface Area: " + area);
```

If you break a formula across lines, you can break with the operator at the end of a line or beginning of the next line. Just be consistent.

```java
// Either of these is correct
double first = (weight * volume) / (length + width / 2 *
    height * height);
double second = (weight * volume) / (length + width / 2 
    * height * height);
```

#### Comments
The code tells you what the program does. Comments should tell you why or how. (The book will often have “what” comments because the book has to explain what a concept is.)

```java
// "what" comment
month += 1; // add one to month
// "why" comment
/* System returns 0-11 for January-December,
 * but people expect months to be 1-12.
 */
month += 1;
```

The exception to this guideline is the comments at the start of your program. These must have your name, the date, and a description of the purpose of the program. The description must be clear enough that someone who has not read the assignment will understand what the program does. These comments are incorrect:

```java
/*
 * Assignment 3
 * J. Fulano - Oct 4, 2525
 */
/*
 * Program uses if statements
 * and while loops.
 * J. Doe - Oct 4, 2525
 */
```

This one is correct:

```java
/*
* Ask user to enter a positive integer, and print out whether
* that integer is prime or not.
* Program does this repeatedly until user enters zero as input; 
* negative integers give an error message.
* J. Doe - Oct 4, 2525
*/
```

#### Loops

Avoid break and continue whenever possible; instead, carefully think through the loop condition. Do not use while (true) with break to substitute for thinking through the correct condition!
Consider the following code to read into an array until it is full or the user enters zero:

```java
// Very bad style
final int MAX = 4;
int [] ages = new int[MAX];
int value = -1;
int count = 0;

while (true) {
    System.out.print("Enter age or 0 to quit: ");
    value = input.nextInt();
    if (value == 0) {
        break;
    }
    ages[count] = value;
    count++;
    if (count == MAX) {
        break;
    }
}

// better
final int MAX = 4;
int [] ages = new int[MAX];
int value = -1;
int count = 0;

while (value != 0) {
    System.out.print("Enter age or 0 to quit: ");
    value = input.nextInt();
    if (value != 0) {
        ages[count] = value;
        count++;
        if (count == MAX) {
            break;
        }
    }
}
// best
final int MAX = 4;
int [] ages = new int[MAX];
int value = -1;
int count = 0;

while (count < MAX && value != 0) {
    System.out.print("Enter age or 0 to quit: ");
    value = input.nextInt();
    if (value != 0) {
        ages[count] = value;
        count++;
    }
}
```

#### Methods

Do not put a space between the method name and the parameter list.

```java
// Incorrect
static double cube ( double value ) {
    return value * value * value;
}
// ...
double result = cube ( 12.0 );
// Correct
static double cube(double value) {
    return value * value * value;
}
// ...
double result = cube(12.0);
```

It is a good idea to put comments before a method that describes the method’s purpose, inputs, and return value (if any):

```java
/*
 * Calculate monthly payment on a loan, given:
 * principal: amount of the loan
 * interestRate: annual percentage rate as a decimal (0.075 for 7.5%)
 * years: number of years of the loan
 * returns the monthly payment amount of the loan
 */
static double payment(double principal, double interestRate, int years) {
    //...
}
```

#### Output

When lining up output, prefer spaces and specific formatting over tabs:

```java
// OK
System.out.printf("Height (cm):\t\t%.2f\n", height);
System.out.printf("Weight (kg):\t\t%.2f\n", weight);
System.out.printf("Blood alcohol:\t%.3f%%\n", bac);
Height (cm):            160.30
Weight (kg):            50.40
Blood alcohol:  0.032% 

// Better
System.out.printf("Height (cm):   %6.2f\n", height);
System.out.printf("Weight (kg):   %6.2f\n", weight);
System.out.printf("Blood alcohol: %7.3f%%\n", bac);

Height (cm):   160.30
Weight (kg):    50.40
Blood alcohol:   0.032%
```


 
 </p>
 </details>
  
## Links 
<details><summary>Click Here</summary>
 <p></br>
 
 **Important Links** that you may find useful:
 
 [Java Basics](https://www3.ntu.edu.sg/home/ehchua/programming/java/J2_Basics.html)

 [Java Video Tutorial](https://www.newthinktank.com/videos/java-video-tutorial/)
 
 [Java Visualizer](https://cscircles.cemc.uwaterloo.ca/java_visualize/)

 [Oracle: Class & Methods](https://docs.oracle.com/javase/8/docs/api/overview-summary.html)
 
 [Oracle: Formatting Numeric Print](https://docs.oracle.com/javase/tutorial/java/data/numberformat.html)
 
 [Practice-It -- Java](https://practiceit.cs.washington.edu/)

 </p> </details>
