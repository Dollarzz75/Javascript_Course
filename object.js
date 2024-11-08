// let course = {
//     name: 'Javascript for Beginners',
//     hours: 3
// };

//console.log(course.name);

//course.name = 'Javascript Fundamentals';
//console.log(course.name);

//console.log(course['name']);

//course['name'] = 'Javascript course';
//console.log(course['name']);

// let property = 'hours';

// console.log( course[property] );

//OBJECT LITERALS//

// const dog = {
//     name: 'Fuad',
//     breed: 'Dortmund',
//     age: '5',
//     weightInPounds: 12,
//     eat: function() {
//         console.log('champ');
//     },
//     bark() {
//         console.log('woof!');
//     }
// }

//Factory Functions//

// function getDog(name, breed, age, weightInPounds) {
//     return {
//         name,
//         breed,
//         age,
//         weightInPounds,
//         eat() {
//             console.log('champ!');
//         },
//         bark() {
//             console.log('woof!')
//         }
//     }
// }

// const anotherDog = getDog('Marley', 'Chocolate', 3, 60);
// console.log(anotherDog);

//CONSTRUCTOR FUNCTIONS//

// function Dog(name, breed, age, weightInPounds) {
//     // this = {}

//     //Add Properties to this
//     this.name = name;
//     this.breed = breed;
//     this.age = age;
//     this.weightInPounds = weightInPounds;

//     this.eat = function() {
//         console.log(this.name + ': champ!');
//     }

//     this.bark = function() {
//         console.log(this.name + ': woof!');
//     }
//     //reurn :this key word
// }

// const anotherDog = new Dog('Marley', 'Lab', 3, 60);
// console.log( anotherDog );

// //OBJECTS ARE DYNAMIC//
// const person = {
//     name: 'Fuad'
// };

// console.log(person)

//person.favouriteFood = 'rice'
// console.log(person)

//person['favouriteIceCream'] = 'chocolate';
// console.log(person);

//delete person.favouriteIceCream;
// console.log(person);

//person.eat = function() {
    //console.log('start eating')
//}

// person.eat();

// const person = {
//     name: 'Fuad'
// };
// console.log( person.constructor );

//Constructor Property//

// let newObj = new Object();

// new String(), //'fuad'
// new Boolean() //true,false
// new Number(); //1,2,3,4,5

// function add(num1, num2) {
//     return num1 + num2;
// }

// const n = add;
// console.log( n(2, 2) );

// console.log( add.length );

// const Programmer = new Function{'name',
//     this.name = name;
//     this.writescode = function() {

//     }
// }

//VALUES AND REFERNCES//

// let a = 10;
// let b = a;

// a = 20;

// console.log(a);
// console.log(b);

// let a = { value: 20 };
// let b = a;

// a.value = 100;

//Enumerating of an Object//

// for (const entry of Object.entries(dog)) {
//     console.log(entry);
// }

//Cloning of an Object//

// let a = { value: 10 };
// let b = {};

// Object.assign(b, a);

// b.value = 20;

// console.log(a);
// console.log(b);

//STRING METHODS//

const name = 'Dola';
// console.log(typeof name);

// const anotherName = new String('dola');
// console.log(typeof anotherName);

let sentence = "A new Sentence.";

const doesIncludeNew = sentence.includes('new');
console.log(doesIncludeNew);

const arr = [1,2,3,4]
console.log(arr);
console.log(...arr);
console.log(Math.min(...arr));

const dog = {
    name: "Max",
    age: 5,
    eyecolor: 'blue'
}

console.log(dog["name"], dog.age, dog.eyecolor);

for (const key in dog) {
    console.log(dog[key])
}