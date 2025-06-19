// Non-Mutator Method

let countries = ["US", "PH", "CAN", "SG", "TH", "PH", "FR", "DE"];

// indexOf()

let indexOf = countries.indexOf("PH");
console.log("indexOf: " + indexOf);

let indexOf2 = countries.indexOf("BR");
console.log("indexOf2: " + indexOf2);

// lastIndexOf

let lastIndexOf = countries.lastIndexOf("PH");
console.log("lastIndexOf: " + lastIndexOf);

let lastIndexOf2 = countries.lastIndexOf("PH", 6);
console.log("lastIndexOf2: " + lastIndexOf2);

let lastIndexOf3 = countries.lastIndexOf("PH", 3);
console.log("lastIndexOf3: " + lastIndexOf3);

// slice()

let sliceA = countries.slice(2);
console.log("result from sliceA");
console.log(sliceA);

let sliceB = countries.slice(2, 4);
console.log("result from sliceB");
console.log(sliceB);

let sliceC = countries.slice(-3);
console.log("result from sliceC");
console.log(sliceC);

// concat()
let taskA = ["drink html", "eat javascript"];
let taskB = ["inhale css", "breathe sass"];
let taskC = ["get git", "be node"];

let tasks = taskA.concat(taskB);
console.log(tasks);

let allTasks = taskA.concat(taskB, taskC);
console.log(allTasks);

let combinedTasks = allTasks.concat("smell express", "throw react");
console.log(combinedTasks);

// iteration method
// forEach()

allTasks.forEach(function(task){
    console.log(task);
})

let filteredTasks = [];

allTasks.forEach(function(task){
    if(task.length > 10){
        filteredTasks.push(task);
    }
})

console.log(filteredTasks);

let numbers = [1, 2, 3, 4, 5];

// every()

let allValid = numbers.every(function(number){
    return number < 10
})

console.log(allValid);

// some()

let someValid = numbers.some(function(number){
    return number < 4
})

console.log(someValid)

// filter

let filterValid = numbers.filter(function(number){
    return number <= 3
})

console.log(filterValid)