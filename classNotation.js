/**
 * Define the Course and Assignment concepts using the class notations
 */

class Assignment {
    constructor(title, dueDate) {
        this.title = title;
        this.dueDate = dueDate;
    }

    // This is a method (a function) belonging to the class
    printAssignment() {
        console.log('   Title: ' + this.title + ' | Due Date: ' + this.dueDate);
    }
}

/**
 * Class definition for a Course.
 */
class Course {
    constructor(courseName, instructor, creditHours, assignments) {
        this.courseName = courseName;
        this.instructor = instructor;
        this.creditHours = creditHours;
        this.assignments = assignments;
    }

    // This method will iterate over the array of Assignment objects
    courseInfo() {
        console.log('Course: ' + this.courseName + 
                    ' | Instructor: ' + this.instructor + 
                    ' | Credit Hours: ' + this.creditHours);
        console.log('Assignments >>>');
        for (let a of this.assignments)
            a.printAssignment(); // Calls the printAssignment() method on each object
    }
}

// create the objects using the classes

// Create Assignment objects (instances of the Assignment class)
let a1 = new Assignment('Project Proposal', 'Jan 15');
let a2 = new Assignment('Midterm Report', 'Feb 20');
let a3 = new Assignment('Final Report', 'Mar 30');
let a4 = new Assignment('Presentation', 'Apr 10');

// Create Course objects (instances of the Course class)
let c1 = new Course(
    'Software Engineering', 
    'Dr. Pepper', 
    3, 
    [a1, a2]
);

let c2 = new Course(
    'Data Science', 
    'Dr. Evil', 
    6, 
    [a3, a4]
);

c1.courseInfo();
c2.courseInfo();
