// //Java Script Function
// // 1. Function declaration

// function greetings(){
//     console.log("Hello world!");   
// }

// greetings();

// let greetings2 = function(){
//     console.log("Hello world!");
// }

// greetings2();

// //Parameter & Argument

// function greetings1(fullName){
//     return "Hello " + fullName;
// }

// let output = greetings1("John Doe");

// console.log(output);

// let greetings2 = function(fullName){
//     return "Hello " + fullName;
// }

// let output2 = greetings2("John Doe");
// console.log(output2);

//Global Scope & Local Scope

let x = 10;

function foo(){
    let y = 20;
    console.log(x);
    console.log(y);
    if (y > 10){
        let z = 30;
        console.log(z);
    }
}

console.log(x);