// console.log("Hello World!");

// JS Objects
// new -> to initialize and -> new instance/duplicate
// Object() -> to recognize the variable as an object

let myComputer = new Object();
console.log(myComputer);
console.log(typeof myComputer);

let computer = {};
console.log(computer);

/*
SYNTAX:

let objectName = {
    keyA: valueA,
    keyB: valueB
}

*/

let cellphone = {
    name: "Nokia 3210",
    manufactureDate: 1999
}

console.log(cellphone);

// Comparison between array and object

let person1 = ["John", 3, true];
console.log(person1);

let person2 = {
    name: "John",
    age: 3,
    isVaccinated: true
}

console.log(person2);

// Function object constructor

function Laptop(name, manufactureDate){
    this.brand = name;
    this.manufactureDate = manufactureDate;
}

// Instance Creation using new keyword

let laptop = new Laptop("Lenovo", 2008);
console.log(laptop);

let laptop2 = new Laptop("Apple Mac", 2012);
console.log(laptop2);

// Accessing Object Properties
// Dot notation

console.log("Result from dot notation: " + laptop.brand);

// Array of Objects
let array = [laptop, laptop2];
console.log(array[1].brand);
console.log(array[0].manufactureDate);

// Initialization of properties in an empty array

let car = {};
console.log(car);

car.name = "Honda Civic";
console.log(car);
car.manufactureDate = 2019;
console.log(car);

car.name = "Dodge Charger";
console.log(car);

// Objects with Methods/Functions
let student = {
    name: "Juan Dela Cruz",
    talk: function(){
        console.log("Hello my name is " + this.name);
    }
}

console.log(student);
student.talk();

student.walk = function(){
    console.log(this.name + " walked 25 steps forward.");
}

student.walk();

// Much descriptive object
let friend = {
    firstName: "Joey",
    lastName: "Smith",
    address: {
        city: "San Fernando City",
        country: "Philippines"
    },
    emails: ["joey@ua.edu.ph", "joey@gmail.com"],
    introduce: function(){
        console.log("Hello my name is " + this.firstName + " " + this.lastName);
    }
}

console.log(friend.address.city);
console.log(friend.emails[1]);
friend.introduce();