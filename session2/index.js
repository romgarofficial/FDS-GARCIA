// console.log("Hello World!");

// JS Basic Function

function sayHello(){
    console.log("Hello!");
}

// function calling // Invocation

sayHello();
sayHello();
sayHello();
sayHello();

function completeName(){
    // local scoped -> fullName
    let fullName = "Juan Dela Cruz";
    console.log(fullName);
}

completeName();
// console.log(fullName); -> error not defined

// Global and Local Scope Variables

// global scope
let age = 20;

{
    // local scoped
    const pi = 3.14;
    console.log(age);
}

// accessing the variable inside the curly braces
// console.log(pi); -> error not defined

let studentName = "Mary Poppins";

function getName(){
    let age = 50;
    console.log(studentName + " age is " + age);
}

getName();

// Function with alert

function helloAlert(){
    alert("Hello World!");
}

// It is not necessary to call a function in the js file. We can also call a function in the Console Panel.

// function with prompt()

function enterName(){
    let inputName = prompt("Please enter your name.");
    console.log("Hello there, " + inputName + "!");
}
