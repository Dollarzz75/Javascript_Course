//Write a ternary statement to check if a number is positive or negative.
let number = 5;
let result = number >= 0 ? "Positive" : "Negative";

console.log(result); // Outputs "Positive" if number is 5, "Negative" if number is -5

//Use the ternary operator to set a default value for a variable.
let userInput = null;
let defaultValue = "Default Value";

let outcome = userInput ? "userInput" : "defaultValue";

console.log(result); // Outputs "Default Value" because userInput is null

//Write a ternary statement to determine if a number is odd or even.
let value = 4;
let advanced = (value % 2 === 0) ? "Even" : "Odd";

console.log(result); // Outputs "Even" if number is 4, "Odd" if number is 3

//Create a ternary operation that selects between two colors.
let isWhite= true; // Change this to false to select the other color
let selectedColor = isWhite ? "White" : "Red";

console.log(selectedColor); // Outputs "Blue" if isBlue is true, "Red" if isBlue is false

//Use a ternary operator to display "Adult" or "Minor" based on age.
let age = 18;
let status = age >= 18 ? "Adult" : "Minor";
console.log(status);

