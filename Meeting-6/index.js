//IIFE

// (function () {
//     console.log("Hello world!");
// })();

// let output = (function (fullName) {
//     return "Hello " + fullName;
// })("John Doe");
// console.log(output);

//Callback

function sayHello (callback) {
    callback();
}

sayHello(function () {
    console.log("Hello world!");
})

//With params

function sayHello (callback) {
    let result = callback("John Doe");
    return result
}

let output = sayHello(function (fullName) {
    return "Hello " + fullName;
})

console.log(output);