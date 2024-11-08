//Write an if-else to check if a number is positive, negative, or zero.
let number = -5;

if (number > 0) {
    console.log("The number is positive.");
} else if (number < 0) {
    console.log("The number is negative.");
} else {
    console.log("The number is zero.");
}

//Create a multi-branch if-else to determine letter grades (A, B, C, etc.).
let score = 85;
let grade;

if (score >= 90) {
    grade = 'A';
} else if (score >= 80) {
    grade = 'B';
} else if (score >= 70) {
    grade = 'C';
} else if (score >= 60) {
    grade = 'D';
} else {
    grade = 'F';
}

console.log("The grade is: " + grade);

//Use if-else to display "Morning" or "Evening" based on the current hour.
let hour = new Date().getHours();

if (hour >= 6 && hour < 20) {
    console.log("Morning");
} else {
    console.log("Evening");
}

//Write code to check if a user is logged in and display a welcome message.
let isLoggedIn = true; //If not logged in, change to false

if (isLoggedIn) {
    console.log("Welcome to Dollarzz Tech!");
} else {
    console.log("Please log in to continue.");
}

//Use if-else to determine if a number is a multiple of 3 and 5.
let numbers = 15; // Change this value to test with different numbers

if (numbers % 3 === 0 && numbers % 5 === 0) {
    console.log("The number is a multiple of both 3 and 5");
} else {
    console.log("The number is not a multiple of both 3 and 5");
}
