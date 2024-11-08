//Use !== to check if two values are not strictly equal.
console.log(5 !== '5'); // true, because 5 is a number and '5' is a string
console.log(5 !== 5);   // false, because they are both the same type (number) and value

//Check if two values are equal using ==
console.log(5 == '5');  // true, because it == only checks the value, it dosen't check for the type
console.log(10 == 10);    // true, because both the value and type are the same 
console.log(25 == '6');  // false, because they are 2 differnt values

//Compare two variables using strict equality ===.
let a = 5;
let b = '5';

console.log(a === b);  // false, because a is a number and b is a string

let c = 25;
let d = 25;

console.log(c === d);  // true, because they r both having the same value


//Write code that checks if two values are not equal using !=.
let x = 10;
let y = '10';

console.log(x != y);  // false, because their values are equal even though types differ

//Create a strict inequality comparison between two variables.
let e = 15;
let j = '15';

console.log(e !== j); // true, because a is a number and b is a string

 