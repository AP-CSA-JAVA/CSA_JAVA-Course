# Resources

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

### Replit.com
By default, Replit uses Main as the main class.  To change the Main class name to a class name of your choosing, create a new file within replit and call it <i>.repl</i>.  Within the file type the following:

```
run="sh main.sh"

javac NewClass.java  # whatever that file is java NewClass
```

Lastly, make sure that the Main class is label correctly!  In this instance it will be called <i>NewClass</i>.

![replit](https://user-images.githubusercontent.com/12989939/186237117-a3565f6b-bc38-4edd-be59-f787ed233668.PNG)


Another method that you may find useful within replit is that you can create different programs and have them execute on the Main.java page.

```java
public class Main {
  public static void main(String[] args) {
    ProgramOne.main(args);
    ProgramTwo.main(args);
    ProgramThree.main(args);
  }
}
```
Example of this in use can be found [here](https://replit.com/@jonvirak/Array-Creation#Main.java).  Use this format for Assignment 2 and all future programs where you are asked to create two different programs.


---


## SCRUM

SCRUM is an Agile framework used to manage complex product development. It emphasizes iterative progress, collaboration, and adaptability. Here's a breakdown of the SCRUM phases, along with documentation that should be created or maintained during each phase:

### 1. **Backlog**
   **What happens**: 
   - The **Product Owner** creates and manages the **Product Backlog**, which is a prioritized list of features, enhancements, bug fixes, or technical improvements that need to be done for the project. These items are usually called **Product Backlog Items (PBIs)**.
   - The team collaboratively refines the backlog, breaking larger tasks into smaller, actionable pieces.
   
   **Documentation**: 
   - **Product Backlog**: A list of all desired work items.
   - **Backlog Refinement Notes**: Any changes or additional information added during backlog grooming meetings.

### 2. **Sprint**
   **What happens**: 
   - A **Sprint** is a time-boxed period, typically 1–4 weeks, where a specific set of work items from the backlog are worked on.
   - During **Sprint Planning**, the team selects high-priority backlog items to work on during the sprint. They break down these tasks into actionable steps.
   - The **Scrum Master** facilitates the session, ensuring the team has everything they need to succeed.

   **Documentation**: 
   - **Sprint Backlog**: The set of items from the product backlog that will be worked on during the sprint.
   - **Sprint Goal**: The objective the team aims to achieve during the sprint.
   - **Task Breakdown**: A detailed breakdown of the selected work items into smaller tasks.

### 3. **To-Do**
   **What happens**: 
   - The **To-Do** list is typically a section of the **Sprint Backlog** that contains tasks the team has planned to start but hasn't yet worked on. It provides visibility into upcoming tasks for the sprint.
   - These tasks are often broken down into smaller actionable items that are easy to track.

   **Documentation**:
   - **Sprint Backlog**: This document should list all tasks that have yet to be started during the sprint.
   - **Task Descriptions**: Clear descriptions of each individual task to avoid confusion.
  
### 4. **Doing**
   **What happens**: 
   - The team works on the tasks they selected during **Sprint Planning**. This is the "doing" phase, where active development occurs. Each task is moved from **To-Do** to **Doing** as work begins.
   - The team often has daily **Stand-up (Daily Scrum)** meetings to sync up on progress, address blockers, and adjust plans.

   **Documentation**: 
   - **Task Updates**: As work progresses, team members update task status, adding notes on progress, challenges, and next steps.
   - **Burndown Chart**: A visual representation of remaining work in the sprint, showing the team's progress.

### 5. **Review**
   **What happens**: 
   - At the end of the sprint, a **Sprint Review** meeting occurs where the team demonstrates the work completed during the sprint. This is done for the stakeholders, including the Product Owner.
   - The team discusses what went well, challenges faced, and what wasn’t completed.
   
   **Documentation**: 
   - **Sprint Review Notes**: A document or presentation summarizing the work completed, feedback from stakeholders, and any items that need to be adjusted.
   - **Completed Product Backlog Items**: Items that were completed during the sprint and can potentially be shipped or deployed.
   - **Release Notes** (optional): If the product is being released after the sprint, this includes updates and changes made during the sprint.

### 6. **Done**
   **What happens**: 
   - The **Sprint Retrospective** is a meeting held after the Sprint Review, where the team reflects on the sprint itself. The focus is on **process improvement**—what worked well, what didn’t, and how things can be improved in future sprints.
   - The team agrees on actions to take in the next sprint to improve their processes and work together more effectively.
   
   **Documentation**: 
   - **Sprint Retrospective Notes**: Actionable items from the retrospective that are intended to improve the team's workflow.
   - **Action Items**: Specific improvements or adjustments the team will make in the next sprint.

### Overall SCRUM Documentation Considerations:
- **Product Backlog**: The entire product roadmap, which evolves throughout the project.
- **Sprint Backlog**: More focused on a particular sprint's work.
- **Burndown Chart**: Tracks work completion over time.
- **Sprint Review and Retrospective Notes**: Helps the team stay aligned and continuously improve their processes.
- **Definition of Done (DoD)**: The criteria that must be met for work to be considered "done," typically agreed upon by the team during the retrospective.

SCRUM emphasizes continuous inspection and adaptation, so while documentation exists, it is generally minimal and lightweight compared to traditional project management approaches. The focus is on delivering working software and having efficient communication rather than producing heavy documentation.


## SCRUM Master

The **Scrum Master** is a key role in the Scrum framework, responsible for ensuring that the Scrum process is being followed and facilitating the smooth functioning of the Scrum team. While the Scrum Master does not have authority over the team members, their primary focus is on enabling the team to be as effective as possible in delivering the product increment.

### Roles and Responsibilities of a Scrum Master:

#### 1. **Facilitator of Scrum Events:**
   - The Scrum Master is responsible for ensuring that Scrum ceremonies (also called events) are effectively planned, organized, and conducted. These include:
     - **Sprint Planning**: Helping the team define the goals and scope for the sprint.
     - **Daily Standups (Daily Scrum)**: Ensuring these daily meetings are brief, focused, and effective.
     - **Sprint Review**: Ensuring the team demonstrates the work done during the sprint to stakeholders and gathers feedback.
     - **Sprint Retrospective**: Facilitating discussions on what went well, what could be improved, and how the team can improve in the next sprint.

#### 2. **Removing Impediments:**
   - One of the key responsibilities of the Scrum Master is to identify and remove any obstacles (also called impediments) that are preventing the team from achieving their goals. These can be external (e.g., organizational barriers, technical issues) or internal (e.g., team dynamics or communication problems).

#### 3. **Shielding the Team:**
   - The Scrum Master protects the team from external disruptions, distractions, and interferences. For example, they might shield the team from unnecessary meetings or requests from stakeholders that can disrupt the team's focus.

#### 4. **Coach and Mentor:**
   - The Scrum Master helps the team understand and apply Scrum principles, practices, and values. They are responsible for fostering a culture of continuous improvement, helping team members improve their skills, and guiding them in becoming more self-organizing.
   - The Scrum Master might also help the Product Owner understand the Scrum process and how to work effectively with the team.

#### 5. **Promoting Collaboration and Communication:**
   - Scrum Masters encourage open communication and collaboration among team members and between the team and stakeholders. This includes fostering a positive, transparent, and respectful environment for both technical and non-technical discussions.
   - They also help facilitate better relationships between the Development Team, Product Owner, and other stakeholders.

#### 6. **Ensuring Adherence to Scrum Practices:**
   - The Scrum Master helps ensure that Scrum practices are being followed properly. While they don’t directly manage the team, they provide guidance to the team on how to implement Scrum principles and how to maintain focus on the team’s goals.

#### 7. **Continuous Improvement (Kaizen):**
   - Scrum Masters facilitate continuous improvement by encouraging team members to reflect and learn from each sprint. This is primarily done in Sprint Retrospectives but should also be part of the team's daily mindset. They encourage experimentation and help the team adopt practices that improve performance and delivery.

#### 8. **Helping the Product Owner:**
   - The Scrum Master assists the Product Owner in managing the product backlog by ensuring that it is well-formed, prioritized, and understood by the team. They help the Product Owner understand how to manage stakeholders' expectations and assist with refining the backlog when necessary.

#### 9. **Building Self-Organizing Teams:**
   - The Scrum Master works to build a self-organizing and high-performing team. This means fostering a culture where team members collaborate, solve problems together, and take responsibility for their work without micromanagement.

#### 10. **Promoting Transparency:**
   - Transparency is one of the pillars of Scrum. The Scrum Master helps ensure that the team’s progress, work, and obstacles are visible to everyone involved. They use tools like Scrum boards, burn-down charts, and sprint reviews to facilitate this transparency.

#### 11. **Facilitating Cross-Functional Team Collaboration:**
   - A Scrum team is cross-functional, meaning the team members possess various skills that allow them to complete work without relying heavily on other teams or departments. The Scrum Master encourages collaboration and coordination within the team and ensures that team members have the resources and support they need to perform their tasks.

---

### Key Skills and Traits of a Scrum Master:
- **Strong Communication Skills**: To facilitate discussions, manage conflicts, and encourage collaboration.
- **Problem-Solving Abilities**: To identify and remove obstacles and provide solutions.
- **Servant Leadership**: They act as a servant leader, helping the team succeed without directly controlling or managing them.
- **Knowledge of Scrum and Agile**: A deep understanding of Scrum principles and the ability to coach others.
- **Patience and Empathy**: Scrum Masters should be patient and empathetic, understanding team members’ concerns and working to resolve issues.

In summary, the Scrum Master’s role is to serve the team and the organization by facilitating the Scrum process, removing impediments, and helping the team improve and be more productive. They do not manage or control the team, but rather act as a coach and facilitator, ensuring that the Scrum framework is being used effectively.
