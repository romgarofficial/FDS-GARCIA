// INTRO TO JavaScript

/* 

HISTORY

Brendan Eich (NetScape - 1995)
Old Names of JS: Mocha, LiveScript, JavaScript
Browser Name: NetScape Navigator

*/

// JS BASICS

console.log("Hello World!");

// JS Variables and Data Types

// number
let age = 20;
console.log(age);

// string
let name = "John";
console.log(name);

// typeof -> to check the data type of a value
console.log(typeof age);
console.log(typeof name);

let temp = 38.5;
console.log(temp);
console.log(typeof temp);

// boolean
let isOverloaded = true;
console.log(isOverloaded);
console.log(typeof isOverloaded);

// Array
let students = ["Jane", "John", "Joey"];
console.log(students);

// Objects
// key-pair structure
let person = {
    name: "John Doe",
    age: 19,
    email: ["jdoe@mail.com", "john@fb.com"]
}

console.log(person);

console



.log



("Hello World!")

// Alert
alert("Hello, admin!");

// Initialization and Variables with no data
// let vs const

// initialization
let num1 = 10;
console.log(num1);

// uninitialized
let num2;
console.log(num2); //undefined

num1 = 500;
console.log(num1);
console.log(num1);
console.log(num1);

num2 = 1000;
console.log(num2);

// const -> constant variable
const height = 130;
console.log(height);

// with let variables, data can be updated

// height = 150;
// console.log(height);

const hoursInADay = 24;
const pie = 3.14;
const numOfMonths = 12;

// JS Arithmetic Operators
let x = 10;
let y = 5;

// addition
let sum = x + y;
console.log(sum);

// subtraction
let diff = x - y;
console.log(diff);

// multiplication
let prod = x * y;
console.log(prod);

// division
let quo = x / y;
console.log(quo);

// modulo
let mod = x % y;
console.log(mod);

// comparison operators
console.log(x > y);
console.log(x < y);
console.log(x >= y);
console.log(x <= y);

// Logical Operators
// AND - &&
// OR - ||

let isMarried = true;
let isLegalAge = false;

console.log("Logical AND");
console.log(isMarried && isLegalAge);

console.log("Logical OR");
console.log(isMarried || isLegalAge);

// Equality Operators
let sample1 = 10;
let sample2 = "10";
let sample3 = "John";

// ==
console.log(sample1 == sample2);
console.log(sample3 == "John");

// !=
console.log(sample1 != sample2);

// Strict Equality ===
console.log(sample1 === sample2);
console.log(sample3 === "John");

// Strictly Not Equality ===
console.log(sample1 !== sample2);

// User input
let fullName = prompt("Please enter your complete name");
console.log(fullName);

// Dynamic Sum Operation
let input1 = Number(prompt("Enter num1"));
let input2 = Number(prompt("Enter num2"));
let result = input1 + input2;
console.log(result);

console.log(typeof input1);

// concatenation
let concat1 = "Jane";
let concat2 = 10;

console.log(concat1 + " is " + concat2 + " years old.");