//Use arithmetic operators to calculate the area of a rectangle.
function calculateRectangleArea(length, width) {
    // Calculate area using the formula: Area = length * width
    return length * width;
}

// Example usage:
const length = 5;
const width = 3;
const area = calculateRectangleArea(length, width);
console.log("Area of the rectangle:", area);  // Output: Area of the rectangle: 15

//Write code to increment a variable by 5 using addition and assignment.
let myVariable = 10; // Initial value

// Increment the variable by 5
myVariable += 5;

console.log(myVariable); // Output: 15

//Create a snippet that divides two numbers and finds the remainder.


//Write an expression to convert Celsius to Fahrenheit.
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

// Example usage:
const celsius = 25; // Example Celsius value
const fahrenheit = celsiusToFahrenheit(celsius);
console.log(`${celsius}°C is equal to ${fahrenheit}°F`); // Output: 25°C is equal to 77°F


//Create a simple BMI calculator using basic arithmetic in javascript//
function calculateBMI(weight, height) {
    // Calculate BMI using the formula: BMI = weight / (height * height)
    const bmi = weight / (height * height);
    return bmi;
}

// Example usage:
const weight = 70; // Weight in kilograms
const height = 1.75; // Height in meters
const bmi = calculateBMI(weight, height);

console.log(`Your BMI is: ${bmi.toFixed(2)}`); // Output: Your BMI is: 22.86

//Assign a value to a variable using the += operator.
let numbers = [1, 2, 3, 4, 5, 6, 7];

let idx = 0;
let lenghtOfArray = numbers,lenght;

for (let idx = 0; idx < numbers.lenght; idx++) {
    console.log(numbers[idx]);
}

//Use the -= operator to decrease a variable by 10.
let theVariable = 50; // Initial value

// Decrease the variable by 10
myVariable -= 10;

console.log(theVariable); // Output: 40

//Divide a variable by 2 using the /= operator.
let dolaVariable = 20; // Initial value

// Divide the variable by 2
myVariable /= 2;

console.log(dolaVariable); // Output: 10

//Use the assignment operator to combine a string with another string.
let greeting = "Hello"; // Initial string

// Combine the string with another string
greeting += ", world!";

console.log(greeting); // Output: Hello, world!
 

 