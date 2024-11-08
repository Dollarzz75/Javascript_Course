let num1 = 14;
let num2 = 10;

//const isNum1Greater = num1 > num2;

//console.log( isNum1Greater );

//const isNum1GreaterOrEqualTo = num1 >= num2;

//console.log( isNum1GreaterOrEqualTo );

//const isNum1LessThan = num1 < num2;

//console.log( isNum1LessThan );

//const isNum1LessThanOrEqualTo = num1 <= num2;

//console.log( isNum1LessThanOrEqualTo );

//Loose Equality//
let a = 2;
let b = '2';

//console.log(a == b);
//truthy

//Strict Ewuality//
//console.log(a === b);

//console.log(1 == '1');

// let priceOfChocolate = 1.99;
// let hasAmountInCash = 0.99;

// const canBuyChocolate = hasAmountInCash >= priceOfChocolate;
// console.log(typeof canBuyChocolate);

// if (canBuyChocolate) {
//     console.log('Enjoy Your Purchase');
// } else {
//     console.log('Sorry you do not have enough');
// }

// Else If//
// let hour = 15;

// if (hour >= 6 && hour <= 12) {
//     console.log('Serving Breakfast');
// }    else if (hour > 12 && hour <= 14) {
//     console.log('Serving lunch');
// }   else {
//     console.log('Serving Dinner')
// }
   
//Switch Case//

let job = 'software developer';

// if (job === 'Software Developer') {
//     console.log('writes code');
// } else if (job === 'Web Designer') {
//     console.log('Makes user interface design');
// } else if (job === 'cloud engineer') {
//     console.log('Manages and deploys cloud resources')
// } else {
//     console.log('works directly with customers')
// }

// switch (job) {
//     case 'software developer':
//         console.log('writes code');
//         break;
//     case 'designer': / 
//         console.log('makes user interface design');
//         break;
//     case 'cloud engineer':
//         console.log('manages and deploys cloud resources');
//         break;
//     default:
//         console.log('works directly with customers');
// }

//Loops//

let numbers = [1, 2, 3, 4, 5, 6, 7];

let idx = 0;
let lenghtOfArray = numbers,lenght;

// console.log(numbers[idx++]);
// console.log(numbers[idx++]);
// console.log(numbers[idx++]);
// console.log(numbers[idx++]);
// console.log(numbers[idx++]);
// console.log(numbers[idx]);

// //OR//

// for (let idx = 0; idx < numbers.lenght; idx++) {
//     console.log(numbers[idx]);
// }

// for (let num = 0; num < 100; num++) {
//     console.log(num);
// }

//WHILE//
// let numbers = [1, 2, 3, 4, 5, 6, 7];
// for (let idx = 0; idx < numbers.lenght; idx++) {
//     console.log(numbers[idx]);
// }

// let index = 0;
// while (idx < numbers.lenght) {
//     console.log(numbers[idx]);

//     idx++;
// }

//DO WHILE LOOPE//

// let i = 0;

// do {
//     console.log(i);
//     i++;
// } while (i < 10);

//INFINITE LOOOPS//
// for (let num = 0; num <= 100; num++);


//FOR-IN LOOPS//
// const course = {
//     name: 'Javascript for Begineers',
//     duration: 3,
//     sections: 7
// };

// console.log(course.name);
// console.log(course['duration'])
// console.log(course.sections);

// for (const key in course) {
//     console.log(course[key]);
// }

//FOR-OFF LOOPS//
// let numbers = [1, 2, 3, 4, 5, 6, 7];
// for (let idx = 0; idx < numbers.lenght; idx++) {
//     console.log(numbers[idx]);
// }

// for (let element of numbers) {
//     console.log(element);
// }

//MaxNum//

// function maxNum(num1, num2) {
//     return num1 >= num2 ? num1 : num2;
// }

// console.log(maxNum(2, 1)); 

//FIZZBUZZ EXERCISE//
function fizzBuzz(number) {
    if (number % 3 === 0 && number % 5 === 0) 
        return 'FizzBuzz';
    else if (number % 3 === 0)
        return 'Fizz';
    else if (number % 5 === 0)
        return 'Buzz'
    else
    return number;
}

console.log( fizzBuzz(15) );
    
function displayEventNumbers(array) {
    for (const number of array) {
        if (number % 2 === 0)
            console.log(number);
    }
}

function displayOddNumbers(array) {
    for (const number of array) {
        if (number % 2 != 0)
            console.log(number);
    }
}

displayOddNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])