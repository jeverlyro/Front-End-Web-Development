//Rest parameter & Spread operator

//1. Rest parameter
//Tanpa rest parameter
const func1 = (param1, param2, param3) => {
  console.log(param1, param2, param3);
};

func1("A", "B", "C");

//Menggunakan rest parameter
const func2 = (...params) => {
  console.log(params);
};

func2("A", "B", 4, "D", 5);

//Rest parameter harus berada di terkahir dalam parameter
const func3 = (param1, param2, ...params) => {
  console.log(param1, param2);
  console.log(params);
};

func3("A", "B", "C", "D", "E");

// Mini exercise
const penjumlahan = (...arr) => {
  let hasil = 0;
  arr.forEach((item) => (hasil += item));
  return hasil;
};
console.log(penjumlahan(10, 12, 20, 30));

//2. Spread operator
let numbers = [1, 2, 3, 4, 5];
console.log(numbers);
console.log(...numbers);

//Duplikasi array
let number2 = [...numbers];
numbers.push(6);
console.log(number2);

//Gabung array
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let array3 = [7, 8, 9];

let numbers3 = array1.concat(array2, array3);
let numbers4 = [...array1, ...array2, ...array3];

//Duplikasi object
const john = {
  fullName: "John Doe",
  age: 30,
};

const john2 = { ...john, address: "Manado" };

//Menggabungkan object
let obj1 = { a: 1, b: 2 };
let obj2 = { c: 3, d: 4 };

let combinedObj = { ...obj1, ...obj2 };

const phi = 3.14;
const power = 2;
let radius = 0;

const calculateArea = ({ radius, power }) => {
  return phi * Math.pow(radius, power);
};

radius = 21;
const area21 = calculateArea({ radius, power });
radius = 7;
const area7 = calculateArea({ radius, power });
console.log(`area with 21 radius: ${area21}, and area with 7 radius: ${area7}`);
