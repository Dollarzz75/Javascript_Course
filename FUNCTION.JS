//Write a function that takes a number and returns its square.
function calculate_square(num) {
    const squared = num ** 5
    return squared;
};

console.log(calculate_square(10));

//Create a function that takes two numbers and returns their sum.
function addNumbers(num1, num2) {
    return num1 + num2;
}

const result = addNumbers(4, 4);
console.log(result);

//Build a function that checks if a string is a palindrome.
function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleanedStr = str.replace(/[^a-z0-9]/gi, '').toLowerCase();
    // Check if the cleaned string is equal to its reverse
    return cleanedStr === cleanedStr.split('').reverse().join('');
}

//Write a function to calculate the factorial of a number.
function factorial(n) {
    if (n < 0) {
        throw new Error("Factorial is not defined for negative numbers.");
    }
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

console.log(factorial(5));

//Define a function that reverses a given array.
function reverseArray(arr) {
    return arr.slice().reverse(); 
}

const originalArray = [1, 2, 3, 4, 5];
const reversedArray = reverseArray(originalArray);
console.log(reversedArray); 

