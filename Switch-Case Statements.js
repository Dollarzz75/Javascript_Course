//Create a switch statement to return a weekday based on a number (1-7).
let day = parseInt(prompt("Enter a number (1-7):"));
let weekday;

switch (day) {
    case 1:
        weekday = "Monday";
        break;
    case 2:
        weekday = "Tuesday";
        break;
    case 3:
        weekday = "Wednesday";
        break;
    case 4:
        weekday = "Thursday";
        break;
    case 5:
        weekday = "Friday";
        break;
    case 6:
        weekday = "Saturday";
        break;
    case 7:
        weekday = "Sunday";
        break;
    default:
        weekday = "Invalid input. Please enter a number between 1 and 7.";
}

console.log("The day is: " + weekday);

//Write a switch case to identify the type of a given fruit in javascript.
let fruit = prompt("Enter the name of a fruit:");

switch (fruit.toLowerCase()) {
    case 'orange':
    case 'lemon':
    case 'lime':
    case 'grapefruit':
        console.log(fruit + " is a Citrus fruit.");
        break;
    case 'strawberry':
    case 'blueberry':
    case 'raspberry':
        console.log(fruit + " is a Berry.");
        break;
    case 'peach':
    case 'cherry':
    case 'plum':
        console.log(fruit + " is a Stone fruit.");
        break;
    default:
        console.log(fruit + " is of type Other.");
}

//Use switch to determine a month's season based on a month number in javascript.
let monthNumber = parseInt(prompt("Enter the month number (1-12):"));

switch (monthNumber) {
    case 12:
    case 1:
    case 2:
        console.log("The season is Winter.");
        break;
    case 3:
    case 4:
    case 5:
        console.log("The season is Spring.");
        break;
    case 6:
    case 7:
    case 8:
        console.log("The season is Summer.");
        break;
    case 9:
    case 10:
    case 11:
        console.log("The season is Fall.");
        break;
    default:
        console.log("Invalid month number. Please enter a number between 1 and 12.");
}

//Write a switch to handle different operations (+, -, *, /).
let num1 = parseFloat(prompt("Enter the first number:"));
let num2 = parseFloat(prompt("Enter the second number:"));
let operation = prompt("Enter an operation (+, -, *, /):");

let result;

switch (operation) {
    case '+':
        result = num1 + num2;
        console.log("Result: " + result);
        break;
    case '-':
        result = num1 - num2;
        console.log("Result: " + result);
        break;
    case '*':
        result = num1 * num2;
        console.log("Result: " + result);
        break;
    case '/':
        if (num2 !== 0) {
            result = num1 / num2;
            console.log("Result: " + result);
        } else {
            console.log("Error: Division by zero is not allowed.");
        }
        break;
    default:
        console.log("Invalid operation. Please enter +, -, *, or /.");
}

//Use switch to return the number of days in a given month (1-12).
let monthsNumber = parseInt(prompt("Enter the month number (1-12):"));
let days;

switch (monthsNumber) {
    case 1: // January
    case 3: // March
    case 5: // May
    case 7: // July
    case 8: // August
    case 10: // October
    case 12: // December
        days = 31;
        break;
    case 4: // April
    case 6: // June
    case 9: // September
    case 11: // November
        days = 30;
        break;
    case 2: // February
        let year = parseInt(prompt("Enter the year (e.g., 2024):"));
        // Check if the year is a leap year
        if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
            days = 29; // Leap year
        } else {
            days = 28; // Non-leap year
        }
        break;
    default:
        console.log("Invalid month number. Please enter a number between 1 and 12.");
        days = null;
}

if (days !== null) {
    console.log("The number of days in month " + monthsNumber + " is: " + days);
}
