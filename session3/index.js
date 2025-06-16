// console.log("Hello World!");

// Selection Control Structures
//1. Conditional Statement

let num1 = 5;

if(num1 < 3){
    console.log("Hello!");
}

console.log(num1 < 3);

// for the if statement to work, the condition must be "true".

if(num1 > 1){
    console.log("If statement");
}

console.log(num1 > 1);

// else statement

if(num1 == 5){
    console.log("num1 is equal to 5");
}else{
    console.log("num1 is not equal to 5");
}

// else if
/*

if(){

}else if(){

}else if(){

}else{

}

*/

let isLegalAge = false;
let isWorking = false;

if(isLegalAge == 1 && isWorking == 1){
    console.log("user is of the legal age and working.");
}else if(isLegalAge == 1 && isWorking == 0){
    console.log("user is of the legal age and is not working.");
}else if(isLegalAge == 0 && isWorking == 1){
    console.log("user is not of the legal age but is working.");
}else{
    console.log("record cannot be assessed.")
}

// Functions with conditional Statement

function checkGender(gender){
    let formatted_gender = gender.toUpperCase();
    if(formatted_gender === 'M'){
        console.log("Male");
    }else if(formatted_gender === 'F'){
        console.log("Female");
    }else{
        console.log("Others");
    }
}

checkGender("M");

// 2. switch case statement

let color = prompt("Please enter r, g, or b for color");

switch (color){
    case 'r':
        console.log("The selected color is RED");
        break;
    case 'g':
        console.log("The selected color is GREEN");
        break;
    case 'b':
        console.log("The selected color is BLUE");
        break;
    default:
        console.log("The selected color is not recognized");
        break;
}