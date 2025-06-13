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


// Parameterized Functions
// Parameters are variable-like code. It can gather client/user inputs

function FullName(name){
    console.log("Welcome, " + name + "!");
}

// Function invocation with argument
FullName("Joey");

function introduceYourPet(name, breed, age){
    console.log("My pet is " + name);
    console.log("He/She is a " + breed);
    console.log("She/he is " + age + " years old.");
}

introduceYourPet("Choco", "Golden Retriever", 3);
introduceYourPet("Luna", "Aspin", 2);