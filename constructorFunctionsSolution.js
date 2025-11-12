/**
 * Define the Course and Assignment concepts using the constructor functions
 */
/**
 * Constructor for Assignment objects.
 * @param {string} title - The title of the assignment.
 * @param {string} dueDate - The due date for the assignment.
 */
function Assignment(title, dueDate) {
    this.title = title;
    this.dueDate = dueDate;
}

// Add the shared method to the Assignment's prototype
Assignment.prototype.printAssignment = function() {
    console.log('   Title: ' + this.title + ' | Due Date: ' + this.dueDate);
};

/**
 * Constructor for Course objects.
 * @param {string} courseName - The name of the course.
 * @param {string} instructor - The name of the instructor.
 * @param {number} creditHours - The number of credit hours.
 * @param {Assignment[]} assignments - An array of Assignment objects.
 */
function Course(courseName, instructor, creditHours, assignments) {
    this.courseName = courseName;
    this.instructor = instructor;
    this.creditHours = creditHours;
    this.assignments = assignments;
}

// Add the shared method to the Course's prototype
Course.prototype.courseInfo = function() {
    console.log('Course: ' + this.courseName + 
                ' | Instructor: ' + this.instructor + 
                ' | Credit Hours: ' + this.creditHours);
    console.log('Assignments >>>');
    for (let a of this.assignments)
        a.printAssignment();
};

// create the objects using the constructor functions
// Create Assignment objects
let a1 = new Assignment('Project Proposal', 'Jan 15');
let a2 = new Assignment('Midterm Report', 'Feb 20');
let a3 = new Assignment('Final Report', 'Mar 30');
let a4 = new Assignment('Presentation', 'Apr 10');

// Create Course objects using the new keyword
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

