//Write code that uses && to check if two conditions are true.
let age = 20;
let nameId = true;

if (age >= 18 && nameId) {
    console.log("Access granted");
} else {
    console.log("Access denied");
}

//Use || to check if either of two variables is greater than 100.
let a = 50;
let b = 110;

if (a > 100 || b > 100) {
    console.log("One variable is greater than 100");
} else {
    console.log("Neither variable is greater than 100");
}

//Write code that uses ! to invert a boolean value.
let invertBoolean = true;
invertBoolean = !invertBoolean;  // Invert the boolean value
console.log(invertBoolean);  // Output: false

//Combine && and || operators in a single conditional.
let ages = 16;
let hasPermission = true;
let dolaId = true;

if ((ages > 18 || hasPermission) && dolaId) {
    console.log("Access granted");
} else {
    console.log("Access denied");
}

//Use a logical operation to verify if a number is between 10 and 20, exclusive.
let number = 15;

if (number > 10 && number < 20) {
    console.log("The number is between 10 and 20");
} else {
    console.log("The number is not between 10 and 20");
}

