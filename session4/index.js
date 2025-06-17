// console.log("Hello World!");

// Repetition Control Structure
// While Loop includes expression -> true

/*
SYNTAX:

while(expression:true){
    code block
}

*/

let count = 2;

while(count !== 0){
    console.log("While: " + count);
    count--;
}

// do-while loop

/*
SYNTAX:

do{
    code block
    iterator
}while(expression:true)

*/

let number = Number(prompt("Please enter a number"));

do{
    console.log("Do-While: " + number);
    number++;
}while(number <= 2);

// For Loop
/*
SYNTAX:
for(initialization; expression:true; iterator){
    code block
}

*/

for(let count = 0; count <= 2; count++){
    console.log("For Loop: " + count);
}

let myString = "alex";

// .length -> to check the length of a string or an array

console.log(myString.length);

console.log(myString[0]);
console.log(myString[3]);

for(let i = 0; i < myString.length; i++){
    console.log(myString[i]);
}

let myName = "AlEx";

for(let i = 0; i < myName.length; i++){
    if(
        myName[i].toLowerCase() == "a" ||
        myName[i].toLowerCase() == "e" ||
        myName[i].toLowerCase() == "i" ||
        myName[i].toLowerCase() == "o" ||
        myName[i].toLowerCase() == "u" 
    ){
        console.log("vowel");
    }else{
        console.log(myName[i]);
    }
}

// continue and break

for(let x = 0; x < 50; x++){
    if(x % 2 == 0){
        continue;
    }else if(x == 35){
        break;
    }else{
        console.log(x);
    }
}