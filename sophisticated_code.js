/* filename: sophisticated_code.js */

// This code calculates the average score of a list of students

// Class object to represent a student
class Student {
    constructor(name, scores) {
        this.name = name;
        this.scores = scores;
    }
}

// Function to calculate the average score of a student
function calculateAverage(scores) {
    let sum = 0;
    for (let score of scores) {
        sum += score;
    }
    return sum / scores.length;
}

// Array of students
const students = [
    new Student("John Doe", [85, 90, 92, 88]),
    new Student("Jane Smith", [95, 88, 92, 96]),
    new Student("Michael Johnson", [78, 85, 80, 82]),
    // ... Add more students here
];

// Calculate the average score for each student and store it in a new array
const averageScores = students.map(student => calculateAverage(student.scores));

// Display the average scores of the students
for (let i = 0; i < students.length; i++) {
    console.log(`Average score of ${students[i].name}: ${averageScores[i]}`);
}